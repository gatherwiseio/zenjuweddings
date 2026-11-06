# Her current site (Wix): every page, and where it goes on the new site

Scanned 2026-11-06 from https://www.zenjuweddingsnevents.com/sitemap.xml (pages, blog posts and
blog categories sitemaps) plus every internal link on those pages; nothing else is linked. When the
domain moves to the new site, each old address redirects as below (`src/redirects.ts`), so Google
results, bookmarks and links from other sites keep working.

- **Permanent (308):** the old page has a clear new home; Google moves its ranking over.
- The 8 blog posts and /blog also redirect permanently: the blog isn't moving to the new site
  (user decision, 2026-11-06). Their full text stays saved in `content/old-site/blog/`.

## Pages (12)

| Old address | Old page title | Words | New address | Redirect |
|---|---|---|---|---|
| / | Exclusive Wedding Planner of Hawaii | ~60 | / | none (same) |
| /about-5 | OUR STORY | ~445 | /about | permanent |
| /about-3-1 | PORTFOLIO | ~67 | /gallery | permanent |
| /packages | Wedding Packages | ~550 | /services | permanent |
| /marriage-license | Marriage License Requirements - Your Guide to Oahu Weddings | ~374 | /services#marriage-license | permanent |
| /news-all | Preset News (her Preferred Vendors I page) | ~171 | /vendors | permanent |
| /team-1 | PREFERRED VENDORS II | ~629 | /vendors | permanent |
| /contact | CONTACT | ~75 | /contact | none (same) |
| /form-submitted | Thank You (after her old contact form) | ~66 | /contact | permanent |
| /terms-and-conditions | Terms and Conditions | ~745 | /terms-and-conditions | none (same) |
| /copy-of-terms-and-conditions | Privacy Policy | ~629 | /privacy-policy | permanent |
| /blog | BLOGS (list of posts) | ~422 | / | permanent |

## Blog posts (8), all by Yanicke Lim Sang

| Old address (/post/…) | Title | Words | Redirects to (permanent) |
|---|---|---|---|
| hawaii-wedding-permits-in-2026-what-destination-couples-actually-need-to-know | Hawaii Wedding Permits in 2026: What Destination Couples Actually Need to Know | ~1,500 | /services#marriage-license |
| how-to-choose-the-right-island-for-your-hawaii-destination-wedding-oahu-maui-big-island-kauai | How to Choose the Right Island for Your Hawaii Destination Wedding (Oahu, Maui, Big Island & Kauai) | ~800 | /services |
| full-coordination-vs-day-of-coordination-hawaii-which-is-better-for-your-big-day | Full Coordination Vs Day of Coordination Hawaii: Which Is Better For Your Big Day? | ~1,100 | /services |
| the-ultimate-hawaii-destination-wedding-guide | The Ultimate Hawaii Destination Wedding Guide | ~1,100 | /services |
| aimsleigh-carter-an-intimate-lanikuhonua-elopement-in-paradise | Aimsleigh + Carter: An Intimate Lanikuhonua Elopement in Paradise | ~1,000 | /gallery |
| planning-a-2027-hawaii-wedding-why-coordination-should-be-booked-now | Planning a 2027 Hawaii Wedding? Why Coordination Should Be Booked Now | ~1,550 | /services |
| how-to-plan-a-hawaii-elopement-in-2027-a-5-step-guide-for-mainland-couples | How to Plan a Hawaii Elopement in 2027: A 5-Step Guide for Mainland Couples | ~1,100 | /services#elopement |
| navigating-hawaii-destination-wedding-costs-what-to-expect-how-to-budget | Navigating Hawaii Destination Wedding Costs: What to Expect & How to Budget | ~1,500 | /services |

Notes:
- The posts' cover images are hosted on cdn.marblism.com (an AI blog tool), not on Wix; save copies
  before the old site is switched off if the posts move.
- Only /packages and /marriage-license had their own search descriptions on the old site; the
  homepage's was "Upscale wedding and event coordination to all of Oahu…".
