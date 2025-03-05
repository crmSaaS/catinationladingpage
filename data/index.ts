import { Feature } from "@/components/FeatureComponent/FeatureComponent.interface";
import { Navigation, Social } from "@/components/Footer/Footer.interface";
import { NavItem } from "@/components/Navbar/Navbar.interface";
import { Review } from "@/components/ReviewsComponent/ReviewsComponent.interface";

// Navigation Items
export const navItems: NavItem[] = [
  { id: "1", name: "Features", link: "#features" },
  { id: "2", name: "Pricing", link: "#pricing" },
  { id: "3", name: "Industries", link: "#industries" },
  { id: "4", name: "About Us", link: "#aboutus" },
  { id: "5", name: "Reviews", link: "#review" }
];

// Feature List
export const features: Feature[] = [
  {
    id: "1",
    title: "Advanced Lead Management",
    description:
      "Upload, track, and distribute leads effortlessly among your sales team with real-time updates.",
  },
  {
    id: "2",
    title: "Meta & Google Ad Lead Integration",
    description:
      "Automatically capture leads from Meta and Google Ads, ensuring you never miss a potential customer.",
  },
  {
    id: "3",
    title: "Automated Lead Distribution",
    description:
      "Assign leads to the right sales representatives based on predefined rules for maximum efficiency.",
  },
  {
    id: "4",
    title: "Bulk WhatsApp Messaging",
    description:
      "Engage your customers instantly with personalized bulk WhatsApp messages at scale.",
  },
  {
    id: "5",
    title: "Email Marketing Automation",
    description:
      "Run targeted email campaigns to nurture leads and convert them into loyal customers.",
  },
  {
    id: "6",
    title: "CRM for Real Estate",
    description:
      "Specially designed for real estate businesses to manage, track, and convert property leads effectively.",
  },
  {
    id: "7",
    title: "Performance Analytics",
    description:
      "Gain insights into lead conversions, sales performance, and marketing effectiveness with detailed reports.",
  },
];

// Customer Reviews
export const reviews: Review[] = [
  {
    id: "1",
    name: "Rohan Sharma",
    image: "/avatar-rohan.png",
    review:
      "This CRM has revolutionized the way we manage leads. Our conversion rates have skyrocketed!",
  },
  {
    id: "2",
    name: "Meera Kapoor",
    image: "/avatar-meera.png",
    review:
      "The integration with Meta and Google Ads is seamless. No more manually importing leads—it's all automated!",
  },
  {
    id: "3",
    name: "Vikram Patel",
    image: "/avatar-vikram.png",
    review:
      "Bulk WhatsApp messaging has allowed us to engage our customers more effectively. Highly recommended!",
  },
  {
    id: "4",
    name: "Ayesha Khan",
    image: "/avatar-ayesha.png",
    review:
      "Real estate lead tracking is effortless with this CRM. We've closed more deals than ever before!",
  },
];

// Social Media Links
export const socials: Social[] = [
  { id: "1", icon: "/icon-facebook.svg", title: "Facebook" },

  { id: "3", icon: "/icon-twitter.svg", title: "Twitter" },
  { id: "4", icon: "/icon-youtube.svg", title: "YouTube" },
  { id: "5", icon: "/icon-instagram.svg", title: "Instagram" },
];

// Footer Navigation
export const navigations: Navigation[] = [
  { id: "1", name: "Home", url: "#" },
  { id: "2", name: "Features", url: "#features" },
  { id: "3", name: "Pricing", url: "#pricing" },
  { id: "4", name: "Industries", url: "#industries" },
  { id: "5", name: "Contact", url: "#contact" },
];

// Other Footer Links
export const otherNavigations: Navigation[] = [
  { id: "1", name: "Terms of Service", url: "#terms" },
  { id: "2", name: "Privacy Policy", url: "#privacy-policy" },
];

