// components/RelatedNewsSectionClient.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import { Play } from "lucide-react";
import { getCategoryArticles } from "@/lib/news-api";
import ShareButtons from "@/components/ShareButtons";
import SmartLink from "@/components/SmartLink";
import ViewCount from "@/components/ViewCount";
import ClientOnlyGifImage from "./ClientOnlyGifImage";
import { getCategoryColor } from "@/lib/getCategoryColor";

interface NewsItem {
    newsId: number;
    newsCategory: string;
    newsSubCategory?: string;
    newsHeading: string;
    newsSlug: string;
    newsTag: string;
    thumbnail: string;
    updatedDate: string;
    catNameInHindi: string;
    viewCount: number;
    dataType: string
}

function isGifFile(url?: string | null): boolean {
    return url ? /\.gif$/i.test(url) : false;
}

const toSlug = (str = "") =>
    str.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

interface Props {
    initialNews: NewsItem[];
    category: string;
    currentSlug: string;
}

export default function RelatedNewsSectionClient({ initialNews, category, currentSlug }: Props) {
    const [newsList, setNewsList] = useState<NewsItem[]>(initialNews);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(initialNews.length >= 9);
    const observerRef = useRef<HTMLDivElement>(null);

    const loadMore = async () => {
        if (loading || !hasMore) return;
        setLoading(true);

        try {
            const data = await getCategoryArticles(category);
            const filtered = data
                .filter((n: any) => n.newsSlug !== currentSlug)
                .slice(page * 9, (page + 1) * 9); // 9-9 करके लाओ

            if (filtered.length < 9) {
                setHasMore(false);
            }

            setNewsList(prev => [...prev, ...filtered]);
            setPage(prev => prev + 1);
        } catch (err) {
            console.error("Error loading more related news:", err);
        } finally {
            setLoading(false);
        }
    };
    const toTitleCase = (str = "") => {
        if (!str) return "";

        return str
            .toLowerCase()
            .replace(/-/g, " ")
            .split(" ")
            .map(word => word ? word[0].toUpperCase() + word.slice(1) : "")
            .join(" ");
    };


    useEffect(() => {
        if (!hasMore || loading) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadMore();
                }
            },
            { threshold: 0.1, rootMargin: "200px" }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect();
    }, [loading, hasMore, page]);

    if (newsList.length === 0) return null;
    return (
        <div className="border-t pt-4">
            {/* <h2 className="mb-6 text-2xl font-500">Related {displayCategory}</h2> */}
            <h2 className="mb-2 text-2xl font-500 text-gray-400">खबरे और भी है...</h2>
            <div className="space-y-4">
                {newsList.map((item, index) => {
                    const isLast = index === newsList.length - 1;
                    const thumbUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${item.thumbnail || ""}`;
                    const catSlug = item.newsCategory ? toSlug(item.newsCategory) : "";
                    const subcatSlug = item.newsSubCategory ? toSlug(item.newsSubCategory) : "";
                    const linkUrl = item.newsSubCategory
                        ? `/${catSlug}/${subcatSlug}/news/${item.newsSlug}`
                        : `/${catSlug}/news/${item.newsSlug}`;
                    const catColor = getCategoryColor(item.newsCategory);
                    const shortCategory =
                        item.catNameInHindi === "अपराध की दुनिया"
                            ? "अपराध"
                            : item.catNameInHindi === "वैश्विक हलचल"
                                ? "वैश्विक"
                                : item.catNameInHindi === "रहस्य एवं रोमांच"
                                    ? "रहस्य"
                                    : item.catNameInHindi === "विचार प्रवाह"
                                        ? "विचार"
                                        : item.catNameInHindi;


                    return (
                        <div
                            key={item.newsId}
                            ref={isLast ? observerRef : null}
                            className="group pb-4"
                        >
                            <div className="flex flex-row transition hover:bg-gray-100 dark:hover:bg-gray-800">
                                {/* CONTENT */}
                                <div className="flex flex-col flex-1 min-w-0 pr-1">

                                    {/* TITLE */}
                                    <SmartLink href={linkUrl} id={item.newsId}>
                                        <h3 className="text-[18px] font-500 text-gray-900 dark:text-gray-100 px-1">
                                            <span style={{ color: catColor }}>{item.newsTag}:</span>{" "}
                                            {item.newsHeading}
                                        </h3>
                                    </SmartLink>

                                    {/* META ROW */}
                                    <div className="flex flex-row items-center justify-between text-gray-600 dark:text-gray-400 mt-1 px-1">
                                        <div className="flex flex-row items-center text-gray-400 dark:text-gray-400 mt-1 px-1">
                                            <span suppressHydrationWarning style={{ fontSize: "12px" }}>
                                                {timeAgoInHindi(item.updatedDate)}
                                            </span>|
                                            <ViewCount count={item.viewCount} />
                                        </div>
                                        {/* CATEGORY BUTTON */}
                                        {item.newsCategory && (
                                            <div className="mt-1 px-1">
                                                <Link
                                                    href={`/${catSlug}`}
                                                    className="group inline-flex items-center gap-1 px-3 py-1 text-xs font-500 border border-gray-200 rounded-full transition-all"
                                                >
                                                    <span>{shortCategory}</span>
                                                    <svg
                                                        className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* IMAGE */}
                                <div>
                                    <SmartLink href={linkUrl} id={item.newsId}>
                                        <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden bg-gray-200 dark:bg-gray-700">
                                            <ClientOnlyGifImage
                                                article={{ thumbnail: item.thumbnail, newsHeading: item.newsHeading }}
                                                dataType={item.dataType}
                                                apiBaseUrl="https://mapi.sadaivsatya.com"
                                            />
                                        </div>
                                    </SmartLink>
                                    <ShareButtons shareUrl={linkUrl} />
                                </div>

                            </div>
                        </div>
                    );
                })}


                {
                    loading && (
                        <div className="py-8 text-center">
                            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-red-600 border-t-transparent"></div>
                            <p className="mt-3 text-gray-600">और खबरें लोड हो रही हैं...</p>
                        </div>
                    )
                }

                {
                    !hasMore && newsList.length > 9 && (
                        <p className="py-6 text-center text-gray-500">कोई और खबर नहीं</p>
                    )
                }
            </div >
        </div >
    );
}