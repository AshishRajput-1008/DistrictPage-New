import { CATEGORY_COLORS } from "@/lib/categoryColors";

export function getCategoryColor(name?: string) {
  if (!name) return "#FF554B";

  const clean = name.replace(/-/g, " ").trim();

  return (
    CATEGORY_COLORS[clean] ||
    CATEGORY_COLORS[clean.replace(/\b\w/g, c => c.toUpperCase())] ||
    "#FF554B"
  );
}
