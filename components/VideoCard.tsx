// components/VideoCard.tsx

import Link from "next/link";
import { getVideoLink, getReelLink } from "@/lib/utils";

interface VideoCardProps {
    video: {
        category: string;
        subcategory?: string | null;
        slug: string;
        title: string;
        thumbnail: string;
    };
    showReelOption?: boolean;
}

export default function VideoCard({ video, showReelOption = true }: VideoCardProps) {
    const videoLink = getVideoLink(video);
    const reelLink = getReelLink(video);

    return (
        <div className="relative group">
            <Link href={videoLink}>
                <a className="block">
                    <img src={video.thumbnail} alt={video.title} />
                    <h3>{video.title}</h3>
                </a>
            </Link>

            {showReelOption && (
                <Link href={reelLink}>
                    <a className="absolute bottom-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs">
                        ▶️ Reel
                    </a>
                </Link>
            )}
        </div>
    );
}