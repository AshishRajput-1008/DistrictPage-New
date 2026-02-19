// lib/getAllNewsIdsWithCategory.ts
export async function getAllNewsIdsWithCategory(): Promise<
  { slug: string; category: string; subcategory: string | null }[]
> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${apiBase}all-news`, {
      next: { revalidate: 60 }
    });

    if (!res.ok) return [];

    const data = await res.json();

    return data.map((item: any) => ({
      slug: item.id?.toString() || '',
      category: (item.category?.trim() || "general").toLowerCase(),
      subcategory: item.subcategory?.trim() || null,
    }));

  } catch (err) {
    console.error("Error fetching all-news:", err);
    return [];
  }
}