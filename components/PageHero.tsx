import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers3, Sparkles } from "lucide-react";

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
    <section className="hero-texture overflow-hidden">
      <div className="container-padded grid min-h-[480px] gap-10 py-14 pb-18 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
        <div>
          <p className="site-kicker mb-4">{eyebrow}</p>
          <h1 className="max-w-[10ch] font-display text-[clamp(2.75rem,7vw,5.8rem)] font-semibold leading-[0.96] text-[rgba(49,35,43,0.96)]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-8 text-[rgba(64,50,58,0.78)] md:text-[1.2rem]">
            {intro}
          </p>
          <Link className="focus-ring site-button-primary mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-semibold leading-tight text-ivory transition" href={ctaHref}>
            {ctaLabel} <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="site-panel-soft relative min-h-[320px] overflow-hidden rounded-[2rem] p-5 md:p-6" role="img" aria-label="Kiora CosmoTech skincare formulation planning and manufacturing support">
          <div className="absolute inset-x-8 top-8 h-28 rounded-[1.6rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.8),rgba(255,231,223,0.62),rgba(164,188,174,0.28))]" />
          <div className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-[rgba(255,255,255,0.86)] text-[rgba(148,84,109,0.92)] shadow-[0_18px_34px_rgba(87,60,70,0.1)]">
            <Sparkles size={24} aria-hidden="true" />
          </div>
          <div className="absolute left-6 top-24 right-20 rounded-[1.5rem] border border-white/70 bg-white/72 p-5 shadow-[0_20px_40px_rgba(87,60,70,0.08)] backdrop-blur">
            <p className="site-kicker">Brand-ready roadmap</p>
            <p className="mt-3 text-lg font-semibold text-[rgba(50,36,45,0.94)]">
              Formula, pack, sample, fill and dispatch planning in one commercial flow.
            </p>
          </div>
          <div className="absolute inset-x-6 bottom-6 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Private label", icon: Layers3 },
              { label: "Packaging support", icon: CheckCircle2 },
              { label: "Launch planning", icon: Sparkles }
            ].map(({ label, icon: Icon }) => (
              <div
                className="rounded-[1.35rem] border border-white/70 bg-white/76 px-4 py-4 shadow-[0_16px_32px_rgba(87,60,70,0.08)]"
                key={label}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(154,81,107,0.1)] text-[rgba(148,84,109,0.92)]">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <p className="mt-3 text-sm font-semibold text-[rgba(55,40,49,0.88)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
