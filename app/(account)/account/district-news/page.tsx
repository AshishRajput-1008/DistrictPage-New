import RajneetiClient from "@/components/ui/distictRajneetiSection";
import Blueheader from "@/components/districtnewscomponents/RedHeader";
import Webstories from "@/components/districtnewscomponents/Webstories";
import Mainsection from "@/components/districtnewscomponents/Mainsection";
import SpecialNews from "@/components/districtnewscomponents/SpecialNews";
import VideoNews from "@/components/districtnewscomponents/VideoNews";
import MoreNews from "@/components/districtnewscomponents/MoreNews";
import RedHeaderServer from "@/components/districtnewscomponents/RedHeaderServer";
import { getUserSelections } from "@/lib/getUserSelections";
import TopHeroandTrendingServer from "@/components/districtnewscomponents/TopHeroandTrending.server";
import MainSectionServer from "@/components/districtnewscomponents/MainSectionServerDistrict";
import MainSectionServerDistrict from "@/components/districtnewscomponents/MainSectionServerDistrict";
import WebstoriesServer from "@/components/districtnewscomponents/Webstories.server";
import SpecialNewsServer from "@/components/districtnewscomponents/SpecialNews.server";
import VideoNewsServer from "@/components/districtnewscomponents/VideoNews.server";
import MoreNewsServer from "@/components/districtnewscomponents/MoreNews.server";
import RajneetiClients from "@/components/districtnewscomponents/DistictRajneetiSection";
import DistrictFooter from "@/components/districtnewscomponents/DistrictFooter";

export default function DistrictNewsPage() {
  const selections = getUserSelections();
  if (!selections.districts.length && !selections.states.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            कोई जिला या राज्य चयनित नहीं है
          </h2>
          <p className="text-gray-600 mb-6">
            कृपया अपनी पसंद के जिले या राज्य चुनें ताकि हम आपके लिए समाचार दिखा
            सकें।
          </p>
          <a
            href="/account/select-state"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            चयन करने के लिए यहां क्लिक करें
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen">
        <RedHeaderServer />
        <div className="py-[2vw] px-[3vw] sm:px-[4vw] lg:px-[5.9vw] max-w-[1920px] mx-auto">
          <div className="w-full">
            <TopHeroandTrendingServer />
            {/* <Mainsection /> */}
            <MainSectionServerDistrict />
            {/* <Webstories /> */}
            <WebstoriesServer />
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg p-8 mb-8 text-center border-2 border-dashed border-gray-400">
              <img
                src="https://picsum.photos/728/90?random=101"
                alt="Advertisement Banner 4"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <SpecialNews /> */}
            <SpecialNewsServer />
            {/* <VideoNews /> */}
            <VideoNewsServer />
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg p-8 mb-8 text-center border-2 border-dashed border-gray-400">
              <img
                title="random"
                src="https://picsum.photos/998/90?random=401"
              />
            </div>
            {/* <MoreNews /> */}
            <MoreNewsServer />
            {/* <RajneetiClient /> */}

            <RajneetiClients />

            <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg p-8 text-center border-2 border-dashed border-gray-400">
              <img
                title="random"
                src="https://picsum.photos/998/90?random=403"
              />
            </div>

            <DistrictFooter />
          </div>
        </div>
      </div>
    </>
  );
}
