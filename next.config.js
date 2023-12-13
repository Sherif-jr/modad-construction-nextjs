/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecdegypt.com",
      },
    ],
  },
};

module.exports = nextConfig;
