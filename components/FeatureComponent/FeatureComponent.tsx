import React, { FC } from "react";
import { FeatureProps } from "./FeatureComponent.interface";
import { motion } from "framer-motion";

export const FeatureComponent: FC<FeatureProps> = ({ features }) => {
  return (
    <div id="features"> {/* 👈 Add this ID for smooth scrolling */}
      <motion.div
        className="flex flex-col lg:flex-row gap-16 lg:gap-0 items-start justify-between"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Left Side - Title, Description, Images */}
        <motion.div
          className="flex flex-col items-center lg:items-start justify-start gap-8 w-full lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-4xl md:text-5xl font-semibold lg:text-left text-center text-gray-900">
            Why Choose Our CRM?
          </h3>
          <h3 className="lg:w-2/3 text-base text-center lg:text-left text-gray-400">
            Our CRM is designed to help businesses streamline lead management, automate marketing, and boost conversions. Perfect for real estate, sales teams, and digital marketing firms.
          </h3>

          <motion.div
            className="grid grid-cols-2 gap-x-6 gap-y-10 w-full max-w-lg lg:max-w-xl mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img src="/lead.png" alt="Feature 1" className="w-full h-44 object-cover rounded-xl shadow-lg" whileHover={{ scale: 1.05 }} />
            <motion.img src="/mail.png" alt="Feature 2" className="w-full h-44 object-cover rounded-xl shadow-lg" whileHover={{ scale: 1.05 }} />
            <motion.img src="/main.png" alt="Feature 3" className="w-full h-44 object-cover rounded-xl shadow-lg" whileHover={{ scale: 1.05 }} />
            <motion.img src="/whatsapp.png" alt="Feature 4" className="w-full h-44 object-cover rounded-xl shadow-lg" whileHover={{ scale: 1.05 }} />
          </motion.div>
        </motion.div>

        {/* Right Side - Feature List */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center lg:pl-12"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <ul className="flex flex-col gap-8">
            {features?.map((feature, idx: number) => (
              <motion.li
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-row gap-8">
                  <motion.div className="hidden lg:block" whileHover={{ scale: 1.2, rotate: 10 }}>
                    <p className="bg-[black] px-6 py-1 rounded-full text-white">{idx + 1}</p>
                  </motion.div>

                  <motion.div className="flex flex-col gap-4" whileHover={{ x: 5 }}>
                    <p className="hidden lg:block text-base font-semibold">{feature.title}</p>

                    <div className="w-full bg-[#fef0ea] flex flex-row items-center gap-4 rounded-full lg:hidden">
                      <div className="bg-[black] rounded-full px-8 py-2">
                        <span className="text-white">{idx + 1}</span>
                      </div>
                      <p className="text-base font-semibold">{feature.title}</p>
                    </div>

                    <p className="text-base text-gray-400">{feature.description}</p>
                  </motion.div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </div>  
  );
};
