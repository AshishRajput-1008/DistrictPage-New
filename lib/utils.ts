import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function generateVideoUrl(video: {
  category: string;
  subcategory?: string | null;
  slug: string;
}, options?: {
  mode?: 'reel';
  index?: number;
  cursor?: string;
}) {
  // 🔥 Subcategory handle karo
  let baseUrl = video.subcategory
    ? `/${video.category}/${video.subcategory}/video/${video.slug}`
    : `/${video.category}/video/${video.slug}`;

  // 🔥 Query params add karo
  const params = new URLSearchParams();
  if (options?.mode) params.set('mode', options.mode);
  if (options?.index !== undefined) params.set('index', String(options.index));
  if (options?.cursor) params.set('cursor', options.cursor);

  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

// 🔥 Category page se video link
export function getVideoLink(video: {
  category: string;
  subcategory?: string | null;
  slug: string;
}) {
  return generateVideoUrl(video);
}

// 🔥 Reel mode link
export function getReelLink(video: {
  category: string;
  subcategory?: string | null;
  slug: string;
}) {
  return generateVideoUrl(video, { mode: 'reel', index: 0 });
}