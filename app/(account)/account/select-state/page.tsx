// page.tsx (SERVER)
import StatesClient from "./StatesClient";
import { getUserSelections } from "@/lib/getUserSelections";

export interface StateItem {
  id: number;
  stateid: string;
  nameHindi: string;
  stateName: string;
  stateImage: string;
}

async function getStates(): Promise<StateItem[]> {
  const res = await fetch(
    "https://mapi.sadaivsatya.com/Api/AdminApi/GetStates",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to load states");
  return res.json();
}

export default async function StatesPage() {
  const states = await getStates();
  const selections = getUserSelections();

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
      <div className="flex-1 flex justify-center items-stretch md:items-center">
        <StatesClient states={states} selections={selections} />
      </div>
    </div>
  );
}
