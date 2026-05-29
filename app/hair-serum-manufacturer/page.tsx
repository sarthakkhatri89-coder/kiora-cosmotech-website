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

type HairSerumConcept = {
  id: string;
  name: string;
  description: string;
  activeOptions: string[];
  positioning: string;
  alt: string;
  image: string;
  group: string;
};

const pagePath = "/hair-serum-manufacturer";
const pageTitle = "Hair Serum Manufacturer in India | Private Label Hair Growth & Scalp Serum Manufacturing";
const pageDescription =
  "Kiora CosmoTech offers private label and third-party hair serum manufacturing in India, including Redensyl, Capixyl, Procapil, peptide, copper peptide, rosemary, niacinamide, prebiotic, anti-dandruff, Ayurvedic and bond repair hair serum concepts for modern cosmetic brands.";
const ogTitle = "Hair Serum Manufacturer in India | Kiora CosmoTech";
const ogDescription =
  "Explore premium private label hair serum concepts including Redensyl, Capixyl, Procapil, peptide, copper peptide, rosemary, scalp barrier, anti-dandruff, Ayurvedic and bond repair serums.";
const preferredOgImage = "/images/hair-serums/multi-active-hair-growth-serum.webp";

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
const resolvedHeroImage = resolvePublicAsset("/images/product/hair-serum-hero.webp.png");

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
        alt: "Hair serum manufacturer in India product concept visual"
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

const concepts: HairSerumConcept[] = [
  {
    id: "redensyl-hair-density-serum",
    name: "Redensyl Hair Density Serum",
    description:
      "A premium scalp serum concept designed for hair density, root support and fuller-looking hair positioning.",
    activeOptions: [
      "Redensyl-inspired active complex",
      "Larix Europaea Wood Extract",
      "Camellia Sinensis Leaf Extract",
      "Glycine Zinc Chloride",
      "Panthenol",
      "Niacinamide"
    ],
    positioning: "Best suited for premium scalp density, fuller-looking hair and active-led private label launches.",
    alt: "3D render of premium Redensyl hair density serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/redensyl-hair-density-serum.webp",
    group: "Hair Density & Growth Support Serums"
  },
  {
    id: "capixyl-peptide-hair-fall-control-serum",
    name: "Capixyl Peptide Hair Fall Control Serum",
    description:
      "A peptide-based hair fall control serum concept for stronger-looking roots and reduced hair fall due to breakage.",
    activeOptions: [
      "Capixyl-inspired complex",
      "Acetyl Tetrapeptide-3",
      "Trifolium Pratense Clover Flower Extract",
      "Caffeine",
      "Panthenol"
    ],
    positioning: "A strong fit for breakage-control, root-focused and peptide-positioned hair-care ranges.",
    alt: "3D render of Capixyl peptide hair fall control serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/capixyl-peptide-hair-fall-control-serum.webp",
    group: "Hair Density & Growth Support Serums"
  },
  {
    id: "procapil-root-activating-serum",
    name: "Procapil Root Activating Serum",
    description:
      "A root activating scalp serum concept positioned for weak roots, thinning concerns and scalp vitality.",
    activeOptions: [
      "Procapil-inspired complex",
      "Biotinoyl Tripeptide-1",
      "Apigenin",
      "Oleanolic Acid",
      "Niacinamide",
      "Panthenol"
    ],
    positioning: "Recommended for brands building root support, scalp vitality and thinning-concern concepts.",
    alt: "3D render of Procapil root activating hair serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/procapil-root-activating-serum.webp",
    group: "Hair Density & Growth Support Serums"
  },
  {
    id: "baicapil-botanical-hair-growth-serum",
    name: "Baicapil Botanical Hair Growth Serum",
    description:
      "A botanical hair growth support serum concept created for natural, plant-powered and premium hair care brands.",
    activeOptions: [
      "Baicapil-inspired botanical complex",
      "Scutellaria Baicalensis Root Extract",
      "Soy Germ Extract",
      "Wheat Germ Extract",
      "Aloe Vera",
      "Panthenol"
    ],
    positioning: "Works well for plant-powered, premium botanical and clean-positioned hair serum portfolios.",
    alt: "3D render of Baicapil botanical hair growth serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/baicapil-botanical-hair-growth-serum.webp",
    group: "Hair Density & Growth Support Serums"
  },
  {
    id: "multi-active-hair-growth-serum",
    name: "18% Multi-Active Hair Growth Serum",
    description:
      "A high-impact multi-active scalp serum concept for brands looking to launch an advanced hair growth support product.",
    activeOptions: [
      "Redensyl",
      "Capixyl",
      "Procapil",
      "Anagain",
      "Baicapil",
      "Peptide complex"
    ],
    positioning: "Designed for advanced hero-product launches with a high-performance, multi-active story.",
    alt: "3D render of 18 percent multi active hair growth serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/multi-active-hair-growth-serum.webp",
    group: "Hair Density & Growth Support Serums"
  },
  {
    id: "multi-peptide-hair-density-serum",
    name: "Multi-Peptide Hair Density Serum",
    description:
      "A premium peptide hair density serum concept for modern derma-cosmetic and performance hair care brands.",
    activeOptions: [
      "Copper Tripeptide-1",
      "GHK-Cu",
      "Acetyl Tetrapeptide-3",
      "Biotinoyl Tripeptide-1",
      "Myristoyl Pentapeptide-17",
      "Caffeine"
    ],
    positioning: "Ideal for derma-cosmetic, performance haircare and peptide-led premium brand concepts.",
    alt: "3D render of multi peptide hair density serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/multi-peptide-hair-density-serum.webp",
    group: "Peptide & Biotech Scalp Serums"
  },
  {
    id: "copper-peptide-scalp-repair-serum",
    name: "Copper Peptide Scalp Repair Serum",
    description:
      "A premium scalp repair and root-care serum concept based on copper peptide positioning.",
    activeOptions: [
      "Copper Tripeptide-1",
      "GHK-Cu",
      "Glycyl-L-Histidyl-L-Lysine Copper Complex",
      "Panthenol",
      "Zinc PCA",
      "Allantoin"
    ],
    positioning: "Suitable for premium scalp repair positioning with a modern copper peptide ingredient story.",
    alt: "3D render of copper peptide scalp repair serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/copper-peptide-scalp-repair-serum.webp",
    group: "Peptide & Biotech Scalp Serums"
  },
  {
    id: "peptide-rosemary-root-revival-serum",
    name: "Peptide + Rosemary Root Revival Serum",
    description:
      "A modern peptide and botanical fusion serum concept combining rosemary-inspired scalp care with advanced peptide positioning.",
    activeOptions: [
      "Rosemary Extract",
      "Rosmarinus Officinalis Leaf Extract",
      "Acetyl Tetrapeptide-3",
      "Caffeine",
      "Niacinamide",
      "Panthenol"
    ],
    positioning: "A balanced choice for brands combining modern peptide positioning with botanical scalp care.",
    alt: "3D render of peptide and rosemary root revival hair serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/peptide-rosemary-root-revival-serum.webp",
    group: "Peptide & Biotech Scalp Serums"
  },
  {
    id: "caffeine-energizing-scalp-serum",
    name: "Caffeine Energizing Scalp Serum",
    description:
      "A scalp energizing serum concept for brands targeting tired scalp, weak-looking roots and daily scalp care.",
    activeOptions: [
      "Caffeine",
      "Niacinamide",
      "Zinc PCA",
      "Green Tea Extract",
      "Panthenol",
      "Amino acids"
    ],
    positioning: "Well matched to daily-use scalp care ranges focused on freshness, energy and root support.",
    alt: "3D render of caffeine energizing scalp serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/caffeine-energizing-scalp-serum.webp",
    group: "Scalp Health & Barrier Serums"
  },
  {
    id: "anagain-pea-sprout-hair-growth-serum",
    name: "Anagain Pea Sprout Hair Growth Serum",
    description:
      "A plant-powered hair growth support serum concept for natural, premium and clean beauty hair care brands.",
    activeOptions: [
      "Anagain-inspired pea sprout extract",
      "Pisum Sativum Pea Sprout Extract",
      "Panthenol",
      "Niacinamide",
      "Amino acids"
    ],
    positioning: "A natural fit for clean beauty, botanical and plant-powered hair growth support positioning.",
    alt: "3D render of Anagain pea sprout hair growth serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/anagain-pea-sprout-hair-growth-serum.webp",
    group: "Herbal / Ayurveda-Inspired Hair Serums"
  },
  {
    id: "biotin-tripeptide-strengthening-serum",
    name: "Biotin + Tripeptide Strengthening Serum",
    description:
      "A hair strengthening serum concept for weak, brittle and breakage-prone hair positioning.",
    activeOptions: [
      "Biotin",
      "Biotinoyl Tripeptide-1",
      "Panthenol",
      "Amino acid complex",
      "Hydrolyzed Protein"
    ],
    positioning: "Best for strengthening-led launches targeting brittle, weak-looking and breakage-prone hair.",
    alt: "3D render of biotin and tripeptide strengthening hair serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/biotin-tripeptide-strengthening-serum.webp",
    group: "Hair Strength & Repair Serums"
  },
  {
    id: "niacinamide-scalp-barrier-serum",
    name: "Niacinamide Scalp Barrier Serum",
    description:
      "A scalp barrier support serum concept for oily scalp, sensitive scalp and balanced scalp-care positioning.",
    activeOptions: [
      "Niacinamide",
      "Zinc PCA",
      "Panthenol",
      "Allantoin",
      "Prebiotic Inulin",
      "Aloe Vera"
    ],
    positioning: "Great for balanced scalp-care concepts aimed at oily, sensitive or comfort-focused routines.",
    alt: "3D render of niacinamide scalp barrier serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/niacinamide-scalp-barrier-serum.webp",
    group: "Scalp Health & Barrier Serums"
  },
  {
    id: "prebiotic-microbiome-scalp-serum",
    name: "Prebiotic Microbiome Scalp Serum",
    description:
      "A modern scalp microbiome serum concept for premium brands focused on scalp comfort and long-term scalp health.",
    activeOptions: [
      "Inulin",
      "Alpha-Glucan Oligosaccharide",
      "Niacinamide",
      "Zinc PCA",
      "Aloe Vera",
      "Panthenol"
    ],
    positioning: "Recommended for premium scalp comfort ranges with a microbiome and long-term care story.",
    alt: "3D render of prebiotic microbiome scalp serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/prebiotic-microbiome-scalp-serum.webp",
    group: "Scalp Health & Barrier Serums"
  },
  {
    id: "salicylic-acid-clarifying-scalp-serum",
    name: "Salicylic Acid Clarifying Scalp Serum",
    description:
      "A clarifying scalp serum concept for oily scalp, visible build-up and scalp freshness positioning.",
    activeOptions: [
      "Salicylic Acid",
      "Zinc PCA",
      "Niacinamide",
      "Tea Tree Extract",
      "Panthenol"
    ],
    positioning: "A practical option for clarifying scalp-care concepts focused on visible build-up and freshness.",
    alt: "3D render of salicylic acid clarifying scalp serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/salicylic-acid-clarifying-scalp-serum.webp",
    group: "Scalp Health & Barrier Serums"
  },
  {
    id: "anti-dandruff-cosmetic-scalp-serum",
    name: "Anti-Dandruff Cosmetic Scalp Serum",
    description:
      "A cosmetic flaky scalp-care serum concept for brands targeting visible flakes, scalp discomfort and scalp freshness.",
    activeOptions: [
      "Piroctone Olamine",
      "Climbazole",
      "Zinc PCA",
      "Tea Tree Extract",
      "Niacinamide",
      "Panthenol"
    ],
    positioning: "Suitable for cosmetic flaky-scalp and scalp-freshness ranges for regular care positioning.",
    alt: "3D render of anti dandruff cosmetic scalp serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/anti-dandruff-cosmetic-scalp-serum.webp",
    group: "Scalp Health & Barrier Serums"
  },
  {
    id: "ayurvedic-botanical-hair-growth-serum",
    name: "Ayurvedic Botanical Hair Growth Serum",
    description:
      "An Ayurveda-inspired botanical hair serum concept for traditional Indian hair-care positioning with modern premium packaging.",
    activeOptions: [
      "Bhringraj Extract",
      "Eclipta Prostrata Extract",
      "Amla Extract",
      "Emblica Officinalis Extract",
      "Brahmi Extract",
      "Hibiscus Extract",
      "Fenugreek Extract"
    ],
    positioning: "Ideal for Ayurveda-inspired, herbal and premium Indian hair-care storytelling.",
    alt: "3D render of Ayurvedic botanical hair growth serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/ayurvedic-botanical-hair-growth-serum.webp",
    group: "Herbal / Ayurveda-Inspired Hair Serums"
  },
  {
    id: "rosemary-mint-cooling-scalp-serum",
    name: "Rosemary + Mint Cooling Scalp Serum",
    description:
      "A refreshing scalp serum concept for brands targeting cooling scalp care, herbal freshness and root support.",
    activeOptions: [
      "Rosemary Extract",
      "Peppermint Extract",
      "Menthyl Lactate",
      "Caffeine",
      "Panthenol",
      "Niacinamide"
    ],
    positioning: "A strong choice for cooling scalp-care launches with herbal freshness and root support appeal.",
    alt: "3D render of rosemary mint cooling scalp serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/rosemary-mint-cooling-scalp-serum.webp",
    group: "Herbal / Ayurveda-Inspired Hair Serums"
  },
  {
    id: "onion-black-seed-hair-fall-control-serum",
    name: "Onion Black Seed Hair Fall Control Serum",
    description:
      "A premium herbal hair fall control serum concept inspired by onion and black seed hair-care trends.",
    activeOptions: [
      "Onion Extract",
      "Allium Cepa Bulb Extract",
      "Black Seed Extract",
      "Nigella Sativa Seed Extract",
      "Caffeine",
      "Panthenol"
    ],
    positioning: "Works well for mass-premium herbal concepts inspired by popular onion and black seed trends.",
    alt: "3D render of onion black seed hair fall control serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/onion-black-seed-hair-fall-control-serum.webp",
    group: "Herbal / Ayurveda-Inspired Hair Serums"
  },
  {
    id: "exosome-inspired-bioactive-scalp-serum",
    name: "Exosome-Inspired Bioactive Scalp Serum",
    description:
      "A futuristic biotech-inspired scalp serum concept for premium brands looking for advanced hair density and scalp-care positioning.",
    activeOptions: [
      "Plant exosome-inspired technology",
      "Extracellular vesicle-inspired active",
      "Peptides",
      "Niacinamide",
      "Panthenol",
      "Amino acids"
    ],
    positioning: "Best suited for futuristic biotech-led launches with an elevated scalp-care positioning angle.",
    alt: "3D render of exosome inspired bioactive scalp serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/exosome-inspired-bioactive-scalp-serum.webp",
    group: "Peptide & Biotech Scalp Serums"
  },
  {
    id: "bond-repair-anti-breakage-hair-serum",
    name: "Bond Repair Anti-Breakage Hair Serum",
    description:
      "A hair repair and anti-breakage serum concept for damaged hair, chemically treated hair and premium salon-care brands.",
    activeOptions: [
      "Hydrolyzed Keratin",
      "Amino acid complex",
      "Ceramide NP",
      "Panthenol",
      "Hair repair peptide systems",
      "Conditioning polymers"
    ],
    positioning: "Recommended for salon-style repair ranges focused on damage care and anti-breakage support.",
    alt: "3D render of bond repair anti breakage hair serum bottle and box labeled Your Brand.",
    image: "/images/hair-serums/bond-repair-anti-breakage-hair-serum.webp",
    group: "Hair Strength & Repair Serums"
  }
];

const groupedConcepts = [
  {
    title: "Hair Density & Growth Support Serums",
    ids: [
      "redensyl-hair-density-serum",
      "capixyl-peptide-hair-fall-control-serum",
      "procapil-root-activating-serum",
      "baicapil-botanical-hair-growth-serum",
      "multi-active-hair-growth-serum"
    ]
  },
  {
    title: "Peptide & Biotech Scalp Serums",
    ids: [
      "multi-peptide-hair-density-serum",
      "copper-peptide-scalp-repair-serum",
      "peptide-rosemary-root-revival-serum",
      "exosome-inspired-bioactive-scalp-serum"
    ]
  },
  {
    title: "Scalp Health & Barrier Serums",
    ids: [
      "caffeine-energizing-scalp-serum",
      "niacinamide-scalp-barrier-serum",
      "prebiotic-microbiome-scalp-serum",
      "salicylic-acid-clarifying-scalp-serum",
      "anti-dandruff-cosmetic-scalp-serum"
    ]
  },
  {
    title: "Herbal / Ayurveda-Inspired Hair Serums",
    ids: [
      "anagain-pea-sprout-hair-growth-serum",
      "ayurvedic-botanical-hair-growth-serum",
      "rosemary-mint-cooling-scalp-serum",
      "onion-black-seed-hair-fall-control-serum"
    ]
  },
  {
    title: "Hair Strength & Repair Serums",
    ids: [
      "biotin-tripeptide-strengthening-serum",
      "bond-repair-anti-breakage-hair-serum"
    ]
  }
];

const activeChips = [
  "Copper Tripeptide-1 / GHK-Cu",
  "Acetyl Tetrapeptide-3",
  "Biotinoyl Tripeptide-1",
  "Redensyl",
  "Capixyl",
  "Procapil",
  "Baicapil",
  "Anagain",
  "Caffeine",
  "Niacinamide",
  "Zinc PCA",
  "Rosemary Extract",
  "Pea Sprout Extract",
  "Piroctone Olamine",
  "Climbazole",
  "Salicylic Acid",
  "Bhringraj Extract",
  "Amla Extract",
  "Black Seed Extract",
  "Hydrolyzed Keratin",
  "Ceramide NP"
];

const whyChooseCards = [
  "Custom private label formulation support",
  "Trending active-led product concepts",
  "Cosmetic and derma-cosmetic positioning support",
  "Packaging and product concept support",
  "Scalable third-party manufacturing support",
  "SEO-friendly product concept library for brand launches",
  "Support for premium, herbal, salon, derma and cosmeceutical hair-care ranges"
];

const faqs = [
  {
    question: "Does Kiora CosmoTech manufacture private label hair serums?",
    answer:
      "Yes, Kiora CosmoTech supports private label and third-party manufacturing of hair serum concepts for cosmetic, derma-care, herbal, peptide, scalp-care and salon-positioned brands."
  },
  {
    question: "Can you develop Redensyl, Capixyl and Procapil hair serum concepts?",
    answer:
      "Yes, we can help brands develop active-led hair serum concepts based on Redensyl, Capixyl, Procapil, Baicapil, Anagain, peptides, caffeine, niacinamide and botanical extracts, subject to formulation feasibility and regulatory positioning."
  },
  {
    question: "Can I launch a copper peptide or GHK-Cu hair serum under my brand?",
    answer:
      "Yes, copper peptide and GHK-Cu inspired scalp serum concepts can be developed for premium derma-cosmetic brands depending on ingredient availability, positioning and product cost target."
  },
  {
    question: "Can you develop herbal or Ayurvedic hair serum concepts?",
    answer:
      "Yes, Kiora CosmoTech can support Ayurveda-inspired and botanical hair serum concepts using ingredients such as bhringraj, amla, brahmi, hibiscus, onion extract, black seed extract, rosemary and other plant-based actives."
  },
  {
    question: "Can you help with packaging and product concept?",
    answer:
      "Yes, product concept, ingredient positioning, packaging direction and product-page content support can be aligned as per your brand requirement."
  },
  {
    question: "Are these hair serum products ready-made formulas?",
    answer:
      "The concepts shown are product directions and manufacturing possibilities. Final formula, claim language, ingredient percentage and packaging will be customized based on your brand requirements, target price and applicable regulations."
  },
  {
    question: "What types of brands can launch these hair serums?",
    answer:
      "These hair serum concepts are suitable for D2C beauty brands, derma-cosmetic marketing companies, influencers, salon brands, herbal cosmetic brands and private label buyers."
  }
];

const keywordTagMap: Record<string, string[]> = {
  "redensyl-hair-density-serum": ["Redensyl hair serum manufacturer", "Hair density serum manufacturer India", "Private label hair serum manufacturer"],
  "capixyl-peptide-hair-fall-control-serum": ["Capixyl hair serum manufacturer", "Peptide hair fall serum manufacturer", "Third party hair serum manufacturer"],
  "procapil-root-activating-serum": ["Procapil hair serum manufacturer", "Root activating hair serum manufacturer", "Scalp serum manufacturer"],
  "baicapil-botanical-hair-growth-serum": ["Baicapil hair serum manufacturer", "Botanical hair growth serum manufacturer", "Plant based hair serum manufacturer"],
  "multi-active-hair-growth-serum": ["Advanced hair serum manufacturer", "Multi active hair growth serum manufacturer", "Cosmeceutical hair serum manufacturer"],
  "multi-peptide-hair-density-serum": ["Multi peptide hair serum manufacturer", "Peptide hair density serum manufacturer", "Derma hair serum manufacturer"],
  "copper-peptide-scalp-repair-serum": ["Copper peptide hair serum manufacturer", "GHK-Cu hair serum manufacturer", "Scalp repair serum manufacturer"],
  "peptide-rosemary-root-revival-serum": ["Rosemary hair serum manufacturer", "Peptide rosemary scalp serum manufacturer", "Private label hair serum manufacturer"],
  "caffeine-energizing-scalp-serum": ["Caffeine scalp serum manufacturer", "Energizing scalp serum manufacturer", "Hair care manufacturing in India"],
  "anagain-pea-sprout-hair-growth-serum": ["Anagain hair serum manufacturer", "Pea sprout extract hair serum manufacturer", "Botanical hair growth serum manufacturer"],
  "biotin-tripeptide-strengthening-serum": ["Biotin hair serum manufacturer", "Hair strengthening serum manufacturer", "Anti breakage hair serum manufacturer"],
  "niacinamide-scalp-barrier-serum": ["Niacinamide scalp serum manufacturer", "Scalp barrier serum manufacturer", "Sensitive scalp serum manufacturer"],
  "prebiotic-microbiome-scalp-serum": ["Microbiome scalp serum manufacturer", "Prebiotic scalp serum manufacturer", "Scalp comfort serum manufacturer"],
  "salicylic-acid-clarifying-scalp-serum": ["Salicylic acid scalp serum manufacturer", "Clarifying scalp serum manufacturer", "Oily scalp serum manufacturer"],
  "anti-dandruff-cosmetic-scalp-serum": ["Anti dandruff scalp serum manufacturer", "Flaky scalp serum manufacturer", "Cosmetic scalp serum manufacturer"],
  "ayurvedic-botanical-hair-growth-serum": ["Ayurvedic hair serum manufacturer", "Herbal hair growth serum manufacturer", "Bhringraj hair serum manufacturer"],
  "rosemary-mint-cooling-scalp-serum": ["Rosemary mint scalp serum manufacturer", "Cooling scalp serum manufacturer", "Herbal scalp serum manufacturer"],
  "onion-black-seed-hair-fall-control-serum": ["Onion black seed hair serum manufacturer", "Herbal hair fall control serum manufacturer", "Private label hair serum manufacturer"],
  "exosome-inspired-bioactive-scalp-serum": ["Exosome scalp serum manufacturer", "Biotech hair serum manufacturer", "Premium scalp serum manufacturer"],
  "bond-repair-anti-breakage-hair-serum": ["Bond repair hair serum manufacturer", "Damaged hair serum manufacturer", "Salon hair serum manufacturer"]
};

const internalLinks = [
  { label: "Cosmetic Manufacturing", href: "/contract-cosmetic-manufacturer-india", description: "Review structured manufacturing support for premium cosmetic categories." },
  { label: "Private Label Manufacturing", href: "/private-label-cosmetics-manufacturer-india", description: "Explore launch-ready private label manufacturing for your brand." },
  { label: "Third Party Manufacturing", href: "/third-party-cosmetic-manufacturing-india", description: "Understand third-party cosmetic manufacturing for growing B2B programs." },
  { label: "Hair Care Manufacturing", href: "/haircare-manufacturer-india", description: "Browse the wider haircare manufacturing portfolio." },
  { label: "Face Serum Manufacturing", href: "/face-serum-manufacturer", description: "See active-led skincare serum manufacturing for adjacent product planning." },
  { label: "Sunscreen Manufacturing", href: "/sunscreen-manufacturer", description: "Review another premium cosmetic category with product-led manufacturing detail." },
  { label: "Shampoo Manufacturing", href: "/shampoo-manufacturer", description: "Extend a scalp-care or salon range with shampoo manufacturing." },
  { label: "Contact Page", href: "/request-quote", description: "Share your product idea, quantity and launch plan with the Kiora team." }
];

const relatedCategories = [
  { label: "Face Serum Manufacturing", href: "/face-serum-manufacturer", description: "Extend your active-led range into premium skincare serums." },
  { label: "Sunscreen Manufacturing", href: "/sunscreen-manufacturer", description: "Build a derma-cosmetic routine with sunscreen concepts." },
  { label: "Shampoo Manufacturing", href: "/shampoo-manufacturer", description: "Pair scalp serum launches with shampoo manufacturing support." },
  { label: "Conditioner Manufacturing", href: "/request-quote?product=Conditioner%20Manufacturing", description: "Discuss conditioner concepts under the same hair-care program." },
  { label: "Hair Oil Manufacturing", href: "/hair-oil-manufacturer", description: "Add herbal or premium hair oil concepts to your brand range." },
  { label: "Face Wash Manufacturing", href: "/face-wash-manufacturer", description: "Explore adjacent cosmetic categories for D2C growth." },
  { label: "Moisturizer Manufacturing", href: "/moisturizer-manufacturer", description: "Plan wider skincare and personal care manufacturing." },
  { label: "Cosmetic Manufacturing", href: "/contract-cosmetic-manufacturer-india", description: "See broader cosmetic manufacturing support for India-focused brands." }
];

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/haircare-manufacturer-india" },
  { name: "Hair Serum Manufacturer in India", href: pagePath }
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Hair Serum Manufacturer in India | Kiora CosmoTech",
  description:
    "Premium private label and third-party hair serum manufacturing page for active-led, botanical, peptide, scalp-care and derma-cosmetic hair serum concepts.",
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
  name: "Hair Serum Manufacturing",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url
  },
  areaServed: "India",
  serviceType: [
    "Private Label Hair Serum Manufacturing",
    "Third Party Hair Serum Manufacturing",
    "Cosmetic Hair Serum Manufacturing"
  ],
  description:
    "Kiora CosmoTech offers private label and third-party manufacturing support for hair serum concepts including peptide hair serums, scalp serums, botanical serums, anti-dandruff cosmetic scalp serums, Ayurvedic hair serums and bond repair hair serums.",
  url: absoluteUrl(siteConfig.url, pagePath)
};

function HairSerumVisual({ concept }: { concept: HairSerumConcept }) {
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
          serviceSchema("Hair Serum Manufacturing", pageDescription, pagePath),
          detailedServiceSchema,
          faqSchema(faqs),
          webPageSchema
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <main>
        <ProductHeroBackground
          eyebrow="Premium hair-care manufacturing"
          title="Hair Serum Manufacturer in India"
          description={
            <p>
              Private label and third-party manufacturing for premium hair growth, scalp care, peptide, botanical, anti-dandruff, and derma-cosmetic hair serum concepts.
            </p>
          }
          detail={
            <p>
              Kiora CosmoTech develops customized hair serum concepts for modern cosmetic and derma-care brands, including active-led scalp serums, peptide hair density serums, botanical hair growth support serums, anti-breakage serums, scalp barrier serums, and luxury herbal hair-care products.
            </p>
          }
          actions={
            <>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-center font-semibold text-ivory transition hover:bg-charcoal sm:min-w-[250px]" href="/request-quote">
                Request Hair Serum Manufacturing Quote <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-charcoal/12 bg-white/84 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white sm:min-w-[220px]" href="#hair-serum-concepts">
                Explore Hair Serum Concepts
              </a>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-charcoal/12 bg-white/84 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white sm:min-w-[250px]" href="/custom-skincare-formulation">
                Request Custom Hair Serum Formulation
              </Link>
            </>
          }
          tags={trustBadges}
          imageSrc={resolvedHeroImage}
          imageAlt="Premium hair serum packaging visual for private label haircare manufacturing"
          imageCaption="Haircare Formula • Serum/Oil Packaging • Filling • Quality Review • Dispatch"
          fallbackTitle="Premium hair serum concepts"
          fallbackDescription="Scalp serums, peptide density concepts, botanical actives and luxury hair-care directions for modern brand launches."
          titleClassName="font-display text-[clamp(2.35rem,9vw,6rem)] font-semibold leading-[0.94] text-charcoal"
        />

        <section className="section-y bg-mist">
          <div className="container-padded grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-[1.6rem] bg-charcoal p-5 text-ivory shadow-sm sm:rounded-3xl sm:p-7">
              <h2 className="text-[1.8rem] font-semibold leading-tight sm:text-3xl">Private Label Hair Serum Manufacturing for Modern Hair Care Brands</h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ivory/78 md:leading-8">
                Kiora CosmoTech helps brands develop premium hair serum products based on trending cosmetic actives, branded ingredient positioning, botanical extracts, peptides, scalp-care actives and derma-cosmetic concepts.
              </p>
              <p className="mt-4 text-[0.98rem] leading-7 text-ivory/78 md:leading-8">
                The company supports brands from product concept to formulation development, packaging direction and manufacturing support so the final range feels premium, commercially relevant and launch-ready. Buyers exploring <Link className="font-semibold text-champagne underline decoration-champagne/40 underline-offset-4" href="/private-label-cosmetics-manufacturer-india">private label cosmetic manufacturing</Link> or <Link className="font-semibold text-champagne underline decoration-champagne/40 underline-offset-4" href="/third-party-cosmetic-manufacturing-india">third party hair care manufacturing</Link> can use this page to shortlist commercially viable serum directions.
              </p>
              <p className="mt-4 text-[0.98rem] leading-7 text-ivory/78 md:leading-8">
                For founders and established buyers alike, the focus stays on practical positioning: ingredient story, target audience, pricing band, packaging direction, claim language, batch planning and a product concept that can make sense for your category strategy.
              </p>
            </article>
            <article className="rounded-[1.6rem] border border-charcoal/10 bg-ivory p-5 shadow-sm sm:rounded-3xl sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Direct answer</p>
              <h2 className="mt-3 text-[1.8rem] font-semibold leading-tight text-charcoal sm:text-3xl">Hair serum manufacturing for B2B brand builders</h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                This page is designed for cosmetic brand owners, derma marketing companies, D2C beauty brands, influencers launching hair care brands, private label buyers, salon brands, Ayurvedic and herbal cosmetic brands, pharma-cosmetic marketing companies and export-oriented cosmetic buyers looking for a premium hair serum manufacturer in India.
              </p>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                From scalp serums positioned around peptides and density support to botanical, anti-dandruff and bond-repair concepts, the page is structured to help you shortlist a practical direction before you move into formula discussion, sampling and packaging planning. It also connects naturally with <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/shampoo-manufacturer">shampoo manufacturing</Link>, <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/face-serum-manufacturer">face serum manufacturing</Link>, <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/sunscreen-manufacturer">sunscreen manufacturing</Link> and wider <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/contract-cosmetic-manufacturer-india">cosmetic manufacturing in India</Link>.
              </p>
            </article>
          </div>
        </section>

        <section className="section-y" id="hair-serum-concepts">
          <div className="container-padded">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Product concepts</p>
              <h2 className="section-title mt-3 font-display font-semibold text-charcoal">
                Trending Hair Serum Formulation Concepts We Can Develop
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:mt-5 md:leading-8">
                Explore premium hair serum concepts that can be customized for your brand based on target audience, price segment, ingredient positioning, packaging style and regulatory category.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
              {concepts.map((concept) => (
                <article className="rounded-[1.6rem] border border-charcoal/10 bg-ivory p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-premium sm:rounded-[2rem] sm:p-5" id={concept.id} key={concept.id}>
                  <HairSerumVisual concept={concept} />
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
                  <h2 className="mt-3 text-[1.7rem] font-semibold leading-tight sm:text-[2.15rem]">Need a custom scalp-care or peptide-led serum direction?</h2>
                  <p className="mt-3 text-[0.98rem] leading-7 text-ivory/78">
                    Share your target audience, packaging idea and price band. The Kiora team can help you move from concept shortlisting into a more structured private label hair serum brief.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-champagne px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-ivory" href="/request-quote">
                    Request Hair Serum Manufacturing Quote
                  </Link>
                  <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-ivory/20 px-6 py-3 text-center font-semibold text-ivory transition hover:bg-ivory/10" href="/custom-skincare-formulation">
                    Request Custom Hair Serum Formulation
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
                Organize your launch around the right serum category
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
                        <a className="rounded-full bg-mist px-3 py-2.5 text-[13px] font-semibold text-charcoal transition hover:bg-charcoal hover:text-ivory sm:px-4 sm:py-3 sm:text-sm" href={`#${concept.id}`} key={concept.id}>
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
                Kiora CosmoTech can develop customized hair serum formulations using trending cosmetic actives such as Copper Tripeptide-1 / GHK-Cu, Acetyl Tetrapeptide-3, Biotinoyl Tripeptide-1, caffeine, niacinamide, zinc PCA, rosemary extract, pea sprout extract, prebiotic inulin, botanical extracts, amino acids and advanced hair-repair peptide systems depending on brand positioning, regulatory category and target price.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
              {activeChips.map((chip) => (
                <span className="rounded-full border border-charcoal/10 bg-mist px-3 py-2.5 text-[13px] font-semibold text-charcoal sm:px-4 sm:py-3 sm:text-sm" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Why Kiora</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                Why Choose Kiora CosmoTech for Hair Serum Manufacturing?
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:mt-5 md:leading-8">
                The category needs more than a generic serum base and a label. Brands usually need help narrowing the right active story, mapping price-point expectations, aligning packaging to audience and preparing a concept that can work across D2C, salon, derma-care or export-led briefs.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
              {whyChooseCards.map((item) => (
                <article className="rounded-[1.6rem] border border-charcoal/10 bg-ivory p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-premium sm:rounded-3xl sm:p-6" key={item}>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-teal font-semibold text-ivory">
                    <CheckCircle2 size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-charcoal sm:text-xl">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Process</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                From Concept to Finished Hair Serum
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:mt-5 md:leading-8">
                Our workflow is built for private label and third-party launches where formula direction, ingredient story, packaging planning and dispatch timing all need to stay aligned for a smoother brand launch.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Product concept finalization",
                "Active and claim positioning",
                "Formula development and sample approval",
                "Packaging selection and artwork guidance",
                "Batch manufacturing",
                "Quality checks",
                "Filling, packing and dispatch"
              ].map((step, index) => (
                <article className="rounded-[1.6rem] border border-charcoal/10 bg-ivory p-4 shadow-sm sm:rounded-3xl sm:p-5" key={step}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal font-semibold text-ivory">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-semibold leading-snug text-charcoal sm:text-lg">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container-padded">
            <article className="rounded-[1.6rem] border border-charcoal/10 bg-mist p-5 shadow-sm sm:rounded-3xl sm:p-6">
              <h2 className="text-[1.35rem] font-semibold leading-tight text-charcoal sm:text-2xl">Claim and customization note</h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/75 md:leading-8">
                All product concepts shown are customizable private label / third-party manufacturing possibilities. Final formulation, ingredient percentage, claim language, fragrance, packaging and regulatory positioning can be customized as per your brand requirement and applicable cosmetic regulations.
              </p>
            </article>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">FAQ</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                Hair Serum Manufacturing FAQ
              </h2>
            </div>
            <div className="mt-10">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Internal links</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                Continue planning your manufacturing range
              </h2>
            </div>
            <div className="mt-10">
              <InternalLinkGrid links={internalLinks} />
            </div>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Related categories</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                Related Product Categories
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                Hair serum projects often sit inside a larger brand range. Use these routes to plan adjacent categories or contact Kiora CosmoTech for a multi-product manufacturing brief.
              </p>
            </div>
            <div className="mt-10">
              <InternalLinkGrid links={relatedCategories} />
            </div>
          </div>
        </section>

        <section className="section-y bg-charcoal pb-24 text-ivory">
          <div className="container-padded grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-champagne">Final CTA</p>
              <h2 className="section-title mt-3 font-display font-semibold">
                Launch Your Own Hair Serum Brand With Kiora CosmoTech
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ivory/78 md:mt-5 md:text-[1.05rem] md:leading-8">
                Whether you want to launch a Redensyl hair serum, peptide scalp serum, rosemary serum, anti-dandruff scalp serum, Ayurvedic hair serum or luxury bond repair serum, Kiora CosmoTech can help you convert your product idea into a premium private label hair-care range.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-champagne px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-ivory" href="/request-quote">
                Request Manufacturing Quote
              </Link>
              <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ivory/30 px-6 py-3 text-center font-semibold text-ivory transition hover:bg-ivory/10" href={whatsappHref("Hello Kiora CosmoTech, I want to discuss a private label hair serum concept for my brand.")}>
                <MessageCircle size={18} aria-hidden="true" /> Talk on WhatsApp
              </a>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-ivory/30 px-6 py-3 text-center font-semibold text-ivory transition hover:bg-ivory/10" href="/custom-skincare-formulation">
                Request Custom Hair Serum Formulation
              </Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-ivory/30 px-6 py-3 text-center font-semibold text-ivory transition hover:bg-ivory/10" href="/haircare-manufacturer-india">
                Explore More Product Categories
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
