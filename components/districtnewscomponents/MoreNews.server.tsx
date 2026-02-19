import MoreNewsClient from "./MoreNews.client";
import { getMoreNews } from "@/lib/news/getMoreNews";

export default async function MoreNewsServer() {
  const news = await getMoreNews();

  return <MoreNewsClient stackedNews={news || []} />;
}
