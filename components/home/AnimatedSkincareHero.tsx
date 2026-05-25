import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HomeScrollReveal from "@/components/home/HomeScrollReveal";

const trustItems = [
  "Private Label Support",
  "Third Party Manufacturing",
  "Custom Formulation",
  "Packaging Guidance",
  "Pan-India Supply"
];

export default function AnimatedSkincareHero() {
  return (
    <section className="overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(232,217,189,0.35),transparent_26rem),radial-gradient(circle_at_top_right,rgba(143,174,155,0.22),transparent_24rem),linear-gradient(180deg,#fffdf9_0%,#f7f1e7_100%)]">
      <div className="container-padded grid min-h-[520px] gap-7 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12 lg:py-14">
        <HomeScrollReveal className="relative z-[1]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-teal">
            Kiora CosmoTech
          </p>
          <h1 className="max-w-[8.8ch] font-display text-[clamp(2.7rem,11vw,3.8rem)] font-semibold leading-[0.96] text-charcoal lg:text-[clamp(3.5rem,5.5vw,6rem)]">
            Skincare &amp; Cosmetic Manufacturer in India
          </h1>
          <p className="mt-6 max-w-[35rem] text-[1rem] leading-8 text-ink/78 md:text-[1.06rem]">
            Kiora CosmoTech helps startups, D2C beauty brands, salon brands, influencers,
            derma-cosmetic businesses, distributors and marketing companies launch skincare,
            haircare and personal care products through private label, third-party and contract
            manufacturing support.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3 text-center font-semibold leading-tight text-ivory shadow-[0_20px_40px_rgba(23,33,29,0.12)] transition hover:bg-teal sm:min-w-[230px] sm:w-auto"
              href="/request-quote"
            >
              Request Manufacturing Quote <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-full border border-charcoal/12 bg-white/75 px-6 py-3 text-center font-semibold leading-tight text-charcoal shadow-[0_18px_36px_rgba(23,33,29,0.06)] transition hover:bg-white sm:min-w-[220px] sm:w-auto"
              href="/skincare-manufacturer-india"
            >
              Explore Product Categories
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {trustItems.map((item) => (
              <span
                className="rounded-full border border-charcoal/8 bg-white/75 px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.11em] text-ink/72 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </HomeScrollReveal>

        <HomeScrollReveal className="relative" delay={120}>
          <div className="relative rounded-[2.1rem] border border-charcoal/8 bg-[linear-gradient(180deg,rgba(255,253,247,0.95),rgba(247,241,231,0.92))] p-4 shadow-[0_28px_80px_rgba(23,33,29,0.10)] lg:p-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,255,255,0.92),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(143,174,155,0.20),transparent_24%),radial-gradient(circle_at_72%_82%,rgba(232,217,189,0.44),transparent_22%)]" />
            <div className="relative rounded-[1.7rem] border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.88),rgba(243,236,224,0.86))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.84)] lg:p-5">
              <div className="relative min-h-[240px] overflow-hidden rounded-[1.45rem] border border-white/70 shadow-[0_18px_42px_rgba(23,33,29,0.10)] lg:min-h-[390px]">
                <Image
                  src="/images/HERO IMAGE.jpg"
                  alt="Kiora CosmoTech skincare and cosmetic manufacturing hero image"
                  fill
                  className="object-contain bg-[linear-gradient(135deg,rgba(251,247,239,0.98),rgba(232,217,189,0.72)_58%,rgba(143,174,155,0.24))]"
                  sizes="(max-width: 1024px) 100vw, 32rem"
                  priority
                />
              </div>
              <div className="mt-4 rounded-[1.2rem] border border-charcoal/8 bg-white/76 px-4 py-3 shadow-sm">
                <p className="text-center text-sm font-medium leading-7 text-ink/76">
                  Formula &bull; Packaging &bull; Filling &bull; Quality &bull; Dispatch
                </p>
              </div>
            </div>
          </div>
        </HomeScrollReveal>
      </div>
    </section>
  );
}
