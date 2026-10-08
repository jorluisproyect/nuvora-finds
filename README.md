# Nuvora Finds

Smart finds for everyday living.

A lightweight editorial discovery site for practical home, kitchen, organization, and small-space ideas. Built with Next.js and designed to deploy on Vercel.

## Current phase

- Editorial content site
- No affiliate links yet
- Prepared for future Amazon Associates integration
- Pinterest-friendly structure

## Run and validate

Use Node.js 24 (matching the existing Vercel project). Run `npm install`,
`npm run lint`, `npm test`, and `npm run build`. `npm start` serves the
production build locally. The lockfile is committed for reproducible installs.
With that server running, `npm run audit:site` checks all 21 editorial pages,
their metadata, internal links, static assets, social images, sitemap, robots,
redirects and genuine 404 responses. To verify production, run
`npm run audit:site -- https://nuvora-finds.vercel.app`.

## Editorial library

The ten original article URLs are preserved. Every guide now has 640–710
words of original practical advice, a conclusion, related guides, publication
and revision dates, individual metadata, canonical URLs, Article and Breadcrumb
JSON-LD. `lib/content.js` preserves the initial material and combines it with
the substantive additions in `lib/editorial.js`. The four primary categories
remain at `/category/home`, `/category/kitchen`, `/category/organization` and
`/category/small-spaces`. Short category routes redirect to these canonicals;
the former Useful Finds category redirects to Home.
Each article has its own statically generated 1200×630 editorial image at
`/article/[slug]/share`, used by Open Graph, Twitter, Article schema and the
Pinterest save link. These are original branded graphics, not product images.
Dates are formatted from content records in UTC instead of hardcoded bylines.

## Activate Amazon later

`AMAZON_ASSOCIATE_TAG` is deliberately unset. Once the real Amazon.com
tracking ID is supplied, configure it once in the existing project's Vercel
production environment and redeploy. Local development can use `.env.local`
(ignored by Git); `.env.example` contains no credentials.

Add only verified product records to `lib/products.js`: name, ASIN,
direct Amazon URL, primary category, related article slugs, active status and
an editorial explanation. The 14 records from the earlier catalog commit are
preserved as **inactive candidates**. That commit described them as verified
without retaining verification evidence; independently check each live listing
and its name, ASIN and specifications before marking a record active. The two
former Useful Finds candidates belong to Home. No candidates, product links,
images or prices are published. The optional image record reserves
a local asset path, alt text and proof of authorization; never download retailer
images without permission. No product image is displayed until an authorized
asset and rendering configuration are supplied.

Links are built centrally in `lib/amazon.js`. Inactive, incomplete, malformed,
non-Amazon, insecure and mismatched URL/ASIN records cannot produce a link.
No tracking ID means no product buttons. Real links use `sponsored nofollow`
and show the Amazon disclosure above the recommendation section. No price
fields or urgency messages exist.

## Analytics without a paid service

Vercel Web Analytics is installed behind `NEXT_PUBLIC_ENABLE_ANALYTICS`.
The existing team was confirmed to be Hobby on October 8, 2026: free pageviews
have a capped allowance and no automatic paid overage. It remains **off**;
the authenticated CLI returned `action_required` and explicitly requires the
account owner to interactively confirm activation. The owner can run:

```sh
npx vercel@62.7.0 project web-analytics enable nuvora-finds --scope jorluisproyects-projects
```

After enabling the free feature, set `NEXT_PUBLIC_ENABLE_ANALYTICS=true` in
the existing project's production environment and redeploy. Review the plan
before enabling after any future plan change. Do not activate a trial, paid
custom events, Speed Insights add-on or upgrade to collect these metrics.
Article popularity and category traffic can be read from page paths. The
integration removes query strings/fragments and honors Do Not Track.

Future Amazon clicks emit `nuvora:amazon-click` with product name, category
and source article. This is an adapter hook for a free collector, not a persisted
metric or a Vercel paid event. With the empty catalog, no Amazon clicks occur.
Connect a verified free collector later to measure aggregate clicks; do not
add paid custom-event tracking on Hobby.

Sources: [Vercel limits](https://vercel.com/docs/analytics/limits-and-pricing),
[Amazon disclosure requirement](https://affiliate-program.amazon.com/help/operating/agreement).

## Release and audit

Use the existing GitHub repository and its production branch `main`. Vercel
project `nuvora-finds` is linked to that repository and retains its existing
production domain, https://nuvora-finds.vercel.app. No replacement project,
database or paid service is needed. All editorial routes are generated statically;
system fonts and original CSS illustrations require no third-party image requests.
Pinterest-related save guidance remains in the article layout, with a working
save link that passes only the public article URL, title and editorial image.
No Pinterest SDK or tracking script is loaded.

October 8 audit: all ten guides already contained 642–708 words and seven
sections. Existing lint and build passed, but the content test failed because
the catalog contained 14 active products while it expected none. Fixed by
retaining all records inactive and testing that they cannot emit Amazon links.
The existing tracking configuration was cleared in Production, Preview and
Development to honor the requested unactivated Amazon architecture. No IDs,
credentials or retailer media were invented. Added hostile-URL tests for the
future link builder, per-guide social graphics, data-driven date display,
consistent branded titles, category breadcrumbs and HTTP audit tooling.

Baseline audit: build passed with a CSS alignment warning; no lint command or
tests existed; articles had only short summaries; mobile navigation was hidden;
no canonical URLs, dates or structured data existed; contact had no working
channel. The mobile home had no overflow or JavaScript errors. GitHub Issues
is enabled and serves as the current public feedback channel, requiring a GitHub
account. No private email address has been invented or published.

Next.js and React received security patches within the existing release lines.
PostCSS is overridden to patched 8.5.29. `npm audit --omit=dev` reports zero
production vulnerabilities. The development-only ESLint dependency chain still
reports the unpatched `braces` nested-pattern denial-of-service advisory; do not
feed untrusted glob patterns to lint tooling. This is recorded rather than
silenced or fixed through an unrelated major application upgrade.
