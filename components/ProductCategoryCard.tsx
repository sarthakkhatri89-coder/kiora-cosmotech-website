import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Beaker, Droplets, FlaskConical, Leaf } from "lucide-react";

const icons = {
  Skincare: FlaskConical,
  "Derma Cosmetic": Beaker,
  Haircare: Leaf,
  "Personal Care": Droplets
};

const visuals = {
  Skincare: "/images/skincare-formulation-lab.png",
  "Derma Cosmetic": "/images/derma-cosmetic-development.png",
  Haircare: "/images/haircare-manufacturing.png",
  "Personal Care": "/images/personal-care-packaging.png"
};

export default function ProductCategoryCard({
  title,
  href,
  description,
  examples = []
}: {
  title: string;
  href: string;
  description: string;
  examples?: string[];
}) {
  const Icon = icons[title as keyof typeof icons] ?? FlaskConical;
  const visual = visuals[title as keyof typeof visuals] ?? visuals.Skincare;

  return (
    <Link className="focus-ring group overflow-hidden rounded-3xl border border-charcoal/10 bg-ivory shadow-sm transition hover:-translate-y-1 hover:shadow-premium" href={href}>
      <div className="cosmetic-visual relative h-48 border-b border-charcoal/10" role="img" aria-label={`${title} cosmetic product manufacturing visual`}>
        <Image
          className="absolute inset-0 h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105"
          src={visual}
          alt={`${title} cosmetic manufacturing visual placeholder`}
          width={900}
          height={540}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ivory/15 via-transparent to-charcoal/15" />
        <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-charcoal text-champagne shadow-premium">
          <Icon size={28} aria-hidden="true" />
        </div>
        <div className="product-bottle right-8 h-32 w-14" />
        <div className="product-bottle right-24 h-24 w-12 opacity-90" />
        <div className="texture-swatch bottom-6 left-8 h-16 w-16" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
        <p className="mt-3 leading-7 text-ink/72">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {examples.slice(0, 6).map((example) => (
            <span className="rounded-full bg-mist px-3 py-1.5 text-xs font-semibold text-charcoal" key={example}>{example}</span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal">
          Explore category <ArrowRight size={16} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
