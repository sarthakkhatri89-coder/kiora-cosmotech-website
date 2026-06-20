import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

      <div className="container-padded relative min-h-[580px] py-8 md:min-h-[660px] lg:min-h-[740px] lg:py-14">
        <div className="relative z-[1] max-w-[40rem] pt-6 md:pt-12 lg:pt-16">
          <p className="site-kicker mb-4">
            Kiora CosmoTech
          </p>
          <h1 className="max-w-[8.8ch] font-display text-[clamp(2.8rem,11vw,4rem)] font-semibold leading-[0.95] text-[rgba(49,35,43,0.96)] lg:text-[clamp(3.6rem,5.6vw,6rem)]">
            Skincare &amp; Cosmetic Manufacturer in India
          </h1>
          <p className="mt-6 max-w-[35rem] text-[1rem] leading-8 text-[rgba(64,50,58,0.8)] md:text-[1.08rem]">
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
              <span className="site-chip" key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
