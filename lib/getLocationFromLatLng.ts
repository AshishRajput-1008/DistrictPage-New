export async function getLocationFromLatLng(lat: number, lon: number) {
    try {
        const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&addressdetails=1&format=xml`,
            {
                headers: {
                    "User-Agent": "sadaivsatya-news/1.0 (contact@sadaivsatya.com)"
                },
                cache: "no-store",
            }
        );

        const text = await res.text();

        if (!text.includes("<reversegeocode")) return null;

        const getTag = (tag: string) => {
            const match = text.match(new RegExp(`<${tag}>(.*?)</${tag}>`));
            return match ? match[1] : null;
        };

        return {
            district:
                getTag("city_district") ||
                "भोपाल",
            state: getTag("state") || "मध्य प्रदेश",
            country: getTag("country") || "India",
        };
    } catch {
        return null;
    }
}
