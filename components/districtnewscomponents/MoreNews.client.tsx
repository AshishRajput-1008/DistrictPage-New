"use client";

import NewsMetaBar from "@/components/NewsMetaBar";
import ShareButtons from "@/components/ShareButtons";
import { Card, CardContent } from "@/components/ui/card";
import timeAgoInHindi from "@/types/TimeAgoInHindi";

export default function MoreNewsClient({
    stackedNews = [],
}: {
    stackedNews: any[];
}) {
    const apiBaseUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL || "https://mapi.sadaivsatya.com/";

    const districtName = "भोपाल";

    console.log(stackedNews, "stackedNews");

    if (!stackedNews.length) return null;

    const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "").trim();

    return (
        <div>
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-[#b30000]"></div>
                    <h2 className="text-2xl sm:text-2xl font-bold text-gray-900">
                        और खबरें – {districtName}
                    </h2>
                </div>

                <div className="space-y-4">
                    {stackedNews.map((news, idx) => (
                        <div key={idx}>
                            <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
                                <CardContent className="p-0">
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                        <img
                                            src={apiBaseUrl + news.ThumbNail}
                                            alt={news.NewsHeading}
                                            className="w-full sm:w-48 h-48 sm:h-36 object-cover flex-shrink-0 sm:my-auto"
                                        />

                                        <div className="p-4 flex-1">
                                            <div className="text-sm text-gray-500 mb-2">
                                                {timeAgoInHindi(news.UpdatedDate)}
                                            </div>

                                            <h3 className="font-bold text-base sm:text-lg mb-1 leading-tight hover:text-[#b30000] cursor-pointer">
                                                {news.NewsHeading}
                                            </h3>

                                            {news.NewsDetails && (
                                                <p className="text-sm text-gray-600 mb-2 line-clamp-2 leading-snug">
                                                    {stripHtml(news.NewsDetails)}
                                                </p>
                                            )}

                                            <div className="flex justify-between text-[13px] text-gray-500">
                                                <NewsMetaBar
                                                    variant="solid"
                                                    newsCategory={news.DistrictName}
                                                    newsCatinhindi={news.DistrictNameInHindi}
                                                    newsSubCategory={news.StateName}
                                                    newsSlug={news.Slug}
                                                />

                                                <ShareButtons shareUrl={news.Slug} size="small" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* ADS (same place) */}
                            {idx === 1 && (
                                <div className="bg-gray-200 rounded-lg p-4 my-4 text-center border-2 border-dashed">
                                    <img
                                        title="random"
                                        src="https://picsum.photos/998/90?random=401"
                                        className="w-full"
                                    />
                                </div>
                            )}

                            {idx === 3 && (
                                <div className="bg-gray-200 rounded-lg p-4 my-4 text-center border-2 border-dashed">
                                    <img
                                        title="random"
                                        src="https://picsum.photos/998/90?random=404"
                                        className="w-full"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}