import TrendingClient from "./trendingclient";


type SubCategoryItem = {
  nameinHindi: string;
  subCat_Name: string;
  cat_Name: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL!;

export default async function TrendingServer() {
  let subCategories: SubCategoryItem[] = [];

  try {
    const res = await fetch(`${apiUrl}trendingsubcats`, {
      next: { revalidate: 30 },
    });

    if (res.ok) subCategories = await res.json();
  } catch (err) {
    console.error("TrendingServer error:", err);
  }

  return <TrendingClient subCategories={subCategories} />;
}
