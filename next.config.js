/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com', 'www.shutterstock.com']
  },
}

module.exports = nextConfig
