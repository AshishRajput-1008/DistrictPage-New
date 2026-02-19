"use client";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Home,
  Video,
  BookOpenText,
  Newspaper,
  Sun,
  Moon,
  Search,
  User,
  Menu,
  X,
  BookOpen,
  ChevronsRight,
  ChevronLeft,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/button";
import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import LOGO_WEBP from "@/public/Final Logo.webp";

type CategoryItem = {
  id: number;
  nameHindi: string;
  catName: string;
  categoryimages: string;
};

type TickerItem = {
  newsId: number;
  newsTag: string;
  newsHeading: string;
  newsCategory: string;
  newsSubCategory: string;
  newsSlug: string;
};

// Format date in Hindi style
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

  // Replace English month with Hindi
  Object.keys(hindiMonths).forEach((engMonth) => {
    hindiDate = hindiDate.replace(engMonth, hindiMonths[engMonth]);
  });

  // Replace English day with Hindi
  Object.keys(hindiDays).forEach((engDay) => {
    hindiDate = hindiDate.replace(engDay, hindiDays[engDay]);
  });

  return hindiDate;
};

// Subcategories data
const subcategories = [
  "कानूनी समाचार",
  "बीएमसी चुनाव",
  "यूपीएससी ऑफर",
  "मौसम",
  "कानूनी समाचार",
  "बीएमसी चुनाव",
  "यूपीएससी ऑफर",
  "मौसम",
  "कानूनी समाचार",
  "बीएमसी चुनाव",
  "यूपीएससी ऑफर",
  "मौसम",
];

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ExtraHeader() {
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
  const [canScrollLeftSubcategory, setCanScrollLeftSubcategory] =
    useState(false);
  const [canScrollRightSubcategory, setCanScrollRightSubcategory] =
    useState(true);
  const [isTickerVisible, setIsTickerVisible] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [categoryItems, setCategoryItems] = useState<CategoryItem[]>([]);
  const [breakingNews, setBreakingNews] = useState<TickerItem[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isLoadingBreakingNews, setIsLoadingBreakingNews] = useState(true);
  const [formattedDate, setFormattedDate] = useState("");

  const desktopNavRef = useRef<HTMLDivElement | null>(null);
  const mobileNavRef = useRef<HTMLUListElement | null>(null);
  const subcategoryNavRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const lastScroll = useRef(0);

  // Set formatted date on mount
  useEffect(() => {
    setFormattedDate(getFormattedDate());
  }, []);

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${apiUrl}getCategories`
        );
        if (response.ok) {
          const data = await response.json();
          setCategoryItems(data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch Breaking News
  useEffect(() => {
    const fetchBreakingNews = async () => {
      try {
        const response = await fetch(`${apiUrl}BreakingNewsList?pageSize=5`);
        if (response.ok) {
          const data = await response.json();
          setBreakingNews(data);
        }
      } catch (error) {
        console.error("Error fetching breaking news:", error);
      } finally {
        setIsLoadingBreakingNews(false);
      }
    };

    fetchBreakingNews();
    // Refresh breaking news every 30 seconds
    const interval = setInterval(fetchBreakingNews, 30000);
    return () => clearInterval(interval);
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
      checkScroll(
        subcategoryNavRef.current,
        setCanScrollLeftSubcategory,
        setCanScrollRightSubcategory
      );
    };

    const timeoutId = setTimeout(handleScrollAndResize, 100);

    window.addEventListener("resize", handleScrollAndResize, { passive: true });

    const desktopNav = desktopNavRef.current;
    const mobileNav = mobileNavRef.current;
    const subcategoryNav = subcategoryNavRef.current;

    desktopNav?.addEventListener("scroll", handleScrollAndResize, {
      passive: true,
    });
    mobileNav?.addEventListener("scroll", handleScrollAndResize, {
      passive: true,
    });
    subcategoryNav?.addEventListener("scroll", handleScrollAndResize, {
      passive: true,
    });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleScrollAndResize);
      desktopNav?.removeEventListener("scroll", handleScrollAndResize);
      mobileNav?.removeEventListener("scroll", handleScrollAndResize);
      subcategoryNav?.removeEventListener("scroll", handleScrollAndResize);
    };
  }, [categoryItems.length]);

  const scrollLeft = (target: "desktop" | "mobile" | "subcategory") => {
    let ref;
    if (target === "desktop") ref = desktopNavRef;
    else if (target === "mobile") ref = mobileNavRef;
    else ref = subcategoryNavRef;

    if (ref.current) {
      ref.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = (target: "desktop" | "mobile" | "subcategory") => {
    let ref;
    if (target === "desktop") ref = desktopNavRef;
    else if (target === "mobile") ref = mobileNavRef;
    else ref = subcategoryNavRef;

    if (ref.current) {
      ref.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleMouseLeave = () => setIsOpen(null);

  const OptimizedLogo = useMemo(
    () => (
      <Image
        src={LOGO_WEBP}
        alt="Sadaiv Satya Logo"
        width={120}
        height={70}
        className="h-[70px] w-auto object-contain"
        unoptimized
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

  // Breaking News Ticker Component
  const BreakingNewsTicker = () => {
    if (!breakingNews.length) return null;

    return (
      <div className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#0a112d] to-[#111827] text-white py-1 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-[#dc0505] flex items-center justify-center font-500 z-10 text-xs sm:text-sm">
          ब्रेकिंग न्यूज़
        </div>

        <div className="flex whitespace-nowrap ml-24 animate-ticker">
          {[...Array(2)].map((_, copyIndex) => (
            <div key={copyIndex} className="flex flex-shrink-0">
              {breakingNews.map((item, index) => {
                const category = toSlug(item.newsCategory) || "general";
                const subcategory = item.newsSubCategory
                  ? toSlug(item.newsSubCategory)
                  : null;
                const slug = item.newsSlug;
                const URL = subcategory
                  ? `/${category}/${subcategory}/news/${slug}`
                  : `/${category}/news/${slug}`;

                return (
                  <div
                    key={`${copyIndex}-${index}`}
                    className="flex items-center flex-shrink-0"
                  >
                    <Link
                      prefetch={false}
                      href={URL}
                      className="mx-4 hover:text-yellow-300 cursor-pointer transition-colors text-sm"
                    >
                      <strong className="mr-2 text-yellow-300">
                        {item.newsTag}
                      </strong>
                      {item.newsHeading}
                    </Link>
                    <span className="text-yellow-300 mx-1">••</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes ticker {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-ticker {
            animation: ticker 30s linear infinite;
          }
          .animate-ticker:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    );
  };

  return (
    <>
      {/* Breaking News Ticker */}
      <BreakingNewsTicker />

      {/* Desktop Header */}
      <header className="hidden lg:block w-full bg-white border-b border-gray-200">
        {/* Top Bar */}
        <div className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Left Section - Menu, Logo, Date */}
            <div className="flex items-center gap-6">
              <div className="relative w-6 h-6 flex-shrink-0">
                <Menu className="w-6 h-6 text-gray-700" />
                <Search className="w-4 h-4 absolute right-0 bottom-0 bg-white rounded-full p-[1px] text-grey-700" />
              </div>

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
                  href="https://www.youtube.com/@SadaivSatyaMedia/"
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

        {/* Trending Bar */}
        <div className="bg-gray-50 border-t text-center border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex items-center gap-4 text-[13px] overflow-x-auto">
              <span className="font-500 text-red-600 whitespace-nowrap">
                ट्रेंडिंग
              </span>
              <a
                href="#"
                className="bg-[#b60700] text-white px-3 py-1 rounded whitespace-nowrap hover:bg-red-700"
              >
                नया साल ऑफर
              </a>
              <a href="#" className="hover:text-gray-600 whitespace-nowrap">
                कानूनी समाचार
              </a>
              <a href="#" className="hover:text-gray-600 whitespace-nowrap">
                बीएमसी चुनाव
              </a>
              <a href="#" className="hover:text-gray-600 whitespace-nowrap">
                यूपीएससी ऑफर
              </a>
              <a href="#" className="hover:text-gray-600 whitespace-nowrap">
                मौसम
              </a>
              <a href="#" className="hover:text-gray-600 whitespace-nowrap">
                कानूनी समाचार
              </a>
              <a href="#" className="hover:text-gray-600 whitespace-nowrap">
                बीएमसी चुनाव
              </a>
              <a href="#" className="hover:text-gray-600 whitespace-nowrap">
                यूपीएससी ऑफर
              </a>
              <a href="#" className="hover:text-gray-600 whitespace-nowrap">
                मौसम
              </a>
              <a href="#" className="hover:text-gray-600 whitespace-nowrap">
                कानूनी समाचार
              </a>
              <a href="#" className="hover:text-gray-600 whitespace-nowrap">
                बीएमसी चुनाव
              </a>
              <a href="#" className="hover:text-gray-600 whitespace-nowrap">
                यूपीएससी ऑफर
              </a>
              <a href="#" className="hover:text-gray-600 whitespace-nowrap">
                मौसम
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden w-full bg-white border-b border-gray-200">
        {/* Top Bar - Improved Logo Size */}
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

          {/* Improved Logo with Better Dimensions */}
          <Link href="/" className="flex-shrink-0">
            {OptimizedLogo}
          </Link>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                /* search functionality */
              }}
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
              aria-label="Search"
            >
              <Search className="!w-5 !h-5 text-red-600" />
            </Button>

            {/* Mobile Subscribe Button */}
            <button className="bg-red-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-red-700 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Categories - Mobile - WITH LEFT NAVIGATION */}
        <div className="flex md:hidden items-center w-full dark:bg-[#18191a] shadow-sm py-2">
          {/* LEFT NAVIGATION BUTTON - ADDED */}
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

          {/* RIGHT NAVIGATION BUTTON */}
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

        {/* Subcategories Pills - Mobile Only - WITH TRENDING LABEL */}
        <div className="relative flex md:hidden items-stretch w-full bg-gray-50 border-y border-gray-200">
          {/* Left Navigation */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollLeft("subcategory")}
            disabled={!canScrollLeftSubcategory}
            className="flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed px-1 py-2 z-10"
            aria-label="Scroll subcategories left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </Button>

          {/* TRENDING LABEL - POSITIONED AFTER LEFT NAV */}
          <div className="absolute left-9 top-0 bottom-0 flex items-center px-3 py-2  text-red-600 font-500 text-[14px] z-20 pointer-events-none">
            ट्रेंडिंग
          </div>

          {/* Scrollable Pills Container - Pills scroll UNDER the trending label */}
          <div
            ref={subcategoryNavRef}
            className="flex-1 overflow-x-auto scrollbar-hide py-2 pl-12"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex items-center gap-2 whitespace-nowrap">
              {subcategories.map((subcat, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-block px-3 py-1.5 bg-white border border-gray-300 rounded-full text-[13px] font-medium text-gray-700 hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all shadow-sm"
                >
                  {subcat}
                </a>
              ))}
            </div>
          </div>

          {/* Right Navigation */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollRight("subcategory")}
            disabled={!canScrollRightSubcategory}
            className="flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed px-1 py-2 z-10"
            aria-label="Scroll subcategories right"
          >
            <ChevronsRight className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </header>

      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
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
      `}</style>
    </>
  );
}
