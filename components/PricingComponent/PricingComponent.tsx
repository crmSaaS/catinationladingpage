import React from "react";
import { motion } from "framer-motion";

const PricingComponent = () => {
  return (
    <section 
      id="proplye-pricing" 
      aria-labelledby="pricing-heading" 
      role="region"
      className="bg-white text-black py-16 px-6"
    >
      {/* ✅ SEO-Optimized Heading */}
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h1 id="pricing-heading" className="text-4xl font-bold mb-4">
          Proplye CRM Pricing Plans
        </h1>
        <p className="text-gray-600 text-lg">
          Affordable pricing for businesses of all sizes. Choose the best plan to grow your business.
        </p>
      </motion.div>

      {/* ✅ Pricing Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* 🔹 Proplye Spark (SEO-friendly service card) */}
        <motion.div 
          className="p-8 border border-gray-300 rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-100"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          role="article"
          aria-labelledby="spark-heading"
        >
          <h2 id="spark-heading" className="text-2xl font-semibold text-center">
            Proplye Spark Plan
          </h2>
          <p className="text-gray-500 text-center">Choose any one marketing service</p>
          <p className="text-3xl font-bold text-center my-4">₹499/month</p>

          <ul className="text-gray-700 text-sm space-y-2">
            <li>✅ Bulk Email Marketing</li>
            <li>✅ Bulk WhatsApp Messaging</li>
            <li>✅ Bulk SMS Marketing</li>
          </ul>

          <div className="text-center mt-6">
            <motion.button 
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
              whileHover={{ scale: 1.1 }}
              aria-label="Choose Proplye Spark plan for ₹499 per month"
            >
              Choose Service
            </motion.button>
          </div>
        </motion.div>

        {/* 🔹 Proplye Boost */}
        <motion.div 
          className="p-8 border border-gray-300 rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-100"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          role="article"
          aria-labelledby="boost-heading"
        >
          <h2 id="boost-heading" className="text-2xl font-semibold text-center">
            Proplye Boost Plan
          </h2>
          <p className="text-gray-500 text-center">Select any two services</p>
          <p className="text-3xl font-bold text-center my-4">₹899/month</p>

          <ul className="text-gray-700 text-sm space-y-2">
            <li>✅ Bulk Email + Bulk WhatsApp</li>
            <li>✅ Bulk Email + Bulk SMS</li>
            <li>✅ Bulk WhatsApp + Bulk SMS</li>
          </ul>

          <div className="text-center mt-6">
            <motion.button 
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
              whileHover={{ scale: 1.1 }}
              aria-label="Choose Proplye Boost plan for ₹899 per month"
            >
              Choose Services
            </motion.button>
          </div>
        </motion.div>

        {/* 🔹 Proplye Infinity */}
        <motion.div 
          className="p-8 border border-gray-300 rounded-xl shadow-lg bg-gradient-to-br from-gray-900 to-black text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          role="article"
          aria-labelledby="infinity-heading"
        >
          <h2 id="infinity-heading" className="text-2xl font-semibold text-center">
            Proplye Infinity Plan
          </h2>
          <p className="text-gray-400 text-center">Complete CRM Suite for Business Automation</p>
          <p className="text-3xl font-bold text-center my-4">₹1199/month <span className="text-sm">(Admin Portal)</span></p>
          <p className="text-xl font-bold text-center text-yellow-400">+ ₹699/month per user <span className="text-sm">(Employee Portal)</span></p>

          <ul className="text-gray-300 text-sm space-y-2">
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
              className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-300 transition"
              whileHover={{ scale: 1.1 }}
              aria-label="Get started with Proplye Infinity Plan"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* 🔹 Digital Marketing Slab */}
      <motion.div 
        className="mt-12 p-8 border border-gray-300 rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-100 max-w-4xl mx-auto"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        role="article"
        aria-labelledby="digital-marketing-heading"
      >
        <h2 id="digital-marketing-heading" className="text-2xl font-semibold text-center">
          Proplye Digital Growth Plan
        </h2>
        <p className="text-gray-500 text-center">Performance-based Digital Marketing Services</p>
        <p className="text-3xl font-bold text-center my-4">10%-20% of Total Ad Spend</p>

        <ul className="text-gray-700 text-sm space-y-2 text-center">
          <li>✅ Performance-based Digital Marketing</li>
          <li>✅ Meta & Google Ads Management</li>
          <li>✅ Advanced Analytics & Lead Tracking</li>
          <li>✅ Automated Ad Lead Distribution</li>
        </ul>

        <div className="text-center mt-6">
          <motion.button 
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            whileHover={{ scale: 1.1 }}
            aria-label="Get started with Proplye Digital Growth Plan"
          >
            Get Marketing Assistance
          </motion.button>
        </div>
      </motion.div>

      {/* ✅ Free Trial Note */}
      <p className="mt-6 text-gray-500 text-center text-sm">14-day free trial included. No credit card required.</p>
    </section>
  );
};

export default PricingComponent;
