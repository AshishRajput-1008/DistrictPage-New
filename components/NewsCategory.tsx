// import SmartLink from "@/components/SmartLink";
// import { toSlug } from "@/lib/news-api";
// import { ChevronRight, Play } from "lucide-react";

// interface Article {
//   title: string;
//   maintag: string;
//   slug: string;
//   category: string;
//   subCategory: string;
// }

// interface NewsCategoryProps {
//   title: string;
//   image: string;
//   mainHeadline: string;
//   maintag: string;
//   category: string;
//   subCategory: string;
//   slug: string;
//   articles: Article[];
// }

// const NewsCategory = ({
//   title,
//   image,
//   mainHeadline,
//   maintag,
//   category,
//   subCategory,
//   slug,
//   articles,
// }: NewsCategoryProps) => {
//   const categorySlug = toSlug(category || "general");
//   const subCategorySlug = toSlug(subCategory || "");

//   const mainURL = subCategorySlug
//     ? `/${categorySlug}/${subCategorySlug}/news/${slug}`
//     : `/${categorySlug}/news/${slug}`;

//   const categoryURL = subCategorySlug
//     ? `/${categorySlug}/${subCategorySlug}`
//     : `/${categorySlug}`;
//   const isGifFile = (url?: string | null) => (url ? /\.gif$/i.test(url) : false);
//   return (
//     <div className="flex flex-col">
//       <div className="mb-4">
//         <h2 className="text-2xl md:text-xl font-500 text-gray-900 pb-2 border-b-2 border-gray-300">
//           {title}
//         </h2>
//       </div>

//       <div className="flex flex-col space-y-4">
//         {/* MAIN */}
//         <SmartLink href={mainURL} className="group border-b">
//           <div className=" relative overflow-hidden mb-3">
//             <img
//               src={image}
//               alt={mainHeadline}
//               className="w-full h-[200px] object-cover"
//             />
//             {isGifFile(image) && (
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="rounded-full bg-black/70 w-10 h-10 flex items-center justify-center">
//                   <Play className="w-4 h-4 text-white fill-white" />
//                 </div>
//               </div>
//             )}
//           </div>
//           <h3 className="font-500 text-[18px] text-gray-900 leading-snug">
//             {maintag}: {mainHeadline}
//           </h3>
//         </SmartLink>

//         {/* LIST */}
//         {/* {articles.map((article, index) => {
//           const aCat = toSlug(article.category || categorySlug);
//           const aSub = toSlug(article.subCategory || "");

//           const articleURL = aSub
//             ? `/${aCat}/${aSub}/news/${article.slug}`
//             : `/${aCat}/news/${article.slug}`;

//           return (
//             <SmartLink key={index} href={articleURL} className="border-b block">
//               <p className="text-[18px] text-gray-800 leading-snug">
//                 {article.maintag}: {article.title}
//               </p>
//             </SmartLink>
//           );
//         })} */}

//         {articles.map((article, index) => {
//           const aCat = toSlug(article.category || categorySlug);
//           const aSub = toSlug(article.subCategory || "");

//           const articleURL = aSub
//             ? `/${aCat}/${aSub}/news/${article.slug}`
//             : `/${aCat}/news/${article.slug}`;

//           return (
//             <SmartLink
//               key={index}
//               href={articleURL}
//               className="group block border-b border-gray-200 py-2.5 px-1 transition-all"
//             >
//               <p className="text-[18px] leading-[1.6] text-gray-800">
//                 <span className="font-500 mr-1">
//                   {article.maintag}:
//                 </span>
//                 {article.title}
//               </p>
//             </SmartLink>
//           );
//         })}

//         {/* READ MORE */}
//         <div className="pt-4 flex justify-center">
//           <SmartLink
//             href={categoryURL}
//             className="flex items-center gap-1 text-red-600 font-500"
//           >
//             <span>और पढ़ें</span>
//             <ChevronRight className="w-4 h-4" />
//           </SmartLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsCategory;


import SmartLink from "@/components/SmartLink";
import { toSlug } from "@/lib/news-api";
import { ChevronRight, Play } from "lucide-react";
import ClientOnlyGifImage from "./ClientOnlyGifImage";

interface Article {
  title: string;
  maintag: string;
  slug: string;
  category: string;
  subCategory: string | null;
  dataType: string;
}

interface NewsCategoryProps {
  title: string;
  image: string;
  mainHeadline: string;
  maintag: string;
  category: string;
  subCategory: string | null;
  slug: string;
  articles: Article[];
}

const NewsCategory = ({
  title,
  image,
  mainHeadline,
  maintag,
  category,
  subCategory,
  slug,
  articles,
}: NewsCategoryProps) => {
  const categorySlug = toSlug(category || "general");
  const subCategorySlug = toSlug(subCategory || "");

  const mainURL = subCategorySlug
    ? `/${categorySlug}/${subCategorySlug}/news/${slug}`
    : `/${categorySlug}/news/${slug}`;

  const categoryURL = subCategorySlug
    ? `/${categorySlug}/${subCategorySlug}`
    : `/${categorySlug}`;

  const isGifFile = (url?: string | null) => !!url && /\.gif$/i.test(url);

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl md:text-xl font-500 text-gray-900 pb-2 border-b-2 border-gray-300 mb-4">
        {title}
      </h2>

      <div className="flex flex-col space-y-4">
        {/* Main Article */}
        <SmartLink
          href={mainURL}
          className="group border-b block"
        >
          <div className="relative overflow-hidden mb-3 h-[200px]">
            <ClientOnlyGifImage
              article={{ thumbnail: image, newsHeading: mainHeadline }}
              dataType={articles[0].dataType}
              apiBaseUrl=""
            />
          </div>

          <h3 className="font-medium text-[18px] text-gray-900 leading-snug">
            {maintag}: {mainHeadline}
          </h3>
        </SmartLink>


        {/* Other Articles */}
        {articles.map((article, idx) => {
          const aCat = toSlug(article.category || categorySlug);
          const aSub = toSlug(article.subCategory || "");
          const articleURL = aSub
            ? `/${aCat}/${aSub}/news/${article.slug}`
            : `/${aCat}/news/${article.slug}`;

          return (
            <SmartLink
              key={idx}
              href={articleURL}
              className="group block border-b border-gray-200 py-2.5 px-1 transition-all"
            >
              <p className="text-[18px] leading-[1.6] text-gray-800">
                <span className="font-500 mr-1">{article.maintag}:</span>
                {article.title}
              </p>
            </SmartLink>

          );
        })}

        {/* Read More */}
        <div className="pt-4 flex justify-center">
          <SmartLink
            href={categoryURL}
            className="flex items-center gap-1 text-red-600 font-500"
          >
            <span>और पढ़ें</span>
            <ChevronRight className="w-4 h-4" />
          </SmartLink>
        </div>
      </div>
    </div>
  );
};

export default NewsCategory;
