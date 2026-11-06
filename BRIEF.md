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
- **Custom domain:** https://www.zenjuweddingsnevents.com (her current Wix domain; confirmed 2026-11-06, not connected to Vercel yet)
- **Current website:** https://www.zenjuweddingsnevents.com/ (source for copy, hero video, photos)

## Scope
Pages, in nav order: Home · About Us / The Team · Services & Packages · Gallery · Preferred Vendors · Contact Us (Gallery moved above Vendors in the menu, 2026-11-06)

**Homepage approved; now building the other five pages**, one at a time in nav order. Pages not built yet stay non-clickable in the menu.

### Home
1. Hero: live video background, using the existing video from the current website
2. About Zenju Weddings
3. Services / packages preview: a snapshot of the Services page (2026-11-06): the same six packages in the same order (Barefoot Nuptials, All Inclusive Elopement, Hoʻopono, I Ke Aloha, Kuʻu Lei, Zenju Platinum), each with its first photo, overview, first three inclusions, price + tax, a "See all inclusions" pop-up and "Learn more" → /services#<id>. Tabs: two per row on phones, three on tablets, one row from 1024px, stacked from 1280px. The old Events package is gone (no longer offered).
4. Gallery preview
5. Reviews
6. Call to action to contact Yanicke

### About Us / The Team
- Move her content over from her [Our story](https://www.zenjuweddingsnevents.com/about-5) page.
- **Built 2026-11-05** (`/about`, content in `src/content/about.ts`): page banner (portfolio florals, "The story behind the vision"), lotus statement (founded 2010, named after Zen and Jude), Meet Yanicke (portrait + her story in three paragraphs, paraphrased so it differs from the homepage version), Our Vision (team photo from her page, two paragraphs, three short points drawn from her vision text, a strip of four of her detail photos with gentle drift, her closing words), then the shared call to action. No facts added.

### Menu
- **Revised 2026-11-06** after brookekeegan.com: light gray (mist) full-screen panel that fades in; the Zenju wordmark centered in black over a fine rule, with Close exactly where the Menu button sits (no jump); page links in charcoal, growing slightly on hover, current page not highlighted; bottom row with Contact + email (left), the black lotus mark (center) and Social: Facebook / Instagram (right), stacked and centered below 1024px.

### Services & Packages
- Move her content over from her [Wedding packages](https://www.zenjuweddingsnevents.com/packages) page, structured to be easy to read and search-friendly.
- [Marriage license](https://www.zenjuweddingsnevents.com/marriage-license) content as a separate section at the bottom.
- Each package keeps an anchor (`/services#<id>`) for the homepage "Learn more" links.
- **Built 2026-11-05** (`/services`, content in `src/content/services.ts`) from Yanicke's updated package copy, in her order: Barefoot Nuptials ($5,500), All Inclusive Elopement ($8,750), Hoʻopono day-of ($2,900), I Ke Aloha partial ($4,800), Kuʻu Lei full ($7,500, most popular), Zenju Platinum ($15,000); all + 4.712% GE tax. Clean white rows (type, name, one-line summary, price); opening one shows everything included plus a price card, and closes the others (her "drop down per package" ask). Anchors: barefoot, elopement, hoopono, i-ke-aloha, kuulei, platinum. Marriage license section at the bottom (essentials + State of Hawaii link; age rule added 2026-11-06 from the Hawaii Department of Health page: 18, or under 18 with a parent's or guardian's consent), redesigned 2026-11-06 as three numbered steps, a white at-a-glance panel ($65 fees, valid 30 days, what to bring, good to know) and a centered Apply online button.
- **Revised 2026-11-06:** every package uses her exact copy as a one-column list (gray icon, item name, her description). Closed rows show type, name, one-line summary and the price on the right; no photos until opened. Opening a row shows three photos from her portfolio chosen to show the level of involvement, pins the package name under the header while you scroll, and lands you at the top of that row (any other open row closes instantly). Price card names the package and shows price, tax, grand total, her booking notes and a full-width Contact us button.
- **Revised again 2026-11-06:** lighter hero shade on this page; open rows keep their summary line and are no longer pinned (the price card names the package). Tiles were tried for Barefoot's inclusions and reverted: all packages keep the one-column icon list. Photos: each package now uses one wedding from her portfolio page, not a mix: Barefoot = the North Shore beach couple (plus the maile lei); Elopement = Kualoa Ranch; Hoʻopono = the Paradise Cove couple plus the Loulu Palms tent (2 photos, user's pick); I Ke Aloha = Royal Hawaiian Golf Club (2 photos, one low-res); Kuʻu Lei = the garden estate's setup and design (no couple); Platinum = the cake-cutting couple's evening reception at the garden estate (cake kiss, hula, photo display under string lights; user's pick). More of her own photo sets would let every package have its own couple; I Ke Aloha needs it most.
- **Open with Yanicke:** her tax/total figures for three packages don't match 4.712% (shown base price + tax only for now).

### Preferred Vendors
- Move her content over from her two preferred vendor pages ([part 1](https://www.zenjuweddingsnevents.com/news-all), [part 2](https://www.zenjuweddingsnevents.com/team-1)).
- An easily browsable directory: vendor imagery, categories, and filtering.
- **Built 2026-11-06** (`/vendors`, content in `src/content/vendors.ts`): all 32 listings in 7 sections (Hair & makeup, Officiants, Photographers, Videographers, Florists, Rentals & décor, DJs & emcees), all visible. A bar pinned under the header holds a search box (name, company, description, category) and underline tabs that jump to each section and underline the one you're in. Cards: a photo from the vendor's own website, name, one-line description (condensed from their site; DJs from her page 2), website, phone, email. Vendors with no usable photo show a name tile.
- **Revised 2026-11-06 (round 2):** no search; centered underline tabs on an edge-to-edge rule, pinned under the header; each section title over a continuous rule, no counts; rows in two columns from 1024px (one below) with unbroken row rules, text centered against a 4:3 logo/portrait box. Images: the vendor's own logo, or, with no usable logo, their portrait from their own site, or a name tile. Done: Hair & makeup, Officiants, Photographers, Videographers. Florists, Rentals and DJs still show cropped photos. Cherbu: website gone, so her Instagram @cherbumakeup. All vendor websites checked and load. Services hero is the garden reception (portfolio-09).
- **Revised 2026-11-06 (round 3):** each vendor is a card (two per row from 1024px); links show a gold icon plus the text (Website or Instagram, the phone number, the email address); no rule under section titles; logos sit on a light beige box (white logos recolored to charcoal: Accel, Belle de Jour, Isle Media); with no logo, the owner's portrait from their about/team page (June Dillinger, Ryan Souza via I Do Hawaiian Weddings' team page, Kalehua Featheran, Dave Miyamoto, Tom Bishop, Glenn Alonzo of Red Ring, Cherbu's Instagram photo); with neither, gold initials on beige (Blake La Benz, Defining Moments DJs, Emcee Ron, and J'Adore until their site, which was timing out, can be re-checked for a logo). Mersadi Olson's wordmark is redrawn from her site's brand font. Spinning Web now links spinningwebfloristhi.com.
- **Vendor links settled (user, 2026-11-06):** Spinning Web stays without a link; IMF Visions links to imfvisions.com and Isle Media to islemedia.com, as listed.

### Gallery
- 6 albums to start, each with a cover image and the couple's names.
- Clicking an album opens all its photos, with a back arrow to return to the albums.
- No database for now (can be added later on a separate quote).
- **Built 2026-11-06, regrouped by couple** (`/gallery`, `/gallery/<album>`, content in `src/content/gallery.ts`): names, venues and photo credits come from the hidden captions in her own Wix gallery. Albums: Arvind + Victoria (45: North Shore portraits, Indian ceremony and garden reception at Oahu Wedding Villas, Stephen Ludwig), Maksim + Albert (6, Kualoa Ranch), Onesis + Pavel (4, Loulu Palms Estate), Chaeli + Ryan (2, Royal Hawaiian Golf Club), Serena + Bradley (2, Turtle Bay Resort), More Love Stories (6: Daniel + Tyler at Paradise Cove, Alex + Tasha, Cafe Julia, Paliku Gardens and two details). Team photos left out.
- Gallery page: neutral pool-and-palms hero (unused elsewhere), zig-zag album list after brookekeegan.com/portfolio-weddings (cover one side; place, names, photo count, View album the other). Album page: Gallery / names breadcrumb, place, story and photographer, balanced justified rows (rows split evenly in code), lightbox with left/right, keyboard and swipe.
- No wedding dates are shown on the gallery (user decision).
- **Album grouping kept (2026-11-06):** the user left it to our judgment. Uncaptioned photos stay grouped with the couple whose captioned photos share their venue, light and look (e.g. all 45 under Arvind + Victoria); "Onesis" kept as her caption spells it; Daniel + Tyler and Alex + Tasha stay in More Love Stories until she has more photos of them.
### Contact Us
- No details specified yet.

**Out of scope / later:**
- Gallery database (separate quote)

## Inspiration
<!-- One entry per site: what the user wants taken, then what Claude observed. -->
**Overall:** both sites set the overall vibe Yanicke likes: typography (headings especially), layout, and general feel. Take the whole aesthetic, not one specific feature.
- **Built 2026-11-06** (`/contact`, content in `src/content/contact.ts`): photo hero; "Tell us about your day" intro with four reasons to reach out (on Oʻahu since 2010, founder-led, trusted vendor network with wholesale discounts, $2.5M liability coverage on coordination packages) beside a minimal form (name, email, message, Send); her WeddingWire reviews; tiles for address, email, phone and fax, plus Facebook / Instagram.
- **Revised 2026-11-06:** left column compacted (label, one-line title, one-sentence intro, the four reasons in a 2×2 grid) beside a beige form box; testimonials as an endless edge-to-edge ribbon (drifts left, pauses on hover, drag/swipe/scroll either way, arrows step one card; still under reduced motion); "Get in touch" is a slim four-cell strip (icon, label, value; no socials, no hover fill). Footer top rule removed site-wide.
- **Same form as a pop-up:** every link to /contact (header Inquire, all "Contact us" buttons) opens it in place on other pages; on /contact it glides to the form; the menu's Contact Us still goes to the page.
- **Inquiry form (2026-11-06):** the Contact page and the site-wide Inquire pop-up embed her Gatherwise form ("Work with us", `src/components/GatherwiseForm.tsx`); inquiries go into Gatherwise, not through the site. The frame grows to the form's height (embed_resize message, Gatherwise origin only). Its look comes from `gatherwise/inquiry-form.css`, which has to be pasted into that form's CSS in Gatherwise (the form in a beige #F5F2E9 box on white, "Work with us" styled like the old "Send us a note" heading, Jost, tracked uppercase labels, underline-only inputs, gold required star, dark pill button with gold fill on hover); the Contact page no longer draws its own beige panel or heading around it, and (with only five questions showing) its heading, intro and four reasons sit together as one compact group, vertically centred beside the form on desktop. The Inquire pop-up is just the form (760px wide) with the close X over its top-right corner. While the form loads it sits hidden behind a small "Loading form…" spinner on beige and fades in once its height stops changing (Gatherwise builds it up in steps over ~1–2s), so the unstyled version never shows. Its cookie banner used to show inside the embed on every load (`gw_consent` was a SameSite=Lax cookie that browsers don't keep in a frame on another site); fixed on the Gatherwise side. The earlier site form (`InquiryForm.tsx` and the `/api/inquiry` Resend route) was deleted 2026-11-06. Gatherwise's cookie banner inside the embed is fixed on the Gatherwise side (user, 2026-11-06).

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
- **Logo:** supplied 2026-10-15 (green lotus circle + "Zenju Weddings / and events of Hawaii, LLC"), low-res (478×288). Keep the lotus mark and favicon; redo the wordmark. Files in `public/images/brand/`. Lotus redrawn as a vector (`public/images/brand/lotus.svg`). Favicons: original green `favicon-green.svg` (#8FB23F) is live as `src/app/icon.svg` + `apple-icon.png`; dark `favicon-dark.svg` kept as an alternative. **Header logo** (`src/components/Logo.tsx`): green lotus + her wordmark redrawn as clean vector strokes matched to her original logo, which is set in ITC Kabel (letter positions, crossed W, slanted e, Kabel g with ear and open lower loop): "Zenju Weddings" (`public/images/brand/zenju-wordmark-v2.svg`, #416274 `lagoon`, cream on dark panels) used as a CSS mask filled with a color token, over a small tracked uppercase "and events of Hawaii, LLC" line (Jost): white over the hero video, #84AB3A `leaf` everywhere else. Used in header, menu and footer. Her dark lotus (no circle) sits above the founding statement as a small mark. Options canvas: https://claude.ai/artifact/AbwRWni7GAUkaJVYFoFLjQ (deleted 2026-10-15 after the decision) (exploration; header logo chosen above)
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
- **SEO (approved and wired in 2026-11-06):** canvas https://claude.ai/artifact/QTVRj4DvoXxdE4KWrGM6a8 (deleted 2026-11-06 after the decision; the final copy lives in `src/content/seo.ts`). Share image option A (cream frame, green lotus, wordmark, "Celebrations rooted in aloha", "Wedding planning & design · Honolulu, Hawaii · Since 2010") at `public/images/share.png`, on every page. All titles, search and share descriptions live in `src/content/seo.ts` (`pageMetadata()` adds canonical, Open Graph, X card and the image). **Name rule (user): titles, share text and the site name always say "Zenju Weddings and Events".** Home "Zenju Weddings and Events | Oahu Wedding Planner in Honolulu"; inner pages "<Page> | Zenju Weddings and Events", with "Oahu" added to Services ("Oahu Wedding Packages & Pricing") and Gallery ("Oahu Wedding Gallery"); albums "<Couple> | Gallery | Zenju Weddings and Events" (Arvind + Victoria and More Love Stories have shorter descriptions). Link previews show the image once the domain moves here (its address is on her domain). Headings left as designed.
- **Banner photos load at once (2026-11-06):** inner-page banners are ready-made WebP files (640/1080/1600 wide, 40–240 KB, `public/images/hero/`, made by `node scripts/hero-images.mjs` from the list in `src/content/heroes.ts`), served straight from the CDN instead of being resized on the first visit (which cost 0.5–0.9 s per location and per size). Each page preloads its banner at high priority with a blurred copy underneath, and once a page is idle the other banners are fetched in the background (`HeroPrefetch`, skipped on save-data / 2G). New or changed banner photo: add it to `heroes.ts` and rerun the script.
- **Search setup (2026-11-06, live on the next push):** `metadataBase` and a canonical link on every page point at https://www.zenjuweddingsnevents.com (so the vercel.app copy never competes in search); `/sitemap.xml` (every page and album) and `/robots.txt` (`src/app/sitemap.ts`, `robots.ts`); her business details as schema.org JSON-LD on the homepage (`src/components/BusinessJsonLd.tsx`: legal name, address, phone, email, founder, founded 2010, serves Oahu, Facebook/Instagram, the six packages with prices). Headings left as designed (user decision).
- **Old site moved over (2026-11-06):** every page on her Wix site (12 pages + 8 blog posts, from its sitemaps and links) is listed in `content/old-site/pages.md` with where it goes; redirects in `src/redirects.ts`, always on (they only apply on the domain serving the new site, so nothing to switch on at launch) (all permanent, e.g. /packages → /services, /about-5 → /about). **The blog isn't moving (user decision, 2026-11-06):** each of the 8 posts redirects to the page closest to its topic (permits → the marriage license section, elopement guide → the elopement package, the Aimsleigh + Carter story → Gallery, the rest → Services, /blog → home). Their full text, dates and cover image links stay saved in `content/old-site/blog/`.
- **Section headings don't animate** (2026-11-05): the gold label's letter-spacing reveal and the title's blur-rise were removed at the user's request.
- **Smooth scrolling and moving pictures (2026-11-05, same setup as One & Only Events):** Lenis smooth scrolling site-wide (pauses while the menu or a pop-up is open), GSAP photo drift inside the gallery tiles (each at its own speed) and behind the closing call to action. Off for reduced motion. Replaces the CSS-only photo parallax.
- **Motion:** CSS-only, scroll-driven where supported, nothing hidden from search engines, all off under reduced motion. Hero headline and header never start transparent (keeps the LCP). Lighthouse after: SEO 100, performance 96 mobile / 100 desktop.

## Homepage directions
- **Sections compared:** Hero (video) · About · Services preview
- **Claude Design canvas:** https://claude.ai/artifact/RPLk4vL1abuPxCX3wY6FnP (deleted 2026-10-15 after the decision) (private to the owner until shared)
- **Directions:**
  - **A, Island Editorial** (Brooke Keegan): full-bleed video, thin wordmark and Menu pill; Jost 200 headings with a Pinyon Script accent word; fog #DCE0E4 / charcoal #27262A / cream #F5F2E9; packages on a charcoal panel.
  - **B, Warm Aloha Romance** (Beth Helmstetter): slim top nav; framed tagline card over the video; Cormorant Garamond uppercase + italic, Karla body; ivory #FEFBF6 / blush #F3E9E4 / brown #5E351C; 3-up photo row; package cards with text links.
  - **C, Golden Hour Modern** (bolder, inspired by Yanicke's fashion background): split hero (video left, headline right); Bodoni Moda display + Manrope; sand #EFE4D2 / terracotta #9C4630 / deep green #1F3A2E; package names as large type rows.
- Photos are labeled placeholders. Real photos need downloading from the current site (ask first).
- **Feedback round 1 (2026-10-15):** user likes **A**, but grey was too dominant. Revised A: page is mostly white #FFFFFF, light grey #EEF0F2 only as a band behind the story, charcoal #27262A kept for highlighted sections (packages panel).
- **Feedback round 2:** hero made white too: menu on white, video in a large inset frame at the top, headline on white below. Real photos added (hero still, Yanicke's portrait).

## Chosen direction
- **Direction:** A, Island Editorial, revised (mostly white). Design: https://claude.ai/artifact/RPLk4vL1abuPxCX3wY6FnP (deleted 2026-10-15 after the decision) (artboard "A · Island Editorial")
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

## Audit (inner pages: About, Services, Vendors, Gallery, Contact, 2026-11-06)
- One stacked round across all five pages (they share components): V0 baseline → V1 Lighthouse + axe → V2 Vercel Web Interface Guidelines → V3 Impeccable polish + animate → V4 Anthropic design critique → V5 bold visual + motion.
- **Chosen: V5 on every page** (reviewed page by page). Lighthouse on phones: speed 88–96 → 91–96, accessibility 96 → 100 on every page, best practices and SEO 100; pages 7–25% lighter.
- What it changed: photos served as AVIF; banner photo fetched first; secondary gray text darkened to 4.5:1 (package details, vendor tabs, photo counts, menu labels); About statement words start at half strength (3:1) instead of nearly white; reviews ribbon keyboard-focusable; opening a package or a vendor tab updates the address (/services#kuulei, /vendors#florists); couple and vendor names marked not to translate; album photos grow out of the grid into the viewer and shrink back on close (fade under reduced motion); decorative 01–06 numbers removed from packages and About's three points; Contact's four reasons stay a 2×2 table on phones; square album covers on phones (4:5 from 768px); "Photos by Stephen Ludwig" links to Preferred Vendors; album covers drift inside their frames; larger album titles on desktop; a gold line draws under a package row on hover.
- Changed on review: an open package spans the full width (no left indent); no gold line across vendor cards on hover; vendor website / phone / email links turn gold over a light gold underline on hover; on phones each vendor's logo or portrait sits on top of the card (side by side from 640px); Contact's four reasons go one per row on phones (2×2 from 640px, replacing V4's 2×2 at every width); under 380px the header shows a plain three-line menu icon (no circle).
- Photo credits checked: Stephen Ludwig is credited in her own Wix captions for Arvind + Victoria, Maksim + Albert (Kualoa Ranch) and Onesis + Pavel; the other albums carry no credit.
- Left as is: the logo's green "and events of Hawaii, LLC" line is under 4.5:1 (logos are exempt); mobile banner LCP ~3.3s under Lighthouse's slow-4G simulation.

## Assets needed
- Downloaded from the current site (with OK, 2026-10-15) and resized for web: `public/images/current-site/` (hero video still, portrait, team photo, 4 package photos, 25 portfolio photos).
- **Professional headshot of Yanicke.** The only portrait on the current site is a phone screenshot, cropped for now.
- Hero video downloaded to `public/video/hero.mp4` (1080p, 11 MB).
- Logo: confirm the header lockup with Yanicke.
