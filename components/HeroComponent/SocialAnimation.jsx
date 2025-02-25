import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGoogletagmanager, SiGmail, SiGoogleads } from "react-icons/si";

const icons = [
  { id: 1, Icon: FaFacebookF },
  { id: 2, Icon: FaInstagram },
  { id: 3, Icon: FaWhatsapp },
  { id: 4, Icon: SiGoogletagmanager },
  { id: 5, Icon: SiGmail },
  { id: 6, Icon: SiGoogleads },
];

export default function SocialAnimation() {
  return (
    <div className="flex justify-center items-center min-h-[50vh] relative mt-[-100px]">
      <motion.div 
        className="grid grid-cols-3 gap-12 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", staggerChildren: 0.2 }}
      >
        {icons.map(({ id, Icon }, index) => (
          <motion.div
            key={id}
            className="p-6 rounded-full shadow-xl flex justify-center items-center border border-gray-300"
            whileHover={{
              scale: 1.2,
              rotate: 10,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
            }}
            animate={{
              y: [0, -8, 0, 8, 0], // Floating Effect
              x: [0, 4, 0, -4, 0],
              rotate: [0, 3, -3, 0], // Slight Rotation
              opacity: [1, 0.8, 1], // Pulsing Effect
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.2, // Staggered animation
            }}
          >
            <Icon className="text-black text-5xl transition-all duration-300 hover:text-gray-600" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
