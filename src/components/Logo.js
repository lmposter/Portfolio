import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <motion.a
        href="/"
        className="relative w-64 h-12 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: "#6c6c6c",
          transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" },
        }}
      >
        <span style={{ marginRight: '5px' }}>MAHECHEN.COM</span>
        <motion.span
          className="absolute-dot"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </motion.a>
    </div>
  );
}

export default Logo;
