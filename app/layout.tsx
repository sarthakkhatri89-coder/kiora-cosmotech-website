import type { Metadata } from "next";
import type { Viewport } from "next";
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
