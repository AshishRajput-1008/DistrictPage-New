// app/api/reels/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getVideosDirect } from '@/lib/db';

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const cursor = searchParams.get('cursor');
        const limit = parseInt(searchParams.get('limit') || '5');

        let lastId: number | null = null;
        let lastDate: Date | null = null;

        if (cursor) {
            try {
                const [dateStr, idStr] = cursor.split('_');
                lastDate = new Date(dateStr);
                lastId = parseInt(idStr, 10);

                if (isNaN(lastDate.getTime()) || isNaN(lastId)) {
                    lastDate = null;
                    lastId = null;
                }
            } catch (e) {
                console.error('Invalid cursor:', e);
            }
        }


        const { videos, nextCursor } = await getVideosDirect({
            lastVideoId: lastId,
            lastUpdatedDate: lastDate,
            limit,
            mode: 'REEL'
        });


        const transformedVideos = videos.map(v => ({
            id: v.Id,
            category: v.NewsCategoryName,
            subcategory: v.NewsSubsCategory,
            slug: v.Slug,
            title: v.NewsHeading,
            description: v.NewsHeading,
            videoUrl: v.Media,
            thumbnail: v.ThumbNail,
            viewCount: v.ViewCount,
            publishedAt: v.UpdatedDate instanceof Date
                ? v.UpdatedDate.toISOString()
                : new Date(v.UpdatedDate).toISOString(),
        }));

        return NextResponse.json({
            videos: transformedVideos,
            nextCursor,
            hasMore: videos.length === limit  // 5 videos aayi toh aur hain
        });
    } catch (error) {
        return NextResponse.json(
            {
                videos: [],
                nextCursor: null,
                hasMore: false,
                error: 'Failed to load reels'
            },
            { status: 200 }
        );
    }
}