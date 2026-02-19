"use client";
import Image from "next/image";
import Link from "next/link";
import ShareButtons from "./ShareButtons";
import NewsMetaBar from "./NewsMetaBar";
import timeAgoInHindi from "@/types/TimeAgoInHindi";

// Rajneeti (Politics) articles data
const rajneetiArticles = [
  {
    newsId: 10109095,
    newsTag: "India-US Trade Deal",
    newsHeading: "नए अमेरिकी राजदूत सर्जियो गोर का बड़ा बयान",
    newsHeadingTwo: null,
    newsCategory: "Politics",
    newsSubCategory: "International Relations",
    newsSlug:
      "india-us-trade-deal-talks-resume-sergio-gor-modi-trump-friendship-10109095.html",
    thumbnail: "/Media/NewsImage/2lt1wiu2ig0.webp",
    updatedDate: "2026-01-13T15:37:22.037",
    catNameInHindi: "राजनीति",
    subCatNameInHindi: null,
    viewCount: 650,
  },
  {
    newsId: 10108570,
    newsTag: "विधायक संजय पाठक की पत्नी पर गंभीर आरोप",
    newsHeading: "कलेक्टर ऑफ स्टाम्प ने शुरू की जांच",
    newsHeadingTwo: null,
    newsCategory: "Politics",
    newsSubCategory: "State Politics",
    newsSlug:
      "stamp-duty-evasion-allegation-sanjay-pathak-wife-land-deal-10108570.html",
    thumbnail: "/Media/NewsImage/t2qmovhcpbo.webp",
    updatedDate: "2026-01-12T13:45:27.44",
    catNameInHindi: "राजनीति",
    subCatNameInHindi: null,
    viewCount: 653,
  },
  {
    newsId: 10108297,
    newsTag: "असम में बटद्रवा थान पुनर्विकास परियोजना का उद्घाटन",
    newsHeading: "अमित शाह का बड़ा बयान",
    newsHeadingTwo: null,
    newsCategory: "Politics",
    newsSubCategory: "Parliament",
    newsSlug: "amit-shah-gopinath-bordoloi-assam-india-history-10108297.html",
    thumbnail: "/Media/NewsImage/5jemlybvrf0.webp",
    updatedDate: "2026-01-09T16:35:15.913",
    catNameInHindi: "राजनीति",
    subCatNameInHindi: null,
    viewCount: 556,
  },
  {
    newsId: 10107961,
    newsTag: "शिवराज सिंह चौहान का कांग्रेस पर तीखा हमला",
    newsHeading: "जनता को गुमराह करने का आरोप",
    newsHeadingTwo: null,
    newsCategory: "Politics",
    newsSubCategory: "Elections",
    newsSlug:
      "shivraj-singh-chouhan-attacks-congress-mgnrega-bachao-sangram-corruption-10107961.html",
    thumbnail: "/Media/NewsThumb/dr14ct52s2d.gif",
    updatedDate: "2026-01-08T14:21:32.64",
    catNameInHindi: "राजनीति",
    subCatNameInHindi: null,
    viewCount: 745,
  },
  {
    newsId: 10107856,
    newsTag: "तुमको मिर्ची लगी तो मैं क्या करूं?",
    newsHeading: "महायुति की निर्विरोध जीत पर",
    newsHeadingTwo: null,
    newsCategory: "Politics",
    newsSubCategory: "Elections",
    newsSlug:
      "devendra-fadnavis-opposition-attack-mahayuti-unopposed-wins-maharashtra-civic-polls-10107856.html",
    thumbnail: "/Media/NewsImage/ijnxuejxzmg.webp",
    updatedDate: "2026-01-07T17:13:59.443",
    catNameInHindi: "राजनीति",
    subCatNameInHindi: null,
    viewCount: 773,
  },
  {
    newsId: 10107688,
    newsTag: "तमिलनाडु में सीटों पर सियासी संग्राम",
    newsHeading: "क्या विजय की TVK बनेगी नया विकल्प?",
    newsHeadingTwo: null,
    newsCategory: "Politics",
    newsSubCategory: "Elections",
    newsSlug:
      "tamil-nadu-seat-sharing-row-congress-dmk-32-seat-offer-vijay-tvk-alliance-10107688.html",
    thumbnail: "/Media/NewsImage/jkbbjgfrjua.webp",
    updatedDate: "2026-01-07T15:03:44.64",
    catNameInHindi: "राजनीति",
    subCatNameInHindi: null,
    viewCount: 691,
  },
  {
    newsId: 10107457,
    newsTag: "नाजुक शांति समझौता टूटा",
    newsHeading: "ट्रंप के शांति दावों पर सवाल",
    newsHeadingTwo: null,
    newsCategory: "Politics",
    newsSubCategory: "World Politics",
    newsSlug:
      "fragile-peace-thailand-cambodia-border-conflict-global-risk-10107457.html",
    thumbnail: "/Media/NewsImage/fclptjc0p2l.webp",
    updatedDate: "2026-01-06T16:40:32.73",
    catNameInHindi: "राजनीति",
    subCatNameInHindi: null,
    viewCount: 572,
  },
  {
    newsId: 10107016,
    newsTag: "अमेरिका का वेनेज़ुएला पर बड़ा हमला",
    newsHeading: "दुनिया में मचा हड़कंप",
    newsHeadingTwo: null,
    newsCategory: "Politics",
    newsSubCategory: "World Politics",
    newsSlug:
      "us-claims-capture-of-venezuela-president-nicolas-maduro-after-caracas-attacks-10107016.html",
    thumbnail: "/Media/NewsImage/2bpr4jksgoc.webp",
    updatedDate: "2026-01-05T13:05:36.033",
    catNameInHindi: "राजनीति",
    subCatNameInHindi: null,
    viewCount: 184,
  },
];

export default function RajneetiSection() {
  const displayArticles = rajneetiArticles.slice(0, 4);
  return (
    <section className="">
      <div className="max-w-[1350px] px-3 md:px-6 py-4 pb-2">
        <div className="flex justify-between items-center mb-2 md:mb-[12px]">
          <div className="mb-6 pb-3 border-b-2 border-[#ea580c]">
            <h2 className="text-2xl md:text-3xl font-500 text-gray-900 relative inline-block">
              <span className="text-gray-900">राजनीति</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#ea580c] to-transparent"></div>
            </h2>
          </div>
        </div>

        {/* Articles Grid - 2x2 on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {displayArticles.map((article) => (
            <article
              key={article.newsId}
              className="group cursor-pointer flex flex-col bg-white"
            >
              <Link
                href={`/${article.newsSlug}`}
                className="flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden mb-2 md:mb-3">
                  <Image
                    src={`https://mapi.sadaivsatya.com${article.thumbnail}`}
                    alt={article.newsHeading}
                    width={400}
                    height={215}
                    className="w-full h-32 md:h-48 lg:h-[215px] object-cover"
                    unoptimized

                  />
                </div>

                {/* Article Content */}
                <div className="flex-grow flex flex-col px-1 md:px-0">
                  {/* Date and View Count */}

                  <div className="mb-2 flex justify-between">
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

                  {/* Title - Primary Content */}
                  <div className="mb-2 md:mb-3">
                    <h3 className="text-[14px] md:text-[17px] lg:text-[18px] font-medium text-black transition-colors leading-snug line-clamp-3 lg:line-clamp-2">
                      <span className="text-[#ea580c] mr-[2px]">
                        {article.newsTag}:
                      </span>{" "}
                      {article.newsHeading}
                    </h3>
                  </div>

                  {/* Meta Bar */}


                  <div className="flex gap-1 text-[11px] md:text-[12px] text-gray-600 mb-2 md:mb-3">


                    <span className="text-[13px] opacity-80">
                      {article.updatedDate
                        ? timeAgoInHindi(article.updatedDate)
                        : ""}
                    </span>
                    {/* <ViewCount count={article.viewCount} /> */}



                  </div>

                  {/* Bottom Border - Fixed Position */}
                  <div className="mt-auto pt-2 md:pt-4 border-t border-dotted border-gray-600"></div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
