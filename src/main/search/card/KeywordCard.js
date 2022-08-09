import google from "./image/google.png";
import youtube from "./image/youtube.png";
import amazon from "./image/amazon.png";
import yahoo from "./image/yahoo.png";
import bing from "./image/bing.png";
import ebay from "./image/ebay.png";

import GoogleApi from "./google/GoogleApi";
import BingApi from "./bing/BingApi";
import YoutubeApi from "./youtube/YoutubeApi";
import YahooApi from "./yahoo/YahooApi";
import AmazonApi from "./amazon/AmazonApi";
import EbayApi from "./ebay/EbayApi";

export default function KeywordCard(props) {
  const { response } = props;

  if (!response) {
    return false;
  } else {
    return (
      <div className="flex flex-wrap py-4">
        <div className="w-1/2 p-2">
          <div className="bg-white py-4 sm:py-6 px-2 sm:px-6 rounded-2xl">
            <div className="font-medium h-4 sm:h-6 flex justify-center mb-1 sm:mb-2">
              <img className="h-full" src={google} alt="google" />
            </div>
            <GoogleApi word={response} />
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="bg-white py-4 sm:py-6 px-2 sm:px-6 rounded-2xl">
            <div className="font-medium h-4 sm:h-6 flex justify-center mb-1 sm:mb-2">
              <img className="h-full" src={youtube} alt="youtube" />
            </div>
            <YoutubeApi word={response} />
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="bg-white py-4 sm:py-6 px-2 sm:px-6 rounded-2xl">
            <div className="font-medium h-4 sm:h-6 flex justify-center mb-1 sm:mb-2">
              <img className="h-full" src={bing} alt="bing" />
            </div>
            <BingApi word={response} />
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="bg-white py-4 sm:py-6 px-2 sm:px-6 rounded-2xl">
            <div className="font-medium h-4 sm:h-6 flex justify-center mb-1 sm:mb-2">
              <img className="h-full" src={yahoo} alt="yahoo" />
            </div>
            <YahooApi word={response} />
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="bg-white py-4 sm:py-6 px-2 sm:px-6 rounded-2xl">
            <div className="font-medium h-4 sm:h-6 flex justify-center mb-1 sm:mb-2">
              <img className="h-full" src={amazon} alt="amazon" />
            </div>
            <AmazonApi word={response} />
          </div>
        </div>
        <div className="w-1/2 p-2">
          <div className="bg-white py-4 sm:py-6 px-2 sm:px-6 rounded-2xl">
            <div className="font-medium h-4 sm:h-6 flex justify-center mb-1 sm:mb-2">
              <img className="h-full" src={ebay} alt="ebay" />
            </div>
            {/* <EbayApi word={response} /> */}
          </div>
        </div>
      </div>
    );
  }
}
