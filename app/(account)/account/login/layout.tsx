import "@/app/globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/app/(account)/account/auth-context";

export const metadata: Metadata = {
    title: "Login | Sadaiv Satya",
    description:
        "अपने मोबाइल नंबर से लॉगिन करें और Sadaiv Satya पर ताज़ा खबरें पढ़ें। सुरक्षित और आसान लॉगिन।",

    robots: {
        index: false,
        follow: false,
    },

    openGraph: {
        title: "Login | Sadaiv Satya",
        description: "OTP के ज़रिए सुरक्षित लॉगिन करें",
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
