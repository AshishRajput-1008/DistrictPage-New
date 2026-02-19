
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";

export default function NProgressWrapper() {
    const pathname = usePathname();
    const [showMessage, setShowMessage] = useState(false);

    const hideTimer = useRef<NodeJS.Timeout | null>(null);
    const isShowing = useRef(false);

    useEffect(() => {
        NProgress.configure({
            showSpinner: false,
            trickleSpeed: 200,
            minimum: 0.08,
            easing: "ease",
            speed: 500,
            template:
                '<div class="bar" role="bar" style="background:#ef4444;height:3px;"></div>',
        });

        const handleClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest("a");
            if (!anchor) return;

            const href = anchor.getAttribute("href");
            if (!href || href.startsWith("#") || href.startsWith("http")) return;

            const cleanHref = href.replace(/\/$/, "");
            const cleanPath = pathname.replace(/\/$/, "");

            if (cleanHref === cleanPath) {
                if (isShowing.current) return;

                isShowing.current = true;
                setShowMessage(true);

                if (hideTimer.current) clearTimeout(hideTimer.current);

                hideTimer.current = setTimeout(() => {
                    setShowMessage(false);
                    isShowing.current = false;
                }, 2200);

                return;
            }

            NProgress.start();
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [pathname]);

    useEffect(() => {
        NProgress.done();
    }, [pathname]);

    return (
        <>
            {showMessage && (
                <div
                    className="
            fixed z-[9999]
            left-1/2 -translate-x-1/2
            bottom-4
            bg-red-500 text-white text-xs px-4 py-2
            rounded shadow-md
            animate-fade-in

            max-md:left-0
            max-md:translate-x-0
            max-md:bottom-[64px]
            max-md:w-full
            max-md:rounded-none
            max-md:bg-red-600
            max-md:text-center
            max-md:py-3
            max-md:animate-slide-strip
          "
                >
                    सदैव सत्य यूज़र आप पहले से इसी पेज पर हैं
                </div>
            )}
        </>
    );
}
