// Site copy and data. Source: content/current-site.md (Yanicke's current site), tidied.

export const contact = {
  email: "info@zenjuweddingsnevents.com",
  phone: "(808) 840-7404",
  phoneHref: "tel:+18088407404",
  address: ["1050 Bishop Street, Suite 450", "Honolulu, HI 96813"],
  legalName: "Zenju Weddings and Events of Hawaii, LLC",
};

// Only Home is live for now; the rest show in the menu but aren't clickable yet.
export const pages = [
  { label: "Home", href: "/", live: true },
  { label: "About Us / The Team", href: "/about", live: false },
  { label: "Services & Packages", href: "/services", live: false },
  { label: "Preferred Vendors", href: "/vendors", live: false },
  { label: "Gallery", href: "/gallery", live: false },
  { label: "Contact Us", href: "/contact", live: false },
];

// All four packages, taken from her Packages page (zenjuweddingsnevents.com/packages).
// Wording is hers, tidied; nothing here is invented. `id` is the anchor on the future /services page.
export type Package = {
  id: string;
  name: string;
  type: string;
  meaning: string | null;
  summary: string;
  highlights: string[];
  /** Photo from her own Packages page; `focus` picks which part of the photo stays in frame. */
  image: { src: string; alt: string; focus: "center" | "top" | "lower" };
  includes: string[];
  note: string;
};

export const packages: Package[] = [
  {
    id: "kuulei",
    image: { src: "/images/current-site/package-kuulei-loulu-tent.jpg", alt: "Sailcloth tent reception lit at dusk at Loulu Palms Estate", focus: "center" },
    name: "Kuʻu Lei",
    type: "Full wedding coordination",
    meaning: "“Beloved” in Hawaiian",
    summary:
      "Kuʻu Lei means “beloved” in Hawaiian. Our exclusive full coordination package covers every detail of your wedding from beginning to end, from the day the date is set, with unlimited emails, phone calls and consulting. Relax, and leave all the details up to us.",
    highlights: ["Storyboard design", "Budget plan and vendor negotiation", "A full Zenju staff on the day"],
    includes: [
      "2-hour consultation",
      "Questionnaire",
      "Storyboard design",
      "Unlimited emails, calls and Skype meetings",
      "Unlimited face-to-face meetings (with 2 weeks’ notice)",
      "Quotes, budget plan and analysis",
      "Negotiating with vendors",
      "Preferred vendor list",
      "Coordinating contracts and payments with vendors",
      "Timeline",
      "Script for the emcee",
      "30-day checklist",
      "Rehearsal",
      "A full Zenju staff on the day",
      "An assistant in the hotel room",
      "Layout",
      "Set up",
      "Overseeing all vendors on the day",
      "Registration",
      "Ushering guests",
      "Décor clean-up and gift table pack-up",
      "Site check: last ones to leave",
    ],
    note: "Price will be discussed during the consultation.",
  },
  {
    id: "hoopono",
    image: { src: "/images/current-site/package-hoopono-paradise-cove.jpg", alt: "Newlyweds walking out to cheering guests at Paradise Cove", focus: "center" },
    name: "Hoʻopono",
    type: "Day-of coordination",
    meaning: "“Faithful” in Hawaiian",
    summary:
      "Hoʻopono means “faithful” in Hawaiian. This exclusive package is for the couple who wants day-of coordination only: a Zenju staff of two runs your rehearsal, timeline, set up and break down, ceremony and reception.",
    highlights: ["Rehearsal", "Zenju staff of two", "Ceremony and reception coordination"],
    includes: [
      "Rehearsal",
      "Zenju staff of two",
      "Timeline management",
      "Design consultation",
      "Set up and break down",
      "Coordination of the wedding day, ceremony and reception",
      "Unlimited emails",
      "Timeline",
      "Script for the emcee",
      "Layout",
      "Receiving of packages",
    ],
    note: "No planning outside the day of the event. This package can be customized; price is discussed during the consultation.",
  },
  {
    id: "barefoot-nuptials",
    image: { src: "/images/current-site/package-barefoot-beach.jpg", alt: "Couple sharing a kiss at the water’s edge on a quiet beach", focus: "lower" },
    name: "Barefoot Nuptials",
    type: "Elopement",
    meaning: null,
    summary:
      "Our exclusive elopement package, for the couple who wants a secluded, no-fuss event: a ceremony-only wedding at an oceanfront venue, with your kahu, haku and bouquet, ukulele music, photography and videography.",
    highlights: ["Oceanfront venue for 3 hours", "Officiant (kahu) and ukulele musician", "1 hour of photography and videography"],
    includes: [
      "Coordination",
      "Oceanfront venue for 3 hours (ceremony only)",
      "Bride’s hair and makeup",
      "Bridal haku (tropical floral crown)",
      "Bride’s floral bouquet",
      "Groom’s lei",
      "1 hour of photography",
      "1 hour of videography",
      "1 hour of live stream",
      "Officiant (kahu)",
      "1 hour musician (ukulele)",
      "Chairs",
      "1 bamboo arch",
    ],
    note: "No furniture or structures are allowed on state beaches, so this is a ceremony-only wedding with no reception. This package can be customized; price is discussed during the consultation.",
  },
  {
    id: "events",
    image: { src: "/images/current-site/package-events-turtle-bay.jpg", alt: "Lounge setup on an oceanfront lawn at Turtle Bay Resort", focus: "center" },
    name: "Events",
    type: "Non-wedding full coordination",
    meaning: null,
    summary:
      "Our full coordination package for clients who need a coordinator for an event that is not a wedding: birthday, retirement, anniversary and bachelor or bachelorette parties, concerts and corporate events.",
    highlights: ["Finding a venue", "Storyboard design and decorating", "A full Zenju staff"],
    includes: [
      "Questionnaire",
      "Finding a venue",
      "Storyboard design",
      "Budget",
      "Negotiation of contracts",
      "Layout",
      "Checklists",
      "Rehearsal",
      "Walk-through",
      "Decorating",
      "Full Zenju staff",
      "Timeline",
      "Script for the emcee",
      "Coordinating the vendors",
      "Set up",
      "Registration",
      "Overseeing the emcee",
      "Clean up",
    ],
    note: "A custom package; price is discussed after the initial consultation.",
  },
];

// Captions: from her portfolio page (zenjuweddingsnevents.com/about-3-1) where she labelled the photo;
// otherwise a plain description of what's in the photo (no invented names or venues).
export const galleryPreview = [
  { src: "/images/current-site/portfolio-01.jpg", caption: "Arvind & Victoria", alt: "Arvind and Victoria walking together at their Polish and Indian wedding" },
  { src: "/images/current-site/portfolio-03.jpg", caption: "Ceremony", alt: "Arvind and Victoria at their Indian ceremony beneath a white floral mandap" },
  { src: "/images/current-site/portfolio-07.jpg", caption: "Head table & cake", alt: "Head table with a white and blush floral runner, and the wedding cake behind" },
  { src: "/images/current-site/portfolio-09.jpg", caption: "Tented reception", alt: "Reception tables dressed in white beneath a tented garden" },
  { src: "/images/current-site/portfolio-18.jpg", caption: "Kualoa Ranch", alt: "Two grooms in green maile lei walking down the aisle at Kualoa Ranch" },
  { src: "/images/current-site/portfolio-12.jpg", caption: "Bridal bouquet", alt: "Close-up of a white rose and tropical leaf bouquet" },
];

// PLACEHOLDER: reviews are parked (see BRIEF.md). Replace with real reviews
// from Yanicke's WeddingWire profile before launch.
export const reviews = [
  {
    quote: "[Placeholder review] A short, heartfelt quote from a couple about planning with Zenju will go here.",
    name: "[Couple name]",
    detail: "[Venue · Year]",
  },
  {
    quote: "[Placeholder review] A second quote, ideally about how calm and organized the wedding day felt.",
    name: "[Couple name]",
    detail: "[Venue · Year]",
  },
  {
    quote: "[Placeholder review] A third quote, perhaps from an elopement or destination couple.",
    name: "[Couple name]",
    detail: "[Venue · Year]",
  },
];
