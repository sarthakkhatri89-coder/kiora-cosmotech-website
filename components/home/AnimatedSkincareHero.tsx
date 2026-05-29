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
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdf9_0%,#f7f1e7_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/home/kiora-hero-mobile.webp.png"
            alt=""
            fill
            priority
            aria-hidden="true"
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/home/kiora-hero-desktop.webp.png"
            alt=""
            fill
            priority
            aria-hidden="true"
            className="object-cover object-[72%_center]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,249,0.96)_0%,rgba(255,253,249,0.9)_26%,rgba(255,253,249,0.74)_46%,rgba(255,253,249,0.16)_68%,rgba(255,253,249,0.08)_100%)] md:bg-[linear-gradient(90deg,rgba(255,253,249,0.96)_0%,rgba(255,253,249,0.92)_28%,rgba(255,253,249,0.72)_44%,rgba(255,253,249,0.18)_64%,rgba(255,253,249,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,217,189,0.28),transparent_22rem),radial-gradient(circle_at_top_right,rgba(143,174,155,0.16),transparent_20rem)]" />
      </div>

      <div className="container-padded relative min-h-[560px] py-8 md:min-h-[640px] lg:min-h-[720px] lg:py-14">
        <HomeScrollReveal className="relative z-[1] max-w-[39rem] pt-4 md:pt-10 lg:pt-14">
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
      </div>
    </section>
  );
}
