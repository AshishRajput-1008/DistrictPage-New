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
  variant?: "pill" | "minimal" | "underline" | "solid" | "outline";
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
  accentColor = "#ef4444",
  showShareButtons = true,
  variant = "pill", // Default variant
}: NewsMetaBarProps) {
  const categorySlug = toSlug(newsCategory);
  const subcategorySlug = newsSubCategory ? toSlug(newsSubCategory) : null;

  const categoryPageUrl = subcategorySlug
    ? `/${categorySlug}/${subcategorySlug}`
    : `/${categorySlug}`;

  const newsUrl = subcategorySlug
    ? `/${categorySlug}/${subcategorySlug}/news/${newsSlug}`
    : `/${categorySlug}/news/${newsSlug}`;

  // VARIANT 1: PILL - Rounded badge with colored background
  if (variant === "pill") {
    return (
      <div className="flex items-center justify-between gap-2">
        {newsCategory && (
          <Link
            href={categoryPageUrl}
            className="inline-flex items-center px-2.5 py-1 rounded-full transition-transform hover:scale-105"
            style={{ backgroundColor: `${accentColor}15` }}
          >
            <span 
              className="font-500 text-[11px] whitespace-nowrap"
              style={{ color: accentColor }}
            >
              {newsCatinhindi}
            </span>
          </Link>
        )}
        {showShareButtons && <ShareButtons shareUrl={newsUrl} size="small" />}
      </div>
    );
  }

  // VARIANT 2: MINIMAL - Just colored text with dot
  if (variant === "minimal") {
    return (
      <div className="flex items-center justify-between gap-2">
        {newsCategory && (
          <Link
            href={categoryPageUrl}
            className="inline-flex items-center gap-1.5 hover:opacity-75 transition-opacity"
          >
            <div 
              className="w-1.5 h-1.5 rounded-full" 
              style={{ backgroundColor: accentColor }}
            />
            <span 
              className="font-500 text-[11px] whitespace-nowrap"
              style={{ color: accentColor }}
            >
              {newsCatinhindi}
            </span>
          </Link>
        )}
        {showShareButtons && <ShareButtons shareUrl={newsUrl} size="small" />}
      </div>
    );
  }

  // VARIANT 3: UNDERLINE - Text with colored underline
  if (variant === "underline") {
    return (
      <div className="flex items-center justify-between gap-2">
        {newsCategory && (
          <Link
            href={categoryPageUrl}
            className="inline-flex flex-col hover:opacity-80 transition-opacity"
          >
            <span className="font-500 text-[11px] text-gray-700 dark:text-gray-300 whitespace-nowrap">
              {newsCatinhindi}
            </span>
            <div 
              className="h-0.5 w-full rounded-full mt-0.5" 
              style={{ backgroundColor: accentColor }}
            />
          </Link>
        )}
        {showShareButtons && <ShareButtons shareUrl={newsUrl} size="small" />}
      </div>
    );
  }

  // VARIANT 4: SOLID - Full colored background
  if (variant === "solid") {
    return (
      <div className="flex items-center justify-between gap-2">
        {newsCategory && (
          <Link
            href={categoryPageUrl}
            className="inline-flex items-center px-2.5 py-1 rounded transition-opacity hover:opacity-90"
            style={{ backgroundColor: accentColor }}
          >
            <span className="font-500 text-[11px] text-white whitespace-nowrap">
              {newsCatinhindi}
            </span>
          </Link>
        )}
        {showShareButtons && <ShareButtons shareUrl={newsUrl} size="small" />}
      </div>
    );
  }

  // VARIANT 5: OUTLINE - Border with colored text
  if (variant === "outline") {
    return (
      <div className="flex items-center justify-between gap-2">
        {newsCategory && (
          <Link
            href={categoryPageUrl}
            className="inline-flex items-center px-2 py-0.5 rounded transition-all hover:shadow-sm"
            style={{ 
              borderWidth: '1.5px',
              borderStyle: 'solid',
              borderColor: accentColor 
            }}
          >
            <span 
              className="font-500 text-[11px] whitespace-nowrap"
              style={{ color: accentColor }}
            >
              {newsCatinhindi}
            </span>
          </Link>
        )}
        {showShareButtons && <ShareButtons shareUrl={newsUrl} size="small" />}
      </div>
    );
  }

  // Default fallback
  return null;
}