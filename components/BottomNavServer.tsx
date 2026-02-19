// app/components/BottomNavServer.tsx  (या जहां चाहो रखो)

import { fetchAllVideos } from "@/lib/videoApi";
import MobileBottomBar from "./MobileBottomBar";
import { toSlug } from "@/lib/news-api";

export async function BottomNavServer() {
    let videoHref = "/video";

    try {
        const pagedVideos = await fetchAllVideos();
        const videos = pagedVideos.items || [];
        if (videos.length > 0) {
            videos.sort((a: any, b: any) =>
                new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
            );

            const latestVideo = videos[0];
            const category = (toSlug(latestVideo.category) || "news").toLowerCase();
            const subcategory = (toSlug(latestVideo.subcategory) || "general").toLowerCase();
            const slug = latestVideo.slug;

            if (slug) {
                videoHref = `/${category}/${subcategory}/video/${slug}?mode=reel&index=0`;
            }
        }
    } catch (error) {
        console.error("BottomNavServer: Failed to fetch latest video", error);
    }

    return <MobileBottomBar videoHref={videoHref} />;
}