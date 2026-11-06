import type { MetadataRoute } from "next";
import { albums } from "@/content/gallery";
import { siteUrl } from "@/content/site";

// /sitemap.xml: every page on the site, for Google and other search engines (also linked from
// /robots.txt). New pages go here too.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/services",
    "/vendors",
    "/gallery",
    ...albums.map((a) => `/gallery/${a.slug}`),
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];
  return paths.map((path) => ({ url: `${siteUrl}${path === "/" ? "" : path}` }));
}
