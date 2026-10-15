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
    image: { src: "/images/current-site/package-hoopono-banyan.jpg", alt: "Newlyweds smiling together beneath a canopy of banyan trees", focus: "center" },
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

// The six most recent five-star reviews from her WeddingWire profile, newest first. Review
// text is as written there (sign-off lines dropped); review dates are left out on purpose.
// June's review was skipped: it's from a fellow planner, not a couple.
export const reviewsSource = "https://www.weddingwire.com/reviews/zenju-weddings-and-events-of-hawaii-llc-honolulu/1c5539a87f1c926e.html";

export type Review = { name: string; title: string; text: string; photo?: string };

export const reviews: Review[] = [
  {
    name: "Rebecca",
    title: "A Beautiful and Stress Free Wedding Experience",
    text: "We loved working with Zenju Weddings. The team understood what we wanted and added thoughtful touches that made our celebration feel unique. Everything looked amazing, and the coordination on the wedding day was excellent.",
  },
  {
    name: "Katelyn",
    title: "Our Dream Wedding Came True with Zenju Weddings",
    text: "Our daughter got married in June of 2024 at Kualoa Ranch. It was a dream wedding thanks to Zenju Weddings. Yanicke Lim Sango-Washikowitz was fantastic to work with even when we were planning from Oregon. She had great ideas, kept us on track and was budget minded. She was proactive and solved problems before they happened. She made sure things ran smoothly with no disappointments. We highly recommend Yanicke and her business Zenju Weddings.",
    photo: "/images/reviews/katelyn.jpg",
  },
  {
    name: "Gina",
    title: "Wedding at Hale Koa Estate",
    text: "Yanicke and her team were absolutely amazing! They went above and beyond with everything. Everything was coordinated to a T. The vendors she recommended were all amazing. Guests couldn’t stop raving about the food and the aesthetics. Our wedding was more than we could have dreamed of. If you are planning a wedding in Oahu or any other area serviced by Zenju Weddings you absolutely need to give them a call!",
  },
  {
    name: "Maksim",
    title: "Highly Recommend",
    text: "We had the most beautiful wedding. As soon as we met Yanicke, we were captivated by her passion and commitment to bringing our vision to life. Her skillset matched her ambitious nature. As we planned our special day with her over the past year and a half, she was highly organized, always accessible, and consistently communicated with us. I was impressed with her commitment to quality and authenticity. To ensure the highest level of service, she partners with the best vendors in the industry. She always went above and beyond our expectations, made sure all the details were on point, and was transparent with the budget. Aside from planning the wedding, she recommended hotels, restaurants and activities to coordinate for our guests. On the day of wedding, she ensured that all the details were executed thoroughly, and supported throughout the day ensuring that our vision came to life. We’re grateful and fortunate to have worked with Yanicke. There aren’t enough words to describe her dedication, commitment, and passion.",
  },
  {
    name: "Melody",
    title: "Great help!",
    text: "I hired Zenju Weddings for my wedding on July 15, 2023. They were a great value for the service provided. They had zoom meetings, were there at the rehearsal, and was there on the wedding day the entire time! They helped create a timeline for our wedding. I was most impressed with how they set up my venue and helped clean up. I don’t know what I would have done without them! It made that part stress-free. The team set everything up beautifully and we’re such a help taking everything down. At the end of the wedding, everything was already in boxes so we just needed to pack the car and go! I’m thankful I had Zenju weddings for my special day.",
    photo: "/images/reviews/melody.jpg",
  },
  {
    name: "Frances",
    title: "Awesome wedding planner",
    text: "Yanicke and Shay worked so hard to make our day special. Without her our wedding wouldn’t been as memorable or magical as it was! Everything went smoothly on the day of the wedding, and even when something came up around videography Shay resolved it in 5 minutes. I didn’t need to stress! The vendors they matched us with were awesome. They knew the vision we had and they made it come to life. My guests said it was one of the best weddings they had ever been to.",
    photo: "/images/reviews/frances.jpg",
  },
];
