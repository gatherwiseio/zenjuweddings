import type { Metadata } from "next";
import { businessName } from "@/content/site";

// Every page's tab title (≤60 characters), search description (≤155) and share description
// (≤110, for link previews), as approved on the SEO canvas
// (https://claude.ai/artifact/QTVRj4DvoXxdE4KWrGM6a8). Titles and share text always say
// "Zenju Weddings and Events". Search text says "Oahu" (how people type it); page text keeps "Oʻahu".
// The share image (option A on the canvas, 1200 × 630) is public/images/share.png, on every page.

const shareImage = {
  url: "/images/share.png",
  width: 1200,
  height: 630,
  alt: "Zenju Weddings and events of Hawaii, LLC. Celebrations rooted in aloha. Wedding planning and design, Honolulu, Hawaii, since 2010.",
};

type PageSeo = { path: string; title: string; description: string; share?: string };

export const seo = {
  home: {
    path: "/",
    title: `${businessName} | Oahu Wedding Planner in Honolulu`,
    description:
      "Unique, elegant weddings and elopements across Oahu, planned by Zenju Weddings and Events of Hawaii. Full and day-of coordination since 2010.",
    share: "Celebrations rooted in aloha. Unique, elegant weddings across Oahu by Zenju Weddings and Events, since 2010.",
  },
  about: {
    path: "/about",
    title: `About Us | ${businessName}`,
    description:
      "Meet Yanicke Lim Sang, who founded Zenju Weddings and Events of Hawaii in Honolulu in 2010, named after her sons Zen and Jude, and the team behind it.",
    share: "The story behind Zenju Weddings and Events: founded in Honolulu in 2010 by Yanicke Lim Sang.",
  },
  services: {
    path: "/services",
    title: `Oahu Wedding Packages & Pricing | ${businessName}`,
    description:
      "Oahu wedding packages from $2,900: barefoot and all-inclusive elopements, day-of, partial and full coordination, Zenju Platinum and marriage license steps.",
    share: "Six Oahu wedding packages, from elopements to full coordination, with prices and everything included.",
  },
  vendors: {
    path: "/vendors",
    title: `Preferred Vendors in Hawaii | ${businessName}`,
    description:
      "Zenju Weddings and Events' trusted Oahu vendors: hair and makeup, officiants, photographers, videographers, florists, rentals and décor, DJs and emcees.",
    share: "The Oahu photographers, florists, officiants and more that Zenju Weddings and Events trusts with your day.",
  },
  gallery: {
    path: "/gallery",
    title: `Oahu Wedding Gallery | ${businessName}`,
    description:
      "Real Oahu weddings planned by Zenju Weddings and Events: Arvind + Victoria, Maksim + Albert at Kualoa Ranch, Onesis + Pavel at Loulu Palms Estate and more.",
    share: "Real weddings planned by Zenju Weddings and Events across Oahu, from Kualoa Ranch to Turtle Bay Resort.",
  },
  contact: {
    path: "/contact",
    title: `Contact Us | ${businessName}`,
    description:
      "Plan your Oahu wedding with Zenju Weddings and Events of Hawaii. Share your date and vision, and Yanicke will be in touch. Honolulu, (808) 840-7404.",
    share: "Tell us about your day. Share your date and vision, and Yanicke will be in touch.",
  },
  privacy: {
    path: "/privacy-policy",
    title: `Privacy Policy | ${businessName}`,
    description:
      "How Zenju Weddings and Events of Hawaii, LLC collects, uses and safeguards your personal information.",
  },
  terms: {
    path: "/terms-and-conditions",
    title: `Terms & Conditions | ${businessName}`,
    description:
      "The terms and conditions that govern your use of the Zenju Weddings and Events of Hawaii, LLC website.",
  },
} satisfies Record<string, PageSeo>;

// Albums: "<Couple> | Gallery | …" and "<Couple> at <place>. <story>". The two whose sentence runs
// past 155 characters have their own shorter description.
const albumDescriptions: Record<string, string> = {
  "arvind-victoria":
    "Arvind + Victoria at St. Peter and Paul Church and Oahu Wedding Villas: a Polish Catholic ceremony and an Indian ceremony in one day, then one reception.",
  "more-love-stories":
    "Daniel + Tyler at Paradise Cove, Alex + Tasha, and more favorite weddings by Zenju Weddings and Events at Cafe Julia and Paliku Gardens on Oahu.",
};

export function albumSeo(album: { slug: string; title: string; place: string; story: string }): PageSeo {
  return {
    path: `/gallery/${album.slug}`,
    title: `${album.title} | Gallery | ${businessName}`,
    description: albumDescriptions[album.slug] ?? `${album.title} at ${album.place}. ${album.story}`,
  };
}

// A page's metadata: tab title, search description, its own address, and the share (Open Graph
// and X) settings with the share image.
export function pageMetadata({ path, title, description, share }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: share ?? description,
      url: path,
      siteName: businessName,
      type: "website",
      locale: "en_US",
      images: [shareImage],
    },
    twitter: { card: "summary_large_image", title, description: share ?? description, images: [shareImage] },
  };
}
