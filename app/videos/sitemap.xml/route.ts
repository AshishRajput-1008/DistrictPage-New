export const dynamic = 'force-dynamic';

import { getVideos } from "@/lib/db";
import { toSlug } from "@/lib/news-api";

export async function GET() {
  const videos = await getVideos();

  const urls = videos
    .map(v => {
      const catSlug = toSlug(v.NewsCategoryName);
      const subSlug = v.NewsSubsCategory ? toSlug(v.NewsSubsCategory) : null;
      const newsSlug = (v.Slug);
      const path = subSlug ? `${catSlug}/${subSlug}/video/${newsSlug}` : `${catSlug}/video/${newsSlug}`;
      return `
      <url>
        <loc>https://sadaivsatya.com/${path}</loc>
        <lastmod>${new Date(v.UpdatedDate).toISOString()}</lastmod>
        <video:video>
          <video:title><![CDATA[${v.NewsTag}]]></video:title>
          <video:description><![CDATA[${v.NewsHeading || ""}]]></video:description>
          <video:content_loc>https://mapi.sadaivsatya.com${v.Media}</video:content_loc>
        </video:video>
      </url>
    `})
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${urls}
</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
