/** @type {import('next').NextConfig} */
const nextConfig = {
  //   images: {
  //     domains: ["res.cloudinary.com"],
  //   },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

module.exports = nextConfig;
