"use client";

import { MapPin, Plus, ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useGeoLocation } from "@/lib/useGeoLocation";
import "@/app/globals.css";
import Link from "next/link";
import { toSlug } from "@/lib/news-api";
import { useRouter } from "next/navigation";

interface DistrictDetail {
    districtId: string;
    districtName: string;
    districtNameHindi: string;
    stateId: string;
    stateName: string;
    stateNameHindi: string;
}

interface Props {
    districtName: string;
    stateName: string;
    countryName: string;
    savedDetails: DistrictDetail[];
}

const setCookie = (name: string, value: string) => {
    document.cookie = `${name}=${value}; path=/; max-age=86400`;
};

export default function RedHeaderClient({
    districtName,
    stateName,
    countryName,
    savedDetails,
}: Props) {
    const [lat, setLat] = useState<number | null>(null);
    const [lon, setLon] = useState<number | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const otherDistricts = savedDetails.filter(
        (d) => d.districtNameHindi !== districtName
    );

    const grouped = otherDistricts.reduce((acc, item) => {
        if (!acc[item.stateId]) {
            acc[item.stateId] = {
                stateNameHindi: item.stateNameHindi,
                stateName: item.stateName,
                districts: [],
            };
        }
        acc[item.stateId].districts.push(item);
        return acc;
    }, {} as Record<string, { stateNameHindi: string; stateName: string; districts: DistrictDetail[] }>);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        checkScroll();
        el.addEventListener("scroll", checkScroll);
        const ro = new ResizeObserver(checkScroll);
        ro.observe(el);
        return () => {
            el.removeEventListener("scroll", checkScroll);
            ro.disconnect();
        };
    }, [savedDetails]);

    useEffect(() => {
        router.refresh();
    }, [lat, lon]);

    useGeoLocation((la: number, lo: number) => {
        setLat(la);
        setLon(lo);
        setCookie("userLat", String(la));
        setCookie("userLon", String(lo));
    });

    const handlestateopen = () => {
        router.push(`/account/select-state`);
        router.refresh();
    };

    const scrollNav = (dir: "left" | "right") => {
        const el = scrollRef.current;
        if (el) el.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    };

    return (
        <>
            {/* ════════════════════════════════════════
                DISTRICT HEADER BANNER
            ════════════════════════════════════════ */}
            <div
                className="relative text-white overflow-hidden"
                style={{ backgroundColor: "#0C0E0B" }}
            >
                {/* Noise grain */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                    }}
                />

                {/* Diagonal red panel — desktop only */}
                <div
                    className="absolute top-0 right-0 w-[28%] h-full hidden lg:block"
                    style={{
                        background: "linear-gradient(135deg, rgba(214,48,58,0.18) 0%, rgba(214,48,58,0.06) 60%, transparent 100%)",
                        clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)",
                    }}
                />

                {/* Ambient glows */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-1/2 left-[15%] w-72 h-72 rounded-full blur-[100px]" style={{ backgroundColor: "#D6303A" }} />
                    <div className="absolute bottom-0 right-[20%] w-56 h-56 rounded-full blur-[90px]" style={{ backgroundColor: "#D6E7F3" }} />
                </div>

                {/* Top red border */}
                <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: "linear-gradient(to right, transparent, #D6303A 30%, #D6303A 70%, transparent)" }}
                />

                {/* ── MOBILE HEADER ── */}
                <div className="relative z-10 sm:hidden px-5 pt-8 pb-7">
                    <div className="flex items-center justify-between gap-4">

                        {/* Left: icon + text */}
                        <div className="flex items-center gap-4 min-w-0">
                            {/* Red icon badge */}
                            <div
                                className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #D6303A 0%, #a8222a 100%)",
                                    boxShadow: "0 6px 20px rgba(214,48,58,0.5)",
                                }}
                            >
                                <MapPin strokeWidth={2.5} style={{ width: 22, height: 22, color: "#fff" }} />
                            </div>

                            {/* Text block */}
                            <div className="min-w-0 flex-1">
                                {/* District name — primary, shown first */}
                                <h1
                                    className="font-extrabold leading-[1] truncate"
                                    style={{
                                        fontSize: "28px",
                                        color: "#ffffff",
                                        fontFamily: "Crimson Pro, serif",
                                        letterSpacing: "-0.01em",
                                    }}
                                >
                                    {districtName}
                                </h1>
                                {/* State name — secondary, below */}
                                <div
                                    className="text-[10px] font-bold uppercase tracking-[0.2em] mt-1.5"
                                    style={{ color: "#D6303A", fontFamily: "DM Sans, sans-serif" }}
                                >
                                    {stateName}
                                </div>
                                {/* Red underline */}
                                <div
                                    className="mt-1.5 h-[2px] rounded-full"
                                    style={{ width: "40px", background: "linear-gradient(to right, #D6303A, transparent)" }}
                                />
                            </div>
                        </div>

                        {/* Right: tagline */}
                        <div className="flex-shrink-0 text-right pl-2" style={{ borderLeft: "1px solid rgba(214,231,243,0.12)" }}>
                            <div
                                className="pl-3 text-[12px] font-semibold italic leading-snug"
                                style={{ color: "#D6E7F3", opacity: 0.82, fontFamily: "Crimson Pro, serif" }}
                            >
                                सत्य की आवाज़,
                                <br />
                                हर जिले की बात
                            </div>
                            <div
                                className="mt-2 h-px ml-auto mr-0"
                                style={{ width: "48px", background: "linear-gradient(to left, transparent, #D6303A)" }}
                            />
                        </div>
                    </div>
                </div>

                {/* ── TABLET+ HEADER ── */}
                <div className="relative z-10 hidden sm:block py-7 px-6 lg:py-[1.4vw] lg:px-[5.9vw]">
                    <div className="flex items-center justify-between gap-6">

                        {/* Left: icon + text */}
                        <div className="flex items-center gap-5 lg:gap-[1.2vw] min-w-0">
                            <div
                                className="flex-shrink-0 p-3 lg:p-[0.9vw] rounded-2xl"
                                style={{
                                    background: "linear-gradient(135deg, #D6303A 0%, #a8222a 100%)",
                                    boxShadow: "0 4px 24px rgba(214,48,58,0.45)",
                                }}
                            >
                                <MapPin strokeWidth={2.5} style={{ width: "clamp(20px, 2.2vw, 28px)", height: "clamp(20px, 2.2vw, 28px)", color: "#fff" }} />
                            </div>

                            <div className="min-w-0">
                                <div
                                    className="text-[11px] sm:text-xs lg:text-[0.75vw] font-bold uppercase tracking-[0.22em] mb-2"
                                    style={{ color: "#D6303A", fontFamily: "DM Sans, sans-serif" }}
                                >
                                    {stateName}
                                </div>
                                <h1
                                    className="font-extrabold leading-none"
                                    style={{
                                        fontSize: "clamp(30px, 3.4vw, 56px)",
                                        color: "#ffffff",
                                        fontFamily: "Crimson Pro, serif",
                                        letterSpacing: "-0.015em",
                                    }}
                                >
                                    {districtName}
                                </h1>
                                <div
                                    className="mt-3 h-[3px] rounded-full"
                                    style={{ width: "clamp(44px, 5vw, 80px)", background: "linear-gradient(to right, #D6303A, transparent)" }}
                                />
                            </div>
                        </div>

                        {/* Right: tagline */}
                        <div
                            className="flex flex-col items-end flex-shrink-0 pl-6 lg:pl-[2vw]"
                            style={{ borderLeft: "1px solid rgba(214,231,243,0.15)" }}
                        >
                            <div
                                className="text-[10px] lg:text-[0.65vw] uppercase tracking-[0.28em] mb-2 font-semibold"
                                style={{ color: "#D6E7F3", opacity: 0.45, fontFamily: "DM Sans, sans-serif" }}
                            >
                                OUR PROMISE
                            </div>
                            <div
                                className="font-bold italic text-right leading-snug"
                                style={{ fontSize: "clamp(14px, 1.5vw, 24px)", fontFamily: "Crimson Pro, serif", color: "#D6E7F3" }}
                            >
                                सत्य की आवाज़,
                                <br />
                                हर जिले की बात
                            </div>
                            <div
                                className="mt-3 h-px w-full"
                                style={{ background: "linear-gradient(to left, transparent, #D6303A 50%, transparent)" }}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom accent */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: "linear-gradient(to right, transparent, #D6303A 20%, #D6E7F3 50%, #D6303A 80%, transparent)" }}
                />
            </div>

            {/* ════════════════════════════════════════
                NAVIGATION BAR
            ════════════════════════════════════════ */}
            <div
                className="relative text-white"
                style={{
                    background: "linear-gradient(180deg, #181c1b 0%, #0e1110 100%)",
                    borderTop: "1px solid rgba(214,48,58,0.3)",
                    borderBottom: "1px solid rgba(214,231,243,0.08)",
                }}
            >

                {/* ── MOBILE nav ── */}
                <div className="sm:hidden flex items-center gap-2.5 px-4 py-3.5">
                    {/* Scrollable strip */}
                    <div className="flex-1 overflow-x-auto flex gap-2 items-center scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {Object.values(grouped).map((state) => (
                            <div key={state.stateNameHindi} className="flex gap-2 items-center flex-shrink-0">
                                {/* State label chip */}
                                <Link href="#">
                                    <span
                                        className="inline-flex items-center px-3 py-1.5 text-[10px] font-bold whitespace-nowrap rounded-full"
                                        style={{
                                            background: "rgba(214,48,58,0.16)",
                                            color: "#D6303A",
                                            border: "1px solid rgba(214,48,58,0.35)",
                                            fontFamily: "DM Sans, sans-serif",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        {state.stateNameHindi}
                                    </span>
                                </Link>

                                {/* District chips */}
                                {state.districts.map((d) => (
                                    <Link key={d.districtId} href="#">
                                    {/* <Link key={d.districtId} href={`/mera-district/local/${toSlug(d.stateName)}/${toSlug(d.districtName)}`}> */}
                                        <span
                                            className="inline-flex items-center px-3.5 py-1.5 text-[13px] font-semibold whitespace-nowrap rounded-full border transition-all"
                                            style={
                                                d.districtNameHindi === districtName
                                                    ? {
                                                        background: "#D6303A",
                                                        color: "#fff",
                                                        borderColor: "#D6303A",
                                                        boxShadow: "0 2px 12px rgba(214,48,58,0.45)",
                                                        fontFamily: "DM Sans, sans-serif",
                                                    }
                                                    : {
                                                        background: "rgba(214,231,243,0.06)",
                                                        color: "#D6E7F3",
                                                        borderColor: "rgba(214,231,243,0.16)",
                                                        fontFamily: "DM Sans, sans-serif",
                                                    }
                                            }
                                        >
                                            {d.districtNameHindi}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Plus button */}
                    <button
                        onClick={handlestateopen}
                        title="Add More States or Districts"
                        className="flex-shrink-0 flex items-center justify-center rounded-full"
                        style={{
                            width: 36,
                            height: 36,
                            background: "linear-gradient(135deg, #D6303A 0%, #a8222a 100%)",
                            boxShadow: "0 3px 14px rgba(214,48,58,0.5)",
                            color: "#fff",
                        }}
                    >
                        <Plus size={17} strokeWidth={2.5} />
                    </button>
                </div>

                {/* ── DESKTOP nav ── */}
                <div className="hidden sm:block px-5 py-3.5 lg:px-[5.9vw] lg:py-[1vw]">
                    <div className="flex items-center gap-3 lg:gap-4">

                        {/* Left arrow */}
                        <button
                            onClick={() => scrollNav("left")}
                            aria-label="Scroll left"
                            className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-200"
                            style={{
                                width: 34,
                                height: 34,
                                background: canScrollLeft
                                    ? "linear-gradient(135deg, #D6303A 0%, #a8222a 100%)"
                                    : "rgba(214,231,243,0.06)",
                                border: `1px solid ${canScrollLeft ? "#D6303A" : "rgba(214,231,243,0.12)"}`,
                                color: canScrollLeft ? "#fff" : "rgba(214,231,243,0.25)",
                                boxShadow: canScrollLeft ? "0 2px 12px rgba(214,48,58,0.4)" : "none",
                                cursor: canScrollLeft ? "pointer" : "default",
                            }}
                        >
                            <ChevronLeft size={16} />
                        </button>

                        {/* Scrollable strip */}
                        <div
                            ref={scrollRef}
                            className="flex-1 flex overflow-x-auto gap-2 lg:gap-2.5 items-stretch scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                        >
                            {Object.values(grouped).map((state, groupIdx) => (
                                <div
                                    key={state.stateNameHindi}
                                    className="flex items-center flex-shrink-0 rounded-xl overflow-hidden"
                                    style={{
                                
                                        background: "rgba(214,231,243,0.04)",
                                        border: "1px solid rgba(214,231,243,0.09)",
                                        marginRight: groupIdx < Object.values(grouped).length - 1 ? "4px" : "0",
                                    }}
                                >
                                    {/* State label — pill on left side of group */}
                                    <Link href="#">
                                    {/* <Link href={`/mera-district/local/${toSlug(state.stateName)}`}> */}
                                        <div
                                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg lg:px-5 lg:py-2.5 h-full font-bold whitespace-nowrap cursor-pointer transition-opacity hover:opacity-90"
                                            style={{
                                                    marginLeft:"8px",
                                                background: "rgba(214,48,58,0.13)",
                                                borderRight: "1px solid rgba(214,48,58,0.2)",
                                                color: "#D6303A",
                                                fontFamily: "DM Sans, sans-serif",
                                                fontSize: "clamp(11px, 0.78vw, 13px)",
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            <MapPin size={11} strokeWidth={2.5} style={{ opacity: 0.8, flexShrink: 0 }} />
                                            <span style={{ paddingLeft: "2px" }}>{state.stateNameHindi}</span>
                                        </div>
                                    </Link>

                                    {/* District chips inside the group card */}
                                    <div className="flex items-center gap-1 px-2 py-1.5 lg:px-2.5 lg:py-2">
                                        {state.districts.map((d) => (
                                            <Link key={d.districtId} href="#">
                                            {/* <Link key={d.districtId} href={`/mera-district/local/${toSlug(d.stateName)}/${toSlug(d.districtName)}`}> */}
                                                <button
                                                    className="flex-shrink-0 whitespace-nowrap transition-all duration-150 rounded-lg font-semibold"
                                                    style={
                                                        d.districtNameHindi === districtName
                                                            ? {
                                                                background: "#D6303A",
                                                                color: "#fff",
                                                                fontFamily: "DM Sans, sans-serif",
                                                                fontSize: "clamp(12px, 0.88vw, 14px)",
                                                                padding: "6px 14px",
                                                                boxShadow: "0 2px 12px rgba(214,48,58,0.5)",
                                                            }
                                                            : {
                                                                background: "transparent",
                                                                color: "#D6E7F3",
                                                                fontFamily: "DM Sans, sans-serif",
                                                                fontSize: "clamp(12px, 0.88vw, 14px)",
                                                                padding: "6px 12px",
                                                                opacity: 0.72,
                                                            }
                                                    }
                                                >
                                                    {d.districtNameHindi}
                                                </button>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right arrow */}
                        <button
                            onClick={() => scrollNav("right")}
                            aria-label="Scroll right"
                            className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-200"
                            style={{
                                width: 34,
                                height: 34,
                                background: canScrollRight
                                    ? "linear-gradient(135deg, #D6303A 0%, #a8222a 100%)"
                                    : "rgba(214,231,243,0.06)",
                                border: `1px solid ${canScrollRight ? "#D6303A" : "rgba(214,231,243,0.12)"}`,
                                color: canScrollRight ? "#fff" : "rgba(214,231,243,0.25)",
                                boxShadow: canScrollRight ? "0 2px 12px rgba(214,48,58,0.4)" : "none",
                                cursor: canScrollRight ? "pointer" : "default",
                            }}
                        >
                            <ChevronRight size={16} />
                        </button>

                        {/* Divider */}
                        <div className="flex-shrink-0 w-px h-7" style={{ background: "rgba(214,231,243,0.15)" }} />

                        {/* शहर बदलें */}
                        <button
                            onClick={handlestateopen}
                            title="Add More States or Districts"
                            className="flex-shrink-0 flex items-center gap-2 rounded-xl transition-all duration-200 hover:opacity-90"
                            style={{
                                background: "linear-gradient(135deg, rgba(214,48,58,0.18) 0%, rgba(168,34,42,0.12) 100%)",
                                border: "1px solid rgba(214,48,58,0.3)",
                                color: "#D6E7F3",
                                padding: "7px 16px",
                            }}
                        >
                            <Plus size={14} strokeWidth={2.5} style={{ color: "#D6303A" }} />
                            <span
                                className="font-semibold whitespace-nowrap"
                                style={{ fontFamily: "DM Sans, sans-serif", fontSize: "clamp(12px, 0.82vw, 13px)" }}
                            >
                                शहर बदलें
                            </span>
                        </button>
                    </div>
                </div>

                {/* Bottom edge line */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(to right, transparent, rgba(214,48,58,0.35) 30%, rgba(214,231,243,0.15) 70%, transparent)" }}
                />
            </div>
        </>
    );
}