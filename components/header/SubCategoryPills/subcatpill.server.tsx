import SubCatClient from "./subcatpillclient";

type SubCategoryItem = {
  nameinHindi: string;
  subCat_Name: string;
  cat_Name: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL!;

export default async function SubCatPillServer({ category }: { category: string }) {
  let subCategories: SubCategoryItem[] = [];

  try {
    const res = await fetch(
      `${apiUrl}subcatsbycategory/${category}`,
      { next: { revalidate: 30 } }
    );

    if (res.ok) subCategories = await res.json();
  } catch (err) {
    console.error("SubCatServer error:", err);
  }

  return <SubCatClient subCategories={subCategories} />;
}
