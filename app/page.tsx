import Image from "next/image";
import Main from "./pages/main/page";
import FirstCountDown from "./pages/FirstCountDown.tsx/page";
import SecondCountDown from "./pages/SecondCountDown/page";
import WeddingSchedule from "./pages/WeddingSchedule/page";
import OurStory from "./pages/OurStory/page";
import OurGallery from "./pages/OurGallery/page";
import OurVenue from "./pages/OurVenue/page";
import Wishing from "./pages/Wishing/page";
import Payment from "./pages/Payment/page";

export default function Home() {
  return (
    
    <div>
      <Main/>
      <FirstCountDown/>
      <OurStory/>
      <WeddingSchedule/>
      <OurVenue/>
      <SecondCountDown/>
      <OurGallery/>
      <Payment/>
      <Wishing/>
    </div>
  );
}
