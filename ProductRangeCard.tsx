import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ProductPage } from "@/data/products";

export default function ProductRangeCard({ product }: { product: ProductPage }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-charcoal/10 bg-ivory shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      <div className="cosmetic-visual relative h-36 border-b border-charcoal/10" role="img" aria-label={`${product.name} manufacturing product mockup`}>
        <div className="product-bottle left-8 h-28 w-12" />
        <div className="product-bottle left-24 h-20 w-10 opacity-90" />
        <div className="texture-swatch right-8 top-8 h-16 w-16" />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">{product.category}</p>
        <h3 className="mt-3 text-xl font-semibold text-charcoal">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/72">{product.description}</p>
        <div className="mt-5 space-y-3 text-sm">
          <p><span className="font-semibold text-charcoal">Formula:</span> {product.formulaOptions.slice(0, 3).join(", ")}</p>
          <p><span className="font-semibold text-charcoal">Packaging:</span> {product.packagingOptions}</p>
        </div>
        <Link className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-teal px-4 py-2.5 text-sm font-semibold text-ivory transition hover:bg-charcoal" href={`/${product.slug}`}>
          View manufacturing specs <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
