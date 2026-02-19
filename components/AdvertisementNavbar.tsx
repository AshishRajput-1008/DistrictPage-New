import Image from "next/image";
import yuvaLogo from "@/public/Sadaiv_logo.webp"

export default function ADvertismentWithNews() {
  const breakingNews = [
    "Major tech breakthrough announced in AI development",
    "Stock markets reach new highs amid economic recovery",
    "Climate summit reaches historic agreement"
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 px-4 md:px-6 bg-white">
      {/* Left Half: News Section */}
      <div className="w-full lg:w-1/2 flex items-center gap-4 md:gap-6">
        {/* News Image */}
        <div className="w-[100px] sm:w-[140px] md:w-[200px] h-[100px] sm:h-[140px] md:h-[180px] flex-shrink-0">
          <div className="relative h-full cursor-pointer">
            <Image
              src="https://mapi.sadaivsatya.com/Media/NewsThumb/th0ltaeoxsl.gif"
              alt="Trending News"
              width={400}
              height={225}
              className="w-full h-full object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0"></div>
          </div>
        </div>

        {/* News Text */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-2 md:mb-3">
            <div className="bg-[#e74238] text-white px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-500 tracking-wider uppercase">
              ट्रेंडिंग
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#e74238] animate-pulse"></div>
              <span className="text-gray-500 text-[10px] md:text-[11px] font-medium">अभी</span>
            </div>
          </div>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-xl xl:text-2xl leading-[1.3] font-500 text-gray-900 mb-1 md:mb-2 cursor-pointer line-clamp-2">
            अरुणाचल प्रदेश
          </h2>
          <p className="text-gray-600 text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed line-clamp-2 hidden sm:block">
            अंजॉ ज़िले की नन्ही बच्ची का संतरा बेचते वीडियो ने जीता देश का दिल
          </p>
        </div>
      </div>

      {/* Right Half: Cybersecurity Advertisement */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        {/* Advertisement Label */}
        {/* <div className="mb-2">
          <span className="text-[10px] md:text-[11px] font-500 tracking-wider uppercase text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
            Advertisement
          </span>
        </div> */}

        {/* Advertisement Banner - Cybersecurity Focus */}
        <div className="relative w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] overflow-hidden bg-gradient-to-r from-orange-500 via-white to-green-600">
          <div className="w-full h-full flex items-center justify-between px-4 md:px-6 lg:px-8">
            {/* Left Side - Logo and Organization Name */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <Image
                  src={yuvaLogo}
                  alt="Sadaiv Yuva Foundation"
                  width={300}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base md:text-xl lg:text-2xl font-500 text-gray-900 leading-tight">सदैव युवा फाउंडेशन</h3>
                <p className="text-[10px] md:text-xs lg:text-sm text-gray-700 font-medium">Sadaiv Yuva Foundation</p>
              </div>
            </div>

            {/* Right Side - Cybersecurity Message & CTA */}
            <a href="https://www.sadaivyuvafoundation.com/" className="hidden lg:block">
              <div className="flex flex-col items-end gap-2">
                <div className="bg-red-600 text-white px-4 py-1.5 rounded-md">
                  <p className="text-sm font-500">🔒 साइबर पुलिस द्वारा खाता फ्रीज</p>
                </div>
                <p className="text-xs text-gray-800 font-500">डिजिटल धोखाधड़ी से बचाव</p>
                <button className="mt-1 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-500 text-sm transition-all shadow-md">
                  जानें अधिक
                </button>
              </div>
            </a>

            {/* Tablet View */}
            <a href="https://www.sadaivyuvafoundation.com/" className="hidden md:block lg:hidden">
              <div className="flex flex-col items-end gap-1.5">
                <div className="bg-red-600 text-white px-3 py-1 rounded-md">
                  <p className="text-xs font-500">🔒 साइबर पुलिस द्वारा खाता फ्रीज</p>
                </div>
                <button className="mt-1 bg-orange-600 hover:bg-orange-700 text-white px-5 py-1.5 rounded-full font-500 text-xs transition-all shadow-md">
                  जानें अधिक
                </button>
              </div>
            </a>

            {/* Mobile View */}
            <a href="https://www.sadaivyuvafoundation.com/" className="md:hidden">
              <div className="flex flex-col items-end gap-2">
                <div className="bg-orange-600 text-white px-3 py-2 rounded-lg shadow-md">
                  <p className="text-[11px] font-500 leading-relaxed text-center">
                    🔒 साइबर पुलिस<br />द्वारा खाता फ्रीज
                  </p>
                </div>
                <p className="text-[10px] text-gray-800 font-500">डिजिटल धोखाधड़ी से बचाव</p>
                {/* <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-500 text-[11px] transition-all shadow-md">
                  जानें अधिक
                </button> */}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}