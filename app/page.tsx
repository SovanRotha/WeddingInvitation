import Image from "next/image";
import Main from "./pages/main/page";
import FirstCountDown from "./components/FirstCountDown/FirstCountDown";
import SecondCountDown from "./components/SecondCountDown/SecondCountDown";
import WeddingSchedule from "./components/WeddingSchedule/WeddingSchedule";
import OurStory from "./components/OurStory/OurStory";
import OurGallery from "./components/OurGallery/OurGallery";
import OurVenue from "./components/OurVenue/OurVenue";
import Wishing from "./components/Wishing/Wishing";
import Payment from "./components/Payment/Payment";

export default function Home() {
  return (
    
    <div>
      <Main/>
      {/* <FirstCountDown/>
      <OurStory/>
      <WeddingSchedule/>
      <OurVenue/>
      <SecondCountDown/>
      <OurGallery/>
      <Payment/>
      <Wishing/> */}
    </div>
  );
}
