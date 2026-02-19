export const dynamic = 'force-dynamic';

import { toSlug } from "@/lib/news-api";
import sql from "mssql";

// DB helper
async function getCategories() {
    const pool = await sql.connect({
        user: process.env.DB_USER!,
        password: process.env.DB_PASS!,
        server: process.env.DB_HOST!,
        database: process.env.DB_NAME!,
        options: { trustServerCertificate: true }
    });

    const result = await pool.request().query(`
    SELECT NewsCategoryName FROM AllNewsTable  WHERE [Status] = 1 GROUP BY NewsCategoryName`);
    return result.recordset;
}

export async function GET() {
    const categories = await getCategories();

    const urls = categories
        .map(c => {
            const categorySlug = toSlug(c.NewsCategoryName);

            return `
          <url>
            <loc>https://sadaivsatya.com/${categorySlug}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </url>
        `;
        })
        .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

    return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
