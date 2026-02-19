"use client";
import timeAgoInHindi from "@/types/TimeAgoInHindi";
import { useEffect, useState } from "react";

export default function TimeAgoSafe({ date }: { date: string }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(timeAgoInHindi(date));
  }, [date]);

  return <div className="text-[12px] text-gray-500">{text}</div>;
}
