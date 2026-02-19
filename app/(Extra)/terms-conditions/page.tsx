// export default function TermsConditions() {
//     return (
//         <main className="min-h-screen bg-white dark:bg-black pb-12">
//             <div className="max-w-5xl mx-auto">

//                 <h1 className="text-3xl font-bold mb-6">
//                     Terms & Conditions
//                 </h1>

//                 <p className="mb-4 text-gray-700 dark:text-gray-300">
//                     By accessing or using <strong>sadaivsatya.com</strong>, you agree to
//                     comply with these Terms and Conditions.
//                 </p>

//                 <h2 className="text-xl font-semibold mt-6 mb-2">
//                     Use of Content
//                 </h2>
//                 <p className="text-gray-700 dark:text-gray-300">
//                     All content is provided for informational purposes only. Unauthorized
//                     copying, redistribution, or commercial use is strictly prohibited.
//                 </p>

//                 <h2 className="text-xl font-semibold mt-6 mb-2">
//                     Intellectual Property
//                 </h2>
//                 <p className="text-gray-700 dark:text-gray-300">
//                     All text, images, logos, and media belong to Sadaiv Satya Media unless
//                     otherwise stated.
//                 </p>

//                 <h2 className="text-xl font-semibold mt-6 mb-2">
//                     External Links
//                 </h2>
//                 <p className="text-gray-700 dark:text-gray-300">
//                     We are not responsible for the content, policies, or practices of
//                     third-party websites.
//                 </p>

//                 <h2 className="text-xl font-semibold mt-6 mb-2">
//                     Limitation of Liability
//                 </h2>
//                 <p className="text-gray-700 dark:text-gray-300">
//                     We are not liable for any losses, damages, or issues arising from
//                     reliance on published information.
//                 </p>

//                 <h2 className="text-xl font-semibold mt-6 mb-2">
//                     Changes to Terms
//                 </h2>
//                 <p className="text-gray-700 dark:text-gray-300">
//                     We may update these terms at any time without prior notice.
//                 </p>

//                 <p className="mt-8 text-sm text-gray-500">
//                     Last Updated: {new Date().toLocaleDateString()}
//                 </p>

//             </div>
//         </main>
//     );
// }


"use client";

export default function TermsConditions() {
    const lastUpdated = new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const sections = [
        {
            number: "01",
            icon: "📋",
            title: "Use of Content",
            gold: false,
            content:
                "All content published on sadaivsatya.com is provided for informational purposes only. Unauthorized copying, redistribution, scraping, or commercial use of any content — including text, images, videos, or data — is strictly prohibited without prior written permission from Sadaiv Satya Media and Broadcasting Pvt. Ltd.",
        },
        {
            number: "02",
            icon: "©️",
            title: "Intellectual Property",
            gold: true,
            content:
                "All text, images, logos, graphics, audio, video, and other media published on this website are the exclusive property of Sadaiv Satya Media and Broadcasting Pvt. Ltd., unless otherwise stated. Any third-party content is used under respective licenses or permissions.",
        },
        {
            number: "03",
            icon: "🔗",
            title: "External Links",
            gold: false,
            content:
                "Our website may contain hyperlinks to third-party websites for your convenience and reference. We are not responsible for the content, accuracy, policies, or practices of any external websites. Inclusion of any link does not constitute an endorsement.",
        },
        {
            number: "04",
            icon: "⚖️",
            title: "Limitation of Liability",
            gold: true,
            content:
                "Sadaiv Satya Media shall not be held liable for any direct, indirect, incidental, consequential, or punitive losses, damages, or claims arising from your reliance on information published on this website. All content is used at your own risk.",
        },
        {
            number: "05",
            icon: "🔄",
            title: "Changes to Terms",
            gold: false,
            content:
                "We reserve the right to modify, update, or replace these Terms and Conditions at any time without prior notice. Changes become effective immediately upon publication on this page. Your continued use of the site constitutes acceptance of the revised terms.",
        },
        {
            number: "06",
            icon: "🛡️",
            title: "Governing Law",
            gold: true,
            content:
                "These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Bhopal, Madhya Pradesh.",
        },
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Noto+Sans+Devanagari:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;1,400&display=swap');

        @keyframes tcFadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes tcPulse  { 0%,100%{opacity:1} 50%{opacity:0.2} }

        .tc-font    { font-family:'Noto Sans Devanagari',sans-serif; }
        .tc-serif   { font-family:'Playfair Display',serif; }
        .tc-italic  { font-family:'Cormorant Garamond',serif; font-style:italic; }

        .tc-a0  { animation: tcFadeUp .6s ease both; }
        .tc-a1  { animation: tcFadeUp .6s .10s ease both; }
        .tc-a2  { animation: tcFadeUp .6s .20s ease both; }
        .tc-a3  { animation: tcFadeUp .6s .30s ease both; }
        .tc-dot { animation: tcPulse 2s infinite; }

        .tc-card { transition: border-color .25s, transform .25s, box-shadow .25s; }
        .tc-card:hover {
          border-color: rgba(196,30,58,0.4) !important;
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(196,30,58,0.1);
        }

        .tc-cta { transition: background .2s, transform .15s; }
        .tc-cta:hover { background: #E8374F !important; transform: translateY(-2px); }
      `}</style>

            <div
                className="tc-font min-h-screen overflow-x-hidden"
                style={{ backgroundColor: "#0F0A0A", color: "#FAF6F0" }}
            >

                {/* ══════════════ MASTHEAD ══════════════ */}
                <header
                    className="tc-a0 relative overflow-hidden text-center px-4 sm:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12"
                    style={{
                        background: "linear-gradient(135deg,#0F0A0A 0%,#1a0808 45%,#0F0A0A 100%)",
                        borderBottom: "1px solid rgba(201,168,76,0.3)",
                    }}
                >
                    {/* 3px gradient top bar */}
                    <div
                        className="absolute top-0 inset-x-0 h-[3px]"
                        style={{ background: "linear-gradient(90deg,#C41E3A 0%,#C9A84C 50%,#C41E3A 100%)" }}
                    />

                    {/* Glow */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse 80% 60% at 50% 0%,rgba(196,30,58,0.16) 0%,transparent 70%)," +
                                "radial-gradient(ellipse 35% 50% at 85% 85%,rgba(201,168,76,0.07) 0%,transparent 60%)",
                        }}
                    />

                    {/* Ornament */}
                    <div className="relative z-10 flex items-center justify-center gap-4 mb-5">
                        <div
                            className="flex-1 max-w-[100px] h-px"
                            style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }}
                        />
                        <div className="w-2 h-2 rotate-45 flex-shrink-0" style={{ background: "#C9A84C" }} />
                        <div
                            className="flex-1 max-w-[100px] h-px"
                            style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }}
                        />
                    </div>

                    <p
                        className="relative z-10 font-light uppercase tracking-[0.14em] mb-2 text-[0.72rem] sm:text-sm"
                        style={{ color: "#C9A84C" }}
                    >
                        सदैव सत्य मीडिया एंड ब्रॉडकास्टिंग
                    </p>

                    <h1
                        className="tc-serif relative z-10 font-black leading-tight mb-2 text-4xl sm:text-5xl lg:text-6xl"
                        style={{ color: "#FAF6F0" }}
                    >
                        उपयोग की शर्तें /{" "}
                        <span style={{ color: "#C41E3A" }}>Terms</span>
                    </h1>

                    <p
                        className="tc-italic relative z-10 tracking-wide mb-6 text-base sm:text-lg"
                        style={{ color: "#7A6B6B" }}
                    >
                        Usage · Rights · Responsibility
                    </p>

                    {/* Badges */}
                    <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
                        <span
                            className="inline-flex items-center gap-2 text-[0.7rem] sm:text-[0.78rem] font-medium uppercase tracking-[0.1em] px-4 py-1.5"
                            style={{ background: "rgba(196,30,58,0.1)", border: "1px solid rgba(196,30,58,0.3)", color: "#E8374F" }}
                        >
                            <span className="tc-dot text-[0.4rem]" style={{ color: "#C41E3A" }}>●</span>
                            sadaivsatya.com
                        </span>
                        <span
                            className="inline-flex items-center text-[0.7rem] sm:text-[0.78rem] font-medium tracking-[0.06em] px-4 py-1.5"
                            style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C" }}
                        >
                            Last Updated: {lastUpdated}
                        </span>
                    </div>
                </header>

                {/* ══════════════ CONTENT ══════════════ */}
                <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

                    {/* ── Intro card ── */}
                    <div
                        className="tc-a1 p-5 sm:p-7 mb-10"
                        style={{
                            background: "linear-gradient(135deg,rgba(196,30,58,0.07) 0%,transparent 100%)",
                            border: "1px solid rgba(201,168,76,0.15)",
                            borderLeft: "3px solid #C41E3A",
                        }}
                    >
                        <p
                            className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] mb-3"
                            style={{ color: "#C41E3A" }}
                        >
                            Agreement Notice
                        </p>
                        <p
                            className="leading-[1.9] mb-3 text-sm sm:text-base"
                            style={{ color: "rgba(250,246,240,0.82)" }}
                        >
                            By accessing or using{" "}
                            <strong style={{ color: "#FAF6F0" }}>sadaivsatya.com</strong>, you
                            agree to comply with and be bound by these Terms and Conditions. If
                            you do not agree to these terms, please discontinue use of this
                            website immediately.
                        </p>
                        <p
                            className="leading-[1.9] text-sm sm:text-base"
                            style={{ color: "rgba(250,246,240,0.82)" }}
                        >
                            These Terms apply to all visitors, users, and others who access or
                            use any services offered by{" "}
                            <strong style={{ color: "#FAF6F0" }}>
                                Sadaiv Satya Media and Broadcasting Pvt. Ltd.
                            </strong>
                        </p>
                    </div>

                    {/* ── Section cards — 2-col desktop, 1-col mobile ── */}
                    <div className="tc-a2 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {sections.map((sec) => (
                            <div
                                key={sec.number}
                                className="tc-card overflow-hidden"
                                style={{ background: "#1A1212", border: "1px solid rgba(201,168,76,0.1)" }}
                            >
                                {/* Accent top bar */}
                                <div
                                    className="h-[3px]"
                                    style={{
                                        background: sec.gold
                                            ? "linear-gradient(90deg,#C9A84C 0%,transparent 100%)"
                                            : "linear-gradient(90deg,#C41E3A 0%,transparent 100%)",
                                    }}
                                />

                                {/* Card header */}
                                <div
                                    className="flex items-center gap-3 px-4 sm:px-5 py-3.5"
                                    style={{
                                        borderBottom: "1px solid rgba(201,168,76,0.08)",
                                        background: sec.gold
                                            ? "rgba(201,168,76,0.04)"
                                            : "rgba(196,30,58,0.04)",
                                    }}
                                >
                                    <span className="text-xl flex-shrink-0">{sec.icon}</span>
                                    <div
                                        className="w-px h-6 flex-shrink-0"
                                        style={{ background: "rgba(201,168,76,0.2)" }}
                                    />
                                    <div className="flex items-baseline gap-2 min-w-0 flex-wrap">
                                        <span
                                            className="tc-serif font-black text-[0.58rem] tracking-wider flex-shrink-0"
                                            style={{
                                                color: sec.gold
                                                    ? "rgba(201,168,76,0.45)"
                                                    : "rgba(196,30,58,0.45)",
                                            }}
                                        >
                                            {sec.number}
                                        </span>
                                        <h2
                                            className="tc-serif font-bold text-sm sm:text-[0.97rem] leading-snug"
                                            style={{ color: "#FAF6F0" }}
                                        >
                                            {sec.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="px-4 sm:px-5 py-4">
                                    <p
                                        className="leading-[1.88] text-[0.83rem] sm:text-[0.9rem]"
                                        style={{ color: "rgba(250,246,240,0.65)" }}
                                    >
                                        {sec.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── Acceptance banner ── */}
                    <div
                        className="tc-a3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-5 sm:p-7 mb-4"
                        style={{
                            background: "linear-gradient(135deg,rgba(201,168,76,0.06) 0%,transparent 100%)",
                            border: "1px solid rgba(201,168,76,0.2)",
                            borderLeft: "4px solid #C9A84C",
                        }}
                    >
                        <div className="min-w-0">
                            <p
                                className="text-[0.68rem] font-bold uppercase tracking-[0.16em] mb-2"
                                style={{ color: "#C9A84C" }}
                            >
                                User Acceptance
                            </p>
                            <p
                                className="leading-[1.85] text-sm sm:text-[0.92rem]"
                                style={{ color: "rgba(250,246,240,0.65)" }}
                            >
                                Continued use of sadaivsatya.com after any modification to these
                                Terms and Conditions constitutes your full acceptance of the
                                revised terms. It is your responsibility to review this page
                                periodically for updates.
                            </p>
                        </div>
                        <a
                            href="/contact-us"
                            className="tc-cta inline-block text-[0.78rem] font-bold uppercase tracking-[0.1em] px-6 py-3 no-underline flex-shrink-0"
                            style={{ background: "#C41E3A", color: "#FAF6F0" }}
                        >
                            Contact Us →
                        </a>
                    </div>

                    {/* ── Info strip — 1-col → 3-col ── */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-px"
                        style={{
                            background: "rgba(201,168,76,0.18)",
                            border: "1px solid rgba(201,168,76,0.18)",
                        }}
                    >
                        {[
                            { label: "Company", value: "Sadaiv Satya Media and Broadcasting Pvt. Ltd." },
                            { label: "Website", value: "https://www.sadaivsatya.com" },
                            { label: "Jurisdiction", value: "Bhopal, Madhya Pradesh, India" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="px-4 sm:px-5 py-4 sm:py-5"
                                style={{ background: "#1A1212" }}
                            >
                                <p
                                    className="text-[0.65rem] font-semibold uppercase tracking-[0.15em] mb-1.5"
                                    style={{ color: "#C41E3A" }}
                                >
                                    {item.label}
                                </p>
                                <p className="text-sm font-medium leading-snug" style={{ color: "#FAF6F0" }}>
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                {/* ══════════════ FOOTER ══════════════ */}
                <footer
                    className="text-center px-4 py-5 text-[0.72rem] sm:text-[0.76rem] tracking-[0.07em]"
                    style={{ borderTop: "1px solid rgba(201,168,76,0.3)", color: "#7A6B6B" }}
                >
                    © 2024{" "}
                    <span style={{ color: "#C9A84C" }}>
                        Sadaiv Satya Media and Broadcasting Pvt. Ltd.
                    </span>
                    {" "}· All Rights Reserved · भोपाल, मध्य प्रदेश
                </footer>

            </div>
        </>
    );
}