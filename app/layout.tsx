import type { Metadata } from "next";
import type { Viewport } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import WhatsAppStickyButton from "@/components/WhatsAppStickyButton";
import { siteConfig } from "@/data/siteConfig";
import { createMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Skincare & Cosmetic Manufacturer in India | Kiora CosmoTech",
    description:
      "Kiora CosmoTech manufactures skincare, haircare and personal care products in India for private label, third party and custom formulation brands.",
    path: "/"
  }),
  metadataBase: new URL(siteConfig.url)
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#122223"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      style={{
        ["--font-inter" as string]: '"Inter", "Segoe UI", Arial, sans-serif',
        ["--font-playfair" as string]: '"Iowan Old Style", "Palatino Linotype", Georgia, serif'
      }}
    >
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
