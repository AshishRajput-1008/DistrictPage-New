import { getUserSelections } from "@/lib/getUserSelections";
import DistrictClient from "./DistrictClient";

export interface DistrictItem {
  id: number;
  districtId: string;
  stateId: string;
  nameHindi: string;
  districtName: string;
}

interface StateItem {
  stateid: string;
  nameHindi: string;
}

interface PageProps {
  searchParams: { stateIds?: string };
}

async function getDistricts(stateIds: string): Promise<DistrictItem[]> {
  try {
    const res = await fetch(
      `https://mapi.sadaivsatya.com/Api/AdminApi/GetDistrictsByStates?stateIds=${stateIds}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch districts:", res.status);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching districts:", error);
    return [];
  }
}

async function getStates(): Promise<StateItem[]> {
  try {
    const res = await fetch(
      "https://mapi.sadaivsatya.com/Api/AdminApi/GetStates",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error fetching states:", error);
    return [];
  }
}

export default async function DistrictPage({ searchParams }: PageProps) {
  const stateIds = searchParams.stateIds || "";
  const selections = getUserSelections();
  if (!stateIds) {
    return (
      <div className="h-screen overflow-hidden bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <p className="text-red-600 text-lg">कोई राज्य चयनित नहीं है</p>
          <a href="/select-state" className="text-blue-600 mt-4 block">
            राज्य चुनने के लिए यहां क्लिक करें
          </a>
        </div>
      </div>
    );
  }

  const [districts, allStates] = await Promise.all([getDistricts(stateIds), getStates()]);

  const selectedStateIds = stateIds.split(',');
  const states = allStates.filter(state =>
    selectedStateIds.includes(state.stateid)
  );

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
      <div className="flex-1 flex justify-center items-stretch md:items-center">
        <DistrictClient
          districts={districts}
          stateIds={stateIds}
          states={states}
          selections={selections}
        />
      </div>
    </div>
  );
}