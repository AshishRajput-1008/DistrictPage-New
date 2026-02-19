"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "./ShareButtons";
import NewsMetaBar from "./NewsMetaBar";
import hoistingIMG from "@/public/hostingADV3.webp";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import { toSlug } from "@/lib/news-api";
import SmartLink from "./SmartLink";
import { Play } from "lucide-react";
import { getCategoryColor } from "@/lib/getCategoryColor";

type NewsItem = {
    newsId: number;
    newsTag: string;
    newsHeading: string;
    newsHeadingTwo: string | null;
    newsCategory: string;
    newsSubCategory: string | null;
    newsSlug: string;
    thumbnail: string;
    updatedDate: string;
    catNameInHindi: string;
    subCatNameInHindi: string | null;
    viewCount: number;
};

const isGifFile = (url?: string | null) => (url ? /\.gif$/i.test(url) : false);

function AlwaysSpecialClient({ newsData }: { newsData: NewsItem[] }) {
    if (!newsData?.length) return null;
    const [featuredArticle, ...bottomCards] = newsData;
    const stripHtml = (html?: string | null) =>
        html
            ? html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim()
            : "";
    const category = toSlug(featuredArticle.newsCategory || "general");
    const subCategory = toSlug(featuredArticle.newsSubCategory || "");
    const URL = subCategory
        ? `/${category}/${subCategory}/news/${featuredArticle.newsSlug}`
        : `/${category}/news/${featuredArticle.newsSlug}`;
    const catColor = getCategoryColor(featuredArticle.newsCategory);
    return (   
        <section className="max-w-[1330px] py-4 pt-[30px]">
               <div className="flex justify-between items-center">
          <div className="mb-2 pb-3 border-b-2 border-[#f78c00]">
            <h2 className="text-2xl md:text-3xl font-500 text-gray-900 relative inline-block">
              {/* क्रिप्टो */}
              <span className="text-[#f78c00]">सदैव</span> विशेष
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#f78c00] to-transparent"></div>
            </h2>
          </div>
        </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px]">
                {/* LEFT */}
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        {/* Hero image */}
                        <div className="w-full md:w-[350px] flex-shrink-0">
                            <SmartLink
                                href={URL}
                                className="relative block w-full h-[250px] md:h-[320px]"
                            >
                                <Image
                                    src={`https://mapi.sadaivsatya.com${featuredArticle.thumbnail}`}
                                    alt={featuredArticle.newsHeading}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />

                                {isGifFile(featuredArticle.thumbnail) && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="rounded-full bg-black/70 w-10 h-10 flex items-center justify-center">
                                            <Play className="w-4 h-4 text-white fill-white" />
                                        </div>
                                    </div>
                                )}
                            </SmartLink>
                        </div>

                        {/* Text — flex-col so share bar is always pinned to bottom */}
                        <div className="flex-1 flex flex-col">
                            <SmartLink href={URL} className="flex-1 block">
                                <h3 className="text-[20px] md:text-[24px] font-medium mb-3">
                                    <span style={{ color: catColor }}>{featuredArticle.newsTag}:</span>{" "}
                                    {featuredArticle.newsHeading}
                                </h3>

                                {featuredArticle.newsHeadingTwo && (
                                    <p className="text-[16px] text-[#666] leading-[1.7] line-clamp-4">
                                        {stripHtml(featuredArticle.newsHeadingTwo)}
                                    </p>
                                )}

                                <div className="flex gap-1 text-[11px] md:text-[12px] text-gray-600 mt-2">
                                    <span className="opacity-80">
                                        {featuredArticle.updatedDate
                                            ? timeAgoInHindi(featuredArticle.updatedDate)
                                            : ""}
                                    </span>
                                </div>
                            </SmartLink>

                            {/* mt-auto pushes this row to the bottom regardless of summary length */}
                            <div className="flex justify-between items-center mt-auto pt-3">
                                <NewsMetaBar
                                    variant="solid"
                                    newsCategory={featuredArticle.newsCategory}
                                    newsCatinhindi={featuredArticle.catNameInHindi}
                                    newsSubCategory={featuredArticle.newsSubCategory || ""}
                                    newsSlug={featuredArticle.newsSlug || ""}
                                />
                                <ShareButtons shareUrl={URL} size="small" />
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                    {/* Bottom cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 mt-1">
                        {bottomCards.map((news) => {
                            const category = toSlug(news.newsCategory || "general");
                            const subCategory = toSlug(news.newsSubCategory || "");
                            const URL = subCategory
                                ? `/${category}/${subCategory}/news/${news.newsSlug}`
                                : `/${category}/news/${news.newsSlug}`;
                            const catColor = getCategoryColor(news.newsCategory);

                            return (
                                <div key={news.newsId} className="border-b border-dotted pb-4 ">
                                    <Link className="flex" href={URL}>
                                        <h3 className="text-[17px] mb-2 font-medium line-clamp-2">
                                            <span style={{ color: catColor }}>
                                                {news.newsTag}:
                                            </span>{" "}
                                            {news.newsHeading}
                                        </h3>
                                    </Link>

                                    <div className="flex justify-between items-center">
                                        <NewsMetaBar
                                            variant="solid"
                                            newsCategory={news.newsCategory}
                                            newsCatinhindi={news.catNameInHindi}
                                            newsSubCategory={news.newsSubCategory || ""}
                                            newsSlug={news.newsSlug || ""}
                                        />
                                        <ShareButtons shareUrl={URL} size="small" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT AD */}
                <div className="w-full lg:w-[300px] flex-shrink-0">
                    <a
                        href="https://www.payzonindia.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-white border sticky top-4">
                            <div className="relative min-h-[400px]">
                                <Image
                                    src={hoistingIMG}
                                    alt="Advertisement"
                                    fill
                                    loading="lazy"
                                    className="object-cover"
                                    unoptimized
                                />
                                <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded">
                                    विज्ञापन
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </section>
    );
}

export default memo(AlwaysSpecialClient);