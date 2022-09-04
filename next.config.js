/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'vn'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: ['samartheme1.vercel.app', 'localhost'],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
