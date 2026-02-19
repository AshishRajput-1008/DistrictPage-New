export const dynamic = 'force-dynamic';

import { getNews } from "@/lib/db";
import { toSlug } from "@/lib/news-api";
import { chunk } from "@/lib/sitemap";

export async function GET(
  req: Request,
  { params }: { params: { page: string } }
) {
  const news = await getNews();
  const parts = chunk(news, 1000);
  const index = parseInt(params.page) - 1;

  if (!parts[index]) {
    return new Response("Not found", { status: 404 });
  }

  const urls = parts[index]
    .map(n => {

      const catSlug = toSlug(n.NewsCategoryName);
      const subSlug = n.NewsSubsCategory ? toSlug(n.NewsSubsCategory) : null;
      const newsSlug = toSlug(n.Slug || n.Title);
      const path = subSlug ? `${catSlug}/${subSlug}/news/${newsSlug}` : `${catSlug}/news/${newsSlug}`;
      return `
      <url>
        <loc>https://sadaivsatya.com/${path}</loc>
        <lastmod>${new Date(n.UpdatedDate).toISOString()}</lastmod>
        <news:news>
          <news:publication>
            <news:name>Sadaiv Satya Media</news:name>
            <news:language>hi</news:language>
          </news:publication>
          <news:publication_date>${new Date(n.UpdatedDate).toISOString()}</news:publication_date>
          <news:title><![CDATA[${n.NewsTag}]]></news:title>
          <news:keywords><![CDATA[${n.KeyWord || ""}]]></news:keywords>
        </news:news>
      </url>
    `
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${urls}
</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
