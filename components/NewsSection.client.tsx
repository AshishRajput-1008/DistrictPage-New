"use client";
import NewsCategory from "@/components/NewsCategory";
import { ApiNews } from "@/types/news";

function mapToCategory(data: ApiNews[]) {
  if (!Array.isArray(data) || data.length === 0) return null;

  return {
    title: data[0]?.catNameInHindi?.trim() ?? "अन्य",
    image: "https://mapi.sadaivsatya.com" + (data[0]?.thumbnail ?? ""),
    mainHeadline: data[0]?.newsHeading ?? "",
    maintag: data[0]?.newsTag ?? "",
    category: data[0]?.newsCategory ?? "general",
    subCategory: data[0]?.newsSubCategory ?? "",
    slug: data[0]?.newsSlug ?? "",
    articles: data.slice(1).map(n => ({
      title: n.newsHeading,
      maintag: n.newsTag,
      slug: n.newsSlug,
      category: n.newsCategory,
      dataType: n.dataType,
      subCategory: n.newsSubCategory,
    })),
  };
}

export default function NewsSectionClient({
  mystery,
  celebrity,
  spirituality,
  astrology,
}: {
  mystery: ApiNews[];
  celebrity: ApiNews[];
  spirituality: ApiNews[];
  astrology: ApiNews[];
}) {
  const categories = [mystery, celebrity, spirituality, astrology]
    .map(mapToCategory)
    .filter(Boolean);

  return (
    <div className="max-w-[1350px] py-4 pb-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, idx) => (
          <NewsCategory key={idx} {...cat!} />
        ))}
      </div>
    </div>
  );
}
