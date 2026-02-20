"use client";

import ShareButtons from "@/components/ShareButtons";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import NewsMetaBar2 from "../NewsMetaBar2";

/** Strip HTML tags and return plain text */
function stripHtml(html?: string | null): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}

export default function TopHeroandTrendingClient({
  heroNews,
  heroDistrict,
  trendingNews,
  trendingDistrict,
}: any) {
  if (!heroNews) return null;

  const districtName = heroDistrict || trendingDistrict || "आपका जिला";
  const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL;

  console.log(trendingNews, "trendingNews");
  console.log(heroNews, "heroNews");

  const plainDetails = stripHtml(heroNews.NewsDetails);

  return (
    <>
      {/* MAIN HERO NEWS SECTION and trending */}
      <div className="grid md:grid-cols-12 gap-6 mb-8 w-full min-w-0">
        {/* Left - Main Feature */}
        <div className="md:col-span-7">
          <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border-0">
            <div className="relative">
              <img
                src={baseurl + heroNews.Media}
                alt={heroNews.NewsHeading}
                className="w-full h-[280px] object-cover"
              />
            </div>
            <CardContent className="p-6 pb-4">
              {/* Heading */}
              <h2 className="text-3xl font-bold mb-3 leading-tight hover:text-[#D6303A] cursor-pointer transition-colors">
                <span>{heroNews.NewsHeadingTwo}</span>:{heroNews.NewsHeading}
              </h2>

              {plainDetails && (
                <p className="text-gray-600 mb-3 leading-relaxed line-clamp-4 md:line-clamp-2">
                  {plainDetails}
                </p>
              )}

              {/* Meta bar + share */}
              <div className="flex justify-between items-center text-[13px] text-gray-500 opacity-80">
                <NewsMetaBar2
                  variant="solid"
                  newsCategory={heroNews.DistrictName}
                  newsCatinhindi={heroNews.DistrictNameInHindi}
                  newsSubCategory={heroNews.StateName || ""}
                  newsSlug={heroNews.Slug || ""}
                />
                <ShareButtons shareUrl={heroNews.Slug} size="small" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Advertisement Card mobile */}
        <div className="lg:hidden">
          <Card className="overflow-hidden border border-gray-300 bg-gray-50">
            <CardContent className="p-0 relative">
              <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-[10px] text-gray-600 font-medium">
                विज्ञापन
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://picsum.photos/728/90?random=102"
                  alt="Advertisement"
                  className="w-full mt-2 h-28 object-cover hover:opacity-90 transition-opacity"
                />
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Right - Trending */}
        <div className="md:col-span-5 space-y-4">
          <Card className="shadow-lg border-0">
            <div className="bg-[#D6E7F3] text-black p-4 font-bold text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              TRENDING IN {districtName.toUpperCase()}
            </div>
            <CardContent className="p-0">
              <div className="divide-y">
                {Array.isArray(trendingNews) && trendingNews.length > 0 ? (
                  trendingNews.map((news: any, idx: number) => (
                    <div
                      key={news?.ID ?? idx}
                      className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group"
                    >
                      <div className="flex gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                          style={{ backgroundColor: "#D6303A", color: "#fff" }}
                        >
                          {idx + 1}
                        </div>

                        <p
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                          className="text-sm font-semibold leading-tight group-hover:text-[#D6303A] transition-colors overflow-hidden"
                        >
                          {news?.NewsHeading ?? ""}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-sm text-gray-600">
                    No trending news
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Advertisement Card desktop */}
          <div className="hidden lg:block">
            <Card className="overflow-hidden border border-gray-300 bg-gray-50">
              <CardContent className="p-0 relative">
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-[10px] text-gray-600 font-medium">
                  विज्ञापन
                </div>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://picsum.photos/728/90?random=102"
                    alt="Advertisement"
                    className="w-full mt-2 h-28 object-cover hover:opacity-90 transition-opacity"
                  />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
