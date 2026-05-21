import Link from "next/link";

export default function InternalLinkGrid({
  links
}: {
  links: { label: string; href: string; description: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {links.map((link) => (
        <Link className="focus-ring rounded-3xl border border-charcoal/10 bg-ivory p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-premium" href={link.href} key={link.href}>
          <h3 className="font-semibold text-charcoal">{link.label}</h3>
          <p className="mt-2 text-sm leading-6 text-ink/70">{link.description}</p>
        </Link>
      ))}
    </div>
  );
}
