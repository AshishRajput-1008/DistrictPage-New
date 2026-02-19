import { toSlug } from "@/lib/news-api";
import { NewsArticle } from "@/types/index";
import { memo } from "react";
import SmartLink from "../SmartLink";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import ShareButtons from "../ShareButtons";
import { getCategoryColor } from "@/lib/getCategoryColor";

export default memo(function BusinessColumn({ data }: { data: NewsArticle[] }) {
  if (!data?.length) return null;

  return (
    <section className="">
      <h2 className="text-2xl font-500 mb-4 border-b-2 border-black">
        कारोबार
      </h2>

      <div className="space-y-4">
        {data.map((n) => {
          const category = toSlug(n.newsCategory);
          const subCategory = toSlug(n.newsSubCategory || "");
          const URL = subCategory
            ? `/${category}/${subCategory}/news/${n.newsSlug}`
            : `/${category}/news/${n.newsSlug}`;
          const catColor = getCategoryColor(n.newsCategory);
          return (
            <SmartLink
              key={n.newsId}
              href={URL}
              className="block border-b pb-3"
            >
              <p className="text-xs text-gray-500 mb-1">
                {n.catNameInHindi} • {n.viewCount} views
              </p>
              <h3 className="text-[18px] font-500 mt-2">
                <span style={{ color: catColor }} className="md:text-gray-900">{n.newsTag}:</span>{" "}
                <span className="text-gray-900 md:text-gray-700">{n.newsHeading}</span>
              </h3>
              <div className="flex items-center justify-between">
                <h6 className="text-[12px] text-gray-400">{timeAgoInHindi(n.updatedDate)}</h6>
                <ShareButtons shareUrl={URL} size="small" />
              </div>
            </SmartLink>
          )
        }
        )}
      </div>
    </section>
  );
});
