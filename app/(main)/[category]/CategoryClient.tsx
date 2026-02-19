"use client";
import { useRef, useState, useCallback } from "react";
import ArticleCard from "@/components/ArticleCard";
import ArticleStripCard from "@/components/ArticleStripCard";
import SkeletonCard from "@/components/SkeletonCard";
import { getCategoryArticles, getAllTazaHalchalArticles, toSlug } from "@/lib/news-api";
import { getCategoryColor } from "@/lib/getCategoryColor";
import Link from "next/link";

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

interface CategoryClientProps {
    initialArticles: ArticleItem[];
    category: string;
    apiBaseUrl: string;
    displayCategory: string;
    displayCategoryInHindi: string;
    isTaza: boolean;
}

export default function CategoryClient({
    initialArticles,
    category,
    apiBaseUrl,
    displayCategory,
    displayCategoryInHindi,
    isTaza,
}: CategoryClientProps) {
    const [articles, setArticles] = useState<ArticleItem[]>(initialArticles);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(initialArticles.length === 12);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const pageSize = 12;
    const catcolor = getCategoryColor(category)

    const loadMore = async () => {
        if (loading || !hasMore) return;
        setLoading(true);

        try {
            const nextPage = page + 1;
            const newArticles = isTaza
                ? await getAllTazaHalchalArticles(category, nextPage, pageSize)
                : await getCategoryArticles(category, nextPage, pageSize);

            if (newArticles.length > 0) {
                setArticles((prev) => [...prev, ...newArticles]);
                setPage(nextPage);

                if (newArticles.length < pageSize) setHasMore(false);
            } else {
                setHasMore(false);
            }
        } catch (err) {
            console.error("Load more error:", err);
        } finally {
            setLoading(false);
        }
    };

    const lastArticleRef = useCallback(
        (node: HTMLDivElement) => {
            if (loading) return;
            if (observerRef.current) observerRef.current.disconnect();

            observerRef.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) loadMore();
                },
                { rootMargin: "200px" }
            );

            if (node) observerRef.current.observe(node);
        },
        [loading, hasMore]
    );

    return (
        <div className="max-w-[1230px] px-3 mx-auto py-4 space-y-6 pb-24">
            <div className="relative">
                {!isTaza && (
                    <div>
                        <ul className="breadcrumb-list">
                            <li>
                                <Link
                                    href={`/${toSlug(category)}`}
                                    className="uppercase text-gray-300"
                                >
                                    <span className="text-gray-800">{category}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                    {articles.map((article, idx) => {
                        const isLast = idx === articles.length - 1;
                        return (
                            <div
                                key={article.newsId}
                                ref={isLast ? lastArticleRef : null}
                            >
                                {isTaza ? (
                                    <>
                                        <div className="block lg:hidden">

                                            <ArticleStripCard
                                                article={article}
                                                apiBaseUrl={apiBaseUrl}
                                            />
                                        </div>

                                        <div className="hidden lg:block">
                                            <ArticleCard
                                                article={article}
                                                dataType={article.dataType}
                                                idx={idx}
                                                apiBaseUrl={apiBaseUrl}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="block border-b lg:hidden">
                                            {idx % 9 === 0 ? (
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

                                        <div className="hidden lg:block">
                                            <ArticleCard
                                                article={article}
                                                dataType={article.dataType}
                                                idx={idx}
                                                apiBaseUrl={apiBaseUrl}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}

                    {loading &&
                        Array.from({ length: 6 }).map((_, i) => (
                            <SkeletonCard key={i} />
                        ))}
                </div>
            </div>
           
            {!hasMore && !loading && (
                <div className="text-center py-6 text-gray-500">
                    सभी समाचार दिखा दिए गए
                </div>
            )}

        </div>
    );
}
