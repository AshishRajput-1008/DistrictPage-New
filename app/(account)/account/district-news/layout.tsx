import type { Metadata } from "next";
import "@/app/globals.css";
import { Noto_Sans_Devanagari, Inter } from "next/font/google";
import { AuthProvider } from "../auth-context";
import NProgressWrapper from "@/components/NProgressWrapper";
import LayoutWrapper from "./layout-wrapper";
import Footer from "@/components/Footer";
import { BottomNavServer } from "@/components/BottomNavServer";

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
      <body className={notoSansDevanagari.className}>
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