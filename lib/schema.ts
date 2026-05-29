import { siteConfig } from "@/data/siteConfig";
import { absoluteUrl } from "@/lib/utils";

export type Crumb = {
  name: string;
  href: string;
};

export const cleanBreadcrumbName = (name: string) => name.replace(/^[\s/]+/, "").trim();

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.url, siteConfig.logo),
  description: siteConfig.positioning,
  email: siteConfig.email,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"]
  }
});

export const localBusinessSchema = (name = siteConfig.name, path = "/") => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name,
  url: absoluteUrl(siteConfig.url, path),
  image: absoluteUrl(siteConfig.url, siteConfig.ogImage),
  telephone: siteConfig.phone,
  email: siteConfig.email,
  description: siteConfig.positioning,
  address: {
    "@type": "PostalAddress",
    addressCountry: siteConfig.address.country,
    addressRegion: siteConfig.address.region
  },
  areaServed: "India"
});

export const manufacturerSchema = (name = siteConfig.name, path = "/") => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "Manufacturer"],
  name,
  url: absoluteUrl(siteConfig.url, path),
  logo: absoluteUrl(siteConfig.url, siteConfig.logo),
  image: absoluteUrl(siteConfig.url, siteConfig.ogImage),
  description: siteConfig.positioning,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: siteConfig.address.country,
    addressRegion: siteConfig.address.region
  },
  areaServed: "India",
  knowsAbout: [
    "Private label cosmetic manufacturing",
    "Third party cosmetic manufacturing",
    "Contract cosmetic manufacturing",
    "Skincare formulation",
    "Haircare manufacturing",
    "Personal care manufacturing"
  ]
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url
});

export const breadcrumbSchema = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: cleanBreadcrumbName(crumb.name),
    item: absoluteUrl(siteConfig.url, crumb.href)
  }))
});

export const serviceSchema = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url
  },
  areaServed: "India",
  serviceType: "Cosmetic manufacturing",
  url: absoluteUrl(siteConfig.url, path)
});

export const productSchema = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  description,
  brand: {
    "@type": "Brand",
    name: siteConfig.name
  },
  category: "Cosmetic manufacturing service",
  url: absoluteUrl(siteConfig.url, path)
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

export const articleSchema = (post: {
  title: string;
  metaDescription: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.metaDescription,
  articleSection: "Cosmetic manufacturing",
  abstract: post.excerpt ?? post.metaDescription,
  datePublished: post.publishedAt,
  dateModified: post.publishedAt,
  author: {
    "@type": "Organization",
    name: "Kiora CosmoTech Editorial Team"
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.url, siteConfig.ogImage)
    }
  },
  mainEntityOfPage: absoluteUrl(siteConfig.url, `/blog/${post.slug}`)
});
