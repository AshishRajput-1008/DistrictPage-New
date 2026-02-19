export const dynamic = 'force-dynamic';

import { getWebStories } from "@/lib/db";
import { toSlug } from "@/lib/news-api";

export async function GET() {
  const stories = await getWebStories();

  const urls = stories
    .map(s => {
      const catSlug = toSlug(s.Category);
      const storySlug = toSlug(s.StorySlug);
      return `
      <url>
        <loc>https://sadaivsatya.com/web-stories/${catSlug}/${storySlug}</loc>
        <lastmod>${new Date(s.PublishedDate).toISOString()}</lastmod>
      </url>
    `
    }
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
