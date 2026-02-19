// export const dynamic = 'force-dynamic';

// import { getNews } from "@/lib/db";
// import { chunk } from "@/lib/sitemap";

// export async function GET() {
//     const news = await getNews();
//     const parts = chunk(news, 1000);

//     const links = parts
//         .map((_, i) => `<sitemap><loc>https://sadaivsatya.com/sitemap/${i + 1}.xml</loc></sitemap>`)
//         .join("");

//     const xml = `<?xml version="1.0" encoding="UTF-8"?>
// <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   ${links}
// </sitemapindex>`;

//     return new Response(xml, { headers: { "Content-Type": "application/xml" } });
// }

export const dynamic = "force-dynamic";

import { getNews } from "@/lib/db";
import { toSlug } from "@/lib/news-api";

export async function GET() {
    const news = await getNews();

    const urls = news.map(n => {
        const catSlug = toSlug(n.NewsCategoryName);
        const subSlug = n.NewsSubsCategory ? toSlug(n.NewsSubsCategory) : null;
        const newsSlug = (n.Slug || n.NewsHeading);

        const path = subSlug
            ? `${catSlug}/${subSlug}/news/${newsSlug}`
            : `${catSlug}/news/${newsSlug}`;

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
    </url>`;
    }).join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${urls}
</urlset>`;

    return new Response(xml, {
        headers: { "Content-Type": "application/xml" }
    });
}
