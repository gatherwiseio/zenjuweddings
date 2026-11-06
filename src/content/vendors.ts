// Preferred Vendors page. Vendors and links from her two pages
// (https://www.zenjuweddingsnevents.com/news-all and /team-1), checked 2026-11-06.
// One-line descriptions for the page-1 vendors are condensed from each vendor's own website; the
// DJ / emcee descriptions, phones and emails are condensed from her page 2. Photos come from each
// vendor's own site (public/images/vendors/); vendors without a usable photo show a name tile.
// Open with Yanicke (see BRIEF.md): Cherbu's link is dead, Spinning Web's domain is now an unrelated
// site, and she linked IMF Visions to islemedia.com (we link imfvisions.com).

export type Vendor = {
  name: string;
  with?: string; // company, when the listing is a person
  text: string;
  url?: string;
  phone?: string;
  email?: string;
  image?: string;
};
export type VendorCategory = { id: string; label: string; tab?: string; vendors: Vendor[] };

const photo = (file: string) => `/images/vendors/${file}.jpg`;

export const vendorsPage = {
  hero: {
    label: "Preferred vendors",
    title: "The team behind the day",
    image: "/images/current-site/portfolio-12.jpg",
  },
  intro:
    "The artists, photographers, florists and crews we trust with our couples. Search by name or jump to a category.",
};

export const vendorCategories: VendorCategory[] = [
  {
    id: "hair-makeup",
    label: "Hair & makeup",
    vendors: [
      { name: "Faith & Beauty", text: "On-site hair styling and airbrush makeup for brides, across all of Hawaii.", url: "http://www.faithandbeauty.com", image: photo("faith-and-beauty") },
      { name: "Delish Makeup Artistry", text: "Bridal makeup artistry on Oʻahu.", url: "https://www.delishmakeup.com", image: photo("delish") },
      { name: "Cherbu", text: "Bridal makeup and hair." },
    ],
  },
  {
    id: "officiants",
    label: "Officiants",
    vendors: [
      { name: "Blake La Benz", with: "I Do Hawaiian Weddings", text: "Oʻahu officiant for beach and garden ceremonies.", url: "https://idohawaiianweddings.com", image: photo("i-do-hawaiian") },
      { name: "June Dillinger", with: "I Do Hawaiian Weddings", text: "Oʻahu officiant for beach and garden ceremonies.", url: "https://idohawaiianweddings.com", image: photo("i-do-hawaiian") },
      { name: "Ryan Souza", with: "I Do Hawaiian Weddings", text: "Oʻahu officiant for beach and garden ceremonies.", url: "https://idohawaiianweddings.com", image: photo("i-do-hawaiian") },
      { name: "Kalehua Featheran", text: "Officiant and ceremony planning on Oʻahu, on the beach and at tropical venues.", url: "https://kalehua.net" },
    ],
  },
  {
    id: "photographers",
    label: "Photographers",
    tab: "Photography",
    vendors: [
      { name: "Keoni Michael", text: "Fine art wedding photography across Oʻahu, Maui, Kauaʻi and the Big Island.", url: "https://keonimichael.com", image: photo("keoni-michael") },
      { name: "Stephen Ludwig", text: "Modern Hawaii wedding photography on every island.", url: "http://www.ludwighawaii.com", image: photo("stephen-ludwig") },
      { name: "Mersadi Olson", text: "Elopement and wedding photographer and videographer.", url: "https://mersadiolson.com", image: photo("mersadi-olson") },
      { name: "Dave Miyamoto", text: "Multi-award-winning photographer of emotion and fleeting moments.", url: "https://www.davemiyamoto.com/dave-miyamoto", image: photo("dave-miyamoto") },
      { name: "Rachel Robertson", text: "Wedding and portrait photography in Hawaii.", url: "http://www.rachelrobertson.com", image: photo("rachel-robertson") },
    ],
  },
  {
    id: "videographers",
    label: "Videographers",
    tab: "Videography",
    vendors: [
      { name: "Bishop Media", text: "Cinematic wedding films since 2018: ceremony, highlight, reception and social cuts.", url: "https://bishopmediaproductions.com", image: photo("bishop-media") },
      { name: "Red Ring Studio", text: "Oʻahu wedding videography and photography, on every island.", url: "https://www.redringstudio.com", image: photo("red-ring") },
      { name: "Aria Studios", text: "Wedding films and photography.", url: "https://www.ariastudios.com", image: photo("aria-studios") },
      { name: "Mersadi Olson", text: "Elopement and wedding videographer and photographer.", url: "https://mersadiolson.com", image: photo("mersadi-olson") },
      { name: "Isle Media", text: "All-in-one wedding media production.", url: "https://islemedia.com" },
      { name: "IMF Visions", text: "Event production and cinematic films.", url: "https://www.imfvisions.com" },
    ],
  },
  {
    id: "florists",
    label: "Florists",
    vendors: [
      { name: "Belle de Jour Floral", text: "Bespoke bouquets and floral installations from an Oʻahu design studio.", url: "https://www.belledejourfloral.com", image: photo("belle-de-jour") },
      { name: "J’Adore Floral Designs", text: "Wedding florals and custom floral design.", url: "https://www.jadorefloral.net", image: photo("jadore") },
      { name: "Patty’s Floral Designs", text: "Honolulu florist.", url: "https://www.pattysfloraldesigns.com" },
      { name: "Spinning Web", text: "Wedding florals." },
    ],
  },
  {
    id: "rentals",
    label: "Rentals & décor",
    tab: "Rentals",
    vendors: [
      { name: "Accel Event Rentals", text: "Premium tents, lounge furniture and event rentals on Oʻahu.", url: "https://www.accelrentals.com", image: photo("accel") },
      { name: "Aloha Artisans", text: "Luxury wedding rentals: tents, lounges, lighting, dance floors and tabletop.", url: "https://www.alohaartisans.com", image: photo("aloha-artisans") },
      { name: "Ambient Rentals", text: "Lounge, décor and specialty rentals.", url: "https://www.ambientrentals.com", image: photo("ambient") },
      { name: "Designed with Aloha", text: "Arches, chairs, tables and décor for weddings and events.", url: "https://www.designedwithaloha.com", image: photo("designed-with-aloha") },
      { name: "Pacific Party Rentals", text: "Tents, canopies and party rentals.", url: "https://www.pacificpartyrentals.net", image: photo("pacific-party") },
    ],
  },
  {
    id: "djs-emcees",
    label: "DJs & emcees",
    vendors: [
      { name: "Frobaby Productions", text: "Live-mixed DJ sets from start to finish, no pre-made playlists. Most of their couples are celebrating in Hawaii from away.", url: "https://frobabyproductions.com", phone: "808-427-8080", image: photo("frobaby") },
      { name: "DJ D-Lyte", text: "25+ years behind the decks, plus emceeing, photo booth, uplighting and a custom monogram spotlight.", url: "https://djdlyte.com", phone: "808-384-6909", image: photo("dj-dlyte") },
      { name: "Defining Moments DJs", text: "Locally owned DJ and emcee team with 11+ years on island and custom playlists.", phone: "808-351-3276", email: "DefiningMomentsHawaii@gmail.com" },
      { name: "Emcee Ron", with: "Ron’s Productions", text: "Upscale local wedding emcee since 1998, with mobile sound and DJs.", phone: "808-277-8986", email: "Ronproductions808@yahoo.com" },
    ],
  },
];
