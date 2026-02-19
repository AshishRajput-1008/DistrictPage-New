"use client";

import { User, ArrowLeft, HelpCircle, Mail, Settings, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/(account)/account/auth-context";

export default function UserMenu() {
  const router = useRouter();
  const { isLoggedIn, email, authReady, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  if (!authReady) return <div className="min-h-screen bg-white dark:bg-[#1c1c1c]" />;
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        title="Profile"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center"
      >
        {/* <User className="w-6 h-6 text-red-600" /> */}
        <div className="relative flex items-center justify-center text-gray-500 hover:text-red-600">
          {/* Profile */}
          <svg
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 2.33203C7.555 2.33203 2.33203 7.555 2.33203 14C2.33203 20.445 7.555 25.668 14 25.668C20.445 25.668 25.668 20.445 25.668 14C25.668 7.555 20.445 2.33203 14 2.33203ZM14 6.9987C16.21 6.9987 18 8.7887 18 10.9987C18 13.2087 16.21 14.9987 14 14.9987C11.79 14.9987 10 13.2087 10 10.9987C10 8.7887 11.79 6.9987 14 6.9987ZM14 22.3344C11.235 22.3344 8.7235 21.0779 7.16797 19.0929C7.22097 17.0489 11.6665 15.8344 14 15.8344C16.3255 15.8344 20.779 17.0489 20.832 19.0929C19.2765 21.0779 16.765 22.3344 14 22.3344Z"
              className="fill-current"
            />
          </svg>

          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -mr-5 right-0 w-4 h-4"
          >
            <path
              d="M2 4L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute right-0 mt-2 w-72 bg-white dark:bg-[#1c1c1c]
                       border dark:border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden"
          >
            <MenuItem
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
              <MenuItem
                label="अकाउंट सेटिंग्स"
                icon={<Settings size={18} />}
                onClick={() => {
                  router.push("/account");
                  setIsOpen(false);
                }}
              />
            )}

            {/* Dark mode */}
            <MenuItem
              label="डार्क मोड"
              right={
                <button
                  title="Change Theme"
                  onClick={toggleTheme}
                  className={`relative w-11 h-6 rounded-full transition
                    ${darkMode ? "bg-red-500" : "bg-gray-300"}`}
                >
                  <span
                    className={`absolute top-[2px] left-[2px] h-5 w-5 bg-white rounded-full transition
                      ${darkMode ? "translate-x-5" : ""}`}
                  />
                </button>
              }
            />

            <MenuItem label="FAQs" icon={<HelpCircle size={18} />} />
            <MenuItem label="फीडबैक दें" icon={<Mail size={18} />} />

            {isLoggedIn && (
              <MenuItem
                label="लॉग आउट करें"
                icon={<LogOut size={18} />}
                danger
                onClick={() => {
                  logout();
                  setIsOpen(false);
                  router.push("/account/login/");
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Reusable Menu Item */
function MenuItem({
  label,
  icon,
  onClick,
  right,
  danger = false,
}: {
  label: any;
  icon?: React.ReactNode;
  onClick?: () => void;
  right?: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between px-4 py-3 border-b cursor-pointer
        hover:bg-gray-100 dark:hover:bg-gray-800
        ${danger ? "text-red-600" : "text-gray-800 dark:text-gray-200"}`}
    >
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center gap-2">
        {right}
        {icon && <span className="text-gray-600 dark:text-gray-300">{icon}</span>}
      </div>
    </div>
  );
}
