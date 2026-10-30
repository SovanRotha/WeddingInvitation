"use client"

import BackGround from "../../Image/Background.jpg";
import Image from "next/image";
import CoupleFrameNoBg from "../../Image/CoupleFrameNoBg.png";
import FlowerLeftSideNoBg from "../../Image/flowerLeftSideNoBg.png";
import FlowerRightSideNoBg from "../../Image/flowerRightSideNoBg.png";
import AngkorWatNoBg from "../../Image/AngkorWatNoBg.png";
import { useRouter } from "next/navigation";

function Main() {
  const router = useRouter();

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center flex flex-col items-center justify-between py-12 px-4"
      style={{
        backgroundImage: `url(${BackGround.src})`,
      }}
    >
      {/* Top Left Flower Decoration */}
      <Image
        src={FlowerLeftSideNoBg}
        alt="Flower top left"
        className="absolute left-0 top-0 w-36 md:w-56 h-auto pointer-events-none z-0 opacity-90"
      />

      {/* Top Right Flower Decoration */}
      <Image
        src={FlowerRightSideNoBg}
        alt="Flower top right"
        className="absolute right-0 top-0 w-36 md:w-56 h-auto pointer-events-none z-0 opacity-90"
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto w-full max-w-md">
        {/* Wedding Title Subheading */}
        <h3 className="text-xs md:text-sm tracking-[0.25em] font-medium text-stone-700 uppercase mb-4">
          The Wedding Of
        </h3>

        {/* Couple Frame Photo */}
        <div className="w-64 h-80 md:w-72 md:h-96 relative flex items-center justify-center mb-6">
          <Image
            src={CoupleFrameNoBg}
            alt="Wedding Couple"
            fill
            priority
            className="object-contain drop-shadow-md"
          />
        </div>

        {/* Couple Names */}
        <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-2">
          SovanRotha & Arya
        </h1>

        {/* Wedding Date */}
        <p className="text-sm md:text-base tracking-[0.2em] text-stone-600 mb-8">
          18 JANUARY 2027
        </p>

        {/* Open Invitation Button */}
        <button
          onClick={() => router.push("/pages/home")}
          className="px-8 py-3 bg-[#3b4c43] text-white text-sm tracking-widest uppercase rounded-full shadow-md hover:bg-[#2e3c34] transition-all duration-300"
        >
          Open Invitation
        </button>
      </div>

      {/* Bottom Footer: Flowers Sandwiched with Angkor Wat in the Center */}
      <div className="relative w-full max-w-3xl mt-auto pointer-events-none flex items-end justify-between z-10">
        {/* Bottom Left Flower */}
        <div className="w-28 sm:w-40 md:w-48 shrink-0 -mb-2 z-20">
          <Image
            src={FlowerLeftSideNoBg}
            alt="Flower bottom left"
            width={180}
            height={180}
            className="w-full h-auto object-contain opacity-90"
          />
        </div>

        {/* Center Angkor Wat (with negative margin so flowers overlap slightly for a unified look) */}
        <div className="grow mx-[-30px] sm:mx-[-40px] z-10">
          <Image
            src={AngkorWatNoBg}
            alt="Angkor Wat Silhouette"
            width={800}
            height={200}
            className="w-full h-auto object-contain opacity-85"
          />
        </div>

        {/* Bottom Right Flower */}
        <div className="w-28 sm:w-40 md:w-48 shrink-0 -mb-2 z-20">
          <Image
            src={FlowerRightSideNoBg}
            alt="Flower bottom right"
            width={180}
            height={180}
            className="w-full h-auto object-contain opacity-90"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;