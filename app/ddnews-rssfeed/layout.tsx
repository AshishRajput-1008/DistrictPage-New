import ExtraHeaderServer from "@/components/header/Header.server";
import NewsTicker from "@/components/news-ticker";
import "@/app/globals.css";
import LoginFooter from "@/components/LoginFooter";

export const metadata = {
  title: "DD News Live Feed | Sadaiv Satya Media",
  description:
    "Official DD News RSS headlines powered by Prasar Bharati, Government of India.",
};

export default function DDNewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black text-gray-900 dark:text-gray-100">
        <NewsTicker />
        <ExtraHeaderServer />

        <main className="mx-auto pb-16">
          <div className="bg-white dark:bg-zinc-900 p-4 sm:p-6">
            {/* Heading Bar */}
            {/* <div className="flex flex-col items-center justify-between border-b pb-3 mb-4">
              <h1 className="text-lg sm:text-xl font-bold">
                DD News — Official RSS Feed
              </h1>
              <div className="text-xs text-gray-500">
                Source: DD News (Prasar Bharati)
              </div>
            </div> */}

            {children}
          </div>
        </main>

        <LoginFooter />
      </body>
    </html>
  );
}
