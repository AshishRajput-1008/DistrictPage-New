"use client";

import NewsMetaBar from "@/components/NewsMetaBar";
import ShareButtons from "@/components/ShareButtons";
import { Card, CardContent } from "@/components/ui/card";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import { useState, useEffect } from "react";

export default function SpecialNewsClient({ mixedNews }: { mixedNews: any[] }) {
    const [mounted, setMounted] = useState(false);
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://mapi.sadaivsatya.com/";


    console.log(mixedNews,"mixedNews")


    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Agar mixedNews empty hai to kuch mat dikhao
    if (!mixedNews || mixedNews.length === 0) {
        return null;
    }

    // Split news into blocks - exactly like your original design
    const blockA = mixedNews.slice(0, 3); // First 3 cards
    const blockB = mixedNews.slice(3, 7); // Next 3 for right sidebar
    const blockC = mixedNews.slice(6, 8); // Last 2 cards after ad

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleDateString("hi-IN", { month: "long" });
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* LEFT: ज़िले की प्रमुख खबरें */}
            <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-[#b30000]"></div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        ज़िले की प्रमुख खबरें
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* First 3 cards - exactly like your original design */}
                    {blockA.map((news) => (
                        <Card
                            key={news.NewsId}
                            className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <div className="relative">
                                <img
                                    src={`${apiBaseUrl}${news.ThumbNail}`}
                                    alt={news.NewsHeading}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between text-[14px] text-gray-500 mb-2">
                                    <div className="flex items-center gap-1">
                                        <span>{formatDate(news.UpdatedDate)}</span>
                                    </div>
                                    <span className="text-[13px]">
                                        {news.ViewCount || 0} views
                                    </span>
                                </div>

                                <h5 className="text-[13px] md:text-[15px] font-bold text-gray-900 line-clamp-3 mb-2 hover:text-red-600 cursor-pointer">
                                    {news.NewsTag && (
                                        <span className="text-blue-900">{news.NewsTag}:</span>
                                    )}{" "}
                                    {news.NewsHeading}
                                </h5>

                                <div className="flex justify-between text-[13px] text-gray-500 opacity-80">
                                    <NewsMetaBar
                                        variant="solid"
                                        newsCategory={news.DistrictName}
                                        newsCatinhindi={news.DistrictNameInHindi || news.NewsCategory}
                                        newsSubCategory={news.StateName}
                                        newsSlug={news.NewsSlug}
                                    />

                                    <ShareButtons
                                        shareUrl={news.NewsSlug}
                                        size="small"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {/* Advertisement Card - 4th position - exactly like your original design */}
                    <Card className="overflow-hidden border-0 shadow-md bg-gray-50 relative">
                        <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-[10px] text-gray-600 font-medium z-10">
                            विज्ञापन
                        </div>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-full"
                        >
                            <img
                                src="https://picsum.photos/300/300?random=201"
                                alt="Advertisement"
                                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                                style={{ minHeight: "276px" }}
                            />
                        </a>
                    </Card>

                    {/* Last 2 cards - exactly like your original design but with blockC data */}
                    {blockC.map((news) => (
                        <Card
                            key={news.NewsId}
                            className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <div className="relative">
                                <img
                                    src={`${apiBaseUrl}${news.ThumbNail}`}
                                    alt={news.NewsHeading}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between text-[14px] text-gray-500 mb-2">
                                    <div className="flex items-center gap-1">
                                        <span>{formatDate(news.UpdatedDate)}</span>
                                    </div>
                                    <span className="text-[13px]">
                                        {news.ViewCount || 0} views
                                    </span>
                                </div>

                                <h5 className="text-[13px] md:text-[15px] font-bold text-gray-900 line-clamp-3 mb-2 hover:text-red-600 cursor-pointer">
                                    {news.NewsTag && (
                                        <span className="text-blue-900">{news.NewsTag}:</span>
                                    )}{" "}
                                    {news.NewsHeading}
                                </h5>

                                <div className="flex justify-between text-[13px] text-gray-500 opacity-80">
                                     <NewsMetaBar
                                        variant="solid"
                                        newsCategory={news.DistrictName}
                                        newsCatinhindi={news.DistrictNameInHindi || news.NewsCategory}
                                        newsSubCategory={news.StateName}
                                        newsSlug={news.NewsSlug}
                                    />

                                    <ShareButtons
                                        shareUrl={news.NewsSlug}
                                        size="small"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* RIGHT: TRENDING SECTION */}
            <div className="lg:col-span-4">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-[#b30000]"></div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        ट्रेंडिंग खबरें
                    </h2>
                </div>

                <div className="space-y-4">
                    {blockB.map((news) => (
                        <Card
                            key={news.NewsId}
                            className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
                        >
                            <CardContent className="p-0">
                                <div className="flex gap-3">
                                    <img
                                        src={`${apiBaseUrl}${news.ThumbNail}`}
                                        alt={news.NewsHeading}
                                        className="w-24 h-24 object-cover flex-shrink-0"
                                    />
                                    <div className="p-3 flex-1">
                                        <h3 className="font-semibold text-sm leading-tight mb-2 hover:text-[#b30000] cursor-pointer transition-colors line-clamp-2">
                                            {news.NewsHeading}
                                        </h3>

                                        <p className="text-xs text-gray-500 mb-2">
                                            {timeAgoInHindi(news.UpdatedDate)}
                                        </p>

                                        <div className="flex justify-between text-[13px] text-gray-500 opacity-80">
                                            <NewsMetaBar
                                        variant="solid"
                                        newsCategory={news.DistrictName}
                                        newsCatinhindi={news.DistrictNameInHindi || news.NewsCategory}
                                        newsSubCategory={news.StateName}
                                        newsSlug={news.NewsSlug}
                                    />
                                            <ShareButtons
                                                shareUrl={news.NewsSlug}
                                                size="small"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {/* AD BANNER BELOW TRENDING */}
                    <div className="mt-6">
                        <Card className="overflow-hidden border-0 shadow-md bg-gray-50 relative">
                            <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-[10px] text-gray-600 font-medium z-10">
                                विज्ञापन
                            </div>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <img
                                    src="https://picsum.photos/728/90?random=1"
                                    alt="Advertisement Banner"
                                    className="w-full object-cover"
                                    style={{ height: "250px" }}
                                />
                            </a>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}