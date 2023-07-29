/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["res.cloudinary.com", "source.unsplash.com"],
  },
};

module.exports = nextConfig;
