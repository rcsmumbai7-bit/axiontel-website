import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes the whole site to ./out for Apache / cPanel hosting.
  output: "export",
  // Blueprint URLs use trailing slashes (e.g. /walkie-talkies/) -> exported as folder/index.html.
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
