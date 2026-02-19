// app/videos/page.tsx
import VideoGrid from "./VideoGrid.client";

async function getVideos(page = 1, pageSize = 5) {
  const res = await fetch(
    `https://mapi.sadaivsatya.com/Api/AdminApi/videos?page=${page}&pageSize=${pageSize}`,
    { cache: "force-cache" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch videos");
  }

  const data = await res.json();
  return data.items;
}

export default async function Page() {
  const initialVideos = await getVideos(1, 5);

  return (
    <main className=" max-w-[1500px] mx-auto px-2">
      <VideoGrid initialVideos={initialVideos} />
    </main>
  );
}
