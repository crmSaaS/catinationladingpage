import React from "react";
import { motion } from "framer-motion"; // 🚀 Import Framer Motion
import {
  TabletPatternTaglineOne,
  TabletPatternTaglineTwo,
} from "../TabletPattern";

export const TaglineComponent = () => {
  return (
    <motion.div
      className="bg-[black] relative overflow-hidden mt-16 py-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex px-8 h-80 lg:h-40 flex-col lg:flex-row gap-6 items-center lg:justify-between justify-center">
        
        {/* Animated Text */}
        <motion.p
          className="text-white text-4xl w-3/4 lg:w-1/3 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Elevate Your Business with the Ultimate CRM Solution.
        </motion.p>

        {/* Animated Button */}
        <motion.button
          className="bg-white hover:opacity-80 px-6 py-2.5 w-auto rounded-full text-sm text-[black] z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>

        {/* Patterns */}
        <TabletPatternTaglineOne />
        <TabletPatternTaglineTwo />
      </div>
    </motion.div>
  );
};
