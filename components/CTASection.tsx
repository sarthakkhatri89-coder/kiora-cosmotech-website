import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/data/siteConfig";

export default function CTASection({
  title = "Ready to discuss your cosmetic manufacturing requirement?",
  text = "Share your product category, quantity and packaging preference. Kiora CosmoTech will help you shape the next manufacturing step.",
  primaryHref = "/request-quote",
  primaryLabel = "Request Manufacturing Quote"
}: {
  title?: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="section-y bg-charcoal pb-24 text-ivory">
      <div className="container-padded grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-champagne">Quote support</p>
          <h2 className="section-title font-display font-semibold">{title}</h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-8 text-ivory/78">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-champagne px-6 py-3 text-center font-semibold leading-tight text-charcoal transition hover:bg-ivory" href={primaryHref}>
            {primaryLabel}
          </Link>
          <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ivory/30 px-6 py-3 text-center font-semibold leading-tight text-ivory transition hover:bg-ivory/10" href={whatsappHref()}>
            <MessageCircle size={18} aria-hidden="true" /> Get Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
