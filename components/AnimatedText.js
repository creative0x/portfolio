import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText({ text, customClass }) {
  const words = text.split(".");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 3, delayChildren: 3, staggerChildren: 1 },
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
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="space-x-1 tracking-tight mt-2 mb-4 md:my-0"
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index}>
          {word}.
        </motion.span>
      ))}
    </motion.div>
  );
}
