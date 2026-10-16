# Zenju Weddings — project brief

## Status
- [x] Phase 1: Repo, local folder, Vercel project
- [x] Phase 2: Brief (scope, inspiration, brand)
- [x] Phase 3: Homepage direction chosen
- [ ] Phase 4: All scoped pages live

## Project
- **Planner:** Yanicke
- **Website name:** Zenju Weddings
- **Slug:** zenjuweddings
- **Repo:** https://github.com/gatherwiseio/zenjuweddings
- **Vercel project:** zenjuweddings (gatherwiseio team)
- **Live URL:** https://zenjuweddings.vercel.app
- **Custom domain:** none yet
- **Current website:** https://www.zenjuweddingsnevents.com/ (source for copy, hero video, photos)

## Scope
Pages, in nav order: Home · About Us / The Team · Services & Packages · Preferred Vendors · Gallery · Contact Us

**This build: homepage only.** The other five pages appear in the navigation but are **not clickable** until the homepage is approved.

### Home
1. Hero: live video background, using the existing video from the current website
2. About Zenju Weddings
3. Services / packages preview: all 4 packages from her site (Kuʻu Lei, Hoʻopono, Barefoot Nuptials, Events), each with a "What's included" pop-up and "Learn more" → /services#<id>
4. Gallery preview
5. Reviews
6. Call to action to contact Yanicke

### About Us / The Team: later
### Services & Packages: later
### Preferred Vendors: later
### Gallery: later
### Contact Us: later

**Out of scope / later:**
- Every page except Home (built after the homepage is approved)

## Inspiration
<!-- One entry per site: what the user wants taken, then what Claude observed. -->
**Overall:** both sites set the overall vibe Yanicke likes: typography (headings especially), layout, and general feel. Take the whole aesthetic, not one specific feature.

### https://www.brookekeegan.com
- **Take:** overall vibe: heading typography, layout, feel
- **Observed:**
  - Full-bleed photo hero (oceanfront ceremony arch) with a thin, light wordmark top-left and almost no UI. Nav is hidden behind one outlined pill button ("Navigate").
  - Headings in a light, thin sans (Utile Display Light) at ~50px, centered, with **one word swapped for a script accent** ("executed destination events *globally*"). Thin short divider rules between sections.
  - Small labels in wide-tracked uppercase (14px, ~1.7px tracking). Palette is cool fog grey #DCE0E4, a charcoal panel #27262A for featured work, and cream text #F5F2E9. Very restrained, lots of air.

### https://www.bethhelmstetter.com
- **Take:** overall vibe: heading typography, layout, feel
- **Observed:**
  - Warm ivory background #FEFBF6, blush/taupe accents #DED3CF, deep brown text #5E351C. Soft, warm, editorial.
  - Headings in a light serif (Denton, weight 300) at ~32px, uppercase with wide tracking, **mixed with lowercase italic on the same line** ("EVERY MOMENT'S *an occasion…*", "GLOBALLY INSPIRED. HOSPITALITY DRIVEN. *deeply personal.*"). Body in a clean geometric sans (Mabry) at 20px.
  - Slim sticky top nav: serif wordmark left, 12px uppercase tracked links. Hero is a washed-out photo with a fine-line framed card holding the tagline. Photo grids in a 3-up row with generous white space; plain uppercase text links ("View our celebrations", "Inquire with us") instead of heavy buttons.

**Shared vibe to aim for:** light-weight, elegant headings with an italic or script accent word; wide-tracked small caps for labels and nav; calm neutral palettes; big photography; lots of white space; understated text-link CTAs.

## Brand
Full copy, package details, vendor list, and media links pulled from the current site: `content/current-site.md`.
- **Logo:** supplied 2026-10-15 (green lotus circle + "Zenju Weddings / and events of Hawaii, LLC"), low-res (478×288). Keep the lotus mark and favicon; redo the wordmark. Files in `public/images/brand/`. Lotus redrawn as a vector (`public/images/brand/lotus.svg`). Favicons: original green `favicon-green.svg` (#8FB23F) is live as `src/app/icon.svg` + `apple-icon.png`; dark `favicon-dark.svg` kept as an alternative. **Header logo** (`src/components/Logo.tsx`): green lotus + her wordmark redrawn as clean vector strokes matched to her original logo, which is set in ITC Kabel (letter positions, crossed W, slanted e, Kabel g with ear and open lower loop): "Zenju Weddings" (`public/images/brand/zenju-wordmark.svg`, #416274 `lagoon`, cream on dark panels) used as a CSS mask filled with a color token, over a small tracked uppercase "and events of Hawaii, LLC" line (Jost): white over the hero video, #84AB3A `leaf` everywhere else. Used in header, menu and footer. Her dark lotus (no circle) sits above the founding statement as a small mark. Options canvas: https://claude.ai/artifact/AbwRWni7GAUkaJVYFoFLjQ (exploration; header logo chosen above)
- **Colors:** none defined (current Wix site uses default blue #3A54B4; not a brand color)
- **Fonts:** none defined (current site uses Helvetica Light)
- **Photos:** 25 portfolio photos + hero video on the current site (links in `content/current-site.md`)
- **Tone of voice:** warm, aloha spirit, reassuring ("leave all the details up to us"), elegant
- **Tagline:** "Exclusive Wedding Planner of Hawaii" (site title)
- **Location / service area:** Honolulu, Oahu, Hawaii
- **Inquiry / contact details:** info@zenjuweddingsnevents.com · (808) 840-7404 · 1050 Bishop Street, 450, Honolulu, HI 96813
- **Testimonials** (section renamed from "Kind Words"): the six most recent five-star WeddingWire reviews (no review dates, no mention of WeddingWire on the site; skipped one from a fellow planner). Equal-height cards, 3 across on desktop / 2 on tablet / swipe row on phones, each clamped to 5 lines with "Read full review" opening a dialog. Reviewer photos in `public/images/reviews/`; initials where there's no photo.
- **Footer:** slim bar with the copyright (ink 80%), Privacy Policy and Terms & Conditions links, and her Facebook (facebook.com/ZenjuWeddings, from her current site footer).
- **Legal pages:** `/privacy-policy` and `/terms-and-conditions`, text copied word for word from her current site (`src/content/legal.ts`), shared `LegalPage` layout. Note: her privacy policy text mentions "marketing campaigns", which reads like it came from a marketing-agency template; worth her reviewing.
- **Responsive (checked 320 / 375 / 768 / 1024 / 1440):** packages use underline tabs above the content below 1280px (two per row on phones), side by side only on wide screens; testimonials show one full-width card at a time on phones with previous/next and a counter; header and menu swap Menu/Close for icon buttons under 380px; titles keep a 1.2 line height when they wrap.
- **SEO (draft, awaiting review):** canvas https://claude.ai/artifact/QTVRj4DvoXxdE4KWrGM6a8 with share image options A/B/C and the review board. Draft: home title "Zenju Weddings | Oahu Wedding Planner in Honolulu, Hawaii", description "Unique, elegant weddings and elopements across Oahu, planned by Zenju Weddings and Events of Hawaii. Full and day-of coordination since 2010." Domain to confirm.
- **Motion:** CSS-only, scroll-driven where supported, nothing hidden from search engines, all off under reduced motion. Hero headline and header never start transparent (keeps the LCP). Lighthouse after: SEO 100, performance 96 mobile / 100 desktop.

## Homepage directions
- **Sections compared:** Hero (video) · About · Services preview
- **Claude Design canvas:** https://claude.ai/artifact/RPLk4vL1abuPxCX3wY6FnP (private to the owner until shared)
- **Directions:**
  - **A, Island Editorial** (Brooke Keegan): full-bleed video, thin wordmark and Menu pill; Jost 200 headings with a Pinyon Script accent word; fog #DCE0E4 / charcoal #27262A / cream #F5F2E9; packages on a charcoal panel.
  - **B, Warm Aloha Romance** (Beth Helmstetter): slim top nav; framed tagline card over the video; Cormorant Garamond uppercase + italic, Karla body; ivory #FEFBF6 / blush #F3E9E4 / brown #5E351C; 3-up photo row; package cards with text links.
  - **C, Golden Hour Modern** (bolder, inspired by Yanicke's fashion background): split hero (video left, headline right); Bodoni Moda display + Manrope; sand #EFE4D2 / terracotta #9C4630 / deep green #1F3A2E; package names as large type rows.
- Photos are labeled placeholders. Real photos need downloading from the current site (ask first).
- **Feedback round 1 (2026-10-15):** user likes **A**, but grey was too dominant. Revised A: page is mostly white #FFFFFF, light grey #EEF0F2 only as a band behind the story, charcoal #27262A kept for highlighted sections (packages panel).
- **Feedback round 2:** hero made white too: menu on white, video in a large inset frame at the top, headline on white below. Real photos added (hero still, Yanicke's portrait).

## Chosen direction
- **Direction:** A, Island Editorial, revised (mostly white). Design: https://claude.ai/artifact/RPLk4vL1abuPxCX3wY6FnP (artboard "A · Island Editorial")
- **Colors:** gold #82632A / gold-light #D4B26A (links, section labels, card numbers, bullets) · white #FFFFFF (page) · light grey #EEF0F2 (occasional band) · fog #DCE0E4 (image backdrop) · charcoal #27262A (text, highlighted panels) · cream #F5F2E9 (text on charcoal) · muted cream #E6DFCF / #CFCBC2 (secondary text on charcoal) · rule grey #6B6A70 (lines on charcoal)
- **Heading font:** Jost 200 (light), large and centered, 46–68px desktop
- **Accent font:** Pinyon Script, hero headline only ("aloha"). Not used for labels or section titles (user feedback: hard to read).
- **Section headings:** every section uses `SectionHeading`, after brookekeegan.com: Jost 300, 36px mobile / 52px desktop, centered, normal case, with an optional tracked uppercase label line beneath. No divider lines.
- **Body font:** Jost 300, 17–19px, line-height 1.7
- **Labels / nav:** Jost 400, 12–13px, uppercase, 2.4–3px tracking
- **Type scale:** 68 / 58 / 46 / 40 / 19 / 17 / 13 / 12
- **Spacing feel:** very airy, 112–128px section padding, 1040–1180px max content width
- **Buttons / links:** shared `Button` component. **Link** (default) = gold #82632A, semibold, underlined uppercase, no arrow (gold-light #D4B26A on charcoal): Meet the team, View the gallery, phone. **Primary** = filled pill, conversion only (Inquire, Email us). **Secondary** = outlined pill (Learn more on cards, Menu, Close). Links to unbuilt pages stay inactive until marked live in `src/content/site.ts`.
- **Image treatment:** full-width photo/video in a large inset frame (32px white margin); square corners; object-fit cover
- **Hero:** white menu bar (wordmark left, Menu pill right) → video in inset frame (~640px) → headline + tagline on white → short rule

## Audit (homepage, 2026-10-15)
- Ran the stacked audit versions: V0 baseline → V1 Lighthouse + axe → V2 Vercel Web Interface Guidelines → V3 Impeccable polish + animate → V4 Anthropic design critique → V5 bold visual + motion.
- **Chosen: V5** (all five passes). Lighthouse: mobile 98 / desktop 100 / accessibility 100 / best practices 100 / SEO 100.
- What V5 adds to the design: sticky header with a primary Inquire; scroll reveals (CSS scroll-driven, off under reduced motion); slow zoom on the hero film and contact photo; editorial gallery with hover captions; portrait with an offset gold frame and her pull-quote; 68px section titles; full-bleed contact; gold line on package-card hover; gold fill sweep on primary buttons.
- Design tokens: done. All 78 one-off sizes now come from tokens in `src/app/globals.css` (type scale `text-micro`…`text-display`, `leading-*`, `tracking-*`, container widths `max-w-content` etc., `aspect-portrait`, `ease-out-expo`, and layout sizes as CSS variables like `--hero-h`). Verified pixel-identical: 204/204 elements had the same computed sizes before and after.

## Assets needed
- Downloaded from the current site (with OK, 2026-10-15) and resized for web: `public/images/current-site/` (hero video still, portrait, team photo, 4 package photos, 25 portfolio photos).
- **Professional headshot of Yanicke.** The only portrait on the current site is a phone screenshot, cropped for now.
- Hero video downloaded to `public/video/hero.mp4` (1080p, 11 MB).
- Logo: confirm the header lockup with Yanicke.
