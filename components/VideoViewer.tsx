"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { Video, Volume2, VolumeX } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import '@/app/globals.css';
import '@/components/videoplayer.css';
import { getCategoryColor } from "@/lib/getCategoryColor";

interface Video {
    id: number;
    category: string;
    subcategory: string;
    slug: string;
    title: string;
    description: string;
    videoUrl: string;
    thumbnail: string;
    viewCount?: number;
    publishedAt: string;
}

interface Props {
    initialPlaylist: Video[];
    initialIndex: number;
    nextCursor?: string | null;
    hasMore?: boolean;
    isReelMode?: boolean;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function VideoViewer({
    initialPlaylist,
    initialIndex = 0,
    nextCursor: initialNextCursor = null,
    hasMore: initialHasMore = false,
    isReelMode = false
}: Props) {
    const [playlist, setPlaylist] = useState<Video[]>(initialPlaylist);
    const [index, setIndex] = useState(() => {
        if (typeof window === "undefined") return initialIndex;
        const urlIndex = new URLSearchParams(window.location.search).get("index");
        const parsed = urlIndex ? parseInt(urlIndex, 10) : initialIndex;
        return !isNaN(parsed) && parsed >= 0 && parsed < initialPlaylist.length ? parsed : initialIndex;
    });
    const [isPrefetching, setIsPrefetching] = useState(false);
    const [nextCursor, setNextCursor] = useState<string | null>(initialNextCursor);
    const [isLoading, setIsLoading] = useState(false);

    const [hasMore, setHasMore] = useState(() => {
        return initialHasMore || !!(initialNextCursor && initialPlaylist.length >= 8);
    });
    const [pendingIndex, setPendingIndex] = useState<number | null>(null);
    const [playing, setPlaying] = useState(true);
    const [hydrated, setHydrated] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [muted, setMuted] = useState(false);
    const [speed, setSpeed] = useState(1);
    const [isVideoReady, setIsVideoReady] = useState(false);
    const [hoverfb, setHoverfb] = useState(false);
    const [hovertw, setHovertw] = useState(false);
    const [hovercl, setHovercl] = useState(false);
    const [hoverwt, setHoverwt] = useState(false);
    const router = useRouter();
    const isSeeking = useRef(false);
    const searchParams = useSearchParams();
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const isDragging = useRef(false);
    const pathname = usePathname();
    const [dragOffset, setDragOffset] = useState(0);
    const startY = useRef(0);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);
    const touchStartTime = useRef(0);
    const touchStartY = useRef(0);
    const currentVideo = playlist[index];
    const catColor = getCategoryColor(currentVideo?.category);
    const cleanText = (str = "") => str.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();
    const toSlug = (str = "") => cleanText(str).toLowerCase().replace(/[^a-z0-9]+/g, "-")
        .replace(/-+/g, "-").replace(/^-|-$/g, "");
    const catlink = toSlug(currentVideo?.category || '');
    const displayIndex = pendingIndex !== null ? pendingIndex : index;
    const loadMoreVideos = useCallback(async () => {
        if (!isReelMode || !nextCursor || isLoading || !hasMore) return;
        setIsLoading(true);
        const isEarlyPrefetch = playlist.length - index > 2;
        if (isEarlyPrefetch) {
            setIsPrefetching(true);
        } else {
            setIsLoading(true);
        }
        try {
            const response = await fetch(`/api/reels?cursor=${encodeURIComponent(nextCursor)}&limit=8&t=${Date.now()}`, {
                cache: 'no-store',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                const text = await response.text();
                console.error('Non-JSON response:', text.substring(0, 200));
                throw new Error('Invalid response format');
            }

            if (!response.ok) throw new Error('Failed to load');

            const data = await response.json();


            // loadMoreVideos के try block में
            if (data.videos && data.videos.length > 0) {
                const existingIds = new Set(playlist.map(v => v.id));
                const uniqueNewVideos = data.videos.filter((v: Video) => !existingIds.has(v.id));

                if (uniqueNewVideos.length > 0) {
                    setPlaylist(prev => [...prev, ...uniqueNewVideos]);

                    // Cursor को last unique video से update
                    const lastAdded = uniqueNewVideos[uniqueNewVideos.length - 1];
                    const newCursor = `${new Date(lastAdded.publishedAt).toISOString()}_${lastAdded.id}`;
                    setNextCursor(newCursor);

                    setHasMore(data.hasMore && uniqueNewVideos.length === 8);
                } else {
                    console.warn("All new videos were duplicates - stopping pagination");
                    setHasMore(false);
                    setNextCursor(null);
                }
            } else {
                setHasMore(false);
                setNextCursor(null);
            }
        } catch (error) {
            console.error(error);
            setHasMore(false);
            setNextCursor(null);
        } finally {
            setIsLoading(false);
            setIsPrefetching(false);
        }
    }, [nextCursor, isLoading, hasMore, isReelMode, playlist.length, index]);

    useEffect(() => {
        if (!isReelMode || !isMobile || !loadMoreRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {
                    loadMoreVideos();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '200px'
            }
        );

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [isReelMode, isMobile, hasMore, isLoading, loadMoreVideos]);

    const onTouchStart = (e: React.TouchEvent) => {
        isDragging.current = true;
        startY.current = e.touches[0].clientY;
        touchStartY.current = e.touches[0].clientY;
        touchStartTime.current = Date.now();

        const currentVid = videoRefs.current[displayIndex];
        if (currentVid) {
            currentVid.pause();
        }
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging.current) return;
        const currentY = e.touches[0].clientY;
        const diff = currentY - startY.current;
        const maxDrag = window.innerHeight * 0.3;
        const boundedDiff = Math.max(-maxDrag, Math.min(maxDrag, diff));
        setDragOffset(boundedDiff);
    };

    const onTouchEnd = () => {
        if (!isDragging.current) return;

        const touchDuration = Date.now() - touchStartTime.current;
        const touchEndY = startY.current + dragOffset;
        const diff = touchEndY - touchStartY.current;

        if (Math.abs(diff) > 50 || touchDuration < 300) {
            if (diff < -50 && index < playlist.length - 1) {
                goNext();
            }
            else if (diff > 50 && index > 0) {
                goPrev();
            }
        }

        isDragging.current = false;
        setDragOffset(0);
        startY.current = 0;
        touchStartY.current = 0;

        const currentVid = videoRefs.current[displayIndex];
        if (currentVid) {
            currentVid.play().catch(() => { });
        }
    };

    useEffect(() => {
        playlist.forEach((_, i) => {
            const vid = videoRefs.current[i];
            if (vid) {
                if (i === displayIndex) {
                    vid.play().catch(() => { });
                } else {
                    vid.pause();
                    vid.currentTime = 0;
                }
            }
        });
    }, [displayIndex, playlist]);

    useEffect(() => {
        const currentVid = videoRefs.current[displayIndex];
        if (currentVid && isVideoReady) {
            currentVid.play().catch((err) => {
                console.log("Autoplay prevented:", err);
                if (!currentVid.muted) {
                    currentVid.muted = true;
                    setMuted(true);
                    currentVid.play().catch(() => { });
                }
            });
        }
    }, [displayIndex, isVideoReady]);

    // useEffect(() => {
    //     if (!isReelMode || !hasMore || isLoading) return;

    //     // जब playlist में सिर्फ 2 videos बचे हों (या कम)
    //     if (index >= playlist.length - 3) {   // -3 मतलब 2 बाकी रहें तो prefetch
    //         console.log(`Prefetch triggered: index=${index}, playlist length=${playlist.length}`);
    //         loadMoreVideos();
    //     }
    // }, [index, playlist.length, hasMore, isLoading, isReelMode, loadMoreVideos]);

    useEffect(() => {
        if (!isReelMode || !hasMore || isLoading) return;

        // बदलाव: last 1 video पर prefetch (या last 2 अगर smooth चाहिए)
        if (index >= playlist.length - 2) {   // ← -2 या -1 कर दो
            loadMoreVideos();
        }
    }, [index, playlist.length, hasMore, isLoading, isReelMode, loadMoreVideos]);

    useEffect(() => {
        if (!isMobile) return;

        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const video = entry.target as HTMLVideoElement;
                const videoIndex = videoRefs.current.indexOf(video);

                if (entry.isIntersecting && videoIndex === displayIndex) {
                    video.play().catch((err) => {
                        if (video.muted === false) {
                            video.muted = true;
                            setMuted(true);
                            video.play().catch(() => { });
                        }
                    });
                } else {
                    video.pause();
                }
            });
        };

        // observerRef.current = new IntersectionObserver(observerCallback, {
        //     threshold: 0.6,
        //     rootMargin: '0px'
        // });

        // useEffect में observer threshold और rootMargin बढ़ाओ
        // observerRef.current = new IntersectionObserver(
        //     (entries) => {
        //         if (entries[0].isIntersecting && hasMore && !isLoading) {
        //             console.log('Prefetching next batch early');
        //             loadMoreVideos();
        //         }
        //     },
        //     {
        //         threshold: 0.01,           // बहुत कम visible होने पर भी trigger
        //         rootMargin: '300px 0px 300px 0px'  // 300px नीचे/ऊपर से पहले load शुरू
        //     }
        // );
        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {
                    loadMoreVideos();
                }
            },
            {
                threshold: 0.5,          // 50% visible होने पर trigger
                rootMargin: '0px'        // कोई extra margin नहीं → pure last video पर
                // या बहुत कम: '100px 0px 100px 0px'
            }
        );

        videoRefs.current.forEach((video) => {
            if (video && observerRef.current) {
                observerRef.current.observe(video);
            }
        });

        return () => observerRef.current?.disconnect();
    }, [isMobile, displayIndex]);

    useEffect(() => {
        if (!playlist[index]) return;

        const v = playlist[index];
        document.title = v.title;

        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) metaDescription.setAttribute("content", v.description);

        const ogTitle = document.querySelector("meta[property='og:title']");
        if (ogTitle) ogTitle.setAttribute("content", v.title);

        const ogDesc = document.querySelector("meta[property='og:description']");
        if (ogDesc) ogDesc.setAttribute("content", v.description);

        const ogImage = document.querySelector("meta[property='og:image']");
        if (ogImage) ogImage.setAttribute("content", API_BASE + v.thumbnail);

        const ogUrl = document.querySelector("meta[property='og:url']");
        if (ogUrl) ogUrl.setAttribute("content", window.location.href);
    }, [index, playlist]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        setHydrated(true);

        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        setProgress(0);
        setCurrentTime(0);
        setDuration(0);
        setIsVideoReady(false);
    }, [index]);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        v.playbackRate = speed;
        v.muted = muted;

        const onTimeUpdate = () => {
            if (!isSeeking.current && v.duration) {
                setCurrentTime(v.currentTime);
                setDuration(v.duration);
                setProgress((v.currentTime / v.duration) * 100);
            }
        };

        const onPlay = () => setPlaying(true);
        const onPause = () => setPlaying(false);
        const onCanPlay = () => setIsVideoReady(true);

        v.addEventListener("timeupdate", onTimeUpdate);
        v.addEventListener("loadedmetadata", onTimeUpdate);
        v.addEventListener("play", onPlay);
        v.addEventListener("pause", onPause);
        v.addEventListener("canplay", onCanPlay);

        return () => {
            v.removeEventListener("timeupdate", onTimeUpdate);
            v.removeEventListener("loadedmetadata", onTimeUpdate);
            v.removeEventListener("play", onPlay);
            v.removeEventListener("pause", onPause);
            v.removeEventListener("canplay", onCanPlay);
        };
    }, [index, speed, muted]);

    useEffect(() => {
        const setRealVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };

        setRealVh();
        window.addEventListener("resize", setRealVh);
        return () => window.removeEventListener("resize", setRealVh);
    }, []);

    const togglePlay = () => {
        const v = videoRef.current;
        if (!v) return;

        if (v.paused) {
            v.play();
            setPlaying(true);
        } else {
            v.pause();
            setPlaying(false);
        }
    };

    const seek = (seconds: number) => {
        const v = videoRef.current;
        if (!v || !v.duration) return;
        v.currentTime = Math.max(0, Math.min(v.duration, v.currentTime + seconds));
    };

    const toggleMute = () => {
        setMuted(!muted);
        if (videoRef.current) {
            videoRef.current.muted = !muted;
        }
    };

    const changeSpeed = () => {
        const speeds = [1, 1.5, 2, 0.5];
        const next = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
        setSpeed(next);
        if (videoRef.current) {
            videoRef.current.playbackRate = next;
        }
    };
    useEffect(() => {
        if (!isReelMode || isMobile || !loadMoreRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {
                    loadMoreVideos();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '200px'
            }
        );

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [isReelMode, isMobile, hasMore, isLoading, loadMoreVideos]);

    const updateUrlByIndex = (newIndex: number) => {
        const v = playlist[newIndex];
        if (!v) return;

        const categorySlug = toSlug(v.category);
        const subcategorySlug = toSlug(v.subcategory);
        const videoSlug = v.slug;

        let newUrl = `/${categorySlug}/${subcategorySlug}/video/${videoSlug}?index=${newIndex}`;

        if (searchParams.get("mode") === "reel") {
            newUrl += '&mode=reel';
            if (nextCursor) {
                newUrl += `&cursor=${nextCursor}`;
            }
        }

        window.history.replaceState({}, '', newUrl);
    };

    const goNext = () => {
        if (index < playlist.length - 1) {
            setPendingIndex(index + 1);
            updateUrlByIndex(index + 1);
            setIndex(index + 1);
        } else if (isReelMode && hasMore && !isLoading) {
            loadMoreVideos();
        }
    };

    const goPrev = () => {
        if (index > 0) {
            setPendingIndex(index - 1);
            updateUrlByIndex(index - 1);
            setIndex(index - 1);
        }
    };

    const goToNews = () => {
        const newsPath = pathname.replace("/video/", "/news/");
        router.push(newsPath);
    };

    const copyLink = async () => {
        const url = `${window.location.origin}${window.location.pathname}?index=${index}`;
        await navigator.clipboard.writeText(url);
    };

    const shareVideo = async () => {
        const url = `${window.location.origin}${window.location.pathname}?index=${index}`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: currentVideo.title,
                    text: currentVideo.description,
                    url,
                });
            } catch (err) {
                console.log('Share cancelled');
            }
        } else {
            await navigator.clipboard.writeText(url);
            alert("लिंक कॉपी हो गया");
        }
    };

    const onProgressTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const touch = e.touches[0];
        const rect = e.currentTarget.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const percent = Math.min(1, Math.max(0, x / rect.width));

        if (videoRef.current && duration) {
            videoRef.current.currentTime = percent * duration;
        }
    };

    if (!hydrated || !currentVideo) return null;

    if (isMobile) {
        return (
            <div className="fixed inset-0 bg-black overflow-hidden">
                <div
                    className="h-full w-full transition-transform duration-300 ease-out"
                    style={{
                        transform: `translateY(calc(-${displayIndex * 100}% + ${dragOffset}px))`,
                        transition: isDragging.current ? 'none' : 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {playlist.map((v, i) => {
                        const offset = i - displayIndex;
                        const isVisible = Math.abs(offset) <= 1;

                        return (
                            <div
                                key={`${v.id}-${i}`}
                                className="relative h-screen w-full flex items-center justify-center"
                                style={{
                                    height: 'calc(var(--vh, 1vh) * 100)',
                                }}
                            >
                                <video
                                    ref={(el) => {
                                        videoRefs.current[i] = el;
                                    }}
                                    src={API_BASE + v.videoUrl}
                                    muted={muted}
                                    playsInline
                                    poster={API_BASE + v.thumbnail}
                                    loop
                                    preload={Math.abs(i - displayIndex) <= 2 ? "auto" : "metadata"}
                                    // preload={isVisible ? "auto" : "metadata"}
                                    className="w-full h-full object-cover"
                                    onError={(e) => console.error('Video error:', e)}
                                />
                                <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-50">
                                    <Link href="/" className="block">
                                        <Image
                                            src="/images/logo.webp"
                                            alt="logo"
                                            width={50}
                                            height={50}
                                            className="w-12 h-12 object-contain"
                                            unoptimized
                                        />
                                    </Link>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            goToNews();
                                        }}
                                        className="bg-black/60 text-white px-3 py-1.5 rounded text-xs border border-white/40"
                                    >
                                        खबर पढ़ें
                                    </button>
                                </div>

                                <div className="absolute left-4 z-50 border rounded-full border-black/40 bg-black/60" style={{ bottom: "7rem" }}>
                                    <Link href={`/${toSlug(v.category)}`}>
                                        <span className="text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                                            {v.category + "  >"}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}

                    {isReelMode && hasMore && (
                        <div ref={loadMoreRef} className="h-screen flex items-center justify-center">
                            {isLoading ? (
                                <div className="text-white text-center">
                                    <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                    <p>Loading more reels...</p>
                                </div>
                            ) : isPrefetching ? (
                                <div className="hidden" />  // prefetch में spinner मत दिखाओ
                            ) : (
                                <p className="text-white/50">Swipe up for more</p>
                            )}
                        </div>
                    )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent z-40">
                    <div
                        className="relative h-[4px] bg-white/30 rounded-full cursor-pointer"
                        onMouseDown={(e) => {
                            isSeeking.current = true;
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (e.clientX - rect.left) / rect.width;
                            if (videoRef.current) {
                                videoRef.current.currentTime = percent * duration;
                            }
                        }}
                        onMouseMove={(e) => {
                            if (!isSeeking.current || !videoRef.current) return;
                            const rect = e.currentTarget.getBoundingClientRect();
                            const percent = (e.clientX - rect.left) / rect.width;
                            videoRef.current.currentTime = percent * duration;
                        }}
                        onMouseUp={() => (isSeeking.current = false)}
                        onMouseLeave={() => (isSeeking.current = false)}
                        onTouchStart={() => (isSeeking.current = true)}
                        onTouchMove={onProgressTouch}
                        onTouchEnd={() => (isSeeking.current = false)}
                    >
                        <div
                            className="absolute left-0 top-0 h-full bg-red-500 rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                        <div
                            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full shadow"
                            style={{ left: `calc(${progress}% - 6px)` }}
                        />
                    </div>
                    <div className="relative flex items-center text-white mt-2 h-16">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    changeSpeed();
                                }}
                                className="w-10 text-center text-sm font-500"
                            >
                                {speed}x
                            </button>
                            <button
                                title="5 seconds backward"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    seek(-5);
                                }}
                                className="flex flex-col items-center"
                            >
                                <svg
                                    className="w-8 h-8"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="24" cy="24" r="20" />
                                    <path d="M24 16L16 24L24 32" />
                                    <text
                                        x="28"
                                        y="28"
                                        textAnchor="middle"
                                        fontSize="12"
                                        fill="currentColor"
                                    >
                                        5
                                    </text>
                                </svg>
                            </button>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                togglePlay();
                            }}
                            className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/25 flex items-center justify-center"
                        >
                            {playing ? (
                                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="currentColor">
                                    <path d="M16 12H20V36H16V12ZM28 12H32V36H28V12Z" />
                                </svg>
                            ) : (
                                <svg className="w-8 h-8" viewBox="0 0 48 48" fill="currentColor">
                                    <path d="M18 17.6V30.2C18 31.4 19.4 32.2 20.4 31.6L31.4 25.2C32.4 24.8 32.4 23.2 31.4 22.6L20.4 16.2C19.4 15.6 18 16.4 18 17.6Z" />
                                </svg>
                            )}
                        </button>
                        <div className="ml-auto flex items-center gap-6">
                            <button
                                title="5 seconds forward"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    seek(5);
                                }}
                            >
                                <svg
                                    className="w-8 h-8"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="24" cy="24" r="20" />
                                    <path d="M24 16L32 24L24 32" />
                                    <text
                                        x="20"
                                        y="28"
                                        textAnchor="middle"
                                        fontSize="12"
                                        fill="currentColor"
                                    >
                                        5
                                    </text>
                                </svg>
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleMute();
                                }}
                            >
                                {muted ? (
                                    <VolumeX className="w-8 h-8" />
                                ) : (
                                    <Volume2 className="w-8 h-8" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="fixed right-4 z-50" style={{ bottom: "7rem" }}>
                    <button
                        title="Share Video"
                        onClick={shareVideo}
                        className="bg-black/70 rounded-full p-3 border border-white/30"
                    >
                        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 1 0 14 5a2.9 2.9 0 0 0 .09.7L7.04 9.81a3 3 0 1 0 0 4.38l7.05 4.11c-.05.21-.09.43-.09.66a3 3 0 1 0 3-2.88z" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center">
            <div className="fixed inset-0 bg-[#2b2b2b] flex justify-center items-center" style={{ top: "-25px" }}>
                <div className="relative flex items-center gap-2">
                    <button
                        title="Go To News"
                        onClick={goToNews}
                        style={{ top: "6%", left: "-100%", backgroundColor: "black" }}
                        className="absolute -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5" />
                            <path d="M10 7l-5 5 5 5" />
                        </svg>
                    </button>

                    <div className="flex flex-col items-center">
                        <div className="relative w-[300px] h-[530px] bg-black rounded-lg overflow-hidden shadow-2xl">
                            <video
                                ref={videoRef}
                                src={API_BASE + currentVideo.videoUrl}
                                autoPlay
                                playsInline
                                poster={API_BASE + currentVideo.thumbnail}
                                muted={muted}
                                loop
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute top-2 left-3 right-3 flex items-center justify-between z-40">
                                <Link href="/" className="block">
                                    <Image
                                        src="/images/logo.webp"
                                        alt="logo"
                                        width={50}
                                        height={50}
                                        className="w-12 h-12 object-contain"
                                        unoptimized
                                    />
                                </Link>
                                <button
                                    onClick={goToNews}
                                    className="bg-black/60 text-white px-3 py-1.5 rounded text-xs font-medium border border-white/40 hover:bg-black/80 transition-colors"
                                >
                                    खबर पढ़ें
                                </button>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent z-40">
                                {/* Category */}
                                <div className="mb-2">
                                    <Link href={`/${catlink}`}>
                                        <button className="bg-black/80 text-white text-xs px-3 py-1.5 rounded-full border border-white/40 flex items-center gap-1 hover:bg-black transition-colors">
                                            {currentVideo.category}
                                            <svg className="w-3 h-3 rotate-[-90deg]" viewBox="0 0 24 24" fill="white">
                                                <path d="M6 9.57C6 9.32 6.1 9.06 6.29 8.87C6.68 8.48 7.32 8.48 7.71 8.87L12 13.16L16.29 8.87C16.68 8.48 17.32 8.48 17.71 8.87C18.1 9.26 18.1 9.89 17.71 10.28L12.95 15.03C12.43 15.56 11.57 15.56 11.04 15.03L6.29 10.28C6.1 10.09 6 9.83 6 9.57Z" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>

                                <div
                                    className="relative h-1 bg-white/30 rounded-full cursor-pointer mb-4"
                                    onMouseDown={(e) => {
                                        isSeeking.current = true;
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const percent = (e.clientX - rect.left) / rect.width;
                                        if (videoRef.current) {
                                            videoRef.current.currentTime = percent * duration;
                                        }
                                    }}
                                    onMouseMove={(e) => {
                                        if (!isSeeking.current || !videoRef.current) return;
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const percent = (e.clientX - rect.left) / rect.width;
                                        videoRef.current.currentTime = percent * duration;
                                    }}
                                    onMouseUp={() => (isSeeking.current = false)}
                                    onMouseLeave={() => (isSeeking.current = false)}
                                >
                                    <div className="absolute left-0 top-0 h-full bg-white rounded-full" style={{ width: `${progress}%` }} />
                                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full shadow" style={{ left: `calc(${progress}% - 6px)` }} />
                                </div>

                                <div className="relative flex items-center text-white">
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                changeSpeed();
                                            }}
                                            className="w-10 text-center text-sm font-medium hover:text-gray-300"
                                        >
                                            {speed}x
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                seek(-5);
                                            }}
                                            className="hover:text-gray-300"
                                        >
                                            <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="24" cy="24" r="20" />
                                                <path d="M24 16L16 24L24 32" />
                                                <text x="28" y="28" textAnchor="middle" fontSize="12" fill="currentColor">5</text>
                                            </svg>
                                        </button>
                                    </div>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            togglePlay();
                                        }}
                                        className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/25 flex items-center justify-center hover:bg-white/40 transition-colors"
                                    >
                                        {playing ? (
                                            <svg className="w-8 h-8" viewBox="0 0 48 48" fill="currentColor">
                                                <path d="M16 12H20V36H16V12ZM28 12H32V36H28V12Z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-8 h-8" viewBox="0 0 48 48" fill="currentColor">
                                                <path d="M18 17.6V30.2C18 31.4 19.4 32.2 20.4 31.6L31.4 25.2C32.4 24.8 32.4 23.2 31.4 22.6L20.4 16.2C19.4 15.6 18 16.4 18 17.6Z" />
                                            </svg>
                                        )}
                                    </button>

                                    <div className="ml-auto flex items-center gap-6">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                seek(5);
                                            }}
                                            className="hover:text-gray-300"
                                        >
                                            <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="24" cy="24" r="20" />
                                                <path d="M24 16L32 24L24 32" />
                                                <text x="20" y="28" textAnchor="middle" fontSize="12" fill="currentColor">5</text>
                                            </svg>
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleMute();
                                            }}
                                            className="hover:text-gray-300"
                                        >
                                            {muted ? <VolumeX className="w-8 h-8" /> : <Volume2 className="w-8 h-8" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex flex-col gap-3 ml-4">
                        <button
                            title="Share Video"
                            onClick={shareVideo}
                            className="bg-black text-white rounded-full p-3 hover:bg-gray-800 transition-colors"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11A2.99 2.99 0 1 0 14 5a2.9 2.9 0 0 0 .09.7L7.04 9.81a3 3 0 1 0 0 4.38l7.05 4.11c-.05.21-.09.43-.09.66a3 3 0 1 0 3-2.88z" />
                            </svg>
                        </button>
                    </div> */}
                    <div className="flex flex-col gap-1" style={{ marginTop: "14rem" }}>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const shareUrl = encodeURIComponent(window.location.href);
                                window.open(
                                    `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
                                    "fbShareWindow",
                                    "width=600,height=500,toolbar=no,menubar=no,scrollbars=yes,resizable=yes"
                                );
                            }}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="rounded-full p-1" style={{
                                backgroundColor: hoverfb ? "#3b5998" : "black",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease",
                            }}
                                onMouseEnter={() => setHoverfb(true)}
                                onMouseLeave={() => setHoverfb(false)}
                            >
                                <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M20.2656 7.46987L18.0533 7.46667C15.5669 7.46667 13.9605 9.11574 13.9605 11.6672V13.6043H11.7354C11.5434 13.6043 11.3877 13.76 11.3877 13.952V16.7573C11.3877 16.9493 11.5434 17.1051 11.7354 17.1051H13.9605V24.1845C13.9605 24.3765 14.1162 24.5323 14.3082 24.5323H17.2117C17.4037 24.5323 17.5594 24.3765 17.5594 24.1845V17.1051H20.161C20.353 17.1051 20.5088 16.9493 20.5088 16.7573L20.5098 13.952C20.5098 13.8592 20.4736 13.7717 20.4074 13.7056C20.3424 13.6405 20.2538 13.6032 20.161 13.6032H17.5584V11.9616C17.5584 11.1723 17.7461 10.7723 18.7744 10.7723H20.2656C20.4576 10.7723 20.6133 10.6165 20.6133 10.4245V7.81867C20.6133 7.62667 20.4576 7.47094 20.2656 7.46987Z" />
                                </svg>
                            </div>
                            <span className="text-white text-[11px]">फेसबुक</span>
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const text = encodeURIComponent(window.location.href);
                                window.open(
                                    `https://api.whatsapp.com/send?text=${text}`,
                                    "_blank"
                                );
                            }}
                            className="flex flex-col items-center gap-1"
                        >
                            <div
                                className="rounded-full p-1"
                                style={{
                                    backgroundColor: hoverwt ? "#25D366" : "black",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={() => setHoverwt(true)}
                                onMouseLeave={() => setHoverwt(false)}
                            >
                                {/* Clean WhatsApp SVG */}
                                <svg
                                    className="w-7 h-7 text-white"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.23-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52ZM12 21.82a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.7.97.99-3.6-.24-.37A9.82 9.82 0 1 1 12 21.82Zm5.43-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.43 0 1.43 1.05 2.82 1.2 3.01.15.2 2.06 3.15 4.99 4.42.7.3 1.25.49 1.68.63.7.22 1.34.19 1.85.11.56-.08 1.77-.72 2.01-1.43.24-.7.24-1.31.17-1.43-.07-.11-.27-.17-.57-.32Z" />
                                </svg>
                            </div>
                            <span className="text-white text-[11px]">व्हाट्सएप</span>
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                const url = encodeURIComponent(window.location.href);
                                const text = encodeURIComponent("देखो ये खबर:");
                                window.open(
                                    `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
                                    "_blank"
                                );
                            }}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="rounded-full p-1" style={{
                                backgroundColor: hovertw ? "#1DA1F2" : "black",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease",
                            }}
                                onMouseEnter={() => setHovertw(true)}
                                onMouseLeave={() => setHovertw(false)}
                            >
                                {/* ORIGINAL TWITTER SVG */}
                                <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M24.5332 10.7082C23.8986 10.9866 23.2223 11.1712 22.5172 11.2608C23.2426 10.8277 23.7962 10.1472 24.0564 9.32692C23.3802 9.73012 22.6335 10.0149 21.8378 10.1739C21.1956 9.49012 20.2804 9.06665 19.282 9.06665C17.345 9.06665 15.7855 10.6389 15.7855 12.5664C15.7855 12.8437 15.809 13.1104 15.8666 13.3643C12.9578 13.2224 10.3839 11.8282 8.65482 9.70452C8.35295 10.2282 8.17589 10.8277 8.17589 11.473C8.17589 12.6848 8.79989 13.7589 9.73002 14.3808C9.16789 14.3701 8.61642 14.2069 8.14922 13.9499V13.9883C8.14922 15.6885 9.36202 17.1008 10.9524 17.4261C10.6676 17.504 10.3572 17.5413 10.0351 17.5413C9.81109 17.5413 9.58495 17.5285 9.37269 17.4816C9.82602 18.8672 11.1124 19.8858 12.642 19.9189C11.4516 20.8501 9.94015 21.4112 8.30389 21.4112C8.01695 21.4112 7.74175 21.3984 7.46655 21.3632C9.01642 22.3626 10.8532 22.9333 12.834 22.9333C19.2724 22.9333 22.7924 17.6 22.7924 12.9771C22.7924 12.8224 22.7871 12.673 22.7796 12.5248C23.474 12.032 24.0575 11.4165 24.5332 10.7082Z" />
                                </svg>
                            </div>
                            <span className="text-white text-[11px]">ट्विटर</span>
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                copyLink();
                            }}
                            className="flex flex-col items-center gap-1"
                        >
                            <div className="rounded-full p-1" style={{
                                backgroundColor: hovercl ? "#333" : "black",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease",
                            }}
                                onMouseEnter={() => setHovercl(true)}
                                onMouseLeave={() => setHovercl(false)}
                            >
                                <svg className="w-8 h-8 text-white" viewBox="0 0 40 40" fill="none">
                                    <rect width="40" height="40" rx="20" opacity="0.3" />
                                    <path d="M12.8018 26.164C11.8128 24.71 12.1208 22.724 13.3668 21.478L15.8008 19.044C16.2328 18.612 16.2328 17.897 15.8008 17.465C15.3688 17.033 14.6538 17.033 14.2218 17.465L11.8708 19.816C9.70284 21.984 9.35384 25.507 11.3058 27.875C13.5408 30.592 17.5698 30.733 19.9958 28.307L22.5298 25.7731C22.9618 25.3411 22.9618 24.626 22.5298 24.194C22.0978 23.762 21.3828 23.762 20.9508 24.194L18.4168 26.7281C16.8318 28.316 14.1308 28.125 12.8018 26.164ZM18.3348 23.323L23.3198 18.338C23.7768 17.8811 23.7768 17.133 23.3198 16.676C22.8628 16.219 22.1148 16.219 21.6578 16.676L16.6728 21.661C16.2158 22.118 16.2158 22.866 16.6728 23.323C17.1298 23.78 17.8778 23.78 18.3348 23.323ZM19.8138 11.874L17.4628 14.225C17.0308 14.657 17.0308 15.372 17.4628 15.804C17.8948 16.236 18.6098 16.236 19.0418 15.804L21.4758 13.37C22.7218 12.124 24.7078 11.816 26.1618 12.805C28.1228 14.134 28.3138 16.835 26.7268 18.421L24.1928 20.955C23.7608 21.387 23.7608 22.102 24.1928 22.534C24.6248 22.9661 25.3398 22.9661 25.7718 22.534L28.3058 20C30.7318 17.574 30.5908 13.544 27.8818 11.301C25.5138 9.34805 21.9828 9.70505 19.8138 11.874Z" fill="white" />
                                </svg>
                            </div>
                            <span className="text-white text-[11px]">कॉपी लिंक</span>
                        </button>
                    </div>
                </div>
                <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                    <button
                        onClick={goPrev}
                        disabled={index === 0}
                        className={`bg-[#e0e0e0] rounded-full p-3 transition-all ${index === 0
                            ? 'opacity-40 cursor-not-allowed'
                            : 'hover:bg-white hover:scale-110 cursor-pointer'
                            }`}
                    >
                        <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 19V5" />
                            <path d="M7 10l5-5 5 5" />
                        </svg>
                    </button>
                    <button
                        onClick={goNext}
                        disabled={!hasMore && index === playlist.length - 1}
                        className={`bg-[#e0e0e0] rounded-full p-3 transition-all ${!hasMore && index === playlist.length - 1
                            ? 'opacity-40 cursor-not-allowed'
                            : 'hover:bg-white hover:scale-110 cursor-pointer'
                            }`}
                    >
                        <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14" />
                            <path d="M7 14l5 5 5-5" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 text-white text-center py-3 px-4 text-lg font-medium leading-snug z-50 bg-gradient-to-t from-black via-black/90 to-transparent">
                <span style={{ color: catColor }}>{currentVideo.title}:</span>
                <span className="ml-1">{currentVideo.description}</span>
            </div>
            {isReelMode && (
                <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50">
                </div>
            )}
        </div>
    );
}