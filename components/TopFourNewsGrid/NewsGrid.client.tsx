"use client";

import { useEffect, useState } from "react";
import { NewsArticle } from "@/types";
import yuvaLogo from "@/public/Sadaiv_logo.webp";
import Image from "next/image";
import NewsMetaBar from "../NewsMetaBar";
import ShareButtons from "../ShareButtons";
import { toSlug } from "@/lib/news-api";
import SmartLink from "../SmartLink";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import { Play } from "lucide-react";
import { getCategoryColor } from "@/lib/getCategoryColor";


const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

interface NewsGridProps {
    articles: NewsArticle[];
}

export default function NewsGridClient({ articles }: NewsGridProps) {
    const [mounted, setMounted] = useState(false);
    const [timeAgoTexts, setTimeAgoTexts] = useState<Record<string, string>>({});

    useEffect(() => {
        setMounted(true);

        const texts: Record<string, string> = {};
        articles.forEach((article) => {
            if (article.updatedDate) {
                texts[article.newsId] = timeAgoInHindi(article.updatedDate);
            }
        });
        setTimeAgoTexts(texts);
    }, [articles]);

    if (!mounted) {
        return (
            <div className="max-w-[1350px] py-4 pb-4 bg-white">

                <div className="flex justify-between items-center">
                    <div className="mb-2 pb-3 border-b-2 border-[#00bf9a]">
                        <h2 className="text-2xl md:text-3xl font-500 text-gray-900 relative inline-block">
                            क्रिप्टो
                            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#00bf9a] to-transparent"></div>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {articles.slice(1, 5).map((article) => (
                        <div key={article.newsId} className="min-h-[260px]">
                            <div className="w-full h-[160px] bg-gray-200 animate-pulse"></div>
                            <div className="mt-2">
                                <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
                                <div className="h-4 bg-gray-200 animate-pulse rounded mt-2 w-3/4"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-[1350px] py-4 pb-4 bg-white">

            <div className="flex justify-between items-center">
                <div className="mb-2 pb-3 border-b-2 border-[#00bf9a]">
                    <h2 className="text-2xl md:text-3xl font-500 text-gray-900 relative inline-block">
                        क्रिप्टो
                        <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#00bf9a] to-transparent"></div>
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                {articles.slice(1, 5).map((article) => {
                    const category = toSlug(article?.newsCategory || "general");
                    const subCategory = toSlug(article?.newsSubCategory || "");
                    const URL = subCategory
                        ? `/${category}/${subCategory}/news/${article?.newsSlug}`
                        : `/${category}/news/${article?.newsSlug}`;
                    const catColor = getCategoryColor(article.newsCategory);

                    return (
                        <SmartLink href={URL} key={article.newsId} className="group">
                            <article className="flex flex-col border-b border-gray-300 pb-3 min-h-[260px]">
                                {/* Image Container with fixed dimensions */}
                                <div className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden">
                                    <Image
                                        src={apiBaseUrl + article.thumbnail}
                                        alt={article.newsHeading}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
                                        priority={false}
                                        loading="lazy"
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    {article.dataType === "VIDEO" && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="rounded-full bg-black/70 w-10 h-10 flex items-center justify-center">
                                                <Play className="w-4 h-4 text-white fill-white" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 pt-2">
                                    <div className="flex justify-between text-[12px] text-gray-400">
                                        <NewsMetaBar
                                            variant="solid"
                                            newsCategory={article.newsCategory}
                                            newsCatinhindi={article.catNameInHindi}
                                            newsSubCategory={article.newsSubCategory || ""}
                                            newsSlug={article.newsSlug || ""}
                                        />
                                        <ShareButtons shareUrl={URL} size="small" />
                                    </div>

                                    <div className="mt-2 font-500 text-[16px] leading-tight line-clamp-3">
                                        <span style={{ color: catColor }}>{article.newsTag}:</span>{" "}
                                        {article.newsHeading}
                                    </div>

                                    <div className="mt-auto pt-2">
                                        <p className="text-[12px] text-[#898b91] font-medium min-h-[20px]">
                                            {timeAgoTexts[article.newsId] || ""}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </SmartLink>
                    );
                })}
            </div>
        </div>
    );
}