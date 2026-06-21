import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const trustItems = [
  "Private Label Support",
  "Third Party Manufacturing",
  "Custom Formulation",
  "Packaging Guidance",
  "Pan-India Supply"
];

export default function AnimatedSkincareHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffaf6_0%,#f8efe6_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <picture className="absolute inset-0 block h-full w-full">
          <source
            media="(max-width: 767px)"
            srcSet="/images/home/kiora-hero-mobile.webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/home/kiora-hero-desktop.webp"
          />
          <img
            src="/images/home/kiora-hero-desktop.webp"
            alt="Kiora CosmoTech skincare and cosmetic manufacturing"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center md:object-[74%_center]"
          />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,250,246,0.97)_0%,rgba(255,250,246,0.94)_24%,rgba(255,250,246,0.82)_42%,rgba(255,250,246,0.2)_66%,rgba(255,250,246,0.06)_100%)] md:bg-[linear-gradient(90deg,rgba(255,250,246,0.97)_0%,rgba(255,250,246,0.94)_30%,rgba(255,250,246,0.78)_44%,rgba(255,250,246,0.16)_66%,rgba(255,250,246,0.04)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,103,132,0.12),transparent_22rem),radial-gradient(circle_at_top_right,rgba(164,188,174,0.14),transparent_20rem),radial-gradient(circle_at_bottom_left,rgba(255,226,215,0.22),transparent_22rem)]" />
      </div>

      <div className="container-padded relative min-h-[620px] py-8 md:min-h-[700px] lg:min-h-[780px] lg:py-14">
        <div className="relative z-[1] grid min-h-[inherit] items-end gap-8 py-10 md:py-12 lg:grid-cols-[minmax(0,40rem)_minmax(0,1fr)] lg:py-16">
          <div className="max-w-[40rem]">
            <div className="hero-copy-shell">
              <p className="site-kicker mb-4">Kiora CosmoTech</p>
              <h1 className="max-w-[9ch] font-display text-[clamp(3rem,11vw,4.15rem)] font-semibold leading-[0.94] text-[rgba(49,35,43,0.96)] lg:text-[clamp(4rem,5.8vw,6.25rem)]">
                Skincare &amp; Cosmetic Manufacturer in India
              </h1>
              <p className="mt-6 max-w-[35rem] text-[1rem] leading-8 text-[rgba(64,50,58,0.82)] md:text-[1.08rem]">
                Kiora CosmoTech helps startups, D2C beauty brands, salon brands, influencers,
                derma-cosmetic businesses, distributors and marketing companies launch skincare,
                haircare and personal care products through private label, third-party and contract
                manufacturing support.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  className="focus-ring site-button-primary inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-semibold leading-tight text-ivory transition sm:min-w-[230px] sm:w-auto"
                  href="/request-quote"
                >
                  Request Manufacturing Quote <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link
                  className="focus-ring site-button-secondary inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 text-center font-semibold leading-tight text-[rgba(56,41,49,0.92)] transition sm:min-w-[220px] sm:w-auto"
                  href="/skincare-manufacturer-india"
                >
                  Explore Product Categories
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {trustItems.map((item) => (
                  <span className="site-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden items-end justify-end lg:flex">
            <div className="hero-editorial-note">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3a2b35,#9a516b)] text-ivory shadow-[0_18px_36px_rgba(114,63,83,0.2)]">
                <Sparkles size={18} aria-hidden="true" />
              </div>
              <p className="site-kicker mt-5">Luxury manufacturing communication</p>
              <p className="mt-3 text-sm leading-7 text-[rgba(64,50,58,0.76)]">
                Private label, packaging planning, launch readiness and category strategy framed
                for modern beauty brands in India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
