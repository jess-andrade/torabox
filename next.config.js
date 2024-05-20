/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR', 'en-US', 'it'],
    defaultLocale: 'en-US',
    localeDetection: true
  },
}

module.exports = nextConfig
