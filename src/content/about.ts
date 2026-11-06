// About Us / The Team page. Streamlined from her "Our story" page
// (https://www.zenjuweddingsnevents.com/about-5): the same facts in shorter, easier paragraphs;
// nothing added that isn't on her site. Her spelling ("colour") is kept.
import aboutHero from "../../public/images/current-site/portfolio-05.jpg"; // imported, so the banner gets a blurred preview while it loads

export const aboutPage = {
  hero: {
    label: "About us",
    title: "The story behind the vision",
    image: aboutHero,
  },

  statement: "Zenju Weddings and Events of Hawaii was founded in 2010 by Yanicke Lim Sang, and named after her two sons, Zen and Jude.",

  founder: {
    title: "Meet Yanicke",
    label: "Founder",
    portrait: "/images/current-site/yanicke-portrait-glasses.jpg", // different photo from the homepage
    portraitAlt: "Yanicke Lim Sang, founder of Zenju Weddings, smiling in black glasses and a polka-dot blouse",
    // Written for couples deciding whether to hire her: each paragraph ties her background to
    // what it means for their day. Facts are only those on her "Our story" page.
    paragraphs: [
      "Yanicke grew up in Jamaica, in a family of Chinese, African and East Indian heritage, and that multicultural upbringing gave her a deep appreciation for every culture and tradition a couple brings to their day. She has called Hawaii home for 17 years and counting.",
      "Her eye for design came first. She studied Fashion Illustration and Design at Miami International Art University and spent several years in the fashion industry, where her love of fine detail and vibrant colour took shape. It's the same eye she brings to designing your celebration.",
      "Before founding Zenju in 2010, she spent five years learning the craft alongside event planners and coordinated concerts for emerging artists at a record label in Miami Beach. Today she still manages Zenju closely herself, with the same care and commitment she brings to every couple.",
    ],
  },

  vision: {
    title: "Our Vision",
    label: "The Zenju team",
    photo: "/images/current-site/zenju-team.jpg",
    photoAlt: "Four members of the Zenju Weddings team in black, standing together on a lawn before an event",
    paragraphs: [
      "Our dedicated team of creative, diligent designers is committed to carrying out your design vision seamlessly within the overall event layout on the day. We take full responsibility for the set-up, design implementation and breakdown of your event.",
      "Planning a wedding can be daunting and stressful, which is why we offer comprehensive coordination services to take that pressure away. Our experienced team manages every detail with care, turning your vision into reality while embodying the spirit of aloha throughout your day.",
    ],
    pillars: [
      { title: "Your design, carried out", text: "Your design vision brought to life seamlessly within the overall event layout." },
      { title: "Every detail, handled", text: "Set-up, design implementation and breakdown, all managed by our team." },
      { title: "The spirit of aloha", text: "Unique, elegant and memorable celebrations that leave a lasting impression." },
    ],
    details: [
      { src: "/images/current-site/portfolio-08.jpg", alt: "Place setting with gold cutlery on a botanical print tablecloth" },
      { src: "/images/current-site/portfolio-16.jpg", alt: "Two green leaf lei resting on a white table" },
      { src: "/images/current-site/portfolio-19.jpg", alt: "Wedding rings resting on a white flower" },
      { src: "/images/current-site/portfolio-21.jpg", alt: "Peach tulips and white astilbe in an amber bud vase" },
    ],
    closing:
      "Hawaii, known for its enchanting beauty, is a place where locals and visitors alike believe in the enduring power of love. It is our privilege and honor to assist our clients in bringing their wedding dreams to life in this paradise.",
  },
};
