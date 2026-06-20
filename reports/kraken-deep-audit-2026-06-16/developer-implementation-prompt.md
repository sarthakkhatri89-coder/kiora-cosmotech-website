# KRAKEN DEEP AUDIT - Developer Implementation Prompt

You are working on the existing Kiora CosmoTech Next.js website.

## Goal
Implement the highest-priority SEO and conversion fixes from the KRAKEN DEEP AUDIT without redesigning the site or breaking current routes, content structure, or schema logic.

## Work in this order

1. Fix lead capture
- File: `components/QuoteForm.tsx`
- Replace the current UI-only submit flow with a real submission destination.
- Acceptable options: Next.js server action, API route, webhook, CRM integration, or email delivery.
- Add:
  - success state
  - error state
  - loading state
  - analytics event hook
- Do not change page design more than necessary.

2. Add analytics and event tracking
- Primary files likely: `app/layout.tsx`, CTA components, `components/QuoteForm.tsx`, `components/Header.tsx`, `components/Footer.tsx`
- Add GA4 or GTM.
- Track:
  - quote form submit success
  - WhatsApp click
  - phone click
  - primary hero CTA click
  - request quote CTA click on product pages
- Keep implementation lightweight and Vercel-friendly.

3. Fix canonical host configuration
- File: `data/siteConfig.ts`
- Replace the Vercel subdomain default if a branded production domain is intended.
- Ensure updated value flows correctly to:
  - canonical tags
  - robots host
  - sitemap URLs
  - Open Graph absolute URLs
  - JSON-LD URLs
- Do not change if the Vercel subdomain is intentionally the main domain.

4. Add legal trust pages
- Create only the minimum required pages:
  - Privacy Policy
  - Terms & Conditions
- Add footer links.
- Mention data handling briefly near the quote form if helpful.
- Keep wording factual and generic. Do not invent legal claims.

5. Normalize schema across shared renderers
- Files:
  - `components/ProductPageRenderer.tsx`
  - `components/ContentPageRenderer.tsx`
- Add richer page-level schema, matching the pattern used by the stronger custom product pages.
- Prefer:
  - `manufacturerSchema`
  - `WebPage`
  - existing breadcrumb and FAQ schema where visible
- Do not add fake ratings, reviews, addresses, or certifications.

6. Remove duplicate Service schema on hair serum page
- File: `app/hair-serum-manufacturer/page.tsx`
- Remove the generic `serviceSchema(...)` call and keep the detailed service schema object only.

7. Tighten metadata
- Prioritize:
  - `app/hair-serum-manufacturer/page.tsx`
  - `app/face-wash-manufacturer/page.tsx`
  - `app/sunscreen-manufacturer/page.tsx`
  - long blog metadata entries in `data/blogPosts.ts`
- Goal:
  - titles mostly under ~60-65 chars
  - meta descriptions mostly around 120-155 chars
- Keep primary keyword early.

8. Improve blog EEAT presentation
- File: `app/blog/[slug]/page.tsx`
- Add a reusable author/editorial note below the article body.
- Keep it factual and aligned with visible content.

9. Reduce heavy HTML on the longest product pages
- Focus:
  - `app/face-wash-manufacturer/page.tsx`
  - `app/face-serum-manufacturer/page.tsx`
  - `app/sunscreen-manufacturer/page.tsx`
  - `app/hair-serum-manufacturer/page.tsx`
- Do not hide essential crawlable content.
- Safest approach:
  - collapse secondary keyword banks
  - reduce repetitive chip libraries
  - keep primary commercial sections fully visible

## Do not do
- Do not redesign the site
- Do not remove important content blocks without replacing their SEO value
- Do not add fake trust signals
- Do not add fake certifications, ratings, reviews, or medical claims
- Do not switch routing strategy
- Do not break sitemap, robots, metadata, or existing internal links

## Validation
- Run `next build`
- Check live metadata on key pages after deploy
- Recheck JSON-LD types on:
  - `/face-wash-manufacturer`
  - `/face-serum-manufacturer`
  - `/sunscreen-manufacturer`
  - `/hair-serum-manufacturer`
  - one shared-renderer product page
- Verify quote form submissions actually reach the chosen destination
- Verify analytics events fire in debug mode
