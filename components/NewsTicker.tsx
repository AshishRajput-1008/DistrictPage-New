import Link from "next/link";

type TickerItem = {
  newsId: number;
  newsTag: string;
  newsHeading: string;
  newsCategory: string;
  newsSubCategory: string;
  newsSlug: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Fetch breaking news on the server
async function fetchBreakingNews(): Promise<TickerItem[]> {
  if (!apiUrl) return [];

  try {
    const res = await fetch(
      `${apiUrl}BreakingNewsList?pageSize=5`,
      { next: { revalidate: 30 } }
    );

    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function NewsTicker() {
  const tickerItems = await fetchBreakingNews();

  if (!tickerItems.length) return null;

  const cleanText = (str = "") => str.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();
  const toSlug = (str = "") =>
    cleanText(str)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  return (
    <div className="sticky top-0 z-50 w-full bg-red-600 text-white py-1 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-red-700 flex items-center justify-center font-500 z-10">
        ब्रेकिंग न्यूज़
      </div>

      <div className="flex whitespace-nowrap ml-24 animate-ticker">
        {[...Array(2)].map((_, copyIndex) => (
          <div key={copyIndex} className="flex flex-shrink-0">
            {tickerItems.map((item, index) => {
              const category = toSlug(item.newsCategory) || "general";
              const subcategory = item.newsSubCategory ? toSlug(item.newsSubCategory) : null;
              const slug = item.newsSlug;
              const URL = subcategory
                ? `/${category}/${subcategory}/news/${slug}`
                : `/${category}/news/${slug}`;

              return (
                <div key={`${copyIndex}-${index}`} className="flex items-center flex-shrink-0">
                  <Link
                    prefetch={false}
                    href={URL}
                    className="mx-4 hover:text-yellow-300 cursor-pointer transition-colors"
                  >
                    <strong className="mr-2 text-yellow-300">{item.newsTag}</strong>
                    {item.newsHeading}
                  </Link>
                  <span className="text-yellow-300 mx-1">••</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
