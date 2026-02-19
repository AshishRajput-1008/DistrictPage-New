"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { toSlug } from "@/lib/news-api";

type SubCategoryItem = {
  nameinHindi: string;
  subCat_Name: string;
  cat_Name: string;
};

type Props = {
  subCategories: SubCategoryItem[];
};;

export default function TrendingClient({ subCategories }: Props) {
  const [isPausedDesktop, setIsPausedDesktop] = useState(false);
  const [isPausedMobile, setIsPausedMobile] = useState(false);

  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  const scrollIntervalDesktop = useRef<NodeJS.Timeout | null>(null);
  const scrollIntervalMobile = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutDesktop = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutMobile = useRef<NodeJS.Timeout | null>(null);

  const desktopLoop = [...subCategories, ...subCategories]; // only desktop
  const mobileLoop = subCategories; // mobile me NO duplicate

  const startAutoScroll = useCallback((
    ref: React.RefObject<HTMLDivElement>,
    intervalRef: React.MutableRefObject<NodeJS.Timeout | null>,
    isPaused: boolean
  ) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (!ref.current || isPaused) return;

      const container = ref.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      // Smooth loop: reset to start when reaching the end
      if (scrollLeft >= maxScroll - 5) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 2;
      }
    }, 50);
  }, []);

  // Desktop auto-scroll
  useEffect(() => {
    startAutoScroll(desktopNavRef, scrollIntervalDesktop, isPausedDesktop);
    return () => {
      if (scrollIntervalDesktop.current) {
        clearInterval(scrollIntervalDesktop.current);
      }
    };
  }, [startAutoScroll, isPausedDesktop]);

  // Mobile auto-scroll
  useEffect(() => {
    startAutoScroll(mobileNavRef, scrollIntervalMobile, isPausedMobile);
    return () => {
      if (scrollIntervalMobile.current) {
        clearInterval(scrollIntervalMobile.current);
      }
    };
  }, [startAutoScroll, isPausedMobile]);

  // Handle user interaction with auto-resume
  const handleInteraction = (
    setIsPaused: React.Dispatch<React.SetStateAction<boolean>>,
    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>
  ) => {
    setIsPaused(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutDesktop.current) clearTimeout(pauseTimeoutDesktop.current);
      if (pauseTimeoutMobile.current) clearTimeout(pauseTimeoutMobile.current);
    };
  }, []);

  // Duplicate items for seamless loop
  // const duplicatedCategories = [...subCategories, ...subCategories];
  return (
    <>
      <div className="hidden lg:block border-b border-gray-200">
        <div className="w-full px-3 py-2 flex items-center gap-[10px]">

          <a
            href="#"
            className="flex-shrink-0 bg-[#b60700] text-white px-3 py-[6px] rounded whitespace-nowrap hover:bg-red-700 transition-colors text-xs font-medium"
          >
            ट्रेंडिंग
          </a>

          <div
            ref={desktopNavRef}
            className="flex-1 overflow-x-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              cursor: "grab",
            }}
            onMouseEnter={() => handleInteraction(setIsPausedDesktop, pauseTimeoutDesktop)}
            onMouseLeave={() => handleInteraction(setIsPausedDesktop, pauseTimeoutDesktop)}
            onTouchStart={() => handleInteraction(setIsPausedDesktop, pauseTimeoutDesktop)}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="flex items-center gap-2 whitespace-nowrap">
              {desktopLoop.map((subcat, index) => (
                <a
                  key={`${subcat.subCat_Name}-${index}`}
                  href={`/${toSlug(subcat.cat_Name)}/${toSlug(subcat.subCat_Name)}`}
                  className="inline-block px-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700 hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-200 shadow-sm flex-shrink-0"
                  onClick={() => handleInteraction(setIsPausedDesktop, pauseTimeoutDesktop)}
                >
                  {subcat.nameinHindi}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Trending - Full Width with 12px padding */}
      <div className="lg:hidden border-b border-gray-200">
        <div className="w-full px-3 py-2 flex items-center gap-3">
          <div className="flex-shrink-0 text-red-600 font-medium text-sm">
            ट्रेंडिंग
          </div>

          <div
            ref={mobileNavRef}
            className="flex-1 overflow-x-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              cursor: "grab",
              WebkitOverflowScrolling: "touch",
            }}
            onMouseEnter={() => handleInteraction(setIsPausedMobile, pauseTimeoutMobile)}
            onMouseLeave={() => handleInteraction(setIsPausedMobile, pauseTimeoutMobile)}
            onTouchStart={() => handleInteraction(setIsPausedMobile, pauseTimeoutMobile)}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="flex items-center gap-2 whitespace-nowrap">
              {mobileLoop.map((subcat, index) => (
                <a
                  key={`${subcat.subCat_Name}-${index}`}
                  href={`/${toSlug(subcat.cat_Name)}/${toSlug(subcat.subCat_Name)}`}
                  className="inline-block px-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700 active:bg-red-50 active:border-red-300 active:text-red-600 transition-all duration-200 shadow-sm flex-shrink-0"
                  onClick={() => handleInteraction(setIsPausedMobile, pauseTimeoutMobile)}
                >
                  {subcat.nameinHindi}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}