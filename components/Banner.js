import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import AnimatedText from "./AnimatedText";
import SplitText from "./SplitText";
import TitleAnimatedText from "./TitleAnimatedText.js";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import AnimatedSocials from "./AnimatedSocials";
import AnimatedNav from "./AnimatedNav";
import AnimatedButton from "./AnimatedButton";
import Nav from "./Nav";

export default function Banner() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <main className=" h-screen items-center justify-center flex flex-col  px-2 md:px-20">
      <nav className="navbar absolute top-0 w-full flex text-sm text-center justify-between items-center px-2 md:px-20 md:py-10  py-4   ">
        <AnimatedSocials />
        <AnimatedNav />
        <HiMenu
          onClick={handleNav}
          className=" cursor-pointer md:hidden text-4xl transition duration-200 hover:scale-125"
        />
      </nav>

      <div
        className={
          nav ? `md:hidden fixed left-0 top-0 w-full h-screen bg-white/40` : ``
        }
      >
        <div
          className={
            nav
              ? ` fixed right-0 top-0 w-[40%] sm:w-[30%] md:w-[20%] h-screen bg-black  py-10 ease-in duration-500`
              : `fixed right-[-100%] top-0 p-10 ease-in duration-500`
          }
        >
          <div>
            <div className="flex w-full items-center justify-around ">
              <div
                onClick={handleNav}
                className="   p-3 cursor-pointer transition duration-200 ease-in-out rounded-full hover:shadow-md hover:shadow-white  "
              >
                <AiOutlineClose className="text-lg" />
              </div>
              <h1 className="text-lg md:text-2xl">David B.</h1>
            </div>
          </div>

          <div className="py-10 flex flex-col">
            <ul className="uppercase ">
              <Link href="/">
                <li className="py-4 text-sm md:text-base pl-4 hover:bg-white hover:text-black hover:font-semibold ">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm md:text-base pl-4 hover:bg-white hover:text-black hover:font-semibold">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm md:text-base pl-4 hover:bg-white hover:text-black hover:font-semibold">
                  Portfolio
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm md:text-base pl-4 hover:bg-white hover:text-black hover:font-semibold">
                  Skills
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm md:text-base pl-4 hover:bg-white hover:text-black hover:font-semibold">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-20 flex flex-col items-center">
              <p className="tracking-widest text-xl">Let&apos;s Connect</p>
              <div className="flex items-center space-x-6 text-2xl my-6 ">
                <ImFacebook className="socials" />
                <ImTwitter className="socials" />
                <RiInstagramFill className="socials" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex  md:space-x-20 text-center items-center">
        <TitleAnimatedText
          text="David B."
          customClass="font-semibold text-4xl  md:text-6xl"
        />
        <AnimatedText text="Web Developer. Film Production Coordinator. UI/UX Designer" />
      </div>
      <div>
        <AnimatedButton />
      </div>
    </main>
  );
}
