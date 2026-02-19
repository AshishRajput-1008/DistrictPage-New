"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/button";
import Link from "next/link";
import { ChevronsRight, ChevronLeft } from "lucide-react";
import LocationImage from '@/public/mera-district.webp';
import { toSlug } from "@/lib/news-api";

type CategoryItem = {
  id: number;
  nameHindi: string;
  catName: string;
  categoryimages: string;
};

type Props = {
  categories: CategoryItem[];
  isLoading?: boolean;
};

export function CategoriesNav({ categories, isLoading = false }: Props) {
  const pathname = usePathname();
  const [canScrollLeftDesktop, setCanScrollLeftDesktop] = useState(false);
  const [canScrollRightDesktop, setCanScrollRightDesktop] = useState(true);
  const [canScrollLeftMobile, setCanScrollLeftMobile] = useState(false);
  const [canScrollRightMobile, setCanScrollRightMobile] = useState(true);

  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const mobileNavRef = useRef<HTMLUListElement | null>(null);

  const checkScroll = (nav: HTMLElement | null, setLeft: any, setRight: any) => {
    if (!nav) return;
    const { scrollLeft, scrollWidth, clientWidth } = nav;
    setLeft(scrollLeft > 1);
    setRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const handleScrollAndResize = () => {
      checkScroll(desktopNavRef.current, setCanScrollLeftDesktop, setCanScrollRightDesktop);
      checkScroll(mobileNavRef.current, setCanScrollLeftMobile, setCanScrollRightMobile);
    };

    const timeoutId = setTimeout(handleScrollAndResize, 100);
    window.addEventListener("resize", handleScrollAndResize, { passive: true });

    const desktopNav = desktopNavRef.current;
    const mobileNav = mobileNavRef.current;

    desktopNav?.addEventListener("scroll", handleScrollAndResize, { passive: true });
    mobileNav?.addEventListener("scroll", handleScrollAndResize, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleScrollAndResize);
      desktopNav?.removeEventListener("scroll", handleScrollAndResize);
      mobileNav?.removeEventListener("scroll", handleScrollAndResize);
    };
  }, []);

  const scrollLeft = (target: "desktop" | "mobile") => {
    const ref = target === "desktop" ? desktopNavRef : mobileNavRef;
    if (ref.current) ref.current.scrollBy({ left: -200, behavior: "smooth" });
  };
  const scrollRight = (target: "desktop" | "mobile") => {
    const ref = target === "desktop" ? desktopNavRef : mobileNavRef;
    if (ref.current) ref.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const getCookie = (name: string) => {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? atob(match[2]) : null;
  };

  const CategoryList = ({ isMobile = false }: { isMobile?: boolean }) => {
    const selectedStates = typeof window !== "undefined"
      ? getCookie("selectedStates")
      : null;

    const selectedDistricts = typeof window !== "undefined"
      ? getCookie("selectedDistricts")
      : null;
    return (
      <ul className={`flex items-center min-w-max ${isMobile ? "" : "justify-center"}`}>
        {categories.map((item) => {
          const isState = item.nameHindi === "राज्य";
          let slug = toSlug(item.catName);
          if (isState) {
            if (selectedStates && selectedDistricts) {
              slug = "account/district-news";
            } else if (selectedStates) {
              slug = "account/select-district";
            } else {
              slug = "account/select-state";
            }
          }
          const label = isState ? "राज्य-जिले" : item.nameHindi;
          const isActive = pathname === `/${slug}`;

          return (
            <li key={item.id}>
              <Link
                href={`/${slug}`}
                className={`px-[0.5rem] md:px-4 md:py-2 text-[16px] md:text-[18px] whitespace-nowrap ${isActive
                  ? "bg-gray-200 border-b border-gray-400 text-gray-900"
                  : "bg-white dark:bg-gray-800"
                  }`}
              >
                {isState ? (
                  <span>📍{label}</span>
                ) : (
                  <>
                    <span className="">{label}</span>
                  </>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      {/* Desktop Categories */}
      <div className="hidden md:flex w-full justify-center items-center dark:bg-[#18191a] mb-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollLeft("desktop")}
          disabled={!canScrollLeftDesktop}
          className="mr-2 cursor-pointer flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Scroll navigation to the left"
        >
          <ChevronLeft className="!w-6 !h-6 dark:text-red-300" />
        </Button>

        <nav
          ref={desktopNavRef}
          className={`flex-1 overflow-x-auto px-2 md:px-1 relative ${canScrollLeftDesktop ? "fade-left" : ""}`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center py-4">
              <div className="text-gray-500">Loading categories...</div>
            </div>
          ) : (
            <ul className="flex items-center justify-center min-w-max py-1 whitespace-nowrap">
              <CategoryList />
            </ul>
          )}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollRight("desktop")}
          disabled={!canScrollRightDesktop}
          className="ml-2 cursor-pointer flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Scroll navigation to the right"
        >
          <ChevronsRight className="!w-6 !h-6 dark:text-gray-300" />
        </Button>
      </div>

      {/* Mobile Categories */}
      <div className="flex md:hidden items-center w-full dark:bg-[#18191a] shadow-sm ">
        {/* <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollLeft("mobile")}
          disabled={!canScrollLeftMobile}
          className="flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Scroll categories left"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </Button> */}

        <nav
          ref={mobileNavRef}
          className="flex-1 overflow-x-auto px-2 dark:bg-[#18191a] custom-scrollbar" style={{ marginLeft: "-15px" }}
        >
          {isLoading ? (
            <div className="flex items-center justify-center py-3">
              <div className="text-gray-400 text-sm">Loading...</div>
            </div>
          ) : (
            <ul className="flex items-center min-w-max">
              <CategoryList />
            </ul>
          )}
        </nav>

        <style jsx global>{`
  /* WebKit (Chrome, Edge, Safari) */
.custom-scrollbar::-webkit-scrollbar {
  height: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #e5e7eb;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.6);
  border-radius: 10px;
  transition: background 0.2s ease;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

/* Firefox */
.custom-scrollbar {
  scrollbar-width: auto;
  scrollbar-color: #9ca3af #e5e7eb;
}

`}</style>

        {/* <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollRight("mobile")}
          disabled={!canScrollRightMobile}
          className="flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed px-1 bg-gray-200"
          aria-label="Scroll categories right"
        >
          <ChevronsRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </Button> */}
      </div>
    </>
  );
}