import DesktopAds from "./ads/DesktopAds";
import MobileAds from "./ads/MobileAds";
import SearchContainer from "./search/SearchContainer";

export default function Main() {
  return (
    <div className="py-4 sm:px-4">
      <div className="flex justify-center">
        <div className="font-medium text-teal-900 py-2 sm:pt-2 sm:pb-5 text-xl sm:text-2xl">
          INSTANT SEARCH KEYWORDS
        </div>
      </div>
      <MobileAds />

      <div className="flex">
        <DesktopAds />
        <SearchContainer />
        <DesktopAds />
      </div>
    </div>
  );
}
