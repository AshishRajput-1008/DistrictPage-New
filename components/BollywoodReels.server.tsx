// // app/(home)/BollywoodReels.server.tsx
// import BollywoodReelsClient from "@/components/BollywoodReelsClient";
// import { VideoApiResponse } from "@/types/video";
// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
// const API = `${apiUrl}videos?pagesize=12&page=1`;

// async function getVideos() {
//     const res = await fetch(API, { next: { revalidate: 300 } });
//     if (!res.ok) throw new Error("Video API failed");

//     const data: VideoApiResponse = await res.json();

//     return data.items.map((v) => ({
//         ...v,
//         videoUrl: apiBaseUrl + v.videoUrl,
//         thumbnail: apiBaseUrl + v.thumbnail,
//         hasVideo: !!v.videoUrl,
//         duration: "0:45",
//     }));
// }

// export default async function BollywoodReelsServer() {
//     const videos = await getVideos();
//     return <BollywoodReelsClient videos={videos} />;
// }



// app/(home)/BollywoodReels.server.tsx
import BollywoodReelsClient from "@/components/BollywoodReelsClient";
import { VideoApiResponse } from "@/types/video";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const API = `${apiUrl}videos?pagesize=8&page=1`;

async function getVideos() {
    const res = await fetch(API, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error("Video API failed");

    const data: VideoApiResponse = await res.json();

    return data.items.map((v) => ({
        ...v,
        videoUrl: apiBaseUrl + v.videoUrl,
        thumbnail: apiBaseUrl + v.thumbnail,
        hasVideo: !!v.videoUrl,
        duration: "0:45",
    }));
}

export default async function BollywoodReelsServer() {
    const videos = await getVideos();
    return <BollywoodReelsClient videos={videos} />;
}