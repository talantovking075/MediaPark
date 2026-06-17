/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.mediapark.uz",
      },
    ],
  },
};



export default nextConfig;

