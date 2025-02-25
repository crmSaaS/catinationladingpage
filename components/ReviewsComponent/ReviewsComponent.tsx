import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { motion } from "framer-motion"; // 🚀 Import Framer Motion
import "swiper/css";
import "swiper/css/pagination";
import { Review, ReviewProps } from "./ReviewsComponent.interface";

export const ReviewsComponent: FC<ReviewProps> = ({ reviews }) => {
  const [viewportWidth, setViewportWidth] = React.useState<number>(0);
  
  React.useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    setViewportWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className="flex flex-col gap-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Title Animation */}
      <motion.h2
        className="text-4xl md:text-5xl font-semibold text-center text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        What they&apos;ve said
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
          pagination={{
            type: "bullets",
            clickable: true,
          }}
        >
          {reviews?.map((review, index) => {
            return (
              <SwiperSlide key={review.id} className="relative py-8 w-full">
                <motion.div
                  className="bg-[#fafafa] text-center flex flex-col items-center gap-4 p-5 min-h-[180px] shadow-lg rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-center text-gray-400">{review.review}</p>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>

      {/* Button Animation */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <motion.button
          className="bg-[black] hover:opacity-80 px-6 py-2.5 w-auto rounded-full text-sm text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
