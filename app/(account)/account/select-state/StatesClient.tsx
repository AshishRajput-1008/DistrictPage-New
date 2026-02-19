"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import '@/app/globals.css';
import { ArrowLeft, MapPin, ChevronRight } from "lucide-react";
import type { StateItem } from "./page";
import { getUserSelections } from "@/lib/getUserSelections";

export default function StatesClient({
    states,
    selections,
}: {
    states: StateItem[];
    selections: { districts: string[]; states: string[] };
}) {
    const [selected, setSelected] = useState<string[]>([]);
    const router = useRouter();
    const apibase = "https://mapi.sadaivsatya.com/";

    useEffect(() => {
    if (selections.states?.length) {
      setSelected(selections.states);
      return;
    }

    const saved = localStorage.getItem("selectedStates");
    if (saved) {
      try {
        setSelected(JSON.parse(saved));
      } catch { }
    }
  }, [selections]);

    const toggleSelection = (stateId: string) => {
        setSelected((prev) => {
            const updated = prev.includes(stateId)
                ? prev.filter((i) => i !== stateId)
                : [...prev, stateId];

            localStorage.setItem("selectedStates", JSON.stringify(updated));
            return updated;
        });
    };


    const handleBack = () => {
        router.back();
    };

    const handleNext = () => {
        const selectedStateIds = selected.join(",");

        router.push(`/account/select-district?stateIds=${selectedStateIds}`);
    };

    return (
        <div className="bg-gray-50 w-full h-screen flex flex-col">
            {/* Header */}
            <div className="bg-white border-b p-4 shrink-0 shadow-sm">
                <div className="max-w-6xl mx-auto">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <div className="w-6 h-6 flex items-center justify-center shrink-0">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium">राज्य चुनें {selected.length > 0 && ("(" + selected.length + ")")}</span>
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto">
                <div className="max-w-6xl mx-auto px-4 py-6 md:px-8 md:py-8">
                    {/* Grid Layout */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 pb-24">
                        {states.map((s) => {
                            const isActive = selected.includes(s.stateid);

                            return (
                                <button
                                    key={s.stateid}
                                    onClick={() => toggleSelection(s.stateid)}
                                    className={`group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${isActive
                                        ? "ring-4 ring-[#b91c1c] scale-[0.98]"
                                        : "hover:scale-[1.02]"
                                        }`}
                                >
                                    {/* Image Container */}
                                    <div className="relative h-32 md:h-40 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                        <Image
                                            src={apibase + s.stateImage}
                                            alt={s.nameHindi}
                                            fill
                                            className="object-cover "
                                            unoptimized
                                        />

                                        {/* Overlay gradient */}
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${isActive
                                                ? "from-[#b91c1c]/80 via-[#b91c1c]/40 to-transparent opacity-100"
                                                : "from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100"
                                                }`}
                                        />

                                        {/* Selection Badge */}
                                        {isActive && (
                                            <div className="absolute top-3 right-3 bg-white text-[#b91c1c] rounded-full p-2 shadow-lg animate-in zoom-in duration-200">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={3}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    {/* Text Content */}
                                    <div className="p-4">
                                        <h3
                                            className={`font-bold text-base md:text-lg text-center transition-colors ${isActive
                                                ? "text-[#b91c1c]"
                                                : "text-gray-800 group-hover:text-[#b91c1c]"
                                                }`}
                                        >
                                            {s.nameHindi}
                                        </h3>
                                    </div>


                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Fixed Bottom Button */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-50">
                <div className="max-w-6xl mx-auto px-4 py-4 md:px-8 md:py-5">
                    <button
                        onClick={handleNext}
                        disabled={selected.length === 0}
                        className={`w-full flex items-center justify-center gap-3 py-4 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 ${selected.length > 0
                            ? "bg-gradient-to-r from-[#b91c1c] to-[#dc2626] hover:from-[#991b1b] hover:to-[#b91c1c] text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                            }`}
                    >
                        <span>आगे बढ़ें</span>
                        {selected.length > 0 && (
                            <ChevronRight className="w-5 h-5 animate-pulse" />
                        )}
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes zoom-in {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-in {
                    animation: zoom-in 0.2s ease-out;
                }
            `}</style>
        </div>
    );
}