import { Suspense } from "react";
import NewsContentWrapper from "./NewsContentWrapper"; // नया server wrapper
import { getNewsBySlug } from "@/lib/getNewsBySlug";
import { redirect } from "next/navigation";

interface ParamsType {
  category: string;
  subcategory?: string;
  slug: string;
}

export async function generateMetadata({ params }: { params: Promise<ParamsType> }) {
  const { slug, category, subcategory } = await params;

  const finalSlug = slug.endsWith(".html") ? slug : slug + ".html";
  const news = await getNewsBySlug(finalSlug);

  const BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://mapi.sadaivsatya.com/";

  const url = subcategory
    ? `${BASE_URL}${category}/${subcategory}/news/${slug}`
    : `${BASE_URL}${category}/news/${slug}`;

  if (!news) {
    return {
      title: "News Not Found",
      alternates: { canonical: url },
    };
  }

  const cleanDescription = (news.newsDetailsTwo || "")
    .replace(/<[^>]*>?/gm, "")
    .slice(0, 150);

  return {
    title: `${news.metaTag}: ${news.newsTag}`,
    description: cleanDescription,
    openGraph: {
      title: `${news.metaTag}: ${news.newsTag}`,
      description: cleanDescription,
      url,
      type: "article",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}${news.socialImage || "/Final Logo.webp"}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: { canonical: url },
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<ParamsType> }) {
  const resolvedParams = await params;
  if (resolvedParams.category === 'always-special') {
    redirect('/account/paywall');
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#18191a] dark:text-white">
      <Suspense fallback={<div className="p-10 text-center"></div>}>
        <NewsContentWrapper {...resolvedParams} />
      </Suspense>
    </div>
  );
}