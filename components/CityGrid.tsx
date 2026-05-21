import Link from "next/link";
import { cities } from "@/data/cities";

export default function CityGrid({ limit }: { limit?: number }) {
  const shown = typeof limit === "number" ? cities.slice(0, limit) : cities;
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {shown.map((city) => (
        <Link className="focus-ring rounded-2xl border border-charcoal/10 bg-ivory px-5 py-4 font-semibold text-charcoal transition hover:border-teal hover:text-teal" href={`/city/${city.slug}`} key={city.slug}>
          Cosmetic Manufacturer in {city.city}
        </Link>
      ))}
    </div>
  );
}
