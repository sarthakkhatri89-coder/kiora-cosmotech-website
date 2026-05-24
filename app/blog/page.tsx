import BlogCard from "@/components/BlogCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/data/blogPosts";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Cosmetic Manufacturing Blog | Kiora CosmoTech",
  description:
    "Read skincare manufacturing guides, private label cosmetic launch advice, packaging tips and formulation planning content from Kiora CosmoTech.",
  path: "/blog"
});

export default function BlogPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" }
  ];

  return (
    <>
      <SchemaJsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs crumbs={crumbs} />
      <PageHero eyebrow="Manufacturing insights" title="Cosmetic Manufacturing Blog" intro="Useful guides for skincare founders, salons, clinics, influencers and D2C beauty teams planning cosmetic products in India." />
      <main className="py-16">
        <div className="container-padded">
          <SectionHeading title="Guides for Better Beauty Brand Decisions" text="Browse private label, third party, formulation, packaging and product launch articles." />
          <section className="mb-10 grid gap-5 rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm md:grid-cols-3 md:p-8" aria-labelledby="blog-planning-title">
            <div className="md:col-span-2">
              <h2 id="blog-planning-title" className="text-2xl font-semibold text-charcoal">Manufacturing knowledge for launch-ready beauty brands</h2>
              <p className="mt-4 leading-8 text-ink/74">
                These guides help founders, salons, clinics, influencers and D2C teams understand cosmetic manufacturing before they request a quote. Topics cover private label cosmetics, third party manufacturing, skincare product selection, MOQ, packaging formats, documentation inputs, formula planning and common launch mistakes. Use the articles to compare product ideas, prepare a better manufacturing brief and connect your research with Kiora CosmoTech service pages.
              </p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <h3 className="font-semibold text-charcoal">Popular starting points</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-ink/72">
                <li>Start a skincare brand in India</li>
                <li>Compare private label and third party manufacturing</li>
                <li>Understand MOQ, packaging and formula choices</li>
              </ul>
            </div>
          </section>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => <BlogCard post={post} key={post.slug} />)}
          </div>
        </div>
      </main>
    </>
  );
}
