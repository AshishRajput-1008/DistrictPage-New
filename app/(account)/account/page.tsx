"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/app/(account)/account/auth-context";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Edit, LogOut } from "lucide-react";
import Image from "next/image";
import LoginFooter from "@/components/LoginFooter";
import Link from "next/link";

export default function AccountOverview() {
    const router = useRouter();
    const { name, profileImage, email, authReady, logout } = useAuth();
    const Base_Url = process.env.NEXT_PUBLIC_API_BASE_URL || "";

    if (!authReady) return <div className="min-h-screen bg-white dark:bg-black" />;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#1c1c1c] text-gray-800 dark:text-gray-200">
            <div className="max-w-md mx-auto bg-white dark:bg-[#1c1c1c] dark:border-gray-700 overflow-hidden">

                <div className="flex items-center p-4 border-b dark:border-gray-700 gap-2">
                    <button
                        title="Back"
                        onClick={() => router.back()}
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <Link href="/" title="Home">
                        <Image
                            src="/images/logo.webp"
                            alt="Logo"
                            width={50}
                            height={20}
                            className="object-contain"
                            unoptimized
                        />
                    </Link>

                </div>

                <div className="p-6 text-center border-b dark:border-gray-700">
                    <div className="w-18 h-18 mx-auto mb-1 rounded-full overflow-hidden flex items-center justify-center">
                        {profileImage ? (
                            <Image
                                unoptimized
                                src={Base_Url + profileImage}
                                alt="Profile image"
                                width={80}
                                height={80}
                                className="object-cover rounded-full"
                            />
                        ) : (
                            <Image
                                unoptimized
                                src="/images/profile-pic.1a5bb6c3.svg"
                                alt="Default profile"
                                width={80}
                                height={80}
                                className="object-cover rounded-full"
                            />
                        )}
                    </div>

                    <h2 className="font-500 text-lg">{name}</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">{email}</p>

                    <button
                        title="Edit"
                        onClick={() => router.push("/account/profile/me")}
                        className="mx-auto flex items-center justify-center gap-2 text-red-500   rounded-full hover:bg-red-200 dark:hover:bg-gray-700"
                    >
                        <Edit size={18} />एडिट करें
                    </button>
                </div>

                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    <button
                        onClick={() => router.push("/account/profile/membership-details")}
                        className="w-full text-left px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-between items-center"
                    >
                        <span>मेंबरशिप डिटेल्स</span>
                    </button>

                    <button
                        onClick={() => router.push("/account/profile/order-history")}
                        className="w-full text-left px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-between items-center"
                    >
                        <span>ऑर्डर हिस्ट्री</span>
                        <Image
                            unoptimized
                            src="/images/history-icon.c71171fc.svg"
                            alt="History Icon"
                            width={20}
                            height={10}
                            className="object-contain"
                        />
                    </button>

                    <button
                        onClick={() => {
                            logout();
                            router.push("/account/login/");
                        }}
                        className="w-full text-left px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-800 flex justify-between items-center"
                    >
                        <span>लॉग आउट करें</span>
                        <Image
                            unoptimized
                            src="/images/logout-icon.3854dd28.svg"
                            alt="History Icon"
                            width={20}
                            height={10}
                            className="object-contain text-red-600"
                        />
                    </button>
                </div>
            </div>
            <LoginFooter />
        </div>
    );
}
