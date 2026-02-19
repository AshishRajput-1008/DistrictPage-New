"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, KeyboardEvent } from "react";

type SmartLinkProps = {
  href: string;
  id?: number;
  children: ReactNode;
  className?: string;
};

export default function SmartLink({
  href,
  id,
  children,
  className,
}: SmartLinkProps) {
  const router = useRouter();

  function incrementViewBackground(newsId: number) {
    try {
      fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/adminapi/increment-view/${newsId}`,
        {
          method: "POST",
          keepalive: true,
        }
      );
    } catch (err) {
      console.error("View increment failed", err);
    }
  }

  // function navigate() {
  //   router.push(href);
  //   if (id) incrementViewBackground(id);
  // }

  // function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
  //   if (e.key === "Enter" || e.key === " ") {
  //     e.preventDefault();
  //     navigate();
  //   }
  // }

  return (
    <Link
      href={href}
      className={className}
      onClick={() => id && incrementViewBackground(id)}
    >
      {children}
    </Link>
  );
}