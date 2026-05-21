import Link from "next/link";
import { ClipboardCheck, FileText, Microscope, PackageCheck, SearchCheck, ShieldCheck } from "lucide-react";
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
    "Kiora CosmoTech is a skincare-focused cosmetic manufacturer in India offering private label cosmetics, third party cosmetic manufacturing, custom formulation, packaging support and pan-India supply for beauty brands.",
  path: "/"
});

const services = [
  {
    title: "Private Label Cosmetics",
    href: "/private-label-cosmetics-manufacturer-india",
    description: "Launch skincare, haircare and personal care products under your own brand with formula and packaging support."
  },
  {
    title: "Third Party Cosmetic Manufacturing",
    href: "/third-party-cosmetic-manufacturing-india",
    description: "Outsource manufacturing, filling and packing while your team focuses on sales and distribution."
  },
  {
    title: "Contract Manufacturing",
    href: "/contract-cosmetic-manufacturer-india",
    description: "Structured production support for repeatable cosmetic product batches and defined specifications."
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
  { icon: ClipboardCheck, title: "Batch Documentation", text: "Documentation-supported production records and batch coordination." },
  { icon: FileText, title: "Specification Inputs", text: "Product specification support for brand and packaging alignment." },
  { icon: PackageCheck, title: "Label Declaration Support", text: "Ingredient and product information coordination for label artwork." },
  { icon: ShieldCheck, title: "Finished Product Review", text: "Appearance, filling and pack review before dispatch coordination." }
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
            <SectionHeading eyebrow="Capabilities" title="Skincare Manufacturing Capabilities" text="Manufacturing support built around formula selection, batch planning, filling and packing, packaging selection, label coordination and dispatch coordination." />
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
                Kiora CosmoTech helps brands translate product ideas into practical formula directions, sampling decisions, packaging choices, manufacturing support and documentation-ready conversations.
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
            <SectionHeading eyebrow="Quality" title="Quality-Driven and Compliance-Focused Support" text="A professional manufacturing workflow should be documentation-supported without relying on unverified certification claims." />
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
              <p className="mt-5 leading-8 text-ink/75">Get guidance on product selection, low MOQ options where practical, packaging formats, quote planning, launch sequencing and manufacturing-ready product briefs.</p>
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
