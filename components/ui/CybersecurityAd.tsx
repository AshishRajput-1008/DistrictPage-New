import yuvaLogo from "@/public/Sadaiv_logo.webp";
import Image from "next/image";

export default function CybersecurityAd() {
  return (
    <div className="md:hidden w-full flex flex-col justify-center py-6 mb-4">
      {/* Advertisement Label */}
      <div className="mb-2">
        <span className="text-[10px] md:text-[11px] font-semibold tracking-wider uppercase text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
          Advertisement
        </span>
      </div>

      {/* Advertisement Banner - Cybersecurity Focus */}
      <div className="relative w-full h-[140px] sm:h-[140px] md:h-[160px] lg:h-[160px] rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-orange-500 via-white to-green-600">
        <div className="w-full h-full flex items-center justify-between px-3 md:px-6 lg:px-8">
          {/* Left Side - Logo and Organization Name */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="w-12 h-12 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <Image
                src={yuvaLogo}
                alt="Sadaiv Yuva Foundation"
                width={300}
                height={300}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                सदैव युवा फाउंडेशन
              </h3>
              <p className="text-[9px] md:text-xs lg:text-sm text-gray-700 font-medium">
                Sadaiv Yuva Foundation
              </p>
            </div>

            <p className="hidden lg:block text-[14px] text-gray-800 font-500">
              डिजिटल धोखाधड़ी से बचाव
            </p>
          </div>

          {/* Right Side - Cybersecurity Message & CTA */}
          <a
            href="https://www.sadaivyuvafoundation.com/"
            className="block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col items-center gap-1.5">
              <div className="bg-red-600 text-white px-3 py-1 rounded-md">
                <p className="text-xs font-bold">
                  🔒 साइबर पुलिस द्वारा खाता फ्रीज
                </p>
              </div>
              <button className="mt-1 bg-orange-600 hover:bg-orange-700 text-white px-5 py-1.5 rounded-full font-bold text-xs transition-all shadow-md">
                जानें अधिक
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}