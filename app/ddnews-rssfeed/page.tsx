// 'use client';

// import { useEffect, useState } from 'react';
// import FeedList from "@/components/DDNewsFeed";

// export default function Page() {
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // DD News ka official RSS band hai, ab Google News se le rahe hain
//         fetch('https://api.rss2json.com/v1/api.json?rss_url=' +
//             encodeURIComponent('https://news.google.com/rss/search?q=DD+News+India&hl=hi&gl=IN&ceid=IN:hi'))
//             .then(res => res.json())
//             .then(data => {
//                 if (data.status === 'ok') {
//                     setItems(data.items);
//                 } else {
//                     setItems([]);
//                 }
//             })
//             .catch(() => setItems([]))
//             .finally(() => setLoading(fals));
//     }, []);

//     if (loading) return <div className="p-8 text-center">Loading DD News headlines...</div>;

//     return (
//         <div className="mx-auto pb-10">
//             {items.length > 0 ? (
//                 <FeedList news={items} />
//             ) : (
//                 <div className="text-center p-8 bg-red-50 rounded-lg">
//                     <p className="text-red-600">Unable to load DD News headlines.</p>
//                 </div>
//             )}
//         </div>
//     );
// }


"use client";

import { useEffect, useState } from "react";
import DD_LOGO from "@/public/ddnewslogo.png"


interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  enclosure?: { link: string };
  author?: string;
  source?: { name?: string };
}

function timeAgo(dateStr: string): string {
  try {
    const diff = Date.now() - new Date(dateStr).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1) return "Just now";
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h ago`;
    return `${Math.floor(h / 24)}d ago`;
  } catch { return ""; }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

function getThumb(item: NewsItem): string | null {
  return item.thumbnail || item.enclosure?.link || null;
}

function SkeletonCard() {
  return (
    <div className="overflow-hidden animate-pulse" style={{ background:"#FFFFFF", border:"1px solid #E8DECE", boxShadow:"0 2px 8px rgba(142,67,6,0.05)" }}>
      <div className="h-48 w-full" style={{ background:"#F5EDE1" }} />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-2 rounded w-1/4" style={{ background:"#EDE0CE" }} />
        <div className="h-5 rounded w-5/6" style={{ background:"#EDE0CE" }} />
        <div className="h-4 rounded w-4/6" style={{ background:"#F2E8DC" }} />
        <div className="h-3 rounded w-2/5 mt-2" style={{ background:"#F2E8DC" }} />
      </div>
    </div>
  );
}

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const thumb = getThumb(item);
  const desc = stripHtml(item.description || "").slice(0, 160);
  const isFeatured = index === 0;

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block overflow-hidden no-underline ${isFeatured ? "lg:col-span-2 lg:row-span-2" : ""}`}
      style={{
        background: "#FFFFFF",
        border: "1px solid #E8DECE",
        boxShadow: "0 2px 10px rgba(142,67,6,0.07)",
        transition: "box-shadow .3s, transform .3s, border-color .3s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#8e4306";
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow = "0 16px 48px rgba(142,67,6,0.18)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#E8DECE";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 2px 10px rgba(142,67,6,0.07)";
      }}
    >
      {/* Top accent slide */}
      <div className="h-[3px] w-0 group-hover:w-full" style={{ background:"linear-gradient(90deg,#8e4306,#d4722a)", transition:"width .4s ease" }} />

      {/* Image */}
      {thumb ? (
        <div className={`relative overflow-hidden flex-shrink-0 ${isFeatured ? "h-90 lg:h-102" : "h-90"}`}>
          <img src={DD_LOGO.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0" style={{ background:"linear-gradient(to bottom,transparent 35%,rgba(25,10,2,0.6) 100%)" }} />
          {isFeatured && (
            <span className="absolute top-4 left-4 text-[0.6rem] font-bold uppercase tracking-[0.16em] px-3 py-1.5" style={{ background:"#8e4306", color:"#FFFFFF" }}>
              Featured
            </span>
          )}
        </div> 
      ) : (
        <div
          className={`relative overflow-hidden flex-shrink-0 flex items-center justify-center ${isFeatured ? "h-64 lg:h-72" : "h-44"}`}
          style={{ background:"linear-gradient(135deg,#FDF6EE 0%,#F5E8D4 100%)" }}
        >
          <img src={DD_LOGO.src} alt="DD News" className="opacity-20 object-contain" style={{ width: isFeatured ? 180 : 120, height: isFeatured ? 140 : 90 }} />
          {isFeatured && (
            <span className="absolute top-4 left-4 text-[0.6rem] font-bold uppercase tracking-[0.16em] px-3 py-1.5" style={{ background:"#8e4306", color:"#FFFFFF" }}>
              Featured
            </span>
          )}
        </div>
      )}

      {/* Body */}
      <div className={`flex flex-col gap-3 flex-1 ${isFeatured ? "p-6 lg:p-7" : "p-5"}`}>
        <div className="flex items-center justify-between gap-2">
          <span className="text-[0.58rem] font-bold uppercase tracking-[0.18em]" style={{ color:"#8e4306" }}>DD News · India</span>
          <span className="text-[0.62rem] font-medium" style={{ color:"#B09878" }}>{timeAgo(item.pubDate)}</span>
        </div>

        <div className="w-8 h-[2px]" style={{ background:"#8e4306", opacity: 0.4 }} />

        <h2
          className={`font-bold leading-snug ${isFeatured ? "text-2xl lg:text-3xl" : "text-[0.95rem] sm:text-base"}`}
          style={{
            fontFamily:"'Playfair Display',serif",
            color:"#1C0A02",
            display:"-webkit-box",
            WebkitLineClamp: isFeatured ? 4 : 2,
            WebkitBoxOrient:"vertical",
            overflow:"hidden",
          }}
        >
          {item.title}
        </h2>

        {desc && (
          <p
            className={`leading-relaxed ${isFeatured ? "text-[0.9rem]" : "text-[0.78rem]"}`}
            style={{
              color:"#6B4E32",
              display:"-webkit-box",
              WebkitLineClamp: isFeatured ? 4 : 2,
              WebkitBoxOrient:"vertical",
              overflow:"hidden",
              fontFamily:"'Source Serif 4',serif",
            }}
          >
            {desc}
          </p>
        )}

        <div className="flex items-center gap-2 mt-auto pt-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition-all duration-200 group-hover:gap-3" style={{ color:"#8e4306" }}>
          <span>Read Full Story</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1.5">→</span>
        </div>
      </div>
    </a>
  );
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24 text-center" style={{ background:"#FFFFFF", border:"1px solid #E8DECE", borderLeft:"4px solid #8e4306" }}>
      <img src={DD_LOGO.src} alt="DD News" className="opacity-25 w-16 h-16 object-contain" />
      <div>
        <p className="font-bold text-lg mb-1.5" style={{ fontFamily:"'Playfair Display',serif", color:"#1C0A02" }}>Broadcast Unavailable</p>
        <p className="text-sm" style={{ color:"#9A7A5A" }}>Unable to fetch DD News headlines. Please try again.</p>
      </div>
      <button onClick={onRetry} className="text-[0.78rem] font-bold uppercase tracking-[0.12em] px-8 py-2.5"
        style={{ background:"#8e4306", color:"#FFFFFF", border:"none", cursor:"pointer" }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#a85010")}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#8e4306")}>
        Retry →
      </button>
    </div>
  );
}

export default function DDNewsFeedPage() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [lastFetched, setLastFetched] = useState<string>("");

  const fetchFeed = () => {
    setLoading(true);
    setError(false);
    fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://news.google.com/rss/search?q=DD+News+India&hl=hi&gl=IN&ceid=IN:hi"))
      .then(r => r.json())
      .then(data => {
        if (data.status === "ok" && data.items?.length) {
          setItems(data.items);
          setLastFetched(new Date().toLocaleTimeString("en-IN", { hour:"2-digit", minute:"2-digit" }));
        } else setError(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchFeed(); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Source+Serif+4:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        a { text-decoration: none; }

        @keyframes fadeUp   { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse    { 0%,100%{opacity:1} 50%{opacity:0.2} }
        @keyframes scroll   { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        .fade-a { animation: fadeUp .6s ease both; }
        .fade-b { animation: fadeUp .6s .14s ease both; }
        .fade-c { animation: fadeUp .6s .26s ease both; }

        .live-dot { animation: pulse 1.8s ease-in-out infinite; }

        .ticker-wrap { overflow:hidden; }
        .ticker-track {
          display:flex; gap:3rem; white-space:nowrap; width:max-content;
          animation: scroll 42s linear infinite;
        }
        .ticker-wrap:hover .ticker-track { animation-play-state:paused; }
      `}</style>

      <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor:"#FAF5EE", color:"#1C0A02", fontFamily:"'DM Sans',sans-serif" }}>

        {/* ── VERY TOP BANNER ── */}
        <div style={{ background:"#FAF5EE", borderBottom:"1px solid #E8DECE" }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-wrap items-center justify-center py-2">
            <div className="flex items-center gap-2">
              <img src={DD_LOGO.src} alt="DD News" className="w-[50px] h-[60px] object-contain opacity-70" />
              <span className="text-[12px] font-semibold" style={{ color:"#8e4306" }}>Powered by DD News RSS Feed</span>
              <span className="text-[12px]" style={{ color:"#C4A882" }}>·</span>
              <span className="text-[12px]" style={{ color:"#9A7A5A" }}>Sadaiv Satya Media and Broadcasting Pvt. Ltd.</span>
            </div>
            {/* <span className="text-[0.62rem] font-medium" style={{ color:"#B09878" }}>
              {new Date().toLocaleDateString("en-IN", { weekday:"long", day:"numeric", month:"long", year:"numeric" })}
            </span> */}
          </div>
        </div>

        {/* ── UTILITY BAR ── */}
        <div style={{ background:"#8e4306" }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between" style={{ height:38 }}>
            <span className="text-[0.62rem] font-medium uppercase tracking-[0.14em]" style={{ color:"rgba(255,255,255,0.7)" }}>
              दूरदर्शन समाचार · Prasar Bharati · Government of India
            </span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em]" style={{ color:"#FFE5C8" }}>
                <span className="live-dot text-[0.4rem]" style={{ color:"#FFD580" }}>●</span>
                Live Feed
              </span>
              {lastFetched && <span className="text-[0.6rem]" style={{ color:"rgba(255,255,255,0.5)" }}>Updated {lastFetched}</span>}
            </div>
          </div>
        </div>

        {/* ── NEWS TICKER ── */}
        {!loading && items.length > 0 && (
          <div className="ticker-wrap flex items-center" style={{ background:"#FFFFFF", borderBottom:"1px solid #E8DECE", height:40, boxShadow:"0 1px 4px rgba(142,67,6,0.06)" }}>
            <div className="flex-shrink-0 flex items-center gap-2 px-5 h-full" style={{ background:"#ffffff", minWidth:110 }}>
              <span className="live-dot text-[0.35rem]" style={{ color:"#FFD580" }}>●</span>
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em]" style={{ color:"#000000" }}>Breaking</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="ticker-track text-[0.72rem] font-medium" style={{ color:"#4A2E14" }}>
                {[...items, ...items].map((item, i) => (
                  <span key={i} className="flex items-center gap-2.5">
                    <span style={{ color:"#8e4306", fontSize:"0.5rem" }}>◆</span>
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── MASTHEAD ── */}
        <header className="fade-a" style={{ background:"#FFFFFF", borderBottom:"3px solid #8e4306", boxShadow:"0 4px 24px rgba(142,67,6,0.09)" }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">

              {/* Brand */}
              <div className="flex items-center gap-5">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img src={DD_LOGO.src} alt="DD News Logo" className="object-contain drop-shadow-sm" style={{ width:80, height:80 }} />
                </div>
                {/* Text lockup */}
                <div>
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] mb-1" style={{ color:"#8e4306" }}>India's Public Broadcaster</p>
                  <h1 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"clamp(2rem,5vw,3.2rem)", color:"#1C0A02", lineHeight:1, letterSpacing:"-0.01em" }}>
                    DD <span style={{ color:"#8e4306" }}>News</span>
                  </h1>
                  <p className="mt-1 text-[0.72rem] font-light italic" style={{ fontFamily:"'Source Serif 4',serif", color:"#9A7A5A" }}>
                    दूरदर्शन — Satyam Shivam Sundaram
                  </p>
                </div>
              </div>

              {/* Right controls */}
              <div className="flex flex-col items-start sm:items-end gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] px-3.5 py-1.5" style={{ background:"rgba(142,67,6,0.07)", border:"1px solid rgba(142,67,6,0.2)", color:"#8e4306" }}>
                    <span className="live-dot text-[0.38rem]">●</span>
                    Live Headlines
                  </span>
                  <button onClick={fetchFeed}
                    className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] px-3.5 py-1.5"
                    style={{ background:"#8e4306", color:"#FFFFFF", border:"none", cursor:"pointer", transition:"background .2s" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#a85010")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#8e4306")}>
                    ↻ Refresh
                  </button>
                </div>
                <p className="text-[0.65rem]" style={{ color:"#B09878" }}>
                  {new Date().toLocaleDateString("en-IN", { weekday:"long", day:"numeric", month:"long", year:"numeric" })}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ── CONTENT ── */}
        <main className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">

          {/* Section label */}
          <div className="fade-b flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.18em] px-4 py-2" style={{ background:"#8e4306", color:"#FFFFFF" }}>
              <span>ताज़ा समाचार</span>
            </div>
            <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,#8e4306,#E8DECE)" }} />
            {!loading && <span className="flex-shrink-0 text-[0.65rem] font-semibold" style={{ color:"#9A7A5A" }}>{items.length} Stories</span>}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length:7 }).map((_,i) => <SkeletonCard key={i} />)}
            </div>
          ) : error ? (
            <ErrorState onRetry={fetchFeed} />
          ) : (
            <div className="fade-c">
              {/* Desktop: featured left 2-row + 2-col right grid */}
              <div className="hidden lg:grid gap-5 mb-5" style={{ gridTemplateColumns:"1fr 1fr 1fr", gridTemplateRows:"auto auto" }}>
                {items.slice(0, 6).map((item, i) => (
                  <div key={item.link + i} className={i === 0 ? "row-span-2 col-span-1" : ""} style={{ display:"contents" }}>
                    <NewsCard item={item} index={i} />
                  </div>
                ))}
              </div>

              {/* Mobile/Tablet grid */}
              <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {items.slice(0, 5).map((item, i) => (
                  <NewsCard key={item.link + i} item={item} index={i} />
                ))}
              </div>

              {items.length > 5 && (
                <>
                  <div className="flex items-center gap-4 my-8">
                    <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,#8e4306,transparent)" }} />
                    <span className="flex-shrink-0 text-[0.62rem] font-bold uppercase tracking-[0.18em] px-4 py-1.5" style={{ color:"#8e4306", border:"1px solid #8e4306", background:"#FAF5EE" }}>More Stories</span>
                    <div className="flex-1 h-px" style={{ background:"linear-gradient(90deg,transparent,#8e4306)" }} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {items.slice(6).map((item, i) => (
                      <NewsCard key={item.link + i + 5} item={item} index={i + 5} />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </main>

        {/* ── FOOTER ── */}
        <footer style={{ background:"#FFFFFF", borderTop:"3px solid #8e4306", marginTop:32 }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 py-6" style={{ borderBottom:"1px solid #EDE0CE" }}>
              <div className="flex items-center gap-4">
                <img src={DD_LOGO.src} alt="DD News" className="w-10 h-10 object-contain opacity-80" />
                <div>
                  <p className="font-black text-xl" style={{ fontFamily:"'Playfair Display',serif", color:"#1C0A02" }}>
                    DD <span style={{ color:"#8e4306" }}>News</span>
                  </p>
                  <p className="text-[0.65rem] mt-0.5" style={{ color:"#9A7A5A" }}>India's Trusted Public Broadcaster</p>
                </div>
              </div>
              <div className="lg:text-right">
                <p className="text-[0.68rem] font-semibold" style={{ color:"#8e4306" }}>Powered by DD News RSS Feed</p>
                <p className="text-[0.65rem] mt-0.5" style={{ color:"#9A7A5A" }}>Sadaiv Satya Media and Broadcasting Pvt. Ltd.</p>
              </div>
            </div>
            <div className="flex-col lg:flex items-center justify-between py-3.5">
              <p className="text-[0.62rem]" style={{ color:"#B09878" }}>© {new Date().getFullYear()} Sadaiv Satya Media. All rights reserved.</p>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em]" style={{ color:"#8e4306" }}>Satyam · Shivam · Sundaram</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}