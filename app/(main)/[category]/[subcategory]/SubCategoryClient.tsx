"use client";

import { useEffect, useRef, useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import SkeletonCard from "@/components/SkeletonCard";
import { getSubCategoryArticles, toSlug } from "@/lib/news-api";
import { ChevronRight, Slash } from "lucide-react";
import ArticleStripCard from "@/components/ArticleStripCard";
import Link from "next/link";
import { getCategoryColor } from "@/lib/getCategoryColor";
import SubCatPillServer from "@/components/header/SubCategoryPills/subcatpill.server";

export interface ArticleItem {
    newsId: number;
    newsCategory: string;
    newsSubCategory?: string;
    newsHeading: string;
    newsTag: string;
    newsSlug: string;
    thumbnail: string;
    updatedDate: string;
    catNameInHindi: string;
    subCatNameInHindi: string;
    viewCount: number;
    dataType: string;
}

interface SubCategoryClientProps {
    initialArticles: ArticleItem[];
    category: string;
    subcategory: string;
    apiBaseUrl: string;
    displayCategory: string;
    displaySubcategory: string | null;
}

export default function SubCategoryClient({
    initialArticles,
    category,
    subcategory,
    apiBaseUrl,
    displayCategory,
    displaySubcategory,
}: SubCategoryClientProps) {
    const [articles, setArticles] = useState<ArticleItem[]>(initialArticles);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(initialArticles.length >= 12);
    const [allFetched, setAllFetched] = useState(false);
    const observerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (allFetched || !hasMore) return;

        async function fetchAllArticles() {
            setLoading(true);
            try {
                const data = await getSubCategoryArticles(category, subcategory);
                if (Array.isArray(data) && data.length > articles.length) {
                    setArticles(data);
                    setHasMore(false);
                    setAllFetched(true);
                } else if (data.length === 0) {
                    setHasMore(false);
                }
            } catch (err) {
                console.error("Error fetching articles:", err);
                setHasMore(false);
            } finally {
                setLoading(false);
            }
        }

        fetchAllArticles();
    }, [category, subcategory, articles.length, hasMore, allFetched]);
    const catcolor = getCategoryColor(category)
    const visibleArticles = articles;
    const catlink = toSlug(category);
    return (
        <div className="max-w-[1230px] px-3 mx-auto py-4 space-y-6">

            <div>
                <ul className="breadcrumb-list">
                    {/* Category */}
                    <li>
                        <Link
                            href={`/${toSlug(category)}`}
                            className="uppercase text-gray-300"
                        >
                            <span className="text-gray-400">{category}</span>
                        </Link>
                    </li>

                    {/* Subcategory */}
                    {subcategory && (
                        <li>
                            <Link
                                href={`/${toSlug(category)}/${toSlug(subcategory)}`}
                                className="uppercase"
                            >
                                <span className="text-gray-800">{subcategory}</span>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">

                    {articles.length === 0 ? (
                        <div className="text-center py-20 text-gray-500 text-lg">
                            कोई समाचार उपलब्ध नहीं है
                        </div>
                    ) : (
                        <>
                            {/* MOBILE + DESKTOP RENDER */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                                {visibleArticles.map((article, idx) => {
                                    const isMobileBigCard = idx % 9 === 0;
                                    const isMobileStrip = idx % 9 !== 0;

                                    return (
                                        <div key={article.newsId} className="w-full">
                                            {/* MOBILE VIEW */}
                                            <div className="block lg:hidden">
                                                {isMobileBigCard ? (
                                                    <ArticleCard
                                                        article={article}
                                                        dataType={article.dataType}
                                                        idx={idx}
                                                        apiBaseUrl={apiBaseUrl}
                                                    />
                                                ) : (
                                                    <ArticleStripCard
                                                        article={article}
                                                        apiBaseUrl={apiBaseUrl}
                                                    />
                                                )}
                                            </div>

                                            {/* DESKTOP VIEW */}
                                            <div className="hidden lg:block">
                                                <ArticleCard
                                                    article={article}
                                                    dataType={article.dataType}
                                                    idx={idx}
                                                    apiBaseUrl={apiBaseUrl}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* Skeletons */}
                                {loading && (
                                    <>
                                        {Array.from({ length: 8 }).map((_, i) => (
                                            <SkeletonCard key={`skeleton-${i}`} />
                                        ))}
                                    </>
                                )}
                            </div>
                        </>
                    )}
                    <div className="fixed bottom-[60px] md:bottom-0 left-0 right-0 z-50 bg-white shadow-lg">
                        <SubCatPillServer category={category} />
                    </div>
                    {!hasMore && allFetched && articles.length > 0 && (
                        <div className="text-center py-10 text-gray-500">
                            सभी समाचार दिखा दिए गए
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
