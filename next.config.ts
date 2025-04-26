import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(ts|tsx)$/] },
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
