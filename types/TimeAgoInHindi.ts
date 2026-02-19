export default function timeAgoInHindi(dateString: string): string {
  if (!dateString) return "अमान्य तिथि";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "अमान्य तिथि";

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  if (diffMs < 0) return "अभी अभी";

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days <= 2) {
    if (days > 0) return days === 1 ? "1 दिन पहले" : `${days} दिन पहले`;
    if (hours > 0) return hours === 1 ? "1 घंटा पहले" : `${hours} घंटे पहले`;
    if (minutes > 0) return minutes === 1 ? "1 मिनट पहले" : `${minutes} मिनट पहले`;
    if (seconds > 0) return seconds === 1 ? "1 सेकंड पहले" : `${seconds} सेकंड पहले`;
    return "अभी अभी";
  }

  return formatHindiDate(date);
}

function formatHindiDate(date: Date): string {
  const monthsHindi = [
    "जनवरी",
    "फ़रवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर",
  ];

  const day = date.getDate();
  const month = monthsHindi[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
