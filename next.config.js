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
    unoptimized: true,  // Disable image optimization for static export
  },
  // output: 'export',  // Static export setting (Already commented out)
};

// Export the final configuration wrapped with the plugins
module.exports = withBuilderDevTools(withVideos(nextConfig));



