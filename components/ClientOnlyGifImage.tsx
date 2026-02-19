"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface Article {
    thumbnail: string;
    newsHeading: string;
}

interface ClientOnlyGifImageProps {
    article: Article;
    apiBaseUrl: string;
    dataType: string;
}

export default function ClientOnlyGifImage({
    article,
    dataType,
    apiBaseUrl,
}: ClientOnlyGifImageProps) {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Image
                unoptimized
                src={`${apiBaseUrl}${article.thumbnail}`}
                alt={article.newsHeading}
                fill
                className="object-cover"
            />
        );
    }

    const isGif: boolean = article.thumbnail
        ?.toLowerCase()
        .endsWith(".gif");

    return dataType === "VIDEO" ? (
        <>
            <Image
                unoptimized
                src={`${apiBaseUrl}${article.thumbnail}`}
                alt={article.newsHeading}
                fill
                className="object-cover rounded-lg"
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-black/70 w-8 h-8 flex items-center justify-center">
                    <Play className="w-3 h-3 text-white fill-white" />
                </div>
            </div>
        </>
    ) : (
        <Image
            unoptimized
            src={`${apiBaseUrl}${article.thumbnail}`}
            alt={article.newsHeading}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
    );
}
