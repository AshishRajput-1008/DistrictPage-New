import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

export async function GET() {
    try {
        // Multiple proxies try karo
        const proxies = [
            'https://api.allorigins.win/raw?url=',
            'https://corsproxy.io/?',
            'https://proxy.cors.sh/',
        ];

        let xml = '';
        let success = false;

        // Har proxy try karo
        for (const proxy of proxies) {
            try {
                const res = await fetch(proxy + encodeURIComponent('https://ddnews.gov.in/rss-feeds/'), {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
                    }
                });
                
                if (res.ok) {
                    xml = await res.text();
                    success = true;
                    break;
                }
            } catch (e) {
                console.log(`Proxy ${proxy} failed, trying next...`);
            }
        }

        if (!success) {
            return NextResponse.json({ items: [] }, { status: 500 });
        }

        const parser = new XMLParser();
        const json = parser.parse(xml);
        
        if (!json?.rss?.channel?.item) {
            return NextResponse.json({ items: [] });
        }

        const items = json.rss.channel.item.map((i: any) => ({
            title: i.title,
            link: i.link,
            pubDate: i.pubDate,
            source: i.source?.["#text"] || "DD News"
        }));

        return NextResponse.json({ items });
        
    } catch (error) {
        return NextResponse.json({ items: [] }, { status: 500 });
    }
}