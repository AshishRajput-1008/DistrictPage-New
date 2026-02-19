// components/VideoSection.client.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import timeAgoInHindi from "@/Utility/TimeAgoInHindi";
import { Skeleton } from "@/components/ui/skeleton";
import NewsMetaBar from "./NewsMetaBar";
import ViewCount from "./ViewCount";
import { incrementView } from "@/lib/incrementView";
import { useRouter } from "next/navigation";
import SmartLink from "./SmartLink";
import ClientOnlyGifImage from "./ClientOnlyGifImage";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
const isVideo = (src: string) => /\.(mp4|webm|mov|gif|avi|ogg)$/i.test(src);

type VideoNews = {
  newsId: number;
  newsTag: string;
  newsHeading: string;
  thumbnail: string;
  newsCategory: string;
  newsSubCategory: string;
  updatedDate: string;
  newsSlug: string;
  catNameInHindi: string;
  viewCount: number
  dataType: string
};

interface VideoSectionClientProps {
  initialVideoNews?: VideoNews[];
}

export default function VideoSectionClient({ initialVideoNews = [] }: VideoSectionClientProps) {
  const [videoNews, setVideoNews] = useState<VideoNews[]>(initialVideoNews);
  const [isLoading, setIsLoading] = useState(initialVideoNews.length === 0);

  useEffect(() => {
    if (initialVideoNews.length > 0) {
      setIsLoading(false);
      return;
    }

    const fetchVideoNews = async () => {
      try {
        const res = await fetch(`${apiUrl}ListAllVideo?pagesize=4`, { next: { revalidate: 60 } });
        if (!res.ok) throw new Error("Failed to fetch video news");
        const data = await res.json();
        setVideoNews(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideoNews();
  }, [initialVideoNews.length]);

  const cleanText = (str = "") => str.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();
  const toSlug = (str = "") => cleanText(str).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

  const renderVideoItem = (video: VideoNews, index: number) => {
    const id = video.newsId;
    const category = (toSlug(video.newsCategory) || "general");
    const subcategory = video.newsSubCategory ? toSlug(video.newsSubCategory) : null;
    const slug = video.newsSlug;
    const URL = subcategory ? `/${category}/${subcategory}/news/${slug}` : `/${category}/news/${slug}`;

    return (
      <article
        key={video.newsId}
        className="group relative block overflow-hidden shadow-sm border border-gray-200 dark:border-gray-600 mb-2"
      >
        {/* Thumbnail */}
        <div className="relative w-full aspect-video">
          <SmartLink href={URL} id={id} className="absolute inset-0 z-10 block">
            <ClientOnlyGifImage
              article={{ thumbnail: video.thumbnail || "/Final Logo.webp", newsHeading: video.newsHeading }}
              dataType={video.dataType}
              apiBaseUrl={apiBaseUrl}
            />

            {/* Video play overlay */}
            {typeof window !== "undefined" && isVideo(video.thumbnail) && (
              <span className="pointer-events-none absolute top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 flex items-center justify-center 
      rounded-full bg-black/70 w-14 h-14">
                <Play className="w-6 h-6 text-white fill-white" />
              </span>
            )}
          </SmartLink>

        </div>

        {/* Content */}
        <div className="p-1 flex flex-col justify-between bg-white dark:bg-[#18191a]">
          {/* Title clickable */}
          <SmartLink href={URL} id={id}>
            <h3>
              <span>{video.newsTag}:</span> {video.newsHeading}
            </h3>
          </SmartLink>

          <div className="mt-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span suppressHydrationWarning style={{ fontSize: "12px" }}>
              {timeAgoInHindi(video.updatedDate)}
            </span>

            <span>
              <ViewCount count={video.viewCount} />
            </span>
          </div>

          <div>
            <NewsMetaBar
              newsCategory={video.newsCategory}
              newsCatinhindi={video.catNameInHindi}
              newsSubCategory={video.newsSubCategory}
              newsSlug={video.newsSlug}
            />
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className=" dark:border-gray-600 pb-1" aria-labelledby="video-news-heading">
      <div className="flex items-center justify-between ">
        <h2 id="video-news-heading" className="text-sm sm:text-2xl font-extrabold text-gray-900 dark:text-white tracking-wide uppercase border-l-4 border-red-700 pl-4 pr-3 py-2">
          वीडियो न्यूज़
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 ">
        {isLoading
          ? Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="group relative block  overflow-hidden "
            >
              <Skeleton className="w-full aspect-video" />
              <div className="p-3 flex flex-col justify-between bg-white">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))
          : videoNews.map((video, index) => renderVideoItem(video, index))}
      </div>
    </section>
  );
}