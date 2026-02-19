// import IndianClient from "@/components/IndianClient";
// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// export default async function IndianServer() {
//   const res = await fetch(
//     `${apiUrl}GetIndianews?pagesize=7`,
//     { next: { revalidate: 300 } }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch India news");
//   }

//   const data = await res.json();

//   return <IndianClient articles={data} />;
// }


// components/IndianServer.tsx
import IndianClient from "@/components/IndianClient";

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://mapi.sadaivsatya.com/api/AdminApi/";

async function getIndianNews() {
  try {
    const res = await fetch(
      `${apiUrl}GetIndianews?pagesize=7`,
      { next: { revalidate: 300, tags: ["india-news"] } }
    );

    if (!res.ok) return [];

    const data = await res.json();

    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.data)) return data.data;

    return [];
  } catch (err) {
    console.error("India API failed:", err);
    return [];
  }
}

export default async function IndianServer() {
  const articles = await getIndianNews();
  return <IndianClient articles={articles} />;
}
