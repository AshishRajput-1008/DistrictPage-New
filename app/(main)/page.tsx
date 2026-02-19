// import ShoppyBanner from "@/components/ShoppyBanner";

// import VideoNewsSection from "@/components/VideoNewsSection ";
// import Footer from "@/components/Footer";
// import MobileBottomBar from "@/components/MobileBottomBar";
// import ExtraHeaderServer from "@/components/header/Header.server";
// import AdvertisementWithNewsServer from "@/components/adnews/AdvertisementWithNews.server";
// import NewsGridServer from "@/components/TopFourNewsGrid/NewsGrid.server";
// import MainSectionSever from "@/components/MainSection.server";
// import BollywoodReelsServer from "@/components/BollywoodReels.server";
// import CyberCrimeSectionServer from "@/components/CyberCrimeSection.server";
// import AlwaysSpecialServer from "@/components/AlwaysSpecial.server";
// import RajneetiServer from "@/components/Rajneeti.server";
// import IndianServer from "@/components/Indian.server";
// import CryptoServer from "@/components/Crypto.server";
// import NewsSectionServer from "@/components/NewsSection.server";



// export default function Home() {
//   return (
//     <main className="min-h-screen max-w-7xl mx-auto px-2">
//       <div className="mb-[12px]">
//         <div className="border-b mb-[2px] border-dotted border-[#000]"></div>
//       </div>
//       <AdvertisementWithNewsServer />
//       <NewsGridServer />
//       <MainSectionSever />
//       <BollywoodReelsServer />
//       <CyberCrimeSectionServer />
//       <AlwaysSpecialServer />
//       {/* <VideoNewsSection /> */}
//       <RajneetiServer />
//       <ShoppyBanner />
//       <IndianServer />
//       <CryptoServer />
//       <NewsSectionServer />


//       {/* <TopBar />
//       <Header />
//       <div className="mb-[12px]">
//         <div className="border-b mb-[2px] border-dotted border-[#000]"></div>
//       </div>
//       <AdvertisementBanner /> */}
//       {/* <NewsGrid2 articles={articles} /> */}
//       {/* <NewsPage />
//       <MainSection /> */}
//       {/* <WebStoriesSection /> */}
//       {/* <MustReadSection /> */}
//       {/* <NewsPage2 /> */}
//       {/* <VideoNewsSection /> */}
//       {/* <MusicSection /> */}
//       {/* <ShoppyBanner /> */}
//       {/* <SportsNews /> */}
//       {/* <TVSection /> */}
//       {/* <VerticalGridLayout /> */}
//     </main>
//   );
// }


// export const dynamic = "force-static";
// export const revalidate = 300;

// import { Suspense } from 'react';
// import ShoppyBanner from "@/components/ShoppyBanner";
// import AdvertisementWithNewsServer from "@/components/adnews/AdvertisementWithNews.server";
// import NewsGridServer from "@/components/TopFourNewsGrid/NewsGrid.server";
// import MainSectionSever from "@/components/MainSection.server";
// import BollywoodReelsServer from "@/components/BollywoodReels.server";
// import CyberCrimeSectionServer from "@/components/CyberCrimeSection.server";
// import AlwaysSpecialServer from "@/components/AlwaysSpecial.server";
// import RajneetiServer from "@/components/Rajneeti.server";
// import IndianServer from "@/components/Indian.server";
// import CryptoServer from "@/components/Crypto.server";
// import NewsSectionServer from "@/components/NewsSection.server";
// import TrendingServer from '@/components/TrendingNav/trending.server';

// // Create loading components for each section
// function SectionLoader({ height = 'h-40' }: { height?: string }) {
//   return <div className={`${height} w-full bg-gray-100 animate-pulse rounded-lg`}></div>;
// }

// export default function Home() {
//   return (
//     <main className="min-h-screen max-w-[1230px] mx-auto px-2">

//       <div className="mb-[12px]">
//         <div className="border-b mb-[2px] border-dotted"></div>
//       </div>
//       <Suspense fallback={<SectionLoader />}>
//         <TrendingServer />
//       </Suspense>

//       <Suspense fallback={<SectionLoader />}>
//         <AdvertisementWithNewsServer />
//       </Suspense>

//       <Suspense fallback={<SectionLoader />}>
//         <NewsGridServer />
//       </Suspense>

//       {/* Main content with priority */}
//       <Suspense fallback={<SectionLoader height="h-96" />}>
//         <MainSectionSever />
//       </Suspense>

//       {/* Below the fold - Load after initial content */}
//       <div className="space-y-6">
//         <Suspense fallback={<SectionLoader />}>
//           <BollywoodReelsServer />
//         </Suspense>

//         <Suspense fallback={<SectionLoader />}>
//           <CyberCrimeSectionServer />
//         </Suspense>

//         <Suspense fallback={<SectionLoader />}>
//           <AlwaysSpecialServer />
//         </Suspense>

//         {/* Non-Server component */}
//         {/* <VideoNewsSection /> */}

//         <Suspense fallback={<SectionLoader />}>
//           <RajneetiServer />
//         </Suspense>

//         {/* Static component - Load immediately */}
//         <ShoppyBanner />

//         <Suspense fallback={<SectionLoader />}>
//           <IndianServer />
//         </Suspense>

//         <Suspense fallback={<SectionLoader />}>
//           <CryptoServer />
//         </Suspense>

//         <Suspense fallback={<SectionLoader />}>
//           <NewsSectionServer />
//         </Suspense>
//       </div>
//     </main>
//   );
// }



// export const dynamic = "force-static";
// export const revalidate = 300;

// import { Suspense } from 'react';
// import LazyLoadOnView from "@/components/LazyLoadOnView";

// import ShoppyBanner from "@/components/ShoppyBanner";
// import AdvertisementWithNewsServer from "@/components/adnews/AdvertisementWithNews.server";
// import NewsGridServer from "@/components/TopFourNewsGrid/NewsGrid.server";
// import MainSectionSever from "@/components/MainSection.server";
// import BollywoodReelsServer from "@/components/BollywoodReels.server";
// import CyberCrimeSectionServer from "@/components/CyberCrimeSection.server";
// import AlwaysSpecialServer from "@/components/AlwaysSpecial.server";
// import RajneetiServer from "@/components/Rajneeti.server";
// import IndianServer from "@/components/Indian.server";
// import CryptoServer from "@/components/Crypto.server";
// import NewsSectionServer from "@/components/NewsSection.server";
// import TrendingServer from '@/components/TrendingNav/trending.server';

// export default function Home() {
//   return (
//     <main className="min-h-screen max-w-[1100px] mx-auto px-2">

//       <div className="mb-[12px]">
//         <div className="border-b mb-[2px] border-dotted"></div>
//       </div>

//       {/* Top banner immediately load */}
//       {/* <Suspense fallback={<div className="h-40 w-full bg-gray-100 animate-pulse rounded-lg" />}> */}
//       <TrendingServer />
//       {/* </Suspense> */}

//       {/* Lazy loaded sections */}
//       <LazyLoadOnView>
//         <AdvertisementWithNewsServer />
//       </LazyLoadOnView>

//       <LazyLoadOnView>
//         <NewsGridServer />
//       </LazyLoadOnView>

//       <LazyLoadOnView>
//         <MainSectionSever />
//       </LazyLoadOnView>

//       <div className="space-y-6">
//         <LazyLoadOnView>
//           <BollywoodReelsServer />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <CyberCrimeSectionServer />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <AlwaysSpecialServer />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <RajneetiServer />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <ShoppyBanner />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <IndianServer />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <CryptoServer />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <NewsSectionServer />
//         </LazyLoadOnView>
//       </div>
//     </main>
//   );
// }


// export const dynamic = "force-static";
// export const revalidate = 300;

// import LazyLoadOnView from "@/components/LazyLoadOnView";

// import ShoppyBanner from "@/components/ShoppyBanner";
// import AdvertisementWithNewsServer from "@/components/adnews/AdvertisementWithNews.server";
// import NewsGridServer from "@/components/TopFourNewsGrid/NewsGrid.server";
// import MainSectionSever from "@/components/MainSection.server";
// import BollywoodReelsServer from "@/components/BollywoodReels.server";
// import CyberCrimeSectionServer from "@/components/CyberCrimeSection.server";
// import AlwaysSpecialServer from "@/components/AlwaysSpecial.server";
// import RajneetiServer from "@/components/Rajneeti.server";
// import IndianServer from "@/components/Indian.server";
// import CryptoServer from "@/components/Crypto.server";
// import NewsSectionServer from "@/components/NewsSection.server";
// import TrendingServer from '@/components/TrendingNav/trending.server';

// export default function Home() {
//   // Top 3 render immediately
//   const initialSections = [
//     <TrendingServer key="trending" />,
//     <AdvertisementWithNewsServer key="ad" />,
//     <NewsGridServer key="news-grid" />,
//   ];

//   // Lazy-load scroll pe
//   const lazySections: React.ComponentType[] = [
//     MainSectionSever,
//     BollywoodReelsServer,
//     CyberCrimeSectionServer,
//     AlwaysSpecialServer,
//     RajneetiServer,
//     ShoppyBanner,
//     IndianServer,
//     CryptoServer,
//     NewsSectionServer,
//   ];

//   return (
//     <main className="min-h-screen max-w-[1100px] mx-auto px-2 space-y-6">
//       <div className="mb-[12px]">
//         <div className="border-b mb-[2px] border-dotted"></div>
//       </div>

//       {/* Initial 3 sections */}
//       {initialSections.map((section) => section)}

//       {/* Lazy-load remaining sections */}
//       {lazySections.map((Section, idx) => (
//         <LazyLoadOnView key={idx}>
//           <Section />
//         </LazyLoadOnView>
//       ))}
//     </main>
//   );
// }


// export const dynamic = "force-static";
// export const revalidate = 300;

// import LazyLoadOnView from "@/components/LazyLoadOnView";
// import ShoppyBanner from "@/components/ShoppyBanner";
// import AdvertisementWithNewsServer from "@/components/adnews/AdvertisementWithNews.server";
// import NewsGridServer from "@/components/TopFourNewsGrid/NewsGrid.server";
// import MainSectionSever from "@/components/MainSection.server";
// import BollywoodReelsServer from "@/components/BollywoodReels.server";
// import CyberCrimeSectionServer from "@/components/CyberCrimeSection.server";
// import AlwaysSpecialServer from "@/components/AlwaysSpecial.server";
// import RajneetiServer from "@/components/Rajneeti.server";
// import IndianServer from "@/components/Indian.server";
// import CryptoServer from "@/components/Crypto.server";
// import NewsSectionServer from "@/components/NewsSection.server";
// import TrendingServer from '@/components/TrendingNav/trending.server';

// export default function Home() {
//   const initialSections = [
//     <TrendingServer key="trending" />,
//     <AdvertisementWithNewsServer key="ad" />,
//     <CryptoServer key="crypto" />,
//     <MainSectionSever key="mainsection" />
//   ];

//   const lazySections: React.ComponentType[] = [
//     BollywoodReelsServer,
//     CyberCrimeSectionServer,
//     AlwaysSpecialServer,
//     RajneetiServer,
//     ShoppyBanner,
//     IndianServer,
//     NewsGridServer,
//     NewsSectionServer,
//   ];

//   return (
//     <main className="min-h-screen max-w-[1100px] mx-auto px-2 space-y-6">
//       <div className="mb-[12px]">
//         <div className="border-b mb-[2px] border-dotted"></div>
//       </div>

//       {initialSections.map(section => section)}

//       {lazySections.map((Section, idx) => (
//         <LazyLoadOnView
//           key={idx}
//           rootMargin="100px" // thoda pehle load hone ke liye
//           className="overflow-hidden"
//         >
//           <Section />
//         </LazyLoadOnView>
//       ))}
//     </main>
//   );
// }


// import ShoppyBanner from "@/components/ShoppyBanner";

// import VideoNewsSection from "@/components/VideoNewsSection ";
// import Footer from "@/components/Footer";
// import MobileBottomBar from "@/components/MobileBottomBar";
// import ExtraHeaderServer from "@/components/header/Header.server";
// import AdvertisementWithNewsServer from "@/components/adnews/AdvertisementWithNews.server";
// import NewsGridServer from "@/components/TopFourNewsGrid/NewsGrid.server";
// import MainSectionSever from "@/components/MainSection.server";
// import BollywoodReelsServer from "@/components/BollywoodReels.server";
// import CyberCrimeSectionServer from "@/components/CyberCrimeSection.server";
// import AlwaysSpecialServer from "@/components/AlwaysSpecial.server";
// import RajneetiServer from "@/components/Rajneeti.server";
// import IndianServer from "@/components/Indian.server";
// import CryptoServer from "@/components/Crypto.server";
// import NewsSectionServer from "@/components/NewsSection.server";



// export default function Home() {
//   return (
//     <main className="min-h-screen max-w-7xl mx-auto px-2">
//       <div className="mb-[12px]">
//         <div className="border-b mb-[2px] border-dotted border-[#000]"></div>
//       </div>
//       <AdvertisementWithNewsServer />
//       <NewsGridServer />
//       <MainSectionSever />
//       <BollywoodReelsServer />
//       <CyberCrimeSectionServer />
//       <AlwaysSpecialServer />
//       {/* <VideoNewsSection /> */}
//       <RajneetiServer />
//       <ShoppyBanner />
//       <IndianServer />
//       <CryptoServer />
//       <NewsSectionServer />


//       {/* <TopBar />
//       <Header />
//       <div className="mb-[12px]">
//         <div className="border-b mb-[2px] border-dotted border-[#000]"></div>
//       </div>
//       <AdvertisementBanner /> */}
//       {/* <NewsGrid2 articles={articles} /> */}
//       {/* <NewsPage />
//       <MainSection /> */}
//       {/* <WebStoriesSection /> */}
//       {/* <MustReadSection /> */}
//       {/* <NewsPage2 /> */}
//       {/* <VideoNewsSection /> */}
//       {/* <MusicSection /> */}
//       {/* <ShoppyBanner /> */}
//       {/* <SportsNews /> */}
//       {/* <TVSection /> */}
//       {/* <VerticalGridLayout /> */}
//     </main>
//   );
// }


// export const dynamic = "force-static";
// export const revalidate = 300;

// import { Suspense } from 'react';
// import ShoppyBanner from "@/components/ShoppyBanner";
// import AdvertisementWithNewsServer from "@/components/adnews/AdvertisementWithNews.server";
// import NewsGridServer from "@/components/TopFourNewsGrid/NewsGrid.server";
// import MainSectionSever from "@/components/MainSection.server";
// import BollywoodReelsServer from "@/components/BollywoodReels.server";
// import CyberCrimeSectionServer from "@/components/CyberCrimeSection.server";
// import AlwaysSpecialServer from "@/components/AlwaysSpecial.server";
// import RajneetiServer from "@/components/Rajneeti.server";
// import IndianServer from "@/components/Indian.server";
// import CryptoServer from "@/components/Crypto.server";
// import NewsSectionServer from "@/components/NewsSection.server";
// import TrendingServer from '@/components/TrendingNav/trending.server';

// // Create loading components for each section
// function SectionLoader({ height = 'h-40' }: { height?: string }) {
//   return <div className={`${height} w-full bg-gray-100 animate-pulse rounded-lg`}></div>;
// }

// export default function Home() {
//   return (
//     <main className="min-h-screen max-w-[1230px] mx-auto px-2">

//       <div className="mb-[12px]">
//         <div className="border-b mb-[2px] border-dotted"></div>
//       </div>
//       <Suspense fallback={<SectionLoader />}>
//         <TrendingServer />
//       </Suspense>

//       <Suspense fallback={<SectionLoader />}>
//         <AdvertisementWithNewsServer />
//       </Suspense>

//       <Suspense fallback={<SectionLoader />}>
//         <NewsGridServer />
//       </Suspense>

//       {/* Main content with priority */}
//       <Suspense fallback={<SectionLoader height="h-96" />}>
//         <MainSectionSever />
//       </Suspense>

//       {/* Below the fold - Load after initial content */}
//       <div className="space-y-6">
//         <Suspense fallback={<SectionLoader />}>
//           <BollywoodReelsServer />
//         </Suspense>

//         <Suspense fallback={<SectionLoader />}>
//           <CyberCrimeSectionServer />
//         </Suspense>

//         <Suspense fallback={<SectionLoader />}>
//           <AlwaysSpecialServer />
//         </Suspense>

//         {/* Non-Server component */}
//         {/* <VideoNewsSection /> */}

//         <Suspense fallback={<SectionLoader />}>
//           <RajneetiServer />
//         </Suspense>

//         {/* Static component - Load immediately */}
//         <ShoppyBanner />

//         <Suspense fallback={<SectionLoader />}>
//           <IndianServer />
//         </Suspense>

//         <Suspense fallback={<SectionLoader />}>
//           <CryptoServer />
//         </Suspense>

//         <Suspense fallback={<SectionLoader />}>
//           <NewsSectionServer />
//         </Suspense>
//       </div>
//     </main>
//   );
// }



// export const dynamic = "force-static";
// export const revalidate = 300;

// import { Suspense } from 'react';
// import LazyLoadOnView from "@/components/LazyLoadOnView";

// import ShoppyBanner from "@/components/ShoppyBanner";
// import AdvertisementWithNewsServer from "@/components/adnews/AdvertisementWithNews.server";
// import NewsGridServer from "@/components/TopFourNewsGrid/NewsGrid.server";
// import MainSectionSever from "@/components/MainSection.server";
// import BollywoodReelsServer from "@/components/BollywoodReels.server";
// import CyberCrimeSectionServer from "@/components/CyberCrimeSection.server";
// import AlwaysSpecialServer from "@/components/AlwaysSpecial.server";
// import RajneetiServer from "@/components/Rajneeti.server";
// import IndianServer from "@/components/Indian.server";
// import CryptoServer from "@/components/Crypto.server";
// import NewsSectionServer from "@/components/NewsSection.server";
// import TrendingServer from '@/components/TrendingNav/trending.server';

// export default function Home() {
//   return (
//     <main className="min-h-screen max-w-[1100px] mx-auto px-2">

//       <div className="mb-[12px]">
//         <div className="border-b mb-[2px] border-dotted"></div>
//       </div>

//       {/* Top banner immediately load */}
//       {/* <Suspense fallback={<div className="h-40 w-full bg-gray-100 animate-pulse rounded-lg" />}> */}
//       <TrendingServer />
//       {/* </Suspense> */}

//       {/* Lazy loaded sections */}
//       <LazyLoadOnView>
//         <AdvertisementWithNewsServer />
//       </LazyLoadOnView>

//       <LazyLoadOnView>
//         <NewsGridServer />
//       </LazyLoadOnView>

//       <LazyLoadOnView>
//         <MainSectionSever />
//       </LazyLoadOnView>

//       <div className="space-y-6">
//         <LazyLoadOnView>
//           <BollywoodReelsServer />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <CyberCrimeSectionServer />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <AlwaysSpecialServer />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <RajneetiServer />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <ShoppyBanner />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <IndianServer />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <CryptoServer />
//         </LazyLoadOnView>

//         <LazyLoadOnView>
//           <NewsSectionServer />
//         </LazyLoadOnView>
//       </div>
//     </main>
//   );
// }


// export const dynamic = "force-static";
// export const revalidate = 300;

// import LazyLoadOnView from "@/components/LazyLoadOnView";

// import ShoppyBanner from "@/components/ShoppyBanner";
// import AdvertisementWithNewsServer from "@/components/adnews/AdvertisementWithNews.server";
// import NewsGridServer from "@/components/TopFourNewsGrid/NewsGrid.server";
// import MainSectionSever from "@/components/MainSection.server";
// import BollywoodReelsServer from "@/components/BollywoodReels.server";
// import CyberCrimeSectionServer from "@/components/CyberCrimeSection.server";
// import AlwaysSpecialServer from "@/components/AlwaysSpecial.server";
// import RajneetiServer from "@/components/Rajneeti.server";
// import IndianServer from "@/components/Indian.server";
// import CryptoServer from "@/components/Crypto.server";
// import NewsSectionServer from "@/components/NewsSection.server";
// import TrendingServer from '@/components/TrendingNav/trending.server';

// export default function Home() {
//   // Top 3 render immediately
//   const initialSections = [
//     <TrendingServer key="trending" />,
//     <AdvertisementWithNewsServer key="ad" />,
//     <NewsGridServer key="news-grid" />,
//   ];

//   // Lazy-load scroll pe
//   const lazySections: React.ComponentType[] = [
//     MainSectionSever,
//     BollywoodReelsServer,
//     CyberCrimeSectionServer,
//     AlwaysSpecialServer,
//     RajneetiServer,
//     ShoppyBanner,
//     IndianServer,
//     CryptoServer,
//     NewsSectionServer,
//   ];

//   return (
//     <main className="min-h-screen max-w-[1100px] mx-auto px-2 space-y-6">
//       <div className="mb-[12px]">
//         <div className="border-b mb-[2px] border-dotted"></div>
//       </div>

//       {/* Initial 3 sections */}
//       {initialSections.map((section) => section)}

//       {/* Lazy-load remaining sections */}
//       {lazySections.map((Section, idx) => (
//         <LazyLoadOnView key={idx}>
//           <Section />
//         </LazyLoadOnView>
//       ))}
//     </main>
//   );
// }


export const dynamic = "force-static";
export const revalidate = 300;

import LazyLoadOnView from "@/components/LazyLoadOnView";
import ShoppyBanner from "@/components/ShoppyBanner";
import AdvertisementWithNewsServer from "@/components/adnews/AdvertisementWithNews.server";
import NewsGridServer from "@/components/TopFourNewsGrid/NewsGrid.server";
import MainSectionSever from "@/components/MainSection.server";
import BollywoodReelsServer from "@/components/BollywoodReels.server";
import CyberCrimeSectionServer from "@/components/CyberCrimeSection.server";
import AlwaysSpecialServer from "@/components/AlwaysSpecial.server";
import RajneetiServer from "@/components/Rajneeti.server";
import IndianServer from "@/components/Indian.server";
import CryptoServer from "@/components/Crypto.server";
import NewsSectionServer from "@/components/NewsSection.server";
import TrendingServer from '@/components/TrendingNav/trending.server';
import SadaivYuvaADV from "@/components/ui/CybersecurityAd"

export default function Home() {
  const initialSections = [
    <TrendingServer key="trending" />,
    <AdvertisementWithNewsServer key="ad" />,
    <CryptoServer key="crypto" />,
    <SadaivYuvaADV key="sadaiv" />,
    <MainSectionSever key="mainsection" />
  ];

  const lazySections: React.ComponentType[] = [
    BollywoodReelsServer,
    CyberCrimeSectionServer,
    AlwaysSpecialServer,
    RajneetiServer,
    ShoppyBanner,
    IndianServer,
    NewsGridServer,
    NewsSectionServer,

  ];

  return (
    <main className="min-h-screen max-w-[1100px] mx-auto px-3 space-y-6">
      <div className="">
        <div className="border-b mb-[2px] border-dotted"></div>
      </div>

      {initialSections.map(section => section)}

      {lazySections.map((Section, idx) => (
        <LazyLoadOnView
          key={idx}
          rootMargin="100px" // thoda pehle load hone ke liye
          className="overflow-hidden"
        >
          <Section />
        </LazyLoadOnView>
      ))}
    </main>
  );
}



// export const dynamic = "force-static";
// export const revalidate = 1800; // 30 min cache

// import LazyLoadOnView from "@/components/LazyLoadOnView";

// import ShoppyBanner from "@/components/ShoppyBanner";
// import AdvertisementWithNewsServer from "@/components/adnews/AdvertisementWithNews.server";
// import NewsGridServer from "@/components/TopFourNewsGrid/NewsGrid.server";
// import MainSectionSever from "@/components/MainSection.server";
// import BollywoodReelsServer from "@/components/BollywoodReels.server";
// import CyberCrimeSectionServer from "@/components/CyberCrimeSection.server";
// import AlwaysSpecialServer from "@/components/AlwaysSpecial.server";
// import RajneetiServer from "@/components/Rajneeti.server";
// import IndianServer from "@/components/Indian.server";
// import CryptoServer from "@/components/Crypto.server";
// import NewsSectionServer from "@/components/NewsSection.server";
// import TrendingServer from '@/components/TrendingNav/trending.server';

// export default function Home() {
//   const sections = [
//     <TrendingServer key="trending" />,
//     <LazyLoadOnView key="ad">
//       <AdvertisementWithNewsServer />
//       </LazyLoadOnView>,
//     <LazyLoadOnView key="news-grid">
//       <NewsGridServer />
//       </LazyLoadOnView>,
//     <LazyLoadOnView key="main">
//       <MainSectionSever />
//       </LazyLoadOnView>,
//     <LazyLoadOnView key="bollywood">
//       <BollywoodReelsServer />
//       </LazyLoadOnView>,
//     <LazyLoadOnView key="cyber">
//       <CyberCrimeSectionServer /></LazyLoadOnView>,
//     <LazyLoadOnView key="special">
//       <AlwaysSpecialServer />
//       </LazyLoadOnView>,
//     <LazyLoadOnView key="rajneeti">
//       <RajneetiServer />
//       </LazyLoadOnView>,
//     <LazyLoadOnView key="shoppy">
//       <ShoppyBanner />
//       </LazyLoadOnView>,
//     <LazyLoadOnView key="indian">
//       <IndianServer />
//       </LazyLoadOnView>,
//     <LazyLoadOnView key="crypto">
//       <CryptoServer />
//       </LazyLoadOnView>,
//     <LazyLoadOnView key="news-section">
//       <NewsSectionServer />
//       </LazyLoadOnView>,
//   ];

//   return (
//     <main className="min-h-screen max-w-[1100px] mx-auto px-2 space-y-6">
//       <div className="mb-[12px]">
//         <div className="border-b mb-[2px] border-dotted"></div>
//       </div>
//       {sections.map((section) => section)}
//     </main>
//   );
// }
