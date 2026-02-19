// components/MainSectionServerDistrict.tsx
import MainSectionClientDistrict from "./MainSectionClientDistrict";
import { getTopDistricts } from "@/lib/news/getTopDistricts";
import { getDistrictCategoryNews } from "@/lib/news/getDistrictWiseNews";

export default async function MainSectionServerDistrict() {
    const districts = await getTopDistricts(1, 4);

    const [business, taaza, sports, entertainment] = await Promise.all([
        getDistrictCategoryNews(districts[0], 3),
        getDistrictCategoryNews(districts[1], 4),
        getDistrictCategoryNews(districts[2], 6),
        getDistrictCategoryNews(districts[3], 4),
    ]);

    return (
        <MainSectionClientDistrict
            business={business}
            taaza={taaza}
            sports={sports}
            entertainment={entertainment}
        />
    );
}
