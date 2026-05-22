import Link from "next/link";
import { cleanBreadcrumbName, type Crumb } from "@/lib/schema";

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="container-padded py-4 text-sm text-ink/65" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((crumb, index) => {
          const label = cleanBreadcrumbName(crumb.name);
          const isCurrent = index === crumbs.length - 1;

          return (
            <li className="flex items-center gap-2" key={`${crumb.href}-${index}`}>
              {index > 0 ? <span className="text-ink/35" aria-hidden="true">&gt;</span> : null}
              {isCurrent ? (
                <span className="font-medium text-ink">{label}</span>
              ) : (
                <Link className="focus-ring rounded-sm hover:text-teal" href={crumb.href}>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
