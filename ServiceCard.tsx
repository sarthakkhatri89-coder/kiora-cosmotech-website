import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ServiceCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link className="focus-ring group rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium" href={href}>
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal">
        <ArrowUpRight size={24} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
      <p className="mt-3 leading-7 text-ink/72">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal">
        Discuss this service <ArrowRight size={16} aria-hidden="true" />
      </span>
    </Link>
  );
}
