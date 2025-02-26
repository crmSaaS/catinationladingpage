import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGoogletagmanager, SiGmail, SiGoogleads } from "react-icons/si";

// Social Media Icons List (SEO & Accessibility Friendly)
const icons = [
  { id: 1, Icon: FaFacebookF, label: "Facebook Marketing" },
  { id: 2, Icon: FaInstagram, label: "Instagram Ads" },
  { id: 3, Icon: FaWhatsapp, label: "WhatsApp Automation" },
  { id: 4, Icon: SiGoogletagmanager, label: "Google Tag Manager" },
  { id: 5, Icon: SiGmail, label: "Gmail Email Campaigns" },
  { id: 6, Icon: SiGoogleads, label: "Google Ads Integration" },
];

export default function SocialAnimation() {
  return (
    <section 
      id="social-icons" 
      className="flex justify-center items-center min-h-[50vh] relative mt-[-100px]"
      aria-labelledby="social-icons-heading"
    >
      <h2 id="social-icons-heading" className="sr-only">
        Social Media & Marketing Integrations
      </h2>

      <motion.div 
        className="grid grid-cols-3 gap-12 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", staggerChildren: 0.2 }}
      >
        {icons.map(({ id, Icon, label }) => (
          <motion.div
            key={id}
            className="p-6 rounded-full shadow-xl flex justify-center items-center border border-gray-300"
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.4 }}
            aria-label={label}
          >
            <Icon 
              className="text-black text-5xl transition-all duration-300 hover:text-gray-600" 
              title={label}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
