import { getPool } from "../db";
import { getUserSelections } from "../getUserSelections";


export async function getTopHeroNews() {
    const pool = await getPool();
    const selections = getUserSelections();

    if (!selections.districts?.length) return null;

    const districtIds = selections.districts
        .map(id => `'${id.replace(/'/g, "''")}'`)
        .join(",");

    const result = await pool.request().query(`
    SELECT TOP 1 AN.ID, DT.DistrictNameInHindi,AN.NewsHeadingTwo,AN.NewsDetailsTwo, AN.NewsDetails,DistrictName, StateName, NewsCategoryName, NewsSubsCategory, NewsTag, NewsHeading,Slug,UpdatedDate, Media FROM AllNewsTable AN INNER JOIN District DT ON DT.District_id = AN.NewsDistrict INNER JOIN [State] ST ON ST.State_id = DT.State_Id WHERE AN.[Status] = 1 AND NewsDistrict IN (${districtIds}) ORDER BY UpdatedDate DESC
  `);

    const rs = result.recordsets as any[];

    const hero = rs[0]?.[0] ?? null;

    return { hero };
}
