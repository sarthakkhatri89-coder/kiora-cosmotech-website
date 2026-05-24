import Breadcrumbs from "@/components/Breadcrumbs";
import AnswerBlocks from "@/components/AnswerBlocks";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import PageHero from "@/components/PageHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import QuoteForm from "@/components/QuoteForm";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import SectionHeading from "@/components/SectionHeading";
import type { ContentPage } from "@/data/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

export default function ContentPageRenderer({ page }: { page: ContentPage }) {
  const path = `/${page.slug}`;
  const parentCrumb = (() => {
    if (page.kind === "service") return { name: "Services", href: "/private-label-cosmetics-manufacturer-india" };
    if (page.kind === "category") return { name: "Products", href: "/skincare-manufacturer-india" };
    if (page.slug === "request-quote") return { name: "Request Quote", href: path };
    return null;
  })();
  const crumbs = parentCrumb
    ? [{ name: "Home", href: "/" }, parentCrumb, { name: page.h1, href: path }]
    : [{ name: "Home", href: "/" }, { name: page.h1, href: path }];

  return (
    <>
      <SchemaJsonLd data={[breadcrumbSchema(crumbs), serviceSchema(page.h1, page.description, path), ...(page.faqs.length ? [faqSchema(page.faqs)] : [])]} />
      <Breadcrumbs crumbs={crumbs} />
      <PageHero eyebrow={page.eyebrow} title={page.h1} intro={page.intro} />
      <main>
        <section className="py-16">
          <div className="container-padded grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-3xl bg-charcoal p-7 text-ivory">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-champagne">Direct answer</p>
              <h2 className="mt-4 text-2xl font-semibold">{page.directAnswer.question}</h2>
              <p className="mt-4 leading-8 text-ivory/78">{page.directAnswer.answer}</p>
            </div>
            <div className="grid gap-5">
              {page.sections.map((section) => (
                <article className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm" key={section.heading}>
                  <h2 className="text-2xl font-semibold text-charcoal">{section.heading}</h2>
                  <p className="mt-3 leading-8 text-ink/75">{section.body}</p>
                  {section.points ? (
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {section.points.map((point) => (
                        <li className="rounded-2xl bg-mist px-4 py-3 text-sm font-semibold text-charcoal" key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        {page.kind === "service" ? (
          <section className="section-y bg-mist">
            <div className="container-padded">
              <SectionHeading eyebrow="AIO answers" title="Clear Answers for Manufacturing Decisions" />
              <AnswerBlocks />
            </div>
          </section>
        ) : null}

        {page.kind === "service" || page.slug === "startup-cosmetic-brand-support" ? (
          <section className="py-16">
            <div className="container-padded">
              <SectionHeading
                eyebrow="Process overview"
                title="A Practical Route from Product Brief to Finished Goods"
                text="Manufacturing discussions usually move faster when product type, formula direction, pack choice and quantity are aligned early."
              />
              <ProcessTimeline
                steps={[
                  "Requirement and category discussion",
                  "Formula selection or development direction",
                  "Packaging and label planning",
                  "Sampling and approval",
                  "RM and PM planning",
                  "Manufacturing and filling",
                  "Packing and quality checks",
                  "Dispatch planning"
                ]}
              />
            </div>
          </section>
        ) : null}

        {page.slug === "manufacturing-process" ? (
          <section className="section-y bg-mist">
            <div className="container-padded">
              <SectionHeading title="Cosmetic Manufacturing Timeline" text="A clear sequence from product idea to dispatch helps founders make better decisions." />
              <ProcessTimeline />
            </div>
          </section>
        ) : null}

        {page.slug === "request-quote" ? (
          <section className="bg-mist py-16">
            <div className="container-padded grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <SectionHeading eyebrow="Quote form" title="Share Your Requirement" text="Use the form for skincare, derma-cosmetic, haircare or personal care manufacturing enquiries." />
              </div>
              <QuoteForm />
            </div>
          </section>
        ) : null}

        <section className="bg-mist py-16">
          <div className="container-padded">
            <SectionHeading eyebrow="Related pages" title="Continue Planning Your Product" />
            <InternalLinkGrid links={page.relatedLinks} />
          </div>
        </section>

        {page.faqs.length ? (
          <section className="py-16">
            <div className="container-padded">
              <SectionHeading eyebrow="FAQ" title="Common Manufacturing Questions" />
              <FAQAccordion faqs={page.faqs} />
            </div>
          </section>
        ) : null}
      </main>
      <CTASection />
    </>
  );
}
