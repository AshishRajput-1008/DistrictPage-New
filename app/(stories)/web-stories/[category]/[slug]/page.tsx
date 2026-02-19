import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import WebStoryPlayer from "@/components/WebStoryPlayer";
import RelatedStories from "@/components/RelatedStories";
import ShareButton from "@/components/ShareButton";

interface PageProps {
    params: {
        category: string;
        slug: string;
    };
}

const API_BASE = "https://mapi.sadaivsatya.com/api/AdminApi/";
const MEDIA_BASE = "https://mapi.sadaivsatya.com/";

async function getStory(slug: string) {
    const res = await fetch(`${API_BASE}GetWebStories2?slug=${slug}`
    );

    const data = await res.json();
    return data.stories?.[0] || null;
}

async function getSlides(id: number) {
    const res = await fetch(`${API_BASE}GetStorySlides/${id}`, {
        next: { revalidate: 60 }
    });

    const data = await res.json();
    return data.slides || [];
}

export default async function WebStoryDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
    const { category, slug } = await params;
    const story = await getStory(slug);
    if (!story) notFound();
    const slides = await getSlides(story.id);
    const slideItems = slides.map((s: any) => ({
        type: "image",
        src: MEDIA_BASE + s.mediaUrl,
        caption: `${s.title}\n${s.description}`,
        duration: 5000,
    }));

    const fullStory = {
        ...story,
        slides: slideItems,
    };

    return (
        <div className="fixed inset-0 w-full h-full bg-black text-white overflow-hidden">
            <WebStoryPlayer
                story={fullStory}
                autoplay={true}
                defaultDuration={5000}
            />
        </div>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
    const { category, slug } = await params;
    const story = await getStory(slug);
    if (!story) return {};

    return {
        title: story.storyTitle,
        description: story.storyTitle,
        openGraph: {
            title: story.storyTitle,
            description: story.storyTitle,
            images: [`${MEDIA_BASE}/${story.thumbnail}`],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: story.storyTitle,
            description: story.storyTitle,
            images: [`${MEDIA_BASE}/${story.thumbnail}`],
        },
    };
}
export const dynamic = "force-dynamic";
