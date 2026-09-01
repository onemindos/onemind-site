import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Static HTML export for GitHub Pages
  trailingSlash: true,     // Needed for static hosting (index.html per route)
  images: {
    unoptimized: true,     // Required for static export (no Next.js image server)
  },
};

export default nextConfig;
