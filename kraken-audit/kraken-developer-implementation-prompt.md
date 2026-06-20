# Developer Implementation Prompt

You are working on the existing Kiora CosmoTech website project.

Goal: implement the fixes from the latest KRAKEN DEEP AUDIT, starting with the highest-priority items only.

## Rules

- Do not redesign the website unless a fix requires a small layout adjustment.
- Preserve existing routing and content structure where possible.
- Do not add fake certifications, ratings, reviews, addresses, licenses, GST numbers, or claims.
- Do not introduce retail `Product` schema on B2B manufacturing pages.
- Keep all H1s real HTML.
- Keep canonical, metadata, and visible copy aligned.
- Run a production build after each batch.

## Batch 1: must do first

### 1. Fix quote capture

- File: `components/QuoteForm.tsx`
- Problem:
  - The form currently uses `preventDefault()` and sets local success UI only.
  - There is no real data submission.
- Required fix:
  - Add a real Next.js server action or API route.
  - Send/store the enquiry.
  - Show success only after the response succeeds.
  - Add a real failure state.
  - Keep the current WhatsApp fallback.
- Validation:
  - Submit from UI and verify the payload reaches the selected destination.

### 2. Normalize schema on commercial pages

- Files:
  - `app/face-wash-manufacturer/page.tsx`
  - `app/face-serum-manufacturer/page.tsx`
  - `app/hair-serum-manufacturer/page.tsx`
  - `app/sunscreen-manufacturer/page.tsx`
  - shared helpers if needed
- Problem:
  - Custom commercial pages define their own schema objects and diverge from shared renderers.
- Required schema model:
  - `Manufacturer`
  - `WebPage`
  - `Service`
  - `FAQPage`
  - `BreadcrumbList`
- Remove:
  - extra custom `Organization` duplicates on these pages unless absolutely required by visible facts
  - any leftover retail product semantics
- Validation:
  - Compare rendered JSON-LD across shared vs custom commercial pages and make the type set consistent.

### 3. Fix city-page schema semantics

- Files:
  - `app/city/[slug]/page.tsx`
  - `lib/schema.ts`
- Problem:
  - City pages use `LocalBusiness` without city-specific office evidence.
- Required fix:
  - Replace city-page `LocalBusiness` usage with safer `Manufacturer + Service + WebPage + BreadcrumbList`.
  - Do not add city-specific office facts unless they are true and visible on the page.
- Validation:
  - Check rendered JSON-LD on at least one city page.

### 4. Add measurement stack

- Files:
  - likely `app/layout.tsx` plus form/CTA locations
- Required tracking:
  - quote submit success
  - WhatsApp CTA click
  - phone click
  - key product CTA click
  - blog-to-commercial click
- Keep implementation lightweight and factual.

## Batch 2: next after Batch 1

### 5. Complete product hero asset strategy

- Files:
  - `data/products.ts`
  - `public/images/product/`
  - shared product hero renderer if needed
- Problem:
  - Data expects more product hero files than actually exist.
- Required fix:
  - Either add the missing hero images or reduce the mapping list so expectations match reality.
  - Keep fallback behavior intact.

### 6. Improve blog hub schema

- File:
  - `app/blog/page.tsx`
- Required fix:
  - Add `CollectionPage` or `Blog` + `ItemList` schema for the blog index.

### 7. Improve OG image strategy for service hubs

- Files:
  - `lib/seo.ts`
  - major page metadata callers
- Required fix:
  - Keep generic fallback.
  - Add page-specific OG images to the highest-value commercial pages.

### 8. Review homepage motion layers

- Files:
  - `app/page.tsx`
  - `components/home/*`
- Goal:
  - Reduce non-essential above-the-fold reveal/showcase behavior.

## Deliverables after implementation

- List of files changed
- What was fixed in each batch
- Build result
- Routes manually tested
- Any manual decision still required
