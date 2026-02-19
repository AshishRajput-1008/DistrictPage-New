import { toSlug } from "@/lib/news-api";
import { memo } from "react";
import SmartLink from "../SmartLink";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import ShareButtons from "../ShareButtons";
import { getCategoryColor } from "@/lib/getCategoryColor";
import { NewsArticle2 } from "@/types";

export default memo(function BusinessColumn({ data }: { data: NewsArticle2[] }) {
  if (!data?.length) return null;

  return (
    <section className="">
      <h2 className="text-2xl font-500 mb-4 border-b-2 border-black">
        {data[0].DistrictNameInHindi ? data[0].DistrictNameInHindi : data[0].StateName}
      </h2>

      <div className="space-y-4">
        {data.map((n) => {
          const category = toSlug(n.StateName);
          const subCategory = toSlug(n.DistrictName || "");
          const URL = subCategory
            ? `/${category}/${subCategory}/news/${n.Slug}`
            : `/${category}/news/${n.Slug}`;
          const catColor = getCategoryColor(n.StateName);
          return (
            <SmartLink
              key={n.ID}
              href={`#`}
              className="block border-b pb-3"
            >
              <p className="text-xs text-gray-500 mb-1">
                {n.DistrictNameInHindi} • {n.ViewCount} views
              </p>
              <h3 className="text-[18px] font-500 mt-2">
                <span style={{ color: catColor }} className="md:text-gray-900">{n.NewsTag}:</span>{" "}
                <span className="text-gray-900 md:text-gray-700">{n.NewsHeading}</span>
              </h3>
              <div className="flex items-center justify-between">
                <h6 className="text-[12px] text-gray-400">{timeAgoInHindi(n.UpdatedDate)}</h6>
                <ShareButtons shareUrl={`#`} size="small" />
              </div>
            </SmartLink>
          )
        }
        )}
      </div>
    </section>
  );
});
