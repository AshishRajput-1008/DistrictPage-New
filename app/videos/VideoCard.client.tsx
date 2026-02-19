"use client";

import { toSlug } from "@/lib/news-api";
import Link from "next/link";
import Image from "next/image";


interface Video {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    slug: string;
    category: string;
    subcategory: string;
    publishedAt: string;
}
const BaseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function VideoCard({ video }: { video: Video }) {
    const cat = toSlug(video.category);
    const catsubcat = toSlug(video.subcategory);
    const URL = `/${cat}/${catsubcat}/video/${video.slug}`;
    return (
        <Link
            href={URL}
            className="group block overflow-hidden"
        >
            <div key={video.id} className="video-card">
                {/* <img src={BaseURL + video.thumbnail} alt={video.title} /> */}
                <Image
                    src={`${BaseURL}${video.thumbnail}`}
                    alt={video.title}
                    width={400}
                    height={225}
                    className="object-cover w-full h-auto"
                />
                {/* <div className="play-btn overlay hover:scale-110 hover:opacity-100 hover:cursor-pointer">▶</div> */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="rounded-full p-3">
                        <svg
                            className="w-12 h-12 text-white drop-shadow-2xl"
                            viewBox="0 0 84 84"
                            fill="currentColor"
                        >
                            <circle cx="42" cy="42" r="42" fill="rgba(0,0,0,0.4)" />
                            <polygon points="33,26 33,58 60,42" fill="white" />
                        </svg>
                    </div>
                </div>

                {/* <div className="overlay">
                    <span className="text-red-600">{video.title}</span>
                    {":"}
                    <span>{video.description}</span>
                </div> */}
            </div>
        </Link>
    );
}