import Link from "next/link";
import { Beaker, ClipboardCheck, Factory, FileText, FlaskConical, Microscope, PackageCheck, SearchCheck, ShieldCheck, Sparkles } from "lucide-react";
import AnswerBlocks from "@/components/AnswerBlocks";
import BlogCard from "@/components/BlogCard";
import CertificationStrip from "@/components/CertificationStrip";
import CityGrid from "@/components/CityGrid";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import HeroSection from "@/components/HeroSection";
import ManufacturingCapability from "@/components/ManufacturingCapability";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import ProductRangeCard from "@/components/ProductRangeCard";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TrustStats from "@/components/TrustStats";
import { blogPosts } from "@/data/blogPosts";
import { coreFaqs } from "@/data/faqs";
import { productCategories, productPages } from "@/data/products";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Skincare & Cosmetic Manufacturer in India | Kiora CosmoTech",
  description:
    "Kiora CosmoTech manufactures skincare, haircare and personal care products with private label, third party, custom formulation and pan-India supply.",
  path: "/"
});

const services = [
  {
    title: "Private Label Cosmetics",
    href: "/private-label-cosmetics-manufacturer-india",
    description: "Launch skincare, haircare and personal care products under your own brand with formula selection, batch planning and packaging selection."
  },
  {
    title: "Third Party Cosmetic Manufacturing",
    href: "/third-party-cosmetic-manufacturing-india",
    description: "Outsource manufacturing, filling and packing while your team focuses on sales and distribution."
  },
  {
    title: "Contract Manufacturing",
    href: "/contract-cosmetic-manufacturer-india",
    description: "Structured cosmetic manufacturing for repeatable batches, defined specifications, filling and packing."
  },
  {
    title: "Custom Skincare Formulation",
    href: "/custom-skincare-formulation",
    description: "Develop formula concepts around actives, texture, sensory profile and packaging compatibility."
  }
];

const qualityItems = [
  { icon: SearchCheck, title: "Raw Material Checks", text: "Review of material inputs before manufacturing activity begins." },
  { icon: Microscope, title: "In-Process Checks", text: "Practical observations during batch manufacturing, filling and packing." },
  { icon: ClipboardCheck, title: "Batch Documentation", text: "Documentation-backed production records for traceable batch planning." },
  { icon: FileText, title: "Specification Inputs", text: "Product specification support for brand and packaging alignment." },
  { icon: PackageCheck, title: "Label Declaration Review", text: "Ingredient and product information inputs for packaging artwork review." },
  { icon: ShieldCheck, title: "Finished Product Review", text: "Appearance, filling and pack review before dispatch planning." }
];

const manufacturingStrengths = [
  { icon: FlaskConical, title: "Skincare Manufacturing", text: "Face care and body care products planned around texture, actives, packaging and batch size." },
  { icon: Beaker, title: "Derma-Cosmetic Product Development", text: "Active-led cosmetic concepts for clinics, professional brands and focused skincare ranges." },
  { icon: Sparkles, title: "Haircare Product Manufacturing", text: "Shampoo, hair serum, hair oil and mask batches with bottle, pump and jar packaging options." },
  { icon: Factory, title: "Personal Care Manufacturing", text: "Body wash, hand wash and lotion manufacturing for daily-use consumer product lines." },
  { icon: PackageCheck, title: "Filling and Packing", text: "Filling, sealing, labelling and packing workflows matched to the product and primary pack." },
  { icon: ClipboardCheck, title: "Packaging and Label Coordination", text: "Packaging selection, artwork inputs and label declaration review before commercial batches." },
  { icon: FileText, title: "Product Specification Support", text: "Product specification inputs for formula, packaging, documentation and launch planning." },
  { icon: ShieldCheck, title: "Finished Product Review", text: "Finished goods review for appearance, fill, packaging and dispatch readiness." }
];

const trustReasons = [
  { icon: FlaskConical, title: "Skincare-Focused Manufacturing Communication", text: "Discussions stay centered on skincare, derma-cosmetic, haircare and personal care products instead of unrelated categories." },
  { icon: PackageCheck, title: "Practical MOQ and Packaging Discussion", text: "Brands can align expected quantity, pack type, fill size, label route and carton planning before quote approval." },
  { icon: Factory, title: "Private Label and Third Party Workflows", text: "Manufacturing pathways are structured around formula selection, sampling, batch planning, filling and packing." },
  { icon: FileText, title: "Product Specification and Documentation Inputs", text: "Product specification inputs, label declaration review and batch information help keep launch files organized." },
  { icon: Sparkles, title: "Startup and D2C Brand Support", text: "First-time founders and growing beauty teams can plan focused product ranges without inflated claims or confusing jargon." },
  { icon: ClipboardCheck, title: "Pan-India Dispatch Planning", text: "Dispatch planning can be discussed for approved batches across city-wise markets and nearby business areas." }
];

export default function HomePage() {
  return (
    <>
      <SchemaJsonLd data={[localBusinessSchema(), breadcrumbSchema([{ name: "Home", href: "/" }])]} />
      <HeroSection />
      <TrustStats />
      <main>
        <section className="section-y">
          <div className="container-padded">
            <SectionHeading eyebrow="Manufacturing strengths" title="Manufacturing Strengths for Skincare-Led Brands" text="A practical manufacturing engine for formula selection, batch planning, filling, packing, product specifications and finished goods review." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {manufacturingStrengths.map(({ icon: Icon, title, text }) => (
                <article className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium" key={title}>
                  <div className="mb-5 inline-flex rounded-2xl bg-mist p-3 text-teal">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h2 className="text-xl font-semibold text-charcoal">{title}</h2>
                  <p className="mt-3 leading-7 text-ink/72">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <SectionHeading eyebrow="Why Kiora" title="Why Brands Choose Kiora CosmoTech" text="Trust is built through clear manufacturing conversations, realistic timelines, practical MOQ planning and careful documentation inputs." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {trustReasons.map(({ icon: Icon, title, text }) => (
                <article className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm" key={title}>
                  <Icon className="mb-5 text-teal" size={28} aria-hidden="true" />
                  <h2 className="text-xl font-semibold text-charcoal">{title}</h2>
                  <p className="mt-3 leading-7 text-ink/72">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <SectionHeading eyebrow="Services" title="Manufacturing Models for Beauty Brands" text="Choose the path that fits your launch stage, product range and customization needs." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => <ServiceCard key={service.href} {...service} />)}
            </div>
            <div className="mt-8 flex justify-center">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-teal px-6 py-3 font-semibold text-ivory transition hover:bg-charcoal" href="/request-quote">
                Request Manufacturing Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <SectionHeading eyebrow="Categories" title="Skincare, Derma-Cosmetic, Haircare and Personal Care" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {productCategories.map((category) => <ProductCategoryCard key={category.href} {...category} />)}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <SectionHeading eyebrow="Capabilities" title="Skincare Manufacturing Capabilities" text="Cosmetic manufacturing built around formula selection, batch planning, filling and packing, packaging selection, label declaration review and dispatch planning." />
            <ManufacturingCapability />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link className="focus-ring rounded-full bg-charcoal px-6 py-3 font-semibold text-ivory transition hover:bg-teal" href="/custom-skincare-formulation">Discuss Your Product Idea</Link>
              <Link className="focus-ring rounded-full border border-charcoal/15 px-6 py-3 font-semibold text-charcoal transition hover:bg-mist" href="/skincare-manufacturer-india">Explore Product Range</Link>
            </div>
          </div>
        </section>

        <section className="section-y bg-charcoal text-ivory">
          <div className="container-padded grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-champagne">R&D support</p>
              <h2 className="section-title font-display font-semibold">Formula thinking before factory scale</h2>
              <p className="mt-5 leading-8 text-ivory/75">
                Kiora CosmoTech helps brands translate product ideas into practical formula directions, sampling decisions, packaging choices, manufacturing workflows and documentation-ready product specifications.
              </p>
              <Link className="focus-ring mt-7 inline-flex rounded-full bg-champagne px-6 py-3 font-semibold text-charcoal transition hover:bg-ivory" href="/custom-skincare-formulation">
                Explore Custom Formulation
              </Link>
            </div>
            <div className="cosmetic-visual relative min-h-[340px] rounded-[2rem] border border-ivory/20" role="img" aria-label="Cosmetic manufacturing facility with skincare filling concept">
              <div className="product-bottle bottom-12 left-[18%] h-48" />
              <div className="product-bottle bottom-12 left-[42%] h-36 w-14" />
              <div className="texture-swatch right-12 top-12 h-28 w-28" />
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <SectionHeading eyebrow="Process" title="A Clear Manufacturing Process" />
            <ProcessTimeline />
            <div className="mt-8 flex justify-center">
              <Link className="focus-ring rounded-full bg-teal px-6 py-3 font-semibold text-ivory transition hover:bg-charcoal" href="/manufacturing-process">View Manufacturing Process</Link>
            </div>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <SectionHeading eyebrow="Product range" title="Buyer-Ready Manufacturing Pages" text="Explore product-specific manufacturing specifications, formula examples, packaging examples, MOQ direction and quote CTAs." />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {productPages.map((product) => <ProductRangeCard product={product} key={product.slug} />)}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <SectionHeading eyebrow="Packaging" title="Packaging Support for Launch-Ready Products" text="Choose tubes, jars, bottles, pumps, airless bottles, droppers, labels and cartons that match your formula and price point." />
              <Link className="focus-ring inline-flex rounded-full bg-charcoal px-6 py-3 font-semibold text-ivory transition hover:bg-teal" href="/packaging-options">
                Explore Packaging Options
              </Link>
            </div>
            <CertificationStrip />
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <SectionHeading eyebrow="Quality" title="Quality-Driven and Compliance-Focused Manufacturing" text="A professional manufacturing workflow should include raw material checks, in-process checks, batch documentation and finished product review without relying on unverified certification claims." />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {qualityItems.map(({ icon: Icon, title, text }) => (
                <article className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm" key={title}>
                  <Icon className="mb-5 text-teal" size={28} aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-charcoal">{title}</h3>
                  <p className="mt-3 leading-7 text-ink/72">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link className="focus-ring rounded-full bg-teal px-6 py-3 font-semibold text-ivory transition hover:bg-charcoal" href="/quality-and-compliance">Review Quality and Compliance</Link>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <SectionHeading eyebrow="Pan-India support" title="City-Wise Cosmetic Manufacturing Support" />
            <CityGrid />
            <div className="mt-8 flex justify-center">
              <Link className="focus-ring rounded-full border border-charcoal/15 px-6 py-3 font-semibold text-charcoal transition hover:bg-mist" href="/city/cosmetic-manufacturer-in-delhi-ncr">Explore City-Wise Manufacturing</Link>
            </div>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="cosmetic-visual relative min-h-[340px] rounded-[2rem]" role="img" aria-label="Face serum private label packaging">
              <div className="product-bottle bottom-12 left-[18%] h-48" />
              <div className="product-bottle bottom-12 left-[42%] h-36 w-14" />
              <div className="texture-swatch right-12 top-12 h-28 w-28" />
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal">Startup support</p>
              <h2 className="section-title font-display font-semibold text-charcoal">Support for founders, salons, clinics and D2C teams</h2>
              <p className="mt-5 leading-8 text-ink/75">Plan product selection, low MOQ options where practical, packaging formats, quote planning, launch sequencing and manufacturing-ready product briefs.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link className="focus-ring inline-flex rounded-full bg-teal px-6 py-3 font-semibold text-ivory transition hover:bg-charcoal" href="/startup-cosmetic-brand-support">
                  Start Your Skincare Brand
                </Link>
                <Link className="focus-ring inline-flex rounded-full border border-charcoal/15 px-6 py-3 font-semibold text-charcoal transition hover:bg-ivory" href="/request-quote">
                  Request Manufacturing Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <SectionHeading eyebrow="AIO answers" title="Direct Answers for AI Search and Buyers" />
            <AnswerBlocks />
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <SectionHeading eyebrow="FAQ" title="Direct Answers for Cosmetic Manufacturing" />
            <FAQAccordion faqs={coreFaqs} />
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <SectionHeading eyebrow="Blog" title="Manufacturing Guides for Beauty Brands" />
            <div className="grid gap-5 md:grid-cols-3">
              {blogPosts.slice(0, 3).map((post) => <BlogCard post={post} key={post.slug} />)}
            </div>
          </div>
        </section>
      </main>
      <CTASection />
    </>
  );
}
