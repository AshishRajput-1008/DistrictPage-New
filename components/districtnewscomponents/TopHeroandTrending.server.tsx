import TopHeroandTrendingClient from "./TopHeroandTrending.client";
import { getTopHeroNews } from "@/lib/news/getTopHeroNews";
import { getTrendingNews } from "@/lib/news/getTrendingNews";

export default async function TopHeroandTrendingServer() {
    const heroRes = await getTopHeroNews();
    const trendingRes = await getTrendingNews();

    return (
        <TopHeroandTrendingClient
            heroNews={heroRes?.hero}
            trendingNews={trendingRes?.trending}
        />
    );
}
