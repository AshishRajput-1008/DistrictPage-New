// "use client";

// import { NewsArticle } from "@/types/index";
// import SportsColumn from "./sections/SportsColumn";
// import TaazaColumn from "./sections/TaazaColumn";
// import BusinessColumn from "./sections/BusinessColumn";
// import EntertainmentColumn from "./sections/EntertainmentColumn";
// import { Suspense } from "react";

// interface Props {
//     business: NewsArticle[];
//     taaza: NewsArticle[];
//     sports: NewsArticle[];
//     entertainment: NewsArticle[];
// }

// export default function MainSectionClient({
//     business,
//     taaza,
//     sports,
//     entertainment,
// }: Props) {
//     return (
//         <div className="bg-white">
//             <div className="max-w-[1350px] mx-auto px-4">
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

//                     {/* Left */}
//                     <div className="hidden lg:block lg:col-span-3">
//                         <Suspense fallback={<div>Loading...</div>}>
//                             <SportsColumn data={sports} />
//                         </Suspense>

//                     </div>

//                     {/* Middle */}
//                     <div className="lg:col-span-6">
//                         <TaazaColumn data={taaza} />
//                     </div>

//                     {/* Right */}
//                     <div className="hidden lg:block lg:col-span-3">
//                         <BusinessColumn data={business} />
//                         <EntertainmentColumn data={entertainment} />
//                     </div>

//                     {/* Mobile Stacked */}
//                     <div className="lg:hidden space-y-8">
//                         <SportsColumn data={sports} />
//                         <BusinessColumn data={business} />
//                         <EntertainmentColumn data={entertainment} />
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }


"use client";

import { NewsArticle } from "@/types";
import SportsColumn from "./sections/SportsColumn";
import TaazaColumn from "./sections/TaazaColumn";
import BusinessColumn from "./sections/BusinessColumn";
import EntertainmentColumn from "./sections/EntertainmentColumn";
import { Suspense } from "react";

interface Props {
  business: NewsArticle[];
  taaza: NewsArticle[];
  sports: NewsArticle[];
  entertainment: NewsArticle[];
}

export default function MainSectionClient({
  business,
  taaza,
  sports,
  entertainment,
}: Props) {
  return (
    <div className="bg-white">
      <div className="max-w-[1350px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          <div className="hidden lg:block lg:col-span-3">
            <Suspense fallback={<div>Loading Sports...</div>}>
              <SportsColumn data={sports} />
            </Suspense>
          </div>

          <div className="lg:col-span-6">
            <TaazaColumn data={taaza} />
          </div>

          <div className="hidden lg:block lg:col-span-3">
            <BusinessColumn data={business} />
            <EntertainmentColumn data={entertainment} />
          </div>

          <div className="lg:hidden space-y-8">
            <SportsColumn data={sports} />
            <BusinessColumn data={business} />
            <EntertainmentColumn data={entertainment} />
          </div>
        </div>
      </div>
    </div>
  );
}
