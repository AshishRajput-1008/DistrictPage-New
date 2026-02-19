import { NewsArticle2 } from "@/types/index";
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

export default memo(function SportsColumn({ data }: { data: NewsArticle2[] }) {
  if (!data?.length) return null;
  const category = toSlug(data[0].StateName);
  const subCategory = toSlug(data[0].DistrictName || "");
  const URL = subCategory
    ? `/${category}/${subCategory}/news/${data[0]?.Slug}`
    : `/${category}/news/${data[0]?.Slug}`;
  return (
    <section>
      <div className="mt-2 border-t-2 border-gray-200 mb-2">
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

      <h2 className="text-2xl font-500 mb-4 border-b-2 border-black">
        {data[0].DistrictNameInHindi ? data[0].DistrictNameInHindi : data[0].StateName}
      </h2>

      {/* Featured */}
      <SmartLink href={`#`} className="block group">
        <div className="relative">
          <Image
            src={apiBaseUrl + data[0].ThumbNail}
            alt={data[0].NewsHeading}
            width={400}
            height={250}
            className="w-full h-[200px] object-cover"
            unoptimized
          />
          {isGifFile(data[0].ThumbNail) && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-black/70 w-10 h-10 flex items-center justify-center">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
          )}
        </div>


        <h3 className="mt-2 text-[18px] md:text-[18px] font-500">
          <span style={{ color: "red" }}>{data[0].NewsTag}:</span>{" "}
          {data[0].NewsHeading}
        </h3>
        <h6 className="text-[12px] text-gray-400">{timeAgoInHindi(data[0].UpdatedDate)}</h6>
        <div className="flex justify-between items-center mt-2">
          <NewsMetaBar
            variant="solid"
            newsCategory={data[0].StateName}
            newsCatinhindi={data[0].DistrictNameInHindi}
            newsSubCategory={data[0].DistrictName || ""}
            newsSlug={data[0].Slug}
          />
          <ShareButtons
            shareUrl={URL}
            size="small"
          />
        </div>
      </SmartLink>

      {/* List */}
      <div className="mt-4 space-y-4">
        {data.slice(1).map((news) => {
          const category = toSlug(news.StateName);
          const subCategory = toSlug(news.DistrictName || "");
          const URL = subCategory
            ? `/${category}/${subCategory}/news/${news?.Slug}`
            : `/${category}/news/${news?.Slug}`;
          const catColor2 = getCategoryColor(news.StateName);
          return (
            <div key={news.ID} className="block group border-l-4 border-gray-600">
              <div className="flex gap-3 mb-3">
                {/* Left content */}
                <div className="flex-1 flex flex-col ml-2">
                  <SmartLink href={`#`}>
                    <h4 className="text-[18px] md:text-[18px] font-500 text-gray-900 leading-[1.4] line-clamp-3 mt-1">
                      <span className="font-500" style={{ color: catColor2 }}>{news.NewsTag}:</span>{" "}
                      {news.NewsHeading}
                    </h4>
                    <h6 className="text-[12px] text-gray-400">{timeAgoInHindi(news.UpdatedDate)}</h6>
                    <div className="mt-2">
                      <NewsMetaBar
                        variant="solid"
                        newsCategory={news.StateName}
                        newsCatinhindi={news.DistrictNameInHindi}
                        newsSubCategory={news.DistrictName || ""}
                        newsSlug={news.Slug || ""}
                      />
                    </div>
                  </SmartLink>
                </div>

                {/* Thumbnail and share buttons */}
                <div className="flex flex-col items-center gap-2">
                  <SmartLink href={`#`} className="relative w-[100px] h-[70px] rounded-md flex-shrink-0 overflow-hidden">
                    <ClientOnlyGifImage
                      article={{ thumbnail: news.ThumbNail, newsHeading: news.NewsHeading }}
                      dataType={news.DataType}
                      apiBaseUrl={apiBaseUrl}
                    />
                  </SmartLink>

                  {/* ShareButtons outside the link */}
                  <ShareButtons shareUrl={`#`} size="small" />
                </div>
              </div>

            </div>
          )
        }

        )}
      </div>



    </section>
  );
});
