// import ExtraHeader from "./Header.client";

// type CategoryItem = {
//   id: number;
//   nameHindi: string;
//   catName: string;
//   categoryimages: string;
// };

// type SubCategoryItem = {
//   nameinHindi: string;
//   subCat_Name: string;
// };

// const apiUrl = process.env.NEXT_PUBLIC_API_URL!;

// export default async function ExtraHeaderServer() {
//   let categories: CategoryItem[] = [];
//   let subCategories: SubCategoryItem[] = [];

//   try {
//     const catRes = await fetch(
//       `${apiUrl}getCategories`,
//       { next: { revalidate: 60 } }
//     );

//     if (catRes.ok) {
//       categories = await catRes.json();
//     }
//     const subCatRes = await fetch(
//       `${apiUrl}trendingsubcats`,
//       { next: { revalidate: 60 } }
//     );

//     if (subCatRes.ok) {
//       subCategories = await subCatRes.json();
//     }

//   } catch (e) {
//     console.error("Header server fetch failed:", e);
//   }

//   return (
//     <ExtraHeader
//       initialCategories={categories}
//       initialSubCategories={subCategories}
//     />
//   );
// }



import ExtraHeader from "./ExtraHeader";

type CategoryItem = {
  id: number;
  nameHindi: string;
  catName: string;
  categoryimages: string;
};

type SubCategoryItem = {
  nameinHindi: string;
  subCat_Name: string;
  cat_Name: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL!;

export default async function ExtraHeaderServer() {
  let categories: CategoryItem[] = [];
  let subCategories: SubCategoryItem[] = [];

  try {
    const catRes = await fetch(`${apiUrl}getCategories`, { next: { revalidate: 60 } });
    if (catRes.ok) categories = await catRes.json();

    const subCatRes = await fetch(`${apiUrl}trendingsubcats`, { next: { revalidate: 60 } });
    if (subCatRes.ok) subCategories = await subCatRes.json();
  } catch (e) {
    console.error("Header server fetch failed:", e);
  }

  return (
    <ExtraHeader
      initialCategories={categories}
      initialSubCategories={subCategories}
    />
  );
}