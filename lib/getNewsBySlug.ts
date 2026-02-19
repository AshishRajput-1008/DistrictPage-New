export async function getNewsBySlug(slug: string): Promise<any | null> {
  const apiBase = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${apiBase}GetNewsBySlug/${slug}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      console.error(`Failed to fetch news ${slug}: ${res.status}`);
      return null;
    }

    return await res.json();

  } catch (error) {
    console.error(`Error fetching news ${slug}:`, error);
    return null;
  }
}