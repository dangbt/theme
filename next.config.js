const IMAGES_DOMAINS = process.env.IMAGES_DOMAINS.split(',');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: IMAGES_DOMAINS,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
