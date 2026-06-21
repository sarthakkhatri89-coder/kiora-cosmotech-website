# Homepage Luxury Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the homepage into a premium editorial luxury manufacturing experience with one lightweight immersive scene while preserving SEO visibility, performance, and conversion flow.

**Architecture:** Keep the App Router homepage and its supporting components, but refactor the information hierarchy into clearer editorial sections. Add one homepage-only canvas/WebGL component with real-HTML companion content and a graceful fallback, then update shared homepage styles to reduce repeated card language.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind utilities, shared global CSS, custom canvas/WebGL without new dependencies.

---

### Task 1: Establish homepage redesign file map

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/home/AnimatedSkincareHero.tsx`
- Modify: `components/home/FloatingProductShowcase.tsx`
- Modify: `components/home/LiquidProcessJourney.tsx`
- Create: `components/home/HomeFlagshipScene.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Confirm file responsibilities before editing**

Review the homepage files and keep responsibilities narrow:

- `AnimatedSkincareHero.tsx` owns the hero only
- `FloatingProductShowcase.tsx` owns the product universe section
- `LiquidProcessJourney.tsx` owns the process story
- `HomeFlagshipScene.tsx` owns the immersive canvas section only
- `app/page.tsx` composes section order and copy
- `app/globals.css` owns supporting homepage styling tokens and motion/fallback rules

- [ ] **Step 2: Keep the homepage composition order aligned to the approved design**

Implement this order in `app/page.tsx`:

1. Hero
2. Capability strip
3. Service bridge
4. Product universe
5. Flagship scene
6. Process story
7. Quality and readiness
8. City support
9. Direct answers and FAQ
10. Final CTA

### Task 2: Refactor the homepage hero

**Files:**
- Modify: `components/home/AnimatedSkincareHero.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Rewrite hero structure to a calmer editorial hierarchy**

Keep:

- real HTML H1
- paragraph
- CTA buttons
- trust chips
- existing responsive hero imagery

Adjust:

- spacing
- text container width
- background overlay balance
- supporting stats or framing copy only if they improve conversion clarity

- [ ] **Step 2: Make sure hero remains immediate and stable**

Do not add reveal delays, opacity-zero wrappers, or canvas blocking the hero copy. Keep the LCP image immediately present and ensure the copy stays readable on mobile and desktop.

### Task 3: Add the flagship immersive scene

**Files:**
- Create: `components/home/HomeFlagshipScene.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Create a lightweight client component for the homepage-only canvas**

The component should:

- render a `canvas`
- render HTML copy beside or below it
- fall back gracefully when reduced-motion or unsupported conditions apply
- avoid any SEO-critical content inside the canvas

- [ ] **Step 2: Implement restrained ambient WebGL motion**

Use custom canvas/WebGL or performant canvas drawing to create:

- soft drifting lights
- layered depth
- premium color fields
- subtle motion that suggests formulation and finished-product progression

Avoid:

- literal fake bottles
- large GPU-heavy meshes
- autoplay spectacle

- [ ] **Step 3: Add a static/fallback visual treatment**

If motion is reduced or initialization fails, show a styled fallback panel with the same premium palette and supporting copy.

### Task 4: Redesign the service and category sections

**Files:**
- Modify: `app/page.tsx`
- Modify: `components/home/FloatingProductShowcase.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Turn the service model grid into a clearer bridge section**

Keep all four commercial paths, but reduce the feeling of repeated generic cards by using:

- one editorial intro block
- stronger service distinction
- tighter CTA handling

- [ ] **Step 2: Reframe product range as a category universe**

Keep links to key product pages, but use stronger category framing, selective chips, and cleaner visual hierarchy so the section reads as a manufacturing portfolio rather than a card deck.

### Task 5: Rework process and quality storytelling

**Files:**
- Modify: `components/home/LiquidProcessJourney.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Make process feel narrative, not repetitive**

Keep the manufacturing steps, but restructure presentation so the process reads as a guided journey with varying emphasis rather than eight equal boxes.

- [ ] **Step 2: Tighten the quality/readiness section**

Preserve the quality-focused and documentation-aware language, but reduce repetitive card sameness and increase perceived trust and clarity.

### Task 6: Verify homepage quality and deployable readiness

**Files:**
- Test: `app/page.tsx`
- Test: `components/home/AnimatedSkincareHero.tsx`
- Test: `components/home/FloatingProductShowcase.tsx`
- Test: `components/home/LiquidProcessJourney.tsx`
- Test: `components/home/HomeFlagshipScene.tsx`
- Test: `app/globals.css`

- [ ] **Step 1: Run build**

Run: `npm run build`

Expected: successful production build with no homepage-related errors

- [ ] **Step 2: Run dev or visual verification**

Run the local app and verify:

- hero readability
- no horizontal scroll
- flagship scene does not block content
- mobile order and spacing remain clean
- CTA buttons stay visible

- [ ] **Step 3: Commit and push**

```bash
git add app/page.tsx app/globals.css components/home/AnimatedSkincareHero.tsx components/home/FloatingProductShowcase.tsx components/home/LiquidProcessJourney.tsx components/home/HomeFlagshipScene.tsx docs/superpowers/specs/2026-06-21-homepage-luxury-redesign-design.md docs/superpowers/plans/2026-06-21-homepage-luxury-redesign.md
git commit -m "feat: redesign homepage with luxury editorial layout"
git push
```
