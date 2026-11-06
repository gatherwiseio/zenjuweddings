// Gallery: albums by couple, from the portfolio on her current site (zenjuweddingsnevents.com/about-3-1).
// Names, venues and photo credits are from her gallery's own captions; the photos that
// carry no caption are grouped with their wedding by venue and look. Photos: public/images/gallery/<album>/.
import galleryHero from "../../public/images/current-site/portfolio-10.jpg"; // imported, so the banner gets a blurred preview while it loads

export type GalleryPhoto = { src: string; width: number; height: number; alt: string };
export type Album = {
  slug: string;
  title: string; // the couple's names
  place: string;
  credit?: string; // photographer
  story: string;
  photos: GalleryPhoto[]; // the first is the cover
};

export const galleryPage = {
  hero: { label: "Gallery", title: "Celebrations we’ve planned", image: galleryHero },
  intro: "A look inside some of the weddings we planned across Oʻahu.",
};

export const albums: Album[] = [
  {
    slug: "arvind-victoria",
    title: "Arvind + Victoria",
    place: "St. Peter and Paul Church & Oahu Wedding Villas",
    credit: "Stephen Ludwig",
    story: "Two cultural ceremonies in one day: a Polish Catholic church ceremony and a beautiful Indian ceremony, leading into a reception that combined both cultures.",
    photos: [
      { src: "/images/gallery/arvind-victoria/02.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 1" },
      { src: "/images/gallery/arvind-victoria/01.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 2" },
      { src: "/images/gallery/arvind-victoria/37.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 3" },
      { src: "/images/gallery/arvind-victoria/38.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 4" },
      { src: "/images/gallery/arvind-victoria/39.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 5" },
      { src: "/images/gallery/arvind-victoria/42.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 6" },
      { src: "/images/gallery/arvind-victoria/43.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 7" },
      { src: "/images/gallery/arvind-victoria/44.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 8" },
      { src: "/images/gallery/arvind-victoria/40.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 9" },
      { src: "/images/gallery/arvind-victoria/41.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 10" },
      { src: "/images/gallery/arvind-victoria/03.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 11" },
      { src: "/images/gallery/arvind-victoria/47.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 12" },
      { src: "/images/gallery/arvind-victoria/57.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 13" },
      { src: "/images/gallery/arvind-victoria/58.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 14" },
      { src: "/images/gallery/arvind-victoria/60.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 15" },
      { src: "/images/gallery/arvind-victoria/61.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 16" },
      { src: "/images/gallery/arvind-victoria/62.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 17" },
      { src: "/images/gallery/arvind-victoria/63.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 18" },
      { src: "/images/gallery/arvind-victoria/45.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 19" },
      { src: "/images/gallery/arvind-victoria/46.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 20" },
      { src: "/images/gallery/arvind-victoria/48.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 21" },
      { src: "/images/gallery/arvind-victoria/49.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 22" },
      { src: "/images/gallery/arvind-victoria/50.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 23" },
      { src: "/images/gallery/arvind-victoria/53.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 24" },
      { src: "/images/gallery/arvind-victoria/54.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 25" },
      { src: "/images/gallery/arvind-victoria/55.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 26" },
      { src: "/images/gallery/arvind-victoria/56.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 27" },
      { src: "/images/gallery/arvind-victoria/13.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 28" },
      { src: "/images/gallery/arvind-victoria/51.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 29" },
      { src: "/images/gallery/arvind-victoria/52.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 30" },
      { src: "/images/gallery/arvind-victoria/09.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 31" },
      { src: "/images/gallery/arvind-victoria/05.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 32" },
      { src: "/images/gallery/arvind-victoria/07.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 33" },
      { src: "/images/gallery/arvind-victoria/08.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 34" },
      { src: "/images/gallery/arvind-victoria/59.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 35" },
      { src: "/images/gallery/arvind-victoria/11.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 36" },
      { src: "/images/gallery/arvind-victoria/12.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 37" },
      { src: "/images/gallery/arvind-victoria/04.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 38" },
      { src: "/images/gallery/arvind-victoria/30.jpg", width: 1440, height: 1085, alt: "Arvind and Victoria’s wedding, photo 39" },
      { src: "/images/gallery/arvind-victoria/06.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 40" },
      { src: "/images/gallery/arvind-victoria/10.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 41" },
      { src: "/images/gallery/arvind-victoria/64.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 42" },
      { src: "/images/gallery/arvind-victoria/65.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 43" },
      { src: "/images/gallery/arvind-victoria/66.jpg", width: 1066, height: 1600, alt: "Arvind and Victoria’s wedding, photo 44" },
      { src: "/images/gallery/arvind-victoria/67.jpg", width: 1600, height: 1066, alt: "Arvind and Victoria’s wedding, photo 45" },
    ],
  },
  {
    slug: "maksim-albert",
    title: "Maksim + Albert",
    place: "Kualoa Ranch",
    credit: "Stephen Ludwig",
    story: "Celebrating their day at the stunning Kualoa Ranch, the very place Jumanji was filmed.",
    photos: [
      { src: "/images/gallery/maksim-albert/18.jpg", width: 1600, height: 1066, alt: "Maksim and Albert’s wedding at Kualoa Ranch, photo 1" },
      { src: "/images/gallery/maksim-albert/14.jpg", width: 1066, height: 1600, alt: "Maksim and Albert’s wedding at Kualoa Ranch, photo 2" },
      { src: "/images/gallery/maksim-albert/17.jpg", width: 1067, height: 1600, alt: "Maksim and Albert’s wedding at Kualoa Ranch, photo 3" },
      { src: "/images/gallery/maksim-albert/15.jpg", width: 1066, height: 1600, alt: "Maksim and Albert’s wedding at Kualoa Ranch, photo 4" },
      { src: "/images/gallery/maksim-albert/16.jpg", width: 1600, height: 1066, alt: "Maksim and Albert’s wedding at Kualoa Ranch, photo 5" },
      { src: "/images/gallery/maksim-albert/19.jpg", width: 1600, height: 1066, alt: "Maksim and Albert’s wedding at Kualoa Ranch, photo 6" },
    ],
  },
  {
    slug: "onesis-pavel",
    title: "Onesis + Pavel",
    place: "Loulu Palms Estate",
    credit: "Stephen Ludwig",
    story: "A sailcloth tent reception and a sweetheart table in white florals at Loulu Palms Estate.",
    photos: [
      { src: "/images/gallery/onesis-pavel/22.jpg", width: 1284, height: 1600, alt: "Onesis and Pavel’s wedding at Loulu Palms Estate, photo 1" },
      { src: "/images/gallery/onesis-pavel/20.jpg", width: 1284, height: 1600, alt: "Onesis and Pavel’s wedding at Loulu Palms Estate, photo 2" },
      { src: "/images/gallery/onesis-pavel/23.jpg", width: 828, height: 1472, alt: "Onesis and Pavel’s wedding at Loulu Palms Estate, photo 3" },
      { src: "/images/gallery/onesis-pavel/27.jpg", width: 1200, height: 1600, alt: "Onesis and Pavel’s wedding at Loulu Palms Estate, photo 4" },
    ],
  },
  {
    slug: "chaeli-ryan",
    title: "Chaeli + Ryan",
    place: "Royal Hawaiian Golf Club",
    story: "Lush greenery and quiet details at the Royal Hawaiian Golf Club.",
    photos: [
      { src: "/images/gallery/chaeli-ryan/26.jpg", width: 828, height: 532, alt: "Chaeli and Ryan’s wedding at the Royal Hawaiian Golf Club, photo 1" },
      { src: "/images/gallery/chaeli-ryan/21.jpg", width: 1280, height: 1600, alt: "Chaeli and Ryan’s wedding at the Royal Hawaiian Golf Club, photo 2" },
    ],
  },
  {
    slug: "serena-bradley",
    title: "Serena + Bradley",
    place: "Turtle Bay Resort",
    story: "Ocean views and an oceanfront lounge at Turtle Bay Resort.",
    photos: [
      { src: "/images/gallery/serena-bradley/28.jpg", width: 1200, height: 1600, alt: "Serena and Bradley’s wedding at Turtle Bay Resort, photo 1" },
      { src: "/images/gallery/serena-bradley/24.jpg", width: 1600, height: 1200, alt: "Serena and Bradley’s wedding at Turtle Bay Resort, photo 2" },
    ],
  },
  {
    slug: "more-love-stories",
    title: "More Love Stories",
    place: "Paradise Cove, Cafe Julia, Paliku Gardens and more",
    story: "Daniel + Tyler at Paradise Cove, Alex + Tasha, and a few more favorite moments from across Oʻahu.",
    photos: [
      { src: "/images/gallery/more-love-stories/25.jpg", width: 814, height: 1167, alt: "A Zenju wedding on Oʻahu, photo 1" },
      { src: "/images/gallery/more-love-stories/33.jpg", width: 1440, height: 1080, alt: "A Zenju wedding on Oʻahu, photo 2" },
      { src: "/images/gallery/more-love-stories/35.jpg", width: 1200, height: 1600, alt: "A Zenju wedding on Oʻahu, photo 3" },
      { src: "/images/gallery/more-love-stories/36.jpg", width: 1200, height: 1600, alt: "A Zenju wedding on Oʻahu, photo 4" },
      { src: "/images/gallery/more-love-stories/32.jpg", width: 1600, height: 1200, alt: "A Zenju wedding on Oʻahu, photo 5" },
      { src: "/images/gallery/more-love-stories/34.jpg", width: 828, height: 1050, alt: "A Zenju wedding on Oʻahu, photo 6" },
    ],
  },
];
