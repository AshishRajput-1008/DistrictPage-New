// lib/news/getDistrictCategoryNews.ts
import { getPool } from "@/lib/db";

export async function getDistrictCategoryNews(
  districtId: string,
  limit: number
) {
  const pool = await getPool();

  const safeId = `'${districtId.replace(/'/g, "''")}'`;

  const result = await pool.request().query(`
    SELECT TOP ${limit} AN.ID,NewsTag, NewsHeading, ThumbNail, DataType ,Slug, UpdatedDate, DT.DistrictName, DT.DistrictNameInHindi, ST.StateName FROM AllNewsTable AN INNER JOIN District DT ON DT.District_id = AN.NewsDistrict INNER JOIN [State] ST ON ST.State_id = DT.State_Id WHERE AN.[Status] = 1 AND NewsDistrict = ${safeId} ORDER BY UpdatedDate DESC
  `);
  return result.recordset;
}
