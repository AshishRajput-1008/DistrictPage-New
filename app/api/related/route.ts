// app/api/related/route.ts
import { NextRequest } from "next/server";
import { getCategoryArticles } from "@/lib/news-api";

export async function GET(request: NextRequest) {
    const category = request.nextUrl.searchParams.get("category");
    const slug = request.nextUrl.searchParams.get("slug");
    const page = parseInt(request.nextUrl.searchParams.get("page") || "1");
    const pageSize = 9;

    if (!category) {
        return Response.json({ error: "Category required" }, { status: 400 });
    }

    try {
        const data = await getCategoryArticles(category, page, pageSize);
        const filtered = data.filter((n: any) => n.newsSlug !== slug);

        return Response.json(filtered);
    } catch (error) {
        console.error("Error fetching related news:", error);
        return Response.json({ error: "Failed to fetch" }, { status: 500 });
    }
}