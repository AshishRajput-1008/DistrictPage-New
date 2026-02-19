"use client";

import { useEffect, useRef, useState } from "react";

export default function TextReader({ targetId }: { targetId: string }) {
    const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
    const [started, setStarted] = useState(false);
    const [mode, setMode] = useState<"idle" | "playing" | "paused">("idle");

    const chunks = useRef<string[]>([]);
    const currentIndex = useRef(0);
    const currentOffset = useRef(0);
    const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
    const startTime = useRef(0);

    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();

            const hindi =
                voices.find(v => v.lang === "hi-IN") ||
                voices.find(v => v.lang.startsWith("hi")) ||
                voices.find(v => v.name.toLowerCase().includes("hindi"));

            setVoice(hindi || null);
        };

        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }, []);

    const buildChunks = () => {
        const el = document.getElementById(targetId);
        if (!el) return [];

        return el.innerText
            .replace(/\s+/g, " ")
            .replace(/([।!?])/g, "$1|")
            .split("|")
            .map(s => s.trim())
            .filter(Boolean);
    };

    const speakFrom = (i: number, offset = 0) => {
        if (!chunks.current[i]) {
            stopAll();
            return;
        }

        currentIndex.current = i;
        currentOffset.current = offset;

        const text = chunks.current[i].slice(offset);
        const utter = new SpeechSynthesisUtterance(text);

        const isHindi = /[\u0900-\u097F]/.test(text);

        if (isHindi && voice) {
            utter.voice = voice;
            utter.lang = "hi-IN";
        } else {
            // 🔒 fallback bhi Hindi rakho
            utter.lang = "hi-IN";
            if (voice) utter.voice = voice;
        }

        utter.rate = 0.95;
        utter.pitch = 1;
        utter.volume = 1;

        utterRef.current = utter;

        utter.onstart = () => {
            startTime.current = Date.now();
            setMode("playing");
        };

        utter.onend = () => {
            currentOffset.current = 0;
            if (i + 1 < chunks.current.length) {
                speakFrom(i + 1, 0);
            } else {
                stopAll();
            }
        };

        window.speechSynthesis.cancel(); // 🔒 Android fix
        window.speechSynthesis.speak(utter);
    };

    const start = () => {
        if (!started) {
            chunks.current = buildChunks();
            if (!chunks.current.length) return alert("No text");
            setStarted(true);
        }

        if (mode === "paused") {
            speakFrom(currentIndex.current, currentOffset.current);
            return;
        }

        window.speechSynthesis.cancel();
        currentIndex.current = 0;
        currentOffset.current = 0;
        speakFrom(0, 0);
    };

    const pause = () => {
        if (!utterRef.current) return;

        const elapsed = Date.now() - startTime.current;
        const charsSpoken = Math.floor(elapsed / 50); // approx
        currentOffset.current += charsSpoken;

        window.speechSynthesis.cancel();
        setMode("paused");
    };

    const restart = () => {
        window.speechSynthesis.cancel();
        currentIndex.current = 0;
        currentOffset.current = 0;
        speakFrom(0, 0);
    };

    const stopAll = () => {
        window.speechSynthesis.cancel();
        currentIndex.current = 0;
        currentOffset.current = 0;
        setMode("idle");
    };

    return (
        <div className="tts-bar">
            <div className="tts-inner">
                {(mode === "idle" || mode === "paused") && (
                    <button onClick={start} className="tts-btn play">
                        ▶
                    </button>
                )}

                {started && mode === "playing" && (
                    <>
                        <button onClick={pause} className="tts-btn pause">❚❚</button>
                        <button onClick={restart} className="tts-btn restart">↻</button>
                    </>
                )}

                {started && mode === "paused" && (
                    <button onClick={restart} className="tts-btn restart">↻</button>
                )}

                {/* DJ Wave */}
                {mode === "playing" && (
                    <div className="wave">
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                )}
            </div>
        </div>
    );
}

const HeadphoneIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
    >
        <path d="M12 3a9 9 0 0 0-9 9v5a3 3 0 0 0 3 3h2v-8H5a7 7 0 0 1 14 0h-3v8h2a3 3 0 0 0 3-3v-5a9 9 0 0 0-9-9z" />
    </svg>
);
