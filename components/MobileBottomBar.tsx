"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Video, BookOpen, Zap, Crown } from "lucide-react";

interface BottomNavClientProps {
  videoHref: string;
}

export default function MobileBottomBar({ videoHref }: BottomNavClientProps) {
  const pathname = usePathname();

  const navItems = [
    {
      name: "होम",
      icon: Home,
      href: "/",
      activeColor: "text-red-600",
      inactiveColor: "text-gray-600 hover:text-red-600",
    },
    {
      name: "ताजा हलचल",
      icon: Zap,
      href: "/taaza-halachal",
      activeColor: "text-red-600",
      inactiveColor: "text-gray-600 hover:text-red-600",
    },
    {
      name: "वीडियो",
      icon: Video,
      href: videoHref,
      activeColor: "text-red-600",
      inactiveColor: "text-gray-600 hover:text-red-600",
    },
    {
      name: "वेब स्टोरीज़",
      icon: BookOpen,
      href: "/web-stories",
      activeColor: "text-red-600",
      inactiveColor: "text-gray-600 hover:text-red-600",
    },
    // {
    //   name: "प्रोफ़ाइल",
    //   icon: User,
    //   href: "/account/profile/",
    //   activeColor: "text-red-600",
    // },
    {
      name: "सदैव विशेष",
      icon: Crown,
      href: "/always-special",
      activeColor: "text-red-600",
      inactiveColor: "text-gray-600 hover:text-red-600",
    }

  ];

  return (
    <div className="md:hidden fixed bottom-[-2px] left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <nav className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${isActive
                ? item.activeColor
                : item.inactiveColor
                }`}
            >
              <Icon className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}