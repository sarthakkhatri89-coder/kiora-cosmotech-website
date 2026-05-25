import Link from "next/link";
import type { ProductPage } from "@/data/products";
import HomeScrollReveal from "@/components/home/HomeScrollReveal";

export default function FloatingProductShowcase({ products }: { products: ProductPage[] }) {
  return (
    <section className="section-y">
      <div className="container-padded">
        <HomeScrollReveal className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">
            Product range
          </p>
          <h2 className="section-title mt-3 font-display font-semibold text-charcoal">
            Buyer-Ready Product Manufacturing Pages
          </h2>
          <p className="mt-5 text-[1rem] leading-8 text-ink/74">
            Explore product-specific pages with practical manufacturing context, formula directions,
            packaging examples and direct quote paths for launch-ready beauty brands.
          </p>
        </HomeScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <HomeScrollReveal delay={index * 40} key={product.slug}>
              <article className="overflow-hidden rounded-[1.8rem] border border-charcoal/8 bg-ivory shadow-[0_22px_54px_rgba(23,33,29,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(23,33,29,0.1)]">
                <div className="border-b border-charcoal/8 bg-[radial-gradient(circle_at_top_left,rgba(232,217,189,0.58),transparent_18rem),linear-gradient(135deg,rgba(255,253,247,0.96),rgba(245,239,229,0.94))] p-5">
                  <div className="rounded-[1.4rem] border border-white/70 bg-white/65 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)]">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-teal">
                      {product.category}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.formulaOptions.slice(0, 2).map((option) => (
                        <span
                          className="rounded-full border border-charcoal/8 bg-white/78 px-3 py-1.5 text-[0.72rem] font-medium text-ink/70"
                          key={option}
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 rounded-2xl bg-[linear-gradient(135deg,rgba(143,174,155,0.2),rgba(255,255,255,0.65),rgba(232,217,189,0.45))] p-4">
                      <p className="text-sm leading-7 text-ink/74">{product.packagingOptions}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-charcoal">{product.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/72">{product.intro}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-mist p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
                        Formula examples
                      </p>
                      <p className="mt-2 text-sm leading-6 text-ink/72">
                        {product.formulaOptions.slice(0, 3).join(", ")}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-mist p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
                        Packaging examples
                      </p>
                      <p className="mt-2 text-sm leading-6 text-ink/72">{product.packagingOptions}</p>
                    </div>
                  </div>
                  <Link
                    className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-charcoal px-5 py-3 text-center font-semibold text-ivory transition hover:bg-teal"
                    href={`/${product.slug}`}
                  >
                    Explore {product.name}
                  </Link>
                </div>
              </article>
            </HomeScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
