import Headers from "@/components/Headers";
import { Metadata } from "next";
import { AuthProvider } from "../(account)/account/auth-context";

export const metadata: Metadata = {
    title: "Videos - News",
    description: "Latest video news and stories",
    generator: "sadaivsatya.com",
    icons: {
        icon: [{ url: "/images/logo.webp" }],
    },
};

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="hi">
            <body>
                <AuthProvider>
                    <Headers />
                    <main className="dark:bg-[#18191a] max-w-[1600px] mx-auto px-3">
                        {children}
                    </main>
                </AuthProvider>
            </body>
        </html>
    );
}
