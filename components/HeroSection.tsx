import Link from "next/link";
import { ArrowRight, Beaker, CheckCircle2, Factory, PackageCheck, Sparkles } from "lucide-react";

const trustItems = [
  "Private Label Support",
  "Third Party Manufacturing",
  "Custom Formulation",
  "Packaging Guidance",
  "Pan-India Supply"
];

export default function HeroSection() {
  return (
    <section className="hero-texture overflow-hidden text-ivory">
      <div className="container-padded grid min-h-[720px] gap-10 py-16 pb-24 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20 md:pb-24">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-champagne">Kiora CosmoTech</p>
          <h1 className="hero-title max-w-4xl font-display font-semibold">Skincare & Cosmetic Manufacturer in India</h1>
          <p className="mt-6 max-w-2xl text-[1.08rem] leading-8 text-ivory/84 md:text-xl">
            Private label, third party and custom formulation support for skincare, derma-cosmetic, haircare and personal care brands.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-champagne px-6 py-3 text-center font-semibold leading-tight text-charcoal transition hover:bg-ivory sm:min-w-[230px]" href="/request-quote">
              Request Manufacturing Quote <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ivory/35 px-6 py-3 text-center font-semibold leading-tight transition hover:bg-ivory/10 sm:min-w-[210px]" href="/skincare-manufacturer-india">
              Explore Product Range
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {trustItems.map((item) => (
              <span className="rounded-full border border-ivory/18 bg-ivory/10 px-3 py-2 text-xs font-semibold text-ivory/88" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="cosmetic-visual relative min-h-[460px] overflow-hidden rounded-[2rem] border border-ivory/25 p-5 shadow-premium" role="img" aria-label="Kiora CosmoTech lab formulation, skincare product mockups and filling concept">
          <div className="absolute left-6 top-6 rounded-2xl bg-charcoal/90 p-4 text-champagne shadow-premium">
            <Sparkles size={30} aria-hidden="true" />
          </div>
          <div className="product-bottle left-[18%] h-52" />
          <div className="product-bottle left-[42%] h-64" />
          <div className="product-bottle left-[66%] h-44" />
          <div className="texture-swatch right-8 top-24 h-28 w-28" />
          <div className="texture-swatch bottom-24 left-8 h-20 w-20" />
          <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-charcoal/90 p-5 text-ivory shadow-premium backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne">Manufacturing workflow</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Beaker className="mt-0.5 text-champagne" size={18} aria-hidden="true" />
                <span className="text-sm text-ivory/82">Formula selection and R&D support</span>
              </div>
              <div className="flex items-start gap-3">
                <Factory className="mt-0.5 text-champagne" size={18} aria-hidden="true" />
                <span className="text-sm text-ivory/82">Batch planning, filling and packing</span>
              </div>
              <div className="flex items-start gap-3">
                <PackageCheck className="mt-0.5 text-champagne" size={18} aria-hidden="true" />
                <span className="text-sm text-ivory/82">Packaging and label coordination</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 text-champagne" size={18} aria-hidden="true" />
                <span className="text-sm text-ivory/82">Finished product review and dispatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
