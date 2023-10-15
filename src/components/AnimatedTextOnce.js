import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedTextOnce = ({ text, className = "" }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setStartAnimation(true);
    }, 3000); // 3000 milliseconds (3 seconds)

    return () => {
      clearTimeout(delayTimeout);
    };
  }, []);

  const quote = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: startAnimation ? 0 : 3, // No delay if startAnimation is true
      },
    },
  };

  return (
    <div className="w-full mx-auto py-2 flex items-center justify-start text-left overflow-hidden sm:py-0">
      <motion.h1
        className={`inline-block w-full test-dark font-bold text-8xl dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate={startAnimation ? "animate" : "initial"}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default AnimatedTextOnce;
