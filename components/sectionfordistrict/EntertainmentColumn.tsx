import { NewsArticle2 } from "@/types/index";
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
  data: NewsArticle2[];
}) {
  if (!data?.length) return null;
  const category = toSlug(data[0].StateName);
  const subCategory = toSlug(data[0].DistrictName || "");
  const URL = subCategory
    ? `/${category}/${subCategory}/news/${data[0]?.Slug}`
    : `/${category}/news/${data[0]?.Slug}`;
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-500 mb-4 border-b-2 border-black">
        {data[0].DistrictNameInHindi ? data[0].DistrictNameInHindi : data[0].StateName}
      </h2>

      <div className="relative w-full h-[250px] md:h-[200px]">
        <ClientOnlyGifImage
          article={{ thumbnail: data[0].ThumbNail, newsHeading: data[0].NewsHeading }}
          dataType={data[0].DataType}
          apiBaseUrl={apiBaseUrl}
        />
      </div>
      <SmartLink href={`#`}>
        <h3 className="mt-2 text-[18px] font-500">
          <span style={{ color: "red" }}>{data[0].NewsTag}:</span>{" "}
          {data[0].NewsHeading}
        </h3>
        <h6 className="text-[12px] text-gray-400">{timeAgoInHindi(data[0].UpdatedDate)}</h6>
        <div className="flex flex-row items-center justify-between gap-2">
          <NewsMetaBar
            variant="solid"
            newsCategory={data[0].StateName}
            newsCatinhindi={data[0].DistrictNameInHindi}
            newsSubCategory={data[0].DistrictName || ""}
            newsSlug={data[0].Slug}
          />
          <div className="mt-2">
            <ShareButtons shareUrl={`#`} size="small" />
          </div>
        </div>
      </SmartLink>



      <div className="md:hidden mt-4 space-y-4">
        {data.slice(1).map((news) => {
          const category = toSlug(news.StateName);
          const subCategory = toSlug(news.DistrictName || "");
          const URL = subCategory
            ? `/${category}/${subCategory}/news/${news.Slug}`
            : `/${category}/news/${news.Slug}`;
          return (
            <div key={news.ID} className="block group">
              <SmartLink href={`#`}>
                <div className="flex gap-3 mb-3">
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-[18px] font-500 text-gray-900 leading-[1.4] line-clamp-3 mt-4">
                      <span className="font-500" style={{ color: "red" }}>
                        {news.NewsTag}:
                      </span>{" "}
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
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="relative w-[100px] h-[70px] rounded-md flex-shrink-0 overflow-hidden">
                      <Image
                        unoptimized
                        src={apiBaseUrl + news.ThumbNail}
                        alt={news.NewsHeading}
                        fill
                        className="rounded-lg object-cover"
                      />

                      {news.DataType === "VIDEO" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-black/70 w-8 h-8 flex items-center justify-center">
                            <Play className="w-3 h-3 text-white fill-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <ShareButtons
                      shareUrl={`#`}
                      size="small"
                    />
                  </div>
                </div>
              </SmartLink>
            </div>
          )
        }
        )}
      </div>

      <div className="hidden md:block mt-4 space-y-4">
        {data.slice(1).map((news) => {
          const category = toSlug(news.StateName);
          const subCategory = toSlug(news.DistrictName || "");
          const URL = subCategory
            ? `/${category}/${subCategory}/news/${news.Slug}`
            : `/${category}/news/${news.Slug}`;
          return (
            <div key={news.ID} className="block group">
              <SmartLink href={`#`}>
                <div className="flex gap-3 mb-3">
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-[18px] font-500 text-gray-900 leading-[1.4] line-clamp-3 mt-4">
                      <span className="text-red-500 font-500">
                        {news.NewsTag}:
                      </span>{" "}
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
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="relative w-[100px] h-[70px] rounded-md flex-shrink-0 overflow-hidden">
                      <Image
                        unoptimized
                        src={apiBaseUrl + news.ThumbNail}
                        alt={news.NewsHeading}
                        fill
                        className="rounded-lg object-cover"
                      />
                      {news.DataType === "VIDEO" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-black/70 w-8 h-8 flex items-center justify-center">
                            <Play className="w-3 h-3 text-white fill-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <ShareButtons
                      shareUrl={`#`}
                      size="small"
                    />
                  </div>
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