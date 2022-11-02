import React from "react";
import { motion } from "framer-motion";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";

export default function AnimatedText() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 5.5, delayChildren: 5.5, staggerChildren: 1 },
    },
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div variants={container} initial="hidden" animate="visible">
      <div variants={child} className="flex space-x-5 text-2xl">
        <ImFacebook className="cursor-pointer transiton duration-200 hover:scale-125" />
        <RiInstagramFill className="cursor-pointer transiton duration-200 hover:scale-125" />
        <ImTwitter className="cursor-pointer transiton duration-200 hover:scale-125" />
      </div>
    </div>
  );
}
