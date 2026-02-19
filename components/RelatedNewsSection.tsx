// components/RelatedNewsSection.tsx
import RelatedNewsSectionServer from "./RelatedNewsSectionServer";

export default function RelatedNewsSection({
    category,
    subcategory,
    slug,
}: {
    category: string;
    subcategory?: string;
    slug: string;
}) {
    // subcategory का इस्तेमाल अभी नहीं कर रहे related में, लेकिन रख सकते हैं अगर बाद में चाहिए
    return <RelatedNewsSectionServer category={category} slug={slug} />;
}