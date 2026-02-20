"use client";

import Image from "next/image";
import Link from "next/link";
import ShareButtons from "@/components/ShareButton";
import NewsMetaBar from "@/components//NewsMetaBar";
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

// Mock Data
const MOCK_NEWS_DATA: NewsItem[] = [
  {
    newsId: 1,
    newsTag: "दिल्ली",
    newsHeading: "राजधानी में बड़ी राजनीतिक बैठक, सभी दलों के नेता शामिल",
    newsHeadingTwo: null,
    newsCategory: "राजनीति",
    newsSubCategory: "दिल्ली",
    newsSlug: "/Media/NewsImage/ynj0vierpfm.webp",
    thumbnail: "/Media/NewsThumb/nckj3gyzkcw.webp",
    updatedDate: new Date().toISOString(),
    catNameInHindi: "राजनीति",
    subCatNameInHindi: "दिल्ली",
    viewCount: 1250,
    dataType: "IMAGE"
  },
  {
    newsId: 2,
    newsTag: "चुनाव",
    newsHeading: "आगामी विधानसभा चुनाव की तैयारियां जोरों पर",
    newsHeadingTwo: null,
    newsCategory: "राजनीति",
    newsSubCategory: "चुनाव",
    newsSlug: "/Media/NewsImage/vgdb4z3r1jz.webp",
    thumbnail: "/Media/NewsImage/vgdb4z3r1jz.webp",
    updatedDate: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    catNameInHindi: "राजनीति",
    subCatNameInHindi: "चुनाव",
    viewCount: 980,
    dataType: "IMAGE"
  },
  {
    newsId: 3,
    newsTag: "संसद",
    newsHeading: "संसद में हंगामा, विपक्ष ने किया सदन का बहिष्कार",
    newsHeadingTwo: null,
    newsCategory: "राजनीति",
    newsSubCategory: "संसद",
    newsSlug: "sansad-mein-hangama",
    thumbnail: "/Media/NewsImage/1ovvzmlssal.webp",
    updatedDate: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    catNameInHindi: "राजनीति",
    subCatNameInHindi: "संसद",
    viewCount: 2100,
    dataType: "VIDEO"
  },
  {
    newsId: 4,
    newsTag: "बयान",
    newsHeading: "मुख्यमंत्री का बड़ा बयान, विकास कार्यों को लेकर की घोषणा",
    newsHeadingTwo: null,
    newsCategory: "राजनीति",
    newsSubCategory: null,
    newsSlug: "mukhyamantri-ka-bada-bayan",
    thumbnail: "/Media/NewsThumb/m5bhqju5oji.webp",
    updatedDate: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    catNameInHindi: "राजनीति",
    subCatNameInHindi: null,
    viewCount: 1580,
    dataType: "IMAGE"
  }
];

export default function RajneetiClient() {
  const newsData = MOCK_NEWS_DATA;
  
  if (!Array.isArray(newsData) || newsData.length === 0) return null;

  const displayArticles = newsData.slice(0, 4);
  const isGifFile = (url?: string | null) => (url ? /\.gif$/i.test(url) : false);

  return (
    <section>
      <div className="max-w-[1350px] py-4 pb-2">
        <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-[#b30000]"></div>
                <h2 className="text-2xl sm:text-2xl font-bold text-gray-900">
                  और खबरें – राजनीति
                </h2>
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
                    {/* <div className="flex flex-row sm:flex-row justify-between sm:justify-between gap-2 sm:gap-0 text-[13px] text-gray-500 opacity-80">
                                               <NewsMetaBar
                                                 variant="solid"
                                                 newsCategory={article.newsCategory}
                                                 newsCatinhindi={article.catNameInHindi}
                                                 newsSubCategory={article.newsSubCategory ?? undefined}
                                                 newsSlug={article.newsSlug}
                                               />
                 
                                               <ShareButtons
                                                 size="small"
                                               />
                                             </div> */}

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

                    <div className="pt-2 md:pt-4 border-t border-dotted border-gray-600 mt-2"></div>
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