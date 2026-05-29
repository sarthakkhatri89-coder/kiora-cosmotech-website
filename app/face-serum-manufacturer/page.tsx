import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import ProductHeroBackground from "@/components/ProductHeroBackground";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { siteConfig, whatsappHref } from "@/data/siteConfig";
import { breadcrumbSchema, faqSchema, manufacturerSchema, serviceSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

type FaceSerumConcept = {
  id: string;
  name: string;
  description: string;
  activeOptions: string[];
  positioning: string;
  alt: string;
  image: string;
  group: string;
};

const pagePath = "/face-serum-manufacturer";
const pageTitle = "Face Serum Manufacturer in India | Private Label Skincare Serum Manufacturing";
const pageDescription =
  "Kiora CosmoTech offers private label and third-party face serum manufacturing in India, including vitamin C, niacinamide, glutathione, tranexamic acid, alpha arbutin, azelaic acid, salicylic acid, peptide, copper peptide, retinal, bakuchiol, hyaluronic acid, ceramide, PDRN, exosome-inspired, microbiome, snail mucin and kumkumadi serum concepts.";
const ogTitle = "Face Serum Manufacturer in India | Kiora CosmoTech";
const ogDescription =
  "Explore premium private label face serum concepts including vitamin C, niacinamide, pigmentation, peptide, copper peptide, retinal, hydration, barrier repair, PDRN, exosome-inspired, microbiome, snail mucin and kumkumadi serums.";
const preferredOgImage = "/images/face-serums/vitamin-c-glutathione-radiance-serum.webp";

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
const resolvedHeroImage = resolvePublicAsset("/images/product/face-serum-hero.webp.png");

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
        alt: "Face serum manufacturer in India product concept visual"
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
  "Private Label Manufacturing",
  "Third Party Cosmetic Manufacturing",
  "Custom Formulation Support",
  "Packaging & Brand Development Support"
];

const concepts: FaceSerumConcept[] = [
  {
    id: "niacinamide-zinc-oil-control-serum",
    name: "10% Niacinamide + Zinc Oil Control Serum",
    description:
      "A derma-inspired oil control serum concept for oily skin, visible pores and blemish-prone skin positioning.",
    activeOptions: ["Niacinamide", "Zinc PCA", "Panthenol", "Allantoin", "Green Tea Extract"],
    positioning: "A strong fit for modern oil-control and pore-refining skincare ranges with premium derma-care positioning.",
    alt: "3D render of 10 percent niacinamide and zinc oil control face serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/niacinamide-zinc-oil-control-serum.webp",
    group: "Acne, Oil Control & Clarifying Serums"
  },
  {
    id: "vitamin-c-brightening-face-serum",
    name: "Vitamin C Brightening Face Serum",
    description:
      "A glow-boosting antioxidant face serum concept for dull skin, uneven tone and radiance-focused skincare brands.",
    activeOptions: ["Ethyl Ascorbic Acid", "Sodium Ascorbyl Phosphate", "Ascorbyl Glucoside", "Ferulic Acid", "Vitamin E"],
    positioning: "Works well for premium brightening launches centered on antioxidant story, glow support and daily radiance care.",
    alt: "3D render of vitamin C brightening face serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/vitamin-c-brightening-face-serum.webp",
    group: "Brightening & Pigmentation Serums"
  },
  {
    id: "vitamin-c-glutathione-radiance-serum",
    name: "Vitamin C + Glutathione Radiance Serum",
    description:
      "A premium radiance serum concept for brightening, glow and even-looking complexion positioning.",
    activeOptions: ["Vitamin C Derivative", "Glutathione", "Alpha Arbutin", "Licorice Extract", "Niacinamide"],
    positioning: "Best suited for premium radiance-led brands looking to build a stronger glow and even-tone serum portfolio.",
    alt: "3D render of vitamin C and glutathione radiance serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/vitamin-c-glutathione-radiance-serum.webp",
    group: "Brightening & Pigmentation Serums"
  },
  {
    id: "tranexamic-acid-pigmentation-serum",
    name: "Tranexamic Acid Pigmentation Serum",
    description:
      "A derma-cosmetic pigmentation serum concept for dark spots, uneven tone and dull-looking skin.",
    activeOptions: ["Tranexamic Acid", "Niacinamide", "Alpha Arbutin", "Licorice Extract", "N-Acetyl Glucosamine"],
    positioning: "A practical choice for pigmentation-focused collections and modern dark-spot appearance support positioning.",
    alt: "3D render of tranexamic acid pigmentation serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/tranexamic-acid-pigmentation-serum.webp",
    group: "Brightening & Pigmentation Serums"
  },
  {
    id: "alpha-arbutin-kojic-brightening-serum",
    name: "Alpha Arbutin + Kojic Brightening Serum",
    description:
      "A brightening serum concept for spot-care, dullness and even-tone cosmetic positioning.",
    activeOptions: ["Alpha Arbutin", "Kojic Acid Derivative", "Licorice Extract", "Niacinamide", "Panthenol"],
    positioning: "Recommended for brightening-led skincare programs focused on the look of dullness and uneven tone.",
    alt: "3D render of alpha arbutin and kojic brightening serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/alpha-arbutin-kojic-brightening-serum.webp",
    group: "Brightening & Pigmentation Serums"
  },
  {
    id: "azelaic-acid-clarifying-serum",
    name: "Azelaic Acid Clarifying Serum",
    description:
      "A clarifying face serum concept for blemish-prone skin, redness-looking skin and uneven tone support.",
    activeOptions: ["Azelaic Acid Derivative", "Niacinamide", "Zinc PCA", "Panthenol", "Allantoin"],
    positioning: "Ideal for clarifying product lines that need a more refined derma-care and blemish-support angle.",
    alt: "3D render of azelaic acid clarifying serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/azelaic-acid-clarifying-serum.webp",
    group: "Acne, Oil Control & Clarifying Serums"
  },
  {
    id: "salicylic-acid-niacinamide-acne-care-serum",
    name: "Salicylic Acid + Niacinamide Acne-Care Serum",
    description:
      "A modern active serum concept for oily skin, visible pores, blackheads and blemish-prone skin positioning.",
    activeOptions: ["Salicylic Acid", "Niacinamide", "Zinc PCA", "Tea Tree Extract", "Willow Bark Extract"],
    positioning: "A strong fit for acne-care and oil-control product ladders built for young and derma-aware skincare buyers.",
    alt: "3D render of salicylic acid and niacinamide acne care serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/salicylic-acid-niacinamide-acne-care-serum.webp",
    group: "Acne, Oil Control & Clarifying Serums"
  },
  {
    id: "multi-peptide-anti-ageing-serum",
    name: "Multi-Peptide Anti-Ageing Serum",
    description:
      "A premium peptide serum concept for firming, smoother-looking skin, fine-line care and skin elasticity positioning.",
    activeOptions: [
      "Matrixyl 3000-style Peptides",
      "Palmitoyl Tripeptide-1",
      "Palmitoyl Tetrapeptide-7",
      "Acetyl Hexapeptide-8",
      "Panthenol"
    ],
    positioning: "Designed for premium anti-ageing portfolios that need a strong peptide story and smoother-looking skin positioning.",
    alt: "3D render of multi peptide anti ageing face serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/multi-peptide-anti-ageing-serum.webp",
    group: "Peptide & Anti-Ageing Serums"
  },
  {
    id: "copper-peptide-ghk-cu-repair-serum",
    name: "Copper Peptide GHK-Cu Repair Serum",
    description:
      "A biotech-inspired copper peptide serum concept for premium repair, resilience and firm-looking skin positioning.",
    activeOptions: ["Copper Tripeptide-1", "GHK-Cu", "Panthenol", "Allantoin", "Hyaluronic Acid"],
    positioning: "Best for premium repair-led launches where biotech positioning and a strong peptide identity matter.",
    alt: "3D render of copper peptide GHK-Cu repair serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/copper-peptide-ghk-cu-repair-serum.webp",
    group: "Peptide & Anti-Ageing Serums"
  },
  {
    id: "retinal-night-renewal-serum",
    name: "Retinal Night Renewal Serum",
    description:
      "A luxury night renewal serum concept for smoother-looking skin, refined texture and advanced age-care positioning.",
    activeOptions: ["Retinal", "Encapsulated Retinal", "Bakuchiol", "Peptides", "Panthenol", "Ceramide Complex"],
    positioning: "Recommended for night-care launches with an advanced age-care angle and elevated premium skincare appeal.",
    alt: "3D render of retinal night renewal serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/retinal-night-renewal-serum.webp",
    group: "Peptide & Anti-Ageing Serums"
  },
  {
    id: "bakuchiol-gentle-retinol-alternative-serum",
    name: "Bakuchiol Gentle Retinol Alternative Serum",
    description:
      "A plant-powered retinol alternative serum concept for sensitive-skin anti-ageing, glow and firm-looking skin positioning.",
    activeOptions: ["Bakuchiol", "Vitamin C Derivative", "Niacinamide", "Squalane", "Panthenol"],
    positioning: "A natural fit for gentle anti-ageing and plant-led skincare positioning with broad premium appeal.",
    alt: "3D render of bakuchiol gentle retinol alternative serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/bakuchiol-gentle-retinol-alternative-serum.webp",
    group: "Peptide & Anti-Ageing Serums"
  },
  {
    id: "hyaluronic-acid-polyglutamic-acid-hydration-serum",
    name: "Hyaluronic Acid + Polyglutamic Acid Hydration Serum",
    description:
      "A hydration and glass-skin serum concept for plumping, dewy-looking skin and dehydrated skin positioning.",
    activeOptions: ["Sodium Hyaluronate", "Multi-Molecular Hyaluronic Acid", "Polyglutamic Acid", "Glycerin", "Panthenol"],
    positioning: "Well matched to hydration-first skincare brands looking for dewy, plump-looking and everyday-use serum concepts.",
    alt: "3D render of hyaluronic acid and polyglutamic acid hydration serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/hyaluronic-acid-polyglutamic-acid-hydration-serum.webp",
    group: "Hydration, Barrier & Sensitive Skin Serums"
  },
  {
    id: "ceramide-barrier-repair-serum",
    name: "Ceramide Barrier Repair Serum",
    description:
      "A barrier repair serum concept for dry, sensitive and post-active skin comfort positioning.",
    activeOptions: ["Ceramide NP", "Cholesterol", "Fatty Acids", "Panthenol", "Niacinamide", "Phytosphingosine"],
    positioning: "Ideal for barrier-focused skincare programs built around skin comfort and premium recovery positioning.",
    alt: "3D render of ceramide barrier repair serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/ceramide-barrier-repair-serum.webp",
    group: "Hydration, Barrier & Sensitive Skin Serums"
  },
  {
    id: "ectoin-stress-defense-serum",
    name: "Ectoin Stress Defense Serum",
    description:
      "A modern stress-defense serum concept for pollution exposure, skin resilience and sensitive-skin support.",
    activeOptions: ["Ectoin", "Panthenol", "Beta-Glucan", "Allantoin", "Hyaluronic Acid"],
    positioning: "A strong fit for stress-defense and resilience-focused ranges targeting premium urban skincare buyers.",
    alt: "3D render of ectoin stress defense serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/ectoin-stress-defense-serum.webp",
    group: "Hydration, Barrier & Sensitive Skin Serums"
  },
  {
    id: "centella-cica-calming-serum",
    name: "Centella Cica Calming Serum",
    description:
      "A K-beauty inspired calming serum concept for sensitive skin, redness-looking skin and skin barrier comfort.",
    activeOptions: ["Centella Asiatica Extract", "Madecassoside", "Asiaticoside", "Panthenol", "Allantoin"],
    positioning: "Great for calming and comfort-led serum programs with K-beauty influenced product storytelling.",
    alt: "3D render of centella cica calming serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/centella-cica-calming-serum.webp",
    group: "Hydration, Barrier & Sensitive Skin Serums"
  },
  {
    id: "pdrn-skin-renewal-serum",
    name: "PDRN Skin Renewal Serum",
    description:
      "A Korean clinical-inspired skin renewal serum concept for premium skin quality and rejuvenation-style positioning.",
    activeOptions: ["PDRN-Inspired Active", "Sodium DNA", "Peptides", "Hyaluronic Acid", "Panthenol"],
    positioning: "Recommended for premium clinical-style skincare launches with a skin-quality and renewal story.",
    alt: "3D render of PDRN skin renewal serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/pdrn-skin-renewal-serum.webp",
    group: "Biotech, K-Beauty & Luxury Botanical Serums"
  },
  {
    id: "exosome-inspired-bioactive-face-serum",
    name: "Exosome-Inspired Bioactive Face Serum",
    description:
      "A futuristic biotech-inspired serum concept for premium skin quality, radiance and next-generation skincare positioning.",
    activeOptions: ["Plant Exosome-Inspired Active", "Extracellular Vesicle-Inspired Complex", "Peptides", "Niacinamide", "Panthenol"],
    positioning: "Best suited for next-generation premium launches that need a more futuristic biotech skincare angle.",
    alt: "3D render of exosome inspired bioactive face serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/exosome-inspired-bioactive-face-serum.webp",
    group: "Biotech, K-Beauty & Luxury Botanical Serums"
  },
  {
    id: "postbiotic-microbiome-balance-serum",
    name: "Postbiotic Microbiome Balance Serum",
    description:
      "A microbiome-focused serum concept for skin barrier comfort, balanced-looking skin and sensitive skin support.",
    activeOptions: ["Lactobacillus Ferment", "Postbiotic Complex", "Inulin", "Alpha-Glucan Oligosaccharide", "Panthenol"],
    positioning: "A strong fit for barrier-aware skincare programs focused on microbiome balance and skin comfort support.",
    alt: "3D render of postbiotic microbiome balance serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/postbiotic-microbiome-balance-serum.webp",
    group: "Hydration, Barrier & Sensitive Skin Serums"
  },
  {
    id: "snail-mucin-peptide-repair-serum",
    name: "Snail Mucin + Peptide Repair Serum",
    description:
      "A K-beauty inspired repair serum concept for glow, hydration, smoother-looking skin and skin comfort.",
    activeOptions: ["Snail Secretion Filtrate or Vegan Snail Alternative", "Peptides", "Hyaluronic Acid", "Allantoin", "Panthenol"],
    positioning: "Well matched to K-beauty and repair-led serum concepts centered on comfort, hydration and glow.",
    alt: "3D render of snail mucin and peptide repair serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/snail-mucin-peptide-repair-serum.webp",
    group: "Biotech, K-Beauty & Luxury Botanical Serums"
  },
  {
    id: "saffron-kumkumadi-radiance-serum",
    name: "Saffron + Kumkumadi Radiance Serum",
    description:
      "A luxury Indian botanical face serum concept for radiance, glow and premium Ayurveda-inspired skincare positioning.",
    activeOptions: ["Saffron Extract", "Kumkumadi-Inspired Botanical Complex", "Licorice Extract", "Turmeric Extract", "Manjistha Extract", "Vitamin C Derivative"],
    positioning: "Perfect for premium Ayurveda-inspired launches built around radiance, glow and luxury botanical storytelling.",
    alt: "3D render of saffron and kumkumadi radiance serum bottle and box labeled Your Brand.",
    image: "/images/face-serums/saffron-kumkumadi-radiance-serum.webp",
    group: "Brightening & Pigmentation Serums"
  }
];

const groupedConcepts = [
  {
    title: "Brightening & Pigmentation Serums",
    ids: [
      "vitamin-c-brightening-face-serum",
      "vitamin-c-glutathione-radiance-serum",
      "tranexamic-acid-pigmentation-serum",
      "alpha-arbutin-kojic-brightening-serum",
      "saffron-kumkumadi-radiance-serum"
    ]
  },
  {
    title: "Acne, Oil Control & Clarifying Serums",
    ids: [
      "niacinamide-zinc-oil-control-serum",
      "azelaic-acid-clarifying-serum",
      "salicylic-acid-niacinamide-acne-care-serum"
    ]
  },
  {
    title: "Peptide & Anti-Ageing Serums",
    ids: [
      "multi-peptide-anti-ageing-serum",
      "copper-peptide-ghk-cu-repair-serum",
      "retinal-night-renewal-serum",
      "bakuchiol-gentle-retinol-alternative-serum"
    ]
  },
  {
    title: "Hydration, Barrier & Sensitive Skin Serums",
    ids: [
      "hyaluronic-acid-polyglutamic-acid-hydration-serum",
      "ceramide-barrier-repair-serum",
      "ectoin-stress-defense-serum",
      "centella-cica-calming-serum",
      "postbiotic-microbiome-balance-serum"
    ]
  },
  {
    title: "Biotech, K-Beauty & Luxury Botanical Serums",
    ids: [
      "pdrn-skin-renewal-serum",
      "exosome-inspired-bioactive-face-serum",
      "snail-mucin-peptide-repair-serum",
      "saffron-kumkumadi-radiance-serum"
    ]
  }
];

const activeChips = [
  "Niacinamide",
  "Zinc PCA",
  "Ethyl Ascorbic Acid",
  "Glutathione",
  "Tranexamic Acid",
  "Alpha Arbutin",
  "Kojic Acid Derivative",
  "Azelaic Acid",
  "Salicylic Acid",
  "Copper Tripeptide-1 / GHK-Cu",
  "Palmitoyl Tripeptide-1",
  "Acetyl Hexapeptide-8",
  "Retinal",
  "Bakuchiol",
  "Hyaluronic Acid",
  "Polyglutamic Acid",
  "Ceramide NP",
  "Ectoin",
  "Centella Asiatica",
  "PDRN-Inspired Active",
  "Exosome-Inspired Active",
  "Lactobacillus Ferment",
  "Snail Mucin Alternative",
  "Saffron Extract",
  "Kumkumadi Botanical Complex"
];

const whyChooseCards = [
  "Custom private label face serum formulation support",
  "Trending active-led skincare concepts",
  "Derma-cosmetic and cosmeceutical positioning support",
  "Packaging and product concept support",
  "Scalable third-party manufacturing support",
  "Support for brightening, acne-care, barrier repair, anti-ageing and luxury botanical ranges",
  "SEO-friendly product concept library for brand launches"
];

const faqs = [
  {
    question: "Does Kiora CosmoTech manufacture private label face serums?",
    answer:
      "Yes, Kiora CosmoTech supports private label and third-party manufacturing of face serum concepts for cosmetic, derma-care, herbal, peptide, brightening, acne-care, hydration, barrier repair and premium skincare brands."
  },
  {
    question: "Can you develop vitamin C, niacinamide and pigmentation serum concepts?",
    answer:
      "Yes, Kiora CosmoTech can help brands develop active-led face serum concepts based on vitamin C derivatives, niacinamide, tranexamic acid, alpha arbutin, kojic acid derivatives, glutathione and botanical brightening systems."
  },
  {
    question: "Can I launch a copper peptide or GHK-Cu serum under my brand?",
    answer:
      "Yes, copper peptide and GHK-Cu inspired face serum concepts can be developed for premium derma-cosmetic brands depending on ingredient availability, positioning and target cost."
  },
  {
    question: "Can you develop PDRN or exosome-inspired face serum concepts?",
    answer:
      "Yes, Kiora CosmoTech can support premium biotech-inspired serum concepts such as PDRN-inspired, exosome-inspired and bioactive peptide-based face serums, subject to ingredient documentation, formulation feasibility and compliant claim language."
  },
  {
    question: "Can you develop herbal or Ayurveda-inspired face serums?",
    answer:
      "Yes, Kiora CosmoTech can support luxury botanical and Ayurveda-inspired face serum concepts using saffron, kumkumadi-inspired botanical systems, licorice, turmeric, manjistha and other plant-based actives."
  },
  {
    question: "Are these face serum products ready-made formulas?",
    answer:
      "The concepts shown are product directions and manufacturing possibilities. Final formula, active percentage, claim language, ingredient selection and packaging will be customized based on your brand requirement, target price and applicable cosmetic regulations."
  },
  {
    question: "What types of brands can launch these face serums?",
    answer:
      "These concepts are suitable for D2C skincare brands, derma-cosmetic marketing companies, influencers, salon/spa brands, herbal cosmetic brands and private label buyers."
  }
];

const keywordTagMap: Record<string, string[]> = {
  "niacinamide-zinc-oil-control-serum": ["Niacinamide face serum manufacturer", "Oil control serum manufacturer", "Private label niacinamide serum"],
  "vitamin-c-brightening-face-serum": ["Vitamin C face serum manufacturer", "Brightening serum manufacturer", "Third party face serum manufacturer"],
  "vitamin-c-glutathione-radiance-serum": ["Glutathione face serum manufacturer", "Radiance serum manufacturer", "Private label brightening serum"],
  "tranexamic-acid-pigmentation-serum": ["Tranexamic acid serum manufacturer", "Pigmentation serum manufacturer", "Dark spot serum manufacturer"],
  "alpha-arbutin-kojic-brightening-serum": ["Alpha arbutin serum manufacturer", "Kojic acid serum manufacturer", "Brightening face serum manufacturer"],
  "azelaic-acid-clarifying-serum": ["Azelaic acid serum manufacturer", "Clarifying face serum manufacturer", "Derma face serum manufacturer"],
  "salicylic-acid-niacinamide-acne-care-serum": ["Salicylic acid face serum manufacturer", "Acne care serum manufacturer", "BHA serum manufacturer"],
  "multi-peptide-anti-ageing-serum": ["Multi peptide face serum manufacturer", "Anti ageing peptide serum manufacturer", "Cosmeceutical face serum manufacturer"],
  "copper-peptide-ghk-cu-repair-serum": ["Copper peptide serum manufacturer", "GHK-Cu face serum manufacturer", "Repair serum manufacturer"],
  "retinal-night-renewal-serum": ["Retinal serum manufacturer", "Retinol serum manufacturer", "Night renewal serum manufacturer"],
  "bakuchiol-gentle-retinol-alternative-serum": ["Bakuchiol serum manufacturer", "Retinol alternative serum manufacturer", "Private label bakuchiol serum"],
  "hyaluronic-acid-polyglutamic-acid-hydration-serum": ["Hyaluronic acid serum manufacturer", "Hydration serum manufacturer", "Private label HA serum"],
  "ceramide-barrier-repair-serum": ["Ceramide serum manufacturer", "Barrier repair serum manufacturer", "Sensitive skin serum manufacturer"],
  "ectoin-stress-defense-serum": ["Ectoin serum manufacturer", "Stress defense serum manufacturer", "Sensitive skin protection serum manufacturer"],
  "centella-cica-calming-serum": ["Cica serum manufacturer", "Centella serum manufacturer", "Calming serum manufacturer"],
  "pdrn-skin-renewal-serum": ["PDRN serum manufacturer", "Skin renewal serum manufacturer", "Private label PDRN serum"],
  "exosome-inspired-bioactive-face-serum": ["Exosome face serum manufacturer", "Bioactive serum manufacturer", "Biotech face serum manufacturer"],
  "postbiotic-microbiome-balance-serum": ["Postbiotic serum manufacturer", "Microbiome face serum manufacturer", "Private label microbiome serum"],
  "snail-mucin-peptide-repair-serum": ["Snail mucin serum manufacturer", "K beauty serum manufacturer", "Snail peptide serum manufacturer"],
  "saffron-kumkumadi-radiance-serum": ["Kumkumadi serum manufacturer", "Ayurvedic face serum manufacturer", "Luxury botanical serum manufacturer"]
};

const internalLinks = [
  { label: "Private Label Manufacturing", href: "/private-label-cosmetics-manufacturer-india", description: "Explore private label cosmetic manufacturing for active-led skincare brands." },
  { label: "Third Party Cosmetic Manufacturing", href: "/third-party-cosmetic-manufacturing-india", description: "Review third party skincare manufacturing for growing cosmetic programs." },
  { label: "Cosmetic Manufacturing", href: "/contract-cosmetic-manufacturer-india", description: "See broader cosmetic manufacturing in India for premium B2B brand launches." },
  { label: "Skin Care Manufacturing", href: "/skincare-manufacturer-india", description: "Browse the wider skin care manufacturing portfolio and adjacent product categories." },
  { label: "Hair Serum Manufacturing", href: "/hair-serum-manufacturer", description: "Add scalp-care and hair serum manufacturing to a broader beauty range strategy." },
  { label: "Sunscreen Manufacturing", href: "/sunscreen-manufacturer", description: "Pair active-led serums with sunscreen manufacturing for complete skincare routines." },
  { label: "Face Wash Manufacturing", href: "/face-wash-manufacturer", description: "Extend cleansing and treatment-led routines with face wash manufacturing support." },
  { label: "Contact Page", href: "/request-quote", description: "Contact Kiora CosmoTech with your serum idea, quantity and launch plan." }
];

const relatedCategories = [
  { label: "Hair Serum Manufacturing", href: "/hair-serum-manufacturer", description: "Extend into premium scalp-care and hair serum manufacturing." },
  { label: "Sunscreen Manufacturing", href: "/sunscreen-manufacturer", description: "Build adjacent protection-led skincare products for the same brand." },
  { label: "Face Wash Manufacturing", href: "/face-wash-manufacturer", description: "Plan cleanser and treatment combinations for D2C skincare growth." },
  { label: "Moisturizer Manufacturing", href: "/moisturizer-manufacturer", description: "Add hydration-focused moisturizers to a serum-led routine." },
  { label: "Shampoo Manufacturing", href: "/shampoo-manufacturer", description: "Support wider personal care and salon brand expansion." },
  { label: "Hair Oil Manufacturing", href: "/hair-oil-manufacturer", description: "Create cross-category beauty and wellness product portfolios." },
  { label: "Cosmetic Manufacturing", href: "/contract-cosmetic-manufacturer-india", description: "See full-scale cosmetic manufacturing in India for category expansion." },
  { label: "Private Label Manufacturing", href: "/private-label-cosmetics-manufacturer-india", description: "Launch under your own brand with private label manufacturing support." }
];

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/skincare-manufacturer-india" },
  { name: "Face Serum Manufacturer in India", href: pagePath }
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Face Serum Manufacturer in India | Kiora CosmoTech",
  description:
    "Premium private label and third-party face serum manufacturing page for brightening, pigmentation, peptide, hydration, barrier repair, biotech and luxury botanical serum concepts.",
  url: absoluteUrl(siteConfig.url, pagePath),
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url
  }
};

const pageOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  industry: "Private Label Cosmetic Manufacturing",
  url: siteConfig.url,
  logo: absoluteUrl(siteConfig.url, siteConfig.logo),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: siteConfig.phone,
    areaServed: "India"
  },
  contactPage: absoluteUrl(siteConfig.url, "/request-quote")
};

const detailedServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Face Serum Manufacturing",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url
  },
  areaServed: "India",
  serviceType: [
    "Private Label Face Serum Manufacturing",
    "Third Party Face Serum Manufacturing",
    "Cosmetic Face Serum Manufacturing"
  ],
  description:
    "Kiora CosmoTech offers private label and third-party manufacturing support for premium face serum concepts including brightening serums, pigmentation serums, acne-care serums, peptide serums, copper peptide serums, hydration serums, barrier repair serums, PDRN-inspired serums, exosome-inspired serums, microbiome serums, snail mucin serums and luxury botanical serums.",
  url: absoluteUrl(siteConfig.url, pagePath)
};

function FaceSerumVisual({ concept }: { concept: FaceSerumConcept }) {
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
      className="cosmetic-visual relative aspect-[5/4] overflow-hidden rounded-[1.35rem] border border-charcoal/10 p-4 sm:aspect-[4/5] sm:rounded-[1.6rem] sm:p-5"
      role="img"
      aria-label={concept.alt}
    >
      <div className="product-bottle left-[14%] h-44" />
      <div className="product-bottle left-[42%] h-52" />
      <div className="texture-swatch right-8 top-10 h-20 w-20" />
      <div className="absolute bottom-4 left-4 right-4 rounded-[1.4rem] bg-ivory/92 p-3.5 shadow-premium sm:bottom-5 sm:left-5 sm:right-5 sm:rounded-3xl sm:p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Your Brand</p>
        <h3 className="mt-2 text-base font-semibold leading-snug text-charcoal sm:text-lg">{concept.name}</h3>
      </div>
    </div>
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
          serviceSchema("Face Serum Manufacturing", pageDescription, pagePath),
          detailedServiceSchema,
          faqSchema(faqs),
          webPageSchema
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <main>
        <ProductHeroBackground
          eyebrow="Premium serum manufacturing"
          title="Face Serum Manufacturer in India"
          description={
            <p>
              Private label and third-party manufacturing for premium brightening, pigmentation, peptide, hydration, barrier repair, anti-ageing, microbiome, biotech and luxury botanical face serum concepts.
            </p>
          }
          detail={
            <p>
              Kiora CosmoTech develops customized face serum concepts for modern cosmetic and derma-care brands, including active-led brightening serums, niacinamide serums, peptide serums, copper peptide serums, retinal alternatives, hydration serums, barrier repair serums, PDRN-inspired serums, exosome-inspired serums and luxury botanical face serums.
            </p>
          }
          actions={
            <>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-center font-semibold text-ivory transition hover:bg-charcoal sm:min-w-[250px]" href="/request-quote">
                Request Face Serum Manufacturing Quote <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-charcoal/12 bg-white/84 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white sm:min-w-[220px]" href="#face-serum-concepts">
                Explore Face Serum Concepts
              </a>
            </>
          }
          tags={trustBadges}
          imageSrc={resolvedHeroImage}
          imageAlt="Premium face serum bottle and box mockup labeled Your Brand"
          imageCaption="Serum Formula • Dropper/Pump Packaging • Filling • Quality • Dispatch"
          fallbackTitle="Premium face serum concepts"
          fallbackDescription="Brightening, peptide, hydration, barrier repair and luxury botanical serum directions for modern skincare launches."
          titleClassName="font-display text-[clamp(2.35rem,9vw,6rem)] font-semibold leading-[0.94] text-charcoal"
        />

        <section className="section-y bg-mist">
          <div className="container-padded grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-[1.6rem] bg-charcoal p-5 text-ivory shadow-sm sm:rounded-3xl sm:p-7">
              <h2 className="text-[1.8rem] font-semibold leading-tight sm:text-3xl">Private Label Face Serum Manufacturing for Modern Skincare Brands</h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ivory/78 md:leading-8">
                Kiora CosmoTech helps skincare brands develop premium face serum products based on trending cosmetic actives, derma-care ingredients, branded ingredient positioning, peptides, antioxidants, botanicals, hydration systems, skin barrier support and modern cosmeceutical concepts.
              </p>
              <p className="mt-4 text-[0.98rem] leading-7 text-ivory/78 md:leading-8">
                The company supports brands from product concept to formulation development, packaging direction and manufacturing support, making it easier to move from ingredient story to launch-ready product planning. Buyers exploring <Link className="font-semibold text-champagne underline decoration-champagne/40 underline-offset-4" href="/private-label-cosmetics-manufacturer-india">private label cosmetic manufacturing</Link> or <Link className="font-semibold text-champagne underline decoration-champagne/40 underline-offset-4" href="/third-party-cosmetic-manufacturing-india">third party skincare manufacturing</Link> can use this page to shortlist commercially practical serum directions before sampling.
              </p>
              <p className="mt-4 text-[0.98rem] leading-7 text-ivory/78 md:leading-8">
                The emphasis stays on premium B2B outcomes: target audience fit, ingredient positioning, packaging style, target price, compliant claim language, batch planning and the broader serum architecture needed for modern skincare brand building in India.
              </p>
            </article>
            <article className="rounded-[1.6rem] border border-charcoal/10 bg-ivory p-5 shadow-sm sm:rounded-3xl sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Direct answer</p>
              <h2 className="mt-3 text-[1.8rem] font-semibold leading-tight text-charcoal sm:text-3xl">Face serum manufacturing for premium skin-care brand growth</h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                This page is designed for skincare founders, derma-cosmetic marketing companies, salon and spa brands, creators, herbal cosmetic brands and private label buyers looking for a face serum manufacturer in India with a premium concept library. It also connects naturally with <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/skincare-manufacturer-india">skin care manufacturing</Link>, <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/sunscreen-manufacturer">sunscreen manufacturing</Link>, <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/moisturizer-manufacturer">moisturizer manufacturing</Link> and broader <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/contract-cosmetic-manufacturer-india">cosmetic manufacturing in India</Link>.
              </p>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                From vitamin C and niacinamide concepts to copper peptide, barrier repair, PDRN-inspired and luxury kumkumadi directions, the goal is to help you compare concept types, understand positioning angles and move toward a more useful product brief before speaking with <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/request-quote">contact Kiora CosmoTech</Link>.
              </p>
            </article>
          </div>
        </section>

        <section className="section-y" id="face-serum-concepts">
          <div className="container-padded">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Product concepts</p>
              <h2 className="section-title mt-3 font-display font-semibold text-charcoal">
                Trending Face Serum Formulation Concepts We Can Develop
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:mt-5 md:leading-8">
                Explore premium face serum concepts that can be customized for your brand based on target audience, price segment, ingredient positioning, packaging style and regulatory category.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
              {concepts.map((concept) => (
                <article className="rounded-[1.6rem] border border-charcoal/10 bg-ivory p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-premium sm:rounded-[2rem] sm:p-5" id={concept.id} key={concept.id}>
                  <FaceSerumVisual concept={concept} />
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">{concept.group}</p>
                    <h3 className="mt-2 text-[1.35rem] font-semibold leading-tight text-charcoal sm:text-2xl">{concept.name}</h3>
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
                  <div className="mt-5 rounded-[1.4rem] border border-charcoal/10 bg-white p-3.5 sm:rounded-3xl sm:p-4">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/72 sm:text-sm">Positioning direction</h4>
                    <p className="mt-2.5 text-[0.92rem] leading-6 text-ink/74 sm:mt-3 sm:text-sm sm:leading-7">{concept.positioning}</p>
                  </div>
                  <Link
                    className="focus-ring mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-charcoal px-4 py-3 text-center text-sm font-semibold text-ivory transition hover:bg-teal sm:mt-6 sm:min-h-12 sm:px-5"
                    href={`/request-quote?product=${encodeURIComponent(concept.name)}`}
                  >
                    Develop This Product With Your Brand
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-[1.8rem] border border-charcoal/10 bg-charcoal p-5 text-ivory shadow-premium sm:mt-10 sm:p-6">
              <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-champagne">Custom development CTA</p>
                  <h2 className="mt-3 text-[1.7rem] font-semibold leading-tight sm:text-[2.15rem]">Need a premium brightening, peptide or barrier-focused serum direction?</h2>
                  <p className="mt-3 text-[0.98rem] leading-7 text-ivory/78">
                    Share your target audience, ingredient story and packaging preference. The Kiora team can help you turn a broad face serum idea into a more structured private label skincare brief.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-champagne px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-ivory" href="/request-quote">
                    Request Face Serum Manufacturing Quote
                  </Link>
                  <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-ivory/20 px-6 py-3 text-center font-semibold text-ivory transition hover:bg-ivory/10" href="/custom-skincare-formulation">
                    Request Custom Face Serum Formulation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Product grouping</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                Group your serum launch around the right skincare angle
              </h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {groupedConcepts.map((group) => (
                <article className="rounded-[1.6rem] border border-charcoal/10 bg-ivory p-5 shadow-sm sm:rounded-3xl sm:p-6" key={group.title}>
                  <h3 className="text-[1.35rem] font-semibold leading-tight text-charcoal sm:text-2xl">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3">
                    {group.ids.map((id) => {
                      const concept = concepts.find((item) => item.id === id)!;
                      return (
                        <a className="rounded-full bg-mist px-3 py-2.5 text-[13px] font-semibold text-charcoal transition hover:bg-charcoal hover:text-ivory sm:px-4 sm:py-3 sm:text-sm" href={`#${concept.id}`} key={`${group.title}-${concept.id}`}>
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Active customization</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                Available Active &amp; INCI-Based Customization Options
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:mt-5 md:leading-8">
                Kiora CosmoTech can develop customized face serum formulations using trending cosmetic actives such as Niacinamide, Zinc PCA, Ethyl Ascorbic Acid, Glutathione, Tranexamic Acid, Alpha Arbutin, Kojic Acid derivatives, Azelaic Acid, Salicylic Acid, Copper Tripeptide-1 / GHK-Cu, peptides, Retinal, Bakuchiol, Hyaluronic Acid, Polyglutamic Acid, Ceramide NP, Ectoin, Centella Asiatica, PDRN-inspired actives, exosome-inspired actives, postbiotics, snail mucin alternatives, saffron and kumkumadi-inspired botanical systems depending on brand positioning, target skin concern, regulatory category and target price.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {activeChips.map((chip) => (
                <span className="rounded-full border border-charcoal/10 bg-mist px-3.5 py-2 text-sm font-semibold text-charcoal" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-charcoal text-ivory">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-champagne">Why Kiora</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98]">
                Why Choose Kiora CosmoTech for Face Serum Manufacturing?
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {whyChooseCards.map((item) => (
                <article className="rounded-[1.6rem] border border-ivory/10 bg-ivory/6 p-5 shadow-sm backdrop-blur sm:rounded-3xl sm:p-6" key={item}>
                  <CheckCircle2 className="h-5 w-5 text-champagne" aria-hidden="true" />
                  <p className="mt-4 text-base font-semibold leading-7 text-ivory">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Manufacturing process</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                From Concept to Finished Face Serum
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Product concept finalization",
                "Active and claim positioning",
                "Formula development and sample approval",
                "Packaging selection and artwork guidance",
                "Batch manufacturing",
                "Quality checks",
                "Filling, packing and dispatch"
              ].map((step, index) => (
                <article className="rounded-[1.6rem] border border-charcoal/10 bg-mist p-5 shadow-sm sm:rounded-3xl sm:p-6" key={step}>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Step {index + 1}</p>
                  <h3 className="mt-3 text-[1.15rem] font-semibold leading-tight text-charcoal">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <div className="rounded-[1.8rem] border border-charcoal/10 bg-ivory p-5 shadow-sm sm:rounded-[2rem] sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Claim safety</p>
              <p className="mt-4 text-[1rem] leading-7 text-ink/76 md:text-[1.04rem] md:leading-8">
                All face serum concepts shown are customizable private label / third-party manufacturing possibilities. Final formula, active percentage, claim language, fragrance, packaging, skin-feel and regulatory positioning can be customized as per brand requirement and applicable cosmetic regulations.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Internal linking</p>
                <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                  Continue planning your skincare manufacturing range
                </h2>
                <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                  Buyers researching <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/face-serum-manufacturer">face serum manufacturing in India</Link> often compare adjacent routine categories before locking a product roadmap. Use these pages to evaluate <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/sunscreen-manufacturer">sunscreen manufacturing</Link>, <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/hair-serum-manufacturer">hair serum manufacturing</Link> and the wider private label or third-party model.
                </p>
              </div>
              <InternalLinkGrid links={internalLinks} />
            </div>
          </div>
        </section>

        <section className="section-y bg-charcoal text-ivory">
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

        <section className="section-y bg-mist">
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
            <div className="rounded-[2rem] border border-charcoal/10 bg-[linear-gradient(135deg,#fffdf7_0%,#edf4ee_52%,#dfcfb4_100%)] p-6 shadow-premium sm:p-8 md:p-10">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Final CTA</p>
                  <h2 className="mt-3 text-[clamp(2rem,6vw,4.4rem)] font-display font-semibold leading-[0.96] text-charcoal">
                    Launch Your Own Face Serum Brand With Kiora CosmoTech
                  </h2>
                  <p className="mt-5 max-w-3xl text-[0.98rem] leading-7 text-ink/76 md:text-lg md:leading-8">
                    Whether you want to launch a vitamin C serum, niacinamide serum, pigmentation serum, peptide serum, copper peptide serum, retinal night serum, hydration serum, PDRN-inspired serum, exosome-inspired serum, snail mucin serum or luxury kumkumadi face serum, Kiora CosmoTech can help you convert your product idea into a premium private label skincare range.
                  </p>
                </div>
                <div className="flex flex-col gap-3 lg:items-end">
                  <Link className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3 text-center font-semibold text-ivory transition hover:bg-teal lg:max-w-[320px]" href="/request-quote">
                    Request Manufacturing Quote <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <a className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-charcoal/12 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white/70 lg:max-w-[320px]" href={whatsappHref("Hello Kiora CosmoTech, I want to discuss face serum manufacturing for my brand.")}>
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
