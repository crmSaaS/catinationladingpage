import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const partners = [
  { id: 1, name: "DLF", logo: "https://www.dlf.in/images/logo-black.svg" },
  { id: 3, name: "Omaxe", logo: "https://www.omaxe.com/assets/front/images/omaxe-logo.webp" },
  { id: 4, name: "Mahagun", logo: "https://www.mahagunindia.com/wp-content/uploads/2023/04/logo.png" },
  { id: 5, name: "Emaar India", logo: "https://cdn.in.emaar.com/wp-content/themes/emaar/inc/assets/images/emaar-india-logo-en.svg" },
  { id: 6, name: "Ansal API", logo: "https://www.ansalapi.com/images/logo.jpg" },
  { id: 7, name: "Eldeco Group", logo: "https://www.eldecogroup.com/assests/images/logo.png" },
  { id: 8, name: "Raheja Developers", logo: "https://raheja.com/images/raheja-logo.png" },
  { id: 9, name: "Ajnara", logo: "https://www.ajnara.co/images/logo.png" },
  { id: 11, name: "Ireo", logo: "https://ireoprojects.co.in/image/ireo-logo.png" },
  { id: 12, name: "Unitech", logo: "https://www.unitechgroup.com/images/logo-demo.gif" },
  { id: 13, name: "Gaursons India", logo: "https://www.gaursonsindia.com/images/logo.png" },
];

export const OurPartnersComponent = () => {
  const sliderRef = useRef(null); // ✅ Fix: Removed HTMLDivElement

  useEffect(() => {
    if (typeof window !== "undefined") { // ✅ Fix: Run only in browser
      const interval = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div  id="our-partners" className="py-16 bg-white relative">
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-12">
        Our Partners
      </h2>

      <div className="max-w-6xl mx-auto relative overflow-hidden">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md z-10"
          onClick={scrollLeft}
        >
          <FaChevronLeft size={20} />
        </button>

        <motion.div
          ref={sliderRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide p-4"
          whileTap={{ cursor: "grabbing" }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              className="flex-shrink-0 w-44 h-32 flex justify-center items-center border border-gray-200 shadow-md rounded-lg bg-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                width={140} 
                height={70} 
                style={{ objectFit: "contain" }} 
              />
            </motion.div>
          ))}
        </motion.div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-md z-10"
          onClick={scrollRight}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
