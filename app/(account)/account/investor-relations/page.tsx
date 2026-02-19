// export default function Page() {
//     return (
//         <div className="space-y-10">

//             <h1 className="text-2xl font-bold text-red-600 text-center">
//                 Investor Relations – Sadaiv Satya Media
//             </h1>

//             {/* Overview */}
//             <section>
//                 <h2 className="text-xl font-semibold text-red-600 mb-2">
//                     कंपनी का परिचय
//                 </h2>
//                 <p>
//                     सदैव सत्य मीडिया भारत का प्रमुख हिंदी न्यूज़ पोर्टल है। हमारा लक्ष्य है
//                     विश्वसनीय और त्वरित समाचार, डिजिटल मीडिया और समाज सेवा में उत्कृष्टता
//                     प्रदान करना।
//                 </p>
//                 <p className="mt-1">
//                     <strong>मुख्यालय:</strong> भोपाल, मध्य प्रदेश, भारत
//                 </p>
//             </section>

//             {/* Company Info */}
//             <section>
//                 <h2 className="text-xl font-semibold text-red-600 mb-2">
//                     कंपनी जानकारी
//                 </h2>
//                 <ul className="list-disc pl-5 space-y-1">
//                     <li>पंजीकृत कंपनी: Sadaiv Satya Media and Broadcasting</li>
//                     <li>स्थापना: 2024</li>
//                     <li>मुख्य व्यक्ति: CEO – Mr. Divendu Prakash Verma</li>
//                 </ul>
//             </section>

//             {/* Board */}
//             <section>
//                 <h2 className="text-xl font-semibold text-red-600 mb-4">
//                     Board of Directors
//                 </h2>

//                 <div className="border p-2 bg-gray-50 dark:bg-zinc-800">
//                     <h3 className="text-lg font-bold">
//                         Mr. Divendu Prakash Verma
//                     </h3>
//                     <p className="text-sm font-medium">
//                         Chairman & Whole-Time Director
//                     </p>

//                     <p className="mt-3">
//                         Mr. Divendu Prakash Verma is the Chairman & Whole-Time Director of
//                         Sadaiv Satya Media and Broadcasting Private Limited. As a founding
//                         leader of the organization, he plays a pivotal role in defining the
//                         company’s long-term vision, strategic direction, and corporate
//                         governance framework.
//                     </p>

//                     <p className="mt-2">
//                         With a strong academic background in Law (LL.B) from RGPV University,
//                         Bhopal, Mr. Verma brings valuable legal insight into regulatory
//                         compliance, corporate structuring, policy formulation, and ethical
//                         media practices.
//                     </p>

//                     <p className="mt-2">
//                         Under his leadership, Sadaiv Satya Media has focused on delivering
//                         credible Hindi news content while strengthening its digital presence
//                         and media operations.
//                     </p>

//                     <p className="mt-2 font-medium">
//                         Other Directorships:
//                     </p>
//                     <ul className="list-disc pl-5 space-y-1">
//                         <li>Payzon India Pvt. Ltd.</li>
//                         <li>Sadaiv Yuva Foundation</li>
//                         <li>Payzon Shoppy</li>
//                     </ul>
//                 </div>
//             </section>

//             {/* Policies */}
//             <section>
//                 <h2 className="text-xl font-semibold text-red-600 mb-2">
//                     नीतियाँ
//                 </h2>
//                 <ul className="space-y-1">
//                     <li><a className="text-red-600 underline" href="/privacy-policy">गोपनीयता नीति</a></li>
//                     <li><a className="text-red-600 underline" href="/editorial-policy">संपादकीय नीति</a></li>
//                     <li><a className="text-red-600 underline" href="/partnership-policy">साझेदारी नीति</a></li>
//                 </ul>
//             </section>

//             {/* Reports */}
//             <section>
//                 <h2 className="text-xl font-semibold text-red-600 mb-2">
//                     मीडिया और रिपोर्ट
//                 </h2>
//                 <a className="block text-red-600 underline" href="/downloads/annual-report-2024.pdf">
//                     वार्षिक रिपोर्ट 2024
//                 </a>
//                 <a className="block text-red-600 underline" href="/downloads/press-release-2025.pdf">
//                     प्रेस रिलीज़ 2025
//                 </a>
//             </section>

//             {/* Contact */}
//             <section>
//                 <h2 className="text-xl font-semibold text-red-600 mb-2">
//                     संपर्क करें
//                 </h2>
//                 <p>पता: B1, Raisen Rd, Manak Vihar, Patel Nagar, Madhya Pradesh, 462022</p>
//                 <p>फोन: 093034 30351</p>
//                 <p>
//                     ईमेल:{" "}
//                     <a className="text-red-600 underline" href="mailto:sadaivsatyamedia@gmail.com">
//                         sadaivsatyamedia@gmail.com
//                     </a>
//                 </p>
//                 <p>
//                     <a className="text-red-600 underline" href="/contact">
//                         Investor Query – Contact Page
//                     </a>
//                 </p>
//             </section>

//         </div>
//     );
// }



"use client";

// ✅ App Router compatible — no next/head
// ✅ CEO image: place file at /public/boss2.png
// ✅ ALL layout & responsive = Tailwind classes only
// ✅ Inline style = ONLY custom rgba/gradient colors Tailwind can't express

import Link from "next/link";
import Image from "next/image";

const infoItems = [
    { label: "Registered Name", value: "Sadaiv Satya Media and Broadcasting" },
    { label: "स्थापना वर्ष", value: "2024" },
    { label: "मुख्य कार्यकारी", value: "Mr. Divendu Prakash Verma" },
    { label: "उद्योग क्षेत्र", value: "Digital News Media" },
];

const directorships = [
    "Payzon India Pvt. Ltd.",
    "Sadaiv Yuva Foundation",
    "Payzon Shoppy",
];

const policies = [
    { label: "गोपनीयता नीति", href: "/privacy-policy" },
    { label: "संपादकीय नीति", href: "/editorial-policy" },
    { label: "साझेदारी नीति", href: "/partnership-policy" },
];

const reports = [
    { icon: "📄", name: "वार्षिक रिपोर्ट", type: "Annual Report · 2024 · PDF", href: "/downloads/annual-report-2024.pdf" },
    { icon: "📰", name: "प्रेस रिलीज़", type: "Press Release · 2025 · PDF", href: "/downloads/press-release-2025.pdf" },
];

const values = [
    { icon: "⚖️", title: "निष्पक्षता", desc: "Unbiased, fact-based reporting" },
    { icon: "🔒", title: "विश्वसनीयता", desc: "Credible & verified news" },
    { icon: "⚡", title: "त्वरित", desc: "Real-time digital coverage" },
    { icon: "🌐", title: "डिजिटल", desc: "Pan-India digital reach" },
];

export default function InvestorRelationsPage() {
    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Noto+Sans+Devanagari:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;1,400&display=swap');

        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes irpulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        .ir-font      { font-family:'Noto Sans Devanagari',sans-serif; }
        .ir-serif     { font-family:'Playfair Display',serif; }
        .ir-italic    { font-family:'Cormorant Garamond',serif; font-style:italic; }

        .ir-a0 { animation: fadeUp .6s ease both; }
        .ir-a1 { animation: fadeUp .6s .10s ease both; }
        .ir-a2 { animation: fadeUp .6s .20s ease both; }
        .ir-a3 { animation: fadeUp .6s .30s ease both; }

        .ir-pulse-dot { animation: irpulse 2s infinite; }

        .ir-policy-link { transition: color .2s, padding-left .2s; }
        .ir-policy-link:hover { color: #FAF6F0 !important; padding-left: 6px !important; }

        .ir-report-link { transition: background .2s, border-color .2s; }
        .ir-report-link:hover { background: rgba(196,30,58,0.16) !important; border-color: rgba(196,30,58,0.35) !important; }

        .ir-cta-link { transition: background .2s, transform .15s; }
        .ir-cta-link:hover { background: #E8374F !important; transform: translateY(-2px); }

        .ir-value-card { transition: border-color .2s; }
        .ir-value-card:hover { border-color: rgba(196,30,58,0.3) !important; }
      `}</style>

            <div
                className="ir-font min-h-screen overflow-x-hidden"
                style={{ backgroundColor: "#0F0A0A", color: "#FAF6F0" }}
            >

                {/* ══════════════ MASTHEAD ══════════════ */}
                <header
                    className="ir-a0 relative overflow-hidden text-center px-4 sm:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12"
                    style={{
                        background: "linear-gradient(135deg,#0F0A0A 0%,#1a0808 40%,#0F0A0A 100%)",
                        borderBottom: "1px solid rgba(201,168,76,0.3)",
                    }}
                >
                    {/* Gradient top bar */}
                    <div
                        className="absolute top-0 inset-x-0 h-[3px]"
                        style={{ background: "linear-gradient(90deg,#C41E3A 0%,#C9A84C 50%,#C41E3A 100%)" }}
                    />

                    {/* Glow */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse 80% 60% at 50% 0%,rgba(196,30,58,0.18) 0%,transparent 70%)," +
                                "radial-gradient(ellipse 40% 40% at 80% 80%,rgba(201,168,76,0.08) 0%,transparent 60%)",
                        }}
                    />

                    {/* Ornament row */}
                    <div className="relative z-10 flex items-center justify-center gap-4 mb-5">
                        <div className="flex-1 max-w-[100px] h-px" style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }} />
                        <div className="w-2 h-2 rotate-45 flex-shrink-0" style={{ background: "#C9A84C" }} />
                        <div className="flex-1 max-w-[100px] h-px" style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }} />
                    </div>

                    <p className="relative z-10 font-light uppercase tracking-[0.14em] mb-2 text-[0.72rem] sm:text-sm"
                        style={{ color: "#C9A84C" }}>
                        सदैव सत्य मीडिया एंड ब्रॉडकास्टिंग
                    </p>

                    <h1 className="ir-serif relative z-10 font-black leading-tight mb-2 text-4xl sm:text-5xl lg:text-6xl"
                        style={{ color: "#FAF6F0" }}>
                        Investor <span style={{ color: "#C41E3A" }}>Relations</span>
                    </h1>

                    <p className="ir-italic relative z-10 tracking-wide mb-6 text-base sm:text-lg"
                        style={{ color: "#7A6B6B" }}>
                        Transparency · Credibility · Growth
                    </p>

                    <span
                        className="relative z-10 inline-flex items-center gap-2 text-[0.7rem] sm:text-[0.78rem] font-medium uppercase tracking-[0.1em] px-4 py-1.5"
                        style={{ background: "rgba(196,30,58,0.12)", border: "1px solid rgba(196,30,58,0.3)", color: "#E8374F" }}
                    >
                        <span className="ir-pulse-dot text-[0.4rem]" style={{ color: "#C41E3A" }}>●</span>
                        Incorporated 2024 &nbsp;·&nbsp; Bhopal, Madhya Pradesh
                    </span>
                </header>

                {/* ══════════════ MAIN CONTENT ══════════════ */}
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

                    {/* ─── TOP ROW: Board (left) | Overview (right) ─── */}
                    {/* mobile: 1-col  |  lg+: 2-col */}
                    <div className="ir-a1 grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-10 mb-12 sm:mb-16">

                        {/* LEFT — Board of Directors */}
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="ir-serif font-bold whitespace-nowrap text-lg sm:text-xl" style={{ color: "#FAF6F0" }}>
                                    Board of Directors
                                </span>
                                <div className="flex-1 h-px min-w-0" style={{ background: "linear-gradient(90deg,#C41E3A,transparent)" }} />
                            </div>

                            <div className="overflow-hidden" style={{ background: "#1A1212", border: "1px solid rgba(201,168,76,0.12)" }}>
                                {/* Accent bar */}
                                <div className="h-[3px]" style={{ background: "linear-gradient(90deg,#C41E3A 0%,#C9A84C 100%)" }} />

                                {/* Hero banner — responsive height */}
                                <div className="relative w-full h-48 sm:h-56 lg:h-52 xl:h-60 overflow-hidden">
                                    <Image
                                        src="/boss2.png"
                                        alt="Mr. Divendu Prakash Verma"
                                        fill
                                        priority
                                        className="object-cover object-top"
                                    />
                                    <div className="absolute inset-0 z-10" style={{
                                        background: "linear-gradient(to bottom,rgba(15,10,10,0) 20%,rgba(15,10,10,0.55) 60%,#1A1212 100%)",
                                    }} />
                                    {/* Name overlay */}
                                    <div className="absolute bottom-4 left-4 sm:left-5 z-20">
                                        <p className="ir-serif font-bold leading-tight text-lg sm:text-xl"
                                            style={{ color: "#FAF6F0", textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}>
                                            Mr. Divendu Prakash Verma
                                        </p>
                                        <p className="mt-0.5 font-medium uppercase tracking-[0.1em] text-[0.62rem] sm:text-[0.72rem]"
                                            style={{ color: "#C9A84C", textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>
                                            Chairman &amp; Whole-Time Director
                                        </p>
                                    </div>
                                </div>

                                {/* Circular thumbnail + meta — wraps nicely on small screens */}
                                <div
                                    className="flex flex-wrap items-start gap-4 px-4 sm:px-5 py-4"
                                    style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}
                                >
                                    <div className="relative flex-shrink-0 w-[68px] h-[68px] sm:w-[76px] sm:h-[76px]">
                                        <div className="absolute rounded-full"
                                            style={{ inset: -3, background: "linear-gradient(135deg,#C41E3A 0%,#C9A84C 50%,#C41E3A 100%)" }} />
                                        <div className="absolute rounded-full overflow-hidden z-10"
                                            style={{ inset: 3, background: "#1A1212" }}>
                                            <Image src="/boss2.png" alt="CEO" width={70} height={70} className="object-cover object-top w-full h-full" />
                                        </div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <p className="ir-serif font-bold text-base sm:text-lg leading-snug" style={{ color: "#FAF6F0" }}>
                                            Mr. Divendu Prakash Verma
                                        </p>
                                        <p className="mt-1 font-medium uppercase tracking-[0.08em] text-[0.66rem] sm:text-[0.75rem]"
                                            style={{ color: "#C9A84C" }}>
                                            Chairman &amp; Whole-Time Director
                                        </p>
                                        <span className="inline-block mt-2 px-2.5 py-0.5 text-[0.68rem]"
                                            style={{ background: "rgba(196,30,58,0.12)", border: "1px solid rgba(196,30,58,0.25)", color: "#E8374F" }}>
                                            LL.B — RGPV University, Bhopal
                                        </span>
                                    </div>
                                </div>

                                {/* Bio */}
                                <div className="px-4 sm:px-5 py-4 sm:py-5">
                                    <p className="leading-[1.85] mb-3 text-sm sm:text-[0.92rem]" style={{ color: "rgba(250,246,240,0.78)" }}>
                                        Mr. Divendu Prakash Verma is the Chairman &amp; Whole-Time Director of Sadaiv Satya Media
                                        and Broadcasting Pvt. Ltd. He defines the company&apos;s long-term vision, strategic
                                        direction, and corporate governance framework.
                                    </p>
                                    <p className="leading-[1.85] mb-3 text-sm sm:text-[0.92rem]" style={{ color: "rgba(250,246,240,0.78)" }}>
                                        With a background in Law (LL.B) from RGPV University, Bhopal, he brings legal insight
                                        into regulatory compliance, corporate structuring, and ethical media practices.
                                    </p>
                                    <p className="leading-[1.85] text-sm sm:text-[0.92rem]" style={{ color: "rgba(250,246,240,0.78)" }}>
                                        Under his leadership, Sadaiv Satya Media focuses on delivering credible Hindi news while
                                        strengthening its digital presence and media operations.
                                    </p>

                                    <p className="mt-5 mb-2 text-[0.67rem] font-semibold uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>
                                        Other Directorships
                                    </p>
                                    {directorships.map((d) => (
                                        <div key={d} className="flex items-center gap-2 mb-1 text-[0.85rem] sm:text-sm" style={{ color: "#FAF6F0" }}>
                                            <span className="flex-shrink-0 text-[0.72rem]" style={{ color: "#C41E3A" }}>→</span>
                                            {d}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* RIGHT — कंपनी का परिचय */}
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="ir-serif font-bold whitespace-nowrap text-lg sm:text-xl" style={{ color: "#FAF6F0" }}>
                                    कंपनी का परिचय
                                </span>
                                <div className="flex-1 h-px min-w-0" style={{ background: "linear-gradient(90deg,#C41E3A,transparent)" }} />
                            </div>

                            <div className="flex flex-col gap-4">
                                {/* Overview */}
                                <div className="p-5 sm:p-6" style={{
                                    background: "linear-gradient(135deg,rgba(196,30,58,0.08) 0%,transparent 100%)",
                                    border: "1px solid rgba(201,168,76,0.15)",
                                    borderLeft: "3px solid #C41E3A",
                                }}>
                                    <p className="leading-[1.9] text-sm sm:text-[0.97rem]" style={{ color: "rgba(250,246,240,0.85)" }}>
                                        सदैव सत्य मीडिया भारत का प्रमुख हिंदी न्यूज़ पोर्टल है। हमारा लक्ष्य है
                                        विश्वसनीय और त्वरित समाचार, डिजिटल मीडिया और समाज सेवा में उत्कृष्टता प्रदान करना।
                                    </p>
                                    <div className="flex items-center gap-2 mt-4 pt-4 text-sm font-medium"
                                        style={{ borderTop: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C" }}>
                                        <span>🏢</span>
                                        <span>मुख्यालय: भोपाल, मध्य प्रदेश, भारत</span>
                                    </div>
                                </div>

                                {/* Vision */}
                                <div className="p-5 sm:p-6" style={{
                                    background: "linear-gradient(135deg,rgba(201,168,76,0.06) 0%,transparent 100%)",
                                    border: "1px solid rgba(201,168,76,0.2)",
                                    borderLeft: "3px solid #C9A84C",
                                }}>
                                    <p className="text-[0.67rem] font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: "#C9A84C" }}>
                                        हमारा दृष्टिकोण
                                    </p>
                                    <p className="leading-[1.9] text-sm sm:text-[0.97rem]" style={{ color: "rgba(250,246,240,0.82)" }}>
                                        हम सत्य, निष्पक्षता और जन-हित को सर्वोच्च प्राथमिकता देते हुए भारत के हर कोने तक
                                        विश्वसनीय समाचार पहुँचाने के लिए प्रतिबद्ध हैं।
                                    </p>
                                </div>

                                {/* Values — always 2×2 */}
                                <div className="grid grid-cols-2 gap-3">
                                    {values.map((v) => (
                                        <div
                                            key={v.title}
                                            className="ir-value-card flex flex-col gap-1.5 p-3.5 sm:p-4"
                                            style={{ background: "#1A1212", border: "1px solid rgba(201,168,76,0.1)" }}
                                        >
                                            <span className="text-xl">{v.icon}</span>
                                            <span className="ir-serif font-bold text-sm sm:text-[0.95rem]" style={{ color: "#FAF6F0" }}>{v.title}</span>
                                            <span className="text-[0.73rem] sm:text-[0.78rem]" style={{ color: "#7A6B6B" }}>{v.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* ─── COMPANY INFO — 1→2→4 col ─── */}
                    <section className="ir-a2 mb-12 sm:mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="ir-serif font-bold whitespace-nowrap text-lg sm:text-xl" style={{ color: "#FAF6F0" }}>
                                कंपनी जानकारी
                            </span>
                            <div className="flex-1 h-px min-w-0" style={{ background: "linear-gradient(90deg,#C41E3A,transparent)" }} />
                        </div>

                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
                            style={{ background: "rgba(201,168,76,0.3)", border: "1px solid rgba(201,168,76,0.3)" }}
                        >
                            {infoItems.map((item) => (
                                <div key={item.label} className="px-4 sm:px-5 py-4 sm:py-5" style={{ background: "#1A1212" }}>
                                    <p className="text-[0.64rem] sm:text-[0.7rem] font-semibold uppercase tracking-[0.15em] mb-1.5"
                                        style={{ color: "#C41E3A" }}>
                                        {item.label}
                                    </p>
                                    <p className="font-medium text-sm sm:text-base" style={{ color: "#FAF6F0" }}>
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ─── BOTTOM ROW: Policies | Reports | Contact ─── */}
                    {/* mobile: 1-col | sm: 2-col | lg: 3-col */}
                    <div className="ir-a3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

                        {/* Policies */}
                        <div className="p-4 sm:p-5" style={{ background: "#1A1212", border: "1px solid rgba(201,168,76,0.3)" }}>
                            <div className="ir-serif flex items-center gap-2 font-bold text-[0.93rem] mb-4" style={{ color: "#FAF6F0" }}>
                                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#C41E3A" }} />
                                नीतियाँ / Policies
                            </div>
                            {policies.map((p, i) => (
                                <Link
                                    key={p.href}
                                    href={p.href}
                                    className="ir-policy-link flex items-center gap-2 py-2.5 text-sm no-underline"
                                    style={{
                                        color: "rgba(250,246,240,0.8)",
                                        borderBottom: i < policies.length - 1 ? "1px solid rgba(201,168,76,0.08)" : "none",
                                    }}
                                >
                                    <span className="flex-shrink-0 text-[0.68rem]" style={{ color: "#C41E3A" }}>↗</span>
                                    {p.label}
                                </Link>
                            ))}
                        </div>

                        {/* Reports */}
                        <div className="p-4 sm:p-5" style={{ background: "#1A1212", border: "1px solid rgba(201,168,76,0.3)" }}>
                            <div className="ir-serif flex items-center gap-2 font-bold text-[0.93rem] mb-4" style={{ color: "#FAF6F0" }}>
                                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#C41E3A" }} />
                                मीडिया और रिपोर्ट
                            </div>
                            {reports.map((r) => (
                                <a
                                    key={r.href}
                                    href={r.href}
                                    className="ir-report-link flex items-center gap-3 p-3 mb-2 no-underline"
                                    style={{
                                        background: "rgba(196,30,58,0.06)",
                                        border: "1px solid rgba(196,30,58,0.12)",
                                        color: "#FAF6F0",
                                    }}
                                >
                                    <div className="w-9 h-9 flex items-center justify-center text-base flex-shrink-0"
                                        style={{ background: "rgba(196,30,58,0.15)", border: "1px solid rgba(196,30,58,0.25)" }}>
                                        {r.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">{r.name}</p>
                                        <p className="text-[0.69rem]" style={{ color: "#7A6B6B" }}>{r.type}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Contact — full row on sm, normal on lg */}
                        <div
                            className="p-4 sm:p-5 sm:col-span-2 lg:col-span-1"
                            style={{ background: "#1A1212", border: "1px solid rgba(201,168,76,0.3)" }}
                        >
                            <div className="ir-serif flex items-center gap-2 font-bold text-[0.93rem] mb-4" style={{ color: "#FAF6F0" }}>
                                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#C41E3A" }} />
                                संपर्क करें
                            </div>

                            <div className="flex flex-col gap-3">
                                {([
                                    { icon: "📍", body: <span>B1, Raisen Rd, Manak Vihar, Patel Nagar,<br />Madhya Pradesh – 462022</span> },
                                    { icon: "📞", body: <a href="tel:09303430351" className="no-underline" style={{ color: "#E8374F" }}>093034 30351</a> },
                                    { icon: "✉️", body: <a href="mailto:sadaivsatyamedia@gmail.com" className="break-all no-underline" style={{ color: "#E8374F" }}>sadaivsatyamedia@gmail.com</a> },
                                ] as const).map((row, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center text-xs mt-0.5"
                                            style={{ background: "rgba(196,30,58,0.1)", border: "1px solid rgba(196,30,58,0.2)" }}>
                                            {row.icon}
                                        </div>
                                        <span className="text-sm leading-relaxed" style={{ color: "rgba(250,246,240,0.8)" }}>
                                            {row.body}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/contact-us"
                                className="ir-cta-link block text-center mt-5 px-5 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.08em] no-underline"
                                style={{ background: "#C41E3A", color: "#FAF6F0" }}
                            >
                                Investor Query →
                            </Link>
                        </div>

                    </div>
                </div>

                {/* ══════════════ FOOTER ══════════════ */}
                <footer
                    className="text-center px-4 py-5 text-[0.72rem] sm:text-[0.76rem] tracking-[0.07em]"
                    style={{ borderTop: "1px solid rgba(201,168,76,0.3)", color: "#7A6B6B" }}
                >
                    © 2024{" "}
                    <span style={{ color: "#C9A84C" }}>Sadaiv Satya Media and Broadcasting Pvt. Ltd.</span>
                    {" "}· All Rights Reserved · भोपाल, मध्य प्रदेश
                </footer>

            </div>
        </>
    );
}