import ExtraHeader from "@/components/header/ExtraHeader";
import ExtraHeaderServer from "@/components/header/Header.server";
import '@/app/globals.css';
import NewsTicker from "@/components/news-ticker";
import LoginFooter from "@/components/LoginFooter";

export const metadata = {
  title: "Privacy Policy | Sadaiv Satya Media",
  description: "Read our Privacy Policy and data usage terms.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
        {/* Extra Header */}
        <NewsTicker />
        <ExtraHeaderServer />

        {/* Main container */}
        <main className=" mx-auto pb-10">
          <div className="bg-white dark:bg-zinc-900 shadow-lg rounded-2xl p-6 sm:p-10 leading-relaxed">
            {children}
          </div>
        </main>

        {/* Footer */}
        <LoginFooter />
      </body>
    </html>
  );
}
