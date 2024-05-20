/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['pt-BR', 'en-US', 'it-IT'],
    defaultLocale: 'en-US'
  },
}

module.exports = nextConfig
