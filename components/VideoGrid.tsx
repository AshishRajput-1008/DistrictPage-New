"use client";
import Image from "next/image";

type VideoItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

export default function VideoGrid({ videos }: { videos: VideoItem[] }) {
  return (
    <div className="video-grid-wrapper">
      {videos.map((item) => (
        <div key={item.id} className="video-card">
          <Image
            src={item.image}
            alt={item.title}
            width={400}
            height={300}
            className="object-cover"
          />

          <div className="play-btn">▶</div>

          <div className="overlay">
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
