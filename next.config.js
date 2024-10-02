/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
const withBuilderDevTools = require("@builder.io/dev-tools/next")({
  // Builder Devtools Options
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
    ],
  },
};

module.exports = withBuilderDevTools(withVideos(nextConfig));
