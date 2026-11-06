// Gallery: six albums from the portfolio on her current site (zenjuweddingsnevents.com/about-3-1),
// grouped by wedding or venue from her own captions and the photos themselves. Her site doesn't name
// the couples, so albums are titled by venue for now; add `couple` once Yanicke supplies names
// (it then leads the card and the album page). Photos: public/images/gallery/<album>/.

export type GalleryPhoto = { src: string; width: number; height: number; alt: string };
export type Album = {
  slug: string;
  title: string;
  couple?: string;
  description: string;
  photos: GalleryPhoto[]; // the first is the cover
};

export const galleryPage = {
  hero: { label: "Gallery", title: "Celebrations we’ve planned", image: "/images/gallery/garden-reception/40.jpg" },
  intro: "A look inside some of the weddings we’ve planned across Oʻahu. Open an album to see the day.",
};

export const albums: Album[] = [
  {
    slug: "north-shore",
    title: "North Shore",
    description: "Beach, banyan and chapel portraits on Oʻahu’s North Shore",
    photos: [
      { src: "/images/gallery/north-shore/01.jpg", width: 1600, height: 1066, alt: "Newlyweds on the North Shore, photo 1" },
      { src: "/images/gallery/north-shore/02.jpg", width: 1066, height: 1600, alt: "Newlyweds on the North Shore, photo 2" },
      { src: "/images/gallery/north-shore/37.jpg", width: 1066, height: 1600, alt: "Newlyweds on the North Shore, photo 3" },
      { src: "/images/gallery/north-shore/38.jpg", width: 1066, height: 1600, alt: "Newlyweds on the North Shore, photo 4" },
      { src: "/images/gallery/north-shore/39.jpg", width: 1066, height: 1600, alt: "Newlyweds on the North Shore, photo 5" },
      { src: "/images/gallery/north-shore/41.jpg", width: 1600, height: 1066, alt: "Newlyweds on the North Shore, photo 6" },
      { src: "/images/gallery/north-shore/42.jpg", width: 1066, height: 1600, alt: "Newlyweds on the North Shore, photo 7" },
      { src: "/images/gallery/north-shore/43.jpg", width: 1066, height: 1600, alt: "Newlyweds on the North Shore, photo 8" },
      { src: "/images/gallery/north-shore/44.jpg", width: 1066, height: 1600, alt: "Newlyweds on the North Shore, photo 9" },
    ],
  },
  {
    slug: "kualoa-ranch",
    title: "Kualoa Ranch",
    description: "A ceremony beneath the Kualoa cliffs",
    photos: [
      { src: "/images/gallery/kualoa-ranch/18.jpg", width: 1600, height: 1066, alt: "A wedding at Kualoa Ranch, photo 1" },
      { src: "/images/gallery/kualoa-ranch/14.jpg", width: 1066, height: 1600, alt: "A wedding at Kualoa Ranch, photo 2" },
      { src: "/images/gallery/kualoa-ranch/17.jpg", width: 1067, height: 1600, alt: "A wedding at Kualoa Ranch, photo 3" },
      { src: "/images/gallery/kualoa-ranch/15.jpg", width: 1066, height: 1600, alt: "A wedding at Kualoa Ranch, photo 4" },
      { src: "/images/gallery/kualoa-ranch/16.jpg", width: 1600, height: 1066, alt: "A wedding at Kualoa Ranch, photo 5" },
      { src: "/images/gallery/kualoa-ranch/19.jpg", width: 1600, height: 1066, alt: "A wedding at Kualoa Ranch, photo 6" },
    ],
  },
  {
    slug: "loulu-palms",
    title: "Loulu Palms Estate",
    description: "A sailcloth tent reception by the sea",
    photos: [
      { src: "/images/gallery/loulu-palms/22.jpg", width: 1284, height: 1600, alt: "A wedding at Loulu Palms Estate, photo 1" },
      { src: "/images/gallery/loulu-palms/20.jpg", width: 1284, height: 1600, alt: "A wedding at Loulu Palms Estate, photo 2" },
      { src: "/images/gallery/loulu-palms/23.jpg", width: 828, height: 1472, alt: "A wedding at Loulu Palms Estate, photo 3" },
      { src: "/images/gallery/loulu-palms/27.jpg", width: 1200, height: 1600, alt: "A wedding at Loulu Palms Estate, photo 4" },
    ],
  },
  {
    slug: "indian-polish-wedding",
    title: "Indian & Polish Wedding",
    description: "A traditional ceremony under a floral mandap",
    photos: [
      { src: "/images/gallery/indian-polish-wedding/47.jpg", width: 1600, height: 1066, alt: "An Indian and Polish wedding, photo 1" },
      { src: "/images/gallery/indian-polish-wedding/60.jpg", width: 1066, height: 1600, alt: "An Indian and Polish wedding, photo 2" },
      { src: "/images/gallery/indian-polish-wedding/03.jpg", width: 1600, height: 1066, alt: "An Indian and Polish wedding, photo 3" },
      { src: "/images/gallery/indian-polish-wedding/13.jpg", width: 1600, height: 1066, alt: "An Indian and Polish wedding, photo 4" },
      { src: "/images/gallery/indian-polish-wedding/45.jpg", width: 1066, height: 1600, alt: "An Indian and Polish wedding, photo 5" },
      { src: "/images/gallery/indian-polish-wedding/48.jpg", width: 1066, height: 1600, alt: "An Indian and Polish wedding, photo 6" },
      { src: "/images/gallery/indian-polish-wedding/49.jpg", width: 1066, height: 1600, alt: "An Indian and Polish wedding, photo 7" },
      { src: "/images/gallery/indian-polish-wedding/50.jpg", width: 1066, height: 1600, alt: "An Indian and Polish wedding, photo 8" },
      { src: "/images/gallery/indian-polish-wedding/53.jpg", width: 1600, height: 1066, alt: "An Indian and Polish wedding, photo 9" },
      { src: "/images/gallery/indian-polish-wedding/54.jpg", width: 1066, height: 1600, alt: "An Indian and Polish wedding, photo 10" },
      { src: "/images/gallery/indian-polish-wedding/55.jpg", width: 1600, height: 1066, alt: "An Indian and Polish wedding, photo 11" },
      { src: "/images/gallery/indian-polish-wedding/56.jpg", width: 1600, height: 1066, alt: "An Indian and Polish wedding, photo 12" },
      { src: "/images/gallery/indian-polish-wedding/57.jpg", width: 1600, height: 1066, alt: "An Indian and Polish wedding, photo 13" },
      { src: "/images/gallery/indian-polish-wedding/58.jpg", width: 1600, height: 1066, alt: "An Indian and Polish wedding, photo 14" },
      { src: "/images/gallery/indian-polish-wedding/61.jpg", width: 1066, height: 1600, alt: "An Indian and Polish wedding, photo 15" },
      { src: "/images/gallery/indian-polish-wedding/62.jpg", width: 1600, height: 1066, alt: "An Indian and Polish wedding, photo 16" },
      { src: "/images/gallery/indian-polish-wedding/63.jpg", width: 1066, height: 1600, alt: "An Indian and Polish wedding, photo 17" },
      { src: "/images/gallery/indian-polish-wedding/46.jpg", width: 1600, height: 1066, alt: "An Indian and Polish wedding, photo 18" },
    ],
  },
  {
    slug: "garden-reception",
    title: "Garden Reception",
    description: "Tables, florals and an evening under string lights",
    photos: [
      { src: "/images/gallery/garden-reception/09.jpg", width: 1600, height: 1066, alt: "A garden wedding reception, photo 1" },
      { src: "/images/gallery/garden-reception/67.jpg", width: 1600, height: 1066, alt: "A garden wedding reception, photo 2" },
      { src: "/images/gallery/garden-reception/65.jpg", width: 1066, height: 1600, alt: "A garden wedding reception, photo 3" },
      { src: "/images/gallery/garden-reception/66.jpg", width: 1066, height: 1600, alt: "A garden wedding reception, photo 4" },
      { src: "/images/gallery/garden-reception/40.jpg", width: 1600, height: 1066, alt: "A garden wedding reception, photo 5" },
      { src: "/images/gallery/garden-reception/05.jpg", width: 1066, height: 1600, alt: "A garden wedding reception, photo 6" },
      { src: "/images/gallery/garden-reception/07.jpg", width: 1066, height: 1600, alt: "A garden wedding reception, photo 7" },
      { src: "/images/gallery/garden-reception/08.jpg", width: 1600, height: 1066, alt: "A garden wedding reception, photo 8" },
      { src: "/images/gallery/garden-reception/04.jpg", width: 1066, height: 1600, alt: "A garden wedding reception, photo 9" },
      { src: "/images/gallery/garden-reception/11.jpg", width: 1066, height: 1600, alt: "A garden wedding reception, photo 10" },
      { src: "/images/gallery/garden-reception/12.jpg", width: 1066, height: 1600, alt: "A garden wedding reception, photo 11" },
      { src: "/images/gallery/garden-reception/51.jpg", width: 1600, height: 1066, alt: "A garden wedding reception, photo 12" },
      { src: "/images/gallery/garden-reception/52.jpg", width: 1066, height: 1600, alt: "A garden wedding reception, photo 13" },
      { src: "/images/gallery/garden-reception/59.jpg", width: 1066, height: 1600, alt: "A garden wedding reception, photo 14" },
      { src: "/images/gallery/garden-reception/64.jpg", width: 1600, height: 1066, alt: "A garden wedding reception, photo 15" },
      { src: "/images/gallery/garden-reception/06.jpg", width: 1600, height: 1066, alt: "A garden wedding reception, photo 16" },
      { src: "/images/gallery/garden-reception/10.jpg", width: 1600, height: 1066, alt: "A garden wedding reception, photo 17" },
    ],
  },
  {
    slug: "around-oahu",
    title: "Around Oʻahu",
    description: "Turtle Bay, Paradise Cove, Royal Hawaiian Golf Club, Cafe Julia and Paliku Gardens",
    photos: [
      { src: "/images/gallery/around-oahu/25.jpg", width: 814, height: 1167, alt: "Weddings around Oʻahu, photo 1" },
      { src: "/images/gallery/around-oahu/24.jpg", width: 1600, height: 1200, alt: "Weddings around Oʻahu, photo 2" },
      { src: "/images/gallery/around-oahu/28.jpg", width: 1200, height: 1600, alt: "Weddings around Oʻahu, photo 3" },
      { src: "/images/gallery/around-oahu/26.jpg", width: 828, height: 532, alt: "Weddings around Oʻahu, photo 4" },
      { src: "/images/gallery/around-oahu/21.jpg", width: 1280, height: 1600, alt: "Weddings around Oʻahu, photo 5" },
      { src: "/images/gallery/around-oahu/35.jpg", width: 1200, height: 1600, alt: "Weddings around Oʻahu, photo 6" },
      { src: "/images/gallery/around-oahu/36.jpg", width: 1200, height: 1600, alt: "Weddings around Oʻahu, photo 7" },
      { src: "/images/gallery/around-oahu/30.jpg", width: 1440, height: 1085, alt: "Weddings around Oʻahu, photo 8" },
      { src: "/images/gallery/around-oahu/32.jpg", width: 1600, height: 1200, alt: "Weddings around Oʻahu, photo 9" },
      { src: "/images/gallery/around-oahu/33.jpg", width: 1440, height: 1080, alt: "Weddings around Oʻahu, photo 10" },
    ],
  },
];
