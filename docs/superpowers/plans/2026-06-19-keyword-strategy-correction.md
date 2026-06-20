# Keyword Strategy Correction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clarify keyword ownership across Kiora CosmoTech's core service and product pages, improve supporting internal links, and align shared source content with the stronger live commercial narratives.

**Architecture:** Most keyword ownership lives in shared content data, so the main implementation should happen in `data/services.ts`, `data/products.ts`, and selected long-form blog entries in `data/blogPosts.ts`. Standalone product pages should only be touched where the audit found richer live positioning that needs explicit support or alignment.

**Tech Stack:** Next.js App Router, TypeScript, shared content/data modules, static metadata helpers

---

### Task 1: Clarify service-page keyword ownership

**Files:**
- Modify: `E:\Codex\Kiora Cosmotech Website\data\services.ts`

- [ ] Update private label, skincare, third party, contract, packaging, startup, manufacturing process, and request quote copy so each page owns a clearer search intent lane.
- [ ] Add packaging, MOQ, artwork, quote-readiness, and timeline language only where it matches visible page purpose.
- [ ] Strengthen related links so pages point into the right commercial destinations.

### Task 2: Align shared product semantics with live product intent

**Files:**
- Modify: `E:\Codex\Kiora Cosmotech Website\data\products.ts`

- [ ] Update the shared hair serum entry to match the stronger live scalp-growth and active-led positioning.
- [ ] Tighten shared face wash, face serum, and sunscreen supporting text only where it improves keyword clarity without fighting the custom routes.

### Task 3: Sharpen standalone commercial product support

**Files:**
- Modify: `E:\Codex\Kiora Cosmotech Website\app\hair-serum-manufacturer\page.tsx`
- Modify: `E:\Codex\Kiora Cosmotech Website\app\face-wash-manufacturer\page.tsx`
- Modify: `E:\Codex\Kiora Cosmotech Website\app\face-serum-manufacturer\page.tsx`
- Modify: `E:\Codex\Kiora Cosmotech Website\app\sunscreen-manufacturer\page.tsx`

- [ ] Keep layout and CTAs intact.
- [ ] Add or refine only the internal-link and intent-boundary copy that supports the updated keyword map.

### Task 4: Improve supporting blog-to-commercial routing

**Files:**
- Modify: `E:\Codex\Kiora Cosmotech Website\data\blogPosts.ts`

- [ ] Refine key commercial-support blog sections so each guide clearly supports one primary page and does not read like a duplicate money page.
- [ ] Standardize quote-readiness and packaging/MOQ anchors where useful.

### Task 5: Verify build and spot-check keyword ownership

**Files:**
- Verify only

- [ ] Run the build.
- [ ] Check updated titles/H1 ownership in code.
- [ ] Report changed files, keyword owners, links added, and any remaining strategic decisions.
