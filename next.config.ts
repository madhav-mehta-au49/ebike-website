import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  distDir: process.env.VERCEL ? ".next" : ".next-build",
  devIndicators: false,
};
export default nextConfig;

