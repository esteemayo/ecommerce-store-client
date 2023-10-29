/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.pexels.com', 'images.unsplash.com']
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    // NEXT_PUBLIC_DEV_API_URL: process.env.NEXT_PUBLIC_DEV_API_URL,
    // NEXT_PUBLIC_PROD_API_URL: process.env.NEXT_PUBLIC_PROD_API_URL,
  },
}

module.exports = nextConfig
