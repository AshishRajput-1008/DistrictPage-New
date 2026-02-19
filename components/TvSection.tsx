"use client";

import Image from "next/image";
import Link from "next/link";
import NewsMetaBar from "./NewsMetaBar";
import ViewCount from "./ViewCount";
import ShareButtons from "./ShareButtons";
import timeAgoInHindi from "@/types/TimeAgoInHindi";

// Bharat News Data
const GetBharatNews = [
  {
    newsId: 10107520,
    newsTag: "क्रिप्टो पर सरकार का कड़ा शिकंजा",
    newsHeading: "मनी लॉन्ड्रिंग और टेरर फंडिंग का बड़ा खुलासा",
    newsHeadingTwo: null,
    newsCategory: "Crypto",
    newsSubCategory: "Trading Tips",
    newsSlug:
      "india-tightens-crypto-rules-49-exchanges-registered-fiu-10107520.html",
    thumbnail: "/Media/NewsImage/xkplo1t13ee.webp",
    updatedDate: "2026-01-06T17:00:07.34",
    catNameInHindi: "क्रिप्टो",
    subCatNameInHindi: null,
    viewCount: 635,
  },
  {
    newsId: 10107142,
    newsTag: "बिटकॉइन ने फिर पकड़ी रफ्तार",
    newsHeading: "निवेशकों में लौटा भरोसा",
    newsHeadingTwo: null,
    newsCategory: "Crypto",
    newsSubCategory: "Trading Tips",
    newsSlug:
      "bitcoin-surges-past-91000-after-23-days-crypto-market-sentiment-improves-10107142.html",
    thumbnail: "/Media/NewsImage/mywudfy5ipt.webp",
    updatedDate: "2026-01-05T15:13:59.41",
    catNameInHindi: "क्रिप्टो",
    subCatNameInHindi: null,
    viewCount: 324,
  },
  {
    newsId: 10106785,
    newsTag: "Crypto Market Crash या Recovery",
    newsHeading: "ग्लोबल फैक्टर्स का क्रिप्टो पर असर",
    newsHeadingTwo: null,
    newsCategory: "Crypto",
    newsSubCategory: "Trading Tips",
    newsSlug: "crypto-market-crash-or-recovery-2026-outlook-10106785.html",
    thumbnail: "/Media/NewsImage/qbzrzok4ogr.webp",
    updatedDate: "2026-01-02T14:46:03.023",
    catNameInHindi: "क्रिप्टो",
    subCatNameInHindi: null,
    viewCount: 316,
  },
  {
    newsId: 10105441,
    newsTag: "UPI और डिजिटल पेमेंट पर नया नियम",
    newsHeading: "यूजर्स को होगा सीधा असर",
    newsHeadingTwo: null,
    newsCategory: "Crypto",
    newsSubCategory: "Trading Tips",
    newsSlug: "upi-digital-payment-new-rules-10105441.html",
    thumbnail: "/Media/NewsImage/uonceuku44u.webp",
    updatedDate: "2025-12-25T12:55:39.18",
    catNameInHindi: "क्रिप्टो",
    subCatNameInHindi: null,
    viewCount: 316,
  },
  {
    newsId: 10105231,
    newsTag: "जापान में खत्म हुआ 'जीरो ब्याज' का दौर",
    newsHeading: "क्रिप्टो से लेकर शेयर बाजार तक दिखेगा बड़ा असर",
    newsHeadingTwo: null,
    newsCategory: "Crypto",
    newsSubCategory: "Trading Tips",
    newsSlug:
      "japan-rate-hike-30-year-high-interest-rate-impact-on-markets-10105231.html",
    thumbnail: "/Media/NewsImage/zvf0muqc5tj.webp",
    updatedDate: "2025-12-19T16:48:28.813",
    catNameInHindi: "क्रिप्टो",
    subCatNameInHindi: null,
    viewCount: 315,
  },
  {
    newsId: 10104097,
    newsTag: "Stock Market Fall:एशियाई बाजारों में हाहाकार",
    newsHeading: "विदेशी बाजारों में कोहराम का असर भारतीय शेयर बाजार पर",
    newsHeadingTwo: null,
    newsCategory: "Crypto",
    newsSubCategory: "Trading Tips",
    newsSlug:
      "stock-market-fall-asian-markets-crash-sensex-nifty-10104097.html",
    thumbnail: "/Media/NewsImage/1zpxhiyhdxw.webp",
    updatedDate: "2025-12-16T13:35:45.893",
    catNameInHindi: "क्रिप्टो",
    subCatNameInHindi: null,
    viewCount: 310,
  },
];


export default function TVSection() {
  // Take first 4 articles for display
  const displayArticles = GetBharatNews.slice(0, 4);

  return (
    <section className="">
      <div className="max-w-[1350px] px-3 md:px-6 py-4 mt-4 pb-2">
        {/* Section Header */}
        <div className="flex justify-between items-center">
          <div className="mb-6 pb-3 border-b-2 border-[#00bf9a]">
            <h2 className="text-2xl md:text-3xl font-500 text-gray-900 relative inline-block">
              <span className="text-gray-900">क्रिप्टो</span> दुनिया
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#00bf9a] to-transparent"></div>
            </h2>
          </div>
        </div>

        {/* Articles Grid - 2x2 on mobile, 4 columns on larger screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {displayArticles.map((article) => (
            <article key={article.newsId} className="group cursor-pointer">
              <Link href={`/${article.newsSlug}`}>
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-none mb-2 lg:mb-4">
                  <Image
                    src={`https://mapi.sadaivsatya.com${article.thumbnail}`}
                    alt={article.newsHeading}
                    width={400}
                    height={240}
                    className="w-full h-[140px] sm:h-[180px] lg:h-[240px] object-cover"
                    unoptimized
                  />
                </div>

                {/* Article Content */}
                {/* Meta */}
                <div className="space-y-1">
                  {/* <div className="flex items-center justify-between gap-1 text-[10px] lg:text-[12px] text-gray-600 mb-1 lg:mb-2">
                    <span className="truncate">
                      {article.updatedDate
                        ? formatDate(article.updatedDate)
                        : ""}
                    </span>
                    <ViewCount count={article.viewCount} />
                  </div> */}

                  <div className="flex justify-between"></div>
                  <div className="flex justify-between">
                    <NewsMetaBar
                      variant="solid"
                      newsCategory={article.newsCategory}
                      newsCatinhindi={article.catNameInHindi}
                      newsSubCategory={article.newsSubCategory || ""}
                      newsSlug={article.newsSlug || ""}
                      
                    />

                    <ShareButtons
                      shareUrl={`/${article.newsSlug}`}
                      size="small"
                    />
                  </div>
                  {/* Title */}
                  <div
                    style={{ marginTop: "8px" }}
                    className="text-[13px] lg:text-[18px] font-medium text-black transition-colors leading-snug line-clamp-2 lg:line-clamp-2"
                  >
                    <span className="text-[#00bf9a]">{article.newsTag}:</span>{" "}
                    {article.newsHeading}
                  </div>

                  <div className="flex gap-1 text-[11px] md:text-[12px] text-gray-600 mb-2 md:mb-3">


                    <span className="text-[13px] opacity-80">
                      {article.updatedDate
                        ? timeAgoInHindi(article.updatedDate)
                        : ""}
                    </span>
                    {/* <ViewCount count={article.viewCount} /> */}



                  </div>
                </div>

                {/* Bottom Border */}
                <div className="mt-4 lg:mt-4 border-b border-dotted border-black"></div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
