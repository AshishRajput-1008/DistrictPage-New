// // lib/extractMedia.ts

// export type MediaItem = {
//   type: "image" | "video";
//   src: string;
// };

// export function extractMedia(html: string): MediaItem[] {
//   if (!html) return [];

//   // 👇 SERVER GUARD
//   if (typeof window === "undefined") return [];

//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, "text/html");

//   const items: MediaItem[] = [];

//   doc.querySelectorAll("img").forEach((img) => {
//     const src = img.getAttribute("src");
//     if (src) items.push({ type: "image", src });
//   });

//   doc.querySelectorAll("video, iframe").forEach((v) => {
//     const src = v.getAttribute("src");
//     if (src) items.push({ type: "video", src });
//   });

//   return items;
// }


export type MediaItem = {
    type: "image" | "video";
    src: string;
};

export function extractMedia(html: string): MediaItem[] {
    if (!html) return [];

    if (typeof window === "undefined") return []; // 🚫 server guard

    const div = document.createElement("div");
    div.innerHTML = html;

    const items: MediaItem[] = [];

    div.querySelectorAll("img").forEach((img) => {
        const src = img.getAttribute("src");
        if (src) items.push({ type: "image", src });
    });

    div.querySelectorAll("video, iframe").forEach((v) => {
        const src = v.getAttribute("src");
        if (src) items.push({ type: "video", src });
    });

    return items;
}
