import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import PageHero from "@/components/PageHero";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts, getBlogPost } from "@/data/blogPosts";
import { createMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article"
  });
}

export default async function BlogDetailPage({ params }: Params) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }
  const currentPost = post!;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: currentPost.title, href: `/blog/${currentPost.slug}` }
  ];

  return (
    <>
      <SchemaJsonLd data={[breadcrumbSchema(crumbs), articleSchema({ ...currentPost, excerpt: currentPost.excerpt }), ...(currentPost.faqs?.length ? [faqSchema(currentPost.faqs)] : [])]} />
      <Breadcrumbs crumbs={crumbs} />
      <PageHero eyebrow={currentPost.category} title={currentPost.title} intro={currentPost.excerpt} />
      <main>
        <article className="py-16">
          <div className="container-padded mx-auto max-w-4xl">
            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm font-semibold uppercase tracking-[0.16em] text-teal">
              <span>{currentPost.readingTime}</span>
              <span>Kiora CosmoTech Editorial Team</span>
              <span>Updated {currentPost.publishedAt}</span>
            </div>
            <section className="mb-8 rounded-3xl border border-charcoal/10 bg-mist p-6 shadow-sm" aria-labelledby="toc-title">
              <h2 id="toc-title" className="text-2xl font-semibold text-charcoal">Table of contents</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {currentPost.sections.map((section, index) => (
                  <a
                    className="rounded-2xl bg-ivory px-4 py-3 font-semibold text-charcoal transition hover:bg-charcoal hover:text-ivory"
                    href={`#section-${index + 1}`}
                    key={section.heading}
                  >
                    {section.heading}
                  </a>
                ))}
              </div>
            </section>
            <div className="grid gap-8">
              {currentPost.sections.map((section, index) => (
                <section className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm" id={`section-${index + 1}`} key={section.heading}>
                  <h2 className="text-2xl font-semibold text-charcoal">{section.heading}</h2>
                  <p className="mt-4 leading-8 text-ink/75">{section.body}</p>
                </section>
              ))}
            </div>
            <section className="mt-8 rounded-3xl bg-charcoal p-6 text-ivory shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-champagne">Next step</p>
              <h2 className="mt-3 text-2xl font-semibold">Turn research into a manufacturing-ready brief</h2>
              <p className="mt-4 leading-8 text-ivory/78">
                When you know the product category, rough quantity, packaging preference and launch city, move the discussion forward with a quote request or the related service pages below.
              </p>
            </section>
          </div>
        </article>
        <section className="bg-mist py-16">
          <div className="container-padded">
            <SectionHeading eyebrow="Internal links" title="Continue Your Manufacturing Research" />
            <InternalLinkGrid links={currentPost.links.map((link) => ({ ...link, description: "Relevant manufacturing page for this guide." }))} />
          </div>
        </section>
        {currentPost.faqs?.length ? (
          <section className="py-16">
            <div className="container-padded">
              <SectionHeading eyebrow="FAQ" title={`${currentPost.title} FAQ`} />
              <FAQAccordion faqs={currentPost.faqs} />
            </div>
          </section>
        ) : null}
      </main>
      <CTASection title="Need a Manufacturing Quote for Your Product Idea?" />
    </>
  );
}
