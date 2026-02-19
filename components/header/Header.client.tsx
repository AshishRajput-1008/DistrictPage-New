"use client";
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Home,
    Video,
    Search,
    User,
    Menu,
    X,
    BookOpen,
    ChevronsRight,
    ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/button";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import LOGO_WEBP from "@/public/Hero.svg";

type CategoryItem = {
    id: number;
    nameHindi: string;
    catName: string;
    categoryimages: string;
};
type SubCategoryItem = {
    nameinHindi: string;
    subCat_Name: string;
}

type Props = {
    initialCategories: CategoryItem[];
    initialSubCategories: SubCategoryItem[];
};

const getFormattedDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    const hindiMonths: { [key: string]: string } = {
        January: "जनवरी",
        February: "फरवरी",
        March: "मार्च",
        April: "अप्रैल",
        May: "मई",
        June: "जून",
        July: "जुलाई",
        August: "अगस्त",
        September: "सितंबर",
        October: "अक्टूबर",
        November: "नवंबर",
        December: "दिसंबर",
    };

    const hindiDays: { [key: string]: string } = {
        Monday: "सोमवार",
        Tuesday: "मंगलवार",
        Wednesday: "बुधवार",
        Thursday: "गुरुवार",
        Friday: "शुक्रवार",
        Saturday: "शनिवार",
        Sunday: "रविवार",
    };

    const englishDate = date.toLocaleDateString("en-US", options);
    let hindiDate = englishDate;

    Object.keys(hindiMonths).forEach((engMonth) => {
        hindiDate = hindiDate.replace(engMonth, hindiMonths[engMonth]);
    });

    Object.keys(hindiDays).forEach((engDay) => {
        hindiDate = hindiDate.replace(engDay, hindiDays[engDay]);
    });

    return hindiDate;
};

export default function ExtraHeader({ initialCategories, initialSubCategories }: Props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<number | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [canScrollLeftDesktop, setCanScrollLeftDesktop] = useState(false);
    const [canScrollRightDesktop, setCanScrollRightDesktop] = useState(true);
    const [canScrollLeftMobile, setCanScrollLeftMobile] = useState(false);
    const [canScrollRightMobile, setCanScrollRightMobile] = useState(true);
    const [canScrollLeftSubcategory, setCanScrollLeftSubcategory] = useState(false);
    const [canScrollRightSubcategory, setCanScrollRightSubcategory] = useState(true);
    const [isTickerVisible, setIsTickerVisible] = useState(true);
    const [categoryItems, setCategoryItems] = useState<CategoryItem[]>(initialCategories);
    const [subCategories, setSubCategories] = useState<SubCategoryItem[]>(initialSubCategories);
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const [formattedDate, setFormattedDate] = useState("");
    const desktopNavRef = useRef<HTMLDivElement | null>(null);
    const mobileNavRef = useRef<HTMLUListElement | null>(null);
    const subcategoryNavRef = useRef<HTMLDivElement | null>(null);
    const subcategoryNavRefDesktop = useRef<HTMLDivElement | null>(null);
    const lastScroll = useRef(0);

    // Mobile pills auto-scroll
    const scrollIntervalRefMobile = useRef<NodeJS.Timeout | null>(null);
    const [isPausedMobile, setIsPausedMobile] = useState(false);

    // Desktop pills auto-scroll
    const scrollIntervalRefDesktop = useRef<NodeJS.Timeout | null>(null);
    const [isPausedDesktop, setIsPausedDesktop] = useState(false);

    // Mobile pills auto-scroll function - ONLY RIGHT TO LEFT
    const startAutoScrollMobile = useCallback(() => {
        if (scrollIntervalRefMobile.current) {
            clearInterval(scrollIntervalRefMobile.current);
        }

        scrollIntervalRefMobile.current = setInterval(() => {
            if (!subcategoryNavRef.current || isPausedMobile) return;

            const container = subcategoryNavRef.current;
            const scrollLeft = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            const containerWidth = container.clientWidth;

            // Reset to start when reaching end (for seamless loop)
            if (scrollLeft >= maxScroll - 5) {
                // Jump to start for seamless loop
                container.scrollLeft = 0;
            } else {
                // Always scroll right to left (increase scrollLeft)
                container.scrollBy({
                    left: 2, // Positive value = right to left
                    behavior: 'smooth'
                });
            }
        }, 50);
    }, [isPausedMobile]);

    // Desktop pills auto-scroll function - ONLY RIGHT TO LEFT
    const startAutoScrollDesktop = useCallback(() => {
        if (scrollIntervalRefDesktop.current) {
            clearInterval(scrollIntervalRefDesktop.current);
        }

        scrollIntervalRefDesktop.current = setInterval(() => {
            if (!subcategoryNavRefDesktop.current || isPausedDesktop) return;

            const container = subcategoryNavRefDesktop.current;
            const scrollLeft = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;

            // Reset to start when reaching end
            if (scrollLeft >= maxScroll - 5) {
                container.scrollLeft = 0;
            } else {
                // Always scroll right to left
                container.scrollBy({
                    left: 2, // Positive value = right to left
                    behavior: 'smooth'
                });
            }
        }, 50);
    }, [isPausedDesktop]);

    const handleUserInteractionMobile = () => {
        if (!isPausedMobile) {
            setIsPausedMobile(true);

            setTimeout(() => {
                setIsPausedMobile(false);
            }, 5000);
        }
    };

    const handleUserInteractionDesktop = () => {
        if (!isPausedDesktop) {
            setIsPausedDesktop(true);

            setTimeout(() => {
                setIsPausedDesktop(false);
            }, 5000);
        }
    };

    // Mobile auto-scroll effects
    useEffect(() => {
        startAutoScrollMobile();

        return () => {
            if (scrollIntervalRefMobile.current) {
                clearInterval(scrollIntervalRefMobile.current);
            }
        };
    }, [startAutoScrollMobile]);

    useEffect(() => {
        let resumeTimer: NodeJS.Timeout;

        if (isPausedMobile) {
            resumeTimer = setTimeout(() => {
                setIsPausedMobile(false);
            }, 5000);
        }

        return () => {
            if (resumeTimer) clearTimeout(resumeTimer);
        };
    }, [isPausedMobile]);

    // Desktop auto-scroll effects
    useEffect(() => {
        startAutoScrollDesktop();

        return () => {
            if (scrollIntervalRefDesktop.current) {
                clearInterval(scrollIntervalRefDesktop.current);
            }
        };
    }, [startAutoScrollDesktop]);

    useEffect(() => {
        let resumeTimer: NodeJS.Timeout;

        if (isPausedDesktop) {
            resumeTimer = setTimeout(() => {
                setIsPausedDesktop(false);
            }, 5000);
        }

        return () => {
            if (resumeTimer) clearTimeout(resumeTimer);
        };
    }, [isPausedDesktop]);

    // Mobile event listeners
    useEffect(() => {
        const container = subcategoryNavRef.current;
        if (!container) return;

        const handleInteraction = () => handleUserInteractionMobile();

        container.addEventListener('touchstart', handleInteraction, { passive: false });
        container.addEventListener('mousedown', handleInteraction);
        container.addEventListener('click', handleInteraction);

        return () => {
            container.removeEventListener('touchstart', handleInteraction);
            container.removeEventListener('mousedown', handleInteraction);
            container.removeEventListener('click', handleInteraction);
        };
    }, []);

    // Desktop event listeners
    useEffect(() => {
        const container = subcategoryNavRefDesktop.current;
        if (!container) return;

        const handleInteraction = () => handleUserInteractionDesktop();

        container.addEventListener('touchstart', handleInteraction, { passive: false });
        container.addEventListener('mousedown', handleInteraction);
        container.addEventListener('click', handleInteraction);

        return () => {
            container.removeEventListener('touchstart', handleInteraction);
            container.removeEventListener('mousedown', handleInteraction);
            container.removeEventListener('click', handleInteraction);
        };
    }, []);

    useEffect(() => {
        setFormattedDate(getFormattedDate());
    }, []);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setIsTickerVisible(
                currentScroll <= lastScroll.current || currentScroll <= 0
            );
            lastScroll.current = Math.max(currentScroll, 0);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const checkScroll = (
        nav: HTMLElement | null,
        setLeft: any,
        setRight: any
    ) => {
        if (!nav) return;
        const { scrollLeft, scrollWidth, clientWidth } = nav;
        setLeft(scrollLeft > 1);
        setRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    useEffect(() => {
        const handleScrollAndResize = () => {
            checkScroll(
                desktopNavRef.current,
                setCanScrollLeftDesktop,
                setCanScrollRightDesktop
            );
            checkScroll(
                mobileNavRef.current,
                setCanScrollLeftMobile,
                setCanScrollRightMobile
            );

            if (subcategoryNavRefDesktop.current) {
                const nav = subcategoryNavRefDesktop.current;
                const { scrollLeft, scrollWidth, clientWidth } = nav;
                setCanScrollLeftSubcategory(scrollLeft > 1);
                setCanScrollRightSubcategory(scrollLeft + clientWidth < scrollWidth - 1);
            }
        };

        const timeoutId = setTimeout(handleScrollAndResize, 100);

        window.addEventListener("resize", handleScrollAndResize, { passive: true });

        const desktopNav = desktopNavRef.current;
        const mobileNav = mobileNavRef.current;
        const subcategoryNavDesktop = subcategoryNavRefDesktop.current;

        desktopNav?.addEventListener("scroll", handleScrollAndResize, {
            passive: true,
        });
        mobileNav?.addEventListener("scroll", handleScrollAndResize, {
            passive: true,
        });
        subcategoryNavDesktop?.addEventListener("scroll", handleScrollAndResize, {
            passive: true,
        });

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", handleScrollAndResize);
            desktopNav?.removeEventListener("scroll", handleScrollAndResize);
            mobileNav?.removeEventListener("scroll", handleScrollAndResize);
            subcategoryNavDesktop?.removeEventListener("scroll", handleScrollAndResize);
        };
    }, [categoryItems.length]);

    // Fixed scroll functions for desktop subcategories
    const scrollLeftDesktopSubcategories = () => {
        if (subcategoryNavRefDesktop.current) {
            subcategoryNavRefDesktop.current.scrollBy({
                left: -200,
                behavior: "smooth"
            });
        }
    };

    const scrollRightDesktopSubcategories = () => {
        if (subcategoryNavRefDesktop.current) {
            subcategoryNavRefDesktop.current.scrollBy({
                left: 200,
                behavior: "smooth"
            });
        }
    };

    const scrollLeft = (target: "desktop" | "mobile") => {
        let ref;
        if (target === "desktop") ref = desktopNavRef;
        else ref = mobileNavRef;

        if (ref.current) {
            ref.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = (target: "desktop" | "mobile") => {
        let ref;
        if (target === "desktop") ref = desktopNavRef;
        else ref = mobileNavRef;

        if (ref.current) {
            ref.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    const handleMouseLeave = () => setIsOpen(null);

    const OptimizedLogo = useMemo(
        () => (
            <Image
                unoptimized
                src={LOGO_WEBP}
                alt="Sadaiv Satya Logo"
                width={120}
                height={70}
                priority
                className="h-[70px] w-auto object-contain"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iODAiIGZpbGw9IiNlZmYyZjUiLz48L3N2Zz4="
                style={{
                    maxWidth: "130px",
                    maxHeight: "73px",
                }}
            />
        ),
        []
    );

    const cleanText = (str: string = "") =>
        str.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();
    const toSlug = (str: string = "") =>
        cleanText(str)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "");

    const renderCategoryLink = useMemo(
        () => (item: CategoryItem) => {
            const slug = toSlug(item.catName);

            return (
                <Link
                    key={item.id}
                    href={`/${slug}`}
                    className={`relative inline-block px-3 py-2 text-sm font-500 transition-all duration-300 ease-in-out`}
                    aria-label={`Navigate to ${item.nameHindi}`}
                >
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{item.nameHindi}</span>
                    </div>
                </Link>
            );
        },
        []
    );

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden lg:block w-full bg-white border-b border-gray-200">
                {/* Top Bar */}
                <div className="border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-2 flex items-center justify-between">
                        {/* Left Section - Menu, Logo, Date */}
                        <div className="flex items-center gap-6">
                            {/* <div className="relative w-6 h-6 flex-shrink-0">
                                <Menu className="w-6 h-6 text-gray-700" />
                                <Search className="w-4 h-4 absolute right-0 bottom-0 bg-white rounded-full p-[1px] text-grey-700" />
                            </div> */}

                            <Link href="/" className="flex-shrink-0">
                                <Image
                                    src={LOGO_WEBP}
                                    alt="Logo"
                                    width={140}
                                    height={60}
                                    className="object-contain h-18"
                                    unoptimized
                                />
                            </Link>

                            {/* Date with Calendar Icon */}
                            <div className="flex items-center gap-2 px-4 py-2">
                                <span className="text-xs font-medium text-gray-700 whitespace-nowrap">
                                    {formattedDate}
                                </span>
                            </div>
                        </div>

                        {/* Right Section - Navigation, Subscribe, Social */}
                        <div className="flex items-center gap-4">
                            {/* Quick Navigation */}
                            <div className="flex items-center gap-3 text-sm font-500 text-gray-700">
                                <Link
                                    href="/"
                                    className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
                                >
                                    <Home className="w-4 h-4" />
                                    <span>होम</span>
                                </Link>
                                <span className="text-gray-300">|</span>

                                <Link
                                    href="/web-stories"
                                    className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
                                >
                                    <BookOpen className="w-4 h-4" />
                                    <span>वेब स्टोरीज़</span>
                                </Link>
                                <span className="text-gray-300">|</span>

                                <Link
                                    href="/videos"
                                    className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
                                >
                                    <Video className="w-4 h-4" />
                                    <span>वीडियो</span>
                                </Link>
                                <span className="text-gray-300">|</span>

                                <Link
                                    href="/profile"
                                    className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
                                >
                                    <User className="w-4 h-4" />
                                    <span>प्रोफ़ाइल</span>
                                </Link>
                            </div>

                            {/* Subscribe Button */}
                            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-xs font-500 hover:bg-red-700 transition-colors shadow-sm">
                                Subscribe
                            </button>

                            {/* Social Icons */}
                            <div className="flex gap-2">
                                <a
                                    href="https://www.facebook.com/sadaivsatyamedia"
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-blue-600 transition-all"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-4 h-4 text-blue-600" />
                                </a>

                                <a
                                    href="https://x.com/SadaivSatyaNews"
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-black transition-all"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-4 h-4 text-black" />
                                </a>

                                <a
                                    href="https://www.instagram.com/sadaivsatyamedia/"
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-pink-600 transition-all"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-4 h-4 text-pink-600" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/company/107578599/admin/page-posts/published/"
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-blue-700 transition-all"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4 text-blue-700" />
                                </a>

                                <a
                                    href="https://www.youtube.com/@SadaivSatyaMedia"
                                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-red-600 transition-all"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="w-4 h-4 text-red-600" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories Navigation - Scrollbar Hidden */}
                <div className="w-full hidden md:flex justify-center items-center dark:bg-[#18191a] mb-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => scrollLeft("desktop")}
                        disabled={!canScrollLeftDesktop}
                        className="mr-2 cursor-pointer flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Scroll navigation to the left"
                    >
                        <ChevronLeft className="!w-6 !h-6 dark:text-red-300" />
                    </Button>
                    <nav
                        ref={desktopNavRef}
                        className={`flex-1 overflow-x-auto px-2 md:px-1 relative ${canScrollLeftDesktop ? "fade-left" : ""
                            }`}
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {isLoadingCategories ? (
                            <div className="flex items-center justify-center py-4">
                                <div className="text-gray-500">Loading categories...</div>
                            </div>
                        ) : (
                            <ul className="flex items-center justify-center min-w-max py-1 whitespace-nowrap">
                                {categoryItems.map((item) => (
                                    <li
                                        key={item.id}
                                        className="relative group after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-6 after:w-px after:bg-gray-300 after:dark:bg-gray-600 last:after:hidden"
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {renderCategoryLink(item)}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </nav>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => scrollRight("desktop")}
                        disabled={!canScrollRightDesktop}
                        className="ml-2 cursor-pointer flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Scroll navigation to the right"
                    >
                        <ChevronsRight className="!w-6 !h-6  dark:text-gray-300" />
                    </Button>
                </div>

                {/* Trending Bar - Desktop with Fixed ट्रेंडिंग and Scroll Arrows */}
                <div className="border-t text-center border-b border-gray-200 relative">
                    <div className="max-w-7xl mx-auto px-4 py-2 flex items-center">
                        {/* Fixed ट्रेंडिंग Label */}
                        <div className="flex-shrink-0 flex items-center px-3 py-2 bg-white text-red-600 font-500 text-[14px] z-20">
                            ट्रेंडिंग
                        </div>

                        {/* Left Scroll Button */}
                        {/* <Button
                            variant="ghost"
                            size="icon"
                            onClick={scrollLeftDesktopSubcategories}
                            disabled={!canScrollLeftSubcategory}
                            className="flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed ml-1 mr-1"
                            aria-label="Scroll trending left"
                        >
                            <ChevronLeft className="w-4 h-4 text-gray-700" />
                        </Button> */}

                        {/* Scrolling Pills Container */}
                        <div
                            ref={subcategoryNavRefDesktop}
                            className="flex-1 overflow-x-auto scroll-container"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                                cursor: 'grab'
                            }}
                            onMouseEnter={() => setIsPausedDesktop(true)}
                            onMouseLeave={() => {
                                if (isPausedDesktop) {
                                    setTimeout(() => setIsPausedDesktop(false), 100);
                                }
                            }}
                            onTouchStart={(e) => {
                                e.stopPropagation();
                                handleUserInteractionDesktop();
                            }}
                        >
                            <div className="flex items-center gap-2 whitespace-nowrap py-1">
                                {/* Duplicate items for seamless loop */}
                                {[...subCategories, ...subCategories].map((subcat, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="inline-block px-3 py-1.5 bg-white border border-gray-300 rounded-full text-[13px] font-medium text-gray-700 hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all shadow-sm flex-shrink-0"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleUserInteractionDesktop();
                                        }}
                                        onMouseDown={(e) => {
                                            e.stopPropagation();
                                            handleUserInteractionDesktop();
                                        }}
                                        onTouchStart={(e) => {
                                            e.stopPropagation();
                                            handleUserInteractionDesktop();
                                        }}
                                    >
                                        {subcat.nameinHindi}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Scroll Button */}
                        {/* <Button
                            variant="ghost"
                            size="icon"
                            onClick={scrollRightDesktopSubcategories}
                            disabled={!canScrollRightSubcategory}
                            className="flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed ml-1 mr-1"
                            aria-label="Scroll trending right"
                        >
                            <ChevronsRight className="w-4 h-4 text-gray-700" />
                        </Button> */}
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="lg:hidden w-full bg-white">
                <div className="flex items-center justify-between w-full gap-2 px-3 py-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="hidden"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? (
                            <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        ) : (
                            <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                        )}
                    </Button>

                    <Link href="/" className="flex-shrink-0">
                        {OptimizedLogo}
                    </Link>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                            }}
                            className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                            aria-label="Search"
                        >
                            <Search className="!w-5 !h-5 text-red-600" />
                        </Button>

                        <button className="bg-red-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-red-700 whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Main Categories - Mobile - WITH LEFT NAVIGATION */}
                <div className="flex md:hidden items-center w-full dark:bg-[#18191a] shadow-sm py-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => scrollLeft("mobile")}
                        disabled={!canScrollLeftMobile}
                        className="flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed px-1"
                        aria-label="Scroll categories left"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </Button>

                    <nav
                        ref={mobileNavRef}
                        className={`flex-1 overflow-x-auto relative ${canScrollLeftMobile ? "fade-left" : ""
                            }`}
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {isLoadingCategories ? (
                            <div className="flex items-center justify-center py-4">
                                <div className="text-gray-500 text-sm">Loading...</div>
                            </div>
                        ) : (
                            <ul className="flex items-center justify-start space-x-1 min-w-max whitespace-nowrap px-1">
                                {categoryItems.map((item) => {
                                    const slug = toSlug(item.catName);
                                    return (
                                        <li key={item.id} className="relative group">
                                            <Link
                                                prefetch={false}
                                                href={`/${slug}`}
                                                className={`relative inline-block px-3 py-1.5 text-[16px] font-500 rounded transition-all duration-300 ease-in-out ${pathname === `/${slug}`
                                                    ? "text-red-600 bg-red-50 border border-red-200"
                                                    : "text-gray-800 dark:text-white hover:text-red-600 hover:bg-red-50"
                                                    }`}
                                                aria-label={`Navigate to ${item.nameHindi}`}
                                            >
                                                {item.nameHindi}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </nav>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => scrollRight("mobile")}
                        disabled={!canScrollRightMobile}
                        className="flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed px-1"
                        aria-label="Scroll categories right"
                    >
                        <ChevronsRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </Button>
                </div>

                {/* Subcategories Pills - Mobile Only - WITH FIXED TRENDING LABEL */}
                <div className="relative flex md:hidden items-stretch w-full bg-white border-y border-gray-200">
                    {/* Fixed ट्रेंडिंग Label for Mobile */}
                    <div className="absolute left-0 top-0 bottom-0 flex items-center px-3 py-2 bg-white text-red-600 font-500 text-[14px] z-20 pointer-events-none">
                        ट्रेंडिंग
                    </div>

                    <div
                        ref={subcategoryNavRef}
                        className="flex-1 overflow-x-auto scrollbar-hide py-2 pl-12 scroll-container"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            cursor: 'grab'
                        }}
                        onMouseEnter={() => setIsPausedMobile(true)}
                        onMouseLeave={() => {
                            if (isPausedMobile) {
                                setTimeout(() => setIsPausedMobile(false), 100);
                            }
                        }}
                        onTouchStart={(e) => {
                            e.stopPropagation();
                            handleUserInteractionMobile();
                        }}
                    >
                        <div className="flex items-center gap-2 whitespace-nowrap">
                            {/* Duplicate items for seamless loop */}
                            {[...subCategories, ...subCategories].map((subcat, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="inline-block px-3 py-1.5 bg-white border border-gray-300 rounded-full text-[13px] font-medium text-gray-700 hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all shadow-sm flex-shrink-0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        handleUserInteractionMobile();
                                    }}
                                    onMouseDown={(e) => {
                                        e.stopPropagation();
                                        handleUserInteractionMobile();
                                    }}
                                    onTouchStart={(e) => {
                                        e.stopPropagation();
                                        handleUserInteractionMobile();
                                    }}
                                >
                                    {subcat.nameinHindi}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <style jsx global>{`
        nav::-webkit-scrollbar,
        div::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        nav,
        div {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Smooth scrolling effect 
        .scroll-container {
          mask-image: linear-gradient(
              to right,
              transparent,
              black 20%,
              black 80%,
              transparent
          );
        }*/
        
        .fade-left {
          mask-image: linear-gradient(
              to right,
              transparent,
              black 30px,
              black calc(100% - 30px),
              transparent
          );
        }
      `}</style>
        </>
    );
}