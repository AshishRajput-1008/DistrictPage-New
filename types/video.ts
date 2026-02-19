// app/types/video.ts
export interface VideoItem {
  id: number;
  category: string;
  subcategory: string;
  slug: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  viewCount: number;
  publishedAt: string;
}

export interface VideoApiResponse {
  page: number;
  pageSize: number;
  totalCount: number;
  items: VideoItem[];
}
