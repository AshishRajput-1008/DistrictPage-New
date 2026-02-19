import timeAgoInHindi from "@/types/TimeAgoInHindi";
import ADvertismentWithNews from "./AdvertisementWithNews.client";

async function getTaazaHalchal() {
  const res = await fetch(
    "https://mapi.sadaivsatya.com/api/AdminApi/getnewsbytazahalchalWithDetail?page=1&pagesize=1",
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  if (!data?.length) return null;

  return {
    ...data[0],
    timeAgo: timeAgoInHindi(data[0].updatedDate),
  };
}

export default async function AdvertisementWithNewsServer() {
  const news = await getTaazaHalchal();
  return <ADvertismentWithNews news={news} />;
}
