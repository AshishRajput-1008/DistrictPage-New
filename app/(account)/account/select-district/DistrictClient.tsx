"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowLeft, Check, Plus } from "lucide-react";
import type { DistrictItem } from "./page";
import '@/app/globals.css';

interface GroupedDistricts {
  stateId: string;
  stateName: string;
  districts: DistrictItem[];
  selections: { districts: string[]; states: string[] };
}

export default function DistrictClient({ districts, stateIds, states, selections }: {
  districts: DistrictItem[];
  stateIds: string;
  states?: { stateid: string; nameHindi: string }[];
  selections: { districts: string[]; states: string[] };
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollThumbHeight, setScrollThumbHeight] = useState(0);
  const [scrollThumbTop, setScrollThumbTop] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const setCookie = (name: string, value: string) => {
    document.cookie = `${name}=${btoa(value)}; path=/; max-age=31536000`;
  };

  const clearLocalSelections = () => {
    localStorage.removeItem("selectedDistricts");
    localStorage.removeItem("selectedStates");
  };

  useEffect(() => {
    if (selections.districts?.length) {
      setSelected(selections.districts);
      return;
    }

    const saved = localStorage.getItem("selectedDistricts");
    if (saved) {
      try {
        setSelected(JSON.parse(saved));
      } catch { }
    }
  }, [selections]);


  const toggleSelection = (districtId: string) => {
    setSelected((prev) => {
      const updated = prev.includes(districtId)
        ? prev.filter((i) => i !== districtId)
        : [...prev, districtId];

      localStorage.setItem("selectedDistricts", JSON.stringify(updated));
      return updated;
    });
  };

  const handleBack = () => {
    router.refresh();
    router.back();
  };

  const handleNext = () => {
    const districts =
      localStorage.getItem("selectedDistricts") ||
      JSON.stringify(selections.districts || []);

    const states =
      localStorage.getItem("selectedStates") ||
      JSON.stringify(selections.states || []);

    if (!districts || !states) return;

    setCookie("selectedDistricts", districts);
    setCookie("selectedStates", states);

    clearLocalSelections();
    router.push("/account/district-news");
  };


  const groupedDistricts = useMemo(() => {
    const groups: { [key: string]: DistrictItem[] } = {};

    districts.forEach((district) => {
      if (!groups[district.stateId]) {
        groups[district.stateId] = [];
      }
      groups[district.stateId].push(district);
    });

    const result: GroupedDistricts[] = Object.entries(groups).map(
      ([stateId, dists]) => {
        const stateName =
          states?.find((s) => s.stateid === stateId)?.nameHindi ||
          dists[0]?.nameHindi?.split(" ")[0] ||
          stateId;

        return {
          stateId,
          stateName,
          districts: dists.sort((a, b) =>
            a.nameHindi.localeCompare(b.nameHindi)
          ),
          selections: selections, // Add the selections prop here
        };
      }
    );

    return result;
  }, [districts, states, selections]); // Don't forget to add selections to dependencies

  const filteredGroups = useMemo(() => {
    if (!searchQuery) return groupedDistricts;

    return groupedDistricts
      .map((group) => ({
        ...group,
        districts: group.districts.filter(
          (district) =>
            district.nameHindi.includes(searchQuery) ||
            district.districtName
              .toLowerCase()
              .includes(searchQuery.toLowerCase()),
        ),
      }))
      .filter((group) => group.districts.length > 0);
  }, [groupedDistricts, searchQuery]);

  useEffect(() => {
    const updateScrollbar = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;

      const canScroll = scrollHeight > clientHeight;
      setIsScrollable(canScroll);

      if (canScroll) {
        const thumbHeight = Math.max((clientHeight / scrollHeight) * clientHeight, 40);
        setScrollThumbHeight(thumbHeight);

        const maxScroll = scrollHeight - clientHeight;
        const scrollPercentage = scrollTop / maxScroll;
        const maxThumbTop = clientHeight - thumbHeight;
        const thumbTop = scrollPercentage * maxThumbTop;
        setScrollThumbTop(thumbTop);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      updateScrollbar();
      container.addEventListener('scroll', updateScrollbar);
      window.addEventListener('resize', updateScrollbar);

      return () => {
        container.removeEventListener('scroll', updateScrollbar);
        window.removeEventListener('resize', updateScrollbar);
      };
    }
  }, [filteredGroups]);

  return (
    <div className="bg-white w-full md:w-[500px] h-screen md:h-[90vh] md:rounded-xl shadow-xl flex flex-col relative overflow-hidden">
      <div className="p-4 border-b shrink-0 bg-white z-10">
        <h2 className="font-bold text-xl md:text-2xl flex items-center gap-3 mb-4">
          <ArrowLeft
            className="w-6 h-6 cursor-pointer hover:text-[#b91c1c] transition-colors"
            onClick={handleBack}
          />
          <span>जिला चुनें</span>
        </h2>

        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="जिला खोजें"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b91c1c]"
          />
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="grow overflow-y-auto overflow-x-hidden px-4 py-4 pb-32 md:pb-24"
        style={{
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain'
        }}
      >
        <style jsx global>{`
          /* Hide scrollbar on mobile, show on desktop */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          /* Desktop scrollbar */
          @media (min-width: 768px) {
            .scrollbar-show::-webkit-scrollbar {
              display: block;
              width: 8px;
            }

            .scrollbar-show::-webkit-scrollbar-track {
              background: #f3f4f6;
              border-radius: 10px;
            }

            .scrollbar-show::-webkit-scrollbar-thumb {
              background: #b91c1c;
              border-radius: 10px;
              border: 2px solid #f3f4f6;
            }

            .scrollbar-show::-webkit-scrollbar-thumb:hover {
              background: #991b1b;
            }
            
            .scrollbar-show {
              -ms-overflow-style: auto;
              scrollbar-width: thin;
              scrollbar-color: #b91c1c #f3f4f6;
            }
          }
        `}</style>

        {filteredGroups.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">कोई जिला नहीं मिला</p>
          </div>
        ) : (
          <div className="space-y-6 pb-4">
            {filteredGroups.map((group, groupIndex) => (
              <div key={group.stateId} className="mb-2 last:mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3 sticky top-0 bg-white py-2 z-[5]">
                  {group.stateName}
                </h3>

                <div className="flex flex-wrap gap-2 mb-2">
                  {group.districts.map((district) => {
                    const isActive = selected.includes(district.districtId);

                    return (
                      <button
                        key={district.id}
                        onClick={() => toggleSelection(district.districtId)}
                        className={`px-2 py-1 rounded-full text-base font-medium transition-all inline-flex items-center gap-2 ${isActive
                          ? "bg-white border-2 border-[#b91c1c] text-[#b91c1c]"
                          : "bg-white border border-gray-300 text-gray-900 hover:border-gray-400"
                          }`}
                      >
                        <span className="text-[14px]">{district.nameHindi}</span>
                        {isActive ? (
                          <Check className="w-4 h-4 stroke-[3]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2]" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {groupIndex < filteredGroups.length - 1 && (
                  <hr className="border-t border-gray-200 my-2" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {isScrollable && (
        <div className="fixed right-0 top-[160px] bottom-[90px] w-2 md:hidden z-30 bg-gray-200/50">
          <div
            className="absolute right-0 w-full bg-[#b91c1c] rounded-full transition-all duration-100 ease-out"
            style={{
              height: `${scrollThumbHeight}px`,
              top: `${scrollThumbTop}px`,
            }}
          />
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 md:absolute p-4 bg-white border-t shadow-lg md:shadow-none md:rounded-b-xl z-20 md:w-[500px] md:mx-auto">
        <button
          className={`w-full py-3.5 rounded-lg font-bold text-lg transition-all ${selected.length > 0
            ? "bg-[#b91c1c] hover:bg-[#991b1b] text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          disabled={
            selected.length === 0 && selections.districts.length === 0
          }
          onClick={handleNext}
        >
          आगे बढ़ें
        </button>
      </div>
    </div>
  );
}