import { NewsArticle } from "@/types/index";
import Image from "next/image";
import Link from "next/link";
import NewsMetaBar from "../NewsMetaBar";
import ShareButtons from "../ShareButtons";
import { toSlug } from "@/lib/news-api";
import SmartLink from "../SmartLink";
import { Play } from "lucide-react";
import { memo } from "react";
import ClientOnlyGifImage from "../ClientOnlyGifImage";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import { getCategoryColor } from "@/lib/getCategoryColor";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://mapi.sadaivsatya.com";
const isGifFile = (url?: string | null) => (url ? /\.gif$/i.test(url) : false);

export default memo(function EntertainmentColumn({
  data,
}: {
  data: NewsArticle[];
}) {
  if (!data?.length) return null;
  const category = toSlug(data[1].newsCategory);
  const subCategory = toSlug(data[1].newsSubCategory || "");
  const URL = subCategory
    ? `/${category}/${subCategory}/news/${data[1]?.newsSlug}`
    : `/${category}/news/${data[1]?.newsSlug}`;
  const catColor = getCategoryColor(data[1].newsCategory);
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-500 mb-4 border-b-2 border-black">
        रंगीन पर्दा
      </h2>

      <div className="relative w-full h-[250px] md:h-[200px]">
        <ClientOnlyGifImage
          article={{ thumbnail: data[1].thumbnail, newsHeading: data[1].newsHeading }}
          dataType={data[1].dataType}
          apiBaseUrl={apiBaseUrl}
        />
      </div>
      <SmartLink href={URL}>
        <h3 className="mt-2 text-[18px] font-500">
          <span style={{ color: catColor }}>{data[1].newsTag}:</span>{" "}
          {data[1].newsHeading}
        </h3>
        <h6 className="text-[12px] text-gray-400">{timeAgoInHindi(data[1].updatedDate)}</h6>
        <div className="flex flex-row items-center justify-between gap-2">
          <NewsMetaBar
            variant="solid"
            newsCategory={data[1].newsCategory}
            newsCatinhindi={data[1].catNameInHindi}
            newsSubCategory={data[1].newsSubCategory || ""}
            newsSlug={data[1].newsSlug}
          />
          <div className="mt-2">
            <ShareButtons shareUrl={URL} size="small" />
          </div>
        </div>
      </SmartLink>



      <div className="md:hidden mt-4 space-y-4">
        {data.slice(2).map((news) => {
          const category = toSlug(news.newsCategory);
          const subCategory = toSlug(news.newsSubCategory || "");
          const URL = subCategory
            ? `/${category}/${subCategory}/news/${news.newsSlug}`
            : `/${category}/news/${news.newsSlug}`;
          const catColor = getCategoryColor(news.newsCategory);
          return (
            <div key={news.newsId} className="block group">
              <Link href={URL}>
                <div className="flex gap-3 mb-3">
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-[18px] font-500 text-gray-900 leading-[1.4] line-clamp-3 mt-4">
                      <span className="font-500" style={{ color: catColor }}>
                        {news.newsTag}:
                      </span>{" "}
                      {news.newsHeading}
                    </h4>
                    <h6 className="text-[12px] text-gray-400">{timeAgoInHindi(news.updatedDate)}</h6>
                    <div className="mt-2">
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
                    <div className="relative w-[100px] h-[70px] rounded-md flex-shrink-0 overflow-hidden">
                      <Image
                        unoptimized
                        src={apiBaseUrl + news.thumbnail}
                        alt={news.newsHeading}
                        fill
                        className="rounded-lg object-cover"
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
                </div>
              </Link>
            </div>
          )
        }
        )}
      </div>

      <div className="hidden md:block mt-4 space-y-4">
        {data.slice(2).map((news) => {
          const category = toSlug(news.newsCategory);
          const subCategory = toSlug(news.newsSubCategory || "");
          const URL = subCategory
            ? `/${category}/${subCategory}/news/${news.newsSlug}`
            : `/${category}/news/${news.newsSlug}`;
          return (
            <div key={news.newsId} className="block group">
              <Link href={URL}>
                <div className="flex gap-3 mb-3">
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-[18px] font-500 text-gray-900 leading-[1.4] line-clamp-3 mt-4">
                      <span className="text-[#8800ff] font-500">
                        {news.newsTag}:
                      </span>{" "}
                      {news.newsHeading}
                    </h4>
                    <h6 className="text-[12px] text-gray-400">{timeAgoInHindi(news.updatedDate)}</h6>
                    <div className="mt-2">
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
                    <div className="relative w-[100px] h-[70px] rounded-md flex-shrink-0 overflow-hidden">
                      <Image
                        unoptimized
                        src={apiBaseUrl + news.thumbnail}
                        alt={news.newsHeading}
                        fill
                        className="rounded-lg object-cover"
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
                </div>
              </Link>
            </div>
          )
        }
        )}
      </div>
    </section>
  );
});