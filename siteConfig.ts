export const siteConfig = {
  name: "Kiora CosmoTech",
  legalName: "Kiora CosmoTech",
  url: "https://www.kioracosmotech.com",
  tagline: "Where skincare science meets scalable cosmetic manufacturing.",
  positioning:
    "Kiora CosmoTech - Skincare & Cosmetic Manufacturer in India for Private Label, Third Party and Custom Formulation.",
  phone: "+91XXXXXXXXXX",
  email: "hello@kioracosmotech.com",
  address: {
    country: "IN",
    region: "India",
    locality: "Pan-India manufacturing support"
  },
  whatsappNumber: "+91XXXXXXXXXX",
  ogImage: "/og/kiora-og.svg",
  socialLinks: [] as string[]
};

export const whatsappHref = (message = "Hello Kiora CosmoTech, I want a cosmetic manufacturing quote.") =>
  `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
