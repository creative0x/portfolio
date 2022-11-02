import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import AnimatedText from "./AnimatedText";
import SplitText from "./SplitText";
import TitleAnimatedText from "./TitleAnimatedText.js";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import AnimatedSocials from "./AnimatedSocials";
import AnimatedNav from "./AnimatedNav";
import AnimatedButton from "./AnimatedButton";

export default function Banner() {
  return (
    <main className=" h-screen items-center justify-center flex flex-col   px-2 md:px-20">
      <nav className="navbar absolute top-0 w-full flex text-sm text-center justify-between items-center px-2 md:px-20 md:py-10  py-4   ">
        <AnimatedSocials />
        <HiMenu className="md:hidden text-4xl" />
        <AnimatedNav />
      </nav>
      <div className="flex space-x-20 text-center items-center">
        <TitleAnimatedText
          text="David 0x"
          customClass="font-semibold text-6xl"
        />
        <AnimatedText text="Web Developer. Film Production Coordinator. UI/UX Designer" />
      </div>
      <div>
        <AnimatedButton />
      </div>
    </main>
  );
}
