import type { NextConfig } from "next";
import { oldSiteRedirects } from "./src/redirects";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // AVIF first (smaller), WebP for browsers without it.
  images: { formats: ["image/avif", "image/webp"] },
  // Her old Wix page addresses, sent to their new homes (src/redirects.ts; switched off until the
  // domain moves).
  redirects: async () => oldSiteRedirects,
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
