const API = process.env.NEXT_PUBLIC_API_URL;

export interface Video {
  id: number;
  category: string;
  subcategory: string;
  slug: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  categoryLink: string;
  newsLink: string;
  publishedAt: string;
}

export interface PagedVideos {
  page: number;
  pageSize: number;
  totalCount: number;
  items: Video[];
}

export async function fetchAllVideos(
  page = 1,
  pageSize = 1
): Promise<PagedVideos> {
  const res = await fetch(`${API}videos?page=${page}&pageSize=${pageSize}`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error("Failed to load videos");
  return res.json();
}

export async function fetchVideo(slug: string): Promise<Video> {
  const res = await fetch(`${API}videos/${encodeURIComponent(slug)}`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error("Video not found");
  return res.json();
}


export function getNextVideo(videos: Video[], currentSlug: string) {
  const index = videos.findIndex(v => v.slug === currentSlug);
  return index >= 0 ? videos[index + 1] ?? null : null;
}

export function getPrevVideo(videos: Video[], currentSlug: string) {
  const index = videos.findIndex(v => v.slug === currentSlug);
  return index > 0 ? videos[index - 1] : null;
}
