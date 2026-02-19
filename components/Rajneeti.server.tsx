// // components/RajneetiServer.tsx
// import React from "react";
// import RajneetiClient from "@/components/RajneetiClient";
// const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://mapi.sadaivsatya.com/api/AdminApi/";
// export default async function RajneetiServer() {
//     // Fetch latest politics news from API
//     const res = await fetch(
//         `${apiUrl}GetPoliticsNews?pagesize=4`,
//         { next: { revalidate: 300 } }
//     );

//     if (!res.ok) {
//         throw new Error("Failed to fetch Rajneeti news");
//     }

//     const newsData = await res.json();

//     return <RajneetiClient newsData={newsData} />;
// }


// components/RajneetiServer.tsx
import RajneetiClient from "@/components/RajneetiClient";

const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://mapi.sadaivsatya.com/api/AdminApi/";

async function getRajneeti() {
    try {
        const res = await fetch(
            `${apiUrl}GetPoliticsNews?pagesize=4`,
            { next: { revalidate: 300, tags: ["rajneeti"] } }
        );

        if (!res.ok) return [];

        const data = await res.json();

        if (Array.isArray(data)) return data;
        if (Array.isArray(data?.data)) return data.data;

        return [];
    } catch (err) {
        console.error("Rajneeti API failed:", err);
        return [];
    }
}

export default async function RajneetiServer() {
    const newsData = await getRajneeti();
    return <RajneetiClient newsData={newsData} />;
}
