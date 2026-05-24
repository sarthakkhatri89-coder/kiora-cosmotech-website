const defaultSiteUrl = "https://kiora-cosmotech-website.vercel.app";

export const siteConfig = {
  name: "Kiora CosmoTech",
  legalName: "Kiora CosmoTech",
  url: process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl,
  tagline: "Where skincare science meets scalable cosmetic manufacturing.",
  positioning:
    "Kiora CosmoTech - Skincare & Cosmetic Manufacturer in India for Private Label, Third Party and Custom Formulation.",
  phone: "+918076503757",
  email: "hello@kioracosmotech.com",
  address: {
    country: "IN",
    region: "India",
    locality: "Pan-India cosmetic manufacturing"
  },
  whatsappNumber: "918076503757",
  ogImage: "/og/kiora-og.png",
  logo: "/images/kiora-logo-main.png",
  socialLinks: [] as string[]
};

export const whatsappHref = (message = "Hello Kiora CosmoTech, I want a cosmetic manufacturing quote.") =>
  `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
