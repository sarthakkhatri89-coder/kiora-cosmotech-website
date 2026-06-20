import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import ProductHeroBackground from "@/components/ProductHeroBackground";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { organizationSchema, breadcrumbSchema, faqSchema, manufacturerSchema } from "@/lib/schema";
import { siteConfig, whatsappHref } from "@/data/siteConfig";
import { absoluteUrl } from "@/lib/utils";

type SunscreenConcept = {
  id: string;
  name: string;
  formatBadge: string;
  description: string;
  activeOptions: string[];
  alt: string;
  image: string;
  group: string;
};

const pagePath = "/sunscreen-manufacturer";
const pageTitle = "Sunscreen Manufacturer in India | Private Label Sun Care";
const pageDescription =
  "Private label and third-party sunscreen manufacturing in India for gel sunscreen, tinted sunscreen, mineral sunscreen, sunscreen sticks and custom sun-care concepts.";
const ogTitle = "Sunscreen Manufacturer in India | Kiora CosmoTech";
const ogDescription =
  "Explore premium private label sunscreen concepts including SPF 50 gel sunscreen, tinted sunscreen, mineral sunscreen, sunscreen sticks, sunscreen serum, body sunscreen, sport SPF, kids SPF, men's sunscreen, scalp SPF mist and lip SPF balm concepts.";
const preferredOgImage = "/images/sunscreens/sunscreen-manufacturing.webp";

function publicAssetExists(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

function resolvePublicAsset(src: string) {
  if (publicAssetExists(src)) {
    return src;
  }

  const pngFallback = `${src}.png`;
  if (publicAssetExists(pngFallback)) {
    return pngFallback;
  }

  return null;
}

const resolvedOgImage = resolvePublicAsset(preferredOgImage) ?? siteConfig.ogImage;
const resolvedHeroImage = resolvePublicAsset("/images/sunscreens/sunscreen-manufacturing.webp");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: absoluteUrl(siteConfig.url, pagePath)
  },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: absoluteUrl(siteConfig.url, pagePath),
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.url, resolvedOgImage),
        width: 1200,
        height: 630,
        alt: "Sunscreen manufacturer in India product concept visual"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [absoluteUrl(siteConfig.url, resolvedOgImage)]
  }
};

const trustBadges = [
  "Private Label Sunscreen Manufacturing",
  "Third Party Cosmetic Manufacturing",
  "Custom Sun-Care Formulation Support",
  "Packaging & Brand Development Support",
  "SPF Claim Testing Guidance"
];

const concepts: SunscreenConcept[] = [
  {
    id: "spf-50-ultra-matte-gel-sunscreen",
    name: "SPF 50 PA++++ Ultra Matte Gel Sunscreen",
    formatBadge: "Ultra Matte Gel Sunscreen",
    description:
      "A high-demand sunscreen concept for oily skin, humid weather, non-greasy daily use and matte finish positioning.",
    activeOptions: ["Modern UV Filter System", "Silica", "Elastomer Gel", "Niacinamide", "Zinc PCA", "Oil-Control Polymers"],
    alt: "3D render of SPF 50 PA++++ ultra matte gel sunscreen tube and box labeled Your Brand.",
    image: "/images/sunscreens/spf-50-ultra-matte-gel-sunscreen.webp",
    group: "Daily Face Sunscreens"
  },
  {
    id: "spf-50-lightweight-aqua-gel-sunscreen",
    name: "SPF 50 Lightweight Aqua Gel Sunscreen",
    formatBadge: "Water-Light Aqua Gel Sunscreen",
    description:
      "A water-light daily sunscreen concept for all skin types with fast-absorbing, fresh and non-sticky positioning.",
    activeOptions: ["UV Filter Blend", "Hyaluronic Acid", "Panthenol", "Aloe Vera", "Green Tea Extract"],
    alt: "3D render of SPF 50 lightweight aqua gel sunscreen tube and box labeled Your Brand.",
    image: "/images/sunscreens/spf-50-lightweight-aqua-gel-sunscreen.webp",
    group: "Daily Face Sunscreens"
  },
  {
    id: "spf-50-hybrid-skincare-sunscreen",
    name: "SPF 50 Hybrid Skincare Sunscreen",
    formatBadge: "Hybrid Skincare SPF",
    description:
      "A sunscreen plus skincare concept for daily face care, combining SPF positioning with hydration, antioxidant and skin-care benefit positioning.",
    activeOptions: ["UV Filters", "Niacinamide", "Hyaluronic Acid", "Panthenol", "Vitamin E", "Antioxidants"],
    alt: "3D render of SPF 50 hybrid skincare sunscreen cream gel tube and box labeled Your Brand.",
    image: "/images/sunscreens/spf-50-hybrid-skincare-sunscreen.webp",
    group: "Daily Face Sunscreens"
  },
  {
    id: "spf-50-tinted-sunscreen-indian-skin-tones",
    name: "SPF 50 Tinted Sunscreen for Indian Skin Tones",
    formatBadge: "Tinted Sunscreen",
    description:
      "A no-white-cast tinted sunscreen concept for Indian skin tones, tone-evening daily SPF positioning and modern inclusive sun-care brands.",
    activeOptions: ["UV Filters", "Iron Oxides", "Mineral Pigments", "Niacinamide", "Hyaluronic Acid", "Vitamin E"],
    alt: "3D render of SPF 50 tinted sunscreen for Indian skin tones tube and box labeled Your Brand.",
    image: "/images/sunscreens/spf-50-tinted-sunscreen-indian-skin-tones.webp",
    group: "Tinted, Mineral & No-White-Cast Sunscreens"
  },
  {
    id: "spf-50-mineral-sunscreen-cream",
    name: "SPF 50 Mineral Sunscreen Cream",
    formatBadge: "Mineral Sunscreen Cream",
    description:
      "A mineral-forward sunscreen concept for sensitive-skin, gentle sun-care and derma-cosmetic positioning.",
    activeOptions: ["Zinc Oxide", "Titanium Dioxide", "Squalane", "Panthenol", "Allantoin", "Niacinamide"],
    alt: "3D render of SPF 50 mineral sunscreen cream tube and box labeled Your Brand.",
    image: "/images/sunscreens/spf-50-mineral-sunscreen-cream.webp",
    group: "Tinted, Mineral & No-White-Cast Sunscreens"
  },
  {
    id: "spf-50-no-white-cast-mineral-sunscreen",
    name: "SPF 50 No White Cast Mineral Sunscreen",
    formatBadge: "No White Cast Mineral SPF",
    description:
      "A modern mineral sunscreen concept with improved blendability, reduced white cast and tinted mineral fluid positioning.",
    activeOptions: ["Surface-Treated Zinc Oxide", "Titanium Dioxide", "Iron Oxides", "Emollients", "Silica", "Film Formers"],
    alt: "3D render of SPF 50 no white cast mineral sunscreen airless pump and box labeled Your Brand.",
    image: "/images/sunscreens/spf-50-no-white-cast-mineral-sunscreen.webp",
    group: "Tinted, Mineral & No-White-Cast Sunscreens"
  },
  {
    id: "spf-50-velvet-primer-sunscreen",
    name: "SPF 50 Silicone-Based Velvet Primer Sunscreen",
    formatBadge: "Velvet Primer Sunscreen",
    description:
      "A sunscreen and makeup-primer concept with smooth velvet finish, pore-blur feel and premium under-makeup positioning.",
    activeOptions: ["UV Filters", "Cyclopentasiloxane or Alternatives", "Dimethicone", "Elastomer Gel", "Silica", "Vitamin E"],
    alt: "3D render of SPF 50 silicone based velvet primer sunscreen pump bottle and box labeled Your Brand.",
    image: "/images/sunscreens/spf-50-velvet-primer-sunscreen.webp",
    group: "Makeup, Glow & Premium Texture Sunscreens"
  },
  {
    id: "spf-50-sunscreen-serum-drops",
    name: "SPF 50 Sunscreen Serum Drops",
    formatBadge: "Sunscreen Serum Drops",
    description:
      "A serum-like sunscreen concept for skincare-first consumers who prefer lightweight fluid SPF and daily skincare layering.",
    activeOptions: ["UV Filters", "Niacinamide", "Hyaluronic Acid", "Antioxidants", "Squalane"],
    alt: "3D render of SPF 50 sunscreen serum drops bottle and box labeled Your Brand.",
    image: "/images/sunscreens/spf-50-sunscreen-serum-drops.webp",
    group: "Makeup, Glow & Premium Texture Sunscreens"
  },
  {
    id: "spf-50-invisible-sunscreen-stick",
    name: "SPF 50 Invisible Sunscreen Stick",
    formatBadge: "Invisible Sunscreen Stick",
    description:
      "A clear portable sunscreen stick concept for quick reapplication, travel, outdoor use and on-the-go sun-care positioning.",
    activeOptions: ["Oil-Soluble UV Filters", "Wax Blend", "Emollients", "Vitamin E", "Film Formers"],
    alt: "3D render of SPF 50 invisible sunscreen stick and box labeled Your Brand.",
    image: "/images/sunscreens/spf-50-invisible-sunscreen-stick.webp",
    group: "Solid, Stick & Portable Sunscreens"
  },
  {
    id: "spf-50-mineral-sunscreen-stick",
    name: "SPF 50 Mineral Sunscreen Stick",
    formatBadge: "Mineral Sunscreen Stick",
    description:
      "A mineral solid sunscreen concept for face, nose and outdoor reapplication positioning.",
    activeOptions: ["Zinc Oxide", "Titanium Dioxide", "Wax Blend", "Emollients", "Vitamin E", "Skin-Conditioning Oils"],
    alt: "3D render of SPF 50 mineral sunscreen stick and box labeled Your Brand.",
    image: "/images/sunscreens/spf-50-mineral-sunscreen-stick.webp",
    group: "Solid, Stick & Portable Sunscreens"
  },
  {
    id: "spf-50-milky-fluid-sunscreen",
    name: "SPF 50 Milky Fluid Sunscreen",
    formatBadge: "Milky Sunscreen Fluid",
    description:
      "A Korean and Japanese-inspired milky sunscreen fluid concept for lightweight daily wear, shake-lotion positioning and modern premium sun-care brands.",
    activeOptions: ["UV Filters", "Emollients", "Silica", "Hyaluronic Acid", "Green Tea", "Panthenol"],
    alt: "3D render of SPF 50 milky fluid sunscreen bottle and box labeled Your Brand.",
    image: "/images/sunscreens/spf-50-milky-fluid-sunscreen.webp",
    group: "Daily Face Sunscreens"
  },
  {
    id: "spf-50-body-sunscreen-lotion",
    name: "SPF 50 Body Sunscreen Lotion",
    formatBadge: "Body Sunscreen Lotion",
    description:
      "A body SPF concept for outdoor, beach, sport, travel and family-use sun-care ranges.",
    activeOptions: ["UV Filters", "Glycerin", "Aloe Vera", "Vitamin E", "Film Formers", "Water-Resistant Polymer Options"],
    alt: "3D render of SPF 50 body sunscreen lotion pump bottle labeled Your Brand.",
    image: "/images/sunscreens/spf-50-body-sunscreen-lotion.webp",
    group: "Outdoor, Body & Family Sunscreens"
  },
  {
    id: "spf-50-sport-water-resistant-sunscreen",
    name: "SPF 50 Sport Water-Resistant Sunscreen",
    formatBadge: "Sport Water-Resistant SPF",
    description:
      "A sport sunscreen concept for outdoor, sweat-resistant, active lifestyle and water-resistant SPF positioning.",
    activeOptions: ["UV Filter System", "Film Formers", "Water-Resistant Polymers", "Vitamin E", "Aloe Vera"],
    alt: "3D render of SPF 50 sport water resistant sunscreen tube labeled Your Brand.",
    image: "/images/sunscreens/spf-50-sport-water-resistant-sunscreen.webp",
    group: "Outdoor, Body & Family Sunscreens"
  },
  {
    id: "spf-50-kids-mineral-sunscreen",
    name: "SPF 50 Kids Mineral Sunscreen",
    formatBadge: "Kids Mineral Sunscreen",
    description:
      "A gentle mineral sunscreen concept for kids, family-care and sensitive-skin sun-care brands.",
    activeOptions: ["Zinc Oxide", "Titanium Dioxide", "Panthenol", "Oat Extract", "Aloe Vera", "Allantoin"],
    alt: "3D render of SPF 50 kids mineral sunscreen tube labeled Your Brand.",
    image: "/images/sunscreens/spf-50-kids-mineral-sunscreen.webp",
    group: "Outdoor, Body & Family Sunscreens"
  },
  {
    id: "spf-50-mens-oil-control-sunscreen",
    name: "SPF 50 Men's Oil-Control Sunscreen",
    formatBadge: "Men's Oil-Control Sunscreen",
    description:
      "A men's grooming sunscreen concept for sweat-prone skin, oily skin, matte finish and non-sticky daily SPF positioning.",
    activeOptions: ["UV Filters", "Silica", "Niacinamide", "Zinc PCA", "Menthyl Lactate Optional", "Oil-Control Polymers"],
    alt: "3D render of SPF 50 men oil control sunscreen tube labeled Your Brand.",
    image: "/images/sunscreens/spf-50-mens-oil-control-sunscreen.webp",
    group: "Outdoor, Body & Family Sunscreens"
  },
  {
    id: "spf-50-blue-light-pollution-defense-sunscreen",
    name: "SPF 50 Blue Light + Pollution Defense Sunscreen",
    formatBadge: "Urban Defense Sunscreen",
    description:
      "An urban daily SPF concept for pollution exposure, digital lifestyle, antioxidants and blue-light defense positioning.",
    activeOptions: ["UV Filters", "Iron Oxides", "Antioxidants", "Niacinamide", "Vitamin E", "Green Tea", "Film Formers"],
    alt: "3D render of SPF 50 blue light and pollution defense sunscreen tube labeled Your Brand.",
    image: "/images/sunscreens/spf-50-blue-light-pollution-defense-sunscreen.webp",
    group: "Urban Defense & Specialized SPF"
  },
  {
    id: "spf-50-vitamin-c-glow-sunscreen",
    name: "SPF 50 Vitamin C Glow Sunscreen",
    formatBadge: "Vitamin C Glow Sunscreen",
    description:
      "A glow sunscreen concept for radiant-looking skin, antioxidant SPF positioning and bright-looking daily skincare.",
    activeOptions: ["UV Filters", "Vitamin C Derivative", "Niacinamide", "Vitamin E", "Hyaluronic Acid", "Squalane"],
    alt: "3D render of SPF 50 vitamin C glow sunscreen tube labeled Your Brand.",
    image: "/images/sunscreens/spf-50-vitamin-c-glow-sunscreen.webp",
    group: "Makeup, Glow & Premium Texture Sunscreens"
  },
  {
    id: "spf-50-ceramide-barrier-sunscreen",
    name: "SPF 50 Ceramide Barrier Sunscreen",
    formatBadge: "Ceramide Barrier Sunscreen",
    description:
      "A barrier-support sunscreen concept for sensitive-skin, dry-skin, daily hydration and skin comfort positioning.",
    activeOptions: ["UV Filters", "Ceramide NP", "Cholesterol-Inspired Lipid Blend", "Panthenol", "Hyaluronic Acid", "Allantoin"],
    alt: "3D render of SPF 50 ceramide barrier sunscreen tube labeled Your Brand.",
    image: "/images/sunscreens/spf-50-ceramide-barrier-sunscreen.webp",
    group: "Urban Defense & Specialized SPF"
  },
  {
    id: "spf-50-scalp-hairline-sunscreen-mist",
    name: "SPF 50 Scalp & Hairline Sunscreen Mist",
    formatBadge: "Scalp & Hairline SPF Mist",
    description:
      "A specialized sunscreen mist concept for scalp, hairline, part-line and area-specific SPF protection positioning.",
    activeOptions: ["UV Filters", "Lightweight Solvents/Emollients", "Film Formers", "Antioxidants", "Non-Greasy Finish Agents"],
    alt: "3D render of SPF 50 scalp and hairline sunscreen mist spray labeled Your Brand.",
    image: "/images/sunscreens/spf-50-scalp-hairline-sunscreen-mist.webp",
    group: "Urban Defense & Specialized SPF"
  },
  {
    id: "spf-50-lip-spot-sunscreen-balm",
    name: "SPF 50 Lip & Spot Sunscreen Balm",
    formatBadge: "Lip & Spot SPF Balm",
    description:
      "A compact sunscreen balm concept for lips, nose, cheekbones and small spot-area SPF positioning.",
    activeOptions: ["UV Filters or Mineral Filters", "Waxes", "Shea Butter", "Vitamin E", "Emollients"],
    alt: "3D render of SPF 50 lip and spot sunscreen balm stick labeled Your Brand.",
    image: "/images/sunscreens/spf-50-lip-spot-sunscreen-balm.webp",
    group: "Solid, Stick & Portable Sunscreens"
  }
];

const groupedConcepts = [
  {
    title: "Daily Face Sunscreens",
    ids: [
      "spf-50-ultra-matte-gel-sunscreen",
      "spf-50-lightweight-aqua-gel-sunscreen",
      "spf-50-hybrid-skincare-sunscreen",
      "spf-50-milky-fluid-sunscreen"
    ]
  },
  {
    title: "Tinted, Mineral & No-White-Cast Sunscreens",
    ids: [
      "spf-50-tinted-sunscreen-indian-skin-tones",
      "spf-50-mineral-sunscreen-cream",
      "spf-50-no-white-cast-mineral-sunscreen"
    ]
  },
  {
    title: "Makeup, Glow & Premium Texture Sunscreens",
    ids: [
      "spf-50-velvet-primer-sunscreen",
      "spf-50-sunscreen-serum-drops",
      "spf-50-vitamin-c-glow-sunscreen"
    ]
  },
  {
    title: "Solid, Stick & Portable Sunscreens",
    ids: [
      "spf-50-invisible-sunscreen-stick",
      "spf-50-mineral-sunscreen-stick",
      "spf-50-lip-spot-sunscreen-balm"
    ]
  },
  {
    title: "Outdoor, Body & Family Sunscreens",
    ids: [
      "spf-50-body-sunscreen-lotion",
      "spf-50-sport-water-resistant-sunscreen",
      "spf-50-kids-mineral-sunscreen",
      "spf-50-mens-oil-control-sunscreen"
    ]
  },
  {
    title: "Urban Defense & Specialized SPF",
    ids: [
      "spf-50-blue-light-pollution-defense-sunscreen",
      "spf-50-ceramide-barrier-sunscreen",
      "spf-50-scalp-hairline-sunscreen-mist"
    ]
  }
];

const keywordTagMap: Record<string, string[]> = {
  "spf-50-ultra-matte-gel-sunscreen": ["SPF 50 sunscreen manufacturer", "Ultra matte sunscreen manufacturer", "Gel sunscreen manufacturer", "Private label matte sunscreen"],
  "spf-50-lightweight-aqua-gel-sunscreen": ["Aqua gel sunscreen manufacturer", "Lightweight sunscreen manufacturer", "Daily sunscreen manufacturer", "Private label sunscreen gel"],
  "spf-50-hybrid-skincare-sunscreen": ["Hybrid sunscreen manufacturer", "Skincare sunscreen manufacturer", "Niacinamide sunscreen manufacturer", "Private label hybrid SPF"],
  "spf-50-tinted-sunscreen-indian-skin-tones": ["Tinted sunscreen manufacturer", "Sunscreen for Indian skin tones manufacturer", "No white cast sunscreen manufacturer", "Private label tinted sunscreen"],
  "spf-50-mineral-sunscreen-cream": ["Mineral sunscreen manufacturer", "Zinc oxide sunscreen manufacturer", "Sensitive skin sunscreen manufacturer", "Private label mineral sunscreen"],
  "spf-50-no-white-cast-mineral-sunscreen": ["No white cast sunscreen manufacturer", "Mineral sunscreen no white cast manufacturer", "Tinted mineral sunscreen manufacturer", "Private label no white cast SPF"],
  "spf-50-velvet-primer-sunscreen": ["Sunscreen primer manufacturer", "SPF primer manufacturer", "Velvet sunscreen manufacturer", "Private label primer sunscreen"],
  "spf-50-sunscreen-serum-drops": ["Sunscreen serum manufacturer", "SPF serum manufacturer", "Sunscreen drops manufacturer", "Private label sunscreen serum"],
  "spf-50-invisible-sunscreen-stick": ["Sunscreen stick manufacturer", "Invisible sunscreen stick manufacturer", "SPF stick manufacturer", "Private label sunscreen stick"],
  "spf-50-mineral-sunscreen-stick": ["Mineral sunscreen stick manufacturer", "Zinc sunscreen stick manufacturer", "Outdoor sunscreen stick manufacturer", "Private label mineral SPF stick"],
  "spf-50-milky-fluid-sunscreen": ["Milky sunscreen manufacturer", "Sunscreen fluid manufacturer", "Korean sunscreen manufacturer", "Private label sunscreen milk"],
  "spf-50-body-sunscreen-lotion": ["Body sunscreen manufacturer", "Sunscreen lotion manufacturer", "SPF body lotion manufacturer", "Third party sunscreen lotion"],
  "spf-50-sport-water-resistant-sunscreen": ["Sport sunscreen manufacturer", "Water resistant sunscreen manufacturer", "Outdoor sunscreen manufacturer", "Private label sport SPF"],
  "spf-50-kids-mineral-sunscreen": ["Kids sunscreen manufacturer", "Kids mineral sunscreen manufacturer", "Gentle sunscreen manufacturer", "Private label kids SPF"],
  "spf-50-mens-oil-control-sunscreen": ["Men sunscreen manufacturer", "Oil control sunscreen manufacturer", "Matte sunscreen for men manufacturer", "Private label men sunscreen"],
  "spf-50-blue-light-pollution-defense-sunscreen": ["Blue light sunscreen manufacturer", "Pollution defense sunscreen manufacturer", "Urban sunscreen manufacturer", "Private label urban SPF"],
  "spf-50-vitamin-c-glow-sunscreen": ["Vitamin C sunscreen manufacturer", "Glow sunscreen manufacturer", "Antioxidant SPF manufacturer", "Private label glow sunscreen"],
  "spf-50-ceramide-barrier-sunscreen": ["Ceramide sunscreen manufacturer", "Barrier sunscreen manufacturer", "Sensitive skin SPF manufacturer", "Private label ceramide SPF"],
  "spf-50-scalp-hairline-sunscreen-mist": ["Scalp sunscreen manufacturer", "Hairline sunscreen manufacturer", "Sunscreen mist manufacturer", "Private label scalp SPF"],
  "spf-50-lip-spot-sunscreen-balm": ["SPF lip balm manufacturer", "Sunscreen balm manufacturer", "Lip sunscreen manufacturer", "Private label SPF balm"]
};

const commonConcepts = [
  "SPF 30 Sunscreen",
  "SPF 40 Sunscreen",
  "SPF 50 Sunscreen",
  "SPF 50 PA++++ Sunscreen",
  "Broad Spectrum Sunscreen",
  "Daily Sunscreen",
  "Sunscreen Cream",
  "Sunscreen Lotion",
  "Sunscreen Gel",
  "Sunscreen Spray",
  "Sunscreen Stick",
  "Sunscreen Serum",
  "Sunscreen Fluid",
  "Sunscreen Milk",
  "Sunscreen Primer",
  "Tinted Sunscreen",
  "Mineral Sunscreen",
  "Hybrid Sunscreen",
  "Chemical Sunscreen",
  "No White Cast Sunscreen"
];

const skinTypeConcepts = [
  "Sunscreen for Oily Skin",
  "Sunscreen for Dry Skin",
  "Sunscreen for Sensitive Skin",
  "Sunscreen for Acne-Prone Skin",
  "Sunscreen for Combination Skin",
  "Sunscreen for Men",
  "Sunscreen for Kids",
  "Sunscreen for Indian Skin Tones",
  "Matte Sunscreen",
  "Dewy Sunscreen",
  "Non-Sticky Sunscreen",
  "Lightweight Sunscreen",
  "Hydrating Sunscreen",
  "Oil-Free Sunscreen",
  "Non-Comedogenic Sunscreen"
];

const dermaConcepts = [
  "Niacinamide Sunscreen",
  "Vitamin C Sunscreen",
  "Hyaluronic Acid Sunscreen",
  "Ceramide Sunscreen",
  "Zinc Oxide Sunscreen",
  "Titanium Dioxide Sunscreen",
  "Blue Light Sunscreen",
  "Pollution Defense Sunscreen",
  "Antioxidant Sunscreen",
  "Barrier Repair Sunscreen",
  "Skin Brightening Sunscreen",
  "Anti-Ageing Sunscreen",
  "Tinted Mineral Sunscreen",
  "Iron Oxide Sunscreen",
  "Water-Resistant Sunscreen"
];

const formatConcepts = [
  "Tube Sunscreen",
  "Pump Sunscreen",
  "Airless Sunscreen",
  "Roll-On Sunscreen",
  "Mist Sunscreen",
  "Spray Sunscreen",
  "Stick Sunscreen",
  "Balm Sunscreen",
  "Sachet Sunscreen",
  "Travel Sunscreen",
  "Family Sunscreen",
  "Sports Sunscreen",
  "Beach Sunscreen",
  "Body Sunscreen",
  "Lip SPF Balm",
  "Scalp Sunscreen Mist"
];

const activeChips = [
  "UV Filter System",
  "Zinc Oxide",
  "Titanium Dioxide",
  "Iron Oxides",
  "Gel Sunscreen",
  "Aqua Gel Sunscreen",
  "Tinted Sunscreen",
  "Mineral Sunscreen",
  "No White Cast Sunscreen",
  "Velvet Primer Sunscreen",
  "Sunscreen Serum Drops",
  "Sunscreen Stick",
  "Milky Fluid Sunscreen",
  "Body Sunscreen Lotion",
  "Sport Sunscreen",
  "Kids Mineral Sunscreen",
  "Men's Matte Sunscreen",
  "Blue Light Defense SPF",
  "Pollution Defense SPF",
  "Ceramide Barrier Sunscreen",
  "Scalp Sunscreen Mist",
  "Lip SPF Balm",
  "Niacinamide",
  "Hyaluronic Acid",
  "Vitamin C Derivative",
  "Vitamin E",
  "Panthenol",
  "Ceramide NP",
  "Squalane",
  "Green Tea Extract",
  "Silica",
  "Film Formers",
  "Water-Resistant Polymers"
];

const whyChooseCards = [
  "Custom private label sunscreen formulation support",
  "Modern sun-care format development",
  "Derma-cosmetic and cosmeceutical SPF positioning support",
  "Support for gel, cream, mineral, tinted, stick, serum, fluid, mist and balm sunscreen concepts",
  "Packaging and product concept support",
  "SPF, PA, broad-spectrum and water-resistance testing guidance",
  "Scalable third-party manufacturing support",
  "Support for premium, mass-market, men's, kids, body and specialized SPF ranges",
  "SEO-friendly product concept library for brand launches"
];

const faqs = [
  {
    question: "Does Kiora CosmoTech manufacture private label sunscreen?",
    answer:
      "Yes, Kiora CosmoTech supports private label and third-party manufacturing of sunscreen and sun-care concepts for cosmetic, derma-care, D2C skincare, men's grooming, kids care, body care and premium beauty brands."
  },
  {
    question: "Can Kiora CosmoTech develop SPF 50 sunscreen concepts?",
    answer:
      "Yes, Kiora CosmoTech can develop SPF 50 sunscreen concepts such as gel sunscreen, aqua gel sunscreen, tinted sunscreen, mineral sunscreen, sunscreen sticks, serum SPF, body sunscreen, sport SPF and kids SPF concepts. Final SPF claims must be validated by appropriate testing before label approval."
  },
  {
    question: "Can you manufacture tinted sunscreen for Indian skin tones?",
    answer:
      "Yes, tinted sunscreen concepts can be developed using mineral pigments, iron oxides, UV filters and tone-balancing systems for Indian skin tone positioning. Final shade range, claims and formula must be customized as per brand requirement."
  },
  {
    question: "Can you manufacture mineral sunscreen?",
    answer:
      "Yes, mineral sunscreen concepts using zinc oxide, titanium dioxide and supporting emollient systems can be developed for sensitive-skin and derma-cosmetic positioning, subject to formula feasibility, stability and claim testing."
  },
  {
    question: "Can you develop no-white-cast sunscreen?",
    answer:
      "Yes, no-white-cast sunscreen concepts can be developed using modern texture systems, tint balancing, dispersion technology, emollients, film formers and mineral or hybrid sunscreen approaches. Final appearance depends on formula, filters, shade and testing outcome."
  },
  {
    question: "Can you manufacture sunscreen sticks and sunscreen balms?",
    answer:
      "Yes, Kiora CosmoTech can support portable sunscreen formats such as invisible sunscreen sticks, mineral sunscreen sticks, lip SPF balm and spot sunscreen balm concepts."
  },
  {
    question: "Can you develop sunscreen for men, kids and body use?",
    answer:
      "Yes, men's matte sunscreen, kids mineral sunscreen, body sunscreen lotion, sport sunscreen and family sun-care concepts can be developed depending on target user, claim language, packaging and testing requirements."
  },
  {
    question: "Do SPF 50 and PA++++ claims need testing?",
    answer:
      "Yes, SPF 50, PA++++, broad-spectrum and water-resistance claims must be supported by appropriate laboratory testing and regulatory review before final label approval."
  },
  {
    question: "Can you help with sunscreen packaging?",
    answer:
      "Yes, Kiora CosmoTech can help brands plan suitable sunscreen packaging such as tubes, airless pumps, bottles, sticks, mists, balms, roll-ons and sachets depending on product format and compatibility."
  },
  {
    question: "Are these sunscreen products ready-made formulas?",
    answer:
      "The concepts shown are product directions and manufacturing possibilities. Final formula, UV filters, active percentage, SPF claim, PA claim, water-resistance claim, fragrance, texture, packaging and regulatory positioning will be customized based on brand requirement, testing and applicable cosmetic regulations."
  }
];

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/skincare-manufacturer-india" },
  { name: "Sunscreen Manufacturer", href: pagePath }
];

const pageOrganizationSchema = {
  ...organizationSchema(),
  mainEntityOfPage: absoluteUrl(siteConfig.url, pagePath)
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  description: pageDescription,
  url: absoluteUrl(siteConfig.url, pagePath)
};

const detailedServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sunscreen Manufacturing",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url
  },
  areaServed: "India",
  serviceType: [
    "Private Label Sunscreen Manufacturing",
    "Third Party Sunscreen Manufacturing",
    "Cosmetic Sun-Care Manufacturing"
  ],
  description:
    "Kiora CosmoTech offers private label and third-party manufacturing support for modern sunscreen and sun-care concepts including SPF 50 gel sunscreen, aqua gel sunscreen, hybrid skincare sunscreen, tinted sunscreen, mineral sunscreen, no-white-cast sunscreen, sunscreen sticks, sunscreen serum drops, milky sunscreen fluids, body sunscreen lotion, sport sunscreen, kids mineral sunscreen, men's sunscreen, blue-light and pollution defense sunscreen, ceramide barrier sunscreen, scalp sunscreen mist and lip SPF balm concepts.",
  url: absoluteUrl(siteConfig.url, pagePath)
};

const internalLinks = [
  { label: "Private Label Manufacturing", href: "/private-label-cosmetics-manufacturer-india", description: "Explore private label cosmetic manufacturing." },
  { label: "Third Party Cosmetic Manufacturing", href: "/third-party-cosmetic-manufacturing-india", description: "Compare third party skincare manufacturing routes." },
  { label: "Cosmetic Manufacturing", href: "/contract-cosmetic-manufacturer-india", description: "Review broader cosmetic manufacturing in India." },
  { label: "Skin Care Manufacturing", href: "/skincare-manufacturer-india", description: "See the wider skincare manufacturing range." },
  { label: "Face Serum Manufacturing", href: "/face-serum-manufacturer", description: "Add serum concepts beside sunscreen launches." },
  { label: "Face Wash Manufacturing", href: "/face-wash-manufacturer", description: "Pair sunscreen with cleansers for routine launches." },
  { label: "Hair Serum Manufacturing", href: "/hair-serum-manufacturer", description: "Evaluate adjacent personal-care and haircare categories." },
  { label: "Moisturizer Manufacturing", href: "/moisturizer-manufacturer", description: "Build day-care and barrier-support range extensions." },
  { label: "Contact Kiora CosmoTech", href: "/request-quote", description: "Share your sunscreen concept and packaging brief." }
];

const relatedCategories = [
  { label: "Face Serum Manufacturing", href: "/face-serum-manufacturer", description: "Pair active-led serum concepts with daily SPF ranges." },
  { label: "Face Wash Manufacturing", href: "/face-wash-manufacturer", description: "Launch complete cleanse-plus-protect skincare routines." },
  { label: "Hair Serum Manufacturing", href: "/hair-serum-manufacturer", description: "Expand into scalp, hairline and adjacent care segments." },
  { label: "Moisturizer Manufacturing", href: "/moisturizer-manufacturer", description: "Support hydration and barrier-positioned range planning." },
  { label: "Body Lotion Manufacturing", href: "/body-lotion-manufacturer", description: "Extend into body-care and outdoor-use product ranges." },
  { label: "Discuss Lip Care Manufacturing", href: "/request-quote?product=Lip%20Care%20Manufacturing", description: "Start a quote discussion for SPF lip balm and balm-format development." },
  { label: "Cosmetic Manufacturing", href: "/contract-cosmetic-manufacturer-india", description: "Review wider cosmetic manufacturing capabilities." },
  { label: "Private Label Manufacturing", href: "/private-label-cosmetics-manufacturer-india", description: "Launch sun-care products under your own brand." }
];

function SunscreenVisual({ concept }: { concept: SunscreenConcept }) {
  const resolvedImage = resolvePublicAsset(concept.image);

  if (resolvedImage) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-charcoal/10 bg-white">
        <Image
          src={resolvedImage}
          alt={concept.alt}
          width={960}
          height={1200}
          loading="lazy"
          className="h-full w-full object-contain p-3 sm:p-4"
          sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) calc(50vw - 40px), 320px"
        />
      </div>
    );
  }

  return (
    <div
      className="relative aspect-[5/4] overflow-hidden rounded-[1.35rem] border border-charcoal/10 bg-[linear-gradient(135deg,#fffaf0_0%,#eef8ff_55%,#fde9a6_100%)] p-4 sm:aspect-[4/5] sm:rounded-[1.6rem] sm:p-5"
      role="img"
      aria-label={concept.alt}
    >
      <div className="absolute inset-x-5 top-5 rounded-full bg-white/88 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal shadow-sm sm:text-xs">
        {concept.formatBadge}
      </div>
      <div className="absolute inset-x-5 bottom-5 rounded-[1.4rem] bg-ivory/92 p-3.5 shadow-premium sm:rounded-3xl sm:p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Your Brand</p>
        <h3 className="mt-2 text-base font-semibold leading-snug text-charcoal sm:text-lg">{concept.name}</h3>
      </div>
    </div>
  );
}

function KeywordChipGroup({ heading, items }: { heading: string; items: string[] }) {
  return (
    <article className="rounded-[1.6rem] border border-charcoal/10 bg-ivory p-5 shadow-sm sm:rounded-3xl sm:p-6">
      <h3 className="text-[1.2rem] font-semibold leading-tight text-charcoal sm:text-[1.4rem]">{heading}</h3>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <span className="rounded-full border border-charcoal/10 bg-mist px-3 py-2 text-sm font-semibold text-charcoal" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          pageOrganizationSchema,
          manufacturerSchema(siteConfig.name, pagePath),
          breadcrumbSchema(crumbs),
          detailedServiceSchema,
          faqSchema(faqs),
          webPageSchema
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <main>
        <ProductHeroBackground
          eyebrow="Premium sun-care manufacturing"
          title="Sunscreen Manufacturer in India"
          description={
            <p>
              Private label and third-party manufacturing support for SPF 50 sunscreen concepts, gel sunscreens, tinted sunscreens, mineral sunscreens, no-white-cast sunscreens, sunscreen sticks, sunscreen serums, body sunscreens, kids SPF, men's sunscreen, scalp SPF mist and lip SPF balm concepts.
            </p>
          }
          detail={
            <p>
              Kiora CosmoTech develops customized sunscreen and sun-care concepts for modern cosmetic, derma-care, D2C skincare, men's grooming, family-care and premium beauty brands. From ultra-matte gel sunscreens and aqua gel SPF concepts to tinted sunscreens for Indian skin tones, mineral sunscreens, sunscreen sticks, SPF serum drops, milky sunscreen fluids, sport sunscreens, kids mineral SPF, blue-light defense sunscreens and lip SPF balms, we help brands build differentiated sun-care product ranges.
            </p>
          }
          actions={
            <>
              <Link className="focus-ring site-button-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-semibold text-ivory transition sm:min-w-[250px]" href="/request-quote">
                Request Sunscreen Manufacturing Quote <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-charcoal/12 bg-white/84 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white sm:min-w-[220px]" href="#sunscreen-concepts">
                Explore Sunscreen Concepts
              </a>
            </>
          }
          tags={trustBadges}
          imageSrc={resolvedHeroImage}
          imageAlt="Premium sunscreen product concept bottle and tube mockup labeled Your Brand"
          imageCaption="Formula Direction • SPF Claim Planning • Tube/Airless Packaging • Quality Review"
          imageLayerClassName="absolute inset-x-4 bottom-0 h-[34%] md:inset-y-0 md:left-[43%] md:right-[2%] md:h-auto lg:left-[46%] lg:right-[4%]"
          imageClassName="object-contain object-center-bottom md:object-right-center"
          fallbackTitle="Premium sunscreen concepts"
          fallbackDescription="Gel sunscreen, tinted sunscreen, mineral sunscreen, sunscreen sticks, family sun-care and specialized SPF directions for private label brand launches."
          titleClassName="font-display text-[clamp(2.2rem,8vw,5.5rem)] font-semibold leading-[0.94] text-charcoal"
        />

        <section className="site-band-soft section-y">
          <div className="container-padded grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="site-panel-dark rounded-[1.6rem] p-5 text-ivory shadow-premium sm:rounded-3xl sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne">Private label sunscreen manufacturing for modern sun-care brands</p>
              <p className="mt-4 text-[0.98rem] leading-7 text-ivory/80 md:leading-8">
                Kiora CosmoTech helps brands develop advanced sunscreen concepts based on modern UV filter systems, mineral filter systems, hybrid skincare positioning, tinted mineral formats, lightweight textures, matte finishes, body SPF, kids SPF, sport SPF, men's SPF, scalp SPF mist and lip SPF balm concepts.
              </p>
              <p className="mt-4 text-[0.98rem] leading-7 text-ivory/78 md:leading-8">
                Sunscreen development requires strong formulation expertise, sensory optimization, packaging compatibility, claim positioning and testing support. This is why founders exploring <Link className="font-semibold text-champagne underline decoration-champagne/40 underline-offset-4" href="/private-label-cosmetics-manufacturer-india">private label cosmetic manufacturing</Link> or <Link className="font-semibold text-champagne underline decoration-champagne/40 underline-offset-4" href="/third-party-cosmetic-manufacturing-india">third party skincare manufacturing</Link> should treat sunscreen as a more technical category than a routine cleanser or moisturizer launch.
              </p>
            </article>
            <article className="site-panel rounded-[1.6rem] p-5 shadow-sm sm:rounded-3xl sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Direct answer</p>
              <h2 className="mt-3 text-[1.8rem] font-semibold leading-tight text-charcoal sm:text-3xl">Advanced sun-care product development with testing-aware claim planning</h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                Kiora CosmoTech supports sunscreen development for cosmetic, derma-care, D2C, men's grooming, body care and family-care brands that need premium concept direction, packaging planning and manufacturing clarity. Final SPF, PA, broad-spectrum and water-resistance claims must be validated through appropriate testing before final label approval.
              </p>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                This page is designed to help buyers compare sunscreen formats, understand positioning angles, review <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/packaging-options">packaging options</Link>, shortlist suitable product directions and move toward a more useful brief before they <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/request-quote">contact Kiora CosmoTech</Link> for quote discussion.
              </p>
            </article>
          </div>
        </section>

        <section className="section-y" id="sunscreen-concepts">
          <div className="container-padded">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Product concepts</p>
              <h2 className="section-title mt-3 font-display font-semibold text-charcoal">
                Trending Sunscreen &amp; Sun-Care Concepts We Can Develop
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:mt-5 md:leading-8">
                Explore premium sunscreen and sun-care concepts that can be customized for your brand based on SPF positioning, UV filter approach, skin type, texture target, packaging format, claim language, target price segment and applicable cosmetic regulations.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
              {concepts.map((concept) => (
                <article className="rounded-[1.6rem] border border-charcoal/10 bg-ivory p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-premium sm:rounded-[2rem] sm:p-5" id={concept.id} key={concept.id}>
                  <SunscreenVisual concept={concept} />
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">{concept.group}</p>
                    <h3 className="mt-2 text-[1.35rem] font-semibold leading-tight text-charcoal sm:text-2xl">{concept.name}</h3>
                    <div className="mt-3">
                      <span className="rounded-full border border-charcoal/10 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/78 sm:text-xs">
                        {concept.formatBadge}
                      </span>
                    </div>
                    <p className="mt-3 text-[0.95rem] leading-6 text-ink/74 sm:text-base sm:leading-7">{concept.description}</p>
                  </div>
                  <div className="mt-5">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/72 sm:text-sm">Key active options</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {concept.activeOptions.map((item) => (
                        <span className="rounded-full bg-mist px-2.5 py-1.5 text-[11px] font-semibold text-charcoal sm:px-3 sm:py-2 sm:text-xs" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/72 sm:text-sm">Keyword themes</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(keywordTagMap[concept.id] ?? []).map((tag) => (
                        <span className="rounded-full border border-charcoal/10 bg-white px-2.5 py-1.5 text-[11px] text-ink/78 sm:px-3 sm:py-2 sm:text-xs" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    className="focus-ring mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-charcoal px-4 py-3 text-center text-sm font-semibold text-ivory transition hover:bg-teal sm:min-h-12 sm:px-5"
                    href={`/request-quote?product=${encodeURIComponent(concept.name)}`}
                  >
                    Develop This Product With Your Brand
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y text-ivory" style={{ background: "linear-gradient(160deg, rgba(41,30,37,1) 0%, rgba(31,28,31,1) 48%, rgba(46,31,39,1) 100%)" }}>
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-champagne">Product grouping</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98]">
                Group your sun-care launch around format, finish and daily-use behavior
              </h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {groupedConcepts.map((group) => (
                <article className="rounded-[1.6rem] border border-ivory/10 bg-ivory/6 p-5 shadow-sm backdrop-blur sm:rounded-3xl sm:p-6" key={group.title}>
                  <h3 className="text-[1.35rem] font-semibold leading-tight text-ivory sm:text-2xl">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3">
                    {group.ids.map((id) => {
                      const concept = concepts.find((item) => item.id === id)!;
                      return (
                        <a className="rounded-full bg-ivory/10 px-3 py-2.5 text-[13px] font-semibold text-ivory transition hover:bg-champagne hover:text-charcoal sm:px-4 sm:py-3 sm:text-sm" href={`#${concept.id}`} key={`${group.title}-${concept.id}`}>
                          {concept.name}
                        </a>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Additional concept bank</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                More Sunscreen &amp; Sun Care Products We Can Manufacture
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:mt-5 md:leading-8">
                Along with advanced sunscreen formats, Kiora CosmoTech can also develop regular market-demand sunscreen and sun-care products for private label and third-party manufacturing. These concepts can be customized as per target SPF, skin type, texture preference, packaging style, price segment, testing requirement and applicable cosmetic regulations.
              </p>
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <KeywordChipGroup heading="Common Sunscreen Concepts" items={commonConcepts} />
              <KeywordChipGroup heading="Skin-Type Based Sunscreen Concepts" items={skinTypeConcepts} />
              <KeywordChipGroup heading="Derma / Active Sunscreen Concepts" items={dermaConcepts} />
              <KeywordChipGroup heading="Format / Packaging Opportunities" items={formatConcepts} />
            </div>
            <div className="mt-8 rounded-[1.8rem] border border-charcoal/10 bg-mist p-5 shadow-sm sm:p-6">
              <p className="text-[0.98rem] leading-7 text-ink/76 md:leading-8">
                Kiora CosmoTech can manufacture a wide range of private label sunscreen and sun-care products including SPF 30 sunscreen, SPF 50 sunscreen, PA++++ sunscreen, broad-spectrum sunscreen, sunscreen gel, sunscreen cream, sunscreen lotion, sunscreen stick, sunscreen spray, sunscreen serum, tinted sunscreen, mineral sunscreen, no-white-cast sunscreen, matte sunscreen, body sunscreen, sport sunscreen, kids sunscreen, men's sunscreen, scalp sunscreen mist, lip SPF balm and many more customized sunscreen concepts for cosmetic and derma-care brands.
              </p>
              <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h3 className="text-[1.5rem] font-semibold leading-tight text-charcoal">Have a Different Sunscreen Concept?</h3>
                  <p className="mt-3 text-[0.98rem] leading-7 text-ink/74">
                    Share your target SPF concept, sunscreen format, UV filter approach, skin type, texture preference, packaging requirement or reference product. Kiora CosmoTech can help you develop a customized private label sunscreen or sun-care product for your brand.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-charcoal px-6 py-3 text-center font-semibold text-ivory transition hover:bg-teal" href="/custom-skincare-formulation">
                    Request Custom Sunscreen Development
                  </Link>
                  <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-charcoal/12 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white/70" href={whatsappHref("Hello Kiora CosmoTech, I want to discuss a custom sunscreen concept for my brand.")}>
                    <MessageCircle size={18} aria-hidden="true" />
                    Talk to Kiora CosmoTech
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-band-soft section-y">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Filter and format customization</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                Available Sunscreen Format, Active &amp; INCI-Based Customization Options
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:mt-5 md:leading-8">
                Kiora CosmoTech can develop customized sunscreen and sun-care products using modern sunscreen formats, UV filter systems, mineral filter systems, hybrid skincare actives and sensory texture systems such as gel sunscreen, aqua gel sunscreen, tinted sunscreen, mineral sunscreen, no-white-cast mineral SPF, velvet primer sunscreen, sunscreen serum drops, sunscreen sticks, milky sunscreen fluids, body sunscreen lotion, sport SPF, kids mineral SPF, men's matte SPF, blue-light and pollution defense SPF, ceramide barrier SPF, scalp sunscreen mist and lip SPF balm concepts. Final SPF, PA rating, broad-spectrum and water-resistance claims must be validated through appropriate testing and applicable cosmetic regulations.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {activeChips.map((chip) => (
                <span className="rounded-full border border-charcoal/10 bg-ivory px-3.5 py-2 text-sm font-semibold text-charcoal" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Why Kiora</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                Why Choose Kiora CosmoTech for Sunscreen Manufacturing?
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {whyChooseCards.map((item) => (
                <article className="rounded-[1.6rem] border border-charcoal/10 bg-ivory p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-premium sm:rounded-3xl sm:p-6" key={item}>
                  <CheckCircle2 className="h-5 w-5 text-teal" aria-hidden="true" />
                  <p className="mt-4 text-base font-semibold leading-7 text-charcoal">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y text-ivory" style={{ background: "linear-gradient(160deg, rgba(41,30,37,1) 0%, rgba(31,28,31,1) 48%, rgba(46,31,39,1) 100%)" }}>
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-champagne">Manufacturing process</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98]">
                From Concept to Finished Sunscreen
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {[
                "Product concept finalization",
                "SPF positioning and format selection",
                "UV filter approach and sensory profile planning",
                "Active and claim positioning",
                "Prototype development and sample approval",
                "Packaging compatibility and artwork guidance",
                "Batch manufacturing",
                "Quality checks and stability support",
                "SPF / PA / broad-spectrum / water-resistance testing coordination where required",
                "Filling, packing and dispatch"
              ].map((step, index) => (
                <article className="rounded-[1.6rem] border border-ivory/10 bg-ivory/6 p-5 shadow-sm backdrop-blur sm:rounded-3xl sm:p-6" key={step}>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne">Step {index + 1}</p>
                  <h3 className="mt-3 text-[1.15rem] font-semibold leading-tight text-ivory">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-band-soft section-y">
          <div className="container-padded">
            <div className="rounded-[1.8rem] border border-amber-300/40 bg-[linear-gradient(135deg,#fffef6_0%,#fff8dc_48%,#eef8ff_100%)] p-5 shadow-sm sm:rounded-[2rem] sm:p-7">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-teal" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Sunscreen claim safety</p>
                  <p className="mt-4 text-[1rem] leading-7 text-ink/76 md:text-[1.04rem] md:leading-8">
                    All sunscreen concepts shown are customizable private label / third-party manufacturing possibilities. Final SPF, PA rating, broad-spectrum claim, water-resistance claim, UVA/UVB protection claim, critical wavelength, claim language, formula, packaging and regulatory positioning must be finalized based on required testing, ingredient documentation and applicable cosmetic regulations.
                  </p>
                  <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                    SPF 50, PA++++, broad-spectrum and water-resistant positioning require appropriate laboratory testing before final label claim approval.
                  </p>
                  <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                    Any sunscreen claim shown on this page represents a product development direction and not a guaranteed final label claim until testing and regulatory review are completed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Internal linking</p>
                <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                  Continue planning your sunscreen and skincare manufacturing range
                </h2>
                <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                  Buyers researching <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/sunscreen-manufacturer">sunscreen manufacturing in India</Link> often compare adjacent routine and treatment categories before locking a launch roadmap. Use these pages to evaluate <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/face-serum-manufacturer">face serum manufacturing</Link>, <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/face-wash-manufacturer">face wash manufacturing</Link>, <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/moisturizer-manufacturer">moisturizer manufacturing</Link> and wider <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/private-label-cosmetics-manufacturer-india">private label cosmetic manufacturing</Link>.
                </p>
                <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                  This helps founders build a more practical day-care, brightening, derma-cosmetic or family-care range before they move into packaging, testing and quote planning.
                </p>
              </div>
              <InternalLinkGrid links={internalLinks} />
            </div>
          </div>
        </section>

        <section className="section-y text-ivory" style={{ background: "linear-gradient(160deg, rgba(41,30,37,1) 0%, rgba(31,28,31,1) 48%, rgba(46,31,39,1) 100%)" }}>
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-champagne">FAQ</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-10">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        <section className="site-band-soft section-y">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Related product categories</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                Related Product Categories
              </h2>
            </div>
            <div className="mt-10">
              <InternalLinkGrid links={relatedCategories} />
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <div className="rounded-[2rem] border border-charcoal/10 bg-[linear-gradient(135deg,#fffdf7_0%,#eef8ff_52%,#fde9a6_100%)] p-6 shadow-premium sm:p-8 md:p-10">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Final CTA</p>
                  <h2 className="mt-3 text-[clamp(2rem,6vw,4.4rem)] font-display font-semibold leading-[0.96] text-charcoal">
                    Launch Your Own Sunscreen Brand With Kiora CosmoTech
                  </h2>
                  <p className="mt-5 max-w-3xl text-[0.98rem] leading-7 text-ink/76 md:text-lg md:leading-8">
                    Whether you want to launch a matte gel sunscreen, aqua gel SPF, hybrid skincare sunscreen, tinted sunscreen, mineral sunscreen, no-white-cast SPF, sunscreen primer, sunscreen serum, sunscreen stick, milky fluid sunscreen, body sunscreen, sport SPF, kids mineral sunscreen, men's sunscreen, blue-light defense sunscreen, ceramide barrier SPF, scalp sunscreen mist or lip SPF balm, Kiora CosmoTech can help you convert your product idea into a premium private label sun-care range.
                  </p>
                </div>
                <div className="flex flex-col gap-3 lg:items-end">
                  <Link className="focus-ring site-button-primary inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-semibold text-ivory transition lg:max-w-[320px]" href="/request-quote">
                    Request Manufacturing Quote <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <a className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-charcoal/12 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white/70 lg:max-w-[320px]" href={whatsappHref("Hello Kiora CosmoTech, I want to discuss sunscreen manufacturing for my brand.")}>
                    <MessageCircle size={18} aria-hidden="true" />
                    Talk on WhatsApp
                  </a>
                  <Link className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-full border border-charcoal/12 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white/70 lg:max-w-[320px]" href="/skincare-manufacturer-india">
                    Explore More Product Categories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
