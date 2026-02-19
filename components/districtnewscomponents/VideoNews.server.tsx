// components/VideoNews.server.tsx
import VideoNewsClient from "./VideoNews.client";
import { getMixedDistrictNews } from "@/lib/news/getMixedDistrictNews";

export default async function VideoNewsServer() {
  const mixedNews = await getMixedDistrictNews(4, "VIDEO");

  return <VideoNewsClient videoNews={mixedNews || []} />;
}
