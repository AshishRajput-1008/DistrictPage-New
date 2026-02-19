import Image from "next/image";

interface Category {
  id: number;
  nameHindi: string;
  catName: string;
  categoryimages: string;
}

async function getCategories(): Promise<Category[]> {
  const res = await fetch(
    "https://mapi.sadaivsatya.com/api/adminapi/getCategories",
    {
      // revalidate every 1 hour (ISR)
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-500 mb-6">श्रेणियाँ</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-3"
          >
            <div className="relative w-full h-40">
              <Image
                unoptimized
                src={`https://mapi.sadaivsatya.com/${cat.categoryimages}`}
                alt={cat.nameHindi}
                fill
                className="object-cover rounded-md"
              />
            </div>

            <h2 className="mt-3 text-lg font-500 text-center">
              {cat.nameHindi}
            </h2>

            <p className="text-sm text-gray-500 text-center">
              {cat.catName}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
