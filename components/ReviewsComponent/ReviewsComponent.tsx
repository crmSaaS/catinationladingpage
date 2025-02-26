import React, { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Review, ReviewProps } from "./ReviewsComponent.interface";

export const ReviewsComponent: FC<ReviewProps> = ({ reviews }) => {
  const [viewportWidth, setViewportWidth] = useState<number>(0); // ✅ Safe default for SSR

  useEffect(() => {
    if (typeof window !== "undefined") { // ✅ Prevents SSR crash
      setViewportWidth(window.innerWidth);

      const handleResize = () => setViewportWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <motion.section
      className="flex flex-col gap-16 container mx-auto px-6 md:px-12 py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      aria-labelledby="reviews-title"
    >
      <motion.h2
        id="reviews-title"
        className="text-4xl md:text-5xl font-semibold text-center text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        Customer Reviews & Testimonials
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <Swiper
          className="flex flex-row items-center w-full"
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={viewportWidth > 768 ? 3 : 1}
          pagination={{ type: "bullets", clickable: true }}
          aria-label="Customer testimonials"
        >
          {reviews?.map((review, index) => (
            <SwiperSlide key={review.id} className="relative py-8 w-full">
              <motion.article
                className="bg-[#fafafa] text-center flex flex-col items-center gap-4 p-5 min-h-[180px] shadow-lg rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                aria-labelledby={`reviewer-${review.id}`}
              >
                <h3 id={`reviewer-${review.id}`} className="text-lg font-semibold text-gray-900">
                  {review.name}
                </h3>
                <p className="text-center text-gray-600 text-sm leading-relaxed">{review.review}</p>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <motion.a
          href="/get-started"
          className="bg-[black] hover:bg-gray-800 px-6 py-3 rounded-full text-white text-sm transition-all shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Start using Proplye CRM today"
        >
          Get Started
        </motion.a>
      </motion.div>
    </motion.section>
  );
};
