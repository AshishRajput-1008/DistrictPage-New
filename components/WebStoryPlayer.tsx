"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiX, FiPause, FiPlay, FiVolume2, FiVolumeX, FiShare2 } from "react-icons/fi";

type SlideItem =
    | { type: "image"; src: string; caption?: string; duration?: number }
    | { type: "video"; src: string; caption?: string; duration?: number };

export interface FullWebStory {
    id: number | string;
    storyTitle: string;
    storySlug: string;
    category: string;
    thumbnail?: string;
    viewCount?: number;
    publishedDate?: string;
    slides: SlideItem[];
}

interface Props {
    story: FullWebStory;
    autoplay?: boolean;
    defaultDuration?: number;
}

export default function WebStoryPlayer({ story, autoplay, defaultDuration }: Props) {
    const router = useRouter();
    const handleClose = () => router.push('/web-stories');

    const handleNextStory = () => {
        // console.log("Next story logic here");
    };

    const handlePrevStory = () => {
        // console.log("Prev story logic here");
    };
    const slides = story.slides || [];
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(!autoplay);
    const [muted, setMuted] = useState(true);
    const [progress, setProgress] = useState<number[]>(() => slides.map(() => 0));
    const timerRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);
    const rafRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const touchStartX = useRef<number | null>(null);
    const touchStartY = useRef<number | null>(null);
    const isVideoRef = useRef<HTMLVideoElement | null>(null);
    const [showFullCaption, setShowFullCaption] = useState(false);
    const currentSlide = slides[index];
    const getDuration = (s?: SlideItem) => (s?.duration ? s.duration : defaultDuration);

    // clear animation frames / timers
    const clearTimers = () => {
        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
    };

    // progress loop using RAF for smooth bar
    const startProgress = useCallback(() => {
        clearTimers();
        startRef.current = performance.now();
        const duration = getDuration(currentSlide) || 0;

        const step = (now: number) => {
            if (!startRef.current) {
                startRef.current = now;
            }
            const elapsed = now - startRef.current;
            const pct = Math.min(1, elapsed / duration);
            setProgress((prev) => prev.map((p, i) => (i === index ? pct * 100 : p)));
            if (pct >= 1) {
                // advance
                rafRef.current = null;
                if (!paused) {
                    goNext();
                }
            } else {
                rafRef.current = requestAnimationFrame(step);
            }
        };

        rafRef.current = requestAnimationFrame(step);
    }, [index, paused, currentSlide]);

    // start/stop based on paused or index change
    useEffect(() => {
        setProgress((prev) => prev.map((p, i) => (i < index ? 100 : i === index ? p : 0)));
        if (paused) {
            clearTimers();
            return;
        }
        startRef.current = null;
        startProgress();
        return () => clearTimers();
    }, [index, paused, startProgress]);

    // Play/pause video when active
    useEffect(() => {
        const active = document.querySelector("[data-webstory-active='true'] video") as HTMLVideoElement | null;
        if (active) {
            isVideoRef.current = active;
            if (paused) {
                active.pause();
            } else {
                active.muted = muted;
                active.play().catch(() => { });
            }
        } else {
            isVideoRef.current = null;
        }
    }, [index, paused, muted]);

    // navigation helpers
    const goPrev = useCallback(() => {
        if (index > 0) {
            setIndex((i) => i - 1);
        } else {
            // go to previous story
            handlePrevStory();
        }
    }, [index, handlePrevStory]);

    const goNext = useCallback(() => {
        if (index < slides.length - 1) {
            setIndex((i) => i + 1);
        } else {
            handleNextStory();
        }
    }, [index, slides.length, handleNextStory]);

    // keyboard
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") {
                setPaused(false);
                goNext();
            } else if (e.key === "ArrowLeft") {
                setPaused(false);
                goPrev();
            } else if (e.key === " " || e.key === "Spacebar") {
                setPaused((p) => !p);
            } else if (e.key === "Escape") {
                handleClose();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [goNext, goPrev, handleClose]);

    // touch handling for swipe / tap
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const onTouchStart = (ev: TouchEvent) => {
            const t = ev.touches[0];
            touchStartX.current = t.clientX;
            touchStartY.current = t.clientY;
        };
        const onTouchEnd = (ev: TouchEvent) => {
            const t = ev.changedTouches[0];
            const dx = touchStartX.current !== null ? t.clientX - touchStartX.current : 0;
            const dy = touchStartY.current !== null ? t.clientY - touchStartY.current : 0;
            const absX = Math.abs(dx);
            const absY = Math.abs(dy);
            // horizontal swipe
            if (absX > 40 && absX > absY) {
                if (dx < 0) goNext();
                else goPrev();
            } else {
                // tap zones: left 30% = prev, right 30% = next, center toggles pause
                const width = el.clientWidth;
                if (t.clientX < width * 0.3) goPrev();
                else if (t.clientX > width * 0.7) goNext();
                else setPaused((p) => !p);
            }
            touchStartX.current = null;
            touchStartY.current = null;
        };
        el.addEventListener("touchstart", onTouchStart, { passive: true });
        el.addEventListener("touchend", onTouchEnd);
        return () => {
            el.removeEventListener("touchstart", onTouchStart);
            el.removeEventListener("touchend", onTouchEnd);
        };
    }, [goNext, goPrev]);

    // click areas for desktop arrows
    const onClickLeft = () => {
        goPrev();
        setPaused(false);
    };
    const onClickRight = () => {
        goNext();
        setPaused(false);
    };

    // share (simple navigator.share if available)
    const onShare = async () => {
        const shareUrl = typeof window !== "undefined" ? window.location.href : "";
        if (navigator.share) {
            try {
                await navigator.share({
                    title: story.storyTitle,
                    url: shareUrl,
                });
            } catch { }
        } else {
            // fallback: copy link
            await navigator.clipboard.writeText(shareUrl);
            alert("Link copied to clipboard");
        }
    };

    // manually jump slide
    const jumpTo = (i: number) => {
        setIndex(i);
        setPaused(false);
    };

    // render slide content
    const renderSlide = (s: SlideItem, i: number) => {
        if (s.type === "video") {
            return (
                <video
                    key={i}
                    src={s.src}
                    className="w-full h-full object-cover"
                    playsInline
                    muted={muted}
                    controls={false}
                    data-testid="webstory-video"
                />
            );
        }
        // image
        return (
            <Image
                key={i}
                src={s.src}
                alt={story.storyTitle || `slide-${i}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 40vw"
                unoptimized
            />
        );
    };

    useEffect(() => {
        return () => clearTimers();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white">
            <div
                ref={containerRef}
                className="relative w-full min-h-screen flex items-center justify-center pb-8"
                aria-roledescription="web story player"
            >
                <div
                    className="absolute inset-0 bg-center bg-cover filter blur-md opacity-50"
                    style={{
                        backgroundImage: `url("${currentSlide?.type === "image" ? currentSlide?.src : story.thumbnail || ""}")`,
                    }}
                    aria-hidden
                />

                <div
                    className="
        relative z-30 
        w-[420px] max-w-full 
        aspect-[9/16] 
        max-h-screen 
        rounded-xl overflow-hidden shadow-2xl bg-black
        sm:scale-[0.85] md:scale-[0.9] lg:scale-[1]
        sm:translate-y-4
    "
                >

                    <div className="absolute top-3 left-3 right-3 z-40 flex items-center gap-3">
                        <button
                            onClick={() => {
                                clearTimers();
                                handleClose();
                            }}
                            aria-label="Close"
                            className="p-2 rounded-full border border-white bg-white/10 hover:bg-white/20"
                        >
                            <FiX className="text-white w-5 h-5" />
                        </button>
                        <div className="ml-2 flex-1 flex gap-2 items-center">
                            <div className="flex-1 flex gap-2 items-center">
                                {slides.map((_, si) => (
                                    <div key={si} className="h-1 bg-white/20 rounded overflow-hidden flex-1">
                                        <div
                                            style={{
                                                width: `${Math.min(100, progress[si] || 0)}%`
                                            }}
                                            className="h-full bg-white border transition-[width] duration-100 linear"
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setPaused((p) => !p)}
                                aria-label={paused ? "Play" : "Pause"}
                                className="p-2 rounded-full border border-white bg-white/10 hover:bg-white/20"
                            >
                                {paused ? <FiPlay className="w-4 h-4" /> : <FiPause className="w-4 h-4" />}
                            </button>

                            <button
                                onClick={() => setMuted((m) => !m)}
                                aria-label={muted ? "Unmute" : "Mute"}
                                className="p-2 rounded-full border border-white bg-white/10 hover:bg-white/20"
                            >
                                {muted ? <FiVolumeX className="w-4 h-4" /> : <FiVolume2 className="w-4 h-4" />}
                            </button>

                            <button onClick={onShare} aria-label="Share" className="p-2 rounded-full border border-white bg-white/10 hover:bg-white/20">
                                <FiShare2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* slide container */}
                    <div className="w-full h-full relative">
                        {slides.map((s, i) => (
                            <div
                                key={i}
                                data-webstory-active={i === index ? "true" : "false"}
                                className={`absolute inset-0 transition-opacity duration-400 ${i === index ? "opacity-100 z-20" : "opacity-0 z-10 pointer-events-none"}`}
                                aria-hidden={i === index ? "false" : "true"}
                            >
                                {s.type === "image" ? (
                                    <div className="relative w-full h-full">
                                        <Image unoptimized src={s.src} alt={s.caption || story.storyTitle} fill className="object-cover" />
                                    </div>
                                ) : (
                                    <video
                                        src={s.src}
                                        className="w-full h-full object-cover"
                                        muted={muted}
                                        playsInline
                                        controls={false}
                                        onLoadedMetadata={(e) => {
                                            const v = e.currentTarget;
                                            // if slide provides duration, use it; else use video length
                                            if (!s.duration && v.duration && v.duration > 0) {
                                                // replace duration for this slide
                                                // (this is best-effort; for full control you'd pass durations)
                                            }
                                        }}
                                    />
                                )}

                                {/* caption overlay */}
                                {s.caption && (
                                    <div
                                        className="absolute bottom-0 left-0 right-0 p-6
               bg-gradient-to-t from-black/100 via-black/80 to-transparent"
                                    >
                                        <div className="max-w-[90%] mx-auto text-center">
                                            <p
                                                className={`text-white md:text-lg text-sm leading-relaxed
        transition-all duration-300
        ${showFullCaption ? "" : "line-clamp-2"}`}
                                                dangerouslySetInnerHTML={{ __html: s.caption }}
                                            />

                                            {/* MORE / LESS BUTTON */}
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setShowFullCaption(!showFullCaption);
                                                }}
                                                className="mt-1 text-red-500 text-sm font-500 hover:underline"
                                            >
                                                {showFullCaption ? "कम दिखाएं" : "...और पढ़ें"}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* central tiny play/pause when clicking center on desktop (optional decorative) */}
                    {!paused ? null : (
                        <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
                            <div className="bg-white/20 p-3 rounded-full pointer-events-none">
                                <FiPlay className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Prev / Next big clickable arrows for desktop */}
                <button
                    onClick={onClickLeft}
                    aria-label="Previous slide / story"
                    className="hidden sm:flex absolute left-8 z-40 items-center justify-center w-12 h-12 rounded-full bg-white text-black/90 shadow-lg"
                    style={{ transform: "translateY(-10%)" }}
                >
                    ‹
                </button>

                <button
                    onClick={onClickRight}
                    aria-label="Next slide / story"
                    className="hidden sm:flex absolute right-8 z-40 items-center justify-center w-12 h-12 rounded-full bg-white text-black/90 shadow-lg"
                    style={{ transform: "translateY(-10%)" }}
                >
                    ›
                </button>
            </div>
        </div>
    );
}
