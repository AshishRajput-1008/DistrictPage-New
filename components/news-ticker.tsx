import Link from "next/link";

type TickerItem = {
  newsId: number;
  newsTag: string;
  newsHeading: string;
  newsCategory: string;
  newsSubCategory: string | null;
  newsSlug: string;
};

const apiUrl = "https://mapi.sadaivsatya.com/api/AdminApi/";

async function fetchBreakingNews(): Promise<TickerItem[]> {
  try {
    const res = await fetch(`${apiUrl}BreakingNewsList?pageSize=5`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!res.ok) {
      console.error("Failed to fetch breaking news:", res.status);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching breaking news:", error);
    return [];
  }
}

export default async function NewsTickerServer() {
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
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes ticker {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media(max-width: 767px) {
  .animate-ticker {
    animation: ticker 5s linear infinite;
  }
}

@media(min-width: 768px) {
  .animate-ticker {
    animation: ticker 15s linear infinite;
  }
}

.animate-ticker:hover {
  animation-play-state: paused;
}
        `
      }} />

      <div
        className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#0a112d] to-[#111827] text-white py-1 overflow-hidden"
        role="region"
        aria-label="Breaking news ticker"
      >
        {/* Breaking News Label */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-[#dc0505] flex items-center justify-center font-bold z-10 text-xs sm:text-[17px] px-2"
          aria-hidden="true"
        >
          <span className="hidden sm:inline">ब्रेकिंग न्यूज़</span>
          <span className="sm:hidden">ब्रेकिंग न्यूज़</span>
        </div>

        {/* Ticker Content */}
        <div className="flex whitespace-nowrap ml-20 sm:ml-28 animate-ticker">
          {[...Array(2)].map((_, copyIndex) => (
            <div key={copyIndex} className="flex flex-shrink-0">
              {tickerItems.map((item, index) => {
                const category = toSlug(item.newsCategory) || "general";
                const subcategory = item.newsSubCategory
                  ? toSlug(item.newsSubCategory)
                  : null;
                const slug = item.newsSlug;
                const URL = subcategory
                  ? `/${category}/${subcategory}/news/${slug}`
                  : `/${category}/news/${slug}`;

                return (
                  <div
                    key={`${copyIndex}-${index}`}
                    className="flex items-center flex-shrink-0"
                  >
                    <Link
                      prefetch={false}
                      href={URL}
                      className="mx-4 cursor-pointer transition-colors text-[14px] lg:text-[17px] focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-[#0a112d] rounded px-1"
                      aria-label={`${item.newsTag}: ${item.newsHeading}`}
                    >
                      <strong className="">
                        {item.newsTag}
                      </strong> <span className="text-white mr-1 font-800">{":"}</span>
                      {item.newsHeading}
                    </Link>
                    <span className="text-[#ecdd3b] mx-1" aria-hidden="true">
                      ||
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}