// app/(videos)/[category]/[subcategory]/video/[slug]/page.tsx

import VideoViewer from "@/components/VideoViewer";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { getVideosDirect, VideoData } from "@/lib/db";

// Force dynamic rendering + no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Video Type
interface Video {
  id: number;
  category: string;
  subcategory: string;
  slug: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  viewCount?: number;
  publishedAt: string;
}

interface Props {
  params: Promise<{
    category: string;
    subcategory: string;
    slug: string;
  }>;
  searchParams?: Promise<{
    cursor?: string;
  }>;
}

// Helper: DB → clean Video object
function transformVideo(v: VideoData): Video {
  return {
    id: v.Id,
    category: v.NewsCategoryName,
    subcategory: v.NewsSubsCategory,
    slug: v.Slug,
    title: v.NewsHeading,
    description: v.NewsHeading,
    videoUrl: v.Media,
    thumbnail: v.ThumbNail,
    viewCount: v.ViewCount,
    publishedAt: v.UpdatedDate.toISOString(),
  };
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cleanSlug = slug.replace(/-\d+\.html$/, "");

  const { videos } = await getVideosDirect({
    mode: 'REEL',
    specificSlug: cleanSlug,
    limit: 1,
  });

  const video = videos[0];

  if (!video) {
    return {
      title: "Reels - Sadaiv Satya",
      description: "Latest video reels and trending news clips",
    };
  }

  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = headersList.get("x-forwarded-proto") ?? "https";
  const domain = `${protocol}://${host}`;
  const pageUrl = `${domain}/${(await params).category}/${(await params).subcategory}/video/${slug}`;

  const imageUrl = video.ThumbNail?.startsWith("http")
    ? video.ThumbNail
    : `${domain}${video.ThumbNail}`;

  return {
    title: video.NewsHeading,
    description: video.NewsHeading,
    openGraph: {
      title: video.NewsHeading,
      description: video.NewsHeading,
      url: pageUrl,
      siteName: "Sadaiv Satya",
      images: [{
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: video.NewsHeading,
      }],
      type: "video.other",
    },
    twitter: {
      card: "summary_large_image",
      title: video.NewsHeading,
      description: video.NewsHeading,
      images: [imageUrl],
    },
  };
}

export default async function VideoReelPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const cleanSlug = slug.replace(/-\d+\.html$/, "");

  const resolvedSearchParams = await searchParams;
  let lastId: number | null = null;
  let lastDate: Date | string | null = null;

  if (resolvedSearchParams?.cursor) {
    try {
      const [dateStr, idStr] = resolvedSearchParams.cursor.split('_');
      lastDate = new Date(dateStr);
      lastId = parseInt(idStr, 10);
    } catch {
    }
  }

  const { videos: initialVideos, nextCursor } = await getVideosDirect({
    lastVideoId: lastId,
    lastUpdatedDate: lastDate,
    limit: 8,
    mode: 'REEL',
    specificSlug: cleanSlug || null,
  });

  const playlist = initialVideos.map(transformVideo);
  const hasMore = !!(nextCursor && initialVideos.length === 5);

  let initialIndex = 0;
  if (cleanSlug) {
    const index = playlist.findIndex(v =>
      v.slug.replace(/-\d+\.html$/, "") === cleanSlug
    );
    initialIndex = index !== -1 ? index : 0;
  }

  return (
    <VideoViewer
      initialPlaylist={playlist}
      initialIndex={initialIndex}
      nextCursor={nextCursor}
      hasMore={hasMore}
      isReelMode={true}
    />
  );
}