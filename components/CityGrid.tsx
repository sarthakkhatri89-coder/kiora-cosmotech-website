import Link from "next/link";
import { cities } from "@/data/cities";

export default function CityGrid({ limit }: { limit?: number }) {
  const shown = typeof limit === "number" ? cities.slice(0, limit) : cities;
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {shown.map((city) => (
        <Link
          className="focus-ring rounded-[1.25rem] border border-[rgba(59,43,51,0.08)] bg-white/76 px-5 py-4 font-semibold text-[rgba(52,38,46,0.94)] transition hover:border-[rgba(154,81,107,0.32)] hover:text-[rgba(148,84,109,0.94)]"
          href={`/city/${city.slug}`}
          key={city.slug}
        >
          Cosmetic Manufacturer in {city.city}
        </Link>
      ))}
    </div>
  );
}
