const { writeFileSync } = require('fs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/worldbuilding',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
};

module.exports = nextConfig;
