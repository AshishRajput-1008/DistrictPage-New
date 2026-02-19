// app/layout-wrapper.tsx
import ExtraHeaderServer from "@/components/header/Header.server";
import Header from "@/components/header/Header.server";
import NewsTicker from "@/components/news-ticker";
import { Toaster } from 'react-hot-toast';
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import TrendingServer from "@/components/TrendingNav/trending.server";

async function getCategories() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}GetCategories`);
        if (!res.ok) return [];
        return await res.json();
    } catch {
        return [];
    }
}

export default async function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [categories] = await Promise.all([
        getCategories(),
    ]);

    return (
        <>
            {/* <TopAdHeader /> */}
            <NewsTicker />
            <ExtraHeaderServer />
            {/* <TrendingServer /> */}
            {/* <ExtraHeader initialCategories={categories} /> */}
            {children}
            <Toaster
                position="bottom-center"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#333',
                        color: '#fff',
                        borderRadius: '12px',
                        padding: '12px 20px',
                        fontSize: '16px',
                    },
                    success: {
                        icon: '✅',
                        style: { background: '#22c55e' },
                    },
                }}
            />
        </>
    );
}