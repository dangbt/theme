/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'vn'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: ['samartheme1.vercel.app'],
  },
};

module.exports = nextConfig;
