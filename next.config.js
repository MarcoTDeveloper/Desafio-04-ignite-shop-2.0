/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        hostname:'files.stripe.com'
      },
    ],
  },
}

module.exports = nextConfig
