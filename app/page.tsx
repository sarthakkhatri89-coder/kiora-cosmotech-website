import Link from "next/link";
import {
  Beaker,
  ClipboardCheck,
  Factory,
  FileText,
  FlaskConical,
  MapPinned,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import AnimatedSkincareHero from "@/components/home/AnimatedSkincareHero";
import FloatingProductShowcase from "@/components/home/FloatingProductShowcase";
import HomeScrollReveal from "@/components/home/HomeScrollReveal";
import LiquidProcessJourney from "@/components/home/LiquidProcessJourney";
import CityGrid from "@/components/CityGrid";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { coreFaqs } from "@/data/faqs";
import { productCategories, productPages } from "@/data/products";
import { whatsappHref } from "@/data/siteConfig";
import { createMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  manufacturerSchema
} from "@/lib/schema";

export const metadata = createMetadata({
  title: "Skincare & Cosmetic Manufacturer in India | Kiora CosmoTech",
  description:
    "Kiora CosmoTech manufactures skincare, haircare and personal care products in India for private label, third party and custom formulation brands.",
  path: "/"
});

const capabilityStrip = [
  "Skincare-focused manufacturing communication",
  "Private label and third party workflows",
  "Packaging and MOQ discussions",
  "Batch-wise planning conversations",
  "Pan-India launch coordination"
];

const serviceModels = [
  {
    title: "Private Label Cosmetics",
    href: "/private-label-cosmetics-manufacturer-india",
    description:
      "Launch skincare, haircare and personal care products under your own brand with practical product, MOQ and packaging planning."
  },
  {
    title: "Third Party Manufacturing",
    href: "/third-party-cosmetic-manufacturing-india",
    description:
      "Manufacturing, filling and packing support for teams focused on sales, distribution, marketing and launch expansion."
  },
  {
    title: "Contract Manufacturing",
    href: "/contract-cosmetic-manufacturer-india",
    description:
      "Structured production for approved concepts, batch planning, specification-led discussion and repeat manufacturing flow."
  },
  {
    title: "Custom Skincare Formulation",
    href: "/custom-skincare-formulation",
    description:
      "Develop modern skincare concepts around active direction, pack format, market fit and premium product positioning."
  }
];

const categoryHighlights = {
  Skincare: {
    description:
      "Face wash, serum, sunscreen, moisturizer, creams and gels shaped for premium cosmetic launches.",
    examples: ["Face wash", "Serum", "Sunscreen", "Moisturizer", "Creams", "Gels"]
  },
  "Derma Cosmetic": {
    description:
      "Acne care, barrier care, brightening, anti-ageing and soothing cosmetic concepts for modern active-led ranges.",
    examples: ["Acne care", "Brightening", "Barrier repair", "Anti-ageing", "Soothing"]
  },
  Haircare: {
    description:
      "Shampoo, hair serum, hair oil and hair mask concepts for D2C, salon and performance-led haircare brands.",
    examples: ["Shampoo", "Hair serum", "Hair oil", "Hair mask", "Scalp care"]
  },
  "Personal Care": {
    description:
      "Body wash, hand wash, body lotion and daily-use hygiene categories with retail-ready packaging discussions.",
    examples: ["Body wash", "Hand wash", "Body lotion", "Daily care", "Hygiene"]
  }
} satisfies Record<string, { description: string; examples: string[] }>;

const formulationCards = [
  {
    title: "Texture",
    text: "Gel, lotion, cream and serum directions discussed around category fit and user experience."
  },
  {
    title: "Actives",
    text: "Ingredient story aligned to product positioning, cosmetic claim language and commercial practicality."
  },
  {
    title: "Packaging",
    text: "Tube, bottle, pump, airless and jar formats reviewed for shelf presence and usage."
  },
  {
    title: "MOQ",
    text: "Quantity expectations and manufacturing practicality discussed early to avoid confusion later."
  },
  {
    title: "Brand Positioning",
    text: "Product range planning shaped for D2C, salon, derma-cosmetic and personal care launches."
  },
  {
    title: "Quality Review",
    text: "Appearance, fill presentation and launch-readiness reviewed before dispatch conversations move forward."
  }
];

const qualityItems = [
  {
    icon: ShieldCheck,
    title: "Raw material and packing material verification",
    text: "Inputs are reviewed before manufacturing and filling workflow begins."
  },
  {
    icon: ClipboardCheck,
    title: "Batch-wise production approach",
    text: "Production discussions stay aligned to planned and traceable batch execution."
  },
  {
    icon: FlaskConical,
    title: "In-process monitoring",
    text: "Practical checks during blending, holding and movement help keep workflow organized."
  },
  {
    icon: PackageCheck,
    title: "Filling and packing checks",
    text: "Primary pack presentation, closures and packed goods are reviewed before release planning."
  },
  {
    icon: Beaker,
    title: "Finished product review",
    text: "Appearance and finished goods presentation are reviewed before dispatch planning."
  },
  {
    icon: FileText,
    title: "Product specification inputs",
    text: "Specification support helps align formula direction, packaging and launch files."
  },
  {
    icon: Sparkles,
    title: "Label declaration support where applicable",
    text: "Artwork and label information inputs can be discussed around product type and pack format."
  },
  {
    icon: Factory,
    title: "Dispatch planning",
    text: "Finished goods timing and movement can be aligned for pan-India launch flow."
  }
];

const homepageAnswers = [
  {
    question: "What is private label cosmetic manufacturing?",
    answer:
      "Private label cosmetic manufacturing lets a brand sell skincare, haircare or personal care products under its own brand name while a manufacturing partner supports formula selection, production, filling and packing."
  },
  {
    question: "What is third party cosmetic manufacturing?",
    answer:
      "Third party cosmetic manufacturing means outsourcing product manufacturing to a specialized partner so the brand can focus on sales, marketing, distribution and customer growth."
  },
  {
    question: "What is custom skincare formulation?",
    answer:
      "Custom skincare formulation develops a product around a brand's target texture, actives, packaging, sensory profile and positioning instead of using a standard ready formula."
  },
  {
    question: "How can I start my own skincare brand in India?",
    answer:
      "Start with a focused product range, decide ready or custom formulas, choose packaging, plan MOQ and pricing, approve samples, coordinate labels and then move into batch manufacturing."
  },
  {
    question: "What is MOQ in cosmetic manufacturing?",
    answer:
      "MOQ is the minimum order quantity needed for a practical production batch. It changes based on formula complexity, raw materials, packaging type, label work and batch planning."
  }
];

const selectedProducts = [
  "face-wash-manufacturer",
  "face-serum-manufacturer",
  "sunscreen-manufacturer",
  "moisturizer-manufacturer",
  "cream-manufacturer",
  "gel-manufacturer",
  "body-lotion-manufacturer",
  "derma-cosmetic-manufacturer",
  "shampoo-manufacturer",
  "hair-serum-manufacturer",
  "hair-oil-manufacturer",
  "hair-mask-manufacturer",
  "body-wash-manufacturer",
  "hand-wash-manufacturer"
]
  .map((slug) => productPages.find((product) => product.slug === slug))
  .filter(Boolean) as typeof productPages;

export default function HomePage() {
  return (
    <>
      <SchemaJsonLd
        data={[
          localBusinessSchema(),
          manufacturerSchema(),
          breadcrumbSchema([{ name: "Home", href: "/" }]),
          faqSchema(coreFaqs)
        ]}
      />

      <AnimatedSkincareHero />

      <main className="homepage-shell">
        <section className="border-y border-charcoal/8 bg-white/70 py-5">
          <div className="container-padded">
            <HomeScrollReveal className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              {capabilityStrip.map((item) => (
                <div
                  className="rounded-2xl border border-charcoal/8 bg-ivory px-4 py-4 text-sm font-medium leading-6 text-ink/74 shadow-[0_12px_30px_rgba(23,33,29,0.04)]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </HomeScrollReveal>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <HomeScrollReveal className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
                Manufacturing categories
              </p>
              <h2 className="section-title mt-3 font-display font-semibold text-charcoal">
                Manufacturing Categories We Focus On
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-ink/74">
                Skincare, derma-cosmetic, haircare and personal care categories are organized
                around modern packaging, formula thinking and practical manufacturing discussion.
              </p>
            </HomeScrollReveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {productCategories.map((category, index) => {
                const visual =
                  categoryHighlights[category.title as keyof typeof categoryHighlights] ??
                  categoryHighlights.Skincare;

                return (
                  <HomeScrollReveal delay={index * 60} key={category.href}>
                    <article className="rounded-[1.9rem] border border-charcoal/8 bg-ivory shadow-[0_22px_54px_rgba(23,33,29,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(23,33,29,0.09)]">
                      <div className="rounded-t-[1.9rem] border-b border-charcoal/8 bg-[radial-gradient(circle_at_top_left,rgba(232,217,189,0.56),transparent_18rem),linear-gradient(135deg,rgba(255,253,247,0.98),rgba(245,239,229,0.9),rgba(143,174,155,0.18))] p-5">
                        <div className="rounded-[1.4rem] border border-white/70 bg-white/62 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                            Category
                          </p>
                          <h3 className="mt-3 text-2xl font-semibold text-charcoal">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-sm leading-7 text-ink/72">{visual.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2.5">
                          {visual.examples.map((example) => (
                            <span
                              className="rounded-full border border-charcoal/8 bg-white/78 px-3 py-1.5 text-[0.75rem] font-medium text-ink/70"
                              key={example}
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                        <Link
                          className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-ivory transition hover:bg-teal"
                          href={category.href}
                        >
                          Explore {category.title}
                        </Link>
                      </div>
                    </article>
                  </HomeScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <HomeScrollReveal className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">Services</p>
              <h2 className="section-title mt-3 font-display font-semibold text-charcoal">
                Manufacturing Models for Beauty Brands
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-ink/74">
                Choose the service path that fits your launch stage, product brief and commercial
                structure while keeping manufacturing conversations clear for your team.
              </p>
            </HomeScrollReveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {serviceModels.map((service, index) => (
                <HomeScrollReveal delay={index * 55} key={service.href}>
                  <article className="rounded-[1.8rem] border border-charcoal/8 bg-white/78 p-5 shadow-[0_20px_48px_rgba(23,33,29,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(23,33,29,0.09)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                      Service
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-charcoal">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-ink/72">{service.description}</p>
                    <Link
                      className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-ivory transition hover:bg-teal"
                      href={service.href}
                    >
                      Explore {service.title}
                    </Link>
                  </article>
                </HomeScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <FloatingProductShowcase products={selectedProducts} />

        <LiquidProcessJourney />

        <section className="section-y">
          <div className="container-padded grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <HomeScrollReveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
                  Formulation and packaging support
                </p>
                <h2 className="section-title mt-3 font-display font-semibold text-charcoal">
                  Formulation-Led Manufacturing for Modern Beauty Brands
                </h2>
                <p className="mt-5 text-[1rem] leading-8 text-ink/74">
                  Kiora helps brands think through formula direction, skin feel, product
                  positioning, ingredient story, packaging format, MOQ practicality and launch
                  range planning before production is finalized.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-charcoal px-6 py-3 text-center font-semibold text-ivory transition hover:bg-teal"
                    href="/custom-skincare-formulation"
                  >
                    Discuss Your Product Idea
                  </Link>
                  <Link
                    className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-charcoal/12 bg-white/76 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white"
                    href="/request-quote"
                  >
                    Request Manufacturing Quote
                  </Link>
                </div>
              </div>
            </HomeScrollReveal>

            <HomeScrollReveal delay={100}>
              <div className="rounded-[2rem] border border-charcoal/8 bg-[radial-gradient(circle_at_top_left,rgba(232,217,189,0.46),transparent_18rem),linear-gradient(180deg,rgba(255,253,247,0.94),rgba(248,244,236,0.9))] p-5 shadow-[0_24px_60px_rgba(23,33,29,0.07)]">
                <div className="mb-5 rounded-[1.5rem] border border-white/70 bg-white/62 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal">
                    Launch planning overview
                  </p>
                  <p className="mt-3 text-sm leading-7 text-ink/74">
                    Product story, actives, packaging direction and commercial practicality are
                    discussed together so the final range feels clear before manufacturing begins.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {formulationCards.map((item, index) => (
                    <HomeScrollReveal delay={index * 45} key={item.title}>
                      <div className="rounded-[1.5rem] border border-charcoal/8 bg-white/72 p-4 shadow-[0_14px_34px_rgba(23,33,29,0.05)]">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
                          {item.title}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-ink/72">{item.text}</p>
                      </div>
                    </HomeScrollReveal>
                  ))}
                </div>
              </div>
            </HomeScrollReveal>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <HomeScrollReveal className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
                Quality preview
              </p>
              <h2 className="section-title mt-3 font-display font-semibold text-charcoal">
                Quality-Focused and Documentation-Aware Manufacturing Approach
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-ink/74">
                The workflow stays grounded in practical quality conversations, documentation inputs
                and launch readiness without relying on unverified certification claims.
              </p>
            </HomeScrollReveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {qualityItems.map(({ icon: Icon, title, text }, index) => (
                <HomeScrollReveal delay={index * 50} key={title}>
                  <article className="rounded-[1.8rem] border border-charcoal/8 bg-white/78 p-5 shadow-[0_20px_48px_rgba(23,33,29,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(23,33,29,0.09)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-charcoal text-ivory shadow-sm">
                      <Icon size={18} aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-charcoal">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink/72">{text}</p>
                  </article>
                </HomeScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <HomeScrollReveal className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
                City-wise manufacturing support
              </p>
              <h2 className="section-title mt-3 font-display font-semibold text-charcoal">
                Pan-India Manufacturing Support for Beauty Brands
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-ink/74">
                Explore the existing city pages for Delhi NCR, Mumbai, Bangalore, Hyderabad and
                other business regions where beauty brands often need launch-oriented manufacturing
                conversations.
              </p>
            </HomeScrollReveal>

            <HomeScrollReveal className="mt-12" delay={80}>
              <div className="rounded-[2rem] border border-charcoal/8 bg-white/76 p-5 shadow-[0_24px_58px_rgba(23,33,29,0.06)]">
                <div className="mb-5 flex items-center gap-3 rounded-[1.3rem] border border-charcoal/8 bg-mist px-4 py-3 text-sm font-semibold text-charcoal">
                  <MapPinned className="text-teal" size={20} aria-hidden="true" />
                  <span>City-Wise Manufacturing Support</span>
                </div>
                <CityGrid />
              </div>
            </HomeScrollReveal>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <HomeScrollReveal className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
                Direct answers
              </p>
              <h2 className="section-title mt-3 font-display font-semibold text-charcoal">
                Direct Answers for Buyers and AI Search
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-ink/74">
                Important manufacturing questions stay visible as real HTML content so buyers and
                search systems can understand the offer without depending on visual treatment alone.
              </p>
            </HomeScrollReveal>

            <HomeScrollReveal className="mt-12" delay={80}>
              <div className="rounded-[2rem] border border-charcoal/8 bg-white/76 p-5 shadow-[0_22px_54px_rgba(23,33,29,0.08)]">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {homepageAnswers.map((item) => (
                    <article
                      className="rounded-[1.7rem] border border-charcoal/10 bg-ivory p-5 shadow-[0_18px_42px_rgba(0,0,0,0.12)]"
                      key={item.question}
                    >
                      <h3 className="text-[1.02rem] font-semibold leading-7 text-charcoal">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-ink/72">{item.answer}</p>
                    </article>
                  ))}
                </div>
              </div>
            </HomeScrollReveal>

            <HomeScrollReveal className="mt-12" delay={120}>
              <div>
                <h2 className="text-center text-[clamp(2rem,4vw,3.6rem)] font-display font-semibold text-charcoal">
                  FAQ for Cosmetic Manufacturing
                </h2>
                <div className="mt-8 rounded-[2rem] border border-charcoal/8 bg-white/76 p-5 shadow-[0_22px_54px_rgba(23,33,29,0.08)]">
                  <FAQAccordion faqs={coreFaqs} />
                </div>
              </div>
            </HomeScrollReveal>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <HomeScrollReveal>
              <div className="overflow-hidden rounded-[2.2rem] border border-charcoal/8 bg-[radial-gradient(circle_at_top_left,rgba(232,217,189,0.52),transparent_18rem),radial-gradient(circle_at_bottom_right,rgba(143,174,155,0.24),transparent_16rem),linear-gradient(180deg,#fffdf8_0%,#f5efe4_100%)] p-6 shadow-[0_28px_68px_rgba(23,33,29,0.08)] lg:grid lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
                    Request quote
                  </p>
                  <h2 className="section-title mt-3 font-display font-semibold text-charcoal">
                    Ready to Launch Your Skincare or Cosmetic Brand?
                  </h2>
                  <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-ink/74">
                    Share your product category, quantity, packaging preference and launch plan.
                    Kiora CosmoTech will help you understand a practical manufacturing path for your
                    brand.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-charcoal px-6 py-3 text-center font-semibold text-ivory transition hover:bg-teal"
                      href="/request-quote"
                    >
                      Request Manufacturing Quote
                    </Link>
                    <a
                      className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-charcoal/12 bg-white/78 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white"
                      href={whatsappHref()}
                    >
                      <MessageCircle size={18} aria-hidden="true" /> Discuss on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.6rem] border border-white/70 bg-white/74 p-5 shadow-[0_18px_40px_rgba(23,33,29,0.06)]">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
                        Product brief
                      </p>
                      <p className="mt-3 text-sm leading-7 text-ink/72">
                        Category, launch intent and target quantity help shape the next discussion.
                      </p>
                    </div>
                    <div className="rounded-[1.6rem] border border-white/70 bg-white/74 p-5 shadow-[0_18px_40px_rgba(23,33,29,0.06)]">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
                        Packaging plan
                      </p>
                      <p className="mt-3 text-sm leading-7 text-ink/72">
                        Tube, jar, bottle and pump direction can be discussed with cost and channel in mind.
                      </p>
                    </div>
                    <div className="rounded-[1.6rem] border border-white/70 bg-white/74 p-5 shadow-[0_18px_40px_rgba(23,33,29,0.06)] sm:col-span-2">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-teal">
                        Launch readiness
                      </p>
                      <p className="mt-3 text-sm leading-7 text-ink/72">
                        Formula direction, pack format, quality review and dispatch timing all move
                        together when the early brief is clear.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </HomeScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
