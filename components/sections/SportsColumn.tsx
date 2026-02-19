import { NewsArticle } from "@/types/index";
import Image from "next/image";
import { memo } from "react";
import NewsMetaBar from "../NewsMetaBar";
import ShareButtons from "../ShareButtons";
import digitalADV from "@/public/redApi.webp";
import { toSlug } from "@/lib/news-api";
import SmartLink from "../SmartLink";
import { Play } from "lucide-react";
import ClientOnlyGifImage from "../ClientOnlyGifImage";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import { getCategoryColor } from "@/lib/getCategoryColor";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://mapi.sadaivsatya.com";
const isGifFile = (url?: string | null) => (url ? /\.gif$/i.test(url) : false);

export default memo(function SportsColumn({ data }: { data: NewsArticle[] }) {
  if (!data?.length) return null;
  const category = toSlug(data[1].newsCategory);
  const subCategory = toSlug(data[1].newsSubCategory || "");
  const URL = subCategory
    ? `/${category}/${subCategory}/news/${data[1]?.newsSlug}`
    : `/${category}/news/${data[1]?.newsSlug}`;
  const catColor = getCategoryColor(data[1].newsCategory);
  return (
    <section>
      <h2 className="text-2xl font-500 mb-4 border-b-2 border-black">
        खेल समाचार
      </h2>

      {/* Featured */}
      <SmartLink href={URL} className="block group">
        <div className="relative">
          <Image
            src={apiBaseUrl + data[1].thumbnail}
            alt={data[1].newsHeading}
            width={400}
            height={250}
            className="w-full h-[200px] object-cover"
            unoptimized
          />
          {isGifFile(data[1].thumbnail) && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-black/70 w-10 h-10 flex items-center justify-center">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
          )}
        </div>


        <h3 className="mt-2 text-[18px] md:text-[18px] font-500">
          <span style={{ color: catColor }}>{data[1].newsTag}:</span>{" "}
          {data[1].newsHeading}
        </h3>
        <h6 className="text-[12px] text-gray-400">{timeAgoInHindi(data[1].updatedDate)}</h6>
        <div className="flex justify-between items-center mt-2">
          <NewsMetaBar
            variant="solid"
            newsCategory={data[1].newsCategory}
            newsCatinhindi={data[1].catNameInHindi}
            newsSubCategory={data[1].newsSubCategory || ""}
            newsSlug={data[1].newsSlug}
          />
          <ShareButtons
            shareUrl={URL}
            size="small"
          />
        </div>
      </SmartLink>

      {/* List */}
      <div className="mt-4 space-y-4">
        {data.slice(2).map((news) => {
          const category = toSlug(news.newsCategory);
          const subCategory = toSlug(news.newsSubCategory || "");
          const URL = subCategory
            ? `/${category}/${subCategory}/news/${news?.newsSlug}`
            : `/${category}/news/${news?.newsSlug}`;
          const catColor2 = getCategoryColor(news.newsCategory);
          return (
            <div key={news.newsId} className="block group">
              <div className="flex gap-3 mb-3">
                {/* Left content */}
                <div className="flex-1 flex flex-col">
                  <SmartLink href={URL}>
                    <h4 className="text-[18px] md:text-[18px] font-500 text-gray-900 leading-[1.4] line-clamp-3 mt-1">
                      <span className="font-500" style={{ color: catColor2 }}>{news.newsTag}:</span>{" "}
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
                  </SmartLink>
                </div>

                {/* Thumbnail and share buttons */}
                <div className="flex flex-col items-center gap-2">
                  <SmartLink href={URL} className="relative w-[100px] h-[70px] rounded-md flex-shrink-0 overflow-hidden">
                    <ClientOnlyGifImage
                      article={{ thumbnail: news.thumbnail, newsHeading: news.newsHeading }}
                      dataType={news.dataType}
                      apiBaseUrl={apiBaseUrl}
                    />
                  </SmartLink>

                  {/* ShareButtons outside the link */}
                  <ShareButtons shareUrl={URL} size="small" />
                </div>
              </div>

            </div>
          )
        }

        )}
      </div>
      <div className="mt-2 border-t-2 border-gray-200">
        <a
          href="https://ulogin.payzonapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src={digitalADV}
            alt="Digital Marketing Advertisement"
            width={600}
            height={300}
            className="w-full cursor-pointer object-contain"
          />
        </a>
      </div>

    </section>
  );
});
