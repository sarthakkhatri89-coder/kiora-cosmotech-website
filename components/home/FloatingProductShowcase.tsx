import Link from "next/link";
import type { ProductPage } from "@/data/products";
import HomeScrollReveal from "@/components/home/HomeScrollReveal";

export default function FloatingProductShowcase({ products }: { products: ProductPage[] }) {
  const categoryMap = products.reduce<Record<string, ProductPage[]>>((acc, product) => {
    acc[product.category] ??= [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <section className="section-y">
      <div className="container-padded">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <HomeScrollReveal>
            <div className="max-w-[34rem]">
              <p className="site-kicker">Product universe</p>
              <h2 className="section-title mt-3 font-display font-semibold text-[rgba(50,36,45,0.96)]">
                Buyer-ready category architecture for beauty brands
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-[rgba(64,50,58,0.76)]">
                Instead of browsing a generic catalog, buyers can move through a structured set of
                manufacturing pages for face care, derma-cosmetic, haircare and personal care
                categories with practical formula and packaging context.
              </p>
              <div className="mt-8 grid gap-4">
                {Object.entries(categoryMap).map(([category, items], index) => (
                  <HomeScrollReveal delay={index * 55} key={category}>
                    <article className="site-panel-soft rounded-[1.7rem] p-5">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="site-kicker">{category}</p>
                          <h3 className="mt-3 text-[1.45rem] font-semibold text-[rgba(52,38,46,0.94)]">
                            {items.length} focused manufacturing pages
                          </h3>
                        </div>
                        <div className="flex flex-wrap justify-end gap-2">
                          {items.slice(0, 3).map((product) => (
                            <span className="site-chip-soft" key={product.slug}>
                              {product.name.replace(" Manufacturer", "")}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[rgba(64,50,58,0.72)]">
                        {items[0]?.intro}
                      </p>
                    </article>
                  </HomeScrollReveal>
                ))}
              </div>
            </div>
          </HomeScrollReveal>

          <HomeScrollReveal delay={80}>
            <div className="home-product-universe-panel">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="site-kicker">Commercial destinations</p>
                  <h3 className="mt-3 text-[1.8rem] font-semibold text-[rgba(52,38,46,0.95)]">
                    Featured product manufacturing pages
                  </h3>
                </div>
                <Link
                  className="focus-ring site-button-secondary inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-[rgba(56,41,49,0.92)] transition"
                  href="/skincare-manufacturer-india"
                >
                  Explore category hub
                </Link>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {products.map((product, index) => (
                  <HomeScrollReveal delay={index * 35} key={product.slug}>
                    <article className="home-product-link-card">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="site-chip-soft">{product.category}</span>
                        {product.heroTags?.slice(0, 2).map((tag) => (
                          <span className="home-inline-tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="mt-4 text-[1.2rem] font-semibold text-[rgba(52,38,46,0.95)]">
                        {product.name}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.74)]">
                        {product.directAnswer}
                      </p>
                      <div className="mt-4 rounded-[1.25rem] bg-[rgba(255,244,239,0.72)] px-4 py-3">
                        <p className="text-sm leading-6 text-[rgba(64,50,58,0.72)]">
                          {product.packagingOptions}
                        </p>
                      </div>
                      <Link
                        className="focus-ring mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[rgba(128,73,94,0.96)]"
                        href={`/${product.slug}`}
                      >
                        Explore page
                        <span aria-hidden="true">→</span>
                      </Link>
                    </article>
                  </HomeScrollReveal>
                ))}
              </div>
            </div>
          </HomeScrollReveal>
        </div>
      </div>
    </section>
  );
}
