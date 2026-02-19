"use client";

import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

export default function WebstoriesClient({ webStories }: any) {
  return (
    <div className="mb-8 mt-4 md:mb-12 md:mt-6">
      <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
        <div className="bg-red-600 p-2 md:p-3 border-b-4 border-red-800">
          <BookOpen className="w-5 h-5 md:w-7 md:h-7 text-white" />
        </div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-black">
          वेब स्टोरीज़
        </h2>
      </div>

      <div className="relative group">
        <ScrollButton dir="left" />
        <div
          id="stories-scroll"
          className="flex overflow-x-auto gap-3 md:gap-4 pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
        >
          {webStories.map((story: any) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
        <ScrollButton dir="right" />
      </div>
    </div>
  );
}

function ScrollButton({ dir }: { dir: "left" | "right" }) {
  return (
    <button
      onClick={() => {
        const el = document.getElementById("stories-scroll");
        if (el) el.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
      }}
      className={`absolute ${dir === "left" ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 bg-white/90 shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 hidden md:block`}
    >
      {dir === "left" ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
}

function StoryCard({ story }: any) {
  return (
    <div className="flex-shrink-0 w-36 sm:w-40 md:w-[calc((100%-4rem)/5.5)] cursor-pointer">
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-64 md:h-80 object-cover hover:scale-110 transition-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-0 p-3 text-white">
          <h3 className="text-sm font-bold line-clamp-3">{story.title}</h3>
        </div>
      </div>
    </div>
  );
}
