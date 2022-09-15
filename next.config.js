/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'vn'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: ['samartheme1.vercel.app', 'localhost', '165.22.253.251'],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
