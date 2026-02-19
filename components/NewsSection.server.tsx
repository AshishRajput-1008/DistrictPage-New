// import NewsSectionClient from "@/components/NewsSection.client";
// import { ApiNews } from "@/types/news";

// const API = "https://mapi.sadaivsatya.com/api/AdminApi/";

// async function fetchNews(endpoint: string): Promise<ApiNews[]> {
//     const res = await fetch(API + endpoint, { next: { revalidate: 300 } });

//     if (!res.ok) throw new Error("Failed to fetch " + endpoint);

//     return res.json();
// }

// export default async function NewsSectionServer() {
//     const [mystery, celebrity, spirituality, astrology] = await Promise.all([
//         fetchNews("GetMysteryAndThrillNewsList?pageSize=4"),
//         fetchNews("getMithiMirchi?pagesize=4"),
//         fetchNews("GetAdhyatmNews?pagesize=4"),
//         fetchNews("GetAstrologyNews?pagesize=4"),
//     ]);

//     return (
//         <NewsSectionClient
//             mystery={mystery}
//             celebrity={celebrity}
//             spirituality={spirituality}
//             astrology={astrology}
//         />
//     );
// }


// components/NewsSection.server.tsx
import NewsSectionClient from "@/components/NewsSection.client";
import { ApiNews } from "@/types/news";

const API = "https://mapi.sadaivsatya.com/api/AdminApi/";

async function fetchNews(endpoint: string): Promise<ApiNews[]> {
    try {
        const res = await fetch(API + endpoint, { next: { revalidate: 300 } });
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data) ? data : data?.data ?? [];
    } catch (err) {
        console.error("News API error:", endpoint, err);
        return [];
    }
}

export default async function NewsSectionServer() {
    const [mystery, celebrity, spirituality, astrology] = await Promise.all([
        fetchNews("GetMysteryAndThrillNewsList?pageSize=4"),
        fetchNews("getMithiMirchi?pagesize=4"),
        fetchNews("GetAdhyatmNews?pagesize=4"),
        fetchNews("GetAstrologyNews?pagesize=4"),
    ]);

    return (
        <NewsSectionClient
            mystery={mystery}
            celebrity={celebrity}
            spirituality={spirituality}
            astrology={astrology}
        />
    );
}
