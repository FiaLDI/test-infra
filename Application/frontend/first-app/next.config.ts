import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/1',
  trailingSlash: true,
  output: 'standalone',
};

export default nextConfig;
