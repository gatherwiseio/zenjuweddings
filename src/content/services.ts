// Services & Packages page. Package copy is Yanicke's own updated package text (sent 2026-11-05),
// kept word for word apart from capitals and small typos; one item per line with an icon.
// Order is hers. Prices are the base price; every package adds 4.712% Hawaii GE tax, calculated
// here to the cent (three of her own totals were off; see BRIEF.md).
// Marriage license section: streamlined from https://www.zenjuweddingsnevents.com/marriage-license.

export type IconKey =
  | "coordination" | "permit" | "officiant" | "beauty" | "bouquet" | "crown" | "lei" | "photo" | "video"
  | "music" | "champagne" | "venue" | "arch" | "chairs" | "timeline" | "script" | "visit" | "emcee"
  | "checklist" | "rehearsal" | "staff" | "setup" | "oversee" | "registration" | "ushering" | "cleanup"
  | "gift" | "sitecheck" | "insurance" | "sound" | "consultation" | "questionnaire" | "storyboard"
  | "budget" | "quotes" | "vendorlist" | "negotiate" | "contracts" | "meetings" | "communication"
  | "facetoface" | "mailing" | "discount" | "vendors" | "tips" | "assistant" | "familyphoto" | "dj"
  | "sparks" | "lighting" | "photobooth";
export type Inclusion = { title: string; text?: string; icon: IconKey };
export type InclusionGroup = { title?: string; items: Inclusion[] };
export type Photo = { src: string; alt: string };
export type ServicePackage = {
  id: string; // anchor: /services#<id>
  name: string;
  meaning?: string; // Hawaiian name's meaning
  type: string; // short category line
  summary: string; // one line shown on the closed row
  price: number;
  popular?: boolean;
  photos: Photo[]; // shown when the package is opened: 2 or 3, all from one wedding
  overview: string;
  groups: InclusionGroup[];
  details: { title: string; text: string }[];
  closing?: string;
};

export const TAX_RATE = 0.04712;
export const TAX_RATE_LABEL = "4.712% GE tax";
/** Hawaii general excise tax on a package price, to the cent. */
export const taxFor = (price: number) => Math.round(price * TAX_RATE * 100) / 100;

const img = (file: string, alt: string): Photo => ({ src: `/images/current-site/${file}`, alt });

export const servicesPage = {
  hero: {
    label: "Services & packages",
    title: "Plan your day, your way",
    image: "/images/current-site/portfolio-20.jpg",
  },
  intro: "From an intimate barefoot beach ceremony to our all-inclusive Platinum package. Open any package to see everything it includes.",
};

export const servicePackages: ServicePackage[] = [
  {
    id: "barefoot",
    name: "Barefoot Nuptials",
    type: "Elopement\u00a0· Ceremony only",
    summary: "Perfect for couples looking to say “I do” in a serene beach setting.",
    price: 5500,
    photos: [
      img("package-barefoot-beach.jpg", "Newlyweds sharing a kiss at the water\u2019s edge on a quiet North Shore beach"),
      img("package-barefoot-closeup.jpg", "The bride and groom embracing on the rocks during their beach elopement"),
      img("package-barefoot-lei.jpg", "Green maile leaf lei laid out on a white table"),
    ],
    overview:
      "Experience the simplicity and beauty of love with our Zenju Basic Barefoot Nuptials Elopement Package. Perfect for couples looking to say “I do” in a serene beach setting!",
    groups: [
      {
        items: [
          { icon: "coordination", title: "Coordination", text: "Expert coordination to ensure your elopement ceremony runs smoothly, allowing you to relax and focus on your special moments." },
          { icon: "permit", title: "Beach permit for surrounding beaches", text: "Necessary beach permit to host your ceremony at your chosen beach location, ensuring compliance with local regulations." },
          { icon: "officiant", title: "Officiant", text: "A professional officiant to conduct your bespoke ceremony, providing a personal touch to your vows." },
          { icon: "beauty", title: "Bridal hair and makeup", text: "Professional hair and makeup services for the bride to achieve the perfect look for her special day." },
          { icon: "bouquet", title: "1 tropical bridal bouquet", text: "A vibrant tropical bouquet tailored with fresh, colorful flowers to complement the bride’s style." },
          { icon: "crown", title: "1 tropical bridal crown (haku)", text: "A beautiful floral crown crafted from tropical flowers, adding a unique and elegant touch to the bride’s look." },
          { icon: "lei", title: "1 groom maile lei", text: "A traditional Hawaiian maile lei for the groom, symbolizing love and honor during the ceremony." },
          { icon: "photo", title: "2 hours of photography", text: "Professional photography service to capture meaningful moments during your elopement, providing beautiful and lasting memories." },
          { icon: "video", title: "2 hours of videography (including drone footage)", text: "Comprehensive videography to document your special day, featuring aerial drone footage for stunning perspectives." },
          { icon: "music", title: "1 hour ukulele singer", text: "A talented ukulele musician to create a romantic atmosphere with live music during your ceremony." },
          { icon: "champagne", title: "1 bottle of champagne + 2 champagne glasses", text: "A bottle of bubbly for you to celebrate your love, complete with two engraved champagne glasses for a special toast." },
        ],
      },
    ],
    details: [
      { title: "Duration", text: "The package includes all services to cover an intimate elopement ceremony." },
      { title: "Personalization", text: "While the elements of the package are fixed, we’ll work closely with you to ensure your ceremony reflects your vision." },
      { title: "Booking", text: "A deposit will be required to secure your date, with the remaining balance due prior to the event." },
    ],
  },
  {
    id: "elopement",
    name: "All Inclusive Elopement",
    type: "Elopement\u00a0· Ceremony\u00a0+ 2-hour photoshoot",
    summary: "An intimate and unforgettable oceanfront ceremony, with everything included.",
    price: 8750,
    photos: [
      img("package-elopement-kualoa-ceremony.jpg", "Two grooms in maile lei walking back up the aisle at Kualoa Ranch, guests cheering"),
      img("package-elopement-kualoa-couple.jpg", "The grooms walking hand in hand below the Kualoa Ranch cliffs"),
      img("package-elopement-kualoa-chairs.jpg", "Cross-back ceremony chairs with white aisle florals at Kualoa Ranch"),
    ],
    overview:
      "Celebrate your love with our Zenju Elopement Package, designed for those who want an intimate and unforgettable ceremony!",
    groups: [
      {
        items: [
          { icon: "coordination", title: "Coordination", text: "Professional coordination to assist with the planning and execution of your elopement ceremony, ensuring a smooth and stress-free experience." },
          { icon: "venue", title: "2-hour oceanfront venue", text: "Exclusive access to a beautiful oceanfront location for your ceremony, allowing for breathtaking views and a romantic setting." },
          { icon: "beauty", title: "Bridal hair and makeup", text: "Professional hair and makeup services for the bride to ensure she looks and feels her best on her special day." },
          { icon: "bouquet", title: "Bridal tropical bouquet", text: "A stunning tropical bouquet designed with fresh tropical flowers, personalized to suit your style." },
          { icon: "crown", title: "Bridal tropical floral crown (haku)", text: "A beautiful floral crown made from tropical flowers, providing a unique and elegant accessory for the bride." },
          { icon: "lei", title: "Groom maile lei", text: "A traditional Hawaiian maile lei for the groom, symbolizing love and respect." },
          { icon: "photo", title: "2 hours of photography", text: "Professional photography capturing the intimate moments of your elopement, with both candid and posed shots." },
          { icon: "video", title: "2 hours of videography + drone", text: "Comprehensive videography service to beautifully document your special day, creating lasting memories in motion, featuring aerial drone footage for stunning perspectives." },
          { icon: "officiant", title: "Hawaiian kumu (officiant)", text: "A licensed Hawaiian kumu to conduct your ceremony, offering a personalized and culturally significant experience." },
          { icon: "arch", title: "1 arch", text: "A beautifully designed arch to enhance your ceremony setting, creating a picturesque backdrop for your vows." },
          { icon: "bouquet", title: "Tropical floral arch", text: "An arch adorned with vibrant tropical flowers, adding a stunning focal point to your ceremony." },
          { icon: "chairs", title: "20 white resin chairs", text: "Comfortable seating for you and your guests during the ceremony, ensuring everyone can enjoy the moment: 20 persons maximum." },
          { icon: "music", title: "1 hour ukulele singer", text: "A talented ukulele musician to serenade you and your guests during the ceremony, creating a lovely atmosphere." },
          { icon: "champagne", title: "A bottle of champagne", text: "A complimentary bottle of champagne with 2 wine glasses to toast to your new beginning." },
        ],
      },
    ],
    details: [
      { title: "Personalization", text: "While the components of this package are fixed, we provide planning sessions to ensure your elopement reflects your unique vision and style." },
      { title: "Booking", text: "A deposit will be required to secure your date, with the balance due before the event." },
    ],
  },
  {
    id: "hoopono",
    name: "Hoʻopono",
    meaning: "Faithful",
    type: "Day-of coordination",
    summary: "Day-of management for your wedding, with no planning leading up.",
    price: 2900,
    photos: [
      img("package-hoopono-chapel-ceremony.jpg", "A bride and groom exchanging vows at the altar with their bridal party"),
      img("package-hoopono-chapel-tower.jpg", "The couple sharing a kiss on the lawn beneath a white chapel tower"),
      img("package-hoopono-banyan-couple.jpg", "The newlyweds standing together in a banyan grove"),
    ],
    overview:
      "Hoʻopono means faithful in Hawaiian. This exclusive package is for the couple who wants the day of coordination only. It covers just the day-of coordination, with no planning leading up to the event and no wholesale vendor discounts.",
    groups: [
      {
        items: [
          { icon: "timeline", title: "Timeline creation", text: "A detailed schedule to ensure your event runs smoothly." },
          { icon: "script", title: "Script for the emcee", text: "A personalized script to guide your event’s flow and highlight key moments." },
          { icon: "visit", title: "1 site visit", text: "A walkthrough of the event location to familiarize our team with the venue layout." },
          { icon: "emcee", title: "Cue the emcee", text: "Coordination of all announcements and speeches on the day of the event." },
          { icon: "checklist", title: "30-day checklist", text: "A comprehensive checklist to help you stay organized and on track leading up to your event." },
          { icon: "rehearsal", title: "Rehearsal", text: "A rehearsal session to ensure everyone knows their roles and schedules." },
          { icon: "staff", title: "Full Zenju staff on event day", text: "A dedicated team, including the Lead Coordinator, to manage every aspect of your event." },
          { icon: "setup", title: "Set up", text: "Coordination and oversight of event setup to achieve your vision." },
          { icon: "script", title: "Script review with the emcee", text: "Final review of the script with the emcee to ensure smooth transitions and engagement." },
          { icon: "oversee", title: "Vendor oversight", text: "Management of all vendors on the day of the event to ensure they fulfill their roles correctly." },
          { icon: "registration", title: "Registration assistance", text: "Support for guest registration to ensure a seamless check-in process." },
          { icon: "ushering", title: "Guest ushering", text: "Guiding guests to their seats or designated areas for a smooth experience." },
          { icon: "cleanup", title: "Clean up", text: "Full clean-up service post-event to leave the venue in pristine condition." },
          { icon: "gift", title: "Decor and gift table pack-up", text: "Management of gift table decor and packing up items after the event concludes." },
          { icon: "sitecheck", title: "Site check", text: "Final site inspection to ensure all aspects meet expectations before departure." },
          { icon: "insurance", title: "$2,500,000.00 insurance liability", text: "Comprehensive liability coverage for peace of mind." },
          { icon: "sound", title: "Sound check with DJ/musician", text: "Coordination and sound checks with your DJ or musician to ensure optimal audio quality." },
        ],
      },
    ],
    details: [
      { title: "Planning", text: "Day-of management only: no planning leading up to the event and no wholesale vendor discounts." },
      { title: "Booking", text: "Ready to make your event a success? Reach out to us for more details or to book the Hoʻopono Day of Coordination Package." },
    ],
  },
  {
    id: "i-ke-aloha",
    name: "I Ke Aloha",
    meaning: "In love",
    type: "Partial coordination",
    summary: "You plan hands-on, and our team steps in once your venue and three vendors are set.",
    price: 4800,
    photos: [
      img("package-ikealoha-golf-bridge.jpg", "Newlyweds on a wooden bridge in the greenery at the Royal Hawaiian Golf Club"),
      img("package-ikealoha-golf-table.jpg", "A cocktail table with a single bud vase in front of green mountains"),
    ],
    overview:
      "The I Ke Aloha Package, meaning “In Love” in Hawaiian, is crafted for couples who prefer a hands-on approach to their wedding planning but desire professional support as the big day approaches. Our Zenju team steps in once the venue is secured with a deposit and three additional vendors are confirmed. This package allows you to enjoy the planning process while ensuring all essential details are expertly managed.",
    groups: [
      {
        title: "Initial consultation",
        items: [
          { icon: "consultation", title: "1 hour consultation", text: "Discuss your vision and requirements in detail." },
          { icon: "questionnaire", title: "Questionnaire", text: "Capture your preferences, style, and key details for your wedding." },
        ],
      },
      {
        title: "Planning & coordination",
        items: [
          { icon: "storyboard", title: "Storyboard design", text: "Advisory service only; no actual design included." },
          { icon: "budget", title: "Budget analysis advice", text: "Review and provide insights on your budget needs." },
          { icon: "quotes", title: "Vendor quotes", text: "Help in obtaining and evaluating quotes from potential vendors." },
          { icon: "vendorlist", title: "Preferred vendor list", text: "A curated list of recommended vendors to assist in making informed choices." },
        ],
      },
      {
        title: "Vendor coordination",
        items: [
          { icon: "negotiate", title: "Negotiate with vendors", text: "We’ll handle negotiations to get the best deals and ensure all needs are met." },
          { icon: "contracts", title: "Coordinate contracts and payments", text: "Take care of contract management and payment scheduling with your selected vendors." },
          { icon: "meetings", title: "Schedule and attend all vendor meetings", text: "Manage communication and coordination to keep all parties aligned." },
        ],
      },
      {
        title: "Communication",
        items: [
          { icon: "communication", title: "Unlimited emails, calls & Zoom meetings", text: "Maintain open communication leading up to the wedding." },
          { icon: "facetoface", title: "Unlimited face-to-face meetings", text: "Available with a 2-week advance notice to ensure smooth planning." },
        ],
      },
      {
        title: "Day-of coordination",
        items: [
          { icon: "staff", title: "A full Zenju staff on the day of the wedding", text: "Including the Lead Coordinator to ensure seamless execution." },
          { icon: "setup", title: "Set up", text: "Manage the arrangement of all decor and vendor elements." },
          { icon: "oversee", title: "Vendor coordination on wedding day", text: "Oversee all vendors to adhere to timelines and ensure everything runs smoothly." },
          { icon: "sound", title: "Sound check", text: "Ensure coordination with the DJ/musician prior to the event." },
          { icon: "script", title: "Timeline & script for the emcee", text: "Facilitate a smooth flow of announcements and activities." },
          { icon: "ushering", title: "Registration & ushering of guests", text: "Professionally manage guest arrival and seating." },
        ],
      },
      {
        title: "Rehearsal coordination",
        items: [
          { icon: "rehearsal", title: "Rehearsal leadership", text: "Organize and lead the rehearsal to ensure that the couple and the bridal party are confident and prepared for the ceremony." },
        ],
      },
      {
        title: "Pre-event preparations",
        items: [
          { icon: "checklist", title: "30-day checklist", text: "A comprehensive list to keep final preparations on track." },
          { icon: "visit", title: "Site visit", text: "One on-site visit to assess layout and logistics." },
          { icon: "mailing", title: "Mailing options", text: "Convenient package sending to your coordinator, eliminating the need for travel with items." },
        ],
      },
      {
        title: "Post-event services",
        items: [
          { icon: "cleanup", title: "Clean up", text: "Manage the breakdown and packing up of all decor and items, including the gift table." },
          { icon: "sitecheck", title: "Site check", text: "Ensure the venue is left in pristine condition as the last ones to leave." },
        ],
      },
      {
        title: "Insurance coverage",
        items: [{ icon: "insurance", title: "$2,500,000.00 insurance liability coverage", text: "Provides peace of mind for your special day." }],
      },
    ],
    details: [
      { title: "Payment options", text: "Flexible payment plans available for your convenience." },
      { title: "Booking process", text: "A deposit is required upon confirmation to secure your wedding date." },
    ],
    closing:
      "Let the I Ke Aloha Partial Coordination Package give you the best of both worlds: your personal touch with the reassurance of professional support.",
  },
  {
    id: "kuulei",
    name: "Kuʻu Lei",
    meaning: "Beloved",
    type: "Full coordination",
    summary: "All the logistics from the moment your date is set, with our team every step of the way.",
    price: 7500,
    popular: true,
    photos: [
      img("package-kuulei-garden-ceremony.jpg", "A garden ceremony set with a draped white canopy, white chairs and tropical plantings"),
      img("package-kuulei-centerpiece.jpg", "A reception centerpiece of white orchids and monstera leaves on a set table"),
      img("package-kuulei-cake-florals.jpg", "A white tiered wedding cake surrounded by lush white and green florals"),
    ],
    overview:
      "The Kuʻu Lei package, meaning “Beloved” in Hawaiian, is our most popular option for couples looking for comprehensive wedding planning support. This full coordination service is designed for couples who want to enjoy the planning process without the stress, allowing them to focus on the excitement of their upcoming day. This package covers all logistics from the moment the wedding date is set, with the Zenju team working alongside you every step of the way.",
    groups: [
      {
        title: "Initial consultation",
        items: [
          { icon: "consultation", title: "1 hour complimentary consultation", text: "An opportunity to discuss your vision, preferences, and expectations." },
          { icon: "questionnaire", title: "Questionnaire", text: "Helps us capture your unique style and preferences for your special day." },
        ],
      },
      {
        title: "Planning & coordination",
        items: [
          { icon: "storyboard", title: "Storyboard design", text: "Visual layout of the wedding theme and logistics." },
          { icon: "communication", title: "Unlimited emails, calls & Zoom meetings", text: "Ongoing communication to discuss plans, updates, and any concerns." },
          { icon: "facetoface", title: "Unlimited face-to-face meetings", text: "Scheduled in advance for personalized consultations." },
          { icon: "budget", title: "Quotes & budget planning", text: "Create a comprehensive budget plan with detailed analysis and guidance." },
          { icon: "discount", title: "Wholesale vendor discounts", text: "Access to exclusive discounts through our preferred vendors." },
          { icon: "vendorlist", title: "Preferred vendor list", text: "Handpicked recommendations for reliable vendors." },
          { icon: "vendors", title: "Vendor coordination", text: "We act as the main contact for all vendors, ensuring clear communication and adherence to timelines." },
          { icon: "meetings", title: "Schedule and attend all vendor meetings", text: "Participate in all necessary meetings to keep everything on track." },
          { icon: "mailing", title: "Mailing options for packages", text: "Convenient sending to your coordinator to avoid travel with items." },
        ],
      },
      {
        title: "Day-of coordination",
        items: [
          { icon: "timeline", title: "Timeline development", text: "A detailed schedule to ensure everything proceeds smoothly on the wedding day." },
          { icon: "tips", title: "Vendor tip sheet", text: "Guidance on gratuities and appreciation for vendors." },
          { icon: "script", title: "Script for the emcee", text: "Customized script with cues for all announcements." },
          { icon: "emcee", title: "Cue the emcee for announcements", text: "Ensure all messages are delivered smoothly during the event." },
          { icon: "staff", title: "A full Zenju staff on the day of the wedding", text: "Including a Lead Coordinator and additional team members for seamless execution." },
          { icon: "assistant", title: "Personal assistant during getting ready", text: "Support for the bride and bridal party while preparing for the ceremony." },
          { icon: "setup", title: "Layout design & set up", text: "Manage the setup of decor in line with the storyboard." },
          { icon: "oversee", title: "Oversee all vendors on the day", text: "Ensure each vendor adheres to the agreed schedule and execution plan." },
          { icon: "sound", title: "Sound check with the DJ/musician", text: "Confirm audio elements are functioning and coordinated prior to the ceremony." },
          { icon: "ushering", title: "Registration & ushering guests", text: "Smooth guest arrival and seating process." },
          { icon: "familyphoto", title: "Family photo coordination", text: "Organize family photos to ensure timely participation." },
          { icon: "music", title: "Cue the DJ on music", text: "Manage music transitions during various segments of the event." },
        ],
      },
      {
        title: "Post-event services",
        items: [
          { icon: "cleanup", title: "Breakdown & clean up", text: "Handle the dismantling of decor and packing up the gift table." },
          { icon: "sitecheck", title: "Site check / last ones to leave", text: "Ensure the venue is left in pristine condition." },
          { icon: "insurance", title: "$2,500,000.00 insurance liability coverage", text: "To provide peace of mind on your special day." },
        ],
      },
    ],
    details: [
      { title: "Payment options", text: "Flexible payment plans are available for your convenience." },
      { title: "Booking process", text: "A deposit is required upon signing the service agreement to secure your wedding date." },
    ],
    closing:
      "Let the Kuʻu Lei Full Coordination Package turn your wedding dreams into reality, allowing you to sit back and enjoy every moment.",
  },
  {
    id: "platinum",
    name: "Zenju Platinum",
    type: "All-inclusive\u00a0· Full coordination",
    summary: "Full coordination with DJ, emcee, cold sparks, uplighting, photobooth and photography.",
    price: 15000,
    photos: [
      img("package-platinum-dancing.jpg", "A hula dancer performing under string lights as guests watch an evening reception"),
      img("package-platinum-couple.jpg", "Newlyweds in traditional Indian wedding attire walking through the garden"),
      img("package-platinum-mandap.jpg", "A floral ceremony canopy draped in white with roses and tropical greenery"),
    ],
    overview:
      "Our Zenju All-Inclusive Platinum Package brings together full coordination, entertainment, lighting, an officiant, a photobooth and 6 hours of photography.",
    groups: [
      {
        items: [
          { icon: "coordination", title: "Full coordination", text: "Complete event planning: overall management and design from start to finish to ensure a seamless experience." },
          { icon: "dj", title: "DJ services", text: "Experienced DJ to provide music tailored to your taste, including a variety of genres and personalized playlists." },
          { icon: "emcee", title: "Emcee services", text: "Professional emcee to host your event, ensuring smooth transitions and engaging entertainment." },
          { icon: "sparks", title: "Cold sparks", text: "Stunning cold spark fountains for a captivating and safe way to enhance your special moments, such as the grand entrance or first dance." },
          { icon: "lighting", title: "Uplighting", text: "Ambient uplighting to set the mood, with customizable colors to match your theme and enhance the venue’s décor." },
          { icon: "officiant", title: "Officiant services", text: "Licensed officiant to conduct your ceremony, providing personalized vows and a special touch to your nuptials." },
          { icon: "photobooth", title: "Photobooth", text: "Fun photobooth experience with props, backdrops, and instant printouts for guests to take home as memorable keepsakes." },
          { icon: "photo", title: "6 hours of photography", text: "Professional photography service capturing beautiful moments throughout your event, including candid shots and posed portraits." },
        ],
      },
    ],
    details: [
      { title: "Duration", text: "This package includes services for a total of 6 hours of coverage, with additional hours available upon request." },
      { title: "Customization", text: "While the elements of this package are fixed, we ensure your experience is tailored to your unique vision through planning sessions and consultations." },
      { title: "Booking", text: "A deposit will be required to secure your date, with the balance due prior to the event." },
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
