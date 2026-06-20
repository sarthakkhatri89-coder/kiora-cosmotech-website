# Re-Audit Checklist

Use this checklist after implementing the KRAKEN audit recommendations.

## Publishing and crawlability

- [ ] `pnpm build` passes
- [ ] homepage loads
- [ ] key service pages load
- [ ] key product pages load
- [ ] city pages load
- [ ] blog listing loads
- [ ] blog detail pages load
- [ ] `robots.txt` loads live
- [ ] `sitemap.xml` loads live
- [ ] sitemap only contains valid live URLs

## Canonicals and metadata

- [ ] homepage canonical is self-referencing
- [ ] sampled service pages have self-referencing canonicals
- [ ] sampled product pages have self-referencing canonicals
- [ ] sampled city pages have self-referencing canonicals
- [ ] titles and meta descriptions exist on sampled pages
- [ ] OG image matches page intent on major commercial hubs

## Quote and conversion flow

- [ ] quote form submits to a real backend path
- [ ] success state only appears on real success
- [ ] failure state is visible on failed submit
- [ ] WhatsApp CTA still works
- [ ] phone CTA still works
- [ ] form submission is measurable

## Schema

- [ ] homepage emits Organization/Manufacturer/WebSite/Breadcrumb/FAQ as intended
- [ ] shared service pages emit consistent commercial schema
- [ ] custom product pages emit the same schema model as shared product pages
- [ ] city pages do not emit unsupported LocalBusiness semantics
- [ ] no retail Product schema appears on B2B manufacturing pages
- [ ] FAQ schema matches visible FAQs
- [ ] breadcrumb schema matches visible breadcrumbs

## Visual assets

- [ ] all expected product hero images that should exist are present
- [ ] missing product hero images fall back cleanly
- [ ] no broken image icons appear
- [ ] OG images resolve with 200 status

## Blog

- [ ] blog listing schema has been strengthened if implemented
- [ ] all blog internal links go to valid pages
- [ ] blog CTA links work

## Performance and measurement

- [ ] homepage hero remains the LCP candidate
- [ ] homepage hero image is eager/high priority
- [ ] analytics stack is present
- [ ] quote success event fires
- [ ] WhatsApp click event fires
- [ ] top CTA click event fires

## Manual sign-off

- [ ] SEO owner approves schema output
- [ ] growth owner approves conversion tracking
- [ ] content owner approves updated commercial summaries
- [ ] developer confirms no console/build regressions
