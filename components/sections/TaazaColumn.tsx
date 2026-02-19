import { NewsArticle } from "@/types/index";
import Image from "next/image";
import Link from "next/link";
import NewsMetaBar from "../NewsMetaBar";
import ShareButtons from "../ShareButtons";
import { memo } from "react";
import SmartLink from "../SmartLink";
import { toSlug } from "@/lib/news-api";
import { Play } from "lucide-react";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import { getCategoryColor } from "@/lib/getCategoryColor";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://mapi.sadaivsatya.com";
const isGifFile = (url?: string | null) => (url ? /\.gif$/i.test(url) : false);

export default memo(function TaazaColumn({ data }: { data: NewsArticle[] }) {
  if (!data?.length) return null;
  const category = toSlug(data[5].newsCategory);
  const subCategory = toSlug(data[5].newsSubCategory || "");
  const URL = subCategory
    ? `/${category}/${subCategory}/news/${data[5]?.newsSlug}`
    : `/${category}/news/${data[5]?.newsSlug}`;
  const catColor1 = getCategoryColor(data[5].newsCategory);

  return (
    <section>
      <h2 className="text-2xl font-500 mb-4 border-b-2 border-black">
        ताज़ा हलचल
      </h2>

      <SmartLink href={URL} className="block mb-6">
        <div className="mb-4">
          <div className="relative">
            <Image
              unoptimized
              src={apiBaseUrl + data[5].thumbnail}
              alt={data[5].newsHeading}
              width={800}
              height={400}
              className="w-full h-[200px] md:h-[350px] object-cover"
            />
            {data[5].dataType === "VIDEO" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-black/70 w-14 h-14 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
            )}
          </div>

          <h3 className="text-[18px] font-500 mt-2">
            <span style={{ color: catColor1 }}>{data[5].newsTag}:</span>{" "}
            {data[5].newsHeading}
          </h3>
          <h6 className="text-[12px] text-gray-400">{timeAgoInHindi(data[5].updatedDate)}</h6>
          <div className="flex justify-between items-center mt-2">
            <NewsMetaBar
              variant="solid"
              newsCategory={data[5].newsCategory}
              newsCatinhindi={data[5].catNameInHindi}
              newsSubCategory={data[5].newsSubCategory || ""}
              newsSlug={data[5].newsSlug}
            />
            <ShareButtons
              shareUrl={URL}
              size="small"
            />
          </div>
        </div>
      </SmartLink>

      {/* List */}
      <div className="hidden md:block space-y-6">
        {data.slice(6).map((news) => {
          const category = toSlug(news.newsCategory);
          const subCategory = toSlug(news.newsSubCategory || "");
          const URL = subCategory
            ? `/${category}/${subCategory}/news/${news?.newsSlug}`
            : `/${category}/news/${news?.newsSlug}`;
          const catColor2 = getCategoryColor(news.newsCategory);
          return (
            <SmartLink key={news.newsId} href={URL} className="block">
              <div className="flex p-0">
                <div className="flex-1 pr-4 py-3 flex flex-col">
                  <div className="flex-1 flex items-center mb-3">
                    <h3 className="text-[18px] md:text-[18px] font-500 text-[#1a1a1a] leading-[1.4]">
                      <span className="mr-1" style={{ color: catColor2 }}>
                        {news.newsTag}:
                      </span>{" "}
                      <span className="text-gray-900">
                        {news.newsHeading}
                      </span>
                    </h3>
                  </div>
                  <h6 className="text-[12px] text-gray-400">{timeAgoInHindi(news.updatedDate)}</h6>
                  <div className="flex justify-between text-[13px] text-gray-500 opacity-80">
                    <NewsMetaBar
                      variant="solid"
                      newsCategory={news.newsCategory}
                      newsCatinhindi={news.catNameInHindi}
                      newsSubCategory={news.newsSubCategory || ""}
                      newsSlug={news.newsSlug || ""}

                    />
                    <ShareButtons
                      shareUrl={URL}
                      size="small"
                    />
                  </div>
                </div>

                <div className="relative w-[180px] h-[120px] mb-2 rounded-md flex-shrink-0">
                  <Image
                    src={apiBaseUrl + news.thumbnail}
                    alt={news.newsHeading}
                    fill
                    className="rounded-lg object-cover"
                    unoptimized
                  />

                  {news.dataType === "VIDEO" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-black/70 w-8 h-8 flex items-center justify-center">
                        <Play className="w-3 h-3 text-white fill-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SmartLink>
          )
        }
        )}
      </div>

      <div className="md:hidden space-y-6">
        {data.slice(6).map((news) => {
          const category = toSlug(news.newsCategory);
          const subCategory = toSlug(news.newsSubCategory || "");
          const URL = subCategory
            ? `/${category}/${subCategory}/news/${news?.newsSlug}`
            : `/${category}/news/${news?.newsSlug}`;
          const catColor3 = getCategoryColor(news.newsCategory);
          return (
            <div
              key={news.newsId}
              className="bg-white shadow-sm"
            >
              <SmartLink
                href={URL}
                className="flex gap-3 mb-4"
              >
                <div className="flex-1 flex flex-col">
                  <h4 className="text-[18px] md:text-[18px] font-500 text-gray-900 leading-[1.6] line-clamp-3">
                    <span className="font-500" style={{ color: catColor3 }}>
                      {news.newsTag}:
                    </span>{" "}
                    {news.newsHeading}
                  </h4>
                  <h6 className="text-[12px] text-gray-400">{timeAgoInHindi(news.updatedDate)}</h6>
                  <div className="mt-4">
                    <NewsMetaBar
                      variant="solid"
                      newsCategory={news.newsCategory}
                      newsCatinhindi={news.catNameInHindi}
                      newsSubCategory={news.newsSubCategory || ""}
                      newsSlug={news.newsSlug || ""}

                    />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <div className="relative w-[100px] h-[80px] flex-shrink-0 mt-2">
                    <Image
                      src={apiBaseUrl + news.thumbnail}
                      alt={news.newsHeading}
                      fill
                      className="rounded-lg object-cover"
                      unoptimized
                    />
                    {news.dataType === "VIDEO" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-black/70 w-8 h-8 flex items-center justify-center">
                          <Play className="w-3 h-3 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  <ShareButtons
                    shareUrl={URL}
                    size="small"
                  />
                </div>
              </SmartLink>
            </div>
          )
        }
        )}
      </div>
    </section>
  );
});
