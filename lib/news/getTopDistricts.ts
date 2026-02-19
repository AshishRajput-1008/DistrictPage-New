// lib/news/getTopDistricts.ts
import { getPool } from "@/lib/db";

export async function getTopDistricts(page: number, pageSize: number) {
  const pool = await getPool();

  const offset = (page - 1) * pageSize;

  const result = await pool.request().query(`
    SELECT AN.NewsDistrict
    FROM AllNewsTable AN
    WHERE AN.[Status] = 1
      AND AN.NewsDistrict IS NOT NULL
      AND AN.NewsDistrict <> ''
    GROUP BY AN.NewsDistrict
    ORDER BY COUNT(*) DESC
    OFFSET ${offset} ROWS
    FETCH NEXT ${pageSize} ROWS ONLY
  `);

  return result.recordset.map(r => r.NewsDistrict);
}
