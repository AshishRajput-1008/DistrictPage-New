// "use client";

// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/button";
// import {
//     BookOpen,
//     Facebook,
//     Home,
//     Instagram,
//     Linkedin,
//     Menu,
//     Search,
//     SearchIcon,
//     Twitter,
//     User,
//     User2,
//     Video,
//     X,
//     Youtube,
// } from "lucide-react";
// import LOGO_WEBP from "@/public/Final Logo.webp";
// import { useEffect, useMemo, useState } from "react";

// type Props = {
//     formattedDate?: string;
//     onSearchClick?: () => void;
//     onMenuClick?: () => void;
// };

// export function Header({ formattedDate, onSearchClick, onMenuClick }: Props) {
//     const router = useRouter();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     function handleSubscribe() {
//         router.push("/account/paywall");
//     }
//     function handlethoughtflow() {
//         router.push("https://prasarbharati.gov.in/");
//     }
//     function handlecrime() {
//         router.push("/ddnews-rssfeed");
//     }


//     // Format date in Hindi style
//     const getFormattedDate = () => {
//         const date = new Date();
//         const options: Intl.DateTimeFormatOptions = {
//             weekday: "long",
//             day: "numeric",
//             month: "long",
//             year: "numeric",
//         };

//         const hindiMonths: { [key: string]: string } = {
//             January: "जनवरी",
//             February: "फरवरी",
//             March: "मार्च",
//             April: "अप्रैल",
//             May: "मई",
//             June: "जून",
//             July: "जुलाई",
//             August: "अगस्त",
//             September: "सितंबर",
//             October: "अक्टूबर",
//             November: "नवंबर",
//             December: "दिसंबर",
//         };

//         const hindiDays: { [key: string]: string } = {
//             Monday: "सोमवार",
//             Tuesday: "मंगलवार",
//             Wednesday: "बुधवार",
//             Thursday: "गुरुवार",
//             Friday: "शुक्रवार",
//             Saturday: "शनिवार",
//             Sunday: "रविवार",
//         };

//         const englishDate = date.toLocaleDateString("en-US", options);
//         let hindiDate = englishDate;

//         // Replace English month with Hindi
//         Object.keys(hindiMonths).forEach((engMonth) => {
//             hindiDate = hindiDate.replace(engMonth, hindiMonths[engMonth]);
//         });

//         // Replace English day with Hindi
//         Object.keys(hindiDays).forEach((engDay) => {
//             hindiDate = hindiDate.replace(engDay, hindiDays[engDay]);
//         });

//         return hindiDate;
//     };

//     const OptimizedLogo = useMemo(
//         () => (
//             <Image
//                 src={LOGO_WEBP}
//                 alt="Sadaiv Satya Logo"
//                 width={120}
//                 height={80}
//                 priority
//                 className="h-[100px] w-auto object-contain"
//                 unoptimized
//                 style={{
//                     maxWidth: "100px",
//                     maxHeight: "55px",
//                 }}
//             />
//         ),
//         []
//     );

//     return (
//         <>
//             {/* Desktop Header */}
//             <header className="hidden lg:block w-full bg-white dark:bg-[#1c1c1c]">
//                 {/* Top Bar */}
//                 <div className="border-b border-gray-200">
//                     <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//                         {/* Left Section - Menu, Logo, Date */}
//                         <div className="flex items-center gap-6">
//                             <div className="block relative w-6 h-6 flex-shrink-0">
//                                 <Menu className="w-6 h-6 text-gray-700" />
//                                 <Search className="w-4 h-4 absolute right-0 bottom-0 bg-white rounded-full p-[1px] text-grey-700" />
//                             </div>

//                             <Link href="/" className="flex-shrink-0">
//                                 <Image
//                                     src={LOGO_WEBP}
//                                     alt="Logo"
//                                     width={140}
//                                     height={80}
//                                     className="object-contain h-[80px]"
//                                 />
//                             </Link>

//                             {/* Date with Calendar Icon */}
//                             <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-md border border-gray-200">
//                                 <span className="text-[15px] font-medium text-gray-700 whitespace-nowrap">
//                                     {formattedDate}
//                                 </span>
//                             </div>
//                         </div>

//                         {/* Right Section - Navigation, Subscribe, Social */}
//                         <div className="flex items-center gap-4">
//                             {/* Quick Navigation */}
//                             <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
//                                 <Link
//                                     href="/"
//                                     className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
//                                 >
//                                     <Home className="w-5 h-5" />
//                                     <span>होम</span>
//                                 </Link>
//                                 <span className="text-gray-300">|</span>

//                                 <Link
//                                     href="/web-stories"
//                                     className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
//                                 >
//                                     <BookOpen className="w-5 h-5" />
//                                     <span>वेब स्टोरीज़</span>
//                                 </Link>
//                                 <span className="text-gray-300">|</span>

//                                 <Link
//                                     href="/videos"
//                                     className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
//                                 >
//                                     <Video className="w-5 h-5" />
//                                     <span>वीडियो</span>
//                                 </Link>
//                                 <span className="text-gray-300">|</span>

//                                 <Link
//                                     href="/profile"
//                                     className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
//                                 >
//                                     <User className="w-5 h-5" />
//                                     <span>प्रोफ़ाइल</span>
//                                 </Link>
//                             </div>

//                             {/* Subscribe Button */}
//                             <button
//                                 onClick={handleSubscribe}
//                                 className="bg-red-600 text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-red-700 transition-colors shadow-sm"
//                             >
//                                 Subscribe
//                             </button>

//                             {/* Social Icons */}
//                             <div className="flex gap-2">
//                                 <a
//                                     href="https://www.facebook.com/sadaivsatyamedia"
//                                     className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-blue-600 transition-all"
//                                     aria-label="Facebook"
//                                 >
//                                     <Facebook className="w-4 h-4 text-blue-600" />
//                                 </a>

//                                 <a
//                                     href="https://x.com/SadaivSatyaNews"
//                                     className="w-9 h-9  rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-black transition-all"
//                                     aria-label="Twitter"
//                                 >
//                                     <Twitter className="w-4 h-4 text-black" />
//                                 </a>

//                                 <a
//                                     href="https://www.instagram.com/sadaivsatyamedia/"
//                                     className="w-9 h-9  rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-pink-600 transition-all"
//                                     aria-label="Instagram"
//                                 >
//                                     <Instagram className="w-4 h-4 text-pink-600" />
//                                 </a>

//                                 <a
//                                     href="https://www.linkedin.com/company/107578599/admin/page-posts/published/"
//                                     className="w-9 h-9  rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-blue-700 transition-all"
//                                     aria-label="LinkedIn"
//                                 >
//                                     <Linkedin className="w-4 h-4 text-blue-700" />
//                                 </a>

//                                 <a
//                                     href="https://www.youtube.com/@SadaivSatyaMedia"
//                                     className="w-9 h-9  rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-red-600 transition-all"
//                                     aria-label="YouTube"
//                                 >
//                                     <Youtube className="w-4 h-4 text-red-600" />
//                                 </a>
//                             </div>
//                             <div className="flex gap-4">
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Mobile Header */}
//             <header className="lg:hidden w-full bg-white">
//                 {/* Top Bar */}
//                 <div className="flex items-center justify-between w-full gap-2 pl-[0.5rem]">
//                     {/* <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           >
//             {isMenuOpen ? (
//               <X className="h-5 w-5 text-gray-700" />
//             ) : (
//               <Menu className="h-5 w-5 text-gray-700" />
//             )}
//           </Button> */}

//                     {/* Logo */}
//                     <Link href="/" className="flex-shrink-0">
//                         {OptimizedLogo}
//                     </Link>

//                     <div className="flex items-center gap-2">
//                         {/* <button
//                             style={{ fontSize: "10px" }}
//                             onClick={handlethoughtflow}
//                             className="relative overflow-hidden bg: gradient-to-r  text-black font-semibold rounded-full px-3 py-1 shadow-md shadow-black/10 hover:scale-105 hover:shadow-black/70 transition-all duration-300 whitespace-nowrap">prasarbharati
//                         </button>

//                         <button
//                             style={{ fontSize: "10px" }}
//                             onClick={handlecrime}
//                             className="relative overflow-hidden bg: gradient-to-r text-black font-semibold rounded-full px-3 py-1 shadow-md shadow-black/10 hover:scale-105 hover:shadow-black/70 transition-all duration-300 whitespace-nowrap">DDNEWS-RSS
//                         </button> */}
//                         {/* <Link
//                             style={{ fontSize: "10px" }}
//                             href="https://prasarbharati.gov.in/"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="relative overflow-hidden bg: gradient-to-r text-black font-semibold rounded-full px-3 py-1 border  hover:scale-105  transition-all duration-300 whitespace-nowrap"
//                         >
//                             PrasarBharati
//                         </Link> */}
//                         <Link
//                             href="#"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="relative inline-flex items-center gap-1.5 
//              bg-gradient-to-r from-red-600 to-red-500 
//              text-white font-semibold text-xs 
//              rounded-full px-3 py-1.5 
//              border border-red-400/50 
//              hover:scale-105 hover:shadow-lg hover:shadow-red-500/40 
//              transition-all duration-300 whitespace-nowrap overflow-hidden"
//                         >
//                             {/* Blinking red dot */}
//                             <span className="relative flex h-2.5 w-2.5">
//                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
//                                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border border-red-300"></span>
//                             </span>

//                             LIVE
//                         </Link>
//                         {/* <Link
//                             style={{ fontSize: "10px" }}
//                             href="/ddnews-rssfeed"
//                             className="relative overflow-hidden bg: gradient-to-r text-black font-semibold rounded-full px-3 py-1 border border-black/30  hover:scale-105  transition-all duration-300 whitespace-nowrap"
//                         >
//                             DDNEWS-RSS
//                         </Link> */}
//                         <Link
//                             href="/ddnews-rssfeed"  // yahan actual RSS page ya direct feed URL daal sakte ho jaise "https://ddnews.gov.in/en/feed/"
//                             rel="noopener noreferrer"
//                             className="relative inline-flex items-center gap-1.5 
//              text-black font-semibold text-xs md:text-sm 
//              rounded-full px-4 py-1.5 md:py-2 
//              border border-black-400/60 shadow-sm 
//              hover:scale-105 hover:shadow-xl 
//              active:scale-95 
//              transition-all duration-300 whitespace-nowrap overflow-hidden"
//                         >
//                             {/* Blinking red indicator dot (news alert / RSS live feel) */}
//                             {/* <span className="relative flex h-3 w-3">
//                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80"></span>
//                                 <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 border-2 border-red-300"></span>
//                             </span> */}

//                             RSS FEED
//                         </Link>
//                         {/* <Button
//                             variant="ghost"
//                             size="icon"
//                             onClick={onSearchClick}
//                             className="text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
//                             aria-label="Search"
//                         >
//                             <SearchIcon className="w-7 h-7" />
//                         </Button> */}
//                         {/* <Link
//                             href="/account/profile"
//                             className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
//                         >
//                             <Button
//                                 variant="ghost"
//                                 size="icon"
//                                 className="text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
//                                 aria-label="Search"
//                             >
//                                 <User2 className="w-5 h-5" />
//                             </Button>
//                         </Link> */}
//                         <Link
//                             href="/account/profile"
//                             className="group relative flex items-center justify-center h-10 w-10"
//                             aria-label="Your profile"
//                         >
//                             <User2 className="h-5 w-5 text-gray-500 transition-colors" />
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Mobile Menu - Shown when isMenuOpen is true */}
//                 {isMenuOpen && (
//                     <div className="border-t border-gray-200 bg-white">
//                         <nav className="px-4 py-3 space-y-2">
//                             <Link
//                                 href="/"
//                                 className="flex items-center gap-2 py-2 text-gray-700 hover:text-red-600 transition-colors"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 <Home className="w-5 h-5" />
//                                 <span className="font-medium">होम</span>
//                             </Link>

//                             <Link
//                                 href="/web-stories"
//                                 className="flex items-center gap-2 py-2 text-gray-700 hover:text-red-600 transition-colors"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 <BookOpen className="w-5 h-5" />
//                                 <span className="font-medium">वेब स्टोरीज़</span>
//                             </Link>

//                             <Link
//                                 href="/videos"
//                                 className="flex items-center gap-2 py-2 text-gray-700 hover:text-red-600 transition-colors"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 <Video className="w-5 h-5" />
//                                 <span className="font-medium">वीडियो</span>
//                             </Link>

//                             <Link
//                                 href="/profile"
//                                 className="flex items-center gap-2 py-2 text-gray-700 hover:text-red-600 transition-colors"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 <User className="w-5 h-5" />
//                                 <span className="font-medium">प्रोफ़ाइल</span>
//                             </Link>
//                         </nav>

//                         {/* Mobile Social Icons */}
//                         <div className="flex gap-3 px-4 py-3 border-t border-gray-200">
//                             <a
//                                 href="https://www.facebook.com/sadaivsatyamedia"
//                                 className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-blue-600 transition-all"
//                                 aria-label="Facebook"
//                             >
//                                 <Facebook className="w-4 h-4 text-blue-600" />
//                             </a>

//                             <a
//                                 href="https://x.com/SadaivSatyaNews"
//                                 className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-black transition-all"
//                                 aria-label="Twitter"
//                             >
//                                 <Twitter className="w-4 h-4 text-black" />
//                             </a>

//                             <a
//                                 href="https://www.instagram.com/sadaivsatyamedia/"
//                                 className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-pink-600 transition-all"
//                                 aria-label="Instagram"
//                             >
//                                 <Instagram className="w-4 h-4 text-pink-600" />
//                             </a>

//                             <a
//                                 href="https://www.linkedin.com/company/107578599/admin/page-posts/published/"
//                                 className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-blue-700 transition-all"
//                                 aria-label="LinkedIn"
//                             >
//                                 <Linkedin className="w-4 h-4 text-blue-700" />
//                             </a>

//                             <a
//                                 href="https://www.youtube.com/@SadaivSatyaMedia"
//                                 className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-red-600 transition-all"
//                                 aria-label="YouTube"
//                             >
//                                 <Youtube className="w-4 h-4 text-red-600" />
//                             </a>
//                         </div>
//                     </div>
//                 )}
//             </header>
//         </>
//     );
// }

"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/button";
import {
    BookOpen,
    Facebook,
    Home,
    Instagram,
    Linkedin,
    Menu,
    Search,
    SearchIcon,
    Twitter,
    User,
    User2,
    Video,
    X,
    Youtube,
} from "lucide-react";
import LOGO_WEBP from "@/public/Final Logo.webp";
import { useEffect, useMemo, useState } from "react";

type Props = {
    formattedDate?: string;
    onSearchClick?: () => void;
    onMenuClick?: () => void;
};

export function Header({ formattedDate, onSearchClick, onMenuClick }: Props) {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleSubscribe() {
        router.push("/account/paywall");
    }
    function handlethoughtflow() {
        router.push("https://prasarbharati.gov.in/");
    }
    function handlecrime() {
        router.push("/ddnews-rssfeed");
    }

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

    const OptimizedLogo = useMemo(
        () => (
            <Image
                src={LOGO_WEBP}
                alt="Sadaiv Satya Logo"
                width={128}
                height={84}
                priority
                className="h-[100px] w-auto object-contain"
                unoptimized
                style={{
                    maxWidth: "102px",
                    maxHeight: "80px",
                }}
            />
        ),
        [],
    );

    return (
        <>
            {/* Desktop Header */}
            <header className="hidden lg:block w-full bg-white dark:bg-[#1c1c1c]">
                {/* Top Bar */}
                <div className="border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                        {/* Left Section - Menu, Logo, Date */}
                        <div className="flex items-center gap-6">
                            <div className="block relative w-6 h-6 flex-shrink-0">
                                <Menu className="w-6 h-6 text-gray-700" />
                                <Search className="w-4 h-4 absolute right-0 bottom-0 bg-white rounded-full p-[1px] text-grey-700" />
                            </div>

                            <Link href="/" className="flex-shrink-0">
                                <Image
                                    src={LOGO_WEBP}
                                    alt="Logo"
                                    width={140}
                                    height={80}
                                    className="object-contain h-[80px]"
                                />
                            </Link>

                            {/* Date with Calendar Icon */}
                            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-md border border-gray-200">
                                <span className="text-[15px] font-medium text-gray-700 whitespace-nowrap">
                                    {formattedDate}
                                </span>
                            </div>
                        </div>

                        {/* Right Section - Navigation, Subscribe, Social */}
                        <div className="flex items-center gap-4">
                            {/* Quick Navigation */}
                            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
                                <Link
                                    href="/"
                                    className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
                                >
                                    <Home className="w-5 h-5" />
                                    <span>होम</span>
                                </Link>
                                <span className="text-gray-300">|</span>

                                <Link
                                    href="/web-stories"
                                    className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
                                >
                                    <BookOpen className="w-5 h-5" />
                                    <span>वेब स्टोरीज़</span>
                                </Link>
                                <span className="text-gray-300">|</span>

                                <Link
                                    href="/videos"
                                    className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
                                >
                                    <Video className="w-5 h-5" />
                                    <span>वीडियो</span>
                                </Link>
                                <span className="text-gray-300">|</span>

                                <Link
                                    href="/profile"
                                    className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
                                >
                                    <User className="w-5 h-5" />
                                    <span>प्रोफ़ाइल</span>
                                </Link>
                            </div>

                            {/* Subscribe Button */}
                            <button
                                onClick={handleSubscribe}
                                className="bg-red-600 text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-red-700 transition-colors shadow-sm"
                            >
                                Subscribe
                            </button>

                            {/* Social Icons */}
                            <div className="flex gap-2">
                                <a
                                    href="https://www.facebook.com/sadaivsatyamedia"
                                    className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-blue-600 transition-all"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-4 h-4 text-blue-600" />
                                </a>

                                <a
                                    href="https://x.com/SadaivSatyaNews"
                                    className="w-9 h-9  rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-black transition-all"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-4 h-4 text-black" />
                                </a>

                                <a
                                    href="https://www.instagram.com/sadaivsatyamedia/"
                                    className="w-9 h-9  rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-pink-600 transition-all"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-4 h-4 text-pink-600" />
                                </a>

                                <a
                                    href="https://www.linkedin.com/company/107578599/admin/page-posts/published/"
                                    className="w-9 h-9  rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-blue-700 transition-all"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4 text-blue-700" />
                                </a>

                                <a
                                    href="https://www.youtube.com/@SadaivSatyaMedia"
                                    className="w-9 h-9  rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-red-600 transition-all"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="w-4 h-4 text-red-600" />
                                </a>
                            </div>
                            <div className="flex gap-4"></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="lg:hidden w-full bg-white">
                {/* Top Bar */}
                <div className="flex items-center justify-between w-full gap-2 px-3">
                    {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-700" />
            ) : (
              <Menu className="h-5 w-5 text-gray-700" />
            )}
          </Button> */}

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        {OptimizedLogo}
                    </Link>

                    <div className="flex items-center gap-2">
                        {/* <button
                            style={{ fontSize: "10px" }}
                            onClick={handlethoughtflow}
                            className="relative overflow-hidden bg: gradient-to-r  text-black font-semibold rounded-full px-3 py-1 shadow-md shadow-black/10 hover:scale-105 hover:shadow-black/70 transition-all duration-300 whitespace-nowrap">prasarbharati
                        </button>

                        <button
                            style={{ fontSize: "10px" }}
                            onClick={handlecrime}
                            className="relative overflow-hidden bg: gradient-to-r text-black font-semibold rounded-full px-3 py-1 shadow-md shadow-black/10 hover:scale-105 hover:shadow-black/70 transition-all duration-300 whitespace-nowrap">DDNEWS-RSS
                        </button> */}
                        {/* <Link
                            style={{ fontSize: "10px" }}
                            href="https://prasarbharati.gov.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden bg: gradient-to-r text-black font-semibold rounded-full px-3 py-1 border  hover:scale-105  transition-all duration-300 whitespace-nowrap"
                        >
                            PrasarBharati
                        </Link> */}
                        <Link
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center gap-1.5 
             bg-gradient-to-r from-red-600 to-red-500 
             text-white font-semibold text-xs 
             rounded-full px-3 py-1.5 
             border border-red-400/50 
             hover:scale-105 hover:shadow-lg hover:shadow-red-500/40 
             transition-all duration-300 whitespace-nowrap overflow-hidden"
                        >
                            {/* Blinking red dot */}
                            <span className="relative flex h-[10px] w-[11px]">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 pb-1"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border border-red-300 mb-1"></span>
                            </span>
                            LIVE
                        </Link>
                        {/* <Link
                            style={{ fontSize: "10px" }}
                            href="/ddnews-rssfeed"
                            className="relative overflow-hidden bg: gradient-to-r text-black font-semibold rounded-full px-3 py-1 border border-black/30  hover:scale-105  transition-all duration-300 whitespace-nowrap"
                        >
                            DDNEWS-RSS
                        </Link> */}
                        <Link
                            href="/ddnews-rssfeed" // yahan actual RSS page ya direct feed URL daal sakte ho jaise "https://ddnews.gov.in/en/feed/"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center gap-1.5 
             text-black font-semibold text-xs md:text-sm 
             rounded-full px-4 py-1.5 md:py-2 
             border border-black-400/60 shadow-sm 
             hover:scale-105 hover:shadow-xl 
             active:scale-95 
             transition-all duration-300 whitespace-nowrap overflow-hidden"
                        >
                            {/* Blinking red indicator dot (news alert / RSS live feel) */}
                            {/* <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 border-2 border-red-300"></span>
                            </span> */}
                            RSS FEED
                        </Link>
                        {/* <Button
                            variant="ghost"
                            size="icon"
                            onClick={onSearchClick}
                            className="text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
                            aria-label="Search"
                        >
                            <SearchIcon className="w-7 h-7" />
                        </Button> */}
                        {/* <Link
                            href="/account/profile"
                            className="flex items-center gap-1.5 hover:text-red-600 transition-colors"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
                                aria-label="Search"
                            >
                                <User2 className="w-5 h-5" />
                            </Button>
                        </Link> */}
                        <Link
                            href="/account/profile"
                            className="group relative flex items-center justify-center h-10 w-10"
                            aria-label="Your profile"
                        >
                            <User2 className="h-5 w-5 text-gray-500 transition-colors" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu - Shown when isMenuOpen is true */}
                {isMenuOpen && (
                    <div className="border-t border-gray-200 bg-white">
                        <nav className="px-4 py-3 space-y-2">
                            <Link
                                href="/"
                                className="flex items-center gap-2 py-2 text-gray-700 hover:text-red-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Home className="w-5 h-5" />
                                <span className="font-medium">होम</span>
                            </Link>

                            <Link
                                href="/web-stories"
                                className="flex items-center gap-2 py-2 text-gray-700 hover:text-red-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <BookOpen className="w-5 h-5" />
                                <span className="font-medium">वेब स्टोरीज़</span>
                            </Link>

                            <Link
                                href="/videos"
                                className="flex items-center gap-2 py-2 text-gray-700 hover:text-red-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Video className="w-5 h-5" />
                                <span className="font-medium">वीडियो</span>
                            </Link>

                            <Link
                                href="/profile"
                                className="flex items-center gap-2 py-2 text-gray-700 hover:text-red-600 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <User className="w-5 h-5" />
                                <span className="font-medium">प्रोफ़ाइल</span>
                            </Link>
                        </nav>

                        {/* Mobile Social Icons */}
                        <div className="flex gap-3 px-4 py-3 border-t border-gray-200">
                            <a
                                href="https://www.facebook.com/sadaivsatyamedia"
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-blue-600 transition-all"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4 text-blue-600" />
                            </a>

                            <a
                                href="https://x.com/SadaivSatyaNews"
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-black transition-all"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-4 h-4 text-black" />
                            </a>

                            <a
                                href="https://www.instagram.com/sadaivsatyamedia/"
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-pink-600 transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4 text-pink-600" />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/107578599/admin/page-posts/published/"
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-blue-700 transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4 text-blue-700" />
                            </a>

                            <a
                                href="https://www.youtube.com/@SadaivSatyaMedia"
                                className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-red-600 transition-all"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-4 h-4 text-red-600" />
                            </a>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}