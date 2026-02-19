import "@/app/globals.css";
import ExtraHeaderServer from "@/components/header/Header.server";
import NewsTicker from "@/components/news-ticker";
import LoginFooter from "@/components/LoginFooter";

export const metadata = {
  title: "Investor Relations | Sadaiv Satya Media",
  description:
    "Investor relations page of Sadaiv Satya Media and Broadcasting.",
};

export default function InvestorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi">
      <body className="text-gray-900 dark:bg-black dark:text-gray-100">
        <NewsTicker />
        <ExtraHeaderServer />

        <main className="mx-auto px-2 py-8">
          <div className="bg-white dark:bg-zinc-900 px-2 pb-20">
            {children}
          </div>
        </main>

        <LoginFooter />
      </body>
    </html>
  );
}
