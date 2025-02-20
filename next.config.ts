import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media4.giphy.com",
      },
      {
        hostname: "media3.giphy.com",
      },
      {
        hostname: "media2.giphy.com",
      },
      {
        hostname: "media1.giphy.com",
      },
      {
        hostname: "media0.giphy.com",
      },
      {
        hostname: "media5.giphy.com",
      },
      {
        hostname: "media6.giphy.com",
      },
    ],
  },
};

export default nextConfig;
