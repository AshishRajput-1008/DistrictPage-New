import MainSectionClient from "@/components/MainSectionClient";
import { NewsArticle } from "@/types";

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://mapi.sadaivsatya.com/api/AdminApi/";

async function fetchNews<T>(endpoint: string): Promise<T[]> {
  const res = await fetch(`${apiUrl}${endpoint}`, {
    next: { revalidate: 60, tags: ["home-news"] },
  });

  if (!res.ok) throw new Error("Failed: " + endpoint);
  return res.json();
}

export default async function MainSectionServer() {
  const [business, taaza, sports, entertainment] = await Promise.all([
    fetchNews<NewsArticle>("GetbusinessNews?pageSize=4"),
    fetchNews<NewsArticle>("getnewsbytazahalchal?pageSize=11"),
    fetchNews<NewsArticle>("GetSportsNewsList?pageSize=6"),
    fetchNews<NewsArticle>("GetColorfulCurtainNews?pageSize=4"),
  ]);

  return (
    <MainSectionClient
      business={business}
      taaza={taaza}
      sports={sports}
      entertainment={entertainment}
    />
  );
}
