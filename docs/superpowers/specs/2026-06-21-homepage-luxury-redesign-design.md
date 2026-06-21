# Kiora Homepage Luxury Redesign Design

## Goal

Transform the homepage from a primarily SEO-first stacked card layout into a premium editorial luxury manufacturing homepage that still preserves real HTML content, internal-link utility, lead-generation CTAs, and AI-search readability.

## Scope

This redesign is homepage-first. Product, service, city, blog, legal, schema, and route structures should remain intact unless a small shared homepage dependency requires a safe adjustment.

## Constraints

- Keep important content in real HTML.
- Do not hide SEO-critical text in images or canvas.
- Do not redesign the whole site in this phase.
- Use one flagship immersive moment only.
- Do not add fake CSS 3D bottles or gimmicky cosmetic visuals.
- Preserve CTA visibility, mobile clarity, and performance.

## Current Problems

1. The homepage communicates through too many similarly weighted card sections.
2. The hero is improved but still behaves more like a promotional banner than a signature brand moment.
3. Manufacturing categories, service models, process, and quality sections repeat the same visual language.
4. The page lacks an intentional premium narrative flow from trust to capability to process to quote.
5. Mobile likely feels long because section rhythm and card density stay too similar from top to bottom.

## Chosen Approach

Use an editorial luxury homepage with immersive moments:

- A stronger image-led hero with cleaner hierarchy
- A single flagship immersive WebGL scene on the homepage
- Fewer repeated grids and more narrative split layouts
- Stronger section contrast between service model, category universe, process story, and final CTA
- HTML-first SEO and AEO preservation across all key sections

## Homepage Structure

1. Hero
2. Trust / capability strip
3. Service model bridge
4. Product universe / manufacturing categories
5. Flagship immersive formulation scene
6. Process story
7. Quality and launch readiness
8. City support
9. Direct answers / FAQ
10. Final CTA

## Hero

The hero keeps the real HTML H1, paragraph, CTA buttons, and trust tags. It uses the existing premium photography assets as the visual foundation, but the copy layout becomes more editorial and spacious. The text should feel anchored and calm, with a stronger luxury manufacturing tone.

## Flagship Immersive Scene

One homepage-only immersive section will be added using lightweight custom WebGL via a canvas component. This scene should feel atmospheric and premium rather than literal or technical. It should support a “formulation to finished product” feeling through soft depth, layered light, drifting particles, and restrained motion.

Important rules:

- No critical meaning only in canvas
- Real HTML copy beside the scene
- Reduced-motion support
- Graceful static/fallback treatment when WebGL is unavailable

## Service Model Section

The current four-card grid becomes a more intentional service comparison block that differentiates private label, third party, contract manufacturing, and custom formulation without reading like another generic card deck.

## Product Universe Section

The current product-page grid should still expose major categories and product paths, but the section should feel more like a premium category architecture overview than a catalog. Category storytelling and selective chips are more important than dense repeated boxes.

## Process Story

The process section should shift from a flat numbered grid toward a more narrative manufacturing journey. The image remains useful, but the pacing and card hierarchy should feel more premium and less repetitive.

## Quality and Launch Readiness

Quality and launch-readiness content should feel trustworthy and structured without pretending to be a certification wall. The section should be more focused on operational clarity, documentation awareness, packaging review, and dispatch readiness.

## Mobile Behavior

- H1 and CTAs stay high and readable
- No horizontal scroll
- Canvas scene becomes simplified, shorter, or more static
- Large editorial spacing compresses safely
- Section hierarchy remains clear without overlong repeated card runs

## Performance Strategy

- Keep the homepage LCP image discoverable and stable
- Use one canvas scene only
- Keep canvas lightweight and below the hero if needed
- Respect reduced motion
- Avoid extra libraries if possible
- Preserve image sizing stability and existing optimized assets

## Files Expected To Change

- `app/page.tsx`
- `app/globals.css`
- `components/home/AnimatedSkincareHero.tsx`
- `components/home/FloatingProductShowcase.tsx`
- `components/home/LiquidProcessJourney.tsx`
- New homepage-only support components if needed

## Success Criteria

- Homepage feels premium and authored rather than stacked
- SEO text remains visible and crawlable
- One distinctive immersive scene exists on homepage only
- CTA flow feels clearer
- Mobile remains readable and stable
- Build passes
