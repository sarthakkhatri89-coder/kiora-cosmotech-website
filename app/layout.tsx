import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import WhatsAppStickyButton from "@/components/WhatsAppStickyButton";
import { siteConfig } from "@/data/siteConfig";
import { createMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  ...createMetadata({
    title: "Skincare & Cosmetic Manufacturer in India | Kiora CosmoTech",
    description:
      "Kiora CosmoTech is a skincare-focused cosmetic manufacturer in India offering private label cosmetics, third party cosmetic manufacturing, custom formulation, packaging support and pan-India supply for beauty brands.",
    path: "/"
  }),
  metadataBase: new URL(siteConfig.url)
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SchemaJsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        {children}
        <Footer />
        <WhatsAppStickyButton />
      </body>
    </html>
  );
}
