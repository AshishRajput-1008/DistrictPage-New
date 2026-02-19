"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const ShareButtons = dynamic(() => import("@/components/ShareButtons"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center gap-1.5">
      <div className="h-7 w-7 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
      <div className="h-7 w-7 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
      <div className="h-7 w-7 rounded-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
    </div>
  ),
});

interface NewsMetaBarProps {
  newsCategory: string;
  newsCatinhindi: string;
  newsSubCategory?: string;
  newsSlug: string;
  accentColor?: string;
  showShareButtons?: boolean;
  variant?:
  | "solid"
}

/* ---------- helpers ---------- */
const cleanText = (str = "") =>
  str.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();

const toSlug = (str = "") =>
  cleanText(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export default function NewsMetaBar({
  newsCategory,
  newsCatinhindi,
  newsSubCategory,
  newsSlug,
  accentColor = "",
  showShareButtons = true,
  variant = "solid",
}: NewsMetaBarProps) {
  const categorySlug = toSlug(newsCategory);
  const subcategorySlug = newsSubCategory ? toSlug(newsSubCategory) : null;

  const categoryPageUrl = subcategorySlug
    ? `/${categorySlug}/${subcategorySlug}`
    : `/${categorySlug}`;

  const newsUrl = subcategorySlug
    ? `/${categorySlug}/${subcategorySlug}/news/${newsSlug}`
    : `/${categorySlug}/news/${newsSlug}`;

  const shortCategory =
    newsCatinhindi === "अपराध की दुनिया"
      ? "अपराध"
      : newsCatinhindi === "वैश्विक हलचल"
        ? "वैश्विक"
        : newsCatinhindi === "रहस्य एवं रोमांच"
          ? "रहस्य"
          : newsCatinhindi === "विचार प्रवाह"
            ? "विचार"
            : newsCatinhindi;

  if (variant === "solid") {
    return (
      <span className="p-1 text-xs font-500 text-gray border border-gray-200 rounded-full hover:bg-gray-100">
        {newsCategory && (
          <Link
            href={categoryPageUrl}
            className="inline-flex items-center justify-center gap-1.5 rounded transition-opacity hover:opacity-90 leading-none"
            style={{ backgroundColor: accentColor }}
          >
            <span className="p-1 font-500 text-[13px] text-gray-800 whitespace-nowrap leading-none">
              {shortCategory}
            </span>

            <svg
              className="w-3 h-3 mt-[-4px] text-gray-800 translate-y-[0.5px] group-hover:translate-x-0.5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

        )}
        {/* {showShareButtons && <ShareButtons shareUrl={newsUrl} size="small" />} */}
      </span>
    );
  }

  return null;
}
