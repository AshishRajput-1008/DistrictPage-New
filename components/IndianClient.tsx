"use client";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "./ShareButtons";
import NewsMetaBar from "./NewsMetaBar";
import payzoneapi from "@/public/advImages/vericationADV.webp";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import { toSlug } from "@/lib/news-api";
import SmartLink from "./SmartLink";
import { getCategoryColor } from "@/lib/getCategoryColor";
import ClientOnlyGifImage from "./ClientOnlyGifImage";

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
    dataType: string;
};

export default function IndianClient({ articles }: { articles: NewsItem[] }) {
    if (!Array.isArray(articles) || articles.length === 0) return null;
    const topArticles = articles.slice(0, 3);
    const bottomArticles = articles.slice(3, 7);
    const isGifFile = (url?: string | null) => (url ? /\.gif$/i.test(url) : false);

    return (
        <section>
            <div className="max-w-[1350px] py-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-2 md:mb-[12px]">
                    <div className="mb-2 pb-3 border-b-2 border-[#4f46e5]">
                        <h2 className="text-2xl md:text-3xl font-500 text-gray-900 relative inline-block">
                            भारत
                            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#4f46e5] to-transparent"></div>
                        </h2>
                    </div>
                </div>

                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 lg:mb-4">
                    {topArticles.map((article, idx) => {
                        const category = toSlug(article?.newsCategory || "general");
                        const subCategory = toSlug(article?.newsSubCategory || "");
                        const URL = subCategory
                            ? `/${category}/${subCategory}/news/${article?.newsSlug}`
                            : `/${category}/news/${article?.newsSlug}`;
                        const catColor = getCategoryColor(article.newsCategory);
                        return (
                            <article key={article.newsId} className="group cursor-pointer">
                                <SmartLink href={URL} className="block">
                                    <div className="relative overflow-hidden mb-4 h-[240px] w-full">
                                        <ClientOnlyGifImage
                                            article={article}
                                            dataType={article.dataType}
                                            apiBaseUrl="https://mapi.sadaivsatya.com"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex justify-between">
                                            <NewsMetaBar
                                                variant="solid"
                                                newsCategory={article.newsCategory}
                                                newsCatinhindi={article.catNameInHindi}
                                                newsSubCategory={article.newsSubCategory || ""}
                                                newsSlug={article.newsSlug || ""}
                                            />
                                            <div className="mt-1">
                                                <ShareButtons shareUrl={URL} size="small" />
                                            </div>
                                        </div>

                                        <h3 className="text-[20px] md:text-[18px] font-medium leading-snug line-clamp-3 lg:line-clamp-2">
                                            <span style={{ color: catColor }}>{article.newsTag}:</span>{" "}
                                            {article.newsHeading}
                                        </h3>
                                        {timeAgoInHindi(article.updatedDate)}
                                    </div>
                                </SmartLink>
                            </article>

                        );
                    })}

                    {/* Ad */}
                    <div>
                        <a
                            href="https://ulogin.payzonapi.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={payzoneapi}
                                alt="Payzon API"
                                width={300}
                                height={200}
                                className="object-contain"
                            />
                        </a>
                    </div>
                </div>

                {/* Bottom Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                    {bottomArticles.map((article) => {
                        const category = toSlug(article?.newsCategory || "general");
                        const subCategory = toSlug(article?.newsSubCategory || "");
                        const URL = subCategory
                            ? `/${category}/${subCategory}/news/${article?.newsSlug}`
                            : `/${category}/news/${article?.newsSlug}`;
                        const catColor = getCategoryColor(article.newsCategory);
                        return (
                            <article key={article.newsId}>
                                <Link href={URL}>
                                    <div className="flex justify-between mb-1">
                                        <NewsMetaBar
                                            variant="solid"
                                            newsCategory={article.newsCategory}
                                            newsCatinhindi={article.catNameInHindi}
                                            newsSubCategory={article.newsSubCategory || ""}
                                            newsSlug={article.newsSlug || ""}
                                        />
                                        <ShareButtons shareUrl={URL} size="small" />
                                    </div>

                                    <h3 className="min-h-[80px] text-[18px] font-medium text-black leading-[1.6] line-clamp-3">
                                        <span style={{ color: catColor }}>{article.newsTag}:</span>{" "}
                                        {article.newsHeading}
                                    </h3>

                                    <div className="text-[12px] text-gray-600">
                                        {timeAgoInHindi(article.updatedDate)}
                                    </div>
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
