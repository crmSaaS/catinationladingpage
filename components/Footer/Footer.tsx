import React, { FC } from "react";
import { motion } from "framer-motion"; // 🚀 Import Framer Motion
import Image from "next/image";
import { FooterProps } from "./Footer.interface";
import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";

// Animated Logo
export const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <Image src="/logo.png" alt="logo" height={100} width={150} />
    </motion.div>
  );
};

// Footer Component with Animations
export const Footer: FC<FooterProps> = ({
  navigations,
  otherNavigations,
  socials,
}) => {
  return (
    <motion.div
      className="bg-[#1e1e26] py-16 h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Desktop Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <DesktopFooter
          socials={socials}
          navigations={navigations}
          otherNavigations={otherNavigations}
        />
      </motion.div>

      {/* Mobile Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <MobileFooter
          socials={socials}
          navigations={navigations}
          otherNavigations={otherNavigations}
        />
      </motion.div>
    </motion.div>
  );
};
