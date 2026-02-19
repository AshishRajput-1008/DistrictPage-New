// export default function Disclaimer() {
//   return (
//     <main className="min-h-screen bg-white dark:bg-black">
//       <div className="max-w-5xl mx-auto">

//         <h1 className="text-3xl font-bold mb-6">
//           Disclaimer
//         </h1>

//         <p className="mb-4 text-gray-700 dark:text-gray-300">
//           All information published on <strong>sadaivsatya.com</strong> is for
//           general informational purposes only.
//         </p>

//         <p className="mb-4 text-gray-700 dark:text-gray-300">
//           While we strive for accuracy, we make no warranties regarding
//           completeness or reliability. Any action you take based on the
//           information is strictly at your own risk.
//         </p>

//         <p className="text-gray-700 dark:text-gray-300">
//           We are not responsible for third-party advertisements or external
//           links.
//         </p>

//         <p className="mt-8 text-sm text-gray-500">
//           Last Updated: {new Date().toLocaleDateString()}
//         </p>

//       </div>
//     </main>
//   );
// }


"use client";

export default function Disclaimer() {
  const lastUpdated = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const sections = [
    {
      number: "01",
      icon: "📰",
      title: "General Information Only",
      gold: false,
      content:
        "All information published on sadaivsatya.com is for general informational purposes only. The content is intended to keep readers informed about current events, news, and public interest topics. It does not constitute professional advice of any kind.",
    },
    {
      number: "02",
      icon: "⚖️",
      title: "No Warranties",
      gold: true,
      content:
        "While we strive for accuracy and timeliness in all our reporting, we make no warranties or representations — express or implied — regarding the completeness, accuracy, reliability, suitability, or availability of any information published on this website.",
    },
    {
      number: "03",
      icon: "🔗",
      title: "Third-Party Content & Links",
      gold: false,
      content:
        "sadaivsatya.com may contain third-party advertisements, sponsored content, or links to external websites. We have no control over the nature or content of those sites. Inclusion of any links does not imply endorsement of the views expressed within them.",
    },
    {
      number: "04",
      icon: "💼",
      title: "No Professional Advice",
      gold: true,
      content:
        "Nothing on this website constitutes legal, financial, medical, or any other form of professional advice. Always seek the advice of a qualified professional before making any decision based on information you read here.",
    },
    {
      number: "05",
      icon: "©️",
      title: "Intellectual Property",
      gold: false,
      content:
        "All original content, branding, and design elements on sadaivsatya.com are the intellectual property of Sadaiv Satya Media and Broadcasting Pvt. Ltd. Reproduction or redistribution without prior written consent is strictly prohibited.",
    },
    {
      number: "06",
      icon: "🔄",
      title: "Changes to This Disclaimer",
      gold: true,
      content:
        "We reserve the right to modify this disclaimer at any time without prior notice. Changes become effective immediately upon publication on this page. Continued use of the website constitutes acceptance of the updated terms.",
    },
  ];

  const infoItems = [
    { label: "Company", value: "Sadaiv Satya Media and Broadcasting Pvt. Ltd." },
    { label: "Website", value: "sadaivsatya.com" },
    { label: "Jurisdiction", value: "Bhopal, Madhya Pradesh, India" },
  ];

  return (
    <>
      {/* Font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Noto+Sans+Devanagari:wght@300;400;500;600&family=Cormorant+Garamond:ital@1&display=swap');

        @keyframes fadeUp  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse2  { 0%,100%{opacity:1} 50%{opacity:0.2} }

        .d-root  { font-family:'Noto Sans Devanagari',sans-serif; }
        .d-serif { font-family:'Playfair Display',serif; }
        .d-ital  { font-family:'Cormorant Garamond',serif; font-style:italic; }

        .d-anim  { animation: fadeUp 0.65s ease both; }
        .d-a1    { animation-delay:0.08s; }
        .d-a2    { animation-delay:0.18s; }
        .d-a3    { animation-delay:0.28s; }
        .d-pulse { animation: pulse2 2s infinite; }

        .d-card {
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .d-card:hover {
          border-color: rgba(196,30,58,0.4) !important;
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(196,30,58,0.12);
        }

        .d-top-bar-red  { background: linear-gradient(90deg,#C41E3A 0%,transparent 100%); }
        .d-top-bar-gold { background: linear-gradient(90deg,#C9A84C 0%,transparent 100%); }

        .d-glow {
          background:
            radial-gradient(ellipse 80% 60% at 50% 0%,rgba(196,30,58,0.16) 0%,transparent 70%),
            radial-gradient(ellipse 35% 50% at 85% 90%,rgba(201,168,76,0.07) 0%,transparent 60%);
        }
        .d-masthead-bg {
          background: linear-gradient(135deg,#0F0A0A 0%,#1a0808 45%,#0F0A0A 100%);
        }
        .d-cta-btn {
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .d-cta-btn:hover { background:#E8374F !important; transform:translateY(-2px); }
      `}</style>

      <div className="d-root min-h-screen overflow-x-hidden" style={{ backgroundColor: "#0F0A0A", color: "#FAF6F0" }}>

        {/* ═══════════════ MASTHEAD ═══════════════ */}
        <header className="d-masthead-bg d-anim relative overflow-hidden text-center px-4 pt-12 pb-10" style={{ borderBottom: "1px solid rgba(201,168,76,0.3)" }}>

          {/* 3px gradient top bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg,#C41E3A 0%,#C9A84C 50%,#C41E3A 100%)" }} />

          {/* Glow */}
          <div className="d-glow absolute inset-0 pointer-events-none" />

          {/* Ornament */}
          <div className="relative z-10 flex items-center justify-center gap-4 mb-5">
            <div className="flex-1 max-w-[90px] h-px" style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }} />
            <div className="w-2 h-2 rotate-45 flex-shrink-0" style={{ background: "#C9A84C" }} />
            <div className="flex-1 max-w-[90px] h-px" style={{ background: "linear-gradient(90deg,transparent,#C9A84C,transparent)" }} />
          </div>

          {/* Hindi label */}
          <p className="relative z-10 font-light uppercase tracking-[0.14em] mb-2 text-[clamp(0.7rem,2vw,0.88rem)]" style={{ color: "#C9A84C" }}>
            सदैव सत्य मीडिया एंड ब्रॉडकास्टिंग
          </p>

          {/* Title */}
          <h1 className="d-serif relative z-10 font-black leading-tight mb-2 text-[clamp(1.9rem,5vw,3.8rem)]" style={{ color: "#FAF6F0" }}>
            अस्वीकरण /{" "}
            <span style={{ color: "#C41E3A" }}>Disclaimer</span>
          </h1>

          {/* Subtitle */}
          <p className="d-ital relative z-10 tracking-wide mb-6 text-[clamp(0.9rem,2.5vw,1.12rem)]" style={{ color: "#7A6B6B" }}>
            Accuracy · Transparency · Responsibility
          </p>

          {/* Badges */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
            <span
              className="inline-flex items-center gap-2 text-[clamp(0.68rem,1.8vw,0.76rem)] font-medium uppercase tracking-[0.1em] px-4 py-1.5"
              style={{ background: "rgba(196,30,58,0.1)", border: "1px solid rgba(196,30,58,0.3)", color: "#E8374F" }}
            >
              <span className="d-pulse text-[0.4rem]" style={{ color: "#C41E3A" }}>●</span>
              sadaivsatya.com
            </span>
            <span
              className="inline-flex items-center text-[clamp(0.68rem,1.8vw,0.76rem)] font-medium tracking-[0.06em] px-4 py-1.5"
              style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", color: "#C9A84C" }}
            >
              Last Updated: {lastUpdated}
            </span>
          </div>
        </header>

        {/* ═══════════════ CONTENT ═══════════════ */}
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          {/* ── Intro card ── */}
          <div
            className="d-anim d-a1 p-5 sm:p-7 mb-10"
            style={{
              background: "linear-gradient(135deg,rgba(196,30,58,0.07) 0%,transparent 100%)",
              border: "1px solid rgba(201,168,76,0.15)",
              borderLeft: "3px solid #C41E3A",
            }}
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] mb-3" style={{ color: "#C41E3A" }}>
              Important Notice
            </p>
            <p className="leading-[1.9] mb-3 text-[clamp(0.88rem,2vw,1rem)]" style={{ color: "rgba(250,246,240,0.82)" }}>
              Please read this disclaimer carefully before using{" "}
              <strong style={{ color: "#FAF6F0" }}>sadaivsatya.com</strong>. By accessing or using
              any content on our platform, you agree to be bound by the terms described below.
            </p>
            <p className="leading-[1.9] text-[clamp(0.88rem,2vw,1rem)]" style={{ color: "rgba(250,246,240,0.82)" }}>
              This disclaimer applies to all content, pages, and services offered by{" "}
              <strong style={{ color: "#FAF6F0" }}>Sadaiv Satya Media and Broadcasting Pvt. Ltd.</strong>
            </p>
          </div>

          {/* ── Section cards — 2-col desktop, 1-col mobile ── */}
          <div className="d-anim d-a2 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {sections.map((sec) => (
              <div
                key={sec.number}
                className="d-card overflow-hidden"
                style={{ background: "#1A1212", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                {/* Accent top bar */}
                <div className={`h-[3px] ${sec.gold ? "d-top-bar-gold" : "d-top-bar-red"}`} />

                {/* Header */}
                <div
                  className="flex items-center gap-3 px-4 sm:px-5 py-3.5"
                  style={{
                    borderBottom: "1px solid rgba(201,168,76,0.08)",
                    background: sec.gold ? "rgba(201,168,76,0.04)" : "rgba(196,30,58,0.04)",
                  }}
                >
                  <span className="text-xl flex-shrink-0">{sec.icon}</span>
                  <div className="w-px h-6 flex-shrink-0" style={{ background: "rgba(201,168,76,0.2)" }} />
                  <div className="flex items-baseline gap-2 min-w-0">
                    <span
                      className="d-serif font-black text-[0.6rem] tracking-wider flex-shrink-0"
                      style={{ color: sec.gold ? "rgba(201,168,76,0.45)" : "rgba(196,30,58,0.45)" }}
                    >
                      {sec.number}
                    </span>
                    <h2 className="d-serif font-bold text-[clamp(0.88rem,2vw,1rem)] leading-snug" style={{ color: "#FAF6F0" }}>
                      {sec.title}
                    </h2>
                  </div>
                </div>

                {/* Body */}
                <div className="px-4 sm:px-5 py-4">
                  <p className="leading-[1.88] text-[clamp(0.83rem,1.8vw,0.91rem)]" style={{ color: "rgba(250,246,240,0.65)" }}>
                    {sec.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Limitation of Liability banner ── */}
          <div
            className="d-anim d-a3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-5 sm:p-7 mb-4"
            style={{
              background: "linear-gradient(135deg,rgba(201,168,76,0.06) 0%,transparent 100%)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderLeft: "4px solid #C9A84C",
            }}
          >
            <div className="min-w-0">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] mb-2" style={{ color: "#C9A84C" }}>
                Limitation of Liability
              </p>
              <p className="leading-[1.85] text-[clamp(0.85rem,2vw,0.95rem)]" style={{ color: "rgba(250,246,240,0.65)" }}>
                Sadaiv Satya Media and Broadcasting Pvt. Ltd. shall not be liable for any loss
                or damage — including indirect or consequential loss — arising out of or in
                connection with the use of this website or its content.
              </p>
            </div>
            <a
              href="/contact-us"
              className="d-cta-btn inline-block text-[0.78rem] font-bold uppercase tracking-[0.1em] px-6 py-3 text-center"
              style={{ background: "#C41E3A", color: "#FAF6F0", textDecoration: "none" }}
            >
              Contact Us →
            </a>
          </div>

          {/* ── Info strip — 3-col desktop, 1-col mobile ── */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px"
            style={{ background: "rgba(201,168,76,0.18)", border: "1px solid rgba(201,168,76,0.18)" }}
          >
            {infoItems.map((item) => (
              <div key={item.label} className="px-4 py-4 sm:px-5 sm:py-5" style={{ background: "#1A1212" }}>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] mb-1.5" style={{ color: "#C41E3A" }}>
                  {item.label}
                </p>
                <p className="text-[0.88rem] font-medium leading-snug" style={{ color: "#FAF6F0" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ═══════════════ FOOTER ═══════════════ */}
        <footer
          className="text-center px-4 py-5 text-[0.74rem] tracking-[0.06em]"
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