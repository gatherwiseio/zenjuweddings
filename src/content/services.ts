// Services & Packages page. Package copy is Yanicke's updated package text (sent 2026-11-05),
// lightly tidied for reading (spelling, consistent capitals, shorter lines); nothing added.
// Order is hers. Prices are the base price; every package adds 4.712% Hawaii GE tax.
// Marriage license section: streamlined from https://www.zenjuweddingsnevents.com/marriage-license.

export type Inclusion = { title: string; text?: string };
export type InclusionGroup = { title?: string; items: Inclusion[] };
export type ServicePackage = {
  id: string; // anchor: /services#<id>
  name: string;
  meaning?: string; // Hawaiian name's meaning
  type: string; // short category line
  summary: string; // one line shown on the closed row
  price: number;
  popular?: boolean;
  overview: string;
  groups: InclusionGroup[];
  details: { title: string; text: string }[];
};

export const TAX_RATE_LABEL = "4.712% Hawaii GE tax";

export const servicesPage = {
  hero: {
    label: "Services & packages",
    title: "Plan your day, your way",
    image: "/images/current-site/portfolio-20.jpg",
  },
  intro:
    "Six ways to celebrate with Zenju, from an intimate barefoot beach ceremony to our all-inclusive platinum package. Open any package to see everything it includes.",
};

export const servicePackages: ServicePackage[] = [
  {
    id: "barefoot",
    name: "Barefoot Nuptials",
    type: "Elopement · Ceremony only",
    summary: "A serene beach ceremony with photography, video and live ukulele.",
    price: 5500,
    overview:
      "Experience the simplicity and beauty of love with our Basic Barefoot Nuptials elopement package, perfect for couples looking to say “I do” in a serene beach setting.",
    groups: [
      {
        items: [
          { title: "Coordination", text: "Expert coordination so your ceremony runs smoothly, letting you relax and focus on your special moments." },
          { title: "Beach permit", text: "The permit needed for your ceremony at your chosen nearby beach, in line with local regulations." },
          { title: "Officiant", text: "A professional officiant to conduct your bespoke ceremony, with a personal touch to your vows." },
          { title: "Bridal hair and makeup", text: "Professional hair and makeup so the bride has the perfect look for her day." },
          { title: "Tropical bridal bouquet", text: "A vibrant bouquet of fresh, colorful tropical flowers to complement the bride’s style." },
          { title: "Tropical bridal crown (haku)", text: "A floral crown of tropical flowers, adding a unique and elegant touch." },
          { title: "Groom’s maile lei", text: "A traditional Hawaiian maile lei, symbolizing love and honor during the ceremony." },
          { title: "2 hours of photography", text: "Meaningful moments of your elopement captured as beautiful, lasting memories." },
          { title: "2 hours of videography, with drone", text: "Your day documented on film, including aerial drone footage." },
          { title: "1 hour ukulele singer", text: "Live music for a romantic atmosphere during your ceremony." },
          { title: "Champagne for two", text: "A bottle of bubbly with two engraved champagne glasses for your toast." },
        ],
      },
    ],
    details: [
      { title: "Duration", text: "Everything needed for an intimate elopement ceremony." },
      { title: "Personalization", text: "The elements of the package are fixed, and we work closely with you so your ceremony reflects your vision." },
      { title: "Booking", text: "A deposit secures your date, with the balance due before the event." },
    ],
  },
  {
    id: "elopement",
    name: "All Inclusive Elopement",
    type: "Elopement · Ceremony and 2-hour photoshoot",
    summary: "An oceanfront ceremony for up to 20 guests, with everything included.",
    price: 8750,
    overview:
      "Celebrate your love with our All Inclusive Elopement Package, designed for couples who want an intimate and unforgettable ceremony.",
    groups: [
      {
        items: [
          { title: "Coordination", text: "Professional help planning and running your elopement ceremony, for a smooth, stress-free experience." },
          { title: "2-hour oceanfront venue", text: "Exclusive use of a beautiful oceanfront location, with breathtaking views and a romantic setting." },
          { title: "Bridal hair and makeup", text: "Professional hair and makeup so the bride looks and feels her best." },
          { title: "Bridal tropical bouquet", text: "A stunning bouquet of fresh tropical flowers, personalized to your style." },
          { title: "Bridal tropical floral crown (haku)", text: "A floral crown of tropical flowers, a unique and elegant accessory for the bride." },
          { title: "Groom’s maile lei", text: "A traditional Hawaiian maile lei, symbolizing love and respect." },
          { title: "2 hours of photography", text: "The intimate moments of your elopement, in candid and posed shots." },
          { title: "2 hours of videography, with drone", text: "Your day in motion, including aerial drone footage." },
          { title: "Hawaiian kumu (officiant)", text: "A licensed Hawaiian kumu for a personalized and culturally meaningful ceremony." },
          { title: "Ceremony arch", text: "A beautifully designed arch as a picturesque backdrop for your vows." },
          { title: "Tropical floral arch", text: "An arch adorned with vibrant tropical flowers as the focal point of your ceremony." },
          { title: "20 white resin chairs", text: "Seating for you and your guests during the ceremony (20 guests maximum)." },
          { title: "1 hour ukulele singer", text: "A talented ukulele musician to serenade you and your guests." },
          { title: "A bottle of champagne", text: "With two glasses, to toast your new beginning." },
        ],
      },
    ],
    details: [
      { title: "Personalization", text: "The components of the package are fixed, and our planning sessions make sure your elopement reflects your vision and style." },
      { title: "Booking", text: "A deposit secures your date, with the balance due before the event." },
    ],
  },
  {
    id: "hoopono",
    name: "Hoʻopono",
    meaning: "Faithful",
    type: "Day-of coordination",
    summary: "For couples who have planned it themselves and want the day taken care of.",
    price: 2900,
    overview:
      "Hoʻopono means “faithful” in Hawaiian. This package is for couples who want day-of coordination only: it covers the day itself, with no planning leading up to the event and no wholesale vendor discounts.",
    groups: [
      {
        title: "Before the day",
        items: [
          { title: "Timeline creation", text: "A detailed schedule so your event runs smoothly." },
          { title: "Script for the emcee", text: "A personalized script to guide the flow of your event and highlight key moments." },
          { title: "1 site visit", text: "A walkthrough so our team knows the venue layout." },
          { title: "30-day checklist", text: "Keeps you organized and on track in the final month." },
          { title: "Rehearsal", text: "So everyone knows their roles and the schedule." },
        ],
      },
      {
        title: "On the day",
        items: [
          { title: "A full Zenju staff", text: "A dedicated team, including the Lead Coordinator, managing every aspect of your event." },
          { title: "Set up", text: "Coordination and oversight of the setup to achieve your vision." },
          { title: "Script review with the emcee", text: "A final run-through for smooth transitions." },
          { title: "Cueing the emcee", text: "Coordination of all announcements and speeches." },
          { title: "Vendor oversight", text: "Managing every vendor so each fulfills their role correctly." },
          { title: "Sound check with your DJ or musician", text: "So the audio is right before you begin." },
          { title: "Guest registration and ushering", text: "A seamless check-in, and guests guided to their seats." },
        ],
      },
      {
        title: "After",
        items: [
          { title: "Clean up", text: "Leaving the venue in pristine condition." },
          { title: "Gift table and decor pack-up", text: "Everything packed up after the event." },
          { title: "Site check", text: "A final inspection before we leave." },
        ],
      },
      { title: "Coverage", items: [{ title: "$2,500,000 liability insurance", text: "For peace of mind." }] },
    ],
    details: [{ title: "Booking", text: "Reach out to book Hoʻopono day-of coordination or for more details." }],
  },
  {
    id: "i-ke-aloha",
    name: "I Ke Aloha",
    meaning: "In love",
    type: "Partial coordination",
    summary: "You plan, and we step in once your venue and three vendors are booked.",
    price: 4800,
    overview:
      "I Ke Aloha, meaning “in love” in Hawaiian, is for couples who prefer a hands-on approach to planning but want professional support as the big day approaches. Our team steps in once your venue is secured with a deposit and three more vendors are confirmed, so you enjoy the planning while every essential detail is expertly managed.",
    groups: [
      {
        title: "Initial consultation",
        items: [
          { title: "1 hour consultation", text: "Discuss your vision and requirements in detail." },
          { title: "Questionnaire", text: "Captures your preferences, style and key details." },
        ],
      },
      {
        title: "Planning and coordination",
        items: [
          { title: "Storyboard design advice", text: "Advisory only; no design included." },
          { title: "Budget analysis advice", text: "A review of your budget, with insights." },
          { title: "Vendor quotes", text: "Help getting and comparing quotes." },
          { title: "Preferred vendor list", text: "Curated recommendations to help you choose." },
        ],
      },
      {
        title: "Vendor coordination",
        items: [
          { title: "Vendor negotiation", text: "We negotiate for the best deals and make sure all your needs are met." },
          { title: "Contracts and payments", text: "Contract management and payment scheduling with your vendors." },
          { title: "All vendor meetings", text: "Scheduled and attended by us, keeping everyone aligned." },
        ],
      },
      {
        title: "Communication",
        items: [
          { title: "Unlimited emails, calls and Zoom meetings", text: "Open communication up to the wedding." },
          { title: "Unlimited face-to-face meetings", text: "With two weeks’ notice." },
        ],
      },
      {
        title: "Before the day",
        items: [
          { title: "30-day checklist", text: "Keeps final preparations on track." },
          { title: "1 site visit", text: "To assess layout and logistics." },
          { title: "Rehearsal", text: "Led by us, so you and your bridal party feel confident and prepared." },
          { title: "Mailing options", text: "Send packages to your coordinator instead of traveling with them." },
        ],
      },
      {
        title: "On the day",
        items: [
          { title: "A full Zenju staff", text: "Including the Lead Coordinator, for seamless execution." },
          { title: "Set up", text: "All decor and vendor elements arranged." },
          { title: "Vendor coordination", text: "Every vendor kept to the timeline." },
          { title: "Sound check", text: "With your DJ or musician before the event." },
          { title: "Timeline and emcee script", text: "A smooth flow of announcements and activities." },
          { title: "Guest registration and ushering", text: "Guest arrival and seating, professionally managed." },
        ],
      },
      {
        title: "After",
        items: [
          { title: "Clean up", text: "Breakdown and packing of all decor and items, including the gift table." },
          { title: "Site check", text: "We’re the last to leave, with the venue in pristine condition." },
        ],
      },
      { title: "Coverage", items: [{ title: "$2,500,000 liability insurance", text: "For peace of mind on your day." }] },
    ],
    details: [
      { title: "Payment", text: "Flexible payment plans are available." },
      { title: "Booking", text: "A deposit on confirmation secures your wedding date." },
    ],
  },
  {
    id: "kuulei",
    name: "Kuʻu Lei",
    meaning: "Beloved",
    type: "Full coordination",
    summary: "Full planning from the day your date is set, with our team every step of the way.",
    price: 7500,
    popular: true,
    overview:
      "Kuʻu Lei, meaning “beloved” in Hawaiian, is our most popular package, for couples who want to enjoy planning without the stress. It covers every logistic from the moment your date is set, with the Zenju team beside you every step of the way.",
    groups: [
      {
        title: "Initial consultation",
        items: [
          { title: "1 hour complimentary consultation", text: "Talk through your vision, preferences and expectations." },
          { title: "Questionnaire", text: "Captures your unique style and preferences." },
        ],
      },
      {
        title: "Planning and coordination",
        items: [
          { title: "Storyboard design", text: "A visual layout of your theme and logistics." },
          { title: "Unlimited emails, calls and Zoom meetings", text: "Ongoing communication about plans, updates and any concerns." },
          { title: "Unlimited face-to-face meetings", text: "Scheduled in advance." },
          { title: "Quotes and budget planning", text: "A comprehensive budget plan with detailed analysis and guidance." },
          { title: "Wholesale vendor discounts", text: "Exclusive discounts through our preferred vendors." },
          { title: "Preferred vendor list", text: "Handpicked, reliable recommendations." },
          { title: "Vendor coordination", text: "We’re the main contact for every vendor, keeping communication clear and timelines on track." },
          { title: "All vendor meetings", text: "Scheduled and attended by us." },
          { title: "Mailing options", text: "Send packages to your coordinator instead of traveling with them." },
        ],
      },
      {
        title: "On the day",
        items: [
          { title: "Timeline", text: "A detailed schedule so everything runs smoothly." },
          { title: "Vendor tip sheet", text: "Guidance on gratuities for your vendors." },
          { title: "Emcee script and cues", text: "A customized script, and every announcement cued." },
          { title: "A full Zenju staff", text: "A Lead Coordinator and additional team members." },
          { title: "Personal assistant while getting ready", text: "Support for the bride and bridal party." },
          { title: "Layout design and set up", text: "Decor set up in line with your storyboard." },
          { title: "Vendor oversight", text: "Every vendor kept to the agreed schedule and plan." },
          { title: "Sound check with your DJ or musician", text: "Audio confirmed before the ceremony." },
          { title: "Guest registration and ushering", text: "A smooth arrival and seating." },
          { title: "Family photo coordination", text: "Everyone in place on time." },
          { title: "Music cues for the DJ", text: "Transitions managed through each part of the event." },
        ],
      },
      {
        title: "After",
        items: [
          { title: "Breakdown and clean up", text: "Decor dismantled and the gift table packed up." },
          { title: "Site check", text: "We’re the last to leave, with the venue in pristine condition." },
          { title: "$2,500,000 liability insurance", text: "For peace of mind on your day." },
        ],
      },
    ],
    details: [
      { title: "Payment", text: "Flexible payment plans are available." },
      { title: "Booking", text: "A deposit on signing the service agreement secures your wedding date." },
    ],
  },
  {
    id: "platinum",
    name: "Zenju Platinum",
    type: "All-inclusive · Full coordination",
    summary: "Full coordination with DJ, emcee, lighting, photobooth and 6 hours of photography.",
    price: 15000,
    overview:
      "Our all-inclusive platinum package brings full coordination together with entertainment, lighting and photography, with 6 hours of coverage on the day.",
    groups: [
      {
        items: [
          { title: "Full coordination", text: "Complete planning, management and design from start to finish, for a seamless experience." },
          { title: "DJ services", text: "An experienced DJ with music tailored to your taste, across genres and personalized playlists." },
          { title: "Emcee services", text: "A professional emcee to host your event, with smooth transitions and engaging entertainment." },
          { title: "Cold sparks", text: "Cold spark fountains, a captivating and safe way to mark moments like your grand entrance or first dance." },
          { title: "Uplighting", text: "Ambient uplighting in colors to match your theme and enhance the venue’s decor." },
          { title: "Officiant services", text: "A licensed officiant for your ceremony, with personalized vows." },
          { title: "Photobooth", text: "Props, backdrops and instant prints for guests to take home as keepsakes." },
          { title: "6 hours of photography", text: "Candid shots and posed portraits throughout your event." },
        ],
      },
    ],
    details: [
      { title: "Duration", text: "6 hours of coverage in total, with additional hours available on request." },
      { title: "Customization", text: "The elements are fixed, and our planning sessions and consultations tailor the experience to your vision." },
      { title: "Booking", text: "A deposit secures your date, with the balance due before the event." },
    ],
  },
];

export const marriageLicense = {
  title: "Marriage license",
  label: "Getting married in Hawaii",
  intro: "A Hawaii marriage license is quick to get. Here’s what to know before you apply.",
  points: [
    "Both partners apply together and appear in person before a marriage license agent.",
    "The license is issued as soon as the application is accepted, and it’s valid anywhere in the state.",
    "It expires 30 days after it’s issued, counting the day of issue.",
    "Bring a photo ID or driver’s license as proof of age.",
    "If either of you was divorced or widowed within the last 30 days, bring the original divorce decree or death certificate. Fax copies aren’t accepted.",
    "No blood test is required. Partners can be no more closely related than first cousins.",
  ],
  fees: "$60 license fee plus a $5 processing fee, paid online by card when you complete the application.",
  applyUrl: "https://emrs.ehawaii.gov/emrs/public/home.html",
  note: "Requirements are set by the State of Hawaii and can change, so check the official site before you apply.",
};
