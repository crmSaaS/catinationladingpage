/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all domains (not recommended for security)
      },
    ],
    domains: [
      "www.dlf.in",
      "www.omaxe.com",
      "www.mahagunindia.com",
      "cdn.in.emaar.com",
      "www.ansalapi.com",
      "www.eldecogroup.com",
      "raheja.com",
      "www.ajnara.co",
      "infratech.thewavegroup.com",
      "ireoprojects.co.in",
      "www.unitechgroup.com",
      "www.gaursonsindia.com",
    ],
  },
};

module.exports = nextConfig;
