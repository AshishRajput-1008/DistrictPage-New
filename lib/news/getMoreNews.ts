import { getPool } from "@/lib/db";

export async function getMoreNews() {
  const pool = await getPool();

  const result = await pool.request().query(`
    SELECT TOP 4
    AN.ID, 
    NewsTag, 
    AdminId, 
    NewsHeading, 
    ThumbNail, 
    DataType, 
    AN.NewsDetailsTwo, 
    AN.NewsDetails,
    Slug, 
    UpdatedDate, 
    DT.DistrictName, 
    DT.DistrictNameInHindi, 
    ST.StateName
FROM AllNewsTable AN 
INNER JOIN District DT ON DT.District_id = AN.NewsDistrict 
INNER JOIN [State] ST ON ST.State_id = DT.State_Id  
WHERE AdminId LIKE '%RP%' 
  AND AN.[Status] = 1 
  AND AN.UpdatedDate >= DATEADD(day, -7, GETDATE())
ORDER BY NEWID()
  `);

  return result.recordset;
}
