import type { NextConfig } from "next";

type Redirect = Awaited<ReturnType<NonNullable<NextConfig["redirects"]>>>[number];

// Every address on her old Wix site that the new site doesn't have, sent to its new home, so
// Google results, bookmarks and links from other sites keep working once the domain moves here.
// Full inventory and reasoning: content/old-site/pages.md.

// Pages with a clear new home: permanent (308), so Google moves their ranking over.
const pages: Redirect[] = [
  { source: "/about-5", destination: "/about", permanent: true },
  { source: "/about-3-1", destination: "/gallery", permanent: true },
  { source: "/packages", destination: "/services", permanent: true },
  { source: "/marriage-license", destination: "/services#marriage-license", permanent: true },
  { source: "/news-all", destination: "/vendors", permanent: true },
  { source: "/team-1", destination: "/vendors", permanent: true },
  { source: "/form-submitted", destination: "/contact", permanent: true },
  { source: "/copy-of-terms-and-conditions", destination: "/privacy-policy", permanent: true },
];

// Her blog isn't moving to the new site (user decision, 2026-11-06): each post goes to the page
// closest to its topic, permanently (308). Their text stays saved in content/old-site/blog/.
const blog: Redirect[] = [
  { source: "/blog", destination: "/", permanent: true },
  {
    source: "/post/hawaii-wedding-permits-in-2026-what-destination-couples-actually-need-to-know",
    destination: "/services#marriage-license",
    permanent: true,
  },
  {
    source: "/post/how-to-plan-a-hawaii-elopement-in-2027-a-5-step-guide-for-mainland-couples",
    destination: "/services#elopement",
    permanent: true,
  },
  {
    source: "/post/aimsleigh-carter-an-intimate-lanikuhonua-elopement-in-paradise",
    destination: "/gallery",
    permanent: true,
  },
  // The other posts (and any post added later) are about planning and coordination.
  { source: "/post/:slug", destination: "/services", permanent: true },
  { source: "/blog/:path*", destination: "/", permanent: true },
];

// Off until her domain moves here from Wix (user decision, 2026-11-06). Set to true in the same
// change that connects www.zenjuweddingsnevents.com in Vercel.
export const OLD_SITE_REDIRECTS_ON = false;

export const oldSiteRedirects: Redirect[] = OLD_SITE_REDIRECTS_ON ? [...pages, ...blog] : [];
