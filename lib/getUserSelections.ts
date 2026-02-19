import { cookies } from "next/headers";

const decodeCookie = (val?: string): string[] => {
  if (!val) return [];
  try {
    const decoded = Buffer.from(val, "base64").toString("utf-8");
    const parsed = JSON.parse(decoded);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export function getUserSelections() {
  const store = cookies();
  return {
    districts: decodeCookie(store.get("selectedDistricts")?.value),
    states: decodeCookie(store.get("selectedStates")?.value),
  };
}
