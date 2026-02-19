"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import '@/app/globals.css';
import LoginFooter from "@/components/LoginFooter";
import { useAuth } from "../../auth-context";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "@/Utility/cropImage";
import Image from "next/image";

export default function EditProfile() {
    const router = useRouter();
    const pathname = usePathname();
    const { email, name: authName, profileImage, updateUser } = useAuth();
    const [name, setName] = useState(authName || "");
    const [loading, setLoading] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [showCropper, setShowCropper] = useState(false);
    const [profileImages, setProfileImage] = useState<Blob | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const Base_Url = process.env.NEXT_PUBLIC_API_BASE_URL || "";

    const onSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !file.type.startsWith("image/")) return;

        const reader = new FileReader();
        reader.onload = () => {
            setImageSrc(reader.result as string);
            setShowCropper(true);
        };
        reader.readAsDataURL(file);
    };

    const onCropComplete = (_: any, croppedPixels: any) => {
        setCroppedAreaPixels(croppedPixels);
    };

    const handleCropSave = async () => {
        if (!imageSrc || !croppedAreaPixels) return;
        const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels);
        setProfileImage(croppedBlob);
        setShowCropper(false);
    };

    const menuItems = [
        { label: "मेरा प्रोफाइल", path: "/account/profile/me" },
        { label: "मेंबरशिप डिटेल्स", path: "/account/profile/membership-details" },
        { label: "ऑर्डर हिस्ट्री", path: "/account/profile/order-history" },
    ];

    const handleUpdate = async () => {
        if (!name || !email) return;
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            if (profileImages) formData.append("profileImage", profileImages);

            const res = await fetch("https://mapi.sadaivsatya.com/api/email/update-profile", {
                method: "POST",
                credentials: "include",
                body: formData,
            });

            const data = await res.json();

            document.cookie = `auth_token=${data.token}; path=/; max-age=86400`;
            updateUser(data.name, data.profileImage);
            router.push("/account/");
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {showCropper && imageSrc && (
                <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
                    <div className="bg-white dark:bg-[#1c1c1c] p-4 rounded w-[90%] max-w-sm">
                        <div className="relative w-full h-64">
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                zoom={zoom}
                                aspect={1}
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={onCropComplete}
                            />
                        </div>
                        <button
                            onClick={handleCropSave}
                            className="w-full mt-4 bg-red-500 text-white py-2 rounded"
                        >
                            सेव करें
                        </button>
                    </div>
                </div>
            )}

            <div className="min-h-screen bg-gray-50 dark:bg-[#1c1c1c] text-gray-800 dark:text-gray-200 p-4">
                <div className="flex items-center gap-3 mb-4">
                    <button
                        title="Back"
                        onClick={() => router.back()}
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <h2 className="text-lg font-500">मेरा प्रोफाइल</h2>
                </div>

                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
                    {/* Sidebar */}
                    <div className="hidden md:flex flex-col w-1/4 bg-white dark:bg-[#1c1c1c] rounded-lg border dark:border-gray-700 p-4 space-y-2">
                        {menuItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <button
                                    key={item.path}
                                    onClick={() => router.push(item.path)}
                                    className={`text-left px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${isActive ? "bg-gray-200 dark:bg-gray-800 font-500" : ""
                                        }`}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Profile Form */}
                    <div className="flex-1 bg-white dark:bg-[#1c1c1c] p-2 rounded-lg border dark:border-gray-700">
                        <div className="flex flex-col items-center mb-6">
                            <div className="relative w-28 h-28 rounded-full overflow-hidden border">
                                {profileImages ? (
                                    <Image
                                        src={URL.createObjectURL(profileImages)}
                                        alt="Selected profile"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                ) : profileImage ? (
                                    <Image
                                        src={`${Base_Url}${profileImage}`}
                                        alt="Profile"
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <Image
                                        src="/images/profile-pic.1a5bb6c3.svg"
                                        alt="Default profile"
                                        fill
                                        className="object-cover p-2"
                                    />
                                )}

                            </div>

                            <label className="mt-2 text-sm cursor-pointer text-red-500">
                                फोटो बदलें
                                <input type="file" accept="image/*" hidden onChange={onSelectImage} />
                            </label>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm mb-1">नाम</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="नाम दर्ज करें"
                                className="w-full border rounded px-3 py-2 dark:bg-[#2a2a2a] dark:border-gray-600"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleUpdate();
                                }}
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                title="Email"
                                type="text"
                                value={email || ""}
                                readOnly
                                className="w-full border rounded px-3 py-2 dark:bg-[#2a2a2a] dark:border-gray-600 bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                            />
                        </div>

                        <button
                            onClick={handleUpdate}
                            disabled={!name || loading}
                            className="w-full bg-red-500 text-white py-2 rounded font-medium 
                            hover:bg-red-600 disabled:opacity-50 
                            flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v8z"
                                        />
                                    </svg>
                                    अपडेट हो रहा है...
                                </>
                            ) : (
                                "प्रोफाइल अपडेट करें"
                            )}
                        </button>
                    </div>
                </div>

                <LoginFooter />
            </div>
        </>
    );
}

