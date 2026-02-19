// components/SubCatPillWrapper.tsx (NO "use client")
import CategoryClient from "@/app/(main)/[category]/CategoryClient";
import SubCatPillServer from "@/components/header/SubCategoryPills/subcatpill.server";

export default function CategoryWithSubcats(props: any) {
  return (
    <>
      <CategoryClient {...props} />
      <div className="fixed bottom-[60px] md:bottom-0 left-0 right-0 z-50 bg-white shadow-lg">
        <SubCatPillServer category={props.category} />
      </div>
    </>
  );
}
