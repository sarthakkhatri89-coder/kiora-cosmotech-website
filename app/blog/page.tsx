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
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => <BlogCard post={post} key={post.slug} />)}
          </div>
        </div>
      </main>
    </>
  );
}
