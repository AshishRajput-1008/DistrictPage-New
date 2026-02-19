// export default function ContactPage() {
//     return (
//         <main className="min-h-screen bg-white pb-12">
//             <div className="max-w-4xl mx-auto">
//                 <h1 className="text-3xl font-bold text-gray-900 mb-4">
//                     Contact Us
//                 </h1>

//                 <p className="text-gray-600 mb-6">
//                     We value your feedback, questions, and suggestions. If you have
//                     any inquiries about our news content, advertisements, copyright
//                     concerns, or partnerships, feel free to reach out to us.
//                 </p>

//                 <section className="mb-8">
//                     <h2 className="text-xl font-semibold mb-2">
//                         Website Information
//                     </h2>
//                     <p><strong>Website:</strong> sadaivsatya.com</p>
//                     <p><strong>Type:</strong> Digital News & Media Platform</p>
//                     <p><strong>Country:</strong> India</p>
//                 </section>

//                 <section className="mb-8">
//                     <h2 className="text-xl font-semibold mb-2">
//                         Contact Details
//                     </h2>
//                     <p><strong>Email:</strong> support@sadaivsatya.com</p>
//                     <p><strong>Editorial:</strong> editor@sadaivsatya.com</p>
//                     <p><strong>Advertising:</strong> ads@sadaivsatya.com</p>
//                 </section>

//                 <section className="mb-8">
//                     <h2 className="text-xl font-semibold mb-2">
//                         Office Hours
//                     </h2>
//                     <p>Monday – Saturday: 9:00 AM – 7:00 PM</p>
//                     <p>Sunday: Closed</p>
//                 </section>

//                 <section>
//                     <h2 className="text-xl font-semibold mb-2">
//                         Legal Notice
//                     </h2>
//                     <p className="text-gray-600">
//                         All content published on sadaivsatya.com is for informational
//                         purposes only. We strive for accuracy, but we do not guarantee
//                         the completeness or reliability of any information.
//                     </p>
//                 </section>
//             </div>
//         </main>
//     );
// }


"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const contactChannels = [
        {
            icon: "✉️",
            label: "General Support",
            value: "support@sadaivsatya.com",
            href: "mailto:support@sadaivsatya.com",
            tag: "24–48 hr response",
        },
        {
            icon: "📝",
            label: "Editorial Desk",
            value: "editor@sadaivsatya.com",
            href: "mailto:editor@sadaivsatya.com",
            tag: "News & corrections",
        },
        {
            icon: "📢",
            label: "Advertising",
            value: "ads@sadaivsatya.com",
            href: "mailto:ads@sadaivsatya.com",
            tag: "Partnership enquiries",
        },
        {
            icon: "📞",
            label: "Direct Line",
            value: "093034 30351",
            href: "tel:09303430351",
            tag: "Mon–Sat 9AM–7PM",
        },
    ];

    const siteInfo = [
        { label: "Website", value: "sadaivsatya.com" },
        { label: "Type", value: "Digital News & Media" },
        { label: "Country", value: "India" },
        { label: "Language", value: "Hindi / English" },
    ];

    const hours = [
        { day: "Monday – Friday", time: "9:00 AM – 7:00 PM", open: true },
        { day: "Saturday", time: "9:00 AM – 5:00 PM", open: true },
        { day: "Sunday", time: "Closed", open: false },
    ];

    const subjects = [
        "General Enquiry",
        "News Tip / Story",
        "Editorial Correction",
        "Advertising & Partnerships",
        "Copyright Concern",
        "Investor Relations",
        "Other",
    ];

    return (
        <>
            <Head>
                <title>Contact Us – Sadaiv Satya Media</title>
                <meta name="description" content="Contact Sadaiv Satya Media – India's trusted Hindi news portal." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Noto+Sans+Devanagari:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,400;1,400&display=swap"
                    rel="stylesheet"
                />
                <style>{`
          *, *::before, *::after { box-sizing: border-box; }
          html, body { overflow-x: hidden; }

          .font-playfair { font-family: 'Playfair Display', serif; }
          .font-devanagari { font-family: 'Noto Sans Devanagari', sans-serif; }
          .font-cormorant { font-family: 'Cormorant Garamond', serif; }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.25} }

          .fade-up  { animation: fadeUp 0.65s ease both; }
          .d1 { animation-delay: 0.08s; }
          .d2 { animation-delay: 0.18s; }
          .d3 { animation-delay: 0.28s; }
          .d4 { animation-delay: 0.38s; }
          .d5 { animation-delay: 0.48s; }
          .pulse-dot { animation: pulse 2s infinite; }

          /* Custom scrollbar */
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #0F0A0A; }
          ::-webkit-scrollbar-thumb { background: #C41E3A; border-radius: 3px; }

          /* Form inputs */
          .ir-input {
            width: 100%;
            background: #110C0C;
            border: 1px solid rgba(201,168,76,0.2);
            color: #FAF6F0;
            padding: 0.75rem 1rem;
            font-size: 0.92rem;
            font-family: 'Noto Sans Devanagari', sans-serif;
            outline: none;
            transition: border-color 0.2s, box-shadow 0.2s;
            border-radius: 0;
            -webkit-appearance: none;
          }
          .ir-input::placeholder { color: rgba(250,246,240,0.3); }
          .ir-input:focus {
            border-color: #C41E3A;
            box-shadow: 0 0 0 3px rgba(196,30,58,0.1);
          }
          .ir-input option { background: #1A1212; color: #FAF6F0; }

          /* Channel card hover */
          .channel-card {
            transition: border-color 0.2s, background 0.2s, transform 0.2s;
          }
          .channel-card:hover {
            border-color: rgba(196,30,58,0.4) !important;
            background: rgba(196,30,58,0.07) !important;
            transform: translateY(-2px);
          }

          /* Submit button */
          .submit-btn {
            transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          }
          .submit-btn:hover {
            background: #E8374F !important;
            transform: translateY(-1px);
            box-shadow: 0 8px 24px rgba(196,30,58,0.35);
          }
          .submit-btn:active { transform: translateY(0); }

          /* Gold hover links */
          .gold-link { transition: color 0.2s; }
          .gold-link:hover { color: #FAF6F0 !important; }
        `}</style>
            </Head>

            {/* ─── PAGE ─────────────────────────────────────────────────────────── */}
            <div
                className="font-devanagari min-h-screen"
                style={{ backgroundColor: "#0F0A0A", color: "#FAF6F0", overflowX: "hidden" }}
            >

                {/* ── MASTHEAD ── */}
                <header
                    className="relative text-center overflow-hidden fade-up"
                    style={{
                        background: "linear-gradient(135deg, #0F0A0A 0%, #1a0808 40%, #0F0A0A 100%)",
                        borderBottom: "1px solid rgba(201,168,76,0.3)",
                        padding: "3rem 1.5rem 2.5rem",
                    }}
                >
                    {/* Glow */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(196,30,58,0.16) 0%, transparent 70%)," +
                                "radial-gradient(ellipse 40% 40% at 20% 90%, rgba(201,168,76,0.07) 0%, transparent 60%)",
                        }}
                    />

                    {/* Ornament row */}
                    <div className="relative z-10 flex items-center justify-center gap-4 mb-5">
                        <div className="flex-1 max-w-[100px] h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
                        <div className="w-2 h-2 rotate-45 flex-shrink-0" style={{ background: "#C9A84C" }} />
                        <div className="flex-1 max-w-[100px] h-px" style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
                    </div>

                    <p
                        className="relative z-10 font-devanagari font-light uppercase tracking-widest mb-2 text-[clamp(0.72rem,2vw,0.9rem)]"
                        style={{ color: "#C9A84C" }}
                    >
                        सदैव सत्य मीडिया एंड ब्रॉडकास्टिंग
                    </p>

                    <h1
                        className="font-playfair font-black leading-tight mb-2 relative z-10"
                        style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", color: "#FAF6F0" }}
                    >
                        संपर्क{" "}
                        <span style={{ color: "#C41E3A" }}>करें</span>
                        <span className="block font-cormorant font-normal italic text-[clamp(1rem,2.5vw,1.4rem)]" style={{ color: "#7A6B6B" }}>
                            Get in Touch
                        </span>
                    </h1>

                    <p
                        className="relative z-10 font-cormorant italic tracking-wide mb-6 text-[clamp(0.9rem,2.5vw,1.1rem)]"
                        style={{ color: "#7A6B6B" }}
                    >
                        Transparency · Responsiveness · Trust
                    </p>

                    <div
                        className="inline-flex items-center gap-2 relative z-10 text-[clamp(0.68rem,2vw,0.76rem)] font-medium uppercase tracking-widest"
                        style={{
                            background: "rgba(196,30,58,0.1)",
                            border: "1px solid rgba(196,30,58,0.3)",
                            borderRadius: 2,
                            padding: "0.4rem 1.1rem",
                            color: "#E8374F",
                        }}
                    >
                        <span className="pulse-dot text-[0.45rem]" style={{ color: "#C41E3A" }}>●</span>
                        sadaivsatya.com &nbsp;·&nbsp; Bhopal, Madhya Pradesh
                    </div>
                </header>

                {/* ── MAIN CONTENT ── */}
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

                    {/* ═══ ROW 1: Contact Form (left) | Contact Channels (right) ═══ */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-10 mb-12">

                        {/* ── CONTACT FORM ── */}
                        <section className="fade-up d1">
                            {/* Section label */}
                            <div className="flex items-center gap-3 mb-5">
                                <span
                                    className="font-playfair font-bold whitespace-nowrap text-[clamp(1rem,2.5vw,1.2rem)]"
                                    style={{ color: "#FAF6F0" }}
                                >
                                    संदेश भेजें / Send a Message
                                </span>
                                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #C41E3A 0%, transparent 100%)" }} />
                            </div>

                            {submitted ? (
                                /* ── Success state ── */
                                <div
                                    className="flex flex-col items-center justify-center text-center py-16 px-6"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(196,30,58,0.07) 0%, transparent 100%)",
                                        border: "1px solid rgba(201,168,76,0.2)",
                                        borderLeft: "3px solid #C41E3A",
                                        minHeight: 340,
                                    }}
                                >
                                    <div
                                        className="w-16 h-16 flex items-center justify-center text-2xl mb-5"
                                        style={{
                                            background: "rgba(196,30,58,0.12)",
                                            border: "1px solid rgba(196,30,58,0.3)",
                                            borderRadius: "50%",
                                        }}
                                    >
                                        ✓
                                    </div>
                                    <h3 className="font-playfair font-bold text-xl mb-2" style={{ color: "#FAF6F0" }}>
                                        संदेश प्राप्त हो गया
                                    </h3>
                                    <p className="text-sm mb-6" style={{ color: "rgba(250,246,240,0.6)" }}>
                                        Thank you for reaching out. Our team will respond within 24–48 hours.
                                    </p>
                                    <button
                                        onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", subject: "", message: "" }); }}
                                        className="submit-btn text-xs font-semibold uppercase tracking-widest px-6 py-3"
                                        style={{ background: "#C41E3A", color: "#FAF6F0" }}
                                    >
                                        Send Another →
                                    </button>
                                </div>
                            ) : (
                                /* ── Form ── */
                                <form
                                    onSubmit={handleSubmit}
                                    style={{
                                        background: "linear-gradient(135deg, rgba(196,30,58,0.06) 0%, transparent 100%)",
                                        border: "1px solid rgba(201,168,76,0.15)",
                                        borderLeft: "3px solid #C41E3A",
                                    }}
                                >
                                    {/* Top bar */}
                                    <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #C41E3A 0%, #C9A84C 100%)" }} />

                                    <div className="p-6 sm:p-8 flex flex-col gap-5">
                                        {/* Name + Email */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-[0.72rem] font-semibold uppercase tracking-widest" style={{ color: "#C41E3A" }}>
                                                    Full Name *
                                                </label>
                                                <input
                                                    className="ir-input"
                                                    type="text"
                                                    placeholder="आपका नाम"
                                                    required
                                                    value={formState.name}
                                                    onChange={e => setFormState(p => ({ ...p, name: e.target.value }))}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-[0.72rem] font-semibold uppercase tracking-widest" style={{ color: "#C41E3A" }}>
                                                    Email Address *
                                                </label>
                                                <input
                                                    className="ir-input"
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    required
                                                    value={formState.email}
                                                    onChange={e => setFormState(p => ({ ...p, email: e.target.value }))}
                                                />
                                            </div>
                                        </div>

                                        {/* Subject */}
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[0.72rem] font-semibold uppercase tracking-widest" style={{ color: "#C41E3A" }}>
                                                Subject *
                                            </label>
                                            <select
                                                name="subject"
                                                id="subject"
                                                aria-label="Select a topic…"
                                                aria-required="true"
                                                aria-invalid="false"
                                                aria-errormessage="subject-error"
                                                title="select"
                                                className="ir-input"
                                                required
                                                value={formState.subject}
                                                onChange={e => setFormState(p => ({ ...p, subject: e.target.value }))}
                                            >
                                                <option value="" disabled>Select a topic…</option>
                                                {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-[0.72rem] font-semibold uppercase tracking-widest" style={{ color: "#C41E3A" }}>
                                                Your Message *
                                            </label>
                                            <textarea
                                                className="ir-input resize-none"
                                                rows={6}
                                                placeholder="अपना संदेश यहाँ लिखें…"
                                                required
                                                value={formState.message}
                                                onChange={e => setFormState(p => ({ ...p, message: e.target.value }))}
                                            />
                                        </div>

                                        {/* Footer row */}
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
                                            <p className="text-[0.78rem]" style={{ color: "rgba(250,246,240,0.4)" }}>
                                                * Required fields. We respect your privacy.
                                            </p>
                                            <button
                                                type="submit"
                                                className="submit-btn text-[0.82rem] font-bold uppercase tracking-widest px-8 py-3 whitespace-nowrap flex-shrink-0"
                                                style={{ background: "#C41E3A", color: "#FAF6F0" }}
                                            >
                                                भेजें / Submit →
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </section>

                        {/* ── CONTACT CHANNELS SIDEBAR ── */}
                        <aside className="fade-up d2 flex flex-col gap-5">

                            {/* Section label */}
                            <div className="flex items-center gap-3">
                                <span
                                    className="font-playfair font-bold whitespace-nowrap text-[clamp(1rem,2.5vw,1.2rem)]"
                                    style={{ color: "#FAF6F0" }}
                                >
                                    संपर्क जानकारी
                                </span>
                                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #C41E3A 0%, transparent 100%)" }} />
                            </div>

                            {/* Channel cards */}
                            {contactChannels.map((ch) => (
                                <a
                                    key={ch.label}
                                    href={ch.href}
                                    className="channel-card flex items-start gap-4 p-4 no-underline"
                                    style={{
                                        background: "#1A1212",
                                        border: "1px solid rgba(201,168,76,0.12)",
                                    }}
                                >
                                    <div
                                        className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-base"
                                        style={{
                                            background: "rgba(196,30,58,0.12)",
                                            border: "1px solid rgba(196,30,58,0.25)",
                                        }}
                                    >
                                        {ch.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-[0.7rem] font-semibold uppercase tracking-widest mb-0.5" style={{ color: "#C41E3A" }}>
                                            {ch.label}
                                        </div>
                                        <div className="text-sm font-medium truncate" style={{ color: "#FAF6F0" }}>
                                            {ch.value}
                                        </div>
                                        <div className="text-[0.72rem] mt-0.5" style={{ color: "#7A6B6B" }}>
                                            {ch.tag}
                                        </div>
                                    </div>
                                </a>
                            ))}

                            {/* Address card */}
                            <div
                                className="p-4 flex items-start gap-4"
                                style={{
                                    background: "linear-gradient(135deg, rgba(201,168,76,0.06) 0%, transparent 100%)",
                                    border: "1px solid rgba(201,168,76,0.2)",
                                    borderLeft: "3px solid #C9A84C",
                                }}
                            >
                                <div
                                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-base"
                                    style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
                                >
                                    📍
                                </div>
                                <div>
                                    <div className="text-[0.7rem] font-semibold uppercase tracking-widest mb-1" style={{ color: "#C9A84C" }}>
                                        Registered Office
                                    </div>
                                    <div className="text-sm leading-relaxed" style={{ color: "rgba(250,246,240,0.8)" }}>
                                        B1, Raisen Rd, Manak Vihar,<br />
                                        Patel Nagar, Bhopal<br />
                                        Madhya Pradesh – 462022
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>

                    {/* ═══ ROW 2: Site Info | Office Hours | Legal ═══ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up d3">

                        {/* Website Information */}
                        <div
                            className="p-5"
                            style={{
                                background: "#1A1212",
                                border: "1px solid rgba(201,168,76,0.15)",
                                borderTop: "3px solid #C41E3A",
                            }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#C41E3A" }} />
                                <span className="font-playfair font-bold text-base" style={{ color: "#FAF6F0" }}>
                                    Website Info
                                </span>
                            </div>
                            <div className="flex flex-col gap-3">
                                {siteInfo.map((item) => (
                                    <div key={item.label} className="flex flex-col gap-0.5" style={{ borderBottom: "1px solid rgba(201,168,76,0.07)", paddingBottom: "0.6rem" }}>
                                        <span className="text-[0.68rem] uppercase tracking-widest font-semibold" style={{ color: "#C41E3A" }}>
                                            {item.label}
                                        </span>
                                        <span className="text-sm font-medium" style={{ color: "#FAF6F0" }}>
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div
                            className="p-5"
                            style={{
                                background: "#1A1212",
                                border: "1px solid rgba(201,168,76,0.15)",
                                borderTop: "3px solid #C9A84C",
                            }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#C9A84C" }} />
                                <span className="font-playfair font-bold text-base" style={{ color: "#FAF6F0" }}>
                                    Office Hours
                                </span>
                            </div>
                            <div className="flex flex-col gap-3">
                                {hours.map((h) => (
                                    <div
                                        key={h.day}
                                        className="flex items-center justify-between gap-3 py-2 px-3"
                                        style={{
                                            background: h.open ? "rgba(196,30,58,0.06)" : "rgba(255,255,255,0.02)",
                                            border: `1px solid ${h.open ? "rgba(196,30,58,0.15)" : "rgba(255,255,255,0.04)"}`,
                                        }}
                                    >
                                        <span className="text-[0.82rem]" style={{ color: "rgba(250,246,240,0.75)" }}>
                                            {h.day}
                                        </span>
                                        <span
                                            className="text-[0.78rem] font-semibold flex-shrink-0"
                                            style={{ color: h.open ? "#C9A84C" : "#7A6B6B" }}
                                        >
                                            {h.time}
                                        </span>
                                    </div>
                                ))}
                                <p className="text-[0.72rem] mt-1" style={{ color: "rgba(250,246,240,0.35)" }}>
                                    Response times may vary during public holidays.
                                </p>
                            </div>
                        </div>

                        {/* Legal Notice */}
                        <div
                            className="p-5 sm:col-span-2 lg:col-span-1"
                            style={{
                                background: "linear-gradient(135deg, rgba(196,30,58,0.06) 0%, transparent 100%)",
                                border: "1px solid rgba(201,168,76,0.15)",
                                borderTop: "3px solid rgba(201,168,76,0.4)",
                            }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#C9A84C" }} />
                                <span className="font-playfair font-bold text-base" style={{ color: "#FAF6F0" }}>
                                    Legal Notice
                                </span>
                            </div>
                            <p className="text-[0.85rem] leading-relaxed mb-4" style={{ color: "rgba(250,246,240,0.65)" }}>
                                All content published on sadaivsatya.com is for informational purposes only.
                                We strive for accuracy, but we do not guarantee the completeness or reliability
                                of any information presented.
                            </p>
                            <p className="text-[0.85rem] leading-relaxed" style={{ color: "rgba(250,246,240,0.65)" }}>
                                For legal correspondence, copyright concerns, or formal complaints, please
                                direct your communication to our editorial team.
                            </p>
                            <div className="mt-4 pt-4 flex flex-wrap gap-3" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
                                {[
                                    { label: "Privacy Policy", href: "/privacy-policy" },
                                    { label: "Editorial Policy", href: "/editorial-policy" },
                                ].map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="gold-link text-[0.75rem] font-medium uppercase tracking-widest flex items-center gap-1"
                                        style={{ color: "#C9A84C", textDecoration: "none" }}
                                    >
                                        <span style={{ color: "#C41E3A", fontSize: "0.7rem" }}>↗</span>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ═══ INVESTOR CTA BANNER ═══ */}
                    <div
                        className="mt-10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 fade-up d4"
                        style={{
                            background: "linear-gradient(135deg, rgba(196,30,58,0.1) 0%, rgba(201,168,76,0.06) 100%)",
                            border: "1px solid rgba(201,168,76,0.2)",
                            borderLeft: "4px solid #C41E3A",
                        }}
                    >
                        <div>
                            <div className="text-[0.7rem] uppercase tracking-widest font-semibold mb-1" style={{ color: "#C9A84C" }}>
                                Investor Relations
                            </div>
                            <p className="font-playfair font-bold text-lg leading-snug" style={{ color: "#FAF6F0" }}>
                                Looking for investor-specific enquiries?
                            </p>
                            <p className="text-sm mt-1" style={{ color: "rgba(250,246,240,0.55)" }}>
                                Visit our dedicated Investor Relations page for corporate governance, reports & directorships.
                            </p>
                        </div>
                        <Link
                            href="/investor-relations"
                            className="submit-btn flex-shrink-0 text-[0.8rem] font-bold uppercase tracking-widest px-6 py-3"
                            style={{ background: "#C41E3A", color: "#FAF6F0", textDecoration: "none", whiteSpace: "nowrap" }}
                        >
                            IR Page →
                        </Link>
                    </div>

                </div>

                {/* ── FOOTER ── */}
                <footer
                    className="text-center text-[0.75rem] tracking-wider px-4 py-5"
                    style={{ borderTop: "1px solid rgba(201,168,76,0.3)", color: "#7A6B6B" }}
                >
                    © 2024{" "}
                    <span style={{ color: "#C9A84C" }}>Sadaiv Satya Media and Broadcasting Pvt. Ltd.</span>
                    &nbsp;·&nbsp; All Rights Reserved &nbsp;·&nbsp; भोपाल, मध्य प्रदेश
                </footer>
            </div>
        </>
    );
}