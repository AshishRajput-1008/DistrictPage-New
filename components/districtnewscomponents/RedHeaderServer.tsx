export const dynamic = "force-dynamic";
export const revalidate = 0;
import RedHeaderClient from "./RedHeader";
import { getLocationFromLatLng } from "@/lib/getLocationFromLatLng";
import { getUserSelections } from "@/lib/getUserSelections";
import { getDistrictStateDetails } from "@/lib/getDistrictStateDetails";
import { cookies } from "next/headers";

export default async function RedHeaderServer() {
    const { districts, states } = getUserSelections();
    const allIds = [...districts];
    const details = await getDistrictStateDetails(allIds);

    const store = cookies();
    const lat = Number(store.get("userLat")?.value);
    const lon = Number(store.get("userLon")?.value);

    const location =
        lat && lon ? await getLocationFromLatLng(lat, lon) : null;

    const districtName = location?.district || "";
    const stateName = location?.state || "";
    const countryName = location?.country || "";

    return (
        <RedHeaderClient
            districtName={districtName}
            stateName={stateName}
            countryName={countryName}
            savedDetails={details}
        />
    );
}
