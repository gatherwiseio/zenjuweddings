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
3. Services / packages preview
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
- **Logo:** none exists. Use a text wordmark ("Zenju Weddings") until Yanicke supplies one
- **Colors:** none defined (current Wix site uses default blue #3A54B4; not a brand color)
- **Fonts:** none defined (current site uses Helvetica Light)
- **Photos:** 25 portfolio photos + hero video on the current site (links in `content/current-site.md`)
- **Tone of voice:** warm, aloha spirit, reassuring ("leave all the details up to us"), elegant
- **Tagline:** "Exclusive Wedding Planner of Hawaii" (site title)
- **Location / service area:** Honolulu, Oahu, Hawaii
- **Inquiry / contact details:** info@zenjuweddingsnevents.com · (808) 840-7404 · 1050 Bishop Street, 450, Honolulu, HI 96813
- **Reviews:** parked. Use marked placeholders. Source later: WeddingWire profile (link in `content/current-site.md`)

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
- **Colors:** white #FFFFFF (page) · light grey #EEF0F2 (occasional band) · fog #DCE0E4 (image backdrop) · charcoal #27262A (text, highlighted panels) · cream #F5F2E9 (text on charcoal) · muted cream #E6DFCF / #CFCBC2 (secondary text on charcoal) · rule grey #6B6A70 (lines on charcoal)
- **Heading font:** Jost 200 (light), large and centered, 46–68px desktop
- **Accent font:** Pinyon Script, one word per heading ("aloha", "beautifully", "our packages")
- **Body font:** Jost 300, 17–19px, line-height 1.7
- **Labels / nav:** Jost 400, 12–13px, uppercase, 2.4–3px tracking
- **Type scale:** 68 / 58 / 46 / 40 / 19 / 17 / 13 / 12
- **Spacing feel:** very airy, 112–128px section padding, 1040–1180px max content width
- **Buttons / links:** outlined pill (1px, full radius, uppercase tracked) for Menu and Inquire; underlined uppercase text links elsewhere
- **Image treatment:** full-width photo/video in a large inset frame (32px white margin); square corners; object-fit cover
- **Hero:** white menu bar (wordmark left, Menu pill right) → video in inset frame (~640px) → headline + tagline on white → short rule

## Assets needed
- Downloaded from the current site (with OK, 2026-10-15) and resized for web: `public/images/current-site/` (hero video still, portrait, team photo, 4 package photos, 25 portfolio photos).
- **Professional headshot of Yanicke.** The only portrait on the current site is a phone screenshot, cropped for now.
- Hero video file itself (1080p MP4 link in `content/current-site.md`), to download in Phase 4.
- Reviews (parked).
- Logo (none exists, text wordmark for now).
