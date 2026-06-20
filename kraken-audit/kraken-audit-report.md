# KRAKEN DEEP AUDIT

Project: Kiora CosmoTech Website  
Live URL audited: https://kiora-cosmotech-website.vercel.app  
Repository audited: `E:\Codex\Kiora Cosmotech Website`  
Audit date: 2026-06-19  
Auditor: Codex using the `kraken-deep-audit` skill

## Executive Summary

Kiora CosmoTech now has a much stronger technical base than earlier iterations: the site builds successfully, core commercial pages are live, canonical tags are present on sampled URLs, the XML sitemap and `robots.txt` are reachable, key sampled pages show one visible H1, and homepage/product hero assets are already well-optimized by file size.

The highest-priority risks are not broad “SEO basics.” They are operational and semantic:

1. The quote form presents a success state without sending data anywhere.
2. Schema governance is inconsistent across shared commercial pages vs custom product pages.
3. City pages use `LocalBusiness` semantics without city-specific office proof.
4. There is no measurement stack for lead attribution or post-click behavior.
5. Product hero coverage is incomplete across the shared product system.

This means the site is indexable and publishable, but not yet fully trustworthy as a lead-generation machine or governance-safe at scale.

## Evidence Snapshot

### Live crawl sample

- `/` returned `200`, 1 H1, canonical present, 4 JSON-LD blocks, OG image `https://kiora-cosmotech-website.vercel.app/og/kiora-og.png`
- `/face-wash-manufacturer` returned `200`, 1 H1, canonical present, OG image `https://kiora-cosmotech-website.vercel.app/images/product/face-wash-hero.webp`
- `/face-serum-manufacturer` returned `200`, 1 H1, canonical present, OG image `https://kiora-cosmotech-website.vercel.app/images/product/face-serum-hero.webp`
- `/hair-serum-manufacturer` returned `200`, 1 H1, canonical present, OG image `https://kiora-cosmotech-website.vercel.app/images/product/hair-serum-hero.webp`
- `/sunscreen-manufacturer` returned `200`, 1 H1, canonical present, OG image `https://kiora-cosmotech-website.vercel.app/images/sunscreens/sunscreen-manufacturing.webp`
- `/blog` returned `200`, 1 H1, canonical present
- `/request-quote` returned `200`, 1 H1, canonical present
- `/robots.txt` returned `200`
- `/sitemap.xml` returned `200` with 68 URLs in the live XML

Supporting crawl output is saved in [live-scan.json](/E:/Codex/Kiora%20Cosmotech%20Website/kraken-audit/live-scan.json).

### Build verification

Build command run successfully via bundled pnpm:

```bash
pnpm build
```

Observed build result:

- Next.js `15.5.18`
- Production build: passed
- Type/lint validation phase inside build: passed
- Shared first-load JS: about `102 kB`
- Homepage route first-load JS: about `111 kB`

### Asset spot check

Homepage and current product hero assets are lightweight:

- `public/images/home/kiora-hero-desktop.webp`: 42.5 KB
- `public/images/home/kiora-hero-mobile.webp`: 51.1 KB
- `public/images/product/face-wash-hero.webp`: 46.9 KB
- `public/images/product/face-serum-hero.webp`: 56.7 KB
- `public/images/product/hair-serum-hero.webp`: 87.3 KB

## What Is Working Well

- Core technical publishing path is healthy: build passes, sitemap is live, robots is live.
- Canonical tags are present on sampled pages.
- Sampled key URLs expose a single visible H1.
- Product/social image alignment is already fixed on Face Wash, Face Serum, Hair Serum, and Sunscreen.
- Legal pages now exist in source and are linked in the footer/quote experience.
- Manufacturer-oriented schema helpers exist in the shared schema library.
- Homepage LCP hero image is now a direct `<picture>/<img>` implementation with eager/high-priority loading.

## Priority Findings

## 1. Quote form is non-functional while presenting a success state

- Severity: Critical
- Confidence: High
- Priority: P1
- Owner: Developer + Growth/CRM
- Effort: Medium
- Affected URL/file:
  - `/request-quote`
  - [components/QuoteForm.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/components/QuoteForm.tsx)
- Evidence:
  - [components/QuoteForm.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/components/QuoteForm.tsx) lines 16-19 call `preventDefault()` and only set local `submitted` state.
  - Lines 111-117 render “Your manufacturing requirement has been recorded” despite no network request, no server action, and no API submission.
- Why it matters:
  - This is the most important commercial risk on the site. SEO can bring visits, but this flow currently cannot reliably capture leads.
  - The visible success message can create false confidence for both users and internal teams.
- Exact fix:
  - Implement a real submission path using a Next.js server action or API route.
  - Store submissions or send them to email/CRM.
  - Fire a measurable conversion event on successful submit.
  - Replace the current message with a true post-submit confirmation tied to the response status.
- Testing method:
  - Submit a form from staging.
  - Confirm record creation or delivery.
  - Confirm event fires in analytics/debug logs.
  - Confirm failure state appears when the endpoint is unavailable.

## 2. Schema governance is inconsistent across shared vs custom commercial pages

- Severity: High
- Confidence: High
- Priority: P1
- Owner: Developer + SEO
- Effort: Medium
- Affected URL/file:
  - [components/ContentPageRenderer.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/components/ContentPageRenderer.tsx)
  - [components/ProductPageRenderer.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/components/ProductPageRenderer.tsx)
  - [app/face-wash-manufacturer/page.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/app/face-wash-manufacturer/page.tsx)
  - [app/face-serum-manufacturer/page.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/app/face-serum-manufacturer/page.tsx)
  - [app/hair-serum-manufacturer/page.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/app/hair-serum-manufacturer/page.tsx)
- Evidence:
  - Shared commercial pages use a clean stack in [components/ContentPageRenderer.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/components/ContentPageRenderer.tsx) lines 29-36: `manufacturerSchema`, `breadcrumbSchema`, `serviceSchema`, `webPageSchema`, optional FAQ.
  - Custom product pages manually define `webPageSchema`, `pageOrganizationSchema`, and `detailedServiceSchema`, then also inject `manufacturerSchema`, causing a different entity pattern than the shared renderer.
  - Example: [app/face-wash-manufacturer/page.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/app/face-wash-manufacturer/page.tsx) contains custom schema objects around lines 531-576 and injects them around lines 632-640.
- Why it matters:
  - Search engines can handle multiple schema entities, but inconsistent modeling across near-identical commercial pages makes the graph harder to govern and easier to regress.
  - It also creates live-vs-code drift risk whenever shared helpers improve but standalone pages do not.
- Exact fix:
  - Normalize all commercial product pages onto one schema pattern:
    - `Manufacturer`
    - `WebPage`
    - `Service`
    - `FAQPage`
    - `BreadcrumbList`
  - Remove extra one-off `Organization` objects from custom commercial pages unless they carry uniquely necessary facts.
- Testing method:
  - Compare rendered JSON-LD on 5 product pages before/after.
  - Validate in Rich Results Test / Schema Markup Validator.
  - Confirm entity count and types match the agreed standard.

## 3. City pages use `LocalBusiness` semantics without city-specific office evidence

- Severity: High
- Confidence: High
- Priority: P1
- Owner: SEO + Developer
- Effort: Medium
- Affected URL/file:
  - `/city/*`
  - [app/city/[slug]/page.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/app/city/[slug]/page.tsx)
  - [lib/schema.ts](/E:/Codex/Kiora%20Cosmotech%20Website/lib/schema.ts)
- Evidence:
  - [app/city/[slug]/page.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/app/city/[slug]/page.tsx) line 46 injects `localBusinessSchema(...)`.
  - [lib/schema.ts](/E:/Codex/Kiora%20Cosmotech%20Website/lib/schema.ts) lines 29-44 define `LocalBusiness` with only country and region, not city-specific office data.
- Why it matters:
  - These are city-targeted commercial pages, but the schema implies local-business specificity that the site does not prove.
  - This is a semantic trust issue rather than a syntax error.
- Exact fix:
  - Replace `LocalBusiness` on city landing pages with `WebPage` + `Service` + shared `Manufacturer` unless a verifiable local office actually exists for that city.
  - Keep city intent in visible page copy, breadcrumbs, title, and service targeting instead of local-business identity.
- Testing method:
  - Revalidate city-page JSON-LD after update.
  - Confirm no local-office facts are implied unless they are true and visible.

## 4. No analytics or lead-measurement implementation is present

- Severity: High
- Confidence: High
- Priority: P1
- Owner: Growth + Developer
- Effort: Medium
- Affected URL/file:
  - Site-wide
  - `app`, `components`, `data`, `lib` source scan
- Evidence:
  - Repo-wide search across `app`, `components`, `data`, and `lib` found no GA4, GTM, Clarity, Plausible, or Umami implementation patterns.
  - There is also no evidence of server-side lead event capture tied to form submission.
- Why it matters:
  - Without measurement, you cannot connect SEO traffic to actual quote generation, CTA performance, WhatsApp click-through, or city/product page value.
  - It also blocks confident re-auditing of conversion improvements.
- Exact fix:
  - Add one primary analytics stack.
  - Track:
    - quote submit success
    - WhatsApp CTA clicks
    - phone clicks
    - top product CTA clicks
    - blog-to-commercial page transitions
- Testing method:
  - Confirm events in a debug view.
  - Confirm event names and parameters persist on both desktop and mobile.

## 5. Shared product hero system expects more product hero assets than currently exist

- Severity: Medium
- Confidence: High
- Priority: P2
- Owner: Design/Content + Developer
- Effort: Medium
- Affected URL/file:
  - [data/products.ts](/E:/Codex/Kiora%20Cosmotech%20Website/data/products.ts)
  - [components/ProductPageRenderer.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/components/ProductPageRenderer.tsx)
  - `public/images/product/*`
- Evidence:
  - [data/products.ts](/E:/Codex/Kiora%20Cosmotech%20Website/data/products.ts) lines 406-516 assign hero images for 14 product pages.
  - Actual files present in `public/images/product/` are only:
    - `face-wash-hero.webp`
    - `face-serum-hero.webp`
    - `hair-serum-hero.webp`
  - [components/ProductPageRenderer.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/components/ProductPageRenderer.tsx) correctly falls back when an image is missing.
- Why it matters:
  - This does not break the site, but it creates uneven visual quality and weaker share/brand consistency on the shared product routes.
- Exact fix:
  - Add the missing optimized hero assets or intentionally trim the expected hero mapping list to match what the brand actually wants to maintain.
- Testing method:
  - Verify each shared product page either shows a real hero image or a deliberately approved fallback.

## 6. Blog index schema is too thin for the content hub

- Severity: Medium
- Confidence: High
- Priority: P2
- Owner: SEO + Developer
- Effort: Low
- Affected URL/file:
  - `/blog`
  - [app/blog/page.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/app/blog/page.tsx)
- Evidence:
  - [app/blog/page.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/app/blog/page.tsx) line 25 injects only breadcrumb schema.
- Why it matters:
  - The blog index is a real content hub, but it is not identified as a `Blog`, `CollectionPage`, or `ItemList`.
  - This is a missed semantic opportunity for content discovery and internal topical clustering.
- Exact fix:
  - Add a `CollectionPage` or `Blog` schema with an `ItemList` of recent posts.
- Testing method:
  - Validate the updated blog listing schema and confirm the list references valid post URLs.

## 7. OG alignment is still generic on many service/content pages

- Severity: Medium
- Confidence: High
- Priority: P2
- Owner: Content + Developer
- Effort: Medium
- Affected URL/file:
  - `/about-kiora-cosmotech`
  - `/private-label-cosmetics-manufacturer-india`
  - `/third-party-cosmetic-manufacturing-india`
  - `/skincare-manufacturer-india`
  - `/blog`
  - [lib/seo.ts](/E:/Codex/Kiora%20Cosmotech%20Website/lib/seo.ts)
- Evidence:
  - Live crawl shows these pages still use `https://kiora-cosmotech-website.vercel.app/og/kiora-og.png`.
  - [lib/seo.ts](/E:/Codex/Kiora%20Cosmotech%20Website/lib/seo.ts) line 13 defaults metadata images to `siteConfig.ogImage`.
- Why it matters:
  - Social shares for high-intent commercial pages look generic, which weakens CTR and message match.
- Exact fix:
  - Add a page-specific OG plan for core service hubs first.
  - Keep a generic fallback only for pages that do not merit unique share media.
- Testing method:
  - Verify OG images with share debuggers and page source.

## 8. Homepage still leans on multiple client-side reveal/showcase layers for a lead-gen page

- Severity: Medium
- Confidence: Medium
- Priority: P2
- Owner: Developer
- Effort: Medium
- Affected URL/file:
  - `/`
  - [app/page.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/app/page.tsx)
  - [components/home/AnimatedSkincareHero.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/components/home/AnimatedSkincareHero.tsx)
- Evidence:
  - [app/page.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/app/page.tsx) imports `AnimatedSkincareHero`, `FloatingProductShowcase`, `HomeScrollReveal`, and `LiquidProcessJourney`.
  - [components/home/AnimatedSkincareHero.tsx](/E:/Codex/Kiora%20Cosmotech%20Website/components/home/AnimatedSkincareHero.tsx) line 40 still wraps hero text in `HomeScrollReveal`.
- Why it matters:
  - The site has already improved LCP image delivery, but render complexity still exists in the component tree.
  - For a B2B lead page, every extra client-side motion layer should justify its cost.
- Exact fix:
  - Audit which homepage animation components are truly needed.
  - Prefer static render for above-the-fold content.
- Testing method:
  - Compare homepage render and interaction metrics before/after in lab and field.

## 9. Product schema helper remains available even though these pages are service pages

- Severity: Low
- Confidence: High
- Priority: P3
- Owner: Developer
- Effort: Low
- Affected URL/file:
  - [lib/schema.ts](/E:/Codex/Kiora%20Cosmotech%20Website/lib/schema.ts)
- Evidence:
  - [lib/schema.ts](/E:/Codex/Kiora%20Cosmotech%20Website/lib/schema.ts) lines 123-134 still export `productSchema`.
- Why it matters:
  - It is easy for future contributors to reintroduce retail `Product` schema on B2B manufacturing pages.
- Exact fix:
  - Remove the helper or comment it as intentionally unused for this site model.
- Testing method:
  - Search the repo to confirm no product-manufacturing page injects retail `Product` schema.

## 10. Sitemap `lastModified` values are hard-coded rather than content-driven

- Severity: Low
- Confidence: High
- Priority: P3
- Owner: Developer + SEO
- Effort: Low
- Affected URL/file:
  - [app/sitemap.ts](/E:/Codex/Kiora%20Cosmotech%20Website/app/sitemap.ts)
- Evidence:
  - [app/sitemap.ts](/E:/Codex/Kiora%20Cosmotech%20Website/app/sitemap.ts) uses fixed dates:
    - homepage: `"2026-06-16"`
    - all other static routes: `"2026-06-15"`
- Why it matters:
  - Search engines treat `lastmod` as a freshness hint. Hard-coded values age poorly and stop reflecting actual maintenance.
- Exact fix:
  - Generate route-specific update dates from maintained content metadata or use a simpler sitemap without misleading `lastModified`.
- Testing method:
  - Compare source-controlled update dates with live XML output after deployment.

## Live vs Source Notes

- Live robots and sitemap are reachable and consistent with `app/robots.ts` and `app/sitemap.ts`.
- Source contains legal pages and footer/legal links; those should remain part of future crawl checks.
- Shared service/content pages already use cleaner schema wiring than the custom Face Wash, Face Serum, and Hair Serum commercial pages.
- The shared product system is ready for more hero images, but the asset library is not yet complete.

## Recommended Fix Order

1. Make `/request-quote` submit for real and track success.
2. Normalize schema on custom commercial pages to the shared service model.
3. Replace city-page `LocalBusiness` schema with safer `Manufacturer + Service + WebPage` semantics.
4. Add analytics and conversion events.
5. Finish product hero asset coverage for shared product routes.
6. Strengthen blog index schema.
7. Add page-specific OG images for commercial hubs.
8. Review homepage animation/reveal layers.
9. Remove or retire unused retail product schema helper.
10. Make sitemap freshness data honest.

## Verification Performed

- Live sampled pages fetched directly
- Live `robots.txt` fetched directly
- Live `sitemap.xml` fetched directly
- Source files inspected:
  - schema helpers
  - layout metadata
  - homepage hero
  - shared product renderer
  - shared content renderer
  - custom product pages
  - city pages
  - blog pages
  - quote form
- Production build completed successfully

## Limitations

- No Google Search Console data was available.
- No GA4/GTM/Clarity implementation exists to validate live behavior tracking.
- No backlink dataset or competitor crawl was available inside this audit pass.
- Live schema parsing on every subpage was partially constrained by intermittent DNS resolution in the shell, so schema conclusions are grounded primarily in source review plus sampled live output.
