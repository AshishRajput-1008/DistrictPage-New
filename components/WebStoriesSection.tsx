"use client";

import { useRef, useState, useEffect, type MouseEvent } from "react";

const BollywoodReels = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const videos = [
    {
      id: 1,
      title: "नुपुर-स्टेबिन की शादी के रिसेप्शन में पहुंचे सलमान",
      url: "/entertainment/bollywood/video/salman-khan-attends-nupur-sanon-stebin-ben-wedding-reception-mouni-roy-dish-patani-136941320.html?type=widget&vid=13",
      videoSrc:
        "https://videos.bhaskarassets.com/thumb/256x0/2026/01/14/nupur_1768366249/mp4/v360.mp4",
      duration: "0:49",
      hasVideo: true,
    },
    {
      id: 2,
      title: "'दिल्ली बेली' आमिर को क्यों लगी थी बेकार?",
      url: "/entertainment/bollywood/video/aamir-khan-deli-belly-fan-meet-funny-incident-136937470.html?type=widget&index=1&vid=13",
      videoSrc:
        "https://videos.bhaskarassets.com/thumb/256x0/2026/01/13/amir-khan_1768317072/mp4/v360.mp4",
      duration: "1:47",
      hasVideo: true,
    },
    {
      id: 3,
      title: "भूपेन हजारिका के छोटे भाई समर का निधन",
      url: "/entertainment/bollywood/video/samar-hazarika-passes-away-guwahati-assamese-musician-136934509.html?type=widget&index=2&vid=13",
      videoSrc:
        "https://videos.bhaskarassets.com/thumb/256x0/2026/01/13/samar-hazarika_1768298086/mp4/v360.mp4",
      duration: "0:57",
      hasVideo: true,
    },
    {
      id: 4,
      title: "मुंबई गैंगस्टर की बेटी ने भेजा 'ओ रोमियो' मेकर्स को नोटिस",
      url: "/entertainment/bollywood/video/mumbai-gangster-daughter-sends-legal-notice-to-film-makers-136936641.html?type=widget&index=3&vid=13",
      videoSrc:
        "https://videos.bhaskarassets.com/thumb/256x0/2026/01/13/01-o-romeo-controversy1_1768310771/mp4/v360.mp4",
      duration: "0:40",
      hasVideo: true,
    },
    {
      id: 5,
      title: "सुनील शेट्टी हुए इमोशनल, बोले- 'अहान को...'",
      url: "/entertainment/bollywood/video/sunil-shetty-emotional-on-ahan-shetty-struggle-at-border-2-jate-huye-lamho-song-launch-136933005.html?type=widget&index=4&vid=13",
      videoSrc:
        "https://videos.bhaskarassets.com/thumb/256x0/2026/01/13/border-2-sunil-update_1768280477/mp4/v360.mp4",
      duration: "1:39",
      hasVideo: true,
    },
    {
      id: 6,
      title: "यश की फिल्म Toxic के टीजर पर विवाद",
      url: "/entertainment/bollywood/video/sunil-shetty-emotional-on-ahan-shetty-struggle-at-border-2-jate-huye-lamho-song-launch-136933005.html?type=widget&index=4&vid=13",
      videoSrc:
        "https://videos.bhaskarassets.com/thumb/256x0/2026/01/13/samar-hazarika_1768298086/mp4/v360.mp4",
      duration: "0:48",
      hasVideo: false,
    },
    {
      id: 7,
      title: "क्या दिशा पाटनी डेट कर रही हैं तलविंदर सिंह को?",
      url: "/entertainment/bollywood/video/is-disha-patani-dating-talwinder-singh-sidhu-136936175.html?type=widget&index=6&vid=13",
      videoSrc: "",
      duration: "0:40",
      hasVideo: false,
    },
    {
      id: 8,
      title: "फरीदा जलाल का 'ओ रोमियो' डायलॉग पर रिएक्शन",
      url: "/entertainment/bollywood/video/farida-jalal-vishal-bhardwaj-o-remio-dialogue-reaction-136935550.html?type=widget&index=7&vid=13",
      videoSrc: "",
      duration: "1:04",
      hasVideo: false,
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (!video) return;
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise && typeof (playPromise as Promise<any>).catch === "function") {
              (playPromise as Promise<any>).catch(() => {
              });
            }
          } else {
            video.pause();
            try {
              video.currentTime = 0;
            } catch {
            }
          }
        });
      },
      {
        threshold: 0.5,
        root: scrollContainerRef.current,
      },
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleVideoHover = (e: MouseEvent<HTMLAnchorElement>, isEntering: boolean) => {
    const video = (e.currentTarget as HTMLAnchorElement).querySelector("video");
    if (video && (video as HTMLVideoElement).src) {
      if (isEntering) {
        (video as HTMLVideoElement).play().catch(() => {});
      } else {
        (video as HTMLVideoElement).pause();
        (video as HTMLVideoElement).currentTime = 0;
      }
    }
  };

  return (
    <div className="max-w-[1350px] px-1 md:px-4 py-4 pb-2 bg-white">
      {/* Header */}
      <div className="flex ml-4 lg:ml-2 justify-between items-start md:mb-2">
        <div className="mb-6 pb-3 border-b-2 border-[#7059ff]">
          <h2 className="text-2xl md:text-3xl font-500 text-gray-900 relative inline-block">
            <span className="text-[#7059ff]">ट्रेंडिंग</span> REELS
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#7059ff] to-transparent"></div>
          </h2>
        </div>

        <a
          href="/videos/gallery?type=widget&vid=13"
          className="text-[#7059ff] no-underline mr-4 text-[12px] sm:text-sm font-500 px-3 sm:px-5 py-1.5 sm:py-2 border border-[#7059ff] rounded transition-all duration-300 hover:bg-[#7059ff] hover:text-white mt-1"
        >
          सभी देखें
        </a>
      </div>

      {/* Videos Container */}
      <div className="relative overflow-hidden ml-2">
        <div
          ref={scrollContainerRef}
          className="flex gap-2 md:gap-3 overflow-x-auto scroll-smooth scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videos.map((video, index) => (
            <a
              key={video.id}
              href={video.url}
              className="relative flex-shrink-0 w-[calc(28%-4px)] md:w-[200px] h-[160px] md:h-[350px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] no-underline group"
              onMouseEnter={(e) => handleVideoHover(e, true)}
              onMouseLeave={(e) => handleVideoHover(e, false)}
            >
              {/* Placeholder for videos without thumbnail */}
              {!video.hasVideo && (
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#667eea] to-[#764ba2] z-[1]" />
              )}

              {/* Video Element */}
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                className="w-full h-full object-cover bg-black"
                muted
                loop
                playsInline
                poster={video.videoSrc}
              >
                {video.hasVideo && (
                  <source src={video.videoSrc} type="video/mp4" />
                )}
              </video>

              {/* Gradient Overlay at Top */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10" />

              {/* Play Button Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-20">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="white"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M31.4 22.6L20.4 16.2C19.4 15.6 18 16.4 18 17.6V30.2C18 31.4 19.4 32.2 20.4 31.6L31.4 25.2C32.4 24.8 32.4 23.2 31.4 22.6Z"
                    fill="black"
                  />
                </svg>
              </div>

              {/* Duration Badge - Bottom Left */}
              <div className="absolute bottom-2 left-2 bg-black/80 text-white px-2 py-0.5  text-[11px] md:text-xs font-500 backdrop-blur-sm m-0 z-20">
                {video.duration}
              </div>
            </a>
          ))}
        </div>

        {/* Left Navigation Button - Desktop Only */}
        {!isMobile && showLeftButton && (
          <button
            type="button"
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-50% w-10 h-10 cursor-pointer flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-gray-100 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] z-30"
            aria-label="Scroll left"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 rotate-90"
            >
              <path
                d="M6 9.57398C6 9.31798 6.098 9.06198 6.293 8.86698C6.684 8.47598 7.316 8.47598 7.707 8.86698L11.999 13.16L16.293 8.86698C16.684 8.47598 17.317 8.47598 17.707 8.86698C18.098 9.25798 18.098 9.88998 17.707 10.281L12.954 15.033C12.427 15.558 11.571 15.558 11.045 15.034L6.293 10.281C6.098 10.086 6 9.82998 6 9.57398Z"
                fill="#333"
              />
            </svg>
          </button>
        )}

        {/* Right Navigation Button - Desktop Only */}
        {!isMobile && showRightButton && (
          <button
            type="button"
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rrounded-50% w-10 h-10 cursor-pointer flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 hover:bg-gray-100 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] z-30"
            aria-label="Scroll right"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 rotate-270"
            >
              <path
                d="M6 9.57398C6 9.31798 6.098 9.06198 6.293 8.86698C6.684 8.47598 7.316 8.47598 7.707 8.86698L11.999 13.16L16.293 8.86698C16.684 8.47598 17.317 8.47598 17.707 8.86698C18.098 9.25798 18.098 9.88998 17.707 10.281L12.954 15.033C12.427 15.558 11.571 15.558 11.045 15.034L6.293 10.281C6.098 10.086 6 9.82998 6 9.57398Z"
                fill="#333"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BollywoodReels;
