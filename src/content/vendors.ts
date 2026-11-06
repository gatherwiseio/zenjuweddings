// Preferred Vendors page. Vendors and links from her two pages
// (https://www.zenjuweddingsnevents.com/news-all and /team-1), checked 2026-11-06.
// One-line descriptions for the page-1 vendors are condensed from each vendor's own website; the
// DJ / emcee descriptions, phones and emails are condensed from her page 2. Photos come from each
// vendor's own site: their logo (public/images/vendors/logos/), or with no logo, the owner's
// portrait from their about or team page (…/faces/); with neither, the card shows initials.
// Websites checked 2026-11-06: all load. Cherbu's old site is gone, so we link her Instagram
// (@cherbumakeup). Spinning Web moved to spinningwebfloristhi.com. Ryan Souza's portrait is from
// I Do Hawaiian Weddings' team page (daichidinh.com/our-team). Open with Yanicke (see BRIEF.md): she
// linked IMF Visions to islemedia.com (we link imfvisions.com).

export type Vendor = {
  name: string;
  with?: string; // company, when the listing is a person
  text: string;
  url?: string;
  phone?: string;
  email?: string;
  logo?: string; // their logo, shown contained
  face?: string; // or, with no usable logo, the person's portrait from their own site
};
export type VendorCategory = { id: string; label: string; tab?: string; vendors: Vendor[] };

const logo = (file: string) => `/images/vendors/logos/${file}.png`;
const face = (file: string) => `/images/vendors/faces/${file}.jpg`;

export const vendorsPage = {
  hero: {
    label: "Preferred vendors",
    title: "The team behind the day",
    image: "/images/current-site/portfolio-12.jpg",
  },
  intro:
    "The artists, photographers, florists and crews we trust with our couples.",
};

export const vendorCategories: VendorCategory[] = [
  {
    id: "hair-makeup",
    label: "Hair & makeup",
    vendors: [
      { name: "Faith & Beauty", text: "On-site hair styling and airbrush makeup for brides, across all of Hawaii.", url: "http://www.faithandbeauty.com", logo: logo("faith-and-beauty") },
      { name: "Delish Makeup Artistry", text: "Bridal makeup artistry on Oʻahu.", url: "https://www.delishmakeup.com", logo: logo("delish") },
      { name: "Cherbu Makeup & Hair", text: "Award-winning makeup artist, with on-site makeup and hair styling.", url: "https://www.instagram.com/cherbumakeup/", face: face("cherbu") },
    ],
  },
  {
    id: "officiants",
    label: "Officiants",
    vendors: [
      { name: "Blake La Benz", with: "I Do Hawaiian Weddings", text: "Oʻahu officiant for beach and garden ceremonies.", url: "https://idohawaiianweddings.com" },
      { name: "June Dillinger", with: "I Do Hawaiian Weddings", text: "Owner of I Do Hawaiian Weddings, officiating beach and garden ceremonies on Oʻahu.", url: "https://idohawaiianweddings.com", face: face("june-dillinger") },
      { name: "Ryan Souza", with: "I Do Hawaiian Weddings", text: "Oʻahu officiant for beach and garden ceremonies.", url: "https://idohawaiianweddings.com", face: face("ryan-souza") },
      { name: "Kalehua Featheran", text: "Officiant and ceremony planning on Oʻahu, on the beach and at tropical venues.", url: "https://kalehua.net", face: face("kalehua-featheran") },
    ],
  },
  {
    id: "photographers",
    label: "Photographers",
    tab: "Photography",
    vendors: [
      { name: "Keoni Michael", text: "Fine art wedding photography across Oʻahu, Maui, Kauaʻi and the Big Island.", url: "https://keonimichael.com", logo: logo("keoni-michael") },
      { name: "Stephen Ludwig", text: "Modern Hawaii wedding photography on every island.", url: "http://www.ludwighawaii.com", logo: logo("stephen-ludwig") },
      { name: "Mersadi Olson", text: "Elopement and wedding photographer and videographer.", url: "https://mersadiolson.com", logo: logo("mersadi-olson") },
      { name: "Dave Miyamoto", text: "Multi-award-winning photographer of emotion and fleeting moments.", url: "https://www.davemiyamoto.com/dave-miyamoto", face: face("dave-miyamoto") },
      { name: "Rachel Robertson", text: "Wedding and portrait photography in Hawaii.", url: "http://www.rachelrobertson.com", logo: logo("rachel-robertson") },
    ],
  },
  {
    id: "videographers",
    label: "Videographers",
    tab: "Videography",
    vendors: [
      { name: "Bishop Media", with: "Tom Bishop", text: "Cinematic wedding films since 2018: ceremony, highlight, reception and social cuts.", url: "https://bishopmediaproductions.com", face: face("tom-bishop") },
      { name: "Red Ring Studio", with: "Glenn Alonzo", text: "Oʻahu wedding videography and photography, on every island.", url: "https://www.redringstudio.com", face: face("glenn-alonzo") },
      { name: "Aria Studios", text: "Wedding films and photography.", url: "https://www.ariastudios.com", logo: logo("aria-studios") },
      { name: "Mersadi Olson", text: "Elopement and wedding videographer and photographer.", url: "https://mersadiolson.com", logo: logo("mersadi-olson") },
      { name: "Isle Media", text: "All-in-one wedding media production.", url: "https://islemedia.com", logo: logo("isle-media") },
      { name: "IMF Visions", text: "Event production and cinematic films.", url: "https://www.imfvisions.com", logo: logo("imf-visions") },
    ],
  },
  {
    id: "florists",
    label: "Florists",
    vendors: [
      { name: "Belle de Jour Floral", text: "Bespoke bouquets and floral installations from an Oʻahu design studio.", url: "https://www.belledejourfloral.com", logo: logo("belle-de-jour") },
      { name: "J’Adore Floral Designs", text: "Wedding florals and custom floral design.", url: "https://www.jadorefloral.net" },
      { name: "Patty’s Floral Designs", text: "Honolulu florist.", url: "https://www.pattysfloraldesigns.com", logo: logo("pattys-floral-designs") },
      { name: "Spinning Web Florist", text: "Exquisite wedding floral celebrations.", url: "https://www.spinningwebfloristhi.com", logo: logo("spinning-web") },
    ],
  },
  {
    id: "rentals",
    label: "Rentals & décor",
    tab: "Rentals",
    vendors: [
      { name: "Accel Event Rentals", text: "Premium tents, lounge furniture and event rentals on Oʻahu.", url: "https://www.accelrentals.com", logo: logo("accel") },
      { name: "Aloha Artisans", text: "Luxury wedding rentals: tents, lounges, lighting, dance floors and tabletop.", url: "https://www.alohaartisans.com", logo: logo("aloha-artisans") },
      { name: "Ambient Rentals", text: "Lounge, décor and specialty rentals.", url: "https://www.ambientrentals.com", logo: logo("ambient") },
      { name: "Designed with Aloha", text: "Arches, chairs, tables and décor for weddings and events.", url: "https://www.designedwithaloha.com", logo: logo("designed-with-aloha") },
      { name: "Pacific Party Rentals", text: "Tents, canopies and party rentals.", url: "https://www.pacificpartyrentals.net", logo: logo("pacific-party") },
    ],
  },
  {
    id: "djs-emcees",
    label: "DJs & emcees",
    vendors: [
      { name: "Frobaby Productions", text: "Live-mixed DJ sets from start to finish, no pre-made playlists. Most of their couples are celebrating in Hawaii from away.", url: "https://frobabyproductions.com", phone: "808-427-8080", logo: logo("frobaby") },
      { name: "DJ D-Lyte", text: "25+ years behind the decks, plus emceeing, photo booth, uplighting and a custom monogram spotlight.", url: "https://djdlyte.com", phone: "808-384-6909", logo: logo("dj-dlyte") },
      { name: "Defining Moments DJs", text: "Locally owned DJ and emcee team with 11+ years on island and custom playlists.", phone: "808-351-3276", email: "DefiningMomentsHawaii@gmail.com" },
      { name: "Emcee Ron", text: "Upscale local wedding emcee since 1998, with mobile sound and DJs.", phone: "808-277-8986", email: "Ronproductions808@yahoo.com" },
    ],
  },
];
