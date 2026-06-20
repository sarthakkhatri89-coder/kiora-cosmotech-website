import Link from "next/link";

export default function InternalLinkGrid({
  links
}: {
  links: { label: string; href: string; description: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {links.map((link) => (
        <Link
          className="focus-ring site-panel-soft rounded-[1.6rem] p-5 transition hover:-translate-y-1 hover:shadow-[0_26px_54px_rgba(87,60,70,0.11)]"
          href={link.href}
          key={link.href}
        >
          <p className="site-kicker mb-3">Explore</p>
          <h3 className="font-semibold text-[rgba(52,38,46,0.94)]">{link.label}</h3>
          <p className="mt-2 text-sm leading-6 text-[rgba(64,50,58,0.72)]">{link.description}</p>
        </Link>
      ))}
    </div>
  );
}
