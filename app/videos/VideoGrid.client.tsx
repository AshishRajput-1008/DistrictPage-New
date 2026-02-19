"use client";

import { useEffect, useRef, useState } from "react";
import VideoCard from "./VideoCard.client";
import '@/app/globals.css';

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  slug: string;
  category: string;
  subcategory: string;
  publishedAt: string;
}

const PAGE_SIZE = 9;

export default function VideoGrid({
  initialVideos,
}: {
  initialVideos: Video[];
}) {
  const [videos, setVideos] = useState<Video[]>(initialVideos);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  async function loadMore() {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://mapi.sadaivsatya.com/Api/AdminApi/videos?page=${page}&pageSize=${PAGE_SIZE}`
      );

      if (!res.ok) throw new Error("API error");

      const data = await res.json();

      if (data.items.length === 0) {
        setHasMore(false);
      } else {
        setVideos((prev) => [...prev, ...data.items]);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Load more failed", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loaderRef.current, loading, hasMore]);

  return (
    <>
      <div className="video-grid-wrapper">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {hasMore && (
        <div ref={loaderRef} className="h-10" />
      )}
    </>
  );
}
