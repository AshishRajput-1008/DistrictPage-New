"use client";

import { NewsArticle2 } from "@/types";
import Image from "next/image";
import { Eye } from "lucide-react";
import NewsMetaBar from "@/components/NewsMetaBar";
import ShareButtons from "@/components/ShareButtons";

// ── helpers ──────────────────────────────────────────────────────────────────
function getImageUrl(thumbnail: string | undefined): string {
    if (!thumbnail) return "/placeholder.jpg";
    if (thumbnail.startsWith("http")) return thumbnail;
    return `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL ?? ""}${thumbnail}`;
}

function formatDate(dateStr: string | undefined): string {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    return d.toLocaleDateString("hi-IN", { day: "numeric", month: "short", year: "numeric" });
}

const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL;

// NewsArticle2 has no category/subCategory — use DistrictNameInHindi as label
function getMetaProps(news: NewsArticle2) {
    return {
        newsCategory: news.StateName ?? "",
        newsCatinhindi: news.DistrictNameInHindi ?? "",
        newsSubCategory: news.DistrictName ?? "",
        newsSlug: news.Slug,
    };
}

// ── prop types ────────────────────────────────────────────────────────────────
interface Props {
    business: NewsArticle2[];
    taaza: NewsArticle2[];
    sports: NewsArticle2[];
    entertainment: NewsArticle2[];
}

// ── component ─────────────────────────────────────────────────────────────────
export default function MainSectionClientDistrict({ business, taaza, sports, entertainment }: Props) {

    // Derive a single district name from whichever array has data first
    const districtName =
        taaza[0]?.DistrictNameInHindi ??
        sports[0]?.DistrictNameInHindi ??
        business[0]?.DistrictNameInHindi ??
        entertainment[0]?.DistrictNameInHindi ??
        "";

    return (
        <div className="mb-8 md:mb-12">
            {/* Section heading */}
            <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="h-1 w-8 md:w-12" style={{ backgroundColor: "#0C0E0B" }} />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900">
                    {districtName ? `${districtName} — सभी श्रेणियां` : "सभी श्रेणियां"}
                </h2>
                <div
                    className="h-1 flex-1"
                    style={{ background: "linear-gradient(to right, #0C0E0B, transparent)" }}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

                {/* ── LEFT COLUMN – SPORTS ───────────────────────────────── */}
                <div className="lg:col-span-3">
                    {/* Ad */}
                    <div className="mb-4 md:mb-6 bg-gray-50 border border-gray-300 overflow-hidden">
                        <div className="relative">
                            <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-[9px] sm:text-[10px] text-gray-600 font-medium z-10">
                                विज्ञापन
                            </div>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://picsum.photos/300/300?random=103"
                                    alt="Advertisement"
                                    className="w-full h-[320px] object-cover hover:opacity-90 transition-opacity"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Sports card */}
                    <div
                        className="bg-white p-3 md:p-3 md:pr-0 mb-4 md:mb-6 border-t-4"
                        style={{ borderColor: "#0C0E0B" }}
                    >
                        <h3
                            className="text-xl md:text-xl font-black mb-4 md:mb-4 pb-2 border-b-2 text-gray-900"
                            style={{ borderColor: "#0C0E0B" }}
                        >
                            {sports[0]?.DistrictNameInHindi ?? "खेल समाचार"}
                        </h3>

                        {/* Featured sports article */}
                        {sports[0] && (
                            <div className="mb-3 md:mb-4">
                                <div className="relative mb-2 md:mb-2 overflow-hidden">
                                    <Image
                                        src={baseurl + getImageUrl(sports[0].ThumbNail)}
                                        alt={sports[0].NewsHeading}
                                        width={400}
                                        height={250}
                                        className="w-full h-[145px] md:h-[160px] object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex items-center justify-between text-[12px] md:text-xs text-gray-600 mb-2 mt-2">
                                    <span>{formatDate(sports[0].UpdatedDate)}</span>
                                    <span className="flex items-center gap-1">
                                        <Eye className="w-4 h-4" />
                                        {sports[0].ViewCount}
                                    </span>
                                </div>
                                <h4 className="text-[20px] md:text-[17px] font-medium text-gray-900 leading-wide mb-2 hover:text-[#565ee1] cursor-pointer">
                                    <span className="text-[#565ee1]">{sports[0].NewsTag}:</span>{" "}
                                    {sports[0].NewsHeading}
                                </h4>
                                <div className="flex flex-row sm:flex-row justify-between gap-1 sm:gap-0 text-[11px] md:text-[13px] text-gray-500 opacity-80 mt-2">
                                    <NewsMetaBar variant="solid" {...getMetaProps(sports[0])} />
                                    <ShareButtons shareUrl={sports[0].Slug} size="small" />
                                </div>
                            </div>
                        )}

                        {/* Sports list */}
                        <div className="space-y-3 md:space-y-3">
                            {sports.slice(0, 5).map((news) => (
                                <div
                                    key={news.ID}
                                    className="bg-white p-2 md:p-3 shadow-sm hover:shadow-md transition-shadow border-l-4"
                                    style={{ borderColor: "#0C0E0B" }}
                                >
                                    <div className="flex gap-2 mb-2">
                                        <div className="flex-1 min-w-0">
                                            <h5 className="text-[17px] md:text-[15px] ml-1 leading-wide font-medium text-gray-900 line-clamp-3 md:line-clamp-4 hover:text-[#565ee1] cursor-pointer mb-2">
                                                <span className="text-[#565ee1]">{news.NewsTag}:</span>{" "}
                                                {news.NewsHeading}
                                            </h5>
                                            <div className="text-[10px] md:text-[13px] text-gray-500 opacity-80">
                                                <NewsMetaBar variant="solid" {...getMetaProps(news)} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <Image
                                                src={baseurl + getImageUrl(news.ThumbNail)}
                                                alt={news.NewsHeading}
                                                width={80}
                                                height={80}
                                                className="w-24 h-16 md:w-20 md:h-20 object-cover"
                                            />
                                            <div className="text-[10px] md:text-[13px] mt-2">
                                                <ShareButtons shareUrl={news.Slug} size="small" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── MIDDLE COLUMN – TAAZA (और खबरें) ───────────────────── */}
                <div className="lg:col-span-6">
                    <div
                        className="bg-white p-3 md:p-4 shadow-lg border-t-4"
                        style={{ borderColor: "#0C0E0B" }}
                    >
                        <h3
                            className="text-xl md:text-2xl font-black mb-4 md:mb-6 pb-2 border-b-4 md:border-b-2 text-gray-900"
                            style={{ borderColor: "#0C0E0B" }}
                        >
                            {taaza[0]?.DistrictNameInHindi ?? "और खबरें"}
                        </h3>

                        <div className="space-y-3 md:space-y-4">
                            {taaza.slice(0, 3).map((news) => (
                                <div
                                    key={news.ID}
                                    className="bg-gray-50 p-3 md:p-4 transition-colors border-l-4"
                                    style={{ borderColor: "#D6303A" }}
                                >
                                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 md:gap-3 mb-2">
                                                <span className="text-[12px] md:text-[14px] text-gray-600">
                                                    {formatDate(news.UpdatedDate)}
                                                </span>
                                            </div>
                                            <h4 className="text-[19px] md:text-lg font-medium text-gray-900 hover:text-[#D6303A] cursor-pointer mb-2 leading-tight">
                                                <span style={{ color: "#D6303A" }}>{news.NewsTag}:</span>{" "}
                                                {news.NewsHeading}
                                            </h4>
                                            <div className="flex flex-row sm:flex-row justify-between gap-1 sm:gap-0 text-[11px] md:text-[13px] text-gray-500 opacity-80">
                                                <NewsMetaBar variant="solid" {...getMetaProps(news)} />
                                                <ShareButtons shareUrl={news.Slug} size="small" />
                                            </div>
                                        </div>
                                        <div className="relative w-full h-48 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0">
                                            <Image
                                                src={baseurl + getImageUrl(news.ThumbNail)}
                                                alt={news.NewsHeading}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mid-column Ad */}
                        <div className="mt-6 bg-gray-50 border border-gray-300 overflow-hidden">
                            <div className="relative">
                                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-[9px] sm:text-[10px] text-gray-600 font-medium z-10">
                                    विज्ञापन
                                </div>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://picsum.photos/300/600?random=102"
                                        alt="Advertisement"
                                        className="w-full h-auto max-h-[400px] md:max-h-[600px] object-contain hover:opacity-90 transition-opacity mx-auto"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT COLUMN – BUSINESS + ENTERTAINMENT ────────────── */}
                <div className="lg:col-span-3">
                    {/* Business */}
                    <div
                        className="bg-gray-100 border-t-4 p-3 md:p-4 mb-4 md:mb-6"
                        style={{ borderColor: "#0C0E0B" }}
                    >
                        <h3
                            className="text-lg md:text-xl font-black mb-3 md:mb-4 pb-2 border-b-4 md:border-b-2 text-gray-900"
                            style={{ borderColor: "#0C0E0B" }}
                        >
                            {business[0]?.DistrictNameInHindi ?? "कारोबार"}
                        </h3>
                        <div className="space-y-3 md:space-y-4">
                            {business.slice(0, 3).map((news, index) => (
                                <div
                                    key={news.ID}
                                    className={`py-2 md:py-3 ${index < 2 ? "border-b border-gray-300" : ""}`}
                                >
                                    <div className="text-[13px] md:text-xs text-gray-600 mb-2 flex items-center gap-2">
                                        <span>{formatDate(news.UpdatedDate)}</span>
                                    </div>
                                    <h4 className="text-base md:text-base font-medium tracking-wide text-[#000000] hover:text-gray-900 cursor-pointer mb-2 leading-tight">
                                        <span className="text-[#39c3a2]">{news.NewsTag}:</span>{" "}
                                        {news.NewsHeading}
                                    </h4>
                                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
                                        <div className="flex flex-row sm:flex-row justify-between gap-1 sm:gap-0 w-full text-[10px] md:text-[13px] text-gray-500 opacity-80">
                                            <NewsMetaBar variant="solid" {...getMetaProps(news)} />
                                            <ShareButtons shareUrl={news.Slug} size="small" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Entertainment */}
                    <div
                        className="border-t-4 p-3 md:p-4"
                        style={{ borderColor: "#0C0E0B" }}
                    >
                        <h3
                            className="text-lg md:text-xl font-black md:mb-4 pb-2 border-b-4 md:border-b-2 text-gray-900 mb-5"
                            style={{ borderColor: "#0C0E0B" }}
                        >
                            {entertainment[0]?.DistrictNameInHindi ?? "रंगीन पर्दा"}
                        </h3>

                        {/* Featured entertainment article */}
                        {entertainment[0] && (
                            <div className="mb-3 md:mb-4">
                                <div className="relative mb-2 md:mb-3 overflow-hidden">
                                    <Image
                                        src={baseurl + getImageUrl(entertainment[0].ThumbNail)}
                                        alt={entertainment[0].NewsHeading}
                                        width={400}
                                        height={250}
                                        className="w-full h-[160px] md:h-[180px] object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="flex items-center justify-between text-[13px] md:text-xs text-gray-600 my-2 md:my-3 mt-3">
                                    <span>{formatDate(entertainment[0].UpdatedDate)}</span>
                                    <span className="flex items-center gap-1">
                                        <Eye className="w-4 h-4" />
                                        {entertainment[0].ViewCount}
                                    </span>
                                </div>
                                <h4 className="text-[20px] md:text-[17px] font-medium leading-wide text-gray-900 tracking-wider mb-2 hover:text-[#565ee1] cursor-pointer">
                                    <span className="text-[#664bff]">{entertainment[0].NewsTag}:</span>{" "}
                                    {entertainment[0].NewsHeading}
                                </h4>
                                <div className="flex flex-row sm:flex-row justify-between gap-1 sm:gap-0 text-[11px] md:text-[13px] text-gray-500 opacity-80">
                                    <NewsMetaBar variant="solid" {...getMetaProps(entertainment[0])} />
                                    <ShareButtons shareUrl={entertainment[0].Slug} size="small" />
                                </div>
                            </div>
                        )}

                        {/* Entertainment list */}
                        <div className="space-y-2 md:space-y-3">
                            {entertainment.slice(1, 3).map((news) => (
                                <div
                                    key={news.ID}
                                    className="bg-white p-2 md:p-3 md:pr-0 shadow-sm hover:shadow-md transition-shadow border-l-4"
                                    style={{ borderColor: "#0C0E0B" }}
                                >
                                    <div className="flex gap-2">
                                        <div className="flex-1 min-w-0">
                                            <h5 className="text-[18px] md:text-[15px] tracking-wide font-medium text-gray-900 line-clamp-4 mb-2 hover:text-red-600 cursor-pointer">
                                                <span className="text-[#664bff]">{news.NewsTag}:</span>{" "}
                                                {news.NewsHeading}
                                            </h5>
                                            <div className="text-[10px] md:text-[13px] text-gray-500 opacity-80">
                                                <NewsMetaBar variant="solid" {...getMetaProps(news)} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <Image
                                                src={baseurl + getImageUrl(news.ThumbNail)}
                                                alt={news.NewsHeading}
                                                width={80}
                                                height={80}
                                                className="w-26 h-16 md:w-24 md:h-20 object-cover"
                                            />
                                            <div className="text-[10px] md:text-[13px] mt-2">
                                                <ShareButtons shareUrl={news.Slug} size="small" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}