// lib/db.ts
import sql from "mssql";
import { getUserSelections } from "./getUserSelections";

let pool: sql.ConnectionPool | null = null;

export interface VideoData {
    Id: number;
    NewsCategoryName: string;
    NewsSubsCategory: string;
    Slug: string;
    NewsTag: string;
    NewsHeading: string;
    Media: string;
    ThumbNail: string;
    UpdatedDate: Date;
    ViewCount: number;
    NextLastId?: number | null;
    NextLastDate?: Date | null;
}

export async function getVideosDirect(options: {
    lastVideoId?: number | null;
    lastUpdatedDate?: Date | string | null;
    limit?: number;
    specificSlug?: string | null;
    mode?: 'REEL' | 'SINGLE';
}): Promise<{ videos: VideoData[]; nextCursor: string | null }> {
    const pool = await getPool();

    const {
        lastVideoId = null,
        lastUpdatedDate = null,
        limit = 8,
        specificSlug = null,
        mode = 'REEL'
    } = options;

    const request = pool.request();
    request.input('LastVideoId', sql.Int, lastVideoId);
    request.input('LastUpdatedDate', sql.DateTime, lastUpdatedDate);
    request.input('Limit', sql.Int, limit);
    request.input('SpecificSlug', sql.NVarChar(500), specificSlug);
    request.input('Mode', sql.NVarChar(20), mode);

    const result = await request.execute('sp_GetPagedVideos');
    const videos = result.recordset as VideoData[];

    let nextCursor = null;
    if (videos.length > 0 && mode === 'REEL' && videos[0].NextLastId && videos[0].NextLastDate) {
        const lastVideo = videos[videos.length - 1];
        const date = lastVideo.NextLastDate instanceof Date
            ? lastVideo.NextLastDate.toISOString()
            : new Date(lastVideo.NextLastDate!).toISOString();
        nextCursor = `${date}_${lastVideo.NextLastId}`;
    }

    return { videos, nextCursor };
}

export async function getPool() {
    if (!pool) {
        pool = await sql.connect({
            user: process.env.DB_USER!,
            password: process.env.DB_PASS!,
            server: process.env.DB_HOST!,
            port: Number(process.env.DB_PORT || 1433),
            database: process.env.DB_NAME!,
            options: { trustServerCertificate: true },
            pool: { max: 10, min: 1, idleTimeoutMillis: 30000 }
        });
    }
    return pool;
}

export async function getNews() {
    const pool = await getPool();
    const result = await pool.request().query(`
    SELECT TOP 2000 NewsCategoryName, NewsSubsCategory, NewsTag,KeyWord, NewsHeading, Slug, UpdatedDate, Media FROM AllNewsTable  WHERE DataType = 'IMAGE' AND [Status] = 1 AND UpdatedDate >= DATEADD(HOUR, -168, GETDATE()) ORDER BY UpdatedDate DESC`);
    return result.recordset;
}

export async function getVideos() {
    const pool = await getPool();
    const result = await pool.request().query(`
    SELECT TOP 8 NewsCategoryName, NewsSubsCategory, NewsTag, NewsHeading, Slug, UpdatedDate, Media FROM AllNewsTable  WHERE DataType = 'VIDEO' AND [Status] = 1 ORDER BY UpdatedDate DESC`);
    return result.recordset;
}

export async function getWebStories() {
    const pool = await getPool();
    const result = await pool.request().query(`
    SELECT TOP 2000 Category, StorySlug, PublishedDate  FROM WebStories WHERE IsPublished = 1 ORDER BY PublishedDate DESC`);
    return result.recordset;
}