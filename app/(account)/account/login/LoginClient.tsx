"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import LoginFooter from "@/components/LoginFooter";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirect");

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [timeLeft, setTimeLeft] = useState(300);
  const [loading, setLoading] = useState(false);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const sendOtp = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return alert("कृपया सही ईमेल डालें");

    setLoading(true);

    await fetch("https://mapi.sadaivsatya.com/api/email/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ email })
    });

    localStorage.setItem("pending_email", email);
    setStep("otp");
    setTimeLeft(300);
    setLoading(false);
  };

  useEffect(() => {
    if (step !== "otp") return;

    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [step]);

  const verifyOtp = async () => {
    if (otp.length !== 6) return alert("6 अंकों का OTP डालें");
    setLoading(true);
    try {
      const res = await fetch("https://mapi.sadaivsatya.com/api/email/verify-otp", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          email: localStorage.getItem("pending_email"),
          otp
        })
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("API error:", text);
        return;
      }

      const data = await res.json();
      if (data.token) {
        localStorage.removeItem("pending_email");
        document.cookie = `auth_token=${data.token}; path=/; secure`;

        // 🔥 Redirect logic
        if (redirectTo) {
          router.push(decodeURIComponent(redirectTo));
        } else {
          router.push("/");
        }
      }

    } catch (err) {
      console.error("Network error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md flex flex-col">

          <div className="p-2 text-center border-b">
            <Link href={`/`}>
              <Image
                unoptimized
                src="/images/logo.webp"
                alt="Logo"
                width={120}
                height={60}
                className="mx-auto"
              />
            </Link>
          </div>

          <div className="flex justify-center my-0">
            <Image
              unoptimized
              src="/images/Sandy_Bld-02_Single-06.jpg"
              alt="Login"
              width={200}
              height={150}
              priority
              className="object-contain"
            />
          </div>

          <div className="px-4 pb-6">
            {step === "email" && (
              <>
                <label className="block text-sm font-medium mb-2">
                  ईमेल डालें
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="example@gmail.com"
                  className="w-full border rounded-md px-3 py-2 mb-3 outline-none focus:ring-2 focus:ring-red-400"
                />

                <div className="flex gap-2 text-xs text-gray-600 mb-4">
                  <Image
                    src="/assets/fonts/privacy-icon.5ea532b4.svg"
                    alt="Privacy"
                    width={20}
                    height={20}
                    unoptimized
                  />
                  <p>
                    <strong>आपकी जानकारी सुरक्षित है।</strong>
                    OTP केवल लॉगिन के लिए भेजा जाएगा।
                  </p>
                </div>

                <button
                  onClick={sendOtp}
                  disabled={loading}
                  className={`w-full bg-red-500 text-white py-2.5 rounded-md font-medium 
              disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-2`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                      </svg>
                      भेजा जा रहा है...
                    </>
                  ) : "OTP भेजें"}
                </button>
              </>
            )}

            {step === "otp" && (
              <>
                <p className="text-sm text-center text-gray-600 mb-3">
                  OTP भेजा गया है
                  <br />
                  <b className="text-black">{email}</b> पर
                </p>

                <input
                  type="text"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                  maxLength={6}
                  className="w-full text-center tracking-widest text-lg border rounded-md py-2 mb-2"
                  placeholder="******"
                />

                <p className="text-center text-xs text-gray-500 mb-3">
                  समय शेष: <b>{formatTime(timeLeft)}s</b>
                </p>

                {timeLeft === 0 ? (
                  <button
                    onClick={sendOtp}
                    className="w-full border border-red-500 text-red-500 py-2 rounded-md disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    disabled={loading}
                  >
                    {loading && (
                      <svg className="animate-spin h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                      </svg>
                    )}
                    नया OTP भेजें
                  </button>
                ) : (
                  <button
                    onClick={verifyOtp}
                    className="w-full bg-red-500 text-white py-2 rounded-md disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                    disabled={loading}
                  >
                    {loading && (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                      </svg>
                    )}
                    OTP Verify करें
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <LoginFooter />
    </div>
  );
}