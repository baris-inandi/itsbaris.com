import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/resume", destination: "/resume.pdf" }];
  },
};

export default nextConfig;
