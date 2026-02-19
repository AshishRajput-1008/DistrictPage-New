// import CryptoClient from "@/components/CryptoClient";
// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// export default async function CryptoServer() {
//     const res = await fetch(
//         `${apiUrl}GetCryptoNews?pagesize=4`,
//         { next: { revalidate: 300 } }
//     );

//     if (!res.ok) {
//         throw new Error("Failed to fetch crypto news");
//     }

//     const data = await res.json();

//     return <CryptoClient articles={data} />;
// }


// components/CryptoServer.tsx
import CryptoClient from "@/components/CryptoClient";

const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://mapi.sadaivsatya.com/api/AdminApi/";

async function getCryptoNews() {
    try {
        const res = await fetch(`${apiUrl}getnewsbytazahalchal?pagesize=5`, {
            cache: "no-cache",
        });

        if (!res.ok) return [];

        const data = await res.json();

        if (Array.isArray(data)) return data;
        if (Array.isArray(data?.data)) return data.data;

        return [];
    } catch (err) {
        console.error("Crypto API failed:", err);
        return [];
    }
}

export default async function CryptoServer() {
    const articles = await getCryptoNews();
    return <CryptoClient articles={articles} />;
}
