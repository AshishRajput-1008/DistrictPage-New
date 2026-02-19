export async function getDistrictStateDetails(ids: string[]) {
  if (!ids.length) return [];

  try {
    const res = await fetch(
      "https://mapi.sadaivsatya.com/api/AdminApi/GetDistrictAndStateDetails",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ids),
        cache: "no-store",
      }
    );

    const text = await res.text();

    if (!res.ok) {
      console.error("API Error:", text);
      return [];
    }

    try {
      return JSON.parse(text);
    } catch (e) {
      console.error("JSON Parse Failed:", text);
      return [];
    }
  } catch (e) {
    console.error("Network Error:", e);
    return [];
  }
}
