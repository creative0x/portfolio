import React from "react";
import { motion } from "framer-motion";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";

export default function AnimatedText() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 6.5, delayChildren: 6.5, staggerChildren: 1 },
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
      <div variants={child}>
        <button className="text-small md:text-xl bg-white text-black font-semibold px-4 py-1 md:px-8 md:py-2  md:my-10 transition duration-300 hover:scale-110">
          Explore Portfolio
        </button>
      </div>
    </div>
  );
}
