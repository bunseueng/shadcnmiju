import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable caching in development for better HMR
  reactStrictMode: true,
};

export default nextConfig;
