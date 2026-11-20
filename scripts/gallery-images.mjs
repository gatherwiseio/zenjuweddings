// Makes the gallery's ready-made photos: every original in content/gallery-originals/<album>/ becomes
// WebP files at a few widths in public/images/gallery/<album>/<name>-<width>.webp. The originals stay
// out of public/ (never served); the site picks the smallest file that is sharp enough for the screen
// (src/components/GalleryImage.tsx), so nothing is resized on the fly and phones get small files.
// Run after adding or changing gallery photos:
//   node scripts/gallery-images.mjs            (only photos without WebP files yet)
//   node scripts/gallery-images.mjs --all      (redo everything)
// It prints each photo's size for src/content/gallery.ts.
import { existsSync } from "node:fs";
import { mkdir, readdir } from "node:fs/promises";
import sharp from "sharp";
import { galleryWidths } from "../src/content/gallery-widths.mjs";

const all = process.argv.includes("--all");
const srcRoot = new URL("../content/gallery-originals/", import.meta.url).pathname;
const outRoot = new URL("../public/images/gallery/", import.meta.url).pathname;

for (const album of (await readdir(srcRoot)).filter((d) => !d.startsWith("."))) {
  await mkdir(outRoot + album, { recursive: true });
  const files = (await readdir(srcRoot + album)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
  for (const file of files) {
    const name = file.replace(/\.[^.]+$/, "");
    const src = `${srcRoot}${album}/${file}`;
    const meta = await sharp(src).rotate().metadata(); // rotate(): respect the phone's orientation flag
    const [w, h] = meta.orientation >= 5 ? [meta.height, meta.width] : [meta.width, meta.height];
    for (const width of galleryWidths) {
      const out = `${outRoot}${album}/${name}-${width}.webp`;
      if (!all && existsSync(out)) continue;
      await sharp(src).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78, effort: 5 }).toFile(out);
    }
    console.log(`${album}/${name} ${w}x${h}`);
  }
}
