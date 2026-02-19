// app/(main)/[category]/page.tsx
import CategoryClient from "./CategoryClient";
import { getAllTazaHalchalArticles, getCategoryArticles } from "@/lib/news-api";
import CategoryWithSubcats from "@/components/SubCatPillWrapper";

interface Params {
    category: string;
}

export async function generateMetadata({ params }: { params: Params | Promise<Params> }) {
    const { category } = await params;
    const displayCategory = category.replace(/-/g, " ");
    return {
        title: `${category} news – Latest Updates and Headlines in Hindi`,
        description: `Read latest and trending news from ${displayCategory} category in Hindi.`,
    };
}

export const dynamic = "force-static";
const revalidation = 300;
let data2 = "";
let data3 = "";
export default async function CategoryPage({ params }: { params: Params | Promise<Params> }) {
    const { category } = await params;
    const originalCategory = category.replace(/-/g, " ");
    const page = 1;
    const pageSize = 12;
    let initialArticles: any[] = [];
    const isTaza = category === "taaza-halachal";
    try {
        let data: any[] = [];
        if (originalCategory.toLowerCase() === "taaza halchal" || category === "taaza-halachal") {
            data = await getAllTazaHalchalArticles(originalCategory, page, pageSize);
        } else {
            data = await getCategoryArticles(originalCategory, page, pageSize);
        }
        if (Array.isArray(data) && data.length > 0) {
            initialArticles = data.slice(0, 12);
            const firstItem = data[0];
            data2 = firstItem.catNameInHindi || firstItem.subCatNameInHindi || '';
            data3 = firstItem.subCatNameInHindi || firstItem.catNameInHindi || '';
        } else {
            initialArticles = [];
            data2 = '';
            data3 = '';
        }
    } catch (error) {
        console.error("Failed to fetch initial articles:", error);
    }

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

    return (
        <CategoryWithSubcats
            initialArticles={initialArticles}
            category={originalCategory}
            isTaza={isTaza}
            apiBaseUrl={apiBaseUrl}
            displayCategory={data2}
            displayCategoryInHindi={data3}
        />
    );
}

