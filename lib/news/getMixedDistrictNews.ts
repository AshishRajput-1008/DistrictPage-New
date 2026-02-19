// lib/news/getMixedDistrictNews.ts
import { getPool } from "@/lib/db";

export async function getMixedDistrictNews(limit: number,datatype: string) {
  const pool = await getPool();
  const result = await pool.request().query(`
    SELECT TOP ${limit}
      AN.ID, AN.NewsHeading, AN.NewsTag, AN.Slug,
      AN.ThumbNail, AN.UpdatedDate, AN.ViewCount,
      ST.StateName, DT.DistrictName, DT.DistrictNameInHindi
    FROM AllNewsTable AN
    INNER JOIN District DT ON DT.District_id = AN.NewsDistrict
	INNER JOIN [State] ST ON ST.State_id = DT.State_Id
    WHERE AN.[Status] = 1
      AND AN.AdminId LIKE '%RP%'
      AND AN.DataType = '${datatype}'
    ORDER BY UpdatedDate DESC
  `);

  return result.recordset;
}
