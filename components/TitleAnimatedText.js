import React from "react";
import { motion } from "framer-motion";

export default function TitleAnimatedText({ text, customClass }) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { delay: 1, delayChildren: 1, staggerChildren: 0.1 },
    }),
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
      className="space-x-1"
    >
      {letters.map((word, index) => (
        <motion.span variants={child} key={index} className={customClass}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
