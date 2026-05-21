import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import PageHero from "@/components/PageHero";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts, getBlogPost } from "@/data/blogPosts";
import { createMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

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
  if (!post) notFound();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` }
  ];

  return (
    <>
      <SchemaJsonLd data={[breadcrumbSchema(crumbs), articleSchema(post)]} />
      <Breadcrumbs crumbs={crumbs} />
      <PageHero eyebrow={post.category} title={post.title} intro={post.excerpt} />
      <main>
        <article className="py-16">
          <div className="container-padded mx-auto max-w-4xl">
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.16em] text-teal">{post.readingTime}</p>
            <div className="grid gap-8">
              {post.sections.map((section) => (
                <section className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm" key={section.heading}>
                  <h2 className="text-2xl font-semibold text-charcoal">{section.heading}</h2>
                  <p className="mt-4 leading-8 text-ink/75">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </article>
        <section className="bg-mist py-16">
          <div className="container-padded">
            <SectionHeading eyebrow="Internal links" title="Continue Your Manufacturing Research" />
            <InternalLinkGrid links={post.links.map((link) => ({ ...link, description: "Relevant manufacturing page for this guide." }))} />
          </div>
        </section>
      </main>
      <CTASection title="Need a Manufacturing Quote for Your Product Idea?" />
    </>
  );
}
