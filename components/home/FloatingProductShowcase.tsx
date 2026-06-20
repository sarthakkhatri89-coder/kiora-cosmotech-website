import Link from "next/link";
import type { ProductPage } from "@/data/products";
import HomeScrollReveal from "@/components/home/HomeScrollReveal";

export default function FloatingProductShowcase({ products }: { products: ProductPage[] }) {
  return (
    <section className="section-y">
      <div className="container-padded">
        <HomeScrollReveal className="mx-auto max-w-4xl text-center">
          <p className="site-kicker">Product range</p>
          <h2 className="section-title mt-3 font-display font-semibold text-[rgba(50,36,45,0.96)]">
            Buyer-Ready Product Manufacturing Pages
          </h2>
          <p className="mt-5 text-[1rem] leading-8 text-[rgba(64,50,58,0.76)]">
            Explore product-specific pages with practical manufacturing context, formula directions,
            packaging examples and direct quote paths for launch-ready beauty brands.
          </p>
        </HomeScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <HomeScrollReveal delay={index * 40} key={product.slug}>
              <article className="site-panel overflow-hidden rounded-[1.8rem] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_58px_rgba(87,60,70,0.12)]">
                <div className="border-b border-[rgba(59,43,51,0.08)] bg-[radial-gradient(circle_at_top_left,rgba(255,231,223,0.72),transparent_18rem),linear-gradient(135deg,rgba(255,252,248,0.98),rgba(250,242,235,0.94),rgba(164,188,174,0.16))] p-5">
                  <div className="rounded-[1.4rem] border border-white/70 bg-white/72 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)]">
                    <p className="site-kicker">
                      {product.category}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.formulaOptions.slice(0, 2).map((option) => (
                        <span
                          className="site-chip-soft"
                          key={option}
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 rounded-2xl bg-[linear-gradient(135deg,rgba(255,242,236,0.82),rgba(255,255,255,0.78),rgba(164,188,174,0.14))] p-4">
                      <p className="text-sm leading-7 text-[rgba(64,50,58,0.74)]">{product.packagingOptions}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-[rgba(52,38,46,0.94)]">{product.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.72)]">{product.intro}</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-[rgba(255,241,236,0.72)] p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(148,84,109,0.86)]">
                        Formula examples
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[rgba(64,50,58,0.72)]">
                        {product.formulaOptions.slice(0, 3).join(", ")}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[rgba(255,241,236,0.72)] p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(148,84,109,0.86)]">
                        Packaging examples
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[rgba(64,50,58,0.72)]">{product.packagingOptions}</p>
                    </div>
                  </div>
                  <Link
                    className="focus-ring site-button-primary mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3 text-center font-semibold text-ivory transition"
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
