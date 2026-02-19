/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "mapi.sadaivsatya.com" },
      { protocol: "https", hostname: "www.sadaivsatya.com" },
      { protocol: "https", hostname: "sadaivsatya.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],

    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,

    deviceSizes: [320, 640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384],
  },

  compress: true,   // 🔥 gzip + brotli
};

module.exports = nextConfig;
