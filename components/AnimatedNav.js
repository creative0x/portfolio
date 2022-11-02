import React from "react";
import { motion } from "framer-motion";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";

export default function AnimatedText() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 6, delayChildren: 6, staggerChildren: 1 },
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
    <motion.div variants={container} initial="hidden" animate="visible">
      <motion.ul
        variants={child}
        className="hidden md:flex space-x-2 md:space-x-10  font-medium"
      >
        <li className="cursor-pointer transition duration-200 hover:scale-125">
          About Me
        </li>
        <li className="cursor-pointer transition duration-200 hover:scale-125">
          Web Development
        </li>
        <li className="cursor-pointer transition duration-200 hover:scale-125">
          Film Production
        </li>
        <li className="cursor-pointer transition duration-200 hover:scale-125">
          Contact Me
        </li>
      </motion.ul>
    </motion.div>
  );
}
