/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: "/xwds",
  assetPrefix: "/xwds",
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
