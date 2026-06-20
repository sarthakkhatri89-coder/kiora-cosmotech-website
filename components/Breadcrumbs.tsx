import Link from "next/link";
import { cleanBreadcrumbName, type Crumb } from "@/lib/schema";

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="container-padded py-5 text-sm text-[rgba(76,59,67,0.64)]" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((crumb, index) => {
          const label = cleanBreadcrumbName(crumb.name);
          const isCurrent = index === crumbs.length - 1;

          return (
            <li className="flex items-center gap-2" key={`${crumb.href}-${index}`}>
              {index > 0 ? <span className="text-[rgba(76,59,67,0.3)]" aria-hidden="true">&gt;</span> : null}
              {isCurrent ? (
                <span className="font-medium text-[rgba(56,41,49,0.9)]">{label}</span>
              ) : (
                <Link className="focus-ring rounded-sm hover:text-[rgba(148,84,109,0.94)]" href={crumb.href}>
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
