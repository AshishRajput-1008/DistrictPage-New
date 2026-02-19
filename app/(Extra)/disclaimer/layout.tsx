import ExtraHeaderServer from "@/components/header/Header.server";
import '@/app/globals.css';
import NewsTicker from "@/components/news-ticker";
import LoginFooter from "@/components/LoginFooter";

export const metadata = {
    title: "Disclaimer | Sadaiv Satya Media",
    description: "Read the disclaimer of Sadaiv Satya Media.",
};

export default function DisclaimerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
                <NewsTicker />
                <ExtraHeaderServer />

                <main className="mx-auto pb-10">
                    <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-6 sm:p-10 leading-relaxed">
                        {children}
                    </div>
                </main>

                <LoginFooter />
            </body>
        </html>
    );
}
