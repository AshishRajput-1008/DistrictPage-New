"use client";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { CategoriesNav } from "./CategoriesNav";

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

type Props = {
  initialCategories: CategoryItem[];
  initialSubCategories: SubCategoryItem[];
};

const getFormattedDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const hindiMonths: { [key: string]: string } = {
    January: "जनवरी", February: "फरवरी", March: "मार्च", April: "अप्रैल", May: "मई",
    June: "जून", July: "जुलाई", August: "अगस्त", September: "सितंबर",
    October: "अक्टूबर", November: "नवंबर", December: "दिसंबर",
  };

  const hindiDays: { [key: string]: string } = {
    Monday: "सोमवार", Tuesday: "मंगलवार", Wednesday: "बुधवार", Thursday: "गुरुवार",
    Friday: "शुक्रवार", Saturday: "शनिवार", Sunday: "रविवार",
  };

  const englishDate = date.toLocaleDateString("en-US", options);
  let hindiDate = englishDate;

  Object.keys(hindiMonths).forEach((engMonth) => {
    hindiDate = hindiDate.replace(engMonth, hindiMonths[engMonth]);
  });

  Object.keys(hindiDays).forEach((engDay) => {
    hindiDate = hindiDate.replace(engDay, hindiDays[engDay]);
  });

  return hindiDate;
};

export default function ExtraHeader({ initialCategories, initialSubCategories }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const [categoryItems] = useState(initialCategories);
  const [subCategories] = useState(initialSubCategories);

  useEffect(() => {
    setFormattedDate(getFormattedDate());
  }, []);

  const handleSearchClick = () => {
    console.log("Search clicked");
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:block w-full bg-white dark:bg-[#1c1c1c] border-b">
        <Header 
          formattedDate={formattedDate}
          onSearchClick={handleSearchClick}
          onMenuClick={handleMenuClick}
        />
        <CategoriesNav categories={categoryItems} />
        {/* <TrendingNav subCategories={subCategories} /> */}
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden w-full bg-white dark:bg-[#1c1c1c]">
        <Header 
          formattedDate={formattedDate} 
          onSearchClick={handleSearchClick}
          onMenuClick={handleMenuClick}
        />
        <CategoriesNav categories={categoryItems} />
        {/* <TrendingNav subCategories={subCategories} /> */}
      </header>

      <style jsx global>{`
        nav::-webkit-scrollbar, div::-webkit-scrollbar { display: none; }
        nav, div { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .fade-left {
          mask-image: linear-gradient(to right, transparent, black 30px, black calc(100% - 30px), transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 30px, black calc(100% - 30px), transparent);
        }
        .scroll-container {
          mask-image: linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent);
        }
      `}</style>
    </>
  );
}