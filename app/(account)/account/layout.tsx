import "@/app/globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/app/(account)/account/auth-context";

export const metadata: Metadata = {
    title: "Account | Sadaiv Satya",
    description:
        "अकाउंट सेटिंग्स",

    robots: {
        index: false,
        follow: false,
    },

    openGraph: {
        title: "Account | Sadaiv Satya",
        description: "अकाउंट सेटिंग्स",
        type: "website",
    },
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="hi">
            <body className="bg-[#f6f6f6]">
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
