// components/BollywoodReelsClient.tsx
"use client";

import { useRef, useState, useEffect, type MouseEvent } from "react";
import { VideoItem } from "@/types/video";
import { EyeIcon } from "lucide-react";
import { toSlug } from "@/lib/news-api";

type VideoUI = VideoItem & {
    hasVideo: boolean;
    duration: string;
};

export default function BollywoodReelsClient({ videos }: { videos: VideoUI[] }) {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    };

    const scrollLeft = () =>
        scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });

    const scrollRight = () =>
        scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });

    const handleVideoHover = (e: MouseEvent<HTMLAnchorElement>, play: boolean) => {
        const video = e.currentTarget.querySelector("video");
        if (!video) return;
        if (play) video.play().catch(() => { });
        else {
            video.pause();
            video.currentTime = 0;
        }
    };

    return (
        <div className="max-w-[1350px] py-2 md:py-6 pb-2 bg-white">
            <div className="flex justify-between items-start md:mb-2">
                {/* <div className="mb-6 pb-3 border-b-2 border-[#7059ff]"> */}
                <div className="mb-6 pb-3 border-b-2">
                    <h2 className="text-2xl md:text-3xl font-500 text-gray-900 relative inline-block">
                        {/* <span className="text-[#7059ff]">ट्रेंडिंग</span> REELS */}
                        <span className="">ट्रेंडिंग</span> REELS
                        <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#000000] to-transparent"></div>
                        {/* <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#7059ff] to-transparent"></div> */}
                    </h2>
                </div>
                <a
                    href="/videos"
                    className="text-[#000000] no-underline mr-4 text-[12px] sm:text-sm font-500 px-3 sm:px-5 py-1.5 sm:py-2 border border-[#000000] rounded transition-all duration-300 hover:bg-[#000000] hover:text-white mt-1"
                >
                    सभी देखें
                </a>
                {/* <a
                    href="/videos"
                    className="text-[#7059ff] no-underline mr-4 text-[12px] sm:text-sm font-500 px-3 sm:px-5 py-1.5 sm:py-2 border border-[#7059ff] rounded transition-all duration-300 hover:bg-[#7059ff] hover:text-white mt-1"
                >
                    सभी देखें
                </a> */}
            </div>

            <div className="relative overflow-hidden">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-2 md:gap-3 overflow-x-auto scroll-smooth scrollbar-hide"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {videos.map((video, index) => {
                        const category = toSlug(video.category || "अन्य");
                        const subcategory = toSlug(video.subcategory || "सामान्य");
                        const videoLink = subcategory
                            ? `/${category}/${subcategory}/video/${video.slug}?mode=reel`
                            : `/${category}/${subcategory}/news/${video.slug}`;
                        return (
                            <a
                                key={video.id}
                                href={videoLink}
                                className="relative flex-shrink-0 w-[calc(28%-4px)] md:w-[200px] h-[160px] md:h-[350px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] no-underline group"
                                onMouseEnter={(e) => handleVideoHover(e, true)}
                                onMouseLeave={(e) => handleVideoHover(e, false)}
                            >
                                {!video.hasVideo && (
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#667eea] to-[#764ba2] z-[1]" />
                                )}

                                <video
                                    ref={(el) => { videoRefs.current[index] = el; }}
                                    className="w-full h-full object-cover bg-black"
                                    muted
                                    loop
                                    playsInline
                                    poster={video.thumbnail}
                                >
                                    {video.hasVideo && (
                                        <source src={video.videoUrl} type="video/mp4" />
                                    )}
                                </video>

                                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10" />

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-20">
                                    <svg
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                                    >
                                        <circle
                                            cx="24"
                                            cy="24"
                                            r="20"
                                            fill="white"
                                            fillOpacity="0.9"
                                        />
                                        <path
                                            d="M31.4 22.6L20.4 16.2C19.4 15.6 18 16.4 18 17.6V30.2C18 31.4 19.4 32.2 20.4 31.6L31.4 25.2C32.4 24.8 32.4 23.2 31.4 22.6Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>

                                {/* <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-0.5  text-[11px] md:text-xs font-500 backdrop-blur-sm m-0 z-20">
                                    <EyeIcon className="w-4 h-4 inline-block mr-1" /> {video.viewCount}
                                </div> */}
                            </a>
                        )
                    }
                    )}
                </div>

                {/* Left Navigation Button - Desktop Only */}
                {!isMobile && showLeftButton && (
                    <button
                        type="button"
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-50% w-10 h-10 cursor-pointer flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-gray-100 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] z-30"
                        aria-label="Scroll left"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 rotate-90"
                        >
                            <path
                                d="M6 9.57398C6 9.31798 6.098 9.06198 6.293 8.86698C6.684 8.47598 7.316 8.47598 7.707 8.86698L11.999 13.16L16.293 8.86698C16.684 8.47598 17.317 8.47598 17.707 8.86698C18.098 9.25798 18.098 9.88998 17.707 10.281L12.954 15.033C12.427 15.558 11.571 15.558 11.045 15.034L6.293 10.281C6.098 10.086 6 9.82998 6 9.57398Z"
                                fill="#333"
                            />
                        </svg>
                    </button>
                )}

                {/* Right Navigation Button - Desktop Only */}
                {!isMobile && showRightButton && (
                    <button
                        type="button"
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rrounded-50% w-10 h-10 cursor-pointer flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-gray-100 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] z-30"
                        aria-label="Scroll right"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 rotate-270"
                        >
                            <path
                                d="M6 9.57398C6 9.31798 6.098 9.06198 6.293 8.86698C6.684 8.47598 7.316 8.47598 7.707 8.86698L11.999 13.16L16.293 8.86698C16.684 8.47598 17.317 8.47598 17.707 8.86698C18.098 9.25798 18.098 9.88998 17.707 10.281L12.954 15.033C12.427 15.558 11.571 15.558 11.045 15.034L6.293 10.281C6.098 10.086 6 9.82998 6 9.57398Z"
                                fill="#333"
                            />
                        </svg>
                    </button>
                )}
            </div>
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    );
}
