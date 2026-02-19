// components/RelatedNewsSectionServer.tsx
import { getCategoryArticles } from "@/lib/news-api";
import RelatedNewsSectionClient from "./RelatedNewsSectionClient";

interface NewsItem {
    newsId: number;
    newsCategory: string;
    newsSubCategory?: string;
    newsHeading: string;
    newsSlug: string;
    newsTag: string;
    thumbnail: string;
    updatedDate: string;
    catNameInHindi: string;
    viewCount: number;
    dataType: string;
}

const toTitleCase = (str = "") => {
    if (!str) return "";
    return str
        .toLowerCase()
        .replace(/-/g, " ")
        .split(" ")
        .map(word => word ? word[0].toUpperCase() + word.slice(1) : "")
        .join(" ");
};

interface Props {
    category: string;
    slug: string;
}

export default async function RelatedNewsSectionServer({ category, slug }: Props) {
    const displayCategory = toTitleCase(category || "");

    let initialNews: NewsItem[] = [];

    try {
        const data = await getCategoryArticles(displayCategory);
        initialNews = data
            .filter((n: any) => n.newsSlug !== slug)
            .slice(0, 9);
    } catch (err) {
        console.error("Error fetching initial related news:", err);
    }
    

    return (
        <RelatedNewsSectionClient
            initialNews={initialNews}
            category={displayCategory}
            currentSlug={slug}
        />
    );
}