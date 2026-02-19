"use client";

import { ReactNode, useState, useEffect } from "react";
import { ArrowLeft, HelpCircle, Mail, Settings, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/(account)/account/auth-context";
import LoginFooter from "@/components/LoginFooter";

export default function ProfilePage() {
    const router = useRouter();
    const { isLoggedIn, email, authReady, logout } = useAuth();
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        const next = !darkMode;
        setDarkMode(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    if (!authReady) return <div className="min-h-screen bg-white dark:bg-[#1c1c1c]" />;

    return (
        <div className="min-h-screen bg-white dark:bg-[#1c1c1c] text-black dark:text-white">

            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b sticky top-0 bg-white dark:bg-[#1c1c1c] z-10">
                <button title="Back" onClick={() => router.back()}>
                    <ArrowLeft size={22} />
                </button>
                <h1 className="text-lg font-500">प्रोफाइल</h1>
            </div>

            <AccountItem
                label={
                    <div className="flex flex-col">
                        <span className="font-medium">मेरा प्रोफाइल</span>

                        {isLoggedIn && (
                            <span className="text-sm text-gray-600 dark:text-gray-400 break-all">
                                {email}
                            </span>
                        )}
                    </div>
                }
                right={
                    !isLoggedIn && (
                        <button
                            onClick={() => router.push("/account/login/")}
                            className="bg-red-500 text-white text-sm px-4 py-1.5 rounded"
                        >
                            लॉगिन
                        </button>
                    )
                }
            />


            {isLoggedIn && (
                <>
                    <div
                        onClick={() => router.push("/account")}
                        className="flex items-center justify-between px-4 py-3 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                        <span className="text-sm font-medium">अकाउंट सेटिंग्स</span>
                        <Settings size={18} className="text-gray-600 dark:text-gray-300" />
                    </div>
                </>
            )}

            {/* <div className="px-4 py-4 flex items-center justify-between border-b">
                <span className="text-sm font-medium">डार्क मोड</span>
                <button
                    title="Theme"
                    onClick={toggleTheme}
                    className={`relative w-11 h-6 rounded-full transition ${darkMode ? "bg-red-500" : "bg-gray-300"}`}
                >
                    <span className={`absolute top-[2px] left-[2px] h-5 w-5 bg-white rounded-full transition ${darkMode ? "translate-x-5" : ""}`} />
                </button>
            </div> */}

            <AccountItem label="FAQs" right={<HelpCircle size={18} />} onClick={() => router.push("")} />
            <AccountItem label="फीडबैक दें" right={<Mail size={18} />} onClick={() => router.push("")} />

            {isLoggedIn && (
                <>
                    <div
                        onClick={() => {
                            logout();
                            router.push("/account/login/");
                        }}
                        className="flex items-center justify-between px-4 py-3 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
                    >
                        <span>लॉग आउट करें</span>
                        <LogOut size={18} />
                    </div>
                </>
            )}

            <div className="px-4 pt-4 text-sm text-gray-600 dark:text-gray-400 space-y-3">
                <button onClick={() => router.push("")} className="block text-left">About Us</button>
                <button onClick={() => router.push("")} className="block text-left">Cookie Policy</button>
                <button onClick={() => router.push("")} className="block text-left">Privacy Policy</button>
                <button onClick={() => router.push("")} className="block text-left">Terms and Conditions</button>
                <button onClick={() => router.push("")} className="block text-left">Refund policy</button>
                <button onClick={() => router.push("")} className="block text-left">Contact Us</button>
            </div>

            <LoginFooter />

        </div>
    );

    type Props = { label: any; right?: ReactNode; onClick?: () => void; border?: boolean; };
    function AccountItem({ label, right, onClick, border = true }: Props) {
        return (
            <div onClick={onClick} className={`px-4 py-4 flex items-center justify-between ${border ? "border-b" : ""} ${onClick ? "cursor-pointer" : ""}`}>
                <span className="text-sm font-medium">{label}</span>
                {right}
            </div>
        );
    }
}
