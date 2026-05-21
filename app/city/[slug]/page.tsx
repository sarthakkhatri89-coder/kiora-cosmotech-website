import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import PageHero from "@/components/PageHero";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import SectionHeading from "@/components/SectionHeading";
import { cities, getCity } from "@/data/cities";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, localBusinessSchema, serviceSchema } from "@/lib/schema";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return createMetadata({
    title: city.title,
    description: city.description,
    path: `/city/${city.slug}`
  });
}

export default async function CityPage({ params }: Params) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  const path = `/city/${city.slug}`;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: `Cosmetic Manufacturer in ${city.city}`, href: path }
  ];

  return (
    <>
      <SchemaJsonLd data={[breadcrumbSchema(crumbs), localBusinessSchema(`Cosmetic Manufacturer in ${city.city}`, path), serviceSchema(`Cosmetic Manufacturer in ${city.city}`, city.description, path)]} />
      <Breadcrumbs crumbs={crumbs} />
      <PageHero eyebrow="City-wise manufacturing support" title={`Cosmetic Manufacturer in ${city.city}`} intro={city.intro} />
      <main>
        <section className="py-16">
          <div className="container-padded grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal">Private Label Cosmetic Manufacturing in {city.city}</h2>
              <p className="mt-4 leading-8 text-ink/75">{city.privateLabel}</p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal">Third Party Skincare Manufacturing in {city.city}</h2>
              <p className="mt-4 leading-8 text-ink/75">{city.thirdParty}</p>
            </article>
          </div>
        </section>

        <section className="bg-mist py-16">
          <div className="container-padded grid gap-8 lg:grid-cols-3">
            <article className="rounded-3xl bg-ivory p-6 shadow-sm lg:col-span-2">
              <h2 className="text-2xl font-semibold text-charcoal">Product Categories Available</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {city.categories.map((category) => (
                  <p className="rounded-2xl bg-mist px-4 py-3 font-semibold text-charcoal" key={category}>{category}</p>
                ))}
              </div>
              <h3 className="mt-8 text-xl font-semibold text-charcoal">MOQ and Packaging Options</h3>
              <p className="mt-3 leading-8 text-ink/75">
                MOQ depends on formula, packaging and product type. Brands can discuss tubes, jars, bottles, pumps, droppers, airless bottles, labels and mono cartons.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-charcoal">Startup Brand Support</h3>
              <p className="mt-3 leading-8 text-ink/75">
                Kiora CosmoTech supports first-time founders, salons, clinics, influencers and D2C brands with product selection, packaging guidance and quote planning.
              </p>
            </article>
            <aside className="rounded-3xl bg-charcoal p-6 text-ivory">
              <h2 className="text-2xl font-semibold">Nearby Areas Served</h2>
              <ul className="mt-5 grid gap-3">
                {city.nearbyAreas.map((area) => (
                  <li className="rounded-2xl bg-ivory/10 px-4 py-3 font-semibold" key={area}>{area}</li>
                ))}
              </ul>
              <p className="mt-6 leading-7 text-ivory/75">Pan-India dispatch support can be discussed after quote approval and production planning.</p>
            </aside>
          </div>
        </section>

        <section className="py-16">
          <div className="container-padded">
            <SectionHeading eyebrow="Related pages" title={`Manufacturing Support for ${city.city} Brands`} />
            <InternalLinkGrid links={[
              { label: "Private Label Cosmetics", href: "/private-label-cosmetics-manufacturer-india", description: "Launch products under your brand name." },
              { label: "Third Party Manufacturing", href: "/third-party-cosmetic-manufacturing-india", description: "Outsource production, filling and packing." },
              { label: "Skincare Manufacturer", href: "/skincare-manufacturer-india", description: "Explore skincare product manufacturing." },
              { label: "Request Quote", href: "/request-quote", description: "Share your city and product requirement." }
            ]} />
          </div>
        </section>

        <section className="bg-mist py-16">
          <div className="container-padded">
            <SectionHeading eyebrow="FAQ" title={`Cosmetic Manufacturing in ${city.city} FAQ`} />
            <FAQAccordion faqs={city.faq} />
          </div>
        </section>
      </main>
      <CTASection title={`Request a Cosmetic Manufacturing Quote for ${city.city}`} />
    </>
  );
}
