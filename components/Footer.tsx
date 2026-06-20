import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { cities } from "@/data/cities";
import { navigation } from "@/data/navigation";
import { siteConfig, whatsappHref } from "@/data/siteConfig";

export default function Footer() {
  const productLinks = navigation.find((item) => item.label === "Products")?.children ?? [];
  const baseServiceLinks = navigation.find((item) => item.label === "Services")?.children ?? [];
  const serviceLinks = baseServiceLinks.some((link) => link.href === "/request-quote")
    ? baseServiceLinks
    : [...baseServiceLinks, { label: "Request Quote", href: "/request-quote" }];
  const companyLinks = [
    { label: "About", href: "/about-kiora-cosmotech" },
    { label: "Manufacturing Process", href: "/manufacturing-process" },
    { label: "Quality and Compliance", href: "/quality-and-compliance" },
    { label: "Startup Brand Support", href: "/startup-cosmetic-brand-support" },
    { label: "Packaging Options", href: "/packaging-options" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Request Quote", href: "/request-quote" },
    { label: "Blog", href: "/blog" }
  ];

  return (
    <footer className="pb-24 pt-16 text-ivory" style={{ background: "linear-gradient(160deg, rgba(41,30,37,1) 0%, rgba(31,28,31,1) 48%, rgba(46,31,39,1) 100%)" }}>
      <div className="container-padded grid gap-10 lg:grid-cols-[1.15fr_0.75fr_0.95fr_1.15fr]">
        <div>
          <Link className="focus-ring inline-flex items-center gap-3 rounded-sm" href="/" aria-label="Kiora CosmoTech home">
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[1.15rem] border border-[rgba(255,222,213,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,239,234,0.9))] shadow-[0_18px_34px_rgba(0,0,0,0.16)]">
              <Image
                src={siteConfig.logo}
                alt="Kiora CosmoTech logo"
                fill
                className="object-contain p-1.5"
                sizes="48px"
              />
            </span>
            <span>
              <span className="block font-display text-3xl font-semibold text-[rgba(255,247,242,0.98)]">{siteConfig.name}</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.22em] text-[rgba(234,180,190,0.9)]">
                Luxury Derma-Cosmetic Manufacturing
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-md leading-7 text-[rgba(255,243,238,0.72)]">{siteConfig.positioning}</p>
          <p className="mt-4 text-sm text-[rgba(234,180,190,0.88)]">{siteConfig.tagline}</p>
          <div className="mt-6 grid gap-3 text-sm text-ivory/72">
            <a className="inline-flex items-center gap-2 hover:text-[rgba(255,218,211,0.96)]" href={whatsappHref()}>
              <MessageCircle size={16} aria-hidden="true" /> Get Quote on WhatsApp
            </a>
            <a className="inline-flex items-center gap-2 hover:text-[rgba(255,218,211,0.96)]" href={`mailto:${siteConfig.email}`}>
              <Mail size={16} aria-hidden="true" /> {siteConfig.email}
            </a>
            <p className="inline-flex items-center gap-2 text-[rgba(255,243,238,0.72)]">
              <MapPin size={16} aria-hidden="true" /> Pan-India cosmetic manufacturing, India
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-[rgba(234,180,190,0.9)]">Services</h3>
          <ul className="grid gap-3 text-sm text-ivory/72">
            {serviceLinks.map((link) => (
              <li key={link.href}><Link className="hover:text-[rgba(255,218,211,0.96)]" href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-[rgba(234,180,190,0.9)]">Products</h3>
          <ul className="grid gap-3 text-sm text-ivory/72 sm:grid-cols-2">
            {productLinks.map((link) => (
              <li key={link.href}><Link className="hover:text-[rgba(255,218,211,0.96)]" href={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="grid gap-8">
          <div>
            <h3 className="mb-4 font-semibold text-[rgba(234,180,190,0.9)]">Company</h3>
            <ul className="grid gap-3 text-sm text-ivory/72 sm:grid-cols-2 lg:grid-cols-1">
              {companyLinks.map((link) => (
                <li key={link.href}><Link className="hover:text-[rgba(255,218,211,0.96)]" href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[rgba(234,180,190,0.9)]">Cities</h3>
            <ul className="grid gap-3 text-sm text-ivory/72 sm:grid-cols-2">
              {cities.map((city) => (
                <li key={city.slug}><Link className="hover:text-[rgba(255,218,211,0.96)]" href={`/city/${city.slug}`}>{city.city}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[rgba(234,180,190,0.9)]">Blog</h3>
            <ul className="grid gap-3 text-sm text-ivory/72">
              {blogPosts.slice(0, 4).map((post) => (
                <li key={post.slug}><Link className="hover:text-[rgba(255,218,211,0.96)]" href={`/blog/${post.slug}`}>{post.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container-padded mt-10 border-t border-[rgba(255,234,226,0.14)] pt-6 text-sm text-[rgba(255,240,234,0.56)]">
        &copy; {new Date().getFullYear()} Kiora CosmoTech. Skincare, derma-cosmetic, haircare and personal care manufacturing.
      </div>
    </footer>
  );
}
