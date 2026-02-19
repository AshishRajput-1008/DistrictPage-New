"use client";

import Image from "next/image";
import Link from "next/link";
import ShareButtons from "./ShareButtons";
import NewsMetaBar from "./NewsMetaBar";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import { toSlug } from "@/lib/news-api";
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
  dataType: string;
};

export default function RajneetiClient({ newsData }: { newsData: NewsItem[] }) {
  if (!Array.isArray(newsData) || newsData.length === 0) return null;

  const displayArticles = newsData.slice(0, 4);
  const isGifFile = (url?: string | null) => (url ? /\.gif$/i.test(url) : false);

  return (
    <section>
      <div className="max-w-[1350px] py-4 pb-2">
        <div className="flex justify-between items-center mb-2 md:mb-[12px]">
          <div className="mb-2 pb-3 border-b-2 border-[#ea580c]">
            <h2 className="text-2xl md:text-3xl font-500 text-gray-900 relative inline-block">
              <span className="text-gray-900">राजनीति</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#ea580c] to-transparent"></div>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {displayArticles.map((article, idx) => {
            const category = toSlug(article?.newsCategory || "general");
            const subCategory = toSlug(article?.newsSubCategory || "");
            const URL = subCategory
              ? `/${category}/${subCategory}/news/${article?.newsSlug}`
              : `/${category}/news/${article?.newsSlug}`;
            const catColor = getCategoryColor(article.newsCategory);
            return (
              <article
                key={article.newsId}
                className="group cursor-pointer flex flex-col bg-white"
              >
                <Link href={URL} className="flex flex-col h-full">
                  <div className="relative h-[117px] sm:h-[180px] lg:h-[140px] overflow-hidden mb-2 md:mb-3">
                    <Image
                      src={`https://mapi.sadaivsatya.com${article.thumbnail}`}
                      alt={article.newsHeading}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                    {article.dataType === "VIDEO" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-black/70 w-8 h-8 flex items-center justify-center">
                          <Play className="w-3 h-3 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex-grow flex flex-col px-1 md:px-0">
                    <div className="mb-2 flex justify-between">
                      <NewsMetaBar
                        variant="solid"
                        newsCategory={article.newsCategory}
                        newsCatinhindi={article.catNameInHindi}
                        newsSubCategory={article.newsSubCategory || ""}
                        newsSlug={article.newsSlug || ""}
                      />
                      <ShareButtons shareUrl={URL} size="small" />
                    </div>

                    <h3 className="text-[20px] md:text-[20px] lg:text-[18px] font-medium text-black leading-snug line-clamp-3 lg:line-clamp-2">
                      <span className="mr-[2px]" style={{ color: catColor }}>
                        {article.newsTag}:
                      </span>{" "}
                      {article.newsHeading}
                    </h3>

                    <div className="flex gap-1 text-[11px] md:text-[12px] text-gray-600 mt-2">
                      <span className="opacity-80">
                        {article.updatedDate
                          ? timeAgoInHindi(article.updatedDate)
                          : ""}
                      </span>
                    </div>

                    <div className="mt-auto pt-2 md:pt-4 border-t border-dotted border-gray-600"></div>
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
