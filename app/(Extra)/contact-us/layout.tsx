import ExtraHeaderServer from "@/components/header/Header.server";
import NewsTicker from "@/components/news-ticker";
import "@/app/globals.css";
import LoginFooter from "@/components/LoginFooter";

export const metadata = {
  title: "Contact Us | Sadaiv Satya Media",
  description: "Get in touch with Sadaiv Satya Media. We'd love to hear from you.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
        <NewsTicker />
        <ExtraHeaderServer />

        <main className="mx-auto pb-12">
          <div className="bg-white dark:bg-zinc-900 shadow-xl rounded-2xl p-6 sm:p-10">
            {children}
          </div>
        </main>

        <LoginFooter />
      </body>
    </html>
  );
}
