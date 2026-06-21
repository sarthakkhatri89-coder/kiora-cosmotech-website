import Link from "next/link";
import Image from "next/image";
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
import HomeFlagshipScene from "@/components/home/HomeFlagshipScene";
import HomeScrollReveal from "@/components/home/HomeScrollReveal";
import LiquidProcessJourney from "@/components/home/LiquidProcessJourney";
import CityGrid from "@/components/CityGrid";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { coreFaqs } from "@/data/faqs";
import { productPages } from "@/data/products";
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
    focus: "Launch-ready brand build",
    description:
      "Launch skincare, haircare and personal care products under your own brand with launch-ready product selection, packaging planning and startup-friendly manufacturing guidance."
  },
  {
    title: "Third Party Manufacturing",
    href: "/third-party-cosmetic-manufacturing-india",
    focus: "Operational production support",
    description:
      "Production, filling, packing and dispatch support for teams focused on sales, distribution, marketing and commercial scale."
  },
  {
    title: "Contract Manufacturing",
    href: "/contract-cosmetic-manufacturer-india",
    focus: "Structured repeat-batch execution",
    description:
      "Structured manufacturing programs for approved concepts, specification-led batches, packaging coordination and repeat production planning."
  },
  {
    title: "Custom Skincare Formulation",
    href: "/custom-skincare-formulation",
    focus: "Ownable formula direction",
    description:
      "Develop modern skincare concepts around active direction, packaging compatibility, market fit and premium product positioning."
  }
];

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

const quoteReadinessPoints = [
  "Product category and first SKU set",
  "Pack type and fill-size direction",
  "Ready formula or custom formulation path",
  "MOQ range and launch timeline",
  "Target price band and channel"
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
        <section className="site-band py-5">
          <div className="container-padded">
            <HomeScrollReveal className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              {capabilityStrip.map((item) => (
                <div
                  className="site-panel rounded-[1.35rem] px-4 py-4 text-sm font-medium leading-6 text-[rgba(64,50,58,0.76)]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </HomeScrollReveal>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <HomeScrollReveal>
                <div className="max-w-[35rem]">
                  <p className="site-kicker">Service models</p>
                  <h2 className="section-title mt-3 font-display font-semibold text-[rgba(50,36,45,0.96)]">
                    Manufacturing pathways for founders, operators and scaling brands
                  </h2>
                  <p className="mt-5 text-[1rem] leading-8 text-[rgba(64,50,58,0.76)]">
                    The homepage should make the difference between private label, third party,
                    contract manufacturing and custom formulation feel immediately clear. Each path
                    answers a different stage of commercial readiness.
                  </p>
                  <div className="site-panel-soft mt-8 rounded-[2rem] p-5">
                    <p className="site-kicker">Quote-readiness checklist</p>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-[rgba(64,50,58,0.74)]">
                      {quoteReadinessPoints.map((point) => (
                        <li className="flex gap-3" key={point}>
                          <span className="mt-[0.6rem] h-1.5 w-1.5 rounded-full bg-[rgba(148,84,109,0.9)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <Link
                        className="focus-ring site-button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center font-semibold text-ivory transition"
                        href="/request-quote"
                      >
                        Request a manufacturing quote
                      </Link>
                      <Link
                        className="focus-ring site-button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center font-semibold text-[rgba(56,41,49,0.92)] transition"
                        href="/private-label-cosmetics-manufacturer-india"
                      >
                        See private label route
                      </Link>
                    </div>
                  </div>
                </div>
              </HomeScrollReveal>

              <div className="grid gap-5 md:grid-cols-2">
                {serviceModels.map((service, index) => (
                  <HomeScrollReveal delay={index * 55} key={service.href}>
                    <article className="site-panel rounded-[1.9rem] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(87,60,70,0.11)]">
                      <p className="site-kicker">{service.focus}</p>
                      <h3 className="mt-3 text-[1.5rem] font-semibold text-[rgba(52,38,46,0.94)]">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[rgba(64,50,58,0.72)]">
                        {service.description}
                      </p>
                      <Link
                        className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[rgba(128,73,94,0.96)]"
                        href={service.href}
                      >
                        Explore service
                        <span aria-hidden="true">→</span>
                      </Link>
                    </article>
                  </HomeScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FloatingProductShowcase products={selectedProducts} />

        <HomeFlagshipScene />

        <LiquidProcessJourney />

        <section className="section-y">
          <div className="container-padded grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <HomeScrollReveal>
              <div>
                <p className="site-kicker">Formulation and packaging support</p>
                <h2 className="section-title mt-3 font-display font-semibold text-[rgba(50,36,45,0.96)]">
                  Formulation-Led Manufacturing for Modern Beauty Brands
                </h2>
                <p className="mt-5 text-[1rem] leading-8 text-[rgba(64,50,58,0.76)]">
                  Kiora helps brands think through formula direction, skin feel, product
                  positioning, ingredient story, packaging format, MOQ practicality and launch
                  range planning before production is finalized.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    className="focus-ring site-button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center font-semibold text-ivory transition"
                    href="/custom-skincare-formulation"
                  >
                    Discuss Your Product Idea
                  </Link>
                  <Link
                    className="focus-ring site-button-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center font-semibold text-[rgba(56,41,49,0.92)] transition"
                    href="/request-quote"
                  >
                    Request Manufacturing Quote
                  </Link>
                </div>
              </div>
            </HomeScrollReveal>

            <HomeScrollReveal delay={100}>
              <div className="site-panel-soft rounded-[2rem] p-5">
                <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/68 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src="/images/home/formulation-packaging-support.webp"
                      alt="Cosmetic formulation and packaging planning support"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,40,48,0.04),rgba(58,40,48,0.16))]" />
                  </div>
                </div>
                <div className="mb-5 rounded-[1.5rem] border border-white/70 bg-white/68 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)]">
                  <p className="site-kicker">Launch planning overview</p>
                  <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.74)]">
                    Product story, actives, packaging direction and commercial practicality are
                    discussed together so the final range feels clear before manufacturing begins.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {formulationCards.map((item, index) => (
                    <HomeScrollReveal delay={index * 45} key={item.title}>
                      <div className="rounded-[1.5rem] border border-[rgba(59,43,51,0.08)] bg-white/76 p-4 shadow-[0_14px_34px_rgba(87,60,70,0.06)]">
                        <p className="site-kicker">
                          {item.title}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.72)]">{item.text}</p>
                      </div>
                    </HomeScrollReveal>
                  ))}
                </div>
              </div>
            </HomeScrollReveal>
          </div>
        </section>

        <section className="site-band-soft section-y">
          <div className="container-padded">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <HomeScrollReveal>
                <div className="max-w-[35rem]">
                  <p className="site-kicker">Quality preview</p>
                  <h2 className="section-title mt-3 font-display font-semibold text-[rgba(50,36,45,0.96)]">
                    Quality-focused and documentation-aware manufacturing
                  </h2>
                  <p className="mt-5 text-[1rem] leading-8 text-[rgba(64,50,58,0.76)]">
                    The workflow stays grounded in practical quality conversations, documentation
                    inputs and launch readiness without relying on unverified certification claims.
                  </p>
                  <div className="site-panel mt-8 overflow-hidden rounded-[2rem] p-4 sm:p-5">
                    <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem]">
                      <Image
                        src="/images/home/quality-focused-manufacturing.webp"
                        alt="Quality-focused cosmetic manufacturing review and packaging checks"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,40,48,0.05),rgba(58,40,48,0.18))]" />
                    </div>
                  </div>
                </div>
              </HomeScrollReveal>

              <div className="grid gap-4 md:grid-cols-2">
                {qualityItems.map(({ icon: Icon, title, text }, index) => (
                  <HomeScrollReveal delay={index * 45} key={title}>
                    <article className="site-panel-soft rounded-[1.7rem] p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3a2b35,#9a516b)] text-ivory shadow-[0_14px_28px_rgba(114,63,83,0.18)]">
                          <Icon size={18} aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[rgba(52,38,46,0.94)]">
                            {title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.72)]">
                            {text}
                          </p>
                        </div>
                      </div>
                    </article>
                  </HomeScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <HomeScrollReveal className="mx-auto max-w-4xl text-center">
              <p className="site-kicker">City-wise manufacturing support</p>
              <h2 className="section-title mt-3 font-display font-semibold text-[rgba(50,36,45,0.96)]">
                Pan-India Manufacturing Support for Beauty Brands
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[rgba(64,50,58,0.76)]">
                Explore the existing city pages for Delhi NCR, Mumbai, Bangalore, Hyderabad and
                other business regions where beauty brands often need launch-oriented manufacturing
                conversations.
              </p>
            </HomeScrollReveal>

            <HomeScrollReveal className="mt-12" delay={80}>
              <div className="site-panel rounded-[2rem] p-5">
                <div className="mb-5 flex items-center gap-3 rounded-[1.3rem] border border-[rgba(59,43,51,0.08)] bg-[rgba(255,241,236,0.7)] px-4 py-3 text-sm font-semibold text-[rgba(52,38,46,0.9)]">
                  <MapPinned className="text-[rgba(148,84,109,0.92)]" size={20} aria-hidden="true" />
                  <span>City-Wise Manufacturing Support</span>
                </div>
                <CityGrid />
              </div>
            </HomeScrollReveal>
          </div>
        </section>

        <section className="site-band-soft section-y">
          <div className="container-padded">
            <HomeScrollReveal className="mx-auto max-w-4xl text-center">
              <p className="site-kicker">Direct answers</p>
              <h2 className="section-title mt-3 font-display font-semibold text-[rgba(50,36,45,0.96)]">
                Direct Answers for Buyers and AI Search
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[rgba(64,50,58,0.76)]">
                Important manufacturing questions stay visible as real HTML content so buyers and
                search systems can understand the offer without depending on visual treatment alone.
              </p>
            </HomeScrollReveal>

            <HomeScrollReveal className="mt-12" delay={80}>
              <div className="site-panel rounded-[2rem] p-5">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {homepageAnswers.map((item) => (
                    <article
                      className="site-panel-soft rounded-[1.7rem] p-5"
                      key={item.question}
                    >
                      <h3 className="text-[1.02rem] font-semibold leading-7 text-[rgba(52,38,46,0.94)]">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.72)]">{item.answer}</p>
                    </article>
                  ))}
                </div>
              </div>
            </HomeScrollReveal>

            <HomeScrollReveal className="mt-12" delay={120}>
              <div>
                <h2 className="text-center text-[clamp(2rem,4vw,3.6rem)] font-display font-semibold text-[rgba(50,36,45,0.96)]">
                  FAQ for Cosmetic Manufacturing
                </h2>
                <div className="mt-8 rounded-[2rem] p-5">
                  <FAQAccordion faqs={coreFaqs} />
                </div>
              </div>
            </HomeScrollReveal>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <HomeScrollReveal>
              <div className="site-panel-soft overflow-hidden rounded-[2.2rem] p-6 lg:grid lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-8">
                <div>
                  <p className="site-kicker">Request quote</p>
                  <h2 className="section-title mt-3 font-display font-semibold text-[rgba(50,36,45,0.96)]">
                    Ready to Launch Your Skincare or Cosmetic Brand?
                  </h2>
                  <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[rgba(64,50,58,0.76)]">
                    Share your product category, quantity, packaging preference and launch plan.
                    Kiora CosmoTech will help you understand a practical manufacturing path for your
                    brand.
                  </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      className="focus-ring site-button-primary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center font-semibold text-ivory transition"
                      href="/request-quote"
                    >
                      Request Manufacturing Quote
                    </Link>
                    <a
                      className="focus-ring site-button-secondary inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-semibold text-[rgba(56,41,49,0.92)] transition"
                      href={whatsappHref()}
                    >
                      <MessageCircle size={18} aria-hidden="true" /> Discuss on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="mt-8 lg:mt-0">
                  <div className="site-panel overflow-hidden rounded-[1.8rem] p-4">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
                      <Image
                        src="/images/home/launch-readiness-support.webp"
                        alt="Launch-readiness support for private label cosmetic manufacturing"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(58,40,48,0.04),rgba(58,40,48,0.16))]" />
                    </div>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.4rem] border border-[rgba(59,43,51,0.08)] bg-white/78 p-4 shadow-[0_14px_32px_rgba(87,60,70,0.06)]">
                        <p className="site-kicker">Product brief</p>
                        <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.72)]">
                          Category, launch intent and target quantity help shape the next discussion.
                        </p>
                      </div>
                      <div className="rounded-[1.4rem] border border-[rgba(59,43,51,0.08)] bg-white/78 p-4 shadow-[0_14px_32px_rgba(87,60,70,0.06)]">
                        <p className="site-kicker">Packaging plan</p>
                        <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.72)]">
                          Tube, jar, bottle and pump direction can be discussed with cost and channel in mind.
                        </p>
                      </div>
                      <div className="rounded-[1.4rem] border border-[rgba(59,43,51,0.08)] bg-white/78 p-4 shadow-[0_14px_32px_rgba(87,60,70,0.06)] sm:col-span-2">
                        <p className="site-kicker">Launch readiness</p>
                        <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.72)]">
                          Formula direction, pack format, quality review and dispatch timing all move
                          together when the early brief is clear.
                        </p>
                      </div>
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
