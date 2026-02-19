"use client";

import { NewsArticle } from "@/types";

import NewsMetaBar from "./NewsMetaBar";
import ViewCount from "./ViewCount";
import Image from "next/image";

import ShareButtons from "./ShareButtons";
interface NewsGridProps {
  articles: NewsArticle[];
}

export default function NewsGrid2({ articles }: NewsGridProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("hi-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-[1350px] px-4 md:px-6 py-4 pb-6 bg-white mt-4">
      {/* Section Heading */}
      <div className="mb-6 pb-3 border-b-2 border-red-500">
        <h2 className="text-2xl md:text-3xl font-500 text-gray-900 relative inline-block">
          <span className="text-red-500">टॉप</span> न्यूज़
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-re-500 to-transparent"></div>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <article
            key={article.newsId}
            className="group cursor-pointer border-b border-gray-300 pb-4"
          >
            {/* Image */}
            <div className="overflow-hidden mb-2">
              <Image
                unoptimized
                src={article.thumbnail}
                alt={article.newsHeading}
                width={320}
                height={185}
              />
            </div>

            {/* Meta */}
            <div className="">
              {/* Desktop: Category | Mobile: Category and ShareButton */}
              <div className="flex justify-between text-[12px] text-gray-400 mb-[2px] mt-[10px]">
                <NewsMetaBar
                  variant="solid"
                  newsCategory={article.newsCategory}
                  newsCatinhindi={article.catNameInHindi}
                  newsSubCategory={article.newsSubCategory || ""}
                  newsSlug={article.newsSlug || ""}
                />

                {/* Mobile: Share button aligned right */}
                {/* <span className="md:hidden mt-2">
                  <ShareButtons
                    shareUrl={`/sports-news/news/${article.newsSlug}`}
                    size="small"
                  />
                </span> */}

                {/* Desktop: ViewCount aligned right */}
               <ShareButtons
                  shareUrl={`/sports-news/news/${article.newsSlug}`}
                  size="small"
                />
              </div>

              {/* Title */}
              <div
                style={{ marginTop: "14px" }}
                className="text-[18px]  font-medium text-blacktransition-colors leading-snug line-clamp-3"
              >
                <span className="text-red-500 ">{article.newsTag}:</span>{" "}
                {article.newsHeading}
              </div>

              {/* Desktop only: Date and Share buttons at bottom */}
              <div className="hidden md:flex justify-between mr-1 text-[14px]">
                <p className="text-[12px] text-[#898b91] font-medium mt-2">
                  {article.updatedDate ? formatDate(article.updatedDate) : ""}
                </p>
               
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
