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
  // Add the following exportPathMap function
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // Add other routes here if needed
    };
  },
};

module.exports = nextConfig;