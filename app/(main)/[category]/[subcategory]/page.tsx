// app/(main)/[category]/[subcategory]/page.tsx
import SubCategoryClient from "./SubCategoryClient";
import { getSubCategoryArticles } from "@/lib/news-api";

interface Params {
  category: string;
  subcategory: string;
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { category, subcategory } = await params;
  const cat = category.replace(/-/g, " ");
  const sub = subcategory.replace(/-/g, " ");

  return {
    title: sub ? `${sub} - ${cat} News` : `${cat} News`,
    description: `Latest news from ${cat}${sub ? `/${sub}` : ""}.`,
  };
}

export const dynamic = "force-dynamic";

export default async function SubCategoryPage({ params }: { params: Promise<Params> }) {
  const { category, subcategory } = await params;
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
  const originalCategory = category.replace(/-/g, " ");
  const originalSub = subcategory.replace(/-/g, " ");

  let initialArticles: any[] = [];
  let displayCategory = originalCategory;
  let displaySubcategory = originalSub;
  if (originalSub == "retail e commerce") {
    displaySubcategory = "Retail & E-commerce";
  }

  try {
    const data = await getSubCategoryArticles(originalCategory, displaySubcategory);
    if (Array.isArray(data) && data.length > 0) {
      initialArticles = data.slice(0, 12);
      const hindiName = data[0].subCatNameInHindi;
      if (hindiName) {
        displayCategory = data[0].catNameInHindi || originalCategory;
        displaySubcategory = hindiName;
      }
    }
  } catch (error) {
    console.error("Failed to fetch initial articles:", error);
  }

  return (
    <SubCategoryClient
      initialArticles={initialArticles}
      category={originalCategory}
      subcategory={originalSub}
      apiBaseUrl={apiBaseUrl}
      displayCategory={displayCategory}
      displaySubcategory={displaySubcategory}
    />
  );
}
