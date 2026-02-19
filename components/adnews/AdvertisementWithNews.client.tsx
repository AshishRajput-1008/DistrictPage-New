"use client";

import Image from "next/image";
import yuvaLogo from "@/public/Sadaiv_logo.webp";
import SmartLink from "../SmartLink";
import { toSlug } from "@/lib/news-api";
import { Play } from "lucide-react";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import Link from "next/link";
import { getCategoryColor } from "@/lib/getCategoryColor";

type NewsItem = {
    newsId: number;
    newsTag: string;
    newsHeading: string;
    newsHeadingTwo: string;
    newsDetails: string;
    newsCategory: string;
    newsSubCategory: string;
    newsSlug: string;
    thumbnail: string;
    updatedDate: string;
    catNameInHindi: string;
    subCatNameInHindi: string;
    viewCount: number;
    dataType: string;
};


const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://mapi.sadaivsatya.com";
const isGifFile = (url?: string | null) => (url ? /\.gif$/i.test(url) : false);

export default function ADvertismentWithNews({ news }: { news: NewsItem }) {
    const safeHtml = (html?: string | null) => html || "";
    if (!news) {
        return <AdvertismentWithNewsSkeleton />;
    }
    const category = toSlug(news?.newsCategory || "general");
    const subCategory = toSlug(news?.newsSubCategory || "");

    const URL = subCategory
        ? `/${category}/${subCategory}/news/${news?.newsSlug}`
        : `/${category}/news/${news?.newsSlug}`;
    const catColor = getCategoryColor(news?.newsCategory);
    const lightColor = catColor + "CC"; // thoda halka
    const darkColor = catColor;        // original

    return (
        <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 py-4 md:py-3">

            {/* Mobile Layout: Image on Right */}
            <div className="flex lg:hidden w-full gap-3">
                <div className="flex-1 flex flex-col justify-start">
                    <div className="flex items-center gap-2 mb-1">
                        <div style={{
                            background: `linear-gradient(135deg, ${lightColor}, ${darkColor})`,
                        }} className="relative inline-flex items-center gap-1.5 px-2.5 py-[5px] rounded-full shadow">
                            <span className="text-white font-bold text-[10px] uppercase">
                                <Link href={toSlug(news.newsCategory)}>{news.catNameInHindi}</Link>
                            </span>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 mb-1 rounded-full bg-[#e74238] animate-pulse" style={{ backgroundColor: lightColor }}></div>
                            <span className="text-gray-500 text-[10px]">
                                {timeAgoInHindi(news.updatedDate)}
                            </span>
                        </div>
                    </div>
                    <SmartLink href={URL || "#"} id={news?.newsId ?? 0} className="no-underline hover:no-underline mt-1">
                        <h2 className="text-[18px] font-500 text-gray-800 " >
                            <span style={{ color: catColor }}>{news?.newsTag}: </span>
                            {news?.newsHeading}
                        </h2>
                    </SmartLink>

                </div>

                {/* RIGHT: CLICKABLE IMAGE */}
                <SmartLink href={URL || "#"} id={news?.newsId ?? 0}>
                    <div className="relative w-[100px] sm:w-[120px] aspect-[10/9] flex-shrink-0 bg-gray-200">
                        <Image
                            src={apiBaseUrl + news.thumbnail}
                            fill
                            alt=""
                            unoptimized
                            className="object-cover"
                        />
                        {news.dataType === "VIDEO" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="rounded-full bg-black/70 w-8 h-8 flex items-center justify-center">
                                    <Play className="w-3 h-3 text-white fill-white" />
                                </div>
                            </div>
                        )}
                    </div>
                </SmartLink>

            </div>

            {/* Desktop Layout: Image on Left */}
            <div className="hidden lg:flex items-center gap-4 md:gap-6 w-full">
                <SmartLink href={URL || "#"} id={news?.newsId ?? 0} >
                    <div className="relative w-[140px] md:w-[200px] aspect-[10/9] flex-shrink-0 bg-gray-200">
                        <Image
                            src={apiBaseUrl + news.thumbnail}
                            fill
                            alt=""
                            unoptimized
                            className="object-cover"
                        />
                        {news.dataType === "VIDEO" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-black/70 w-10 h-10 flex items-center justify-center">
                                    <Play className="w-4 h-4 text-white fill-white" />
                                </div>
                            </div>
                        )}
                    </div>
                </SmartLink>

                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                        <div style={{
                            background: `linear-gradient(135deg, ${lightColor}, ${darkColor})`,
                        }} className="relative inline-flex items-center gap-1.5 px-[14px] py-[5px] bg-gradient-to-r rounded-full shadow">
                            <span className="text-white font-500 text-[12px] uppercase">
                                {news.catNameInHindi}
                            </span>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full animate-pulse lg:mb-[2px]" style={{ backgroundColor: lightColor }}></div>
                            <span className="text-gray-500 text-[11px]">
                                {timeAgoInHindi(news.updatedDate)}
                            </span>
                        </div>
                    </div>

                    <SmartLink href={URL || "#"} id={news?.newsId ?? 0} className="no-underline hover:no-underline">
                        <h2 className="text-[20px] md:text-[22px] font-500 text-gray-900 mt-2 ">
                            <span style={{ color: catColor }}>{news?.newsTag}: </span>
                            {news?.newsHeading}
                        </h2>
                    </SmartLink>

                    <div className="hidden md:block">
                        <div
                            className="prose max-w-none pt-2 line-clamp-2 md:line-clamp-3 text-gray-700"
                            dangerouslySetInnerHTML={{ __html: safeHtml(news.newsDetails) }}
                        />
                    </div>
                </div>
            </div>


            <div className="hidden lg:flex w-full lg:w-[60%] flex-col justify-center">
                <div className="mb-2">
                    <span className="text-[10px] md:text-[11px] font-semibold tracking-wider uppercase text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                        Advertisement
                    </span>
                </div>

                <div className="relative w-full h-[140px] sm:h-[140px] md:h-[160px] lg:h-[160px] rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-orange-500 via-white to-green-600">
                    <div className="w-full h-full flex flex-col justify-center px-4 md:px-6 py-3 gap-3">
                        <div className="grid grid-cols-2 gap-3 items-center">
                            <div className="flex justify-center">
                                <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <Image
                                        src={yuvaLogo}
                                        alt="Sadaiv Yuva Foundation"
                                        width={300}
                                        height={300}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                                    सदैव युवा फाउंडेशन
                                </h3>
                                <p className="text-[10px] md:text-xs text-gray-700 font-medium">
                                    Sadaiv Yuva Foundation
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 items-center">
                            {/* Left: Alert Message */}
                            <div className="w-[175px] bg-red-600 text-white px-3 py-2 rounded-full">
                                <p className="text-[10px] md:text-xs font-bold leading-tight">
                                    साइबर पुलिस द्वारा खाता फ्रीज
                                </p>
                            </div>
                            <a
                                href="https://www.sadaivyuvafoundation.com/"
                                className="hidden lg:block"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="w-[150px] ml-2 bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-full font-bold text-xs transition-all shadow-md">
                                    जानें अधिक
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function AdvertismentWithNewsSkeleton() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 px-4 md:px-6 bg-white animate-pulse">
            <div className="w-full lg:w-[60%] flex items-center gap-4 md:gap-6">
                <div className="w-[100px] sm:w-[140px] md:w-[200px] h-[100px] sm:h-[140px] md:h-[180px] bg-gray-200 flex-shrink-0" />

                <div className="flex-1 space-y-3">
                    <div className="h-4 w-32 bg-gray-200 rounded" />
                    <div className="h-5 w-full bg-gray-300 rounded" />
                    <div className="h-5 w-4/5 bg-gray-300 rounded" />
                    <div className="h-3 w-24 bg-gray-200 rounded" />
                </div>
            </div>

            <div className="hidden lg:block w-full lg:w-[40%] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] bg-gray-200 rounded-md" />
        </div>
    );
}