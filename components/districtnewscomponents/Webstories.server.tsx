import WebStoriesClient from "./Webstories.client";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getWebStories(page: number) {
    const res = await fetch(
        `${apiBaseUrl}GetWebStories?page=${page}&pageSize=12`,
        { cache: "no-store" }
    );

    return res.json();
}

export default async function Webstories() {
    const data = await getWebStories(1);

    const webStories =
        data?.stories?.slice(0, 6).map((news: any) => ({
            id: news.id,
            image: `https://mapi.sadaivsatya.com${news.thumbnail}`,
            title: news.storyTitle,
            pages: `${news.slideCount} Photos`,
            slug: news.storySlug,
        })) || [];

    return <WebStoriesClient webStories={webStories} />;
}
