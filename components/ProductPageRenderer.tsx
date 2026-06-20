import fs from "node:fs";
import path from "node:path";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProductHeroBackground from "@/components/ProductHeroBackground";
import ProductSpecTable from "@/components/ProductSpecTable";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import SectionHeading from "@/components/SectionHeading";
import { productPages, type ProductPage } from "@/data/products";
import { siteConfig, whatsappHref } from "@/data/siteConfig";
import { breadcrumbSchema, faqSchema, manufacturerSchema, serviceSchema, webPageSchema } from "@/lib/schema";
import { MessageCircle } from "lucide-react";

function publicAssetExists(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

function resolvePublicAsset(src?: string) {
  if (!src) return null;
  if (publicAssetExists(src)) return src;
  const pngFallback = `${src}.png`;
  if (publicAssetExists(pngFallback)) return pngFallback;
  return null;
}

export default function ProductPageRenderer({ product }: { product: ProductPage }) {
  const path = `/${product.slug}`;
  const formulaDirections = product.formulaDirections ?? product.formulaOptions;
  const packagingAdvice = product.packagingAdvice ?? product.packagingOptions;
  const buyerMistakes = product.buyerMistakes ?? [];
  const quoteChecklist = product.quoteChecklist ?? [];
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/skincare-manufacturer-india" },
    { name: product.name, href: path }
  ];
  const heroImageSrc = resolvePublicAsset(product.heroImage);
  const heroTags = product.heroTags ?? product.formulaOptions.slice(0, 6);
  const relatedLinks = product.related
    .map((slug) => {
      const relatedProduct = productPages.find((item) => item.slug === slug);
      if (relatedProduct) {
        return { label: relatedProduct.name, href: `/${relatedProduct.slug}`, description: relatedProduct.description };
      }
      const support: Record<string, { label: string; href: string; description: string }> = {
        "custom-skincare-formulation": { label: "Custom Skincare Formulation", href: "/custom-skincare-formulation", description: "Build formulas around your brand concept." },
        "quality-and-compliance": { label: "Quality and Compliance", href: "/quality-and-compliance", description: "Review quality-driven manufacturing support." },
        "skincare-manufacturer-india": { label: "Skincare Manufacturer in India", href: "/skincare-manufacturer-india", description: "Explore wider skincare manufacturing capabilities." },
        "personal-care-manufacturer-india": { label: "Personal Care Manufacturer", href: "/personal-care-manufacturer-india", description: "Daily-use personal care manufacturing." },
        "haircare-manufacturer-india": { label: "Haircare Manufacturer", href: "/haircare-manufacturer-india", description: "Haircare product range support." }
      };
      return support[slug];
    })
    .filter(Boolean);

  return (
    <>
      <SchemaJsonLd
        data={[
          manufacturerSchema(siteConfig.name, path),
          breadcrumbSchema(crumbs),
          serviceSchema(product.name, product.description, path),
          webPageSchema(product.title, product.description, path),
          faqSchema(product.faqs)
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <main>
        <ProductHeroBackground
          eyebrow={product.category}
          title={product.h1}
          description={<p>{product.intro}</p>}
          actions={
            <>
              <a
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3 text-center font-semibold text-ivory transition hover:bg-teal sm:min-w-[230px]"
                href="/request-quote"
              >
                Request Manufacturing Quote
              </a>
              <a
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-charcoal/12 bg-white/84 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white sm:min-w-[210px]"
                href={whatsappHref(`Hello Kiora CosmoTech, I want to discuss ${product.name.replace(" Manufacturer", "")} manufacturing for my brand.`)}
              >
                <MessageCircle size={18} aria-hidden="true" />
                Discuss on WhatsApp
              </a>
            </>
          }
          tags={heroTags}
          imageSrc={heroImageSrc}
          imageAlt={product.heroImageAlt ?? `${product.name} hero image`}
          imageCaption={product.heroImageCaption ?? "Formula • Packaging • Filling • Quality • Dispatch"}
          fallbackTitle={product.name}
          fallbackDescription={`${product.category} manufacturing support for private label and third-party brand launches.`}
          titleClassName="max-w-[10ch] font-display text-[clamp(2.35rem,9vw,6rem)] font-semibold leading-[0.94] text-charcoal"
        />
        <section className="py-16">
          <div className="container-padded grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <aside className="rounded-3xl bg-charcoal p-7 text-ivory">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-champagne">Direct answer</p>
              <h2 className="mt-4 text-2xl font-semibold">What does a {product.name.toLowerCase()} do?</h2>
              <p className="mt-4 leading-8 text-ivory/78">{product.directAnswer}</p>
            </aside>
            <ProductSpecTable product={product} />
          </div>
        </section>

        <section className="bg-mist py-16">
          <div className="container-padded grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl bg-ivory p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal">Formula Options</h2>
              <ul className="mt-5 grid gap-3">
                {product.formulaOptions.map((option) => (
                  <li className="rounded-2xl bg-mist px-4 py-3 font-semibold text-ink/78" key={option}>{option}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl bg-ivory p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal">Customization</h2>
              <p className="mt-4 leading-8 text-ink/75">{product.customization}</p>
              <h3 className="mt-6 font-semibold text-charcoal">Packaging</h3>
              <p className="mt-2 leading-7 text-ink/70">{product.packagingOptions}</p>
            </article>
            <article className="rounded-3xl bg-ivory p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal">Quality Checks</h2>
              <ul className="mt-5 grid gap-3">
                {product.qualityChecks.map((check) => (
                  <li className="rounded-2xl bg-mist px-4 py-3 font-semibold text-ink/78" key={check}>{check}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="py-16">
          <div className="container-padded grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal">MOQ Factors and Packaging Decisions</h2>
              <p className="mt-4 leading-8 text-ink/75">{product.moq}</p>
              <p className="mt-4 leading-8 text-ink/75">{packagingAdvice}</p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal">What Buyers Should Share Before Quote</h2>
              <ul className="mt-5 grid gap-3">
                {quoteChecklist.map((item) => (
                  <li className="rounded-2xl bg-mist px-4 py-3 font-semibold text-ink/78" key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="py-16">
          <div className="container-padded">
            <SectionHeading eyebrow="Workflow" title={`${product.name.replace(" Manufacturer", "")} Manufacturing Workflow`} />
            <ProcessTimeline steps={["Requirement discussion", "Formula alignment", "Packaging selection", "Sampling", "Quote approval", "Artwork coordination", "Manufacturing", "Filling and packing", "Quality check", "Dispatch"]} />
          </div>
        </section>

        <section className="bg-mist py-16">
          <div className="container-padded grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl bg-ivory p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal">Common Formula Directions</h2>
              <ul className="mt-5 grid gap-3">
                {formulaDirections.map((item) => (
                  <li className="rounded-2xl bg-mist px-4 py-3 font-semibold text-ink/78" key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl bg-ivory p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal">Common Buyer Mistakes</h2>
              <ul className="mt-5 grid gap-3">
                {buyerMistakes.map((item) => (
                  <li className="rounded-2xl bg-mist px-4 py-3 font-semibold text-ink/78" key={item}>{item}</li>
                ))}
              </ul>
              <h3 className="mt-6 text-lg font-semibold text-charcoal">Suitable Brands</h3>
              <p className="mt-3 leading-8 text-ink/75">{product.suitableFor}</p>
            </article>
          </div>
        </section>

        <section className="bg-mist py-16">
          <div className="container-padded">
            <SectionHeading eyebrow="Related pages" title="Plan the Next Product in Your Range" />
            <InternalLinkGrid links={[
              ...relatedLinks,
              { label: "Private Label Cosmetics", href: "/private-label-cosmetics-manufacturer-india", description: "Launch products under your own brand name." },
              { label: "Packaging Options", href: "/packaging-options", description: "Choose packaging suited to your formula." },
              { label: "Request Quote", href: "/request-quote", description: "Share your product and quantity details." }
            ].slice(0, 6)} />
          </div>
        </section>

        <section className="py-16">
          <div className="container-padded">
            <SectionHeading eyebrow="FAQ" title={`${product.name} FAQ`} />
            <FAQAccordion faqs={product.faqs} />
          </div>
        </section>
      </main>
      <CTASection title={`Discuss ${product.name.replace(" Manufacturer", "")} Manufacturing`} />
    </>
  );
}
