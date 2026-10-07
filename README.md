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

## Editorial library

The ten original article URLs are preserved. Every guide now has 640–710
words of original practical advice, a conclusion, related guides, publication
and revision dates, individual metadata, canonical URLs, Article and Breadcrumb
JSON-LD. `lib/content.js` preserves the initial material and combines it with
the substantive additions in `lib/editorial.js`. The four primary categories
remain at `/category/home`, `/category/kitchen`, `/category/organization` and
`/category/small-spaces`. Short category routes redirect to these canonicals;
the former Useful Finds category redirects to Home.

## Activate Amazon later

`AMAZON_ASSOCIATE_TAG` is deliberately unset. Once the real Amazon.com
tracking ID is supplied, configure it once in the existing project's Vercel
production environment and redeploy. Local development can use `.env.local`
(ignored by Git); `.env.example` contains no credentials.

Add only verified product records to `lib/products.js`: name, ASIN,
direct Amazon URL, primary category, related article slugs, active status and
an editorial explanation. The catalog is currently empty, with no invented
ASINs, products, affiliate URLs or prices. The optional image record reserves
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
The existing team is Hobby: free pageviews have a capped allowance and no
automatic paid overage. It remains **off**, because Vercel CLI requires the
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
Pinterest-related save guidance remains in the article layout.

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
