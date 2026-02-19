// import CyberCrimeClient from "@/components/CyberCrimeClient";
// import { NewsArticle } from "@/types";

// const API =
//     "https://mapi.sadaivsatya.com/Api/AdminApi/GetCyberCrimeNewsList?pagesize=6";

// async function getCyberCrime() {
//     const res = await fetch(API, { next: { revalidate: 300 } });

//     if (!res.ok) {
//         throw new Error("Failed to load cyber crime news");
//     }

//     return (await res.json()) as NewsArticle[];
// }

// export default async function CyberCrimeSectionServer() {
//     const data = await getCyberCrime();

//     return <CyberCrimeClient data={data} />;
// }


// app/(home)/CyberCrimeSection.server.tsx
import CyberCrimeClient from "@/components/CyberCrimeClient";
import { NewsArticle } from "@/types";

const API =
  "https://mapi.sadaivsatya.com/Api/AdminApi/GetCyberCrimeNewsList?pagesize=6";

export const revalidate = 300;

async function getCyberCrime() {
  try {
    const res = await fetch(API, {
      next: { revalidate: 300, tags: ["cyber-crime"] },
    });

    if (!res.ok) return [];

    return (await res.json()) as NewsArticle[];
  } catch {
    return [];
  }
}

export default async function CyberCrimeSectionServer() {
  const data = await getCyberCrime();
  return <CyberCrimeClient data={data} />;
}
