// // "use client";

// // import { useState, type MouseEvent } from "react";
// // import apiDevelopment from "@/public/payzonapi12.webp";
// // import asdshoppy from "../public/shoppyVertical.webp";
// // import sadaivSatyaLogo from "@/public/Final Logo.webp";
// // import Image from "next/image";


// // export default function Footer() {
// //   const [email, setEmail] = useState("");

// //   const handleSubscribe = (e: MouseEvent<HTMLButtonElement>) => {
// //     e.preventDefault();
// //     console.log("Subscribing email:", email);
// //     setEmail("");
// //   };

// //   const footerSections = {
// //     departments: [
// //       { label: "होम", link: "/" },
// //       { label: "भारत", link: "/india" },
// //       { label: "राजनीति", link: "/politics" },
// //       { label: "मनोरंजन", link: "/colorful-curtains" },
// //       { label: "खेल", link: "/sports-news" },
// //     ],
// //     about: [
// //       { label: "संपर्क करें", link: "/contact-us" },
// //       { label: "गोपनीयता नीति", link: "/privacy-policy" },
// //       { label: "उपयोग की शर्तें", link: "/terms-conditions" },
// //       { label: "अस्वीकरण", link: "/disclaimer" },
// //     ],
// //   };

// //   const socialLinks = [
// //     { icon: "facebook", label: "Facebook", link: "https://www.facebook.com/sadaivsatyamedia", ariaLabel: "Facebook" },
// //     { icon: "instagram", label: "Instagram", link: "https://www.instagram.com/sadaivsatyamedia/", ariaLabel: "Instagram", },
// //     { icon: "twitter", label: "Twitter", link: "https://x.com/SadaivSatyaNews", ariaLabel: "Twitter" },
// //     { icon: "youtube", label: "YouTube", link: "https://www.youtube.com/@SadaivSatyaMedia", ariaLabel: "YouTube" },
// //   ];

// //   return (
// //     <footer className="mb-12 md:mb-0 mt-6 bg-gray-100 pt-4 pb-4">
// //       {/* Main Footer Content */}
// //       <div className="max-w-[1400px] mx-auto px-4">
// //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
// //           {/* Logo and Description */}
// //           <div className="lg:col-span-4">
// //             {/* Logo */}
// //             <div className="flex items-center gap-2 mb-0">
// //               {/* <img
// //                 src={sadaivSatyaLogo.src}
// //                 alt="सदैव सत्य मिडिया"
// //                 className="h-[80px] w-[120px]"
// //               /> */}
// //               <Image
// //                 src={sadaivSatyaLogo.src}
// //                 alt="सदैव सत्य मिडिया"
// //                 width={120}
// //                 height={100}
// //                 className="h-[100px] w-[120px] object-contain"
// //               />

// //               <h2
// //                 className="text-3xl font-500 text-gray-700"
// //               >
// //                 सदैव सत्य मिडिया
// //               </h2>
// //             </div>

// //             {/* Description */}
// //             <p
// //               className="text-gray-700 font-500 text-[20px] mb-6 max-w-md"
// //             >
// //               सदैव सत्य मिडिया एंड ब्रॉडकास्टिंग प्राइवेट लिमिटेड एक पेशेवर समाचार मंच है, जो विश्वसनीय और रोचक समाचार
// //               प्रदान करने के लिए समर्पित है। हमारा लक्ष्य आपको नवीनतम और
// //               विश्वसनीय समाचारों से जोड़े रखना है।
// //             </p>
// //             <div className="flex flex-row flex-wrap gap-4">

// //               {/* DD News RSS */}
// //               <a
// //                 href="/ddnews-rssfeed"
// //                 className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-red-600 hover:text-white text-black transition-all duration-300 hover:scale-105 text-sm font-medium"
// //                 aria-label="DD News RSS Feed"
// //               >
// //                 📰 <span>DD News RSS</span>
// //               </a>

// //               {/* Investor Page */}
// //               <a
// //                 href="/investor-relations"
// //                 className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-green-600 hover:text-white text-black transition-all duration-300 hover:scale-105 text-sm font-medium"
// //                 aria-label="Investor Relations"
// //               >
// //                 💼 <span>Investor Relations</span>
// //               </a>

// //               {/* External Website */}
// //               <a
// //                 href="https://prasarbharati.gov.in"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-black transition-all duration-300 hover:scale-105 text-sm font-medium"
// //                 aria-label="Prasar Bharati Official Website"
// //               >
// //                 🌐 <span>Prasar Bharati</span>
// //               </a>

// //             </div>
// //             {/* Social Links */}
// //             <div>
// //               <h3
// //                 className="text-lg font-medium mb-4 text-black"
// //               >
// //                 हमसे जुड़ें
// //               </h3>


// //               <div className="flex gap-4">
// //                 {socialLinks.map((social, index) => {
// //                   const getIcon = () => {
// //                     switch (social.icon) {
// //                       case "facebook":
// //                         return (
// //                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
// //                             <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
// //                           </svg>
// //                         );
// //                       case "instagram":
// //                         return (
// //                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
// //                             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
// //                           </svg>
// //                         );
// //                       case "twitter":
// //                         return (
// //                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
// //                             <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
// //                           </svg>
// //                         );
// //                       case "youtube":
// //                         return (
// //                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
// //                             <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
// //                           </svg>
// //                         );
// //                       default:
// //                         return null;
// //                     }
// //                   };

// //                   return (
// //                     <a
// //                       key={index}
// //                       href={social.link}
// //                       className="w-10 h-10 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-black flex items-center justify-center transition-all duration-300 hover:scale-110"
// //                       aria-label={social.ariaLabel}
// //                     >
// //                       {getIcon()}
// //                     </a>
// //                   );
// //                 })}
// //               </div>
// //             </div>
// //           </div>
// //           <div className="grid grid-cols-3 gap-4 lg:contents">
// //             {/* Departments Column */}
// //             <div className="">
// //               <h3
// //                 className="text-lg font-500 mb-6 text-black relative inline-block pb-2"
// //               >
// //                 विभाग
// //                 <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
// //               </h3>
// //               <ul className="space-y-3">
// //                 {footerSections.departments.map((item, index) => (
// //                   <li key={index}>
// //                     <a
// //                       href={item.link}
// //                       className="text-gray-700 hover:text-black hover:translate-x-1 transition-all duration-200 text-base inline-block"
// //                     >
// //                       {item.label}
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             {/* About Column */}
// //             <div className="lg:col-span-3">
// //               <h3
// //                 className="text-lg font-500 mb-6 text-black relative inline-block pb-2"
// //               >
// //                 हमारे बारे में
// //                 <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
// //               </h3>
// //               <ul className="space-y-3">
// //                 {footerSections.about.map((item, index) => (
// //                   <li key={index}>
// //                     <a
// //                       href={item.link}
// //                       className="text-gray-700 hover:text-black hover:translate-x-1 transition-all duration-200 text-base inline-block"
// //                     >
// //                       {item.label}
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //             <div className="lg:col-span-3">
// //               <h3
// //                 className="text-lg font-500 mb-6 text-black relative inline-block pb-2"
// //               >
// //                 हमारे बारे में
// //                 <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
// //               </h3>
// //               <ul className="space-y-3">
// //                 {footerSections.about.map((item, index) => (
// //                   <li key={index}>
// //                     <a
// //                       href={item.link}
// //                       className="text-gray-700 hover:text-black hover:translate-x-1 transition-all duration-200 text-base inline-block"
// //                     >
// //                       {item.label}
// //                     </a>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </div>
// //           {/* Advertisement Section */}
// //           <div className="lg:col-span-3">
// //             <h3 className="text-lg font-500 mb-6 text-black relative inline-block pb-2">
// //               विज्ञापन
// //               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
// //             </h3>

// //             {/* Advertisement Container */}
// //             <div className="w-full max-w-[380px]">
// //               <a
// //                 href="https://payzonshoppy.com/"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="block"
// //               >
// //                 <img
// //                   src={asdshoppy.src}
// //                   alt="Payzon Shoppy Advertisement"
// //                   className="w-full h-auto rounded-lg border border-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer"
// //                 />
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="border-t border-gray-300">
// //         <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
// //           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
// //             <p
// //               className="text-gray-700 text-sm text-center md:text-left"
// //             >
// //               © {new Date().getFullYear()} सदैव सत्य मिडिया। सर्वाधिकार सुरक्षित।
// //             </p>
// //             <p
// //               className="text-gray-700 text-sm text-center md:text-right"
// //             >
// //               भारत का विश्वसनीय समाचार स्रोत
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }

// "use client";

// import { useState, type MouseEvent } from "react";
// import apiDevelopment from "@/public/payzonapi12.webp";
// import asdshoppy from "../public/shoppyVertical.webp";
// import sadaivSatyaLogo from "@/public/Final Logo.webp";
// import Image from "next/image";

// export default function Footer() {
//   const [email, setEmail] = useState("");

//   const handleSubscribe = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setEmail("");
//   };

//   const footerSections = {
//     departments: [
//       { label: "होम", link: "/" },
//       { label: "भारत", link: "/india" },
//       { label: "राजनीति", link: "/politics" },
//       { label: "मनोरंजन", link: "/colorful-curtains" },
//       { label: "खेल", link: "/sports-news" },
//     ],
//     about: [
//       { label: "संपर्क करें", link: "/contact-us" },
//       { label: "गोपनीयता नीति", link: "/privacy-policy" },
//       { label: "उपयोग की शर्तें", link: "/terms-conditions" },
//       { label: "अस्वीकरण", link: "/disclaimer" },
//     ],
//     legal: [
//       { label: "आरएसएस फीड", link: "/ddnews-rssfeed" },
//       { label: "प्रसार भारती", link: "https://prasarbharati.gov.in/" },
//       { label: "निवेशक संबंध (Investor Relations)", link: "/account/investor-relations" },
//     ]
//   };

//   const socialLinks = [
//     { icon: "facebook", label: "Facebook", link: "https://www.facebook.com/sadaivsatyamedia", ariaLabel: "Facebook" },
//     { icon: "instagram", label: "Instagram", link: "https://www.instagram.com/sadaivsatyamedia/", ariaLabel: "Instagram" },
//     { icon: "twitter", label: "Twitter", link: "https://x.com/SadaivSatyaNews", ariaLabel: "Twitter" },
//     { icon: "youtube", label: "YouTube", link: "https://www.youtube.com/@SadaivSatyaMedia", ariaLabel: "YouTube" },
//   ];

//   return (
//     <footer className="mt-6 bg-gray-100 pt-8 pb-4">
//       {/* Main Footer Content */}
//       <div className="max-w-[1400px] mx-auto px-4">
//         {/* Grid: Logo(4) + Links(5) + Subscribe/Ad(3) */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

//           {/* ---------- Column 1: Logo & Description (4 cols) ---------- */}
//           <div className="lg:col-span-4">
//             {/* Logo */}
//             <div className="flex items-center gap-2 mb-2">
//               <Image
//                 src={sadaivSatyaLogo.src}
//                 alt="सदैव सत्य मिडिया"
//                 width={120}
//                 height={100}
//                 className="h-[80px] w-[100px] md:h-[100px] md:w-[120px] object-contain"
//               />
//               <h2 className="text-2xl md:text-3xl font-500 text-gray-700">
//                 सदैव सत्य
//               </h2>
//             </div>

//             {/* Description */}
//             <p className="text-gray-700 text-[16px] md:text-[18px] mb-6 max-w-md leading-relaxed">
//               सदैव सत्य मिडिया एंड ब्रॉडकास्टिंग प्राइवेट लिमिटेड एक पेशेवर समाचार मंच है,
//               जो विश्वसनीय और रोचक समाचार प्रदान करने के लिए समर्पित है।
//             </p>

//             {/* Quick Links */}
//             {/* <div className="flex flex-row flex-wrap gap-3 mb-6">
//               <a
//                 href="/ddnews-rssfeed"
//                 className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-red-600 hover:text-white text-black transition-all duration-300 hover:scale-105 text-sm font-medium"
//               >
//                 📰 DD News RSS
//               </a>
//               <a
//                 href="/investor-relations"
//                 className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-green-600 hover:text-white text-black transition-all duration-300 hover:scale-105 text-sm font-medium"
//               >
//                 💼 Investor Relations
//               </a>
//               <a
//                 href="https://prasarbharati.gov.in"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-black transition-all duration-300 hover:scale-105 text-sm font-medium"
//               >
//                 🌐 Prasar Bharati
//               </a>
//             </div> */}

//             {/* Social Links */}
//             <div>
//               <h3 className="text-lg font-medium mb-4 text-black">
//                 हमसे जुड़ें
//               </h3>
//               <div className="flex gap-4">
//                 {socialLinks.map((social, index) => {
//                   const getIcon = () => {
//                     switch (social.icon) {
//                       case "facebook":
//                         return (
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                           </svg>
//                         );
//                       case "instagram":
//                         return (
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                           </svg>
//                         );
//                       case "twitter":
//                         return (
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                           </svg>
//                         );
//                       case "youtube":
//                         return (
//                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//                           </svg>
//                         );
//                       default:
//                         return null;
//                     }
//                   };

//                   return (
//                     <a
//                       key={index}
//                       href={social.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-10 h-10 rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white text-black flex items-center justify-center transition-all duration-300 hover:scale-110"
//                       aria-label={social.ariaLabel}
//                     >
//                       {getIcon()}
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* ---------- Column 2: Links Section (5 cols) ---------- */}
//           <div className="lg:col-span-5">
//             <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">

//               {/* विभाग */}
//               <div>
//                 <h3 className="text-lg font-500 mb-6 text-black relative inline-block pb-2">
//                   विभाग
//                   <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
//                 </h3>
//                 <ul className="space-y-3">
//                   {footerSections.departments.map((item, index) => (
//                     <li key={index}>
//                       <a
//                         href={item.link}
//                         className="text-gray-700 hover:text-black hover:translate-x-1 transition-all duration-200 text-base inline-block"
//                       >
//                         {item.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* हमारे बारे में */}
//               <div>
//                 <h3 className="text-lg font-500 mb-6 text-black relative inline-block pb-2">
//                   हमारे बारे में
//                   <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
//                 </h3>
//                 <ul className="space-y-3">
//                   {footerSections.about.map((item, index) => (
//                     <li key={index}>
//                       <a
//                         href={item.link}
//                         className="text-gray-700 hover:text-black hover:translate-x-1 transition-all duration-200 text-base inline-block"
//                       >
//                         {item.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* कानूनी */}
//               <div>
//                 <h3 className="text-lg font-500 mb-6 text-black relative inline-block pb-2">
//                   कानूनी
//                   <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
//                 </h3>
//                 <ul className="space-y-3">
//                   {footerSections.legal.map((item, index) => (
//                     <li key={index}>
//                       <a
//                         href={item.link}
//                         className="text-gray-700 hover:text-black hover:translate-x-1 transition-all duration-200 text-base inline-block"
//                       >
//                         {item.label}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* ---------- Column 3: Subscribe & Ad (3 cols) ---------- */}
//           <div className="lg:col-span-3">
//             {/* Email Subscribe */}
//             {/* <div className="mb-6">
//               <h3 className="text-lg font-500 mb-4 text-black relative inline-block pb-2">
//                 न्यूज़लेटर
//                 <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
//               </h3>
//               <p className="text-gray-600 text-sm mb-3">
//                 ताज़ा समाचार पाने के लिए सब्सक्राइब करें
//               </p>
//               <form className="flex flex-col sm:flex-row gap-2">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="आपका ईमेल"
//                   className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
//                   required
//                 />
//                 <button
//                   onClick={handleSubscribe}
//                   className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium whitespace-nowrap"
//                 >
//                   सब्सक्राइब
//                 </button>
//               </form>
//             </div> */}

//             {/* Advertisement */}
//             <div>
//               <h3 className="text-lg font-500 mb-4 text-black relative inline-block pb-2">
//                 विज्ञापन
//                 <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
//               </h3>
//               <div className="w-full max-w-[300px]">
//                 <a
//                   href="https://payzonshoppy.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block"
//                 >
//                   <Image
//                     src={asdshoppy.src}
//                     alt="Payzon Shoppy Advertisement"
//                     width={300}
//                     height={400}
//                     className="w-full h-auto rounded-lg border border-gray-300 hover:border-blue-500 transition-all duration-300 hover:shadow-lg cursor-pointer"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ---------- Copyright Bar ---------- */}
//       <div className="border-t border-gray-300 mt-8">
//         <div className="max-w-[1400px] mx-auto px-4 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-700 text-sm text-center md:text-left">
//               © {new Date().getFullYear()} सदैव सत्य मिडिया। सर्वाधिकार सुरक्षित।
//             </p>
//             <p className="text-gray-700 text-sm text-center md:text-right">
//               भारत का विश्वसनीय समाचार स्रोत
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



"use client";

import Image from "next/image";
import asdshoppy from "../public/shoppyVertical.webp";
import sadaivSatyaLogo from "@/public/Final Logo.webp";

export default function Footer() {
  const footerSections = {
    departments: [
      { label: "होम", link: "/" },
      { label: "भारत", link: "/india" },
      { label: "राजनीति", link: "/politics" },
      { label: "मनोरंजन", link: "/colorful-curtains" },
      { label: "खेल", link: "/sports-news" },
    ],
    about: [
      { label: "संपर्क करें", link: "/contact-us" },
      { label: "गोपनीयता नीति", link: "/privacy-policy" },
      { label: "उपयोग की शर्तें", link: "/terms-conditions" },
      { label: "अस्वीकरण", link: "/disclaimer" },
    ],
    legal: [
      { label: "आरएसएस फीड", link: "/ddnews-rssfeed" },
      { label: "प्रसार भारती", link: "https://prasarbharati.gov.in/" },
      { label: "निवेशक संबंध", link: "/account/investor-relations" },
    ],
  };

  const socialLinks = [
    { icon: "facebook",   label: "Facebook",  link: "https://www.facebook.com/sadaivsatyamedia",    ariaLabel: "Facebook" },
    { icon: "instagram",  label: "Instagram", link: "https://www.instagram.com/sadaivsatyamedia/",   ariaLabel: "Instagram" },
    { icon: "twitter",    label: "Twitter",   link: "https://x.com/SadaivSatyaNews",                ariaLabel: "Twitter" },
    { icon: "youtube",    label: "YouTube",   link: "https://www.youtube.com/@SadaivSatyaMedia",     ariaLabel: "YouTube" },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "facebook":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case "twitter":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "youtube":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="relative mt-6 overflow-hidden bg-[#F7F3EE] border-t-4 border-[#C41E3A]">

      {/* Subtle warm texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse 70% 50% at 10% 100%, rgba(196,30,58,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 90% 0%, rgba(139,90,43,0.06) 0%, transparent 60%)" }} />

      {/* ── MAIN GRID ── */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* ══ COL 1: Brand (4 cols) ══ */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Logo + name */}
            <div className="flex items-center gap-3">
              <div className="shrink-0 p-1 border border-[#C41E3A]/20 bg-white shadow-sm">
                <Image
                  src={sadaivSatyaLogo.src}
                  alt="सदैव सत्य मिडिया"
                  width={80}
                  height={80}
                  className="object-contain"
                  style={{ width: 80, height: 80 }}
                />
              </div>
              <div>
                <h2
                  className="font-bold leading-tight text-[#1A0A0A]"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)" }}
                >
                  सदैव सत्य
                </h2>
                <p className="italic mt-0.5 text-[#8B5A2B] text-sm tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Media &amp; Broadcasting
                </p>
              </div>
            </div>

            {/* Ornament divider */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #C41E3A, transparent)" }} />
              <div className="w-1.5 h-1.5 rotate-45 shrink-0 bg-[#C9A84C]" />
            </div>

            {/* Description */}
            <p className="text-sm text-[#4A3728]/70 leading-relaxed">
              सदैव सत्य मिडिया एंड ब्रॉडकास्टिंग प्रा. लि. एक पेशेवर समाचार मंच है, जो
              विश्वसनीय और रोचक समाचार प्रदान करने के लिए समर्पित है।
            </p>

            {/* Quick-link pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { emoji: "📰", label: "DD News RSS",       href: "/ddnews-rssfeed" },
                { emoji: "💼", label: "Investor Relations", href: "/account/investor-relations" },
                { emoji: "🌐", label: "Prasar Bharati",    href: "https://prasarbharati.gov.in", external: true },
              ].map((pill) => (
                <a
                  key={pill.label}
                  href={pill.href}
                  target={pill.external ? "_blank" : undefined}
                  rel={pill.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-wider border border-[#C41E3A]/20 bg-white text-[#4A3728]/70 hover:bg-[#C41E3A] hover:text-white hover:border-[#C41E3A] transition-all duration-200 no-underline shadow-sm"
                >
                  <span>{pill.emoji}</span>
                  <span>{pill.label}</span>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-widest mb-3 text-[#C41E3A]">
                हमसे जुड़ें
              </p>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.icon}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.ariaLabel}
                    className="w-9 h-9 flex items-center justify-center border border-[#C41E3A]/25 bg-white text-[#4A3728]/60 hover:bg-[#C41E3A] hover:border-[#C41E3A] hover:text-white transition-all duration-200 hover:-translate-y-0.5 shadow-sm shrink-0"
                  >
                    {getIcon(s.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ══ COL 2: Nav Links (5 cols) ══ */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-6">
              {[
                { heading: "विभाग",        items: footerSections.departments },
                { heading: "हमारे बारे में", items: footerSections.about },
                { heading: "कानूनी",        items: footerSections.legal },
              ].map((col) => (
                <div key={col.heading}>
                  <span
                    className="font-bold text-sm text-[#1A0A0A]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {col.heading}
                  </span>
                  <div className="w-8 h-[2px] mt-2 mb-4" style={{ background: "linear-gradient(90deg, #C41E3A, transparent)" }} />
                  <ul className="flex flex-col gap-2.5">
                    {col.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.link}
                          className="group inline-flex items-center gap-1.5 text-sm text-[#4A3728]/65 hover:text-[#C41E3A] hover:pl-1 transition-all duration-200 no-underline"
                        >
                          <span className="text-[10px] text-transparent group-hover:text-[#C41E3A] transition-colors shrink-0">→</span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact info strip */}
            <div className="mt-8 p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white border border-[#C41E3A]/15 border-l-4 border-l-[#C41E3A] shadow-sm">
              {[
                { icon: "📞", text: "093034 30351",              href: "tel:09303430351" },
                { icon: "✉️", text: "sadaivsatyamedia@gmail.com", href: "mailto:sadaivsatyamedia@gmail.com" },
              ].map((c) => (
                <a
                  key={c.text}
                  href={c.href}
                  className="flex items-center gap-2 no-underline text-[#C41E3A] hover:[#4A3728]/60 transition-colors text-xs"
                >
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center text-xs bg-[#C41E3A]/8 border border-[#C41E3A]/15">
                    {c.icon}
                  </span>
                  <span className="truncate text-[#C41E3A]">{c.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ══ COL 3: Ad Banner (3 cols) ══ */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-5">
              <span
                className="font-bold text-sm text-[#1A0A0A]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                विज्ञापन
              </span>
              <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #C41E3A, transparent)" }} />
            </div>

            <a
              href="https://payzonshoppy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden border border-[#C41E3A]/15 shadow-md hover:border-[#C41E3A]/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <Image
                src={asdshoppy.src}
                alt="Payzon Shoppy Advertisement"
                width={300}
                height={400}
                className="w-full h-auto block"
              />
            </a>

            <div className="mt-3 px-3 py-2 text-center bg-white border border-[#C9A84C]/25">
              <p
                className="italic text-[#8B5A2B] text-xs tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Trusted by readers across India
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-[#C41E3A]/15 bg-[#EDE8E2]">
        {/* Ornament row */}
        <div className="flex items-center justify-center gap-4 py-3 px-4">
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(90deg, transparent, rgba(196,30,58,0.25))" }} />
          <div className="w-1.5 h-1.5 rotate-45 shrink-0 bg-[#C9A84C]/60" />
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(90deg, rgba(196,30,58,0.25), transparent)" }} />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#4A3728]/50 tracking-wide">
              © {new Date().getFullYear()}{" "}
              <span className="text-[#8B5A2B] font-medium">Sadaiv Satya Media &amp; Broadcasting Pvt. Ltd.</span>
              {" "}· सर्वाधिकार सुरक्षित
            </p>
            <p
              className="italic text-xs text-[#4A3728]/40 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              भारत का विश्वसनीय समाचार स्रोत
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}