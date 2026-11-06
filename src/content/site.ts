// Site copy and data. Source: content/current-site.md (Yanicke's current site), tidied.

// The live address (her domain, moving here from Wix). Used for canonical links, the sitemap,
// share images and the business details Google reads, so it's set even before the domain is
// connected: the vercel.app copy then never competes with it in search.
export const siteUrl = "https://www.zenjuweddingsnevents.com";
export const businessName = "Zenju Weddings and Events"; // how titles and share text name her

export const contact = {
  email: "info@zenjuweddingsnevents.com",
  phone: "(808) 840-7404",
  phoneHref: "tel:+18088407404",
  fax: "415-520-9729", // from her current site
  address: ["1050 Bishop Street, Suite 450", "Honolulu, HI 96813"],
  legalName: "Zenju Weddings and Events of Hawaii, LLC",
  facebook: "https://www.facebook.com/ZenjuWeddings", // from the footer of her current site
  instagram: "https://www.instagram.com/zenjuweddings_yanicke/", // given by the client
};

// Pages marked live are clickable in the menu and links; the rest show but aren't clickable yet.
export const pages = [
  { label: "Home", href: "/", live: true },
  { label: "About Us", href: "/about", live: true },
  { label: "Services & Packages", href: "/services", live: true },
  { label: "Preferred Vendors", href: "/vendors", live: true },
  { label: "Gallery", href: "/gallery", live: true },
  { label: "Contact Us", href: "/contact", live: true },
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

// "Find us on Zola" badge, from the embed code Zola gives vendors (supplied by the client).
export const zolaBadge = {
  href: "https://www.zola.com/wedding-vendors/wedding-planners/zenju-weddings-and-events-of-hawaii-llc?utm_source=vendor&utm_medium=various&utm_content=badge",
  image: "https://d1tntvpcrzvon2.cloudfront.net/static-assets/images/badges/featured_on_zola_v3.png",
  script: "https://d1tntvpcrzvon2.cloudfront.net/static-assets/js/marketplace/zolaVendorBadge.js",
};

// The six most recent five-star reviews from her WeddingWire profile, newest first. Review
// text is as written there (sign-off lines dropped); review dates are left out on purpose.
// June's review was skipped: it's from a fellow planner, not a couple. The site doesn't name
// the source. Source: https://www.weddingwire.com/reviews/zenju-weddings-and-events-of-hawaii-llc-honolulu/1c5539a87f1c926e.html

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
