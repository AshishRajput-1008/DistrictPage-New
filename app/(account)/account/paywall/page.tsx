"use client";

import { ArrowLeft, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import LoginFooter from "@/components/LoginFooter";

export default function MembershipPage() {
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState("user");

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#1c1c1c]">

            {/* HEADER (FIXED HEIGHT, NOT POSITION FIXED) */}
            <div className="shrink-0 border-b dark:border-gray-800 bg-white dark:bg-[#1c1c1c]">
                <div className="flex text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white items-center gap-3 px-4 py-3">
                    <button title="Back" onClick={() => router.back()}>
                        <ArrowLeft className="w-5 h-5" />
                    </button>

                    <Image
                        unoptimized
                        src="/images/logo.webp"
                        alt="Logo"
                        width={54}
                        height={24}
                    />
                </div>
            </div>

            {/* SCROLLABLE CONTENT */}
            <div className="flex-1 overflow-y-auto px-4 py-3">

                <p className="text-center text-gray-700 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white text-sm font-500 mb-4">
                    मेंबरशिप प्लान
                </p>

                <div className="space-y-4">

                    {/* USER PLAN */}
                    <div
                        onClick={() => setSelectedPlan("user")}
                        style={{ marginBottom: "2px" }}
                        className={`border rounded-xl p-4 cursor-pointer transition
                        ${selectedPlan === "user"
                                ? "border-red-500 bg-red-50 dark:bg-[#2a1a00]"
                                : "border-gray-300 dark:border-gray-700"
                            }`}
                    >
                        <div className="flex justify-between mb-2">
                            <div>
                                <p className="font-500 text-gray-700 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Users</p>
                                <p className="text-sm text-red-500">₹100 / Year</p>
                            </div>

                            {selectedPlan === "user" && (
                                <CheckCircle className="text-red-500" />
                            )}
                        </div>

                        <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                            <li>• All Special Articles</li>
                            <li>• News</li>
                            <li>• Editorial</li>
                        </ul>
                    </div>

                    {/* ARTICLE PLAN */}
                    <div
                        onClick={() => setSelectedPlan("article")}
                        style={{ marginBottom: "2px" }}
                        className={`border rounded-xl p-4 cursor-pointer transition
                        ${selectedPlan === "article"
                                ? "border-red-500 bg-red-50 dark:bg-[#2a1a00]"
                                : "border-gray-300 dark:border-gray-700"
                            }`}
                    >
                        <div className="flex justify-between text-gray-700 dark:text-gray-300 mb-2">
                            <div>
                                <p className="font-500">Article Submissions</p>
                                <p className="text-sm text-red-500">₹500</p>
                            </div>

                            {selectedPlan === "article" && (
                                <CheckCircle className="text-red-500" />
                            )}
                        </div>

                        <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                            <li>• 5 Article Submissions</li>
                            <li>• Validity: 6 Months</li>
                        </ul>
                    </div>

                    {/* REPORTER PLAN */}
                    <div
                        onClick={() => setSelectedPlan("reporter")}
                        className={`border rounded-xl p-4 cursor-pointer transition
                        ${selectedPlan === "reporter"
                                ? "border-red-500 bg-red-50 dark:bg-[#2a1a00]"
                                : "border-gray-300 dark:border-gray-700"
                            }`}
                    >
                        <div className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
                            <div>
                                <p className="font-500">Reporter</p>
                                <p className="text-sm text-red-500">₹5000 / Year</p>
                            </div>

                            {selectedPlan === "reporter" && (
                                <CheckCircle className="text-red-500" />
                            )}
                        </div>

                        <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                            <li>• News Report Access</li>
                            <li>• Daily News Submission</li>
                            <li>• Min 3 News Compulsory</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* BOTTOM ACTION (NOT FIXED) */}
            <div className="shrink-0  dark:border-gray-800 bg-white dark:bg-black p-4">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-500 py-3 rounded-lg">
                    आगे बढ़ें
                </button>

                <p className="text-[11px] text-center text-gray-400 mt-2">
                    By proceeding you agree to our T&C
                </p>
            </div>
        </div>
    );
}
