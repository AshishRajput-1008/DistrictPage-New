export const dynamic = "force-dynamic";

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <sitemap><loc>https://sadaivsatya.com/sitemap.xml</loc></sitemap>
  <sitemap><loc>https://sadaivsatya.com/videos/sitemap.xml</loc></sitemap>
  <sitemap><loc>https://sadaivsatya.com/web-stories/sitemap.xml</loc></sitemap>
  <sitemap><loc>https://sadaivsatya.com/categories-sitemap.xml</loc></sitemap>
  <sitemap><loc>https://sadaivsatya.com/subcategories-sitemap.xml</loc></sitemap>

  <!-- Legal Pages -->
  <sitemap><loc>https://sadaivsatya.com/privacy-policy</loc></sitemap>
  <sitemap><loc>https://sadaivsatya.com/terms-conditions</loc></sitemap>
  <sitemap><loc>https://sadaivsatya.com/contact-us</loc></sitemap>
  <sitemap><loc>https://sadaivsatya.com/disclaimer</loc></sitemap>

</sitemapindex>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
