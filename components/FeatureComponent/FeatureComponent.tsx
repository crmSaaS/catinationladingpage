import React, { FC } from "react";
import { FeatureProps } from "./FeatureComponent.interface";
import { motion } from "framer-motion";

export const FeatureComponent: FC<FeatureProps> = ({ features }) => {
  return (
    <section id="features" aria-labelledby="feature-heading" className="scroll-mt-24 py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* ✅ SEO-Optimized Title & Description */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 id="feature-heading" className="text-4xl md:text-5xl font-bold text-gray-900">
            AI-Powered CRM Software for Business Success
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Optimize your sales pipeline with our <strong>AI-driven CRM</strong>.  
            Automate <strong>lead management</strong>, enhance <strong>customer engagement</strong>,  
            and accelerate <strong>sales growth</strong>—all in one place.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-start justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* ✅ Left Side - Feature Images (SEO Optimized) */}
          <motion.div
            className="flex flex-col items-center lg:items-start justify-start gap-6 w-full lg:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="grid grid-cols-2 gap-6 w-full max-w-lg lg:max-w-xl mt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {[
                { src: "lead.png", alt: "Lead Management Dashboard in CRM Software" },
                { src: "mail.png", alt: "Automated Email Marketing Integration in CRM" },
                { src: "main.png", alt: "Advanced Sales Analytics and Reporting CRM" },
                { src: "whatsapp.png", alt: "WhatsApp Business CRM for Customer Communication" },
              ].map((image, idx) => (
                <motion.img
                  key={idx}
                  src={`/${image.src}`}
                  alt={image.alt}
                  className="w-full h-40 object-cover rounded-xl shadow-md"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </motion.div>

            {/* ✅ Call-To-Action Section (SEO-Optimized & Well-Spaced) */}
            <motion.div
              className="mt-8 w-full max-w-xl text-center lg:text-left bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold text-gray-900">Start Automating Your Sales Today</h2>
              <p className="mt-2 text-gray-600">
                Our <strong>CRM solution</strong> helps you manage leads efficiently,  
                improve <strong>customer engagement</strong>, and boost <strong>conversion rates</strong>.
              </p>
              <a href="https://crm.catination.com" className="inline-block mt-4 px-6 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition">
                Get Started Now
              </a>
            </motion.div>
          </motion.div>

          {/* ✅ Right Side - Feature List (SEO Optimized & Removed Points 6 & 7) */}
          <motion.div
            className="w-full lg:w-1/2 flex items-center justify-center lg:pl-10"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <ul className="flex flex-col gap-6" aria-label="Key Features of Our CRM">
              {features?.slice(0, 5).map((feature, idx) => ( // ✅ Keeping only first 5 features
                <motion.li
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.2 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-row gap-4 items-start">
                    {/* Feature Number */}
                    <motion.div
                      className="bg-black text-white flex items-center justify-center w-10 h-10 rounded-full text-lg font-semibold"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {idx + 1}
                    </motion.div>

                    {/* Feature Details */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>  
  );
};
