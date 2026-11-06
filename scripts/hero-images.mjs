// Makes the ready-made banner files: each photo listed in src/content/heroes.ts, as WebP at each
// width there, into public/images/hero/. Run after adding or changing a banner photo:
//   node scripts/hero-images.mjs
import { mkdir, readFile } from "node:fs/promises";
import sharp from "sharp";

const config = await readFile(new URL("../src/content/heroes.ts", import.meta.url), "utf8");
const names = [...config.match(/heroPhotos = \[(.*?)\]/s)[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
const widths = config.match(/heroWidths = \[(.*?)\]/)[1].split(",").map(Number);
const out = new URL("../public/images/hero/", import.meta.url);
await mkdir(out, { recursive: true });

for (const name of names) {
  const src = new URL(`../public/images/current-site/${name}.jpg`, import.meta.url).pathname;
  for (const width of widths) {
    const file = new URL(`${name}-${width}.webp`, out).pathname;
    const info = await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 74, effort: 6 }).toFile(file);
    console.log(`${name}-${width}.webp ${info.width}×${info.height} ${Math.round(info.size / 1024)} KB`);
  }
}
