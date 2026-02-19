// // components/AlwaysSpecialServer.tsx
// import React from "react";
// import AlwaysSpecialClient from "@/components/AlwaysSpecialClient";

// const apibaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://mapi.sadaivsatya.com/api/AdminApi/";

// export default async function AlwaysSpecialServer() {
//     // Fetch data from API
//     const res = await fetch(
//         `${apibaseUrl}GetAlwaysSpecialNews?pageSize=5`,
//         { next: { revalidate: 300 } }
//     );

//     if (!res.ok) {
//         throw new Error("Failed to fetch Always Special news");
//     }

//     const newsData = await res.json();

//     return <AlwaysSpecialClient newsData={newsData} />;
// }

// components/AlwaysSpecialServer.tsx
import AlwaysSpecialClient from "@/components/AlwaysSpecialClient";

const apibaseUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://mapi.sadaivsatya.com/api/AdminApi/";

export const revalidate = 300;

async function getAlwaysSpecial() {
  try {
    const res = await fetch(
      `${apibaseUrl}GetAlwaysSpecialNews?pageSize=5`,
      { next: { revalidate: 300, tags: ["always-special"] } }
    );

    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function AlwaysSpecialServer() {
  const newsData = await getAlwaysSpecial();
  return <AlwaysSpecialClient newsData={newsData} />;
}
