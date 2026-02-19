"use client";

import { memo } from "react";
import Image from "next/image";
import NewsMetaBar from "./NewsMetaBar";
import ShareButtons from "./ShareButtons";
import { NewsArticle } from "@/types";
import { toSlug } from "@/lib/news-api";
import SmartLink from "./SmartLink";
import timeAgoInHindi from "@/Utility/TimeAgoInHindi";
import { getCategoryColor } from "@/lib/getCategoryColor";
import ClientOnlyGifImage from "./ClientOnlyGifImage";

const isGifFile = (url?: string | null) => (url ? /\.gif$/i.test(url) : false);

function CyberCrimeClient({ data }: { data: NewsArticle[] }) {
    return (
        <section className="bg-white">
            <div className="max-w-[1350px] py-4 pb-2">
                <div className="mb-4 border-b-2 border-[#dc2626] inline-block">
                    <h2 className="text-2xl md:text-[32px] font-medium">
                        <span className="text-[#dc2626]">अपराध</span> की दुनिया
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-1">
                    {data.map((news, i) => {
                        const category = toSlug(news.newsCategory || "general");
                        const subCategory = toSlug(news.newsSubCategory || "");

                        const URL = subCategory
                            ? `/${category}/${subCategory}/news/${news.newsSlug}`
                            : `/${category}/news/${news.newsSlug}`;
                        const catColor = getCategoryColor(news.newsCategory);

                        return (
                            <article
                                key={news.newsId}
                                className="bg-white border border-gray-200 flex flex-col"
                            >
                                <SmartLink
                                    href={URL}
                                    id={news.newsId}
                                    className="flex flex-col h-full"
                                >
                                    <div className="relative w-full aspect-[4/3] bg-gray-100">
                                        <ClientOnlyGifImage
                                            article={{
                                                thumbnail: news.thumbnail,
                                                newsHeading: news.newsHeading,
                                            }}
                                            dataType={news.dataType}
                                            apiBaseUrl="https://mapi.sadaivsatya.com"
                                        />
                                    </div>

                                    <div className="p-2 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <NewsMetaBar
                                                variant="solid"
                                                newsCategory={news.newsCategory}
                                                newsCatinhindi={
                                                    news.catNameInHindi === "अपराध की दुनिया"
                                                        ? "अपराध"
                                                        : news.catNameInHindi || "अपराध"
                                                }
                                                newsSubCategory={news.newsSubCategory || ""}
                                                newsSlug={news.newsSlug || ""}
                                            />
                                            <ShareButtons shareUrl={URL} size="small" />
                                        </div>

                                        <h3 className="text-[16px] md:text-[18px] font-medium leading-[1.45] mb-2 line-clamp-3">
                                            <span style={{ color: catColor }}>{news.newsTag}: </span>
                                            {news.newsHeading}
                                        </h3>
                                        {timeAgoInHindi(news.updatedDate)}
                                        {/* <TimeAgoSafe date={news.updatedDate} /> */}
                                    </div>
                                </SmartLink>

                                <div className="hidden md:block px-3 pb-2">
                                    <ShareButtons shareUrl={URL} size="small" />
                                </div>
                            </article>

                        );
                    })}
                </div>
            </div>

            <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </section>
    );
}

export default memo(CyberCrimeClient);
