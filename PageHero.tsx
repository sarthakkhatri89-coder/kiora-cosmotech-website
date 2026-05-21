import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";

export default function PageHero({
  eyebrow,
  title,
  intro,
  ctaLabel = "Request Manufacturing Quote",
  ctaHref = "/request-quote"
}: {
  eyebrow: string;
  title: string;
  intro: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="hero-texture text-ivory">
      <div className="container-padded grid min-h-[460px] gap-10 py-16 pb-20 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-champagne">{eyebrow}</p>
          <h1 className="font-display text-[clamp(2.7rem,7vw,5.8rem)] font-semibold leading-none">{title}</h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-ivory/82 md:text-xl">{intro}</p>
          <Link className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-champagne px-6 py-3 text-center font-semibold leading-tight text-charcoal transition hover:bg-ivory" href={ctaHref}>
            {ctaLabel} <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="cosmetic-visual relative min-h-[300px] overflow-hidden rounded-[2rem] border border-ivory/20 p-6 shadow-premium" role="img" aria-label="Kiora CosmoTech skincare formulation lab">
          <div className="product-bottle bottom-10 left-12 h-40" />
          <div className="product-bottle bottom-10 left-32 h-32 w-14" />
          <div className="texture-swatch right-10 top-24 h-24 w-24" />
          <div className="absolute right-8 top-8 rounded-full bg-teal/15 p-5 text-teal">
            <FlaskConical size={42} aria-hidden="true" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-ivory/85 p-5 text-charcoal shadow-premium">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">R&D + Manufacturing</p>
            <p className="mt-2 text-lg font-semibold">Formula, packaging, filling, quality checks and dispatch support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
