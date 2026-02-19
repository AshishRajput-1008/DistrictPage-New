// app/(stories)/web-stories/page.tsx
export const dynamic = 'force-static';
import Image from "next/image";
import "@/app/globals.css";
import "./webstories.css";
import Link from "next/link";
import { Suspense } from "react";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://mapi.sadaivsatya.com/api/AdminApi/";
const MEDIA_BASE = "https://mapi.sadaivsatya.com/";
interface WebStory {
    id: number;
    storyTitle: string;
    storySlug: string;
    category: string;
    thumbnail: string;
    viewCount: number;
    publishedDate: string;
    slideCount: number;
}

interface ApiResponse {
    success: boolean;
    stories: WebStory[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
}

async function getWebStories({ page = 1 }: { page: number }): Promise<WebStory[]> {
    try {
        const res = await fetch(`${apiBaseUrl}GetWebStories?page=${page}&pageSize=12`, {
            next: { revalidate: 60 },
        });
        if (!res.ok) return [];
        const data: ApiResponse = await res.json();
        return data.stories || [];
    } catch {
        return [];
    }
}

function StoryCard({ story }: { story: WebStory }) {
    const categorySlug = story.category
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
    const url = `/web-stories/${categorySlug}/${story.storySlug}`;
    const thumbnailUrl = `${MEDIA_BASE}${story.thumbnail}`;

    return (
        <div className="single-story-col"> {/* सिर्फ column wrapper */}
            <Link href={url} className="single-story relative block">
                {/* Background bars */}
                <div className="background-cards">
                    <div className="background-card-1"></div>
                    <div className="background-card-2"></div>
                </div>

                {/* Play icon (center) */}
                <span className="play-btn-icon">
                    <svg viewBox="0 0 30 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 23L0 45.5167L0 0.483339L30 23Z" fill="#FAF9F9" />
                    </svg>
                </span>

                {/* Image + Title */}
                <div className="image-outerWrapper">
                    <Image
                        unoptimized
                        src={thumbnailUrl}
                        alt={story.storyTitle}
                        fill
                        className="single-story-image object-cover"
                    />
                    <div className="story-block-title-div">
                        <span className="story-block-title">
                            {story.storyTitle}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

function StoriesList({ initialStories }: { initialStories: WebStory[] }) {
    if (initialStories.length === 0) return null;

    return (
        <div className="stories-showcase-block"> {/* यही main flex container */}
            {initialStories.map((story) => (
                <StoryCard key={story.id} story={story} />
            ))}
        </div>
    );
}

function StoriesListSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 md:px-8">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                    <div className="aspect-[9/16] bg-gray-200 rounded-xl"></div>
                </div>
            ))}
        </div>
    );
}

export default async function WebStoriesPage() {
    const initialStories = await getWebStories({ page: 1 });

    return (
        <div className="min-h-screen bg-white font-devanagari">
            <section className="cover-image-block">
                <Image unoptimized
                    src="/images/Background_colors-06_generated.jpg"
                    alt="banner"
                    width={1920}
                    height={300}
                    className="w-full h-auto"
                />
            </section>

            <section className="user-details"><div className="container text-center">
                <div className="profile-image">
                    <Link href="/">
                        <Image
                            unoptimized
                            src="/images/logo.webp" alt=""
                            width={100}
                            style={{ backgroundColor: "white" }}
                            height={100}
                            className="rounded-full"
                        />
                    </Link>
                </div>
                <h1 >Celebrity Visual Stories | Lifestyle Web Stories | Tech Tips & Tricks – Sadaiv Satya</h1><div className="about-author ">
                    <p >View the Latest Web Stories from Entertainment, Politics, Business,
                        Lifestyle, Sports and other Sections.</p>
                </div>
            </div>
            </section>

            <div className="">
                <div className="">
                    <section className=" user-stories-main">
                        <div className="search-sort-block">
                            <div className=" sort-main">
                                <button title="d" type="button" className=" active">
                                    <svg viewBox="0 0 448 512">
                                        <path fill="#000" d="M192 176C192 202.5 170.5 224 144 224H48C21.49 224 0 202.5 0 176V80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V176zM192 432C192 458.5 170.5 480 144 480H48C21.49 480 0 458.5 0 432V336C0 309.5 21.49 288 48 288H144C170.5 288 192 309.5 192 336V432zM256 80C256 53.49 277.5 32 304 32H400C426.5 32 448 53.49 448 80V176C448 202.5 426.5 224 400 224H304C277.5 224 256 202.5 256 176V80zM448 432C448 458.5 426.5 480 400 480H304C277.5 480 256 458.5 256 432V336C256 309.5 277.5 288 304 288H400C426.5 288 448 309.5 448 336V432z">
                                        </path>
                                    </svg>
                                </button>
                                <button title="d" type="button">
                                    <svg viewBox="0 0 448 512">
                                        <path fill="#000" d="M0 72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40C17.91 160 0 142.1 0 120V72zM0 232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40C17.91 320 0 302.1 0 280V232zM128 440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88C110.1 352 128 369.9 128 392V440zM160 72C160 49.91 177.9 32 200 32H248C270.1 32 288 49.91 288 72V120C288 142.1 270.1 160 248 160H200C177.9 160 160 142.1 160 120V72zM288 280C288 302.1 270.1 320 248 320H200C177.9 320 160 302.1 160 280V232C160 209.9 177.9 192 200 192H248C270.1 192 288 209.9 288 232V280zM160 392C160 369.9 177.9 352 200 352H248C270.1 352 288 369.9 288 392V440C288 462.1 270.1 480 248 480H200C177.9 480 160 462.1 160 440V392zM448 120C448 142.1 430.1 160 408 160H360C337.9 160 320 142.1 320 120V72C320 49.91 337.9 32 360 32H408C430.1 32 448 49.91 448 72V120zM320 232C320 209.9 337.9 192 360 192H408C430.1 192 448 209.9 448 232V280C448 302.1 430.1 320 408 320H360C337.9 320 320 302.1 320 280V232zM448 440C448 462.1 430.1 480 408 480H360C337.9 480 320 462.1 320 440V392C320 369.9 337.9 352 360 352H408C430.1 352 448 369.9 448 392V440z" className="">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <Suspense fallback={<StoriesListSkeleton />}>
                            <StoriesList initialStories={initialStories} />
                        </Suspense>

                        {initialStories.length === 0 && (
                            <div className="text-center py-60 text-gray-500">
                                <h2 className="text-3xl font-500 mb-4">कोई वेब स्टोरी उपलब्ध नहीं</h2>
                                <p className="text-lg">जल्द ही नई कहानियाँ आ रही हैं!</p>
                            </div>
                        )}
                    </section>
                </div>
            </div >
        </div >
    );
}