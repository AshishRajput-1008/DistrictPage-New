// components/VideoSectionParent.server.tsx
import VideoSectionClient from "./VideoSection.client";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const Local = `${apiUrl}ListAllVideo?pagesize=8`;

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
  viewCount: number;
  dataType: string;
};

async function fetchVideoNews(): Promise<VideoNews[]> {
  try {
    const res = await fetch(Local);
    if (!res.ok) return [];
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function VideoSectionParent() {
  const videoNews = await fetchVideoNews();

  return <VideoSectionClient initialVideoNews={videoNews} />;
}