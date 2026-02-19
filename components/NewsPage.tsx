import Image from "next/image";
import Link from "next/link";
import ShareButtons from "./ShareButtons";

// Mock Crypto Data
const cryptoNews = [
  {
    newsId: 10107520,
    newsTag: "क्रिप्टो पर सरकार का कड़ा शिकंजा",
    newsHeading: "मनी लॉन्ड्रिंग और टेरर फंडिंग का बड़ा खुलासा",
    newsCategory: "Crypto",
    newsSubCategory: "Trading Tips",
    newsSlug:
      "india-tightens-crypto-rules-49-exchanges-registered-fiu-10107520.html",
    thumbnail: "/Media/NewsImage/xkplo1t13ee.webp",
    updatedDate: "2026-01-06T17:00:07.34",
    catNameInHindi: "क्रिप्टो",
    viewCount: 635,
  },
  {
    newsId: 10107142,
    newsTag: "बिटकॉइन ने फिर पकड़ी रफ्तार",
    newsHeading: "निवेशकों में लौटा भरोसा",
    newsCategory: "Crypto",
    newsSubCategory: "Trading Tips",
    newsSlug:
      "bitcoin-surges-past-91000-after-23-days-crypto-market-sentiment-improves-10107142.html",
    thumbnail: "/Media/NewsImage/mywudfy5ipt.webp",
    updatedDate: "2026-01-05T15:13:59.41",
    catNameInHindi: "क्रिप्टो",
    viewCount: 324,
  },
  {
    newsId: 10106785,
    newsTag: "Crypto Market Crash या Recovery",
    newsHeading: "ग्लोबल फैक्टर्स का क्रिप्टो पर असर",
    newsCategory: "Crypto",
    newsSubCategory: "Trading Tips",
    newsSlug: "crypto-market-crash-or-recovery-2026-outlook-10106785.html",
    thumbnail: "/Media/NewsImage/qbzrzok4ogr.webp",
    updatedDate: "2026-01-02T14:46:03.023",
    catNameInHindi: "क्रिप्टो",
    viewCount: 316,
  },
  {
    newsId: 10105441,
    newsTag: "UPI और डिजिटल पेमेंट पर नया नियम",
    newsHeading: "यूजर्स को होगा सीधा असर",
    newsCategory: "Crypto",
    newsSubCategory: "Trading Tips",
    newsSlug: "upi-digital-payment-new-rules-10105441.html",
    thumbnail: "/Media/NewsImage/uonceuku44u.webp",
    updatedDate: "2025-12-25T12:55:39.18",
    catNameInHindi: "क्रिप्टो",
    viewCount: 316,
  },
  // {
  //   newsId: 10105231,
  //   newsTag: "जापान में खत्म हुआ 'जीरो ब्याज' का दौर",
  //   newsHeading: "क्रिप्टो से लेकर शेयर बाजार तक दिखेगा बड़ा असर",
  //   newsCategory: "Crypto",
  //   newsSubCategory: "Trading Tips",
  //   newsSlug:
  //     "japan-rate-hike-30-year-high-interest-rate-impact-on-markets-10105231.html",
  //   thumbnail: "/Media/NewsImage/zvf0muqc5tj.webp",
  //   updatedDate: "2025-12-19T16:48:28.813",
  //   catNameInHindi: "क्रिप्टो",
  //   viewCount: 315,
  // },
];

// Taaza Halachal News Data
const taazaKhabarNews = [
  {
    newsId: 10109200,
    newsTag: "गिग वर्कर्स की सुरक्षा को प्राथमिकता",
    newsHeading: "श्रम मंत्री मनसुख मांडविया की सख्ती के बाद",
    newsCategory: "Taaza Halachal",
    newsSubCategory: "Breaking News",
    newsSlug:
      "10-minute-delivery-stopped-blinkit-zepto-swiggy-zomato-10109200.html",
    thumbnail: "/Media/NewsImage/bscz0rbuvaf.webp",
    updatedDate: "2026-01-13T16:46:01.22",
    catNameInHindi: "ताज़ा हलचल",
    viewCount: 325,
  },
  {
    newsId: 10109179,
    newsTag: "श्रीहरिकोटा से PSLV-C62 की 64वीं उड़ान",
    newsHeading: "लगातार दूसरी बार सैटेलाइट लॉन्च में नाकामी",
    newsCategory: "Taaza Halachal",
    newsSubCategory: "Breaking News",
    newsSlug:
      "isro-pslv-c62-mission-failure-second-consecutive-launch-setback-10109179.html",
    thumbnail: "/Media/NewsImage/dvfaosjoaea.webp",
    updatedDate: "2026-01-13T16:27:42.163",
    catNameInHindi: "ताज़ा हलचल",
    viewCount: 632,
  },
  {
    newsId: 10108759,
    newsTag: "सतारा में दिल दहला देने वाला दृश्य",
    newsHeading: "स्ट्रेचर पर पत्नी देख फफक पड़े लोग",
    newsCategory: "Taaza Halachal",
    newsSubCategory: "Breaking News",
    newsSlug:
      "satara-newborn-daughter-farewell-martyred-army-jawan-pramod-jadhav-10108759.html",
    thumbnail: "/Media/NewsImage/s24tdvceupc.webp",
    updatedDate: "2026-01-12T15:03:51.527",
    catNameInHindi: "ताज़ा हलचल",
    viewCount: 635,
  },
  {
    newsId: 10108633,
    newsTag: "16 मौतों के जिम्मेदार कौन",
    newsHeading: "दूषित पानी से इंदौर में 16 मौतें, जनता में आक्रोश",
    newsCategory: "Taaza Halachal",
    newsSubCategory: "Breaking News",
    newsSlug:
      "indore-bhagirathpura-water-contamination-16-deaths-action-demanded-10108633.html",
    thumbnail: "/Media/NewsImage/ehx2t5gdpgb.webp",
    updatedDate: "2026-01-12T14:10:45.47",
    catNameInHindi: "ताज़ा हलचल",
    viewCount: 628,
  },
  {
    newsId: 10108465,
    newsTag: "कटनी में शुद्ध जल का दावा खोखला",
    newsHeading: "इंदौर हादसे के बाद भी कटनी में सबक नहीं",
    newsCategory: "Taaza Halachal",
    newsSubCategory: "Breaking News",
    newsSlug:
      "katni-contaminated-drinking-water-tds-levels-health-risk-10108465.html",
    thumbnail: "/Media/NewsImage/1n5mgk3svh2.webp",
    updatedDate: "2026-01-10T14:23:57.497",
    catNameInHindi: "ताज़ा हलचल",
    viewCount: 343,
  },
];

// Sports News Data
const sportsNews = [
  {
    newsId: 10108675,
    newsTag: "बनारसी बोली में PM मोदी का दिल जीतता पल",
    newsHeading: "72वीं नेशनल वॉलीबॉल चैंपियनशिप का वर्चुअल उद्घाटन",
    newsCategory: "Sports News",
    newsSubCategory: "Tournament Updates",
    newsSlug:
      "pm-modi-banarasi-boli-national-volleyball-championship-varanasi-10108675.html",
    thumbnail: "/Media/NewsThumb/nx4luicbrfd.gif",
    updatedDate: "2026-01-12T14:24:24.703",
    catNameInHindi: "खेल समाचार",
    viewCount: 645,
  },
  {
    newsId: 10108381,
    newsTag: "WPL 2026 का आगाज",
    newsHeading: "22 मैच, 5 टीमें और नया जोश",
    newsCategory: "Sports News",
    newsSubCategory: "Cricket",
    newsSlug:
      "wpl-2026-begins-rcb-beat-mi-by-3-wickets-opening-match-10108381.html",
    thumbnail: "/Media/NewsImage/fzpemds2vbv.webp",
    updatedDate: "2026-01-10T13:13:00.15",
    catNameInHindi: "खेल समाचार",
    viewCount: 345,
  },
  {
    newsId: 10107940,
    newsTag: "प्यारा क्रिकेटिंग पल",
    newsHeading: "वीडियो हुआ वायरल",
    newsCategory: "Sports News",
    newsSubCategory: "Cricket",
    newsSlug:
      "arjun-tendulkar-birthday-yograj-singh-dance-video-viral-10107940.html",
    thumbnail: "/Media/NewsThumb/nihondg2ogq.gif",
    updatedDate: "2026-01-08T14:01:49.847",
    catNameInHindi: "खेल समाचार",
    viewCount: 1133,
  },
  {
    newsId: 10107709,
    newsTag: "चुनाव आयोग की 'गुगली' में फंसे शमी",
    newsHeading: "क्रिकेट पिच से कानूनी पिच तक",
    newsCategory: "Sports News",
    newsSubCategory: "Cricket",
    newsSlug: "mohammed-shami-election-commission-sir-notice-10107709.html",
    thumbnail: "/Media/NewsImage/w1f0dnkie2e.webp",
    updatedDate: "2026-01-07T15:34:30.913",
    catNameInHindi: "खेल समाचार",
    viewCount: 695,
  },
  {
    newsId: 10107226,
    newsTag: "प्रेमानंद महाराज",
    newsHeading: "अभ्यास और समर्पण पर मिली जीवन बदलने वाली सीख",
    newsCategory: "Sports News",
    newsSubCategory: "Cricket",
    newsSlug:
      "deepti-sharma-premanand-maharaj-blessings-after-2025-womens-cricket-world-cup-10107226.html",
    thumbnail: "/Media/NewsImage/qeuuynxk3jl.webp",
    updatedDate: "2026-01-05T16:40:25.43",
    catNameInHindi: "खेल समाचार",
    viewCount: 283,
  },
];

// Colorful Curtains (Entertainment) News Data
const entertainmentNews = [
  {
    newsId: 10109116,
    newsTag: "यश की 'टॉक्सिक' बनी",
    newsHeading: "'टॉक्सिक' का टीजर रिलीज होते ही मचा बवाल",
    newsCategory: "Colorful Curtains",
    newsSubCategory: "Bollywood",
    newsSlug:
      "toxic-movie-akshay-oberoi-toughest-role-yash-teaser-controversy-10109116.html",
    thumbnail: "/Media/NewsImage/4ezsqg2lq5w.webp",
    updatedDate: "2026-01-13T16:02:59.187",
    catNameInHindi: "रंगीन पर्दा",
    viewCount: 630,
  },
  {
    newsId: 10108780,
    newsTag: "गोल्डन ग्लोब अवॉर्ड्स 2026",
    newsHeading: "'वन बैटल आफ्टर अनदर' और 'एडोलसेंस' का जलवा",
    newsCategory: "Colorful Curtains",
    newsSubCategory: "Hollywood",
    newsSlug: "golden-globe-awards-2026-winners-full-list-10108780.html",
    thumbnail: "/Media/NewsImage/5uey4qo1omb.webp",
    updatedDate: "2026-01-12T15:48:18.74",
    catNameInHindi: "रंगीन पर्दा",
    viewCount: 648,
  },
  {
    newsId: 10108318,
    newsTag: "'किस किसको प्यार करूं 2'",
    newsHeading: "फ्लॉप कलेक्शन और कम स्क्रीन्स ने मेकर्स को किया मजबूर",
    newsCategory: "Colorful Curtains",
    newsSubCategory: "Bollywood",
    newsSlug:
      "kis-kis-ko-pyaar-karoon-2-re-release-cancelled-box-office-10108318.html",
    thumbnail: "/Media/NewsImage/blqcl1htdrl.webp",
    updatedDate: "2026-01-09T16:40:58.98",
    catNameInHindi: "रंगीन पर्दा",
    viewCount: 353,
  },
  {
    newsId: 10109116,
    newsTag: "यश की 'टॉक्सिक' बनी",
    newsHeading: "'टॉक्सिक' का टीजर रिलीज होते ही मचा बवाल",
    newsCategory: "Colorful Curtains",
    newsSubCategory: "Bollywood",
    newsSlug:
      "toxic-movie-akshay-oberoi-toughest-role-yash-teaser-controversy-10109116.html",
    thumbnail: "/Media/NewsImage/4ezsqg2lq5w.webp",
    updatedDate: "2026-01-13T16:02:59.187",
    catNameInHindi: "रंगीन पर्दा",
    viewCount: 630,
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleDateString("hi-IN", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};

export default function NewsPage() {
  const baseImageUrl = "https://mapi.sadaivsatya.com";

  return (
    <div className="bg-[#ffffff] px-4 md:px-6 lg:px-8 py-6 min-h-screen">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr_0.9fr] gap-6 lg:gap-8">
        {/* Sports Section - खेल समाचार */}
        <div className="flex flex-col gap-4">
          {/* Styled Category Heading */}
          <div className="mb-2">
            <h2 className="text-[28px]  md:text-[32px] font-500 text-[#1a1a1a] border-l-4 border-black pl-4 bg-gradient-to-r from-purple-50 to-transparent py-2">
              खेल समाचार
            </h2>
          </div>

          {/* Main Sports Card */}
          {sportsNews[0] && (
            <div className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <Link
                href={`/sports-news/news/${sportsNews[0].newsSlug}`}
                className="block"
              >
                <div className="relative w-full h-[240px]">
                  <Image
                    src={`${baseImageUrl}${sportsNews[0].thumbnail}`}
                    alt={sportsNews[0].newsHeading}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 text-xs font-500 rounded">
                    ब्रेकिंग
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2 text-[13px] text-[#666]">
                    <span className="font-medium text-purple-600">
                      {sportsNews[0].catNameInHindi}
                    </span>
                    <span className="text-[#ccc]">|</span>
                    <span className="text-[#999]">
                      {formatDate(sportsNews[0].updatedDate)}
                    </span>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-500 px-3 py-2 mb-3">
                    <p className="text-[14px] font-500 text-purple-700">
                      {sportsNews[0].newsTag}
                    </p>
                  </div>
                  <h3 className="text-[20px] md:text-[22px] font-medium text-[#1a1a1a] leading-[1.3] mb-2">
                    {sportsNews[0].newsHeading}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 justify-between">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      {sportsNews[0].viewCount}
                    </span>
                    <ShareButtons
                      shareUrl={`/sports-news/news/${sportsNews[0].newsSlug}`}
                      size="small"
                    />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Small Sports Cards */}
          {sportsNews.slice(1).map((news) => (
            <div
              key={news.newsId}
              className="bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Link
                href={"URL"}
                className="flex gap-3 p-3 hover:bg-[#fafafa] transition-colors"
              >
                <div className="relative w-[90px] h-[90px] flex-shrink-0">
                  <Image
                    src={`${baseImageUrl}${news.thumbnail}`}
                    alt={news.newsHeading}
                    fill
                    className="object-cover rounded"
                    unoptimized
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="text-[13px] flex text-purple-600 font-medium mb-1 justify-between gap-4">
                    {news.catNameInHindi}
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      <span className="mt-[2px]">{news.viewCount}</span>
                    </div>
                  </div>
                  <h3 className="text-[16px] font-medium text-[#1a1a1a] leading-[1.4] mb-2">
                    {news.newsHeading}
                  </h3>
                  <div className="flex items-center gap-2 text-[13px] text-[#666] justify-between">
                    <span className="text-[#999]">
                      {formatDate(news.updatedDate)}
                    </span>
                    <span className="text-[#ccc]">•</span>
                    <ShareButtons
                      shareUrl={"URL"}
                      size="small"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Taaza Khabar Section - ताज़ा खबर */}
        <div className="flex flex-col gap-4">
          {/* Styled Category Heading */}
          <div className="mb-2">
            <h2 className="text-[28px] md:text-[32px] font-500 text-[#1a1a1a] border-l-4 border-black pl-4 bg-gradient-to-r from-blue-50 to-transparent py-2">
              ताज़ा खबर
            </h2>
          </div>

          {/* Featured Taaza Khabar News Card */}
          {taazaKhabarNews[0] && (
            <Link
              href={`/taaza-halachal/news/${taazaKhabarNews[0].newsSlug}`}
              className="block bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-[355px]">
                <Image
                  src={`${baseImageUrl}${taazaKhabarNews[0].thumbnail}`}
                  alt={taazaKhabarNews[0].newsHeading}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-xs font-500 rounded-full">
                  "ब्रेकिंग
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2 text-[13px] text-[#666]">
                  <span className="font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                    {taazaKhabarNews[0].catNameInHindi}
                  </span>
                  <span className="text-[#ccc]">|</span>
                  <span className="text-[#999]">
                    {formatDate(taazaKhabarNews[0].updatedDate)}
                  </span>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-500 px-3 py-2 mb-3">
                  <p className="text-[14px] font-500 text-blue-700">
                    {taazaKhabarNews[0].newsTag}
                  </p>
                </div>
                <h3 className="text-[24px] md:text-[26px] font-medium text-[#1a1a1a] leading-[1.3] mb-3">
                  {taazaKhabarNews[0].newsHeading}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-500 justify-between">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {taazaKhabarNews[0].viewCount}
                  </span>
                  <ShareButtons
                    shareUrl={`/taaza-halachal/news/${taazaKhabarNews[0].newsSlug}`}
                    size="small"
                  />
                </div>
              </div>
            </Link>
          )}

          {/* Medium News Cards - Desktop */}
          <div className="hidden md:block space-y-4">
            {taazaKhabarNews.slice(1).map((news) => (
              <Link
                key={news.newsId}
                href={"URL"}
                className="block bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex p-4">
                  <div className="relative w-[160px] h-[120px] flex-shrink-0">
                    <Image
                      src={`${baseImageUrl}${news.thumbnail}`}
                      alt={news.newsHeading}
                      fill
                      className="object-cover rounded"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 pl-4 flex flex-col justify-center">
                    <div className="inline-flex w-fit">
                      <span className="text-[13px] bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium mb-2">
                        {news.catNameInHindi}
                      </span>
                    </div>
                    <h3 className="text-[18px] font-medium text-[#1a1a1a] leading-[1.4] mb-2">
                      {news.newsHeading}
                    </h3>
                    <div className="flex items-center gap-2 text-[13px] text-[#666] justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[#999]">
                          {formatDate(news.updatedDate)}
                        </span>
                        <span className="text-[#ccc]">•</span>
                        <span className="flex items-center gap-1 text-xs text-gray-500">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          {news.viewCount}
                        </span>
                      </div>
                      <ShareButtons
                        shareUrl={"URL"}
                        size="small"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Small Cards for Mobile */}
          <div className="md:hidden space-y-3">
            {taazaKhabarNews.slice(1).map((news) => (
              <Link
                key={news.newsId}
                href={"URL"}
                className="flex gap-3 bg-white p-3 shadow-sm"
              >
                <div className="relative w-[100px] h-[75px] flex-shrink-0">
                  <Image
                    src={`${baseImageUrl}${news.thumbnail}`}
                    alt={news.newsHeading}
                    fill
                    className="object-cover rounded"
                    unoptimized
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-[12px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium mb-1 w-fit">
                    {news.catNameInHindi}
                  </div>
                  <h3 className="text-[14px] font-medium text-[#1a1a1a] leading-[1.3] mb-1">
                    {news.newsHeading}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-[#999] justify-between">
                    <div className="flex items-center gap-1">
                      <span>{formatDate(news.updatedDate)}</span>
                      <span className="text-[#ccc]">•</span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {news.viewCount}
                      </span>
                    </div>
                    <ShareButtons
                      shareUrl={"URL"}
                      size="small"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Crypto & Entertainment Sidebar */}
        <div className="flex flex-col gap-2 pt-0">
          {/* Crypto Section - क्रिप्टो */}
          <div className="bg-white p-5 border-2 border-orange-200 rounded-lg shadow-sm">
            <div className="mb-5">
              <h2 className="text-[28px] md:text-[32px] font-500 text-[#1a1a1a] border-l-4 border-black pl-4 bg-gradient-to-r from-orange-50 to-transparent py-2">
                क्रिप्टो
              </h2>
            </div>

            {cryptoNews.map((news, index) => (
              <Link
                key={news.newsId}
                href={"URL"}
                className={`block ${
                  index < cryptoNews.length - 1
                    ? "pb-4 border-b border-dotted border-[#ddd]"
                    : "pt-4"
                } ${index > 0 ? "pt-4" : ""}`}
              >
                <div className="text-[12px] text-[#999] mb-2 flex items-center gap-2 justify-between">
                  <div className="flex items-center gap-2">
                    <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-medium">
                      {news.catNameInHindi}
                    </span>
                    <span className="text-[#ccc]">|</span>
                    <span>{formatDate(news.updatedDate)}</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {news.viewCount}
                  </span>
                </div>
                <h3 className="text-[16px] font-500 text-[#1a1a1a] leading-[1.4] hover:text-orange-600 transition-colors mb-2">
                  {news.newsHeading}
                </h3>
                <ShareButtons
                  shareUrl={"URL"}
                  size="small"
                />
              </Link>
            ))}
          </div>

          {/* Entertainment Section - रंगीन पर्दा */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="mb-5">
              <h2 className="text-[28px] md:text-[32px] font-500 text-[#1a1a1a] border-l-4 border-teal-600 pl-4 bg-gradient-to-r from-teal-50 to-transparent py-2">
                रंगीन पर्दा
              </h2>
            </div>

            {entertainmentNews.map((news, index) => (
              <Link
                key={news.newsId}
                href={"URL"}
                className={`flex gap-3 items-center hover:bg-gray-50 p-2 rounded transition-colors ${
                  index < entertainmentNews.length - 1
                    ? "pb-4 border-b border-[#e5e5e5]"
                    : "pt-4"
                } ${index > 0 ? "pt-4" : ""}`}
              >
                <div className="relative w-[80px] h-[80px] flex-shrink-0">
                  <Image
                    src={`${baseImageUrl}${news.thumbnail}`}
                    alt={news.newsHeading}
                    fill
                    className="object-cover rounded"
                    unoptimized
                  />
                </div>
                <div className="flex-1">
                  <div className="text-[12px] bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-medium mb-2 w-fit">
                    {news.catNameInHindi}
                  </div>
                  <h3 className="text-[16px] font-medium text-[#1a1a1a] leading-[1.4] hover:text-teal-600 transition-colors mb-2">
                    {news.newsHeading}
                  </h3>
                  <div className="flex items-center gap-2 justify-between">
                    <div className="text-[12px] text-[#999] flex items-center gap-2">
                      <span>{formatDate(news.updatedDate)}</span>
                      <span className="text-[#ccc]">•</span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {news.viewCount}
                      </span>
                    </div>
                    <ShareButtons
                      shareUrl={"URL"}
                      size="small"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* dotted-line */}
      <div className="mt-10">
        <div className="border-b mb-[2px] border-dotted border-[#000]"></div>
        <div className="border-b mb-[2px] border-dotted border-[#000]"></div>
        <div className="border-b mb-[2px] border-dotted border-[#000]"></div>
      </div>
    </div>
  );
}
