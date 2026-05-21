import Link from "next/link";
import type { Crumb } from "@/lib/schema";

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="container-padded py-4 text-sm text-ink/65" aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-2">
        {crumbs.map((crumb, index) => (
          <li className="flex items-center gap-2" key={crumb.href}>
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === crumbs.length - 1 ? (
              <span className="font-medium text-ink">{crumb.name}</span>
            ) : (
              <Link className="focus-ring rounded-sm hover:text-teal" href={crumb.href}>
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
