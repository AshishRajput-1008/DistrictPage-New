"use client";

import { useState } from "react";
import Image from "next/image";

export default function VideoNewsSection() {
  const [selectedVideo, setSelectedVideo] = useState({
    id: "D29Cq7jDKHo",
    title:
      "Statele Unite ale Romanilor - Partea I: New York City- MIRCEA BRAVO",
  });

  // Side videos data
  const sideVideos = [
    {
      id: "dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
      title:
        "स्टारर ट्रम्प एवं रोमानियन - पार्टिया I: न्यूयॉर्क सिटी - मिर्सिया ब्रावो",
      duration: "24:59",
    },
    {
      id: "jNQXAC9IVRw",
      thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/mqdefault.jpg",
      title:
        "डोनल्ड ट्रम्प एवं रोमानियन - पार्टिया II-न्यूयॉर्क सिटी - मिर्सिया ब्रावो",
      duration: "26:30",
    },
    {
      id: "kJQP7kiw5Fk",
      thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/mqdefault.jpg",
      title:
        "डेनमार्क के अधिग्रहण का कन्वेंशन से के डेमोक्रेटिक पार्टी दूर हो रहे है. टिप्पणी",
      duration: "12:45",
    },
    {
      id: "9bZkp7q19f0",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/mqdefault.jpg",
      title:
        'एक राजनीतिक विश्लेषण की कहानी से सिर डेमोक्रेटिक "परीचार" पार्टी कि आलो',
      duration: "18:22",
    },
    {
      id: "OPf0YbXqDm0",
      thumbnail: "https://img.youtube.com/vi/OPf0YbXqDm0/mqdefault.jpg",
      title: "मार्टिन लूथर के साथ 72 सवालों | बाग",
      duration: "07:36",
    },
  ];

  // Bottom videos data
  const bottomVideos = [
    {
      id: "M7lc1UVf-VE",
      thumbnail: "https://img.youtube.com/vi/M7lc1UVf-VE/mqdefault.jpg",
      title:
        "अर्जेंटीना बनाम मिलेराली आज 5-1- बेभी गोल और विशेष हाईलाइट्स - 2019",
      date: "12 मार्च, 2019",
      category: "वीडियो",
      duration: "04:45",
    },
    {
      id: "YQHsXMglC9A",
      thumbnail: "https://img.youtube.com/vi/YQHsXMglC9A/mqdefault.jpg",
      title:
        "बर्ड बाउल की कोरी बड़ी ने शेहरों का पता लगाया, और कॉटोनी 500 में शामिल होने वाली उसकी महिला वीडियो बना गई।",
      date: "12 मार्च, 2019",
      category: "वीडियो",
      duration: "00:02:02",
    },
    {
      id: "E8gmARGvPlI",
      thumbnail: "https://img.youtube.com/vi/E8gmARGvPlI/mqdefault.jpg",
      title: "एक वारावं टेरेस्टर केसे एक डीनाटर स्टीक्स मैं वर्तस नया",
      date: "12 मार्च, 2019",
      category: "वीडियो",
      duration: "00:04:09",
    },
    {
      id: "2Vv-BfVoq4g",
      thumbnail: "https://img.youtube.com/vi/2Vv-BfVoq4g/mqdefault.jpg",
      title: "जॉर्डन रे, कॉन्सेमा ओ गोबियालों के मंत्री",
      date: "12 मार्च, 2019",
      category: "वीडियो",
      duration: "00:18:02",
    },
    {
      id: "3JZ_D3ELwOQ",
      thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/mqdefault.jpg",
      title:
        "Uber की पार्क- अब एस्ट्रडक्ट, Amazon की शॉर्ट स्लाईस, Slack द्वारा जारी Stack लेंसबो विशालनिर्देश",
      date: "12 मार्च, 2019",
      category: "वीडियो",
      duration: "00:07:37",
    },
    {
      id: "RgKAFK5djSk",
      thumbnail: "https://img.youtube.com/vi/RgKAFK5djSk/mqdefault.jpg",
      title:
        "अमेरिकी उपभोक्ता मूल्य सूचकांक में नई फ़ी उत्पाद के मुताबिक 0.1% की वृद्धि हुई।",
      date: "12 मार्च, 2019",
      category: "वीडियो",
      duration: "00:04:48",
    },
  ];

  return (
    <>
      {/* <div className="mb-4 ml-4 md:ml-6">
        <h2 className="text-[28px]  md:text-[32px] font-500 text-[#1a1a1a] border-l-4 border-black pl-4 bg-gradient-to-r from-purple-50 to-transparent py-2">
          वीडियो समाचार
        </h2>
      </div> */}



      <section className="bg-black py-6 md:py-8 px-3 md:px-4">

        <div className="mb-6 pb-3 border-b-2 border-red-600">
          <h2 className="text-2xl md:text-3xl font-500 text-white relative inline-block">
            <span className="text-red-600">वीडियो</span> समाचार
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent"></div>
          </h2>
        </div>
        <div className="max-w-[1400px] mx-auto">
          {/* Main Video Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full  shadow-lg"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Side Videos Playlist */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900  overflow-hidden shadow-lg h-full">
                <div className="overflow-y-auto" style={{ maxHeight: "560px" }}>
                  {sideVideos.map((video, index) => (
                    <div
                      key={video.id}
                      className="flex gap-3 p-3 hover:bg-gray-800 cursor-pointer transition-colors border-b border-gray-800 last:border-b-0"
                      onClick={() =>
                        setSelectedVideo({ id: video.id, title: video.title })
                      }
                    >
                      <div className="relative flex-shrink-0">
                        {/* <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-[120px] h-[68px] object-cover"
                        /> */}
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-[120px] h-[68px] object-cover"
                        />
                        <div
                          className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded"
                          style={{ fontFamily: "Rubik, sans-serif" }}
                        >
                          {video.duration}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-white text-sm font-medium line-clamp-3 leading-snug"
                          style={{ fontFamily: "Rubik, sans-serif" }}
                        >
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Videos Grid - 2x2 on Mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
            {bottomVideos.map((video) => (
              <div key={video.id} className="group cursor-pointer">
                <div className="relative overflow-hidden  mb-2 md:mb-3 shadow-md">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={400}
                    height={225}
                    className="w-full h-[120px] md:h-[158px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#9b79f5] bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-1 md:bottom-2 right-1 md:right-2 bg-black bg-opacity-80 text-white text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded"
                    style={{ fontFamily: "Rubik, sans-serif" }}
                  >
                    {video.duration}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                    <span
                      className="text-[10px] md:text-xs text-gray-600 font-500 uppercase"
                      style={{ fontFamily: "Rubik, sans-serif" }}
                    >
                      {video.category}
                    </span>
                    <span
                      className="text-[10px] md:text-xs text-gray-500"
                      style={{ fontFamily: "Rubik, sans-serif" }}
                    >
                      {video.date}
                    </span>
                  </div>
                  <h3
                    className="text-[12px] md:text-sm font-medium text-white line-clamp-2 leading-snug group-hover:text-gray-500 transition-colors"
                    style={{ fontFamily: "Rubik, sans-serif" }}
                  >
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
