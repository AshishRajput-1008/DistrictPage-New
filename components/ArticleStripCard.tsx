"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import ViewCount from "./ViewCount";
import NewsMetaBar from "./NewsMetaBar";
import SmartLink from "./SmartLink";
import ShareButtons from "./ShareButtons";
import Link from "next/link";
import { Play } from "lucide-react";
import { toSlug } from "@/lib/news-api";
import { getCategoryColor } from "@/lib/getCategoryColor";

function isGifFile(url?: string | null): boolean {
    return url ? /\.gif$/i.test(url) : false;
}

const baseLocal = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function ArticleStripCard({ article, apiBaseUrl }: any) {
    const slug = article.newsSlug;
    const categorySlug = toSlug(article.newsCategory);
    const subcategorySlug = article.newsSubCategory ? toSlug(article.newsSubCategory) : null;
    const categoryPageUrl = subcategorySlug ? `/${categorySlug}/${subcategorySlug}` : `/${categorySlug}`;
    const url = subcategorySlug ? `/${categorySlug}/${subcategorySlug}/news/${slug}` : `/${categorySlug}/news/${slug}`;
    const isGif = article.thumbnail?.toLowerCase().endsWith(".gif");
    const imageSrc = article.thumbnail ? `${baseLocal}${article.thumbnail}` : "/Final Logo.webp";
    const catColor = getCategoryColor(article.newsCategory);

    return (
        <div
            key={`${article.newsId}`}
            className="flex gap-2 border-b border-gray-300 dark:border-gray-600 pb-2 last:border-b-0"
        >
            {/* Content */}
            <div className="flex-1">
                <SmartLink
                    href={url}
                    id={article.newsId}
                    className="block text-[18px] font-medium"
                >
                    <span style={{ color: catColor }}>
                        {article.newsTag}:
                    </span>
                    {" "}
                    {article.newsHeading}
                </SmartLink>

                <div className="flex flex-col dark:text-gray-400 space-y-1">
                    <span
                        suppressHydrationWarning
                        className="mt-1 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-[11px] text-gray-600 shadow-sm w-fit"
                    >
                        <span className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3 text-gray-400 border border-gray-400 rounded-full"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6l4 2"
                                />
                            </svg>
                            {timeAgoInHindi(article.updatedDate)}
                        </span>

                        <span className="h-3 w-[1px] bg-gray-300" />

                        <span className="flex items-center gap-1">
                            <ViewCount count={article.viewCount} />
                        </span>
                    </span>

                    {article.newsCategory && (
                        <Link
                            href={categoryPageUrl}
                            className="group inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700 hover:bg-gray-100 transition w-fit"
                        >
                            <span>{article.subCatNameInHindi}</span>
                            <svg
                                className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </Link>
                    )}

                </div>
            </div>
            {/* Thumbnail */}
            <div>
                <div className="relative">
                    <SmartLink
                        href={url}
                        id={article.newsId}
                        className="flex p-1 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden bg-gray-200 dark:bg-gray-700">
                            <Image
                                src={imageSrc}
                                alt={article.newsHeading}
                                fill
                                className="object-cover rounded-lg"
                                unoptimized
                            />

                            {article.dataType === "VIDEO" && (
                                <span className="pointer-events-none absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2 flex items-center justify-center
        rounded-full bg-black/70 w-8 h-8">
                                    <Play className="w-3 h-3 text-white fill-white" />
                                </span>
                            )}
                        </div>
                    </SmartLink>

                    <ShareButtons shareUrl={url} />
                </div>
            </div>


        </div>

    );
}
