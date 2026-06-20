# Radiant Clinical Luxury Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Kiora CosmoTech website into a lively, luxury derma-cosmetic, conversion-focused experience while preserving the current route structure, SEO architecture, and lead-generation flows.

**Architecture:** Keep the existing Next.js App Router structure and upgrade the site through shared presentation layers first. Centralize the new visual language in global CSS, header/footer, and hero/rendering components so the homepage, service pages, product pages, city pages, and blog inherit the redesign without risky route-by-route rewrites.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind utility classes, existing shared data/rendering system

---

## File Structure

**Primary files to modify**
- `E:\Codex\Kiora Cosmotech Website\app\globals.css` - global tokens, shared section surfaces, hero backgrounds, motion cleanup, consistent Radiant Clinical Luxury styling
- `E:\Codex\Kiora Cosmotech Website\components\Header.tsx` - stable premium navigation, better dropdown behavior, refined CTA treatment
- `E:\Codex\Kiora Cosmotech Website\components\Footer.tsx` - richer premium footer styling aligned to the new design language
- `E:\Codex\Kiora Cosmotech Website\components\PageHero.tsx` - replace synthetic lab hero with real premium image-led hero treatment
- `E:\Codex\Kiora Cosmotech Website\components\ProductHeroBackground.tsx` - unify premium full-background product hero treatment
- `E:\Codex\Kiora Cosmotech Website\components\ContentPageRenderer.tsx` - update section bands, direct-answer cards, related links, and FAQ surfaces
- `E:\Codex\Kiora Cosmotech Website\components\ProductPageRenderer.tsx` - align product page body sections with the new premium system
- `E:\Codex\Kiora Cosmotech Website\components\home\AnimatedSkincareHero.tsx` - keep structure but bring the homepage hero in line with the redesign system
- `E:\Codex\Kiora Cosmotech Website\components\home\FloatingProductShowcase.tsx` - reduce decorative noise, improve premium category presentation
- `E:\Codex\Kiora Cosmotech Website\components\home\LiquidProcessJourney.tsx` - align process storytelling with cleaner conversion-first styling
- `E:\Codex\Kiora Cosmotech Website\app\page.tsx` - reorder and restyle homepage sections if needed without changing core information architecture
- `E:\Codex\Kiora Cosmotech Website\app\face-wash-manufacturer\page.tsx` - align standalone page body styling and hero spacing to shared system
- `E:\Codex\Kiora Cosmotech Website\app\face-serum-manufacturer\page.tsx` - align standalone page styling to shared system
- `E:\Codex\Kiora Cosmotech Website\app\hair-serum-manufacturer\page.tsx` - align standalone page styling to shared system
- `E:\Codex\Kiora Cosmotech Website\app\sunscreen-manufacturer\page.tsx` - keep custom hero image handling but align styling to shared system

**Verification commands**
- `npm run build`

---

### Task 1: Refresh Global Design Foundations

**Files:**
- Modify: `E:\Codex\Kiora Cosmotech Website\app\globals.css`

- [ ] **Step 1: Replace the current site-wide atmosphere with the new Radiant Clinical Luxury token system**

Add or update shared CSS variables and utility classes for:
- pearl / ivory / rose-beige / coral / sage / charcoal palette
- shared premium shadow system
- shared card and section treatments
- shared button and chip feel
- cleaner background gradients

- [ ] **Step 2: Remove or tone down old decorative patterns that fight the new design**

Reduce reliance on:
- synthetic bottle silhouettes
- dense grid overlays
- overactive blobs and ribbons
- ornamental animation classes that do not support conversion clarity

- [ ] **Step 3: Introduce reusable styling hooks**

Create reusable classes for:
- premium hero bands
- elevated content surfaces
- soft editorial separators
- refined chips and CTA containers

- [ ] **Step 4: Preserve accessibility and responsiveness**

Keep:
- no horizontal scroll
- reduced-motion compatibility
- stable spacing on mobile
- consistent contrast

- [ ] **Step 5: Verify CSS compiles**

Run: `npm run build`
Expected: successful build with no CSS syntax failures

---

### Task 2: Redesign Shared Navigation and Footer

**Files:**
- Modify: `E:\Codex\Kiora Cosmotech Website\components\Header.tsx`
- Modify: `E:\Codex\Kiora Cosmotech Website\components\Footer.tsx`

- [ ] **Step 1: Refine the header into a premium, lighter, more stable navigation bar**

Update:
- logo lockup scale and spacing
- nav item hover/active states
- CTA treatment
- dropdown panel styling
- desktop dropdown stability

- [ ] **Step 2: Make navigation feel more structured for both startups and established buyers**

Ensure the header clearly separates:
- browse paths
- service discovery
- primary quote/contact actions

- [ ] **Step 3: Redesign the footer with cleaner hierarchy and a richer premium feel**

Keep all current link groups, but update:
- spacing
- columns
- visual hierarchy
- background and borders
- brand presentation

- [ ] **Step 4: Verify interaction safety**

Check:
- dropdowns do not flicker
- mobile menu still opens and closes correctly
- CTA links remain intact

---

### Task 3: Unify Shared Hero Components

**Files:**
- Modify: `E:\Codex\Kiora Cosmotech Website\components\PageHero.tsx`
- Modify: `E:\Codex\Kiora Cosmotech Website\components\ProductHeroBackground.tsx`

- [ ] **Step 1: Redesign `PageHero` as a premium image-led or layered luxury hero**

Replace the current synthetic lab illustration approach with:
- elegant left-side content structure
- premium layered background
- better whitespace
- cleaner CTA alignment

- [ ] **Step 2: Strengthen `ProductHeroBackground`**

Keep the current SEO-safe structure, but improve:
- overlay color balance
- spacing
- chip styling
- caption styling
- fallback panel styling

- [ ] **Step 3: Ensure mobile order remains correct**

For product and content heroes, preserve:
1. breadcrumb
2. eyebrow
3. H1
4. intro
5. CTA
6. tags
7. visual support

- [ ] **Step 4: Verify hero image fallback safety**

No broken image icons should appear when a hero asset is missing.

---

### Task 4: Redesign Homepage Around the New System

**Files:**
- Modify: `E:\Codex\Kiora Cosmotech Website\components\home\AnimatedSkincareHero.tsx`
- Modify: `E:\Codex\Kiora Cosmotech Website\components\home\FloatingProductShowcase.tsx`
- Modify: `E:\Codex\Kiora Cosmotech Website\components\home\LiquidProcessJourney.tsx`
- Modify: `E:\Codex\Kiora Cosmotech Website\app\page.tsx`

- [ ] **Step 1: Keep the homepage hero image-led and conversion-focused**

Improve:
- content container styling
- chip styling
- CTA treatment
- overlay and text contrast
- hero spacing

- [ ] **Step 2: Simplify the homepage section rhythm**

Make the homepage feel like one polished commercial journey instead of several different mini-design systems.

- [ ] **Step 3: Refresh category and process sections**

Update cards and visual treatments to match the new palette and premium structure while preserving the existing business content.

- [ ] **Step 4: Keep important commercial routes prominent**

Retain strong links to:
- `/private-label-cosmetics-manufacturer-india`
- `/third-party-cosmetic-manufacturing-india`
- `/skincare-manufacturer-india`
- `/request-quote`

---

### Task 5: Bring Shared Content and Product Pages Into the New Visual Language

**Files:**
- Modify: `E:\Codex\Kiora Cosmotech Website\components\ContentPageRenderer.tsx`
- Modify: `E:\Codex\Kiora Cosmotech Website\components\ProductPageRenderer.tsx`

- [ ] **Step 1: Update content-page sections**

Restyle:
- direct answer block
- section cards
- process section
- related links
- FAQ section

- [ ] **Step 2: Update shared product-page sections**

Restyle:
- direct answer / spec area
- formula / quality / packaging blocks
- workflow section
- related product links
- FAQ section

- [ ] **Step 3: Preserve SEO and content structure**

Keep:
- one H1 per page
- metadata and schema behavior
- internal links
- CTA visibility
- FAQ content

---

### Task 6: Align Standalone Product Pages to the Redesign

**Files:**
- Modify: `E:\Codex\Kiora Cosmotech Website\app\face-wash-manufacturer\page.tsx`
- Modify: `E:\Codex\Kiora Cosmotech Website\app\face-serum-manufacturer\page.tsx`
- Modify: `E:\Codex\Kiora Cosmotech Website\app\hair-serum-manufacturer\page.tsx`
- Modify: `E:\Codex\Kiora Cosmotech Website\app\sunscreen-manufacturer\page.tsx`

- [ ] **Step 1: Inspect each custom route for styles that diverge from the shared redesign**

Keep content and route logic intact.

- [ ] **Step 2: Apply the new shared surface, spacing, and section treatments**

Match:
- hero paddings
- cards
- chips
- content bands
- CTA styling

- [ ] **Step 3: Preserve custom image handling**

Do not break:
- face wash hero image override
- sunscreen hero positioning
- custom product image fallbacks

---

### Task 7: Final Verification

**Files:**
- Modify: only if verification finds breakage

- [ ] **Step 1: Run production build**

Run: `npm run build`
Expected: build succeeds

- [ ] **Step 2: Smoke-check key routes**

Manually verify:
- `/`
- `/private-label-cosmetics-manufacturer-india`
- `/skincare-manufacturer-india`
- `/face-wash-manufacturer`
- `/face-serum-manufacturer`
- `/hair-serum-manufacturer`
- `/sunscreen-manufacturer`
- `/blog`

- [ ] **Step 3: Confirm no regression in CTAs and navigation**

Check:
- quote buttons
- WhatsApp links
- dropdown navigation
- mobile menu

- [ ] **Step 4: Confirm visual consistency**

Check:
- one coherent palette
- no awkward old synthetic visuals clashing with new sections
- no cropped headings
- no overflowing buttons or chips

---

## Self-Review

- Spec coverage: homepage, shared renderers, custom product pages, navigation, footer, and global visual system are all covered.
- Placeholder scan: no TODO/TBD placeholders remain; each task lists exact files and verification targets.
- Type consistency: uses existing component and file names from the repository, with no invented route or schema changes.

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-06-20-radiant-clinical-luxury-redesign.md`.

Defaulting to inline execution in this session because the user approved implementation directly.
