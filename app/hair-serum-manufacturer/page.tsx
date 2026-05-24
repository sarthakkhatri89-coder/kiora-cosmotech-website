import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import InternalLinkGrid from "@/components/InternalLinkGrid";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { siteConfig, whatsappHref } from "@/data/siteConfig";
import { createMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, manufacturerSchema, serviceSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

type HairSerumConcept = {
  id: string;
  name: string;
  description: string;
  activeOptions: string[];
  tags: string[];
  alt: string;
  image: string;
  group: string;
};

const pagePath = "/hair-serum-manufacturer";

export const metadata: Metadata = createMetadata({
  title: "Hair Serum Manufacturer in India | Private Label Hair Growth & Scalp Serum Manufacturing",
  description:
    "Kiora CosmoTech offers private label and third-party hair serum manufacturing in India, including Redensyl, Capixyl, Procapil, peptide, copper peptide, rosemary, niacinamide, prebiotic, anti-dandruff, Ayurvedic and bond repair hair serum concepts for modern cosmetic brands.",
  path: pagePath,
  image: "/og/kiora-og.png"
});

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
    tags: [
      "Redensyl hair serum manufacturer",
      "Redensyl hair growth serum manufacturer",
      "Hair density serum manufacturer India",
      "Private label Redensyl hair serum",
      "Third party hair serum manufacturer"
    ],
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
    tags: [
      "Capixyl hair serum manufacturer",
      "Acetyl Tetrapeptide-3 hair serum manufacturer",
      "Peptide hair fall serum manufacturer",
      "Capixyl peptide serum manufacturer",
      "Hair fall control serum manufacturer"
    ],
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
    tags: [
      "Procapil hair serum manufacturer",
      "Biotinoyl Tripeptide-1 hair serum manufacturer",
      "Root activating hair serum manufacturer",
      "Procapil scalp serum manufacturer",
      "Hair root strengthening serum manufacturer"
    ],
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
    tags: [
      "Baicapil hair serum manufacturer",
      "Botanical hair growth serum manufacturer",
      "Scutellaria Baicalensis hair serum manufacturer",
      "Baicalin hair serum manufacturer",
      "Plant based hair serum manufacturer"
    ],
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
    tags: [
      "Redensyl Capixyl Procapil hair serum manufacturer",
      "18% hair growth active serum manufacturer",
      "Multi active hair growth serum manufacturer",
      "Redensyl Capixyl Procapil Anagain Baicapil hair serum",
      "Advanced hair serum manufacturer"
    ],
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
    tags: [
      "Multi peptide hair serum manufacturer",
      "Peptide hair density serum manufacturer",
      "Copper Tripeptide-1 hair serum manufacturer",
      "GHK-Cu hair serum manufacturer",
      "Biomimetic peptide hair serum manufacturer"
    ],
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
    tags: [
      "Copper Tripeptide-1 GHK-Cu hair serum manufacturer",
      "Copper Peptide 1 hair serum manufacturer",
      "GHK-Cu scalp serum manufacturer",
      "Copper peptide hair serum manufacturer",
      "Blue copper peptide scalp serum manufacturer"
    ],
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
    tags: [
      "Rosemary peptide hair serum manufacturer",
      "Rosemary hair serum manufacturer",
      "Peptide rosemary scalp serum manufacturer",
      "Acetyl Tetrapeptide-3 rosemary hair serum",
      "Rosemary root revival serum manufacturer"
    ],
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
    tags: [
      "Caffeine hair serum manufacturer",
      "Caffeine scalp serum manufacturer",
      "Caffeine niacinamide hair serum manufacturer",
      "Energizing scalp serum manufacturer",
      "Caffeine hair growth serum manufacturer"
    ],
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
    tags: [
      "Anagain hair serum manufacturer",
      "Pea sprout extract hair serum manufacturer",
      "Pisum Sativum hair serum manufacturer",
      "Plant stem cell hair serum manufacturer",
      "Botanical hair growth serum manufacturer"
    ],
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
    tags: [
      "Biotin hair serum manufacturer",
      "Biotinoyl Tripeptide-1 hair serum manufacturer",
      "Biotin peptide hair serum manufacturer",
      "Hair strengthening serum manufacturer",
      "Anti breakage hair serum manufacturer"
    ],
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
    tags: [
      "Niacinamide scalp serum manufacturer",
      "Scalp barrier serum manufacturer",
      "Zinc PCA scalp serum manufacturer",
      "Oily scalp balancing serum manufacturer",
      "Sensitive scalp serum manufacturer"
    ],
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
    tags: [
      "Prebiotic scalp serum manufacturer",
      "Microbiome scalp serum manufacturer",
      "Inulin scalp serum manufacturer",
      "Alpha-Glucan Oligosaccharide scalp serum manufacturer",
      "Scalp microbiome balancing serum manufacturer"
    ],
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
    tags: [
      "Salicylic acid scalp serum manufacturer",
      "BHA scalp serum manufacturer",
      "Oily scalp serum manufacturer",
      "Scalp buildup serum manufacturer",
      "Clarifying scalp serum manufacturer"
    ],
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
    tags: [
      "Anti dandruff scalp serum manufacturer",
      "Piroctone Olamine scalp serum manufacturer",
      "Climbazole scalp serum manufacturer",
      "Flaky scalp serum manufacturer",
      "Cosmetic anti dandruff serum manufacturer"
    ],
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
    tags: [
      "Ayurvedic hair serum manufacturer",
      "Bhringraj hair serum manufacturer",
      "Amla hair serum manufacturer",
      "Brahmi hair serum manufacturer",
      "Herbal hair growth serum manufacturer",
      "Ayurvedic hair growth serum manufacturer"
    ],
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
    tags: [
      "Rosemary mint scalp serum manufacturer",
      "Rosemary hair serum manufacturer",
      "Peppermint scalp serum manufacturer",
      "Menthyl Lactate scalp serum manufacturer",
      "Cooling scalp serum manufacturer"
    ],
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
    tags: [
      "Onion hair serum manufacturer",
      "Onion black seed hair serum manufacturer",
      "Allium Cepa hair serum manufacturer",
      "Nigella Sativa hair serum manufacturer",
      "Herbal hair fall control serum manufacturer"
    ],
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
    tags: [
      "Exosome scalp serum manufacturer",
      "Plant exosome hair serum manufacturer",
      "Exosome inspired scalp serum manufacturer",
      "Bioactive peptide scalp serum manufacturer",
      "Biotech hair serum manufacturer"
    ],
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
    tags: [
      "Bond repair hair serum manufacturer",
      "Anti breakage hair serum manufacturer",
      "Hydrolyzed Keratin hair serum manufacturer",
      "Ceramide NP hair serum manufacturer",
      "Hair repair peptide serum manufacturer",
      "Damaged hair serum manufacturer"
    ],
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

function hasPublicImage(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

function HairSerumVisual({ concept }: { concept: HairSerumConcept }) {
  const imageExists = hasPublicImage(concept.image);

  if (imageExists) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-charcoal/10 bg-white">
        <Image
          src={concept.image}
          alt={concept.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </div>
    );
  }

  return (
    <div
      className="cosmetic-visual relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-charcoal/10 p-5"
      role="img"
      aria-label={concept.alt}
    >
      <div className="product-bottle left-[14%] h-44" />
      <div className="product-bottle left-[42%] h-52" />
      <div className="texture-swatch right-8 top-10 h-20 w-20" />
      <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-ivory/92 p-4 shadow-premium">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Your Brand</p>
        <h3 className="mt-2 text-lg font-semibold text-charcoal">{concept.name}</h3>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <SchemaJsonLd
        data={[
          manufacturerSchema(siteConfig.name, pagePath),
          breadcrumbSchema(crumbs),
          serviceSchema("Hair Serum Manufacturing", metadata.description as string, pagePath),
          faqSchema(faqs),
          webPageSchema
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <main>
        <section className="overflow-hidden bg-white">
          <div className="container-padded grid gap-10 py-16 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-teal">Premium hair-care manufacturing</p>
              <h1 className="font-display text-[clamp(2.9rem,7vw,6rem)] font-semibold leading-none text-charcoal">
                Hair Serum Manufacturer in India
              </h1>
              <p className="mt-6 max-w-3xl text-[1.08rem] leading-8 text-ink/78 md:text-xl">
                Private label and third-party manufacturing for premium hair growth, scalp care, peptide, botanical, anti-dandruff, and derma-cosmetic hair serum concepts.
              </p>
              <p className="mt-5 max-w-3xl leading-8 text-ink/72">
                Kiora CosmoTech develops customized hair serum concepts for modern cosmetic and derma-care brands, including active-led scalp serums, peptide hair density serums, botanical hair growth support serums, anti-breakage serums, scalp barrier serums, and luxury herbal hair-care products.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 text-center font-semibold text-ivory transition hover:bg-charcoal sm:min-w-[250px]" href="/request-quote">
                  Request Hair Serum Manufacturing Quote <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-charcoal/12 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-mist sm:min-w-[220px]" href="#hair-serum-concepts">
                  Explore Hair Serum Concepts
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {trustBadges.map((badge) => (
                  <span className="rounded-full border border-charcoal/10 bg-mist px-3 py-2 text-xs font-semibold text-charcoal" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="cosmetic-visual relative min-h-[420px] overflow-hidden rounded-[2rem] border border-charcoal/10 p-5 shadow-premium">
              <div className="product-bottle left-[14%] h-44" />
              <div className="product-bottle left-[38%] h-60" />
              <div className="product-bottle left-[66%] h-40" />
              <div className="texture-swatch right-8 top-12 h-28 w-28" />
              <div className="texture-swatch bottom-20 left-10 h-16 w-16" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.8rem] bg-charcoal/94 p-5 text-ivory shadow-premium">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-champagne">Hair serum concept library</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "Peptide and density-positioned serum concepts",
                    "Scalp comfort and barrier support concepts",
                    "Botanical and Ayurveda-inspired launches",
                    "Packaging, positioning and scale-up support"
                  ].map((item) => (
                    <div className="flex items-start gap-2 text-sm text-ivory/82" key={item}>
                      <CheckCircle2 className="mt-0.5 text-champagne" size={16} aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-3xl bg-charcoal p-7 text-ivory shadow-sm">
              <h2 className="text-3xl font-semibold">Private Label Hair Serum Manufacturing for Modern Hair Care Brands</h2>
              <p className="mt-4 leading-8 text-ivory/78">
                Kiora CosmoTech helps brands develop premium hair serum products based on trending cosmetic actives, branded ingredient positioning, botanical extracts, peptides, scalp-care actives and derma-cosmetic concepts.
              </p>
              <p className="mt-4 leading-8 text-ivory/78">
                The company supports brands from product concept to formulation development, packaging direction and manufacturing support so the final range feels premium, commercially relevant and launch-ready.
              </p>
              <p className="mt-4 leading-8 text-ivory/78">
                For founders and established buyers alike, the focus stays on practical positioning: ingredient story, target audience, pricing band, packaging direction, claim language, batch planning and a product concept that can make sense for your category strategy.
              </p>
            </article>
            <article className="rounded-3xl border border-charcoal/10 bg-ivory p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Direct answer</p>
              <h2 className="mt-3 text-3xl font-semibold text-charcoal">Hair serum manufacturing for B2B brand builders</h2>
              <p className="mt-4 leading-8 text-ink/74">
                This page is designed for cosmetic brand owners, derma marketing companies, D2C beauty brands, influencers launching hair care brands, private label buyers, salon brands, Ayurvedic and herbal cosmetic brands, pharma-cosmetic marketing companies and export-oriented cosmetic buyers looking for a premium hair serum manufacturer in India.
              </p>
              <p className="mt-4 leading-8 text-ink/74">
                From scalp serums positioned around peptides and density support to botanical, anti-dandruff and bond-repair concepts, the page is structured to help you shortlist a practical direction before you move into formula discussion, sampling and packaging planning.
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
              <p className="mt-5 leading-8 text-ink/74">
                Explore premium hair serum concepts that can be customized for your brand based on target audience, price segment, ingredient positioning, packaging style and regulatory category.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {concepts.map((concept) => (
                <article className="rounded-[2rem] border border-charcoal/10 bg-ivory p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-premium" id={concept.id} key={concept.id}>
                  <HairSerumVisual concept={concept} />
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">{concept.group}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-charcoal">{concept.name}</h3>
                    <p className="mt-3 leading-7 text-ink/74">{concept.description}</p>
                  </div>
                  <div className="mt-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/72">Key active options</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {concept.activeOptions.map((item) => (
                        <span className="rounded-full bg-mist px-3 py-2 text-xs font-semibold text-charcoal" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal/72">SEO keyword tags</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {concept.tags.map((tag) => (
                        <span className="rounded-full border border-charcoal/10 bg-white px-3 py-2 text-xs text-ink/75" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-charcoal px-5 py-3 text-center font-semibold text-ivory transition hover:bg-teal"
                    href={`/request-quote?product=${encodeURIComponent(concept.name)}`}
                  >
                    Develop This Product With Your Brand
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Product grouping</p>
              <h2 className="mt-3 text-[clamp(2.2rem,4.5vw,4.3rem)] font-display font-semibold leading-none text-charcoal">
                Organize your launch around the right serum category
              </h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {groupedConcepts.map((group) => (
                <article className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm" key={group.title}>
                  <h3 className="text-2xl font-semibold text-charcoal">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.ids.map((id) => {
                      const concept = concepts.find((item) => item.id === id)!;
                      return (
                        <a className="rounded-full bg-mist px-4 py-3 text-sm font-semibold text-charcoal transition hover:bg-charcoal hover:text-ivory" href={`#${concept.id}`} key={concept.id}>
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
              <h2 className="mt-3 text-[clamp(2.2rem,4.5vw,4.3rem)] font-display font-semibold leading-none text-charcoal">
                Available Active &amp; INCI-Based Customization Options
              </h2>
              <p className="mt-5 leading-8 text-ink/74">
                Kiora CosmoTech can develop customized hair serum formulations using trending cosmetic actives such as Copper Tripeptide-1 / GHK-Cu, Acetyl Tetrapeptide-3, Biotinoyl Tripeptide-1, caffeine, niacinamide, zinc PCA, rosemary extract, pea sprout extract, prebiotic inulin, botanical extracts, amino acids and advanced hair-repair peptide systems depending on brand positioning, regulatory category and target price.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {activeChips.map((chip) => (
                <span className="rounded-full border border-charcoal/10 bg-mist px-4 py-3 text-sm font-semibold text-charcoal" key={chip}>
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
              <h2 className="mt-3 text-[clamp(2.2rem,4.5vw,4.3rem)] font-display font-semibold leading-none text-charcoal">
                Why Choose Kiora CosmoTech for Hair Serum Manufacturing?
              </h2>
              <p className="mt-5 leading-8 text-ink/74">
                The category needs more than a generic serum base and a label. Brands usually need help narrowing the right active story, mapping price-point expectations, aligning packaging to audience and preparing a concept that can work across D2C, salon, derma-care or export-led briefs.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {whyChooseCards.map((item) => (
                <article className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium" key={item}>
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-teal font-semibold text-ivory">
                    <CheckCircle2 size={20} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Process</p>
              <h2 className="mt-3 text-[clamp(2.2rem,4.5vw,4.3rem)] font-display font-semibold leading-none text-charcoal">
                From Concept to Finished Hair Serum
              </h2>
              <p className="mt-5 leading-8 text-ink/74">
                Our workflow is built for private label and third-party launches where formula direction, ingredient story, packaging planning and dispatch timing all need to stay aligned for a smoother brand launch.
              </p>
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
                <article className="rounded-3xl border border-charcoal/10 bg-ivory p-5 shadow-sm" key={step}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal font-semibold text-ivory">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container-padded">
            <article className="rounded-3xl border border-charcoal/10 bg-mist p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-charcoal">Claim and customization note</h2>
              <p className="mt-4 leading-8 text-ink/75">
                All product concepts shown are customizable private label / third-party manufacturing possibilities. Final formulation, ingredient percentage, claim language, fragrance, packaging and regulatory positioning can be customized as per your brand requirement and applicable cosmetic regulations.
              </p>
            </article>
          </div>
        </section>

        <section className="section-y bg-mist">
          <div className="container-padded">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">FAQ</p>
              <h2 className="mt-3 text-[clamp(2.2rem,4.5vw,4.3rem)] font-display font-semibold leading-none text-charcoal">
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
              <h2 className="mt-3 text-[clamp(2.2rem,4.5vw,4.3rem)] font-display font-semibold leading-none text-charcoal">
                Continue planning your manufacturing range
              </h2>
            </div>
            <div className="mt-10">
              <InternalLinkGrid links={internalLinks} />
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
              <p className="mt-5 text-[1.05rem] leading-8 text-ivory/78">
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
