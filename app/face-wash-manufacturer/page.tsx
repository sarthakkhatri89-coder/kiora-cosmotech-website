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
import { breadcrumbSchema, faqSchema, manufacturerSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

type FaceWashConcept = {
  id: string;
  name: string;
  formatBadge: string;
  description: string;
  activeOptions: string[];
  alt: string;
  image: string;
  group: string;
};

const pagePath = "/face-wash-manufacturer";
const pageTitle = "Face Wash Manufacturer in India | Private Label Cleanser";
const pageDescription =
  "Private label and third-party face wash manufacturing in India for cream cleansers, gel cleansers, oil-control face wash, microbiome cleansers and custom cleanser concepts.";
const ogTitle = "Face Wash Manufacturer in India | Kiora CosmoTech";
const ogDescription =
  "Explore premium private label face wash and cleanser concepts including cream cleansers, non-foaming cleansers, gel-to-foam cleansers, oil-to-milk cleansers, cleansing balms, enzyme cleansers, microbiome cleansers, acne-control face wash and luxury botanical face washes.";
const preferredOgImage = "/images/product/face-wash-hero.webp";

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
const resolvedHeroImage = resolvePublicAsset("/images/product/face-wash-hero.webp");

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
        alt: "Face wash manufacturer in India product concept visual"
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
  "Custom Cleanser Formulation Support",
  "Packaging & Brand Development Support",
  "Modern Cleanser Format Development"
];

const concepts: FaceWashConcept[] = [
  {
    id: "barrier-repair-cream-cleanser",
    name: "Barrier Repair Cream Cleanser",
    formatBadge: "Non-Foaming Cream Cleanser",
    description:
      "A premium non-foaming cream cleanser concept for dry, sensitive and barrier-compromised skin positioning.",
    activeOptions: ["Ceramide NP", "Cholesterol-Inspired Lipid Blend", "Panthenol", "Glycerin", "Oat Extract"],
    alt: "3D render of barrier repair cream cleanser bottle and box labeled Your Brand.",
    image: "/images/face-wash/barrier-repair-cream-cleanser.webp",
    group: "Barrier, Sensitive & Non-Foaming Cleansers"
  },
  {
    id: "oat-milk-non-foaming-cleanser",
    name: "Oat Milk Non-Foaming Cleanser",
    formatBadge: "Milky No-Foam Cleanser",
    description:
      "An ultra-gentle daily cleanser concept for sensitive, dry and easily irritated skin positioning.",
    activeOptions: ["Colloidal Oat", "Oat Extract", "Beta-Glucan", "Bisabolol", "Panthenol", "Sodium Hyaluronate"],
    alt: "3D render of oat milk non foaming cleanser bottle and box labeled Your Brand.",
    image: "/images/face-wash/oat-milk-non-foaming-cleanser.webp",
    group: "Barrier, Sensitive & Non-Foaming Cleansers"
  },
  {
    id: "ceramide-hyaluronic-hydrating-cleanser",
    name: "Ceramide + Hyaluronic Hydrating Cleanser",
    formatBadge: "Hydrating Cream-Gel Cleanser",
    description:
      "A dermatology-style hydrating cleanser concept for dry, normal and sensitive skin positioning.",
    activeOptions: ["Ceramide NP", "Hyaluronic Acid", "Glycerin", "Panthenol", "Niacinamide"],
    alt: "3D render of ceramide and hyaluronic hydrating cleanser bottle and box labeled Your Brand.",
    image: "/images/face-wash/ceramide-hyaluronic-hydrating-cleanser.webp",
    group: "Barrier, Sensitive & Non-Foaming Cleansers"
  },
  {
    id: "amino-acid-ph-55-gentle-face-wash",
    name: "Amino Acid pH 5.5 Gentle Face Wash",
    formatBadge: "Low-Foam Gentle Gel Cleanser",
    description:
      "A mild daily cleanser concept for all skin types, including sensitive-skin and sulphate-free style positioning.",
    activeOptions: ["Amino Acid Surfactants", "Betaine", "Panthenol", "Allantoin", "Aloe Vera"],
    alt: "3D render of amino acid pH 5.5 gentle face wash bottle and box labeled Your Brand.",
    image: "/images/face-wash/amino-acid-ph-55-gentle-face-wash.webp",
    group: "Barrier, Sensitive & Non-Foaming Cleansers"
  },
  {
    id: "gel-to-foam-daily-cleanser",
    name: "Gel-to-Foam Daily Cleanser",
    formatBadge: "Gel-to-Foam Cleanser",
    description:
      "A modern daily cleanser concept that starts as a fresh gel and converts into soft foam for normal-to-oily and combination skin positioning.",
    activeOptions: ["Mild Surfactant Blend", "Glycerin", "Panthenol", "Green Tea", "Niacinamide"],
    alt: "3D render of gel to foam daily cleanser bottle and box labeled Your Brand.",
    image: "/images/face-wash/gel-to-foam-daily-cleanser.webp",
    group: "Modern Cleanser Formats"
  },
  {
    id: "oil-to-milk-makeup-removing-cleanser",
    name: "Oil-to-Milk Makeup Removing Cleanser",
    formatBadge: "Oil-to-Milk Cleanser",
    description:
      "A premium first-cleanse concept for sunscreen, makeup and long-wear product removal.",
    activeOptions: ["Squalane", "Lightweight Esters", "Vitamin E", "Sunflower Oil", "Mild Emulsifier System"],
    alt: "3D render of oil to milk makeup removing cleanser bottle and box labeled Your Brand.",
    image: "/images/face-wash/oil-to-milk-makeup-removing-cleanser.webp",
    group: "Modern Cleanser Formats"
  },
  {
    id: "cleansing-balm-to-milk-face-cleanser",
    name: "Cleansing Balm-to-Milk Face Cleanser",
    formatBadge: "Balm-to-Milk Cleanser",
    description:
      "A luxury double-cleansing balm concept that melts into oil and rinses as milk for makeup, sunscreen and pollution removal positioning.",
    activeOptions: ["Shea Butter", "Squalane", "Vitamin E", "Sunflower Wax", "Mild Emulsifier Blend"],
    alt: "3D render of cleansing balm to milk face cleanser jar and box labeled Your Brand.",
    image: "/images/face-wash/cleansing-balm-to-milk-face-cleanser.webp",
    group: "Modern Cleanser Formats"
  },
  {
    id: "micellar-gel-cleanser",
    name: "Micellar Gel Cleanser",
    formatBadge: "Micellar Gel Cleanser",
    description:
      "A gentle quick-cleanse concept for urban consumers, sensitive-skin users and light daily cleansing routines.",
    activeOptions: ["Micellar Surfactant System", "Glycerin", "Panthenol", "Cucumber Extract", "Allantoin"],
    alt: "3D render of micellar gel cleanser bottle and box labeled Your Brand.",
    image: "/images/face-wash/micellar-gel-cleanser.webp",
    group: "Modern Cleanser Formats"
  },
  {
    id: "whipped-cream-hydrating-cleanser",
    name: "Whipped Cream Hydrating Cleanser",
    formatBadge: "Whipped Cream Cleanser",
    description:
      "A luxury sensory cleanser concept for dry, normal and premium skincare users who prefer a rich creamy cleansing experience.",
    activeOptions: ["Hyaluronic Acid", "Vitamin B5", "Shea Butter", "Sunflower Oil", "Oat Extract"],
    alt: "3D render of whipped cream hydrating cleanser tube and box labeled Your Brand.",
    image: "/images/face-wash/whipped-cream-hydrating-cleanser.webp",
    group: "Premium Sensory Cleansers"
  },
  {
    id: "cloud-foam-mousse-face-wash",
    name: "Cloud Foam Mousse Face Wash",
    formatBadge: "Foam Pump / Mousse Cleanser",
    description:
      "A soft mousse cleanser concept for daily cleansing, premium sensorial appeal and modern D2C skincare positioning.",
    activeOptions: ["Mild Surfactants", "Glycerin", "Panthenol", "Amino Acids", "Aloe Vera"],
    alt: "3D render of cloud foam mousse face wash bottle and box labeled Your Brand.",
    image: "/images/face-wash/cloud-foam-mousse-face-wash.webp",
    group: "Modern Cleanser Formats"
  },
  {
    id: "enzyme-powder-face-cleanser",
    name: "Enzyme Powder Face Cleanser",
    formatBadge: "Water-Activated Powder Cleanser",
    description:
      "A water-activated powder cleanser concept for travel-friendly, gentle exfoliation and waterless beauty positioning.",
    activeOptions: ["Papain", "Bromelain", "Rice Powder", "Oat Flour", "Amino Acid Surfactant Powder"],
    alt: "3D render of enzyme powder face cleanser bottle and box labeled Your Brand.",
    image: "/images/face-wash/enzyme-powder-face-cleanser.webp",
    group: "Modern Cleanser Formats"
  },
  {
    id: "papaya-pineapple-enzyme-gel-cleanser",
    name: "Papaya + Pineapple Enzyme Gel Cleanser",
    formatBadge: "Enzyme Gel Cleanser",
    description:
      "A gentle glow cleanser concept for dull and rough-looking skin positioning.",
    activeOptions: ["Papaya Extract", "Papain", "Pineapple Extract", "Bromelain", "Aloe Vera", "Panthenol"],
    alt: "3D render of papaya and pineapple enzyme gel cleanser bottle and box labeled Your Brand.",
    image: "/images/face-wash/papaya-pineapple-enzyme-gel-cleanser.webp",
    group: "Brightening & Glow Cleansers"
  },
  {
    id: "rice-water-bright-barrier-cleanser",
    name: "Rice Water Bright Barrier Cleanser",
    formatBadge: "K-Beauty Soft Cleanser",
    description:
      "A K-beauty inspired bright barrier cleanser concept for soft, fresh and comfortable skin-feel positioning.",
    activeOptions: ["Rice Water Extract", "Ceramide NP", "Niacinamide", "Panthenol", "Amino Acid Surfactants"],
    alt: "3D render of rice water bright barrier cleanser bottle and box labeled Your Brand.",
    image: "/images/face-wash/rice-water-bright-barrier-cleanser.webp",
    group: "Brightening & Glow Cleansers"
  },
  {
    id: "cica-centella-calming-cleanser",
    name: "Cica Centella Calming Cleanser",
    formatBadge: "Calming Low-Foam Cleanser",
    description:
      "A calming cleanser concept for sensitive skin, redness-looking skin and skin comfort positioning.",
    activeOptions: ["Centella Asiatica", "Madecassoside", "Asiaticoside", "Panthenol", "Beta-Glucan"],
    alt: "3D render of cica centella calming cleanser bottle and box labeled Your Brand.",
    image: "/images/face-wash/cica-centella-calming-cleanser.webp",
    group: "Barrier, Sensitive & Non-Foaming Cleansers"
  },
  {
    id: "postbiotic-microbiome-gentle-cleanser",
    name: "Postbiotic Microbiome Gentle Cleanser",
    formatBadge: "Microbiome-Friendly Cleanser",
    description:
      "A microbiome-friendly cleanser concept for barrier support, sensitive skin and skin comfort positioning.",
    activeOptions: ["Lactobacillus Ferment", "Inulin", "Alpha-Glucan Oligosaccharide", "Panthenol", "Betaine"],
    alt: "3D render of postbiotic microbiome gentle cleanser bottle and box labeled Your Brand.",
    image: "/images/face-wash/postbiotic-microbiome-gentle-cleanser.webp",
    group: "Barrier, Sensitive & Non-Foaming Cleansers"
  },
  {
    id: "salicylic-acid-acne-control-face-wash",
    name: "2% Salicylic Acid Acne-Control Face Wash",
    formatBadge: "Active Foaming Gel Face Wash",
    description:
      "An active cleanser concept for oily skin, clogged pores, blackhead-prone skin and acne-prone skin positioning.",
    activeOptions: ["Salicylic Acid", "Niacinamide", "Zinc PCA", "Tea Tree Extract", "Willow Bark Extract"],
    alt: "3D render of 2 percent salicylic acid acne control face wash bottle and box labeled Your Brand.",
    image: "/images/face-wash/salicylic-acid-acne-control-face-wash.webp",
    group: "Acne, Oil Control & Deep Clean Face Wash"
  },
  {
    id: "niacinamide-zinc-oil-control-face-wash",
    name: "Niacinamide + Zinc Oil Control Face Wash",
    formatBadge: "Oil-Control Gel Face Wash",
    description:
      "A daily oil-control cleanser concept for visible pores, excess oil and fresh-skin positioning.",
    activeOptions: ["Niacinamide", "Zinc PCA", "Panthenol", "Green Tea Extract", "Aloe Vera"],
    alt: "3D render of niacinamide and zinc oil control face wash bottle and box labeled Your Brand.",
    image: "/images/face-wash/niacinamide-zinc-oil-control-face-wash.webp",
    group: "Acne, Oil Control & Deep Clean Face Wash"
  },
  {
    id: "charcoal-clay-urban-detox-face-wash",
    name: "Charcoal + Clay Urban Detox Face Wash",
    formatBadge: "Urban Detox Cleanser",
    description:
      "A deep-clean face wash concept for pollution, oily skin, men's grooming and urban skincare positioning.",
    activeOptions: ["Activated Charcoal", "Kaolin Clay", "Bentonite Clay", "Zinc PCA", "Optional Menthol"],
    alt: "3D render of charcoal and clay urban detox face wash bottle and box labeled Your Brand.",
    image: "/images/face-wash/charcoal-clay-urban-detox-face-wash.webp",
    group: "Acne, Oil Control & Deep Clean Face Wash"
  },
  {
    id: "saffron-kumkumadi-radiance-face-wash",
    name: "Saffron + Kumkumadi Radiance Face Wash",
    formatBadge: "Luxury Botanical Cleanser",
    description:
      "A luxury Indian botanical glow cleanser concept for premium herbal, Ayurveda-inspired and radiance-focused skincare brands.",
    activeOptions: ["Saffron Extract", "Kumkumadi-Inspired Botanical Complex", "Licorice Extract", "Turmeric Extract", "Manjistha Extract"],
    alt: "3D render of saffron and kumkumadi radiance face wash bottle and box labeled Your Brand.",
    image: "/images/face-wash/saffron-kumkumadi-radiance-face-wash.webp",
    group: "Brightening & Glow Cleansers"
  },
  {
    id: "waterless-cleanser-concentrate-refill-paste",
    name: "Waterless Cleanser Concentrate / Refill Paste",
    formatBadge: "Sustainable Cleanser Concentrate",
    description:
      "A future-format cleanser concept for eco-conscious brands looking for concentrated, water-saving, refill-style skincare products.",
    activeOptions: ["Concentrated Mild Surfactant System", "Glycerin", "Betaine", "Plant Oils", "Biodegradable Cleansing Agents"],
    alt: "3D render of waterless cleanser concentrate refill paste tube and box labeled Your Brand.",
    image: "/images/face-wash/waterless-cleanser-concentrate-refill-paste.webp",
    group: "Modern Cleanser Formats"
  }
];

const groupedConcepts = [
  {
    title: "Barrier, Sensitive & Non-Foaming Cleansers",
    ids: [
      "barrier-repair-cream-cleanser",
      "oat-milk-non-foaming-cleanser",
      "ceramide-hyaluronic-hydrating-cleanser",
      "amino-acid-ph-55-gentle-face-wash",
      "cica-centella-calming-cleanser",
      "postbiotic-microbiome-gentle-cleanser"
    ]
  },
  {
    title: "Modern Cleanser Formats",
    ids: [
      "gel-to-foam-daily-cleanser",
      "oil-to-milk-makeup-removing-cleanser",
      "cleansing-balm-to-milk-face-cleanser",
      "micellar-gel-cleanser",
      "cloud-foam-mousse-face-wash",
      "enzyme-powder-face-cleanser",
      "waterless-cleanser-concentrate-refill-paste"
    ]
  },
  {
    title: "Brightening & Glow Cleansers",
    ids: [
      "rice-water-bright-barrier-cleanser",
      "papaya-pineapple-enzyme-gel-cleanser",
      "saffron-kumkumadi-radiance-face-wash"
    ]
  },
  {
    title: "Acne, Oil Control & Deep Clean Face Wash",
    ids: [
      "salicylic-acid-acne-control-face-wash",
      "niacinamide-zinc-oil-control-face-wash",
      "charcoal-clay-urban-detox-face-wash"
    ]
  },
  {
    title: "Premium Sensory Cleansers",
    ids: [
      "whipped-cream-hydrating-cleanser",
      "cleansing-balm-to-milk-face-cleanser",
      "oil-to-milk-makeup-removing-cleanser"
    ]
  }
];

const keywordTagMap: Record<string, string[]> = {
  "barrier-repair-cream-cleanser": ["Barrier repair cleanser manufacturer", "Cream cleanser manufacturer", "Private label cream cleanser"],
  "oat-milk-non-foaming-cleanser": ["Oat milk cleanser manufacturer", "Non foaming cleanser manufacturer", "Sensitive skin face wash manufacturer"],
  "ceramide-hyaluronic-hydrating-cleanser": ["Ceramide face wash manufacturer", "Hydrating cleanser manufacturer", "Derma cleanser manufacturer"],
  "amino-acid-ph-55-gentle-face-wash": ["Amino acid face wash manufacturer", "pH 5.5 face wash manufacturer", "Gentle face wash manufacturer"],
  "gel-to-foam-daily-cleanser": ["Gel to foam cleanser manufacturer", "Gel face wash manufacturer", "Private label gel cleanser"],
  "oil-to-milk-makeup-removing-cleanser": ["Oil to milk cleanser manufacturer", "Makeup removing cleanser manufacturer", "Private label oil cleanser"],
  "cleansing-balm-to-milk-face-cleanser": ["Cleansing balm manufacturer", "Balm to milk cleanser manufacturer", "Luxury face cleanser manufacturer"],
  "micellar-gel-cleanser": ["Micellar gel cleanser manufacturer", "Micellar face wash manufacturer", "Private label micellar cleanser"],
  "whipped-cream-hydrating-cleanser": ["Whipped cream cleanser manufacturer", "Luxury hydrating cleanser manufacturer", "Sensory cleanser manufacturer"],
  "cloud-foam-mousse-face-wash": ["Mousse face wash manufacturer", "Foam pump cleanser manufacturer", "Soft foam face wash manufacturer"],
  "enzyme-powder-face-cleanser": ["Enzyme powder cleanser manufacturer", "Powder face wash manufacturer", "Water activated cleanser manufacturer"],
  "papaya-pineapple-enzyme-gel-cleanser": ["Papaya face wash manufacturer", "Enzyme face wash manufacturer", "Private label enzyme cleanser"],
  "rice-water-bright-barrier-cleanser": ["Rice water face wash manufacturer", "K beauty cleanser manufacturer", "Bright barrier cleanser manufacturer"],
  "cica-centella-calming-cleanser": ["Cica cleanser manufacturer", "Centella face wash manufacturer", "Calming face wash manufacturer"],
  "postbiotic-microbiome-gentle-cleanser": ["Postbiotic cleanser manufacturer", "Microbiome cleanser manufacturer", "Private label microbiome cleanser"],
  "salicylic-acid-acne-control-face-wash": ["Salicylic acid face wash manufacturer", "Acne face wash manufacturer", "BHA face wash manufacturer"],
  "niacinamide-zinc-oil-control-face-wash": ["Niacinamide face wash manufacturer", "Oil control face wash manufacturer", "Pore refining face wash manufacturer"],
  "charcoal-clay-urban-detox-face-wash": ["Charcoal face wash manufacturer", "Clay face wash manufacturer", "Deep clean face wash manufacturer"],
  "saffron-kumkumadi-radiance-face-wash": ["Saffron face wash manufacturer", "Kumkumadi face wash manufacturer", "Luxury botanical cleanser manufacturer"],
  "waterless-cleanser-concentrate-refill-paste": ["Waterless cleanser manufacturer", "Refill face wash manufacturer", "Sustainable face wash manufacturer"]
};

const commonDemandConcepts = [
  "Vitamin C Face Wash", "Vitamin C + Glutathione Face Wash", "Neem Face Wash", "Tea Tree Face Wash", "Turmeric Face Wash",
  "Aloe Vera Face Wash", "Charcoal Face Wash", "Activated Charcoal Face Wash", "Coffee Face Wash", "Green Tea Face Wash",
  "Cucumber Face Wash", "Papaya Face Wash", "Orange Face Wash", "Lemon Face Wash", "Rose Face Wash",
  "Saffron Face Wash", "Kumkumadi Face Wash", "Sandalwood Face Wash", "Multani Mitti Face Wash", "Clay Face Wash"
];

const dermaConcepts = [
  "Salicylic Acid Face Wash", "Glycolic Acid Face Wash", "AHA BHA Face Wash", "Kojic Acid Face Wash", "Alpha Arbutin Face Wash",
  "Tranexamic Acid Face Wash", "Niacinamide Face Wash", "Zinc PCA Face Wash", "Azelaic Acid Face Wash", "Benzoyl Peroxide Face Wash",
  "Anti-Acne Face Wash", "Oil Control Face Wash", "Pore Cleansing Face Wash", "Brightening Face Wash", "Pigmentation Face Wash",
  "Sensitive Skin Face Wash", "Hydrating Face Wash", "Barrier Repair Face Wash", "pH 5.5 Face Wash", "Sulphate-Free Face Wash"
];

const modernFormatConcepts = [
  "Cream Cleanser", "Non-Foaming Cleanser", "Milky Cleanser", "Oat Milk Cleanser", "Gel Cleanser",
  "Gel-to-Foam Cleanser", "Mousse Face Wash", "Foam Pump Cleanser", "Micellar Gel Cleanser", "Oil-to-Milk Cleanser",
  "Cleansing Oil", "Cleansing Balm", "Balm-to-Milk Cleanser", "Powder Face Wash", "Enzyme Powder Cleanser",
  "Waterless Cleanser", "Cleanser Concentrate", "Refill Face Wash", "Travel-Friendly Cleanser", "Double Cleansing Product"
];

const mensConcepts = [
  "Men's Charcoal Face Wash", "Men's Oil Control Face Wash", "Men's Coffee Face Wash", "Men's Pollution Defense Face Wash", "De-Tan Face Wash",
  "Cooling Face Wash", "Menthol Face Wash", "Deep Clean Face Wash", "Scrub Face Wash", "Daily Freshness Face Wash",
  "Herbal Face Wash", "Ayurvedic Face Wash", "Luxury Face Wash", "Budget Face Wash", "Premium Face Wash"
];

const activeChips = [
  "Cream Cleanser",
  "Non-Foaming Cleanser",
  "Milky Cleanser",
  "Gel-to-Foam Cleanser",
  "Oil-to-Milk Cleanser",
  "Cleansing Balm",
  "Micellar Gel Cleanser",
  "Mousse Cleanser",
  "Enzyme Powder Cleanser",
  "Waterless Cleanser",
  "Amino Acid Surfactants",
  "Ceramide NP",
  "Hyaluronic Acid",
  "Colloidal Oat",
  "Beta-Glucan",
  "Niacinamide",
  "Zinc PCA",
  "Salicylic Acid",
  "Centella Asiatica",
  "Lactobacillus Ferment",
  "Rice Water Extract",
  "Papain",
  "Bromelain",
  "Charcoal",
  "Kaolin Clay",
  "Saffron Extract",
  "Kumkumadi Botanical Complex"
];

const whyChooseCards = [
  "Custom private label face wash formulation support",
  "Modern cleanser format development",
  "Derma-cosmetic and cosmeceutical positioning support",
  "Support for non-foaming, cream, gel, mousse, balm and oil-to-milk cleansers",
  "Packaging and product concept support",
  "Scalable third-party manufacturing support",
  "Support for premium, herbal, mass-market, men's and sensitive-skin cleanser ranges",
  "SEO-friendly product concept library for brand launches"
];

const faqs = [
  {
    question: "Does Kiora CosmoTech manufacture private label face wash?",
    answer:
      "Yes, Kiora CosmoTech supports private label and third-party manufacturing of face wash and cleanser concepts for cosmetic, derma-care, herbal, men's grooming, sensitive-skin, acne-care, brightening and premium skincare brands."
  },
  {
    question: "Can Kiora CosmoTech develop non-foaming or cream cleansers?",
    answer:
      "Yes, Kiora CosmoTech can develop cream cleanser, non-foaming cleanser, milky cleanser and barrier-friendly cleanser concepts for dry, sensitive and premium skincare positioning."
  },
  {
    question: "Can you develop salicylic acid or acne-control face wash?",
    answer:
      "Yes, salicylic acid, niacinamide, zinc PCA, tea tree and oily-skin face wash concepts can be developed for cosmetic acne-care and oil-control positioning. Stronger medicated acne claims may require separate regulatory review."
  },
  {
    question: "Can you manufacture oil-to-milk cleansers or cleansing balms?",
    answer:
      "Yes, Kiora CosmoTech can support premium cleanser formats such as oil-to-milk cleansers, cleansing oils, balm-to-milk cleansers and double-cleansing products depending on packaging and formula feasibility."
  },
  {
    question: "Can you develop herbal or Ayurvedic face wash concepts?",
    answer:
      "Yes, Kiora CosmoTech can develop herbal, botanical and Ayurveda-inspired face wash concepts using ingredients such as saffron, kumkumadi-inspired botanicals, neem, turmeric, aloe vera, tea tree, multani mitti and other plant-based actives."
  },
  {
    question: "Can you develop common market face wash products also?",
    answer:
      "Yes, along with advanced cleanser formats, Kiora CosmoTech can manufacture common high-demand face wash products such as vitamin C face wash, neem face wash, charcoal face wash, salicylic acid face wash, aloe vera face wash, papaya face wash, men's face wash, oil-control face wash and many more customized concepts."
  },
  {
    question: "Are these face wash products ready-made formulas?",
    answer:
      "The concepts shown are product directions and manufacturing possibilities. Final formula, active percentage, claim language, fragrance, foam profile, skin-feel and packaging will be customized based on your brand requirement, target price and applicable cosmetic regulations."
  },
  {
    question: "What types of brands can launch these face wash products?",
    answer:
      "These concepts are suitable for D2C skincare brands, derma-cosmetic marketing companies, influencers, salon and spa brands, men's grooming brands, herbal cosmetic brands and private label buyers."
  }
];

const internalLinks = [
  { label: "Private Label Manufacturing", href: "/private-label-cosmetics-manufacturer-india", description: "Explore private label cosmetic manufacturing for cleanser-focused skincare brands." },
  { label: "Third Party Cosmetic Manufacturing", href: "/third-party-cosmetic-manufacturing-india", description: "Review third party skincare manufacturing for face wash and cleanser launches." },
  { label: "Cosmetic Manufacturing", href: "/contract-cosmetic-manufacturer-india", description: "See broader cosmetic cleanser manufacturing in India for B2B category planning." },
  { label: "Skin Care Manufacturing", href: "/skincare-manufacturer-india", description: "Browse the wider skincare manufacturing portfolio and adjacent routine categories." },
  { label: "Face Serum Manufacturing", href: "/face-serum-manufacturer", description: "Pair cleansing programs with treatment-led face serum manufacturing." },
  { label: "Hair Serum Manufacturing", href: "/hair-serum-manufacturer", description: "Build a wider personal care portfolio with premium hair serum manufacturing." },
  { label: "Sunscreen Manufacturing", href: "/sunscreen-manufacturer", description: "Combine cleanser and sunscreen manufacturing for full routine development." },
  { label: "Moisturizer Manufacturing", href: "/moisturizer-manufacturer", description: "Extend hydration-first ranges into moisturizer manufacturing." },
  { label: "Contact Page", href: "/request-quote", description: "Contact Kiora CosmoTech with your face wash idea, format and launch plan." }
];

const relatedCategories = [
  { label: "Face Serum Manufacturing", href: "/face-serum-manufacturer", description: "Build cleanser and treatment combinations for premium skincare routines." },
  { label: "Hair Serum Manufacturing", href: "/hair-serum-manufacturer", description: "Expand from facial cleansing into adjacent active-led beauty categories." },
  { label: "Sunscreen Manufacturing", href: "/sunscreen-manufacturer", description: "Add protection-led products to a cleanser-first brand plan." },
  { label: "Moisturizer Manufacturing", href: "/moisturizer-manufacturer", description: "Support post-cleanse hydration with moisturizer manufacturing." },
  { label: "Shampoo Manufacturing", href: "/shampoo-manufacturer", description: "Widen your personal care program with cleanser-adjacent hair care." },
  { label: "Hair Oil Manufacturing", href: "/hair-oil-manufacturer", description: "Create broader beauty and wellness portfolios beyond facial cleansing." },
  { label: "Cosmetic Manufacturing", href: "/contract-cosmetic-manufacturer-india", description: "Review full-scale cosmetic manufacturing in India for category expansion." },
  { label: "Private Label Manufacturing", href: "/private-label-cosmetics-manufacturer-india", description: "Launch under your own brand with private label manufacturing support." }
];

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/skincare-manufacturer-india" },
  { name: "Face Wash Manufacturer in India", href: pagePath }
];

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Face Wash Manufacturer in India | Kiora CosmoTech",
  description:
    "Premium private label and third-party face wash manufacturing page for cream cleansers, non-foaming cleansers, gel cleansers, balm cleansers, acne-care cleansers and luxury botanical face wash concepts.",
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
  name: "Face Wash Manufacturing",
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url
  },
  areaServed: "India",
  serviceType: [
    "Private Label Face Wash Manufacturing",
    "Third Party Face Wash Manufacturing",
    "Cosmetic Cleanser Manufacturing"
  ],
  description:
    "Kiora CosmoTech offers private label and third-party manufacturing support for modern face wash and cleanser concepts including cream cleansers, non-foaming cleansers, gel-to-foam cleansers, oil-to-milk cleansers, cleansing balms, mousse face wash, enzyme powder cleansers, microbiome-friendly cleansers, salicylic acid face wash, niacinamide face wash, charcoal face wash and luxury botanical cleansers.",
  url: absoluteUrl(siteConfig.url, pagePath)
};

function FaceWashVisual({ concept }: { concept: FaceWashConcept }) {
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
      className="relative aspect-[5/4] overflow-hidden rounded-[1.35rem] border border-charcoal/10 bg-[linear-gradient(135deg,#fffdf7_0%,#edf4ee_58%,#dfcfb4_100%)] p-4 sm:aspect-[4/5] sm:rounded-[1.6rem] sm:p-5"
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
          eyebrow="Premium cleanser manufacturing"
          title="Face Wash Manufacturer in India"
          description={
            <p>
              Private label and third-party manufacturing for modern face wash, cream cleanser, non-foaming cleanser, gel cleanser, oil-to-milk cleanser, cleansing balm, mousse cleanser, enzyme cleanser and derma-cosmetic cleanser concepts.
            </p>
          }
          detail={
            <p>
              Kiora CosmoTech develops customized face wash and cleanser concepts for modern cosmetic, derma-care, herbal, premium skincare and D2C beauty brands. From barrier repair cream cleansers and oat milk non-foaming cleansers to salicylic acid acne-control face wash, gel-to-foam cleansers, cleansing balms, microbiome cleansers and luxury botanical face washes, we help brands build market-ready cleanser ranges.
            </p>
          }
          actions={
            <>
              <Link className="focus-ring site-button-primary inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-semibold text-ivory transition sm:min-w-[250px]" href="/request-quote">
                Request Face Wash Manufacturing Quote <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-charcoal/12 bg-white/84 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white sm:min-w-[220px]" href="#face-wash-concepts">
                Explore Cleanser Concepts
              </a>
            </>
          }
          tags={trustBadges}
          imageSrc={resolvedHeroImage}
          imageAlt="Premium face wash and cleanser bottle mockup labeled Your Brand"
          imageCaption="Cleanser Formula • Tube/Bottle Packaging • Filling • Packing • Dispatch"
          fallbackTitle="Premium face wash concepts"
          fallbackDescription="Cream cleansers, gel cleansers, balm cleansers, microbiome-friendly face wash and luxury botanical cleanser directions for premium skincare launches."
          titleClassName="font-display text-[clamp(2.2rem,8vw,5.5rem)] font-semibold leading-[0.94] text-charcoal"
        />

        <section className="site-band-soft section-y">
          <div className="container-padded grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="site-panel-dark rounded-[1.6rem] p-5 text-ivory shadow-sm sm:rounded-3xl sm:p-7">
              <h2 className="text-[1.8rem] font-semibold leading-tight sm:text-3xl">Private Label Face Wash &amp; Cleanser Manufacturing for Modern Skincare Brands</h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ivory/78 md:leading-8">
                Kiora CosmoTech helps skincare brands develop premium cleanser products based on modern cleansing formats, sensory textures, skin-feel preferences, surfactant systems, actives, botanicals, barrier-support ingredients and market positioning.
              </p>
              <p className="mt-4 text-[0.98rem] leading-7 text-ivory/78 md:leading-8">
                Face wash is no longer limited to a simple foaming cleanser. Modern brands now launch cream cleansers, non-foaming cleansers, gel-to-foam cleansers, oil-to-milk cleansers, mousse cleansers, micellar gels, enzyme powder cleansers and microbiome-friendly cleansers depending on user need and price segment.
              </p>
              <p className="mt-4 text-[0.98rem] leading-7 text-ivory/78 md:leading-8">
                The company supports brands from product concept to formulation development, packaging direction and manufacturing support, helping buyers compare cleanser format strategy before sampling, MOQ planning and final product-brief preparation.
              </p>
            </article>
            <article className="site-panel rounded-[1.6rem] p-5 shadow-sm sm:rounded-3xl sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">Direct answer</p>
              <h2 className="mt-3 text-[1.8rem] font-semibold leading-tight text-charcoal sm:text-3xl">Face wash manufacturing for premium cleanser-led brand development</h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                This page is designed for skincare founders, derma-cosmetic marketing companies, salon and spa brands, creators, men&apos;s grooming brands, herbal cosmetic brands and private label buyers looking for a face wash manufacturer in India with a stronger concept library than a basic catalog. It also connects naturally with <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/skincare-manufacturer-india">skin care manufacturing</Link>, <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/face-serum-manufacturer">face serum manufacturing</Link>, <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/moisturizer-manufacturer">moisturizer manufacturing</Link>, <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/private-label-cosmetics-manufacturer-india">private label cosmetic manufacturing</Link> and broader <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/contract-cosmetic-manufacturer-india">cosmetic cleanser manufacturing</Link>.
              </p>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                From non-foaming cream cleanser and gel-to-foam face wash concepts to salicylic acid, charcoal, microbiome and kumkumadi cleanser directions, the goal is to help you shortlist commercially useful cleanser formats before you <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/request-quote">contact Kiora CosmoTech</Link>.
              </p>
            </article>
          </div>
        </section>

        <section className="section-y" id="face-wash-concepts">
          <div className="container-padded">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Product concepts</p>
              <h2 className="section-title mt-3 font-display font-semibold text-charcoal">
                Trending Face Wash &amp; Cleanser Concepts We Can Develop
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:mt-5 md:leading-8">
                Explore premium face wash and cleanser concepts that can be customized for your brand based on cleansing format, skin type, ingredient positioning, foam profile, packaging style, target price segment and regulatory category.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
              {concepts.map((concept) => (
                <article className="rounded-[1.6rem] border border-charcoal/10 bg-ivory p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-premium sm:rounded-[2rem] sm:p-5" id={concept.id} key={concept.id}>
                  <FaceWashVisual concept={concept} />
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
                Group your cleanser launch around the right format and consumer need
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
                More Face Wash &amp; Cleanser Concepts We Can Manufacture
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:mt-5 md:leading-8">
                Along with advanced cleanser formats, Kiora CosmoTech can also develop regular market-demand face wash products for private label and third-party manufacturing. These can be customized as per brand positioning, target skin type, fragrance preference, packaging style, price segment and applicable cosmetic regulations.
              </p>
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <KeywordChipGroup heading="Common High-Demand Face Wash Concepts" items={commonDemandConcepts} />
              <KeywordChipGroup heading="Derma / Active Face Wash Concepts" items={dermaConcepts} />
              <KeywordChipGroup heading="Modern Cleanser Formats" items={modernFormatConcepts} />
              <KeywordChipGroup heading="Men's / Mass Market Face Wash Concepts" items={mensConcepts} />
            </div>
            <div className="mt-8 rounded-[1.8rem] border border-charcoal/10 bg-mist p-5 shadow-sm sm:p-6">
              <p className="text-[0.98rem] leading-7 text-ink/76 md:leading-8">
                Kiora CosmoTech can manufacture a wide range of private label face wash and cleanser products including vitamin C face wash, neem face wash, charcoal face wash, salicylic acid face wash, niacinamide face wash, kojic acid face wash, tea tree face wash, aloe vera face wash, papaya face wash, saffron face wash, kumkumadi face wash, men's face wash, cream cleanser, gel cleanser, foaming face wash, non-foaming cleanser, cleansing balm, oil-to-milk cleanser, enzyme cleanser and many more customized cleanser concepts for cosmetic and derma-care brands.
              </p>
              <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h3 className="text-[1.5rem] font-semibold leading-tight text-charcoal">Have a Different Face Wash Concept?</h3>
                  <p className="mt-3 text-[0.98rem] leading-7 text-ink/74">
                    Share your target product idea, active ingredient, cleanser format, foam profile, packaging preference or reference brand. Kiora CosmoTech can help you develop a customized private label face wash or cleanser for your brand.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-charcoal px-6 py-3 text-center font-semibold text-ivory transition hover:bg-teal" href="/custom-skincare-formulation">
                    Request Custom Face Wash Development
                  </Link>
                  <a className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-charcoal/12 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white/70" href={whatsappHref("Hello Kiora CosmoTech, I want to discuss a custom face wash concept for my brand.")}>
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Customization options</p>
              <h2 className="mt-3 text-[clamp(1.95rem,6vw,4.3rem)] font-display font-semibold leading-[0.98] text-charcoal">
                Available Cleanser Format, Active &amp; INCI-Based Customization Options
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:mt-5 md:leading-8">
                Kiora CosmoTech can develop customized face wash and cleanser products using modern cleanser formats and trending cosmetic actives such as cream cleanser systems, non-foaming milky cleansers, gel-to-foam surfactant systems, oil-to-milk emulsifying cleansers, cleansing balms, micellar gels, mousse cleansers, enzyme powder cleansers, amino acid surfactants, ceramides, hyaluronic acid, oat extract, niacinamide, salicylic acid, zinc PCA, centella, postbiotics, rice water extract, saffron, kumkumadi-inspired botanicals and sustainable cleanser concentrate systems depending on brand positioning, skin-feel target, foam profile, regulatory category and target cost.
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
                Why Choose Kiora CosmoTech for Face Wash Manufacturing?
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                From Concept to Finished Face Wash
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                "Product concept finalization",
                "Cleanser format and foam profile selection",
                "Active and claim positioning",
                "Formula development and sample approval",
                "Packaging selection and artwork guidance",
                "Batch manufacturing",
                "Quality checks",
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
            <div className="rounded-[1.8rem] border border-charcoal/10 bg-ivory p-5 shadow-sm sm:rounded-[2rem] sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Claim safety</p>
              <p className="mt-4 text-[1rem] leading-7 text-ink/76 md:text-[1.04rem] md:leading-8">
                All face wash and cleanser concepts shown are customizable private label / third-party manufacturing possibilities. Final formula, active percentage, claim language, fragrance, skin-feel, foam profile, packaging and regulatory positioning can be customized as per brand requirement and applicable cosmetic regulations.
              </p>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/72 md:leading-8">
                Benzoyl peroxide-based acne cleanser concepts may require separate regulatory review depending on the market, claim language and product classification.
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
                  Continue planning your cleanser and routine manufacturing range
                </h2>
                <p className="mt-4 text-[0.98rem] leading-7 text-ink/74 md:leading-8">
                  Buyers researching <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/face-wash-manufacturer">face wash manufacturing in India</Link> often compare treatment and routine categories before locking a product roadmap. Use these pages to evaluate <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/face-serum-manufacturer">face serum manufacturing</Link>, <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/hair-serum-manufacturer">hair serum manufacturing</Link>, <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/sunscreen-manufacturer">sunscreen manufacturing</Link> and wider <Link className="font-semibold text-teal underline decoration-teal/35 underline-offset-4" href="/private-label-cosmetics-manufacturer-india">private label cosmetic manufacturing</Link>.
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
            <div className="rounded-[2rem] border border-charcoal/10 bg-[linear-gradient(135deg,#fffdf7_0%,#edf4ee_52%,#dfcfb4_100%)] p-6 shadow-premium sm:p-8 md:p-10">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">Final CTA</p>
                  <h2 className="mt-3 text-[clamp(2rem,6vw,4.4rem)] font-display font-semibold leading-[0.96] text-charcoal">
                    Launch Your Own Face Wash Brand With Kiora CosmoTech
                  </h2>
                  <p className="mt-5 max-w-3xl text-[0.98rem] leading-7 text-ink/76 md:text-lg md:leading-8">
                    Whether you want to launch a cream cleanser, oat milk non-foaming cleanser, ceramide hydrating cleanser, gel-to-foam face wash, oil-to-milk cleanser, cleansing balm, mousse face wash, enzyme cleanser, microbiome cleanser, salicylic acid face wash, charcoal face wash or luxury kumkumadi face wash, Kiora CosmoTech can help you convert your product idea into a premium private label skincare range.
                  </p>
                </div>
                <div className="flex flex-col gap-3 lg:items-end">
                  <Link className="focus-ring site-button-primary inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-semibold text-ivory transition lg:max-w-[320px]" href="/request-quote">
                    Request Manufacturing Quote <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <a className="focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-charcoal/12 px-6 py-3 text-center font-semibold text-charcoal transition hover:bg-white/70 lg:max-w-[320px]" href={whatsappHref("Hello Kiora CosmoTech, I want to discuss face wash manufacturing for my brand.")}>
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
