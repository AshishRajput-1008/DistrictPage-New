// app/[category]/[subcategory]/news/[slug]/NewsContent.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import ReadMoreClient from "@/components/ReadMoreClient";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import { Play } from "lucide-react";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import ViewCount from '@/components/ViewCount';
import TextReader from '@/components/TextReader';
import cleanSlug from '@/lib/cleanSlug';
import { getCategoryColor } from '@/lib/getCategoryColor';
import { toSlug } from '@/lib/news-api';

interface News {
    newsTag: string;
    newsHeading: string;
    updatedDate: string;
    viewCount: number;
    thumbNail?: string;
    media: string;
    dataType?: string;
    newsDetails: string;
    newsDetailsTwo?: string;
    socialImage?: string;
}

interface Props {
    category: string;
    subcategory?: string;
    slug: string;
    news: News;
    finalSlug: string;
    children?: React.ReactNode;
}

export default function NewsContent({
    category,
    subcategory,
    slug,
    news,
    finalSlug,
    children
}: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const safeHtml = (html?: string | null) => html || "";
    const previewUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${news.thumbNail || "/Final Logo.webp"}`;
    const mediaUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}${news.media}`;  // actual video या image
    const videoPageUrl = subcategory
        ? `/${category}/${subcategory}/video/${slug}`
        : `/${category}/video/${slug}`;
    const catcolor = getCategoryColor(category);
    const isVideo = news.dataType === "VIDEO";
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="mx-auto px-3 md:px-1 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left Aside - Ad (5G Plan) */}
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-24 space-y-6">
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-purple-600 to-indigo-700 shadow-2xl">
                            <div className="p-8 text-center text-white">
                                <h3 className="mb-4 text-2xl font-500">सुपर फास्ट 5G प्लान</h3>
                                <p className="mb-6 text-lg opacity-90">अनलिमिटेड डेटा + फ्री कॉलिंग</p>
                                <div className="mx-auto mb-8 h-32 w-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <span className="text-4xl font-extrabold">₹499</span>
                                </div>
                                <button className="rounded-full bg-white px-8 py-3 font-500 text-indigo-700 shadow-lg transition hover:scale-105 hover:shadow-xl">
                                    अभी रिचार्ज करें
                                </button>
                            </div>
                            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-yellow-400 opacity-30 blur-3xl"></div>
                            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-pink-400 opacity-40 blur-2xl"></div>
                            <span className="absolute right-2 top-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
                                विज्ञापन
                            </span>
                        </div>
                    </div>
                </aside>

                <main className="lg:col-span-6">
                    <article className="space-y-6">
                        {/* Breadcrumb */}
                        <div>
                            <ul className="breadcrumb-list flex flex-wrap gap-2 text-sm">
                                <li>
                                    <Link href={`/${toSlug(category)}`} className="uppercase hover:underline">
                                        <span className="text-gray-500">{category}</span>
                                    </Link>
                                </li>

                                {subcategory && (
                                    <li className="flex items-center">
                                        <span className="text-gray-400 mx-1">/</span>
                                        <Link href={`/${toSlug(category)}/${toSlug(subcategory)}`} className="uppercase hover:underline">
                                            <span className="text-gray-500">{subcategory}</span>
                                        </Link>
                                    </li>
                                )}

                                {slug && (
                                    <li className="flex items-center">
                                        <span className="text-gray-400 mx-1">/</span>
                                        <span className="uppercase text-gray-800 font-medium">
                                            {cleanSlug(slug)}
                                        </span>
                                    </li>
                                )}
                            </ul>
                        </div>

                        <h1 className="text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] font-500 leading-tight" style={{ lineHeight: "1.4" }}>
                            <span style={{ color: catcolor }}>{news.newsTag}: </span>
                            {news.newsHeading}
                        </h1>

                        <div className="flex flex-wrap justify-between items-center border-b pb-3 gap-3">
                            <span
                                suppressHydrationWarning
                                className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-[11px] md:text-xs text-gray-600 shadow-sm"
                            >
                                <span className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5 text-gray-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {timeAgoInHindi(news.updatedDate)}
                                </span>

                                <span className="h-3 w-[1px] bg-gray-300" />

                                <ViewCount count={news.viewCount} />
                            </span>

                            <div className="flex items-center gap-3">
                                <TextReader targetId="news-body" />
                                <ShareButtons />
                            </div>
                        </div>

                        {/* Thumbnail / Video Section */}

                        <div
                            className="relative aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800 cursor-pointer w-[355px] h-[300px] md:w-auto md:h-auto "
                            onClick={openModal}  // ← क्लिक पर modal खोलो
                        >
                            <Image
                                src={previewUrl || "/Final Logo.webp"}
                                alt={news.newsHeading}
                                fill
                                className="object-cover"
                                unoptimized
                            />

                            {isVideo && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/60 text-white">
                                        <Play className="h-8 w-8 fill-white" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Main News Body */}
                        <div
                            id="news-body"
                            suppressHydrationWarning
                            className="text-justify text-[16px] md:text-[17px] lg:text-[18px] prose prose-gray dark:prose-invert max-w-none pt-2 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: safeHtml(news.newsDetails) }}
                        />

                        {news.newsDetailsTwo && (
                            <ReadMoreClient html={safeHtml(news.newsDetailsTwo)} />
                        )}

                        {children}
                    </article>
                </main>

                {/* Right Aside - Ad (Smartphone Launch) */}
                <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-24 space-y-6">
                        <div className="relative overflow-hidden rounded-xl bg-gray-900 shadow-xl">
                            <div className="p-6 text-center text-white">
                                <div className="mx-auto mb-6 h-40 w-40 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-inner">
                                    <span className="text-5xl">📱</span>
                                </div>
                                <h3 className="mb-3 text-xl font-500">नया स्मार्टफोन लॉन्च</h3>
                                <p className="mb-5 text-gray-300 text-sm">
                                    120Hz डिस्प्ले • 108MP कैमरा • 5000mAh बैटरी
                                </p>
                                <p className="mb-6 text-3xl font-500 text-teal-400">केवल ₹19,999</p>
                                <button className="rounded-lg bg-teal-500 px-8 py-3 font-medium text-white transition hover:bg-teal-400 hover:shadow-lg">
                                    अभी खरीदें
                                </button>
                            </div>
                            <span className="absolute left-2 top-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                                स्पॉन्सर्ड
                            </span>
                        </div>
                    </div>
                </aside>
            </div>
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300 z-10"
                            onClick={closeModal}
                        >
                            ×
                        </button>

                        {isVideo ? (
                            <video
                                src={mediaUrl}
                                controls
                                autoPlay
                                muted={false}
                                className="w-full h-auto max-h-[85vh] rounded-xl shadow-2xl object-contain"
                            />
                        ) : (
                            <div className="overflow-auto max-h-[85vh]">
                                <Image
                                    src={mediaUrl}
                                    alt={news.newsHeading}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto object-contain"
                                    unoptimized
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}