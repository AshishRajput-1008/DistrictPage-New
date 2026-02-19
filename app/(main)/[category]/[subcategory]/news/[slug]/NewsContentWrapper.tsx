// app/[category]/[subcategory]/news/[slug]/NewsContentWrapper.tsx

import { cache } from 'react';
import NewsContent from './NewsContent';           // अब client वाला
import RelatedNewsSection from '@/components/RelatedNewsSection';
import { getNewsBySlug } from "@/lib/getNewsBySlug";

const getCachedNewsBySlug = cache(async (slug: string) => {
    return await getNewsBySlug(slug);
});

interface Props {
    category: string;
    subcategory?: string;
    slug: string;
}

export default async function NewsContentWrapper({ category, subcategory, slug }: Props) {
    const finalSlug = slug.endsWith(".html") ? slug : slug + ".html";
    const news = await getCachedNewsBySlug(finalSlug);

    if (!news) {
        return <div className="p-6 text-center">News Not Found</div>;
    }

    return (
        <NewsContent
            category={category}
            subcategory={subcategory}
            slug={slug}
            news={news}
            finalSlug={finalSlug}
        >
            <RelatedNewsSection
                category={category}
                subcategory={subcategory}
                slug={finalSlug}
            />
        </NewsContent>
    );
}