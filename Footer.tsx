import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { cities } from "@/data/cities";
import { navigation } from "@/data/navigation";
import { siteConfig, whatsappHref } from "@/data/siteConfig";

export default function Footer() {
  const productLinks = navigation.find((item) => item.label === "Products")?.children ?? [];
  const serviceLinks = navigation.find((item) => item.label === "Services")?.children ?? [];

  return (
    <footer className="bg-charcoal pb-24 pt-16 text-ivory">
      <div className="container-padded grid gap-10 lg:grid-cols-[1.25fr_0.8fr_1fr_0.9fr]">
        <div>
          <Link className="focus-ring inline-flex items-center gap-3 rounded-sm" href="/" aria-label="Kiora CosmoTech home">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-champagne font-display text-xl font-semibold text-charcoal">K</span>
            <span>
              <span className="block font-display text-3xl font-semibold">{siteConfig.name}</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.18em] text-champagne">Cosmetic Manufacturing</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-ivory/72">{siteConfig.positioning}</p>
          <p className="mt-4 text-sm text-champagne">{siteConfig.tagline}</p>
          <div className="mt-6 grid gap-3 text-sm text-ivory/72">
            <a className="inline-flex items-center gap-2 hover:text-champagne" href={whatsappHref()}>
              <MessageCircle size={16} aria-hidden="true" /> Get Quote on WhatsApp
            </a>
            <a className="inline-flex items-center gap-2 hover:text-champagne" href={`mailto:${siteConfig.email}`}>
              <Mail size={16} aria-hidden="true" /> {siteConfig.email}
            </a>
            <p className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" /> Pan-India manufacturing support, India
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-champagne">Services</h3>
          <ul className="grid gap-3 text-sm text-ivory/72">
            {serviceLinks.map((link) => (
              <li key={link.href}><Link className="hover:text-champagne" href={link.href}>{link.label}</Link></li>
            ))}
            <li><Link className="hover:text-champagne" href="/request-quote">Request Quote</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-champagne">Products</h3>
          <ul className="grid gap-3 text-sm text-ivory/72 sm:grid-cols-2">
            {productLinks.map((link) => (
              <li key={link.href}><Link className="hover:text-champagne" href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="grid gap-8">
          <div>
            <h3 className="mb-4 font-semibold text-champagne">Cities</h3>
            <ul className="grid gap-3 text-sm text-ivory/72 sm:grid-cols-2 lg:grid-cols-1">
              {cities.slice(0, 8).map((city) => (
                <li key={city.slug}><Link className="hover:text-champagne" href={`/city/${city.slug}`}>{city.city}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-champagne">Blog</h3>
            <ul className="grid gap-3 text-sm text-ivory/72">
              {blogPosts.slice(0, 4).map((post) => (
                <li key={post.slug}><Link className="hover:text-champagne" href={`/blog/${post.slug}`}>{post.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container-padded mt-10 border-t border-ivory/15 pt-6 text-sm text-ivory/55">
        © {new Date().getFullYear()} Kiora CosmoTech. Skincare, derma-cosmetic, haircare and personal care manufacturing support.
      </div>
    </footer>
  );
}
