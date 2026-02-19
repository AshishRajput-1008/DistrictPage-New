// import type { Metadata } from "next";
// import "@/app/globals.css";
// import { Noto_Sans_Devanagari, Inter } from "next/font/google";
// import { AuthProvider } from "../(account)/account/auth-context";
// import NProgressWrapper from "@/components/NProgressWrapper";
// import LayoutWrapper from "./layout-wrapper";
// import Script from "next/script";
// import Footer from "@/components/Footer";
// import MobileBottomBar from "@/components/MobileBottomBar";
// import { BottomNavServer } from "@/components/BottomNavServer";

// export const metadata: Metadata = {
//   title: "Sadaiv Satya Media",
//   description: "Latest news in Hindi",
//   openGraph: {
//     images: [
//       {
//         url: "https://sadaivsatya.com/Final Logo.webp",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     images: [
//       {
//         url: "https://sadaivsatya.com/Final Logo.webp",
//       },
//     ],
//   },
// };

// const notoSansDevanagari = Noto_Sans_Devanagari({
//   subsets: ["devanagari"],
//   weight: ["400", "500", "700"],
//   variable: "--font-noto-devanagari",
//   display: "swap",
// });
// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   preload: true,
// });


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="hi" className={notoSansDevanagari.className}>
//       <head>
//         <Script id="gtm-head" strategy="afterInteractive">
//           {`
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-P2ZC6XWX');
//           `}
//         </Script>

//         <Script
//           async
//           strategy="afterInteractive"
//           src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5254409852084450"
//           crossOrigin="anonymous"
//         />
//         <link rel="icon" type="image/webp" href="/Logo ICON.webp" />
//       </head>

//       <body className={notoSansDevanagari.className}>
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-P2ZC6XWX"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           />
//         </noscript>

//         <NProgressWrapper />
//         <AuthProvider>
//           <LayoutWrapper>{children}</LayoutWrapper>
//           <Footer />
//           <BottomNavServer />
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }


// app/layout.tsx

import type { Metadata } from "next";
import "@/app/globals.css";
import { Noto_Sans_Devanagari, Inter } from "next/font/google";
import { AuthProvider } from "../(account)/account/auth-context";
import NProgressWrapper from "@/components/NProgressWrapper";
import LayoutWrapper from "./layout-wrapper";
import Script from "next/script";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { BottomNavServer } from "@/components/BottomNavServer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sadaiv Satya Media",
  description: "Latest news in Hindi",
  openGraph: {
    images: [
      {
        url: "https://sadaivsatya.com/Final Logo.webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "https://sadaivsatya.com/Final Logo.webp",
      },
    ],
  },
  icons: {
    icon: "/Final Logo.webp",
    apple: "/Final Logo.webp",
  },
};

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className={notoSansDevanagari.className}>
      <head>
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P2ZC6XWX');
          `}
        </Script>

        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5254409852084450"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/webp" href="/Logo ICON.webp" />
      </head>

      <body className={notoSansDevanagari.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2ZC6XWX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <NProgressWrapper />
        <AuthProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
          <Footer />
          <BottomNavServer />
        </AuthProvider>
      </body>
    </html>
  );
}