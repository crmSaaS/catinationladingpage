"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const hoverEffect = {
  whileHover: { scale: 1.05, transition: { duration: 0.25 } },
};

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="bg-gray-50 text-gray-900 py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          About <span className="text-blue-600">Catination CRM</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8"
          itemProp="description"
        >
          <strong>Catination CRM</strong> is an <strong>AI-powered customer relationship management</strong> solution
          designed for businesses to <strong>automate sales, manage leads</strong>, and enhance customer engagement.
          With <strong>integrated WhatsApp, Email, and Ads</strong>, our software ensures <strong>seamless communication</strong>
          and maximized conversions.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 sm:mt-10 bg-white p-6 sm:p-8 rounded-xl shadow-lg border-l-4 border-blue-500"
          {...hoverEffect}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">🚀 Our Vision</h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our vision is to create an AI-powered CRM that allows businesses to <strong>automate workflows, reduce manual effort</strong>,
            and focus on building strong customer relationships. We aim to <strong>simplify CRM solutions</strong> with cutting-edge
            automation.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-6 sm:mt-8 p-6 sm:p-8 bg-gray-100 rounded-xl shadow-md border-l-4 border-blue-500"
          {...hoverEffect}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">🎯 Our Mission</h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our mission is to help businesses grow by providing an <strong>affordable, feature-rich CRM</strong> that enhances
            <strong> lead tracking, customer communication</strong>, and overall sales performance. We aim to be the
            <strong>best CRM solution</strong> for startups and enterprises alike.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-8 sm:mt-12">
          <motion.a
            href="https://app.catination.com/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-md transition duration-300 inline-block text-sm sm:text-base"
            whileHover={{ scale: 1.07 }}
          >
            Start Growing with Catination 🚀
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;