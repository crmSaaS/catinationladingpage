import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const PricingComponent = () => {
  return (
    <motion.section 
      id="catination-pricing" 
      aria-labelledby="pricing-heading" 
      role="region"
      className="bg-white text-black py-16 px-4 sm:px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* ✅ SEO-Optimized Heading with Animation */}
      <motion.div 
        className="text-center mb-10"
        variants={fadeInUp}
      >
        <h1 id="pricing-heading" className="text-3xl sm:text-4xl font-bold mb-4">
          Catination CRM Pricing Plans
        </h1>
        <p className="text-gray-600 text-sm sm:text-lg">
          Affordable pricing for businesses of all sizes. Choose the best plan to grow your business.
        </p>
      </motion.div>

      {/* ✅ Pricing Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* 🔹 Catination Spark */}
        <motion.div 
          className="p-6 sm:p-8 border border-gray-300 rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-100"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          role="article"
          aria-labelledby="spark-heading"
        >
          <h2 id="spark-heading" className="text-xl sm:text-2xl font-semibold text-center">
            Catination Spark Plan
          </h2>
          <p className="text-gray-500 text-center text-sm sm:text-base">Choose any one marketing service</p>
          <p className="text-2xl sm:text-3xl font-bold text-center my-4">₹499/month</p>

          <ul className="text-gray-700 text-sm sm:text-base space-y-2">
            <li>✅ Bulk Email Marketing</li>
            <li>✅ Bulk WhatsApp Messaging</li>
            <li>✅ Bulk SMS Marketing</li>
          </ul>

          <div className="text-center mt-6">
            <motion.button 
              className="bg-black text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-800 transition"
              whileHover={{ scale: 1.1 }}
              aria-label="Choose Catination Spark plan for ₹499 per month"
            >
              Choose Service
            </motion.button>
          </div>
        </motion.div>

        {/* 🔹 Catination Boost */}
        <motion.div 
          className="p-6 sm:p-8 border border-gray-300 rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-100"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          role="article"
          aria-labelledby="boost-heading"
        >
          <h2 id="boost-heading" className="text-xl sm:text-2xl font-semibold text-center">
            Catination Boost Plan
          </h2>
          <p className="text-gray-500 text-center text-sm sm:text-base">Select any two services</p>
          <p className="text-2xl sm:text-3xl font-bold text-center my-4">₹899/month</p>

          <ul className="text-gray-700 text-sm sm:text-base space-y-2">
            <li>✅ Bulk Email + Bulk WhatsApp</li>
            <li>✅ Bulk Email + Bulk SMS</li>
            <li>✅ Bulk WhatsApp + Bulk SMS</li>
          </ul>

          <div className="text-center mt-6">
            <motion.button 
              className="bg-black text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-800 transition"
              whileHover={{ scale: 1.1 }}
              aria-label="Choose Catination Boost plan for ₹899 per month"
            >
              Choose Services
            </motion.button>
          </div>
        </motion.div>

        {/* 🔹 Catination Infinity */}
        <motion.div 
          className="p-6 sm:p-8 border border-gray-300 rounded-xl shadow-lg bg-gradient-to-br from-gray-900 to-black text-white"
          variants={fadeInUp}
          whileHover={{ scale: 1.08 }}
          role="article"
          aria-labelledby="infinity-heading"
        >
          <h2 id="infinity-heading" className="text-xl sm:text-2xl font-semibold text-center">
            Catination Infinity Plan
          </h2>
          <p className="text-gray-400 text-center text-sm sm:text-base">Complete CRM Suite for Business Automation</p>
          <p className="text-2xl sm:text-3xl font-bold text-center my-4">₹1199/month</p>
          <p className="text-lg sm:text-xl font-bold text-center text-yellow-400">
            + ₹699/month per user <span className="text-xs sm:text-sm">(Employee Portal)</span>
          </p>

          <ul className="text-gray-300 text-sm sm:text-base space-y-2">
            <li>✅ Admin & Employee Portal</li>
            <li>✅ Bulk Email, WhatsApp & SMS</li>
            <li>✅ Lead Management & Auto Distribution</li>
            <li>✅ Meta & Google Ads Integration</li>
            <li>✅ Client & Employee Reminders</li>
            <li>✅ Feedback Automation</li>
            <li>✅ Regular Updates & 24/7 Support</li>
          </ul>

          <div className="text-center mt-6">
            <motion.button 
              className="bg-white text-black px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-300 transition"
              whileHover={{ scale: 1.1 }}
              aria-label="Get started with Catination Infinity Plan"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* ✅ Free Trial Note */}
      <motion.p 
        className="mt-6 text-gray-500 text-center text-xs sm:text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        14-day free trial included. No credit card required.
      </motion.p>
    </motion.section>
  );
};

export default PricingComponent;
