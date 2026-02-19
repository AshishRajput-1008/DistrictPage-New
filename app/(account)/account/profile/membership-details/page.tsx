"use client";

import { ArrowLeft, Crown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MembershipPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-white dark:bg-[#1c1c1c]">

            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white dark:border-gray-800">
                <button title="Back" onClick={() => router.back()}>
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <h1 className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white font-500">मेंबरशिप डिटेल्स</h1>
            </div>

            {/* Content */}
            <div className="px-4 pt-6 text-center">
                <h2 className=" text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-lg font-500 mb-2">
                    प्रीमियम मेंबरशिप पाएं और अनलिमिटेड ई-पेपर पढ़ें
                </h2>

                <button
                    onClick={() => router.push(`/account/paywall`)}
                    className="mt-4 w-full flex items-center justify-center gap-2 
                    bg-red-500 hover:bg-red-600 
                    text-white font-500 py-3 rounded-lg"
                >
                    <Crown size={18} />
                    पाएं प्रीमियम मेंबरशिप
                </button>
            </div>
        </div>
    );
}
