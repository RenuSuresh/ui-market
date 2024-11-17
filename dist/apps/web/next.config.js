/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@ui-marketplace/shared/ui"],
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/ui-market' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ui-market/' : '',
};

module.exports = nextConfig;