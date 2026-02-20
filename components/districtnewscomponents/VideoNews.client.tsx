"use client";

import { Button } from "@/components/ui/button";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import { Play, ChevronRight } from "lucide-react";

export default function VideoNewsClient({
    videoNews,
}: {
    videoNews: any[];
}) {
    const apiBaseUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL || "https://mapi.sadaivsatya.com";

    return (
        <div>
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6 gap-3">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                        <div className="w-1 h-6 sm:h-8 bg-[#b30000] flex-shrink-0"></div>
                        <h2 className="text-2xl sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                            वीडियो
                        </h2>
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        className="text-[#b30000] border-[#b30000] hover:bg-[#b30000] hover:text-white text-xs sm:text-sm whitespace-nowrap flex-shrink-0"
                    >
                        <span className="hidden sm:inline">सभी देखें</span>
                        <span className="sm:hidden">सभी</span>
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                    </Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {videoNews.map((video, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-lg mb-2 sm:mb-3 shadow-md">
                                <img
                                    src={`${apiBaseUrl}${video.ThumbNail}`}
                                    alt={video.NewsHeading}
                                    className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                                />

                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-b from-transparent to-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                                        <Play
                                            className="w-4 h-4 sm:w-6 sm:h-6 text-white ml-0.5 sm:ml-1"
                                            fill="white"
                                        />
                                    </div>
                                </div>

                                <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-black/80 text-white text-[10px] sm:text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                                    {timeAgoInHindi(video.UpdatedDate)}
                                </div>
                            </div>

                            <h3 className="text-[16px]">
                                <span className="text-gray-900 font-700">{video.NewsTag}{": "}</span>
                                <span>{video.NewsHeading}</span>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
