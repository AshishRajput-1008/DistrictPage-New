// components/SpecialNews.server.tsx
import SpecialNewsClient from "./SpecialNews.client";
import { getTopDistricts } from "@/lib/news/getTopDistricts";
import { getMixedDistrictNews } from "@/lib/news/getMixedDistrictNews";

export default async function SpecialNewsServer() {
    const mixedNews = await getMixedDistrictNews(8, "IMAGE");

    return <SpecialNewsClient mixedNews={mixedNews} />;
}
