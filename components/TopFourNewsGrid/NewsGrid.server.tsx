import NewsGridClient from "./NewsGrid.client";
import { unstable_cache } from "next/cache";
import { NewsArticle } from "@/types";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const getTopNews = unstable_cache(
    async () => {
        const res = await fetch(`${apiUrl}GetCryptoNews?pageSize=5`);
        if (!res.ok) return [];
        return res.json();
    },
    ["top-news-grid"],
    { revalidate: 300 }
);


export default async function NewsGridServer() {
    const articles: NewsArticle[] = await getTopNews();
    return <NewsGridClient articles={articles} />;
}
