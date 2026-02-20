'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const reporter = {
  name: 'प्रिया शर्मा',
  nameEn: 'Priya Sharma',
  designation: 'वरिष्ठ राजनीतिक संवाददाता',
  department: 'राजनीतिक डेस्क',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  bio: 'राजनीतिक पत्रकारिता में 5+ वर्षों के समृद्ध अनुभव के साथ, प्रिया शर्मा सदैव सत्य न्यूज़ की एक प्रतिष्ठित और विश्वसनीय संवाददाता हैं। उन्होंने राष्ट्रीय और अंतर्राष्ट्रीय राजनीति पर गहन रिपोर्टिंग की है। संसदीय कवरेज और चुनावी विश्लेषण में उनकी विशेष दक्षता है।',
  email: 'priya@sadaivsatya.com',
  phone: '+91 98765 43210',
  gender: 'महिला',
  dob: '15 मार्च 1992',
  area: 'नई दिल्ली, दिल्ली',
  experience: '5+ वर्ष  ·  2019 से कार्यरत',
  stats: [
    { num: '247',  label: 'प्रकाशित लेख',  color: '#1e3a5f' },
    { num: '8.5k', label: 'पाठक / माह',    color: '#c9a84c' },
    { num: '5+',   label: 'वर्ष अनुभव',    color: '#2d6a4f' },
    { num: '12',   label: 'राष्ट्रीय पुरस्कार', color: '#7c3aed' },
  ],
  expertise: ['राजनीति', 'चुनाव कवरेज', 'संसदीय रिपोर्टिंग', 'अंतर्राष्ट्रीय संबंध'],
  languages: ['हिंदी', 'English', 'اردو'],
  social: {
    twitter:   'https://twitter.com',
    facebook:  'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube:   'https://youtube.com',
    email:     'mailto:priya@sadaivsatya.com',
    whatsapp:  'https://wa.me/919876543210',
  },
};

// UPDATED: Only 4 categories for news section
const categories = [
  { id: 'all',          name: 'सभी'         },
  { id: 'news',         name: 'न्यूज़'       },
  { id: 'photos',       name: 'फोटो'        },
  { id: 'video',        name: 'वीडियो'      },
  { id: 'webstories',   name: 'वेब स्टोरीज़' },
];

const newsArticles = [
  { id:1, category:'news',       type:'article',    title:'संसद में नए विधेयक पर हुई गहन चर्चा, विपक्ष ने उठाए अहम सवाल',                    image:'https://images.unsplash.com/photo-1586339949216-35c2747cc36d?w=600&h=400&fit=crop', date:'15 फरवरी 2026', views:'12.5k', comments:89,  readTime:'5 मिनट' },
  { id:2, category:'news',       type:'article',    title:'बजट 2026: मध्यम वर्ग को मिली बड़ी राहत, आयकर स्लैब में व्यापक बदलाव',               image:'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop', date:'14 फरवरी 2026', views:'18.2k', comments:124, readTime:'6 मिनट' },
  { id:3, category:'video',      type:'video',      title:'नई शिक्षा नीति के तहत डिजिटल शिक्षा को मिलेगा बड़ा बढ़ावा',                          image:'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&h=400&fit=crop', date:'13 फरवरी 2026', views:'9.8k',  comments:67,  readTime:'4 मिनट' },
  { id:4, category:'news',       type:'article',    title:'भारत-जापान के बीच रक्षा समझौते पर हस्ताक्षर, द्विपक्षीय संबंध होंगे और मजबूत',       image:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop', date:'12 फरवरी 2026', views:'15.3k', comments:98,  readTime:'7 मिनट' },
  { id:5, category:'photos',     type:'photo',      title:'संसद सत्र: तस्वीरों में देखें आज की बड़ी खबरें',                                     image:'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&h=400&fit=crop', date:'15 फरवरी 2026', views:'25.7k', comments:156, photoCount:15 },
  { id:6, category:'webstories', type:'webstory',   title:'आईपीएल 2026: नई टीमों की घोषणा, क्रिकेट प्रेमियों में उत्साह की लहर',               image:'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop', date:'11 फरवरी 2026', views:'21.4k', comments:187, readTime:'5 मिनट' },
];

const ADS = [
  { id:1, emoji:'🎯', title:'डिजिटल मार्केटिंग',   sub:'3 महीने में एक्सपर्ट बनें। बैच शुरू!',           cta:'अभी जुड़ें',     accent:'#1e3a5f', bg:'#eef2f7' },
  { id:2, emoji:'💻', title:'वेब डेवलपमेंट कोर्स', sub:'50% छूट के साथ करियर को नई दिशा दें!',          cta:'एनरोल करें',    accent:'#1e40af', bg:'#eff6ff' },
  { id:3, emoji:'🚀', title:'स्टार्टअप बूटकैम्प',  sub:'अपना बिजनेस शुरू करें। फ्री ट्रायल!',          cta:'मुफ्त शुरू करें', accent:'#6d28d9', bg:'#f5f3ff' },
  { id:4, emoji:'📱', title:'नवीनतम स्मार्टफोन',   sub:'EMI पर उपलब्ध। आज ही बुक करें!',                cta:'अभी खरीदें',   accent:'#0f172a', bg:'#f8fafc' },
  { id:5, emoji:'📚', title:'ऑनलाइन पुस्तकालय',   sub:'10 लाख+ किताबें। पहला महीना फ्री!',            cta:'फ्री ट्रायल',   accent:'#b45309', bg:'#fffbeb' },
  { id:6, emoji:'🏠', title:'होम लोन ऑफर',        sub:'6.9% ब्याज दर पर लोन। आज ही अप्लाई।',          cta:'अप्लाई करें',  accent:'#065f46', bg:'#ecfdf5' },
];

const TRENDING = [
  { id:1, title:'बजट 2026 की 10 बड़ी बातें जो आपको जाननी चाहिए', date:'आज',         views:'32.1k', cat:'अर्थव्यवस्था' },
  { id:2, title:'संसद में विधेयक पर विपक्ष का जोरदार प्रदर्शन',   date:'कल',         views:'18.9k', cat:'राजनीति'     },
  { id:3, title:'आईपीएल नई टीमों पर क्रिकेट जगत की प्रतिक्रिया', date:'2 दिन पहले', views:'15.2k', cat:'खेल'         },
  { id:4, title:'भारत-जापान रक्षा सहयोग: विशेषज्ञों की राय',      date:'3 दिन पहले', views:'11.7k', cat:'राजनीति'     },
  { id:5, title:'डिजिटल शिक्षा नीति से ग्रामीण छात्रों को लाभ',  date:'4 दिन पहले', views:'9.3k',  cat:'तकनीक'       },
];

const Ic = {
  mail:    ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  phone:   ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 2.7h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.4a16 16 0 0 0 5.51 5.51l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.92z"/></svg>,
  gender:  ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="12" cy="9" r="5"/><path d="M12 14v7M9 18h6"/></svg>,
  cal:     ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
  map:     ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  star:    ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  check:   ()=><svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-.529 3.78 3.745 3.745 0 01-3.78.53 3.745 3.745 0 01-3.068 1.592c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 01-3.78-.529 3.745 3.745 0 01-.53-3.78 3.745 3.745 0 01-1.592-3.068c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 01.529-3.78 3.745 3.745 0 013.78-.53A3.745 3.745 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.78.529 3.745 3.745 0 01.53 3.78A3.745 3.745 0 0121 12z"/></svg>,
  eye:     ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>,
  msg:     ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  clock:   ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  arrow:   ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  news:    ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z"/></svg>,
  trend:   ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  chevron: ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><polyline points="6 9 12 15 18 9"/></svg>,
  menu:    ()=><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>,
  tw:  ()=><svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  fb:  ()=><svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  ig:  ()=><svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  yt:  ()=><svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  wa:  ()=><svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
};

const INFO_FIELDS = [
  { Icon: Ic.mail,   label: 'ईमेल',       value: reporter.email,      href: `mailto:${reporter.email}` },
  { Icon: Ic.phone,  label: 'फोन',        value: reporter.phone,      href: `tel:+919876543210` },
  { Icon: Ic.gender, label: 'लिंग',       value: reporter.gender },
  { Icon: Ic.cal,    label: 'जन्म तिथि', value: reporter.dob },
  { Icon: Ic.map,    label: 'क्षेत्र',   value: reporter.area },
  { Icon: Ic.star,   label: 'अनुभव',     value: reporter.experience },
];

const SOCIALS = [
  { key:'tw', Icon: Ic.tw, label:'Twitter / X',  href: reporter.social.twitter,   ic:'#000', bg:'#f3f4f6' },
  { key:'fb', Icon: Ic.fb, label:'Facebook',      href: reporter.social.facebook,  ic:'#1877f2', bg:'#e8f0fe' },
  { key:'ig', Icon: Ic.ig, label:'Instagram',     href: reporter.social.instagram, ic:'#e1306c', bg:'#fce8f3' },
  { key:'yt', Icon: Ic.yt, label:'YouTube',       href: reporter.social.youtube,   ic:'#ff0000', bg:'#fee2e2' },
  { key:'em', Icon: Ic.mail, label:'ईमेल',       href: reporter.social.email,     ic:'#1e3a5f', bg:'#eef2f7' },
  { key:'wa', Icon: Ic.wa, label:'WhatsApp',      href: reporter.social.whatsapp,  ic:'#25d366', bg:'#dcfce7' },
];

function Divider() {
  return <div className="h-px w-full" style={{ background: 'linear-gradient(90deg,transparent,#cbd5e1,transparent)' }} />;
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="text-xs font-black uppercase tracking-[2px]" style={{ color: '#64748b' }}>{children}</span>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,#cbd5e1,transparent)' }} />
    </div>
  );
}

function AdBadge({ color }) {
  return (
    <span className="absolute top-3 right-3 text-[9px] font-black tracking-[2px] uppercase px-2 py-1 rounded-md border bg-white"
      style={{ color, borderColor: `${color}30` }}>
      विज्ञापन
    </span>
  );
}

function InfoCard({ Icon, label, value, href }) {
  const inner = (
    <div className="group flex items-center gap-3 bg-white rounded-2xl p-4 border border-slate-100 hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center p-2.5 flex-shrink-0"
        style={{ background: '#eef2f7', color: '#1e3a5f' }}>
        <Icon />
      </div>
      <div className="min-w-0">
        {/* INCREASED: label from 9px tracking to xs */}
        <p className="text-[11px] font-black uppercase tracking-[1.5px] mb-0.5" style={{ color: '#94a3b8' }}>{label}</p>
        {/* INCREASED: value from sm to base */}
        <p className={`text-base font-bold truncate ${href ? 'text-blue-700' : 'text-slate-800'}`}>{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function SocialButton({ Icon, label, href, ic, bg }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      // INCREASED: text from xs to sm, padding bigger
      className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-100 bg-white text-slate-600 text-sm font-semibold hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <span className="w-7 h-7 rounded-lg flex items-center justify-center p-1.5" style={{ background: bg, color: ic }}><Icon /></span>
      <span className="text-slate-700">{label}</span>
    </a>
  );
}

function StatCard({ num, label, color }) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: color }} />
      {/* INCREASED: number from 30px to 36px */}
      <p className="font-mono text-[38px] font-black leading-none mb-2" style={{ color }}>{num}</p>
      {/* INCREASED: label from 11px to 13px */}
      <p className="text-[13px] font-semibold" style={{ color: '#94a3b8' }}>{label}</p>
    </div>
  );
}

function NewsCard({ article, catMap }) {
  const typeLabel = article.type === 'photo' ? `📸 ${article.photoCount} Photos`
    : article.type === 'video' ? '🎬 वीडियो'
    : article.type === 'webstory' ? '📖 वेब स्टोरी'
    : '📰 न्यूज़';
  const cat = catMap[article.category];
  return (
    <article className="group flex bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-100 transition-all duration-300 cursor-pointer">
      <div className="relative w-48 h-[148px] flex-shrink-0 overflow-hidden">
        <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wide">
          {typeLabel}
        </span>
      </div>
      <div className="flex-1 p-5 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-full text-white"
              style={{ background: '#1e3a5f' }}>{cat?.name}</span>
            {article.readTime && (
              <span className="flex items-center gap-1 text-xs font-medium" style={{ color: '#94a3b8' }}>
                <span className="w-3.5 h-3.5"><Ic.clock /></span>{article.readTime}
              </span>
            )}
          </div>
          {/* INCREASED: title from 14px to 16px */}
          <h3 className="text-[16px] font-bold leading-snug text-slate-900 line-clamp-2 group-hover:text-blue-900 transition-colors">
            {article.title}
          </h3>
        </div>
        {/* INCREASED: meta text from 11px to 13px */}
        <div className="flex items-center gap-3 text-[13px] pt-3 border-t border-slate-50 mt-2.5" style={{ color: '#94a3b8' }}>
          <span className="font-medium">{article.date}</span>
          <span className="flex items-center gap-1 font-bold" style={{ color: '#1e3a5f' }}>
            <span className="w-3.5 h-3.5"><Ic.eye /></span>{article.views}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3.5 h-3.5"><Ic.msg /></span>{article.comments}
          </span>
          <span className="ml-auto flex items-center gap-1 font-black text-sm group-hover:gap-2 transition-all" style={{ color: '#c9a84c' }}>
            पढ़ें <span className="w-4 h-4"><Ic.arrow /></span>
          </span>
        </div>
      </div>
    </article>
  );
}

function InFeedAd({ ad }) {
  return (
    <div className="relative rounded-2xl p-8 text-center cursor-pointer hover:shadow-xl hover:scale-[1.01] transition-all duration-300 border overflow-hidden"
      style={{ background: ad.bg, borderColor: `${ad.accent}20` }}>
      <AdBadge color={ad.accent} />
      <div className="text-5xl mb-3">{ad.emoji}</div>
      {/* INCREASED: ad title from lg to xl */}
      <h3 className="text-xl font-black mb-2" style={{ color: ad.accent }}>{ad.title}</h3>
      <p className="text-base mb-5 leading-relaxed" style={{ color: '#64748b' }}>{ad.sub}</p>
      <button className="text-white text-base font-black px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition-opacity"
        style={{ background: ad.accent }}>{ad.cta} →</button>
    </div>
  );
}

function SidebarAd({ ad }) {
  return (
    <div className="relative rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all duration-300 border overflow-hidden group"
      style={{ background: ad.bg, borderColor: `${ad.accent}20` }}>
      <AdBadge color={ad.accent} />
      <div className="text-center">
        <div className="text-4xl mb-3 mt-1 group-hover:scale-110 transition-transform duration-300">{ad.emoji}</div>
        {/* INCREASED sidebar ad text */}
        <h3 className="text-base font-black mb-1.5" style={{ color: ad.accent }}>{ad.title}</h3>
        <p className="text-[13px] mb-4 leading-relaxed" style={{ color: '#64748b' }}>{ad.sub}</p>
        <button className="w-full text-white text-sm font-black py-3 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
          style={{ background: ad.accent }}>{ad.cta} →</button>
      </div>
    </div>
  );
}

export default function ReporterProfilePage() {
  const [activeCat, setActiveCat] = useState('all');
  const [showAll,   setShowAll]   = useState(false);

  const catMap   = Object.fromEntries(categories.map(c => [c.id, c]));
  const filtered = activeCat === 'all' ? newsArticles : newsArticles.filter(a => a.category === activeCat);
  const shown    = showAll ? filtered : filtered.slice(0, 4);

  const [adBanner, adFeed1, adFeed2, ...adSide] = ADS;

  return (
    <div className="min-h-screen" style={{ background: '#f5f7fa', fontFamily: "'Noto Sans Devanagari', sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700;900&family=DM+Serif+Display:ital@0;1&family=Playfair+Display:wght@700;900&family=JetBrains+Mono:wght@400;600;700&display=swap');
        *, body { font-family: 'Noto Sans Devanagari', sans-serif; font-size: 16px; }
        .f-display { font-family: 'DM Serif Display', 'Playfair Display', serif !important; }
        .f-mono    { font-family: 'JetBrains Mono', monospace !important; }
        .clamp2    { display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden; }

        @keyframes fadeUp   { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:.25} }
        .a1 { animation: fadeUp .5s ease both; }
        .a2 { animation: fadeUp .5s .09s ease both; }
        .a3 { animation: fadeUp .5s .18s ease both; }
        .blink { animation: blink 1.5s ease-in-out infinite; }

        .dot-grid {
          background-image: radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px);
          background-size: 22px 22px;
        }
        .scroll-thin::-webkit-scrollbar { height:3px; }
        .scroll-thin::-webkit-scrollbar-thumb { background:#cbd5e1; border-radius:9px; }

        /* DESKTOP TEXT SCALING — applied at md+ breakpoints */
        @media (min-width: 768px) {
          .desktop-body   { font-size: 16px !important; line-height: 1.75; }
          .desktop-sm     { font-size: 15px !important; }
          .desktop-xs     { font-size: 13px !important; }
          .desktop-label  { font-size: 12px !important; }
        }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-18 flex items-center justify-between gap-4" style={{height:'68px'}}>
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md"
              style={{ background: 'linear-gradient(135deg,#1e3a5f,#0f2444)' }}>
              <span className="text-white text-[22px] font-black f-display leading-none">स</span>
            </div>
            <div>
              {/* INCREASED: logo text */}
              <p className="f-display text-[20px] font-black leading-none" style={{ color: '#0f1c2e' }}>सदैव सत्य</p>
              <p className="text-[9px] font-black tracking-[3px] uppercase leading-none mt-0.5" style={{ color: '#c9a84c' }}>NEWS NETWORK</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {[['/', 'होम'],['/news','समाचार'],['/reporters','रिपोर्टर'],['/live','लाइव'],['/videos','वीडियो'],['/contact','संपर्क']].map(([href, label]) => (
              <Link key={href} href={href}
                // INCREASED: nav text from sm to base
                className={`px-4 py-2 rounded-xl text-[15px] font-bold transition-all ${label === 'रिपोर्टर'
                  ? 'text-white shadow-md' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
                style={label === 'रिपोर्टर' ? { background: 'linear-gradient(135deg,#1e3a5f,#0f2444)' } : {}}>
                {label}
              </Link>
            ))}
          </nav>

          <button className="md:hidden w-9 h-9 p-1.5" style={{ color: '#1e3a5f' }}><Ic.menu /></button>
        </div>
      </header>

      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-100">
        {/* INCREASED: breadcrumb from xs to sm */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center gap-2 text-sm font-semibold" style={{ color: '#94a3b8' }}>
          <Link href="/" className="hover:text-blue-900 transition-colors">होम</Link>
          <span className="font-black" style={{ color: '#c9a84c' }}>/</span>
          <Link href="/reporters" className="hover:text-blue-900 transition-colors">रिपोर्टर</Link>
          <span className="font-black" style={{ color: '#c9a84c' }}>/</span>
          <span className="font-bold" style={{ color: '#0f1c2e' }}>{reporter.name}</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 pb-24">

        {/* HERO PROFILE CARD */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-8 a1">

          <div className="relative h-52 overflow-hidden"
            style={{ background: 'linear-gradient(125deg, #0f2444 0%, #1e3a5f 50%, #162e4d 100%)' }}>
            <div className="dot-grid absolute inset-0" />
            <div className="absolute bottom-0 left-0 right-0 h-[3px]"
              style={{ background: 'linear-gradient(90deg, transparent, #c9a84c 30%, #f0d080 60%, #c9a84c 80%, transparent)' }} />
            <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-8 w-52 h-52 rounded-full border border-white/8" />
            <div className="absolute right-32 top-10 w-24 h-24 rounded-full border border-white/10" />

            <div className="absolute top-5 left-6 flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <span className="blink w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: '#c9a84c' }} />
              {/* INCREASED: badge text */}
              <span className="text-white text-[11px] font-black tracking-[2px] uppercase">Verified Reporter</span>
            </div>

            <div className="absolute top-5 right-6 px-4 py-2 rounded-lg border border-white/15 bg-black/20 backdrop-blur-md">
              {/* INCREASED: dept tag text */}
              <span className="text-[11px] font-bold tracking-wider" style={{ color: '#c9a84c' }}>{reporter.department}</span>
            </div>

            <div className="absolute bottom-5 right-6 f-display text-white/[0.06] text-7xl font-black tracking-tight select-none">PRESS</div>
          </div>

          <div className="px-6 md:px-10 pb-9">
            <div className="flex flex-col lg:flex-row gap-8">

              <div className="flex-shrink-0 -mt-16 relative z-10">
                <div className="w-36 h-36 rounded-2xl p-[3px] shadow-2xl"
                  style={{ background: 'linear-gradient(135deg,#c9a84c,#f0d080,#c9a84c)' }}>
                  <div className="w-full h-full rounded-[13px] overflow-hidden bg-slate-200">
                    <Image src={reporter.image} alt={reporter.name} width={144} height={144} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full border-[3px] border-white flex items-center justify-center shadow-lg"
                  style={{ background: '#1e3a5f' }}>
                  <span className="w-6 h-6 text-white p-0.5"><Ic.check /></span>
                </div>
              </div>

              <div className="flex-1 pt-4">
                <div className="mb-5">
                  {/* INCREASED: name from 40px to 48px */}
                  <h1 className="f-display text-[48px] font-black leading-[1.05] mb-1" style={{ color: '#0f1c2e' }}>
                    {reporter.name}
                  </h1>
                  {/* INCREASED: english name tracking */}
                  <p className="text-[12px] font-black tracking-[3px] uppercase mb-3" style={{ color: '#94a3b8' }}>{reporter.nameEn}</p>
                  <div className="flex flex-wrap gap-2">
                    {/* INCREASED: designation badge from sm to base */}
                    <span className="inline-flex items-center gap-2 text-base font-bold px-5 py-2 rounded-full text-white shadow-sm"
                      style={{ background: 'linear-gradient(135deg,#1e3a5f,#0f2444)' }}>
                      {reporter.designation}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-full border"
                      style={{ color: '#92400e', borderColor: '#fde68a', background: '#fefce8' }}>
                      ✦ {reporter.department}
                    </span>
                  </div>
                </div>

                <div className="relative rounded-2xl px-5 py-5 mb-6 border overflow-hidden"
                  style={{ background: '#f8fafc', borderColor: '#e2e8f0' }}>
                  <span className="absolute -top-6 left-3 f-display text-[88px] leading-none select-none pointer-events-none font-black"
                    style={{ color: 'rgba(30,58,95,0.05)' }}>"</span>
                  <SectionLabel>प्रोफाइल सारांश</SectionLabel>
                  {/* INCREASED: bio text from 13px to 15px */}
                  <p className="text-[15px] leading-[1.9] relative z-10" style={{ color: '#475569' }}>{reporter.bio}</p>
                </div>

                <div className="mb-6">
                  <SectionLabel>व्यक्तिगत जानकारी</SectionLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                    {INFO_FIELDS.map(f => <InfoCard key={f.label} {...f} />)}
                  </div>
                </div>

                <div className="mb-6">
                  <SectionLabel>विशेषज्ञता एवं भाषाएँ</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {reporter.expertise.map(e => (
                      // INCREASED: expertise tags from xs to sm
                      <span key={e} className="text-sm font-bold px-4 py-2 rounded-full border hover:scale-105 transition-transform cursor-default"
                        style={{ color: '#1e3a5f', borderColor: '#93c5fd', background: '#eff6ff' }}>◆ {e}</span>
                    ))}
                    {reporter.languages.map(l => (
                      <span key={l} className="text-sm font-bold px-4 py-2 rounded-full border hover:scale-105 transition-transform cursor-default"
                        style={{ color: '#92400e', borderColor: '#fcd34d', background: '#fefce8' }}>◈ {l}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <SectionLabel>सोशल मीडिया</SectionLabel>
                  <div className="flex flex-wrap gap-2">
                    {SOCIALS.map(s => <SocialButton key={s.key} {...s} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 a2">
          {reporter.stats.map(s => <StatCard key={s.label} {...s} />)}
        </div>

        {/* AD BANNER */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-5 rounded-2xl p-7 md:p-9 mb-8 border cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden a3"
          style={{ background: adBanner.bg, borderColor: `${adBanner.accent}25` }}>
          <div className="absolute right-0 top-0 bottom-0 w-52 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at right, ${adBanner.accent}18, transparent)` }} />
          <div className="relative z-10 text-center md:text-left">
        <div className='flex justify-center'>    <AdBadge color={adBanner.accent} /></div>
            {/* INCREASED: banner title from xl to 2xl */}
            <h3 className="text-2xl font-black mt-4 md:mt-0 mb-1.5" style={{ color: adBanner.accent }}>{adBanner.title}</h3>
            <p className="text-base" style={{ color: '#64748b' }}>{adBanner.sub}</p>
          </div>
          <div className="flex items-center gap-5 flex-shrink-0 relative z-10">
            <span className="text-5xl">{adBanner.emoji}</span>
            <button className="text-white font-black text-base px-8 py-3.5 rounded-xl shadow-md hover:opacity-90 transition-opacity"
              style={{ background: adBanner.accent }}>{adBanner.cta} →</button>
          </div>
        </div>

        {/* NEWS SECTION HEADER */}
        <div className="flex items-center justify-between mb-4">
          {/* INCREASED: section heading from xl to 2xl */}
          <h2 className="f-display flex items-center gap-2.5 text-2xl font-black" style={{ color: '#0f1c2e' }}>
            <span className="w-6 h-6" style={{ color: '#1e3a5f' }}><Ic.news /></span>
            प्रकाशित समाचार
            <span className="f-mono text-base font-semibold" style={{ color: '#94a3b8' }}>({filtered.length})</span>
          </h2>
          <Link href="#"
            // INCREASED: link text from xs to sm
            className="text-sm font-black border rounded-xl px-5 py-2.5 transition-all hover:text-white hover:shadow-sm"
            style={{ color: '#1e3a5f', borderColor: 'rgba(30,58,95,0.25)', background: '#eef2f7' }}>
            सभी देखें →
          </Link>
        </div>

        {/* Category tabs — ONLY 4: सभी, न्यूज़, फोटो, वीडियो, वेब स्टोरीज़ */}
        <div className="flex gap-2 flex-nowrap overflow-x-auto scroll-thin pb-1 mb-6">
          {categories.map(cat => (
            <button key={cat.id} onClick={() => { setActiveCat(cat.id); setShowAll(false); }}
              // INCREASED: tab text from xs to sm
              className="flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-black border transition-all whitespace-nowrap"
              style={activeCat === cat.id
                ? { background: '#1e3a5f', borderColor: '#1e3a5f', color: '#fff', boxShadow: '0 4px 14px rgba(30,58,95,0.25)' }
                : { background: '#fff', borderColor: '#e2e8f0', color: '#64748b' }}>
              {cat.name}
            </button>
          ))}
        </div>

        {/* CONTENT + SIDEBAR GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">

          {/* ARTICLES COLUMN */}
          <div className="flex flex-col gap-4">
            {shown.map((article, idx) => (
              <div key={article.id}>
                <NewsCard article={article} catMap={catMap} />
                {idx === 1 && <div className="mt-4"><InFeedAd ad={adFeed1} /></div>}
                {idx === 3 && shown.length > 3 && <div className="mt-4"><InFeedAd ad={adFeed2} /></div>}
              </div>
            ))}

            {filtered.length > 4 && !showAll && (
              <div className="text-center pt-2">
                <button onClick={() => setShowAll(true)}
                  className="border font-black text-base px-9 py-3.5 rounded-xl transition-all inline-flex items-center gap-2 hover:text-white hover:shadow-md"
                  style={{ color: '#1e3a5f', borderColor: 'rgba(30,58,95,0.25)', background: '#eef2f7' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#1e3a5f'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#eef2f7'; }}>
                  अधिक समाचार देखें
                  <span className="w-5 h-5"><Ic.chevron /></span>
                </button>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="flex flex-col gap-5 lg:sticky lg:top-20 self-start">

            <SidebarAd ad={adSide[0]} />

            {/* Trending News */}
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-5 py-4 flex items-center gap-2.5 border-b border-slate-100"
                style={{ background: 'linear-gradient(90deg,#f8fafc,#fff)' }}>
                <span className="w-5 h-5" style={{ color: '#c9a84c' }}><Ic.trend /></span>
                {/* INCREASED: trending heading */}
                <span className="text-[11px] font-black uppercase tracking-[2px] flex-1" style={{ color: '#64748b' }}>ट्रेंडिंग समाचार</span>
                <span className="blink w-2 h-2 rounded-full" style={{ background: '#1e3a5f' }} />
              </div>
              <div className="p-4 flex flex-col">
                {TRENDING.map((item, idx) => (
                  <div key={item.id}
                    className={`group flex items-start gap-3 py-3.5 cursor-pointer ${idx < TRENDING.length - 1 ? 'border-b border-slate-50' : ''}`}>
                    <span className="f-mono text-[18px] font-black min-w-[28px] leading-none mt-0.5"
                      style={{ color: 'rgba(30,58,95,0.25)' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 min-w-0">
                      {/* INCREASED: trending title from 13px to 15px */}
                      <p className="text-[15px] font-semibold leading-snug clamp2 group-hover:text-blue-900 transition-colors"
                        style={{ color: '#1e293b' }}>{item.title}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded"
                          style={{ color: '#1e3a5f', background: '#eef2f7' }}>{item.cat}</span>
                        {/* INCREASED: meta text in sidebar */}
                        <span className="text-xs" style={{ color: '#94a3b8' }}>{item.date}</span>
                        <span className="text-xs font-bold ml-auto" style={{ color: '#c9a84c' }}>{item.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <SidebarAd ad={adSide[1]} />
            <SidebarAd ad={adSide[2]} />

            {/* Contact card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center p-2.5"
                  style={{ background: '#eef2f7', color: '#1e3a5f' }}><Ic.phone /></div>
                <div>
                  {/* INCREASED: contact card heading */}
                  <h3 className="font-black text-base" style={{ color: '#0f1c2e' }}>रिपोर्टर से संपर्क</h3>
                  <p className="text-[11px] font-semibold" style={{ color: '#94a3b8' }}>24/7 उपलब्ध</p>
                </div>
              </div>
              <Divider />
              {/* INCREASED: contact body from xs to sm */}
              <p className="text-sm leading-relaxed my-3" style={{ color: '#64748b' }}>
                सुझाव, शिकायत, या प्रेस विज्ञप्ति साझा करना चाहते हैं? हमसे जुड़ें।
              </p>
              <button className="w-full text-white font-black text-base py-3.5 rounded-xl transition-all hover:opacity-90 shadow-md flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg,#1e3a5f,#0f2444)' }}>
                <span className="w-4 h-4"><Ic.mail /></span>
                मैसेज भेजें
              </button>
            </div>

          </aside>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ background: '#0f1c2e', color: '#fff' }}>
        <div className="h-[3px]" style={{ background: 'linear-gradient(90deg,transparent,#c9a84c 25%,#f0d080 55%,#c9a84c 80%,transparent)' }} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-12 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ background: 'linear-gradient(135deg,#1e3a5f,#0f2444)', border: '1px solid rgba(201,168,76,0.3)' }}>
                  <span className="f-display text-white text-xl font-black">स</span>
                </div>
                <div>
                  <p className="f-display text-lg font-black">सदैव सत्य</p>
                  <p className="text-[9px] font-black tracking-[3px] uppercase" style={{ color: '#c9a84c' }}>NEWS NETWORK</p>
                </div>
              </div>
              {/* INCREASED: footer body from xs to sm */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748b' }}>
                भारत का विश्वसनीय समाचार स्रोत। निष्पक्ष, तथ्यात्मक और जन-कल्याणकारी पत्रकारिता।
              </p>
              <div className="flex gap-2">
                {[{I:Ic.fb,c:'#1877f2'},{I:Ic.tw,c:'#fff'},{I:Ic.ig,c:'#e1306c'},{I:Ic.yt,c:'#ff0000'}].map(({I,c},i) => (
                  <a key={i} href="#"
                    className="w-10 h-10 rounded-xl flex items-center justify-center p-2.5 border border-white/10 hover:border-white/25 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.06)', color: c }}>
                    <I />
                  </a>
                ))}
              </div>
            </div>

            <div>
              {/* INCREASED: footer headings */}
              <h4 className="text-[11px] font-black uppercase tracking-[2.5px] mb-4" style={{ color: '#475569' }}>श्रेणियाँ</h4>
              <ul className="space-y-3">
                {['राजनीति','अर्थव्यवस्था','खेल','मनोरंजन','तकनीक','फोटो / वीडियो'].map(c => (
                  <li key={c}>
                    {/* INCREASED: footer links from xs to sm */}
                    <a href="#" className="text-sm flex items-center gap-2 transition-colors hover:text-white" style={{ color: '#64748b' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#c9a84c' }} />{c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[2.5px] mb-4" style={{ color: '#475569' }}>त्वरित लिंक</h4>
              <ul className="space-y-3">
                {['हमारे बारे में','रिपोर्टर','विज्ञापन दें','गोपनीयता नीति','नियम व शर्तें','संपर्क करें'].map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm flex items-center gap-2 transition-colors hover:text-white" style={{ color: '#64748b' }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#c9a84c' }} />{l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[2.5px] mb-4" style={{ color: '#475569' }}>न्यूज़लेटर</h4>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>ताज़ा समाचार सीधे इनबॉक्स में पाएं।</p>
              <div className="flex gap-2 mb-2">
                <input type="email" placeholder="ईमेल दर्ज करें"
                  className="flex-1 rounded-xl px-3 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                  onFocus={e => e.currentTarget.style.borderColor = '#c9a84c'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
                />
                <button className="px-4 py-3 rounded-xl text-sm font-black hover:opacity-90 transition-opacity"
                  style={{ background: '#c9a84c', color: '#0f1c2e' }}>→</button>
              </div>
              <p className="text-xs" style={{ color: '#334155' }}>स्पैम नहीं। कभी भी अनसब्सक्राइब करें।</p>
            </div>
          </div>

          <div className="border-t pt-5 flex flex-col sm:flex-row justify-between items-center gap-2"
            style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
            {/* INCREASED: footer bottom from 11px to 13px */}
            <p className="text-[13px]" style={{ color: '#475569' }}>
              © 2026 <span style={{ color: '#c9a84c' }}>सदैव सत्य न्यूज़</span>. सर्वाधिकार सुरक्षित.
            </p>
            <p className="text-[13px]" style={{ color: '#334155' }}>
              सत्य के साथ, हमेशा | <span style={{ color: '#c9a84c' }}>Truth Always Prevails</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}