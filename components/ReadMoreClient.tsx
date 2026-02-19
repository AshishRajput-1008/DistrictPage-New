"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface Props {
  html: string;
}

export default function ReadMoreClient({ html }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const authToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth_token="));

    if (authToken) {
      setIsExpanded(true);
    }
  }, []);

  const handleReadMore = () => {
    const authToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth_token="));

    if (!authToken) {
      const redirectUrl = encodeURIComponent(pathname);
      router.push(`/account/login?redirect=${redirectUrl}`);
    } else {
      setIsExpanded(true);
    }
  };

  if (!html) return null;

  return (
    <div>
      {isExpanded ? (
        <div
          className="text-justify text-[18px] prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <div className="flex justify-center">
          <button
            onClick={handleReadMore}
            className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            पूरी खबर पढ़ें
          </button>
        </div>
      )}
    </div>
  );
}