"use client";

import timeAgoInHindi from "@/types/TimeAgoInHindi";
import Image from "next/image";
import { memo } from "react";
import NewsMetaBar from "./NewsMetaBar";
import ViewCount from "./ViewCount";
import SmartLink from "@/components/SmartLink";
import { Play } from "lucide-react";
import ClientOnlyGifImage from "./ClientOnlyGifImage";
import { getCategoryColor } from "@/lib/getCategoryColor";

import { NewsArticle } from "@/types";
import { toSlug } from "@/lib/news-api";

interface ArticleCardProps {
    article: NewsArticle;
    dataType: string;
    apiBaseUrl: string;
    idx: number;
}


function ArticleCard({ article, idx, apiBaseUrl }: ArticleCardProps) {
    const category = toSlug(article.newsCategory);
    const subcategory = article.newsSubCategory
        ? toSlug(article.newsSubCategory)
        : null;

    const URL = subcategory
        ? `/${category}/${subcategory}/news/${article.newsSlug}`
        : `/${category}/news/${article.newsSlug}`;

    const isGif = /\.gif$/i.test(article.thumbnail || "");

    const catColor = getCategoryColor(article.newsCategory);

    return (
        <>
            <div
                className="relative md:hidden pb-2 flex flex-col group rounded-lg overflow-hidden transition-transform hover:scale-101"
                data-idx={idx}
            >
                <div className="flex flex-col py-2">
                    <SmartLink
                        href={URL}
                        id={article.newsId}
                        className="text-[1.4rem] md:text-[1.4rem] font-500 text-gray-900 dark:text-white transition-colors"
                    >
                        <h1 className="text-[1.2rem] md:text-[1.2rem] font-500" style={{ lineHeight: "30px" }}>
                            <span style={{ color: catColor }}>{article.newsTag}: </span>
                            {article.newsHeading}
                        </h1>

                    </SmartLink>

                    <div
                        suppressHydrationWarning
                        className="flex items-center justify-between text-gray-500 dark:text-gray-400 mt-1"
                    >
                        <div className="flex items-center justify-between">
                            <span
                                suppressHydrationWarning
                                className="mt-1 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-[11px] text-gray-600 shadow-sm"
                            >
                                <span className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3 text-gray-400 border border-gray-400 rounded-full"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                                    </svg>
                                    {timeAgoInHindi(article.updatedDate)}
                                </span>

                                <span className="h-3 w-[1px] bg-gray-300" />

                                <span className="flex items-center gap-1">
                                    <ViewCount count={article.viewCount} />
                                </span>
                            </span>
                        </div>
                        <div>
                            <NewsMetaBar
                                newsCategory={article.newsCategory}
                                newsCatinhindi={article.subCatNameInHindi}
                                newsSubCategory={article.newsSubCategory}
                                newsSlug={article.newsSlug}
                            />
                        </div>
                    </div>
                </div>

                <SmartLink
                    href={URL}
                    id={article.newsId}
                    className="relative block w-full aspect-video flex-shrink-0 overflow-hidden group"
                >
                    <ClientOnlyGifImage article={article} dataType={article.dataType} apiBaseUrl={apiBaseUrl} />
                </SmartLink>
            </div>

            <div
                className="relative hidden md:block pb-2 flex-col group rounded-lg overflow-hidden transition-transform hover:scale-101"
                data-idx={idx}
            >


                <SmartLink
                    href={URL}
                    id={article.newsId}
                    className="relative block w-full aspect-video flex-shrink-0 overflow-hidden group"
                >
                    <ClientOnlyGifImage article={article} dataType={article.dataType} apiBaseUrl={apiBaseUrl} />
                </SmartLink>
                <div className="flex flex-col py-2">
                    <SmartLink
                        href={URL}
                        id={article.newsId}
                        className="text-[1.4rem] md:text-[1.4rem] font-500 text-gray-900 dark:text-white transition-colors"
                    >
                        <h1 className="text-[1.2rem] md:text-[1.2rem] font-500" style={{ lineHeight: "30px" }}>
                            <span style={{ color: catColor }}>{article.newsTag}: </span>
                            {article.newsHeading}
                        </h1>

                    </SmartLink>

                    <div
                        suppressHydrationWarning
                        className="flex items-center justify-between text-gray-500 dark:text-gray-400 mt-1"
                    >
                        <div className="flex items-center justify-between">
                            <span
                                suppressHydrationWarning
                                className="mt-1 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-[11px] text-gray-600 shadow-sm"
                            >
                                <span className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3 w-3 text-gray-400 border border-gray-400 rounded-full"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                                    </svg>
                                    {timeAgoInHindi(article.updatedDate)}
                                </span>

                                <span className="h-3 w-[1px] bg-gray-300" />

                                <span className="flex items-center gap-1">
                                    <ViewCount count={article.viewCount} />
                                </span>
                            </span>
                        </div>
                        <div>
                            <NewsMetaBar
                                newsCategory={article.newsCategory}
                                newsCatinhindi={article.subCatNameInHindi}
                                newsSubCategory={article.newsSubCategory}
                                newsSlug={article.newsSlug}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default memo(ArticleCard);
