import type { FAQ } from "./faqs";

export type ProductPage = {
  slug: string;
  name: string;
  category: "Skincare" | "Derma Cosmetic" | "Haircare" | "Personal Care";
  title: string;
  description: string;
  h1: string;
  intro: string;
  directAnswer: string;
  formulaOptions: string[];
  packagingOptions: string;
  moq: string;
  customization: string;
  documentation: string;
  suitableFor: string;
  qualityChecks: string[];
  related: string[];
  faqs: FAQ[];
  formulaDirections?: string[];
  packagingAdvice?: string;
  buyerMistakes?: string[];
  quoteChecklist?: string[];
  heroImage?: string;
  heroImageAlt?: string;
  heroImageCaption?: string;
  heroTags?: string[];
};

const sharedFaqs = (product: string): FAQ[] => [
  {
    question: `Can ${product.toLowerCase()} be manufactured under private label?`,
    answer: `Yes. ${product} can be developed for private label, third party or contract manufacturing depending on your brand plan, formula direction and packaging selection.`
  },
  {
    question: `What can be customized in ${product.toLowerCase()} manufacturing?`,
    answer:
      "Brands can discuss actives, texture, fragrance direction, color, packaging format, label design inputs and outer carton requirements."
  },
  {
    question: "How do I get a manufacturing quote?",
    answer:
      "Share your product type, formula preference, quantity, packaging requirement and launch city through the quote form or WhatsApp CTA."
  }
];

export const productPages: ProductPage[] = [
  {
    slug: "face-wash-manufacturer",
    name: "Face Wash Manufacturer",
    category: "Skincare",
    title: "Face Wash Manufacturer in India | Private Label Face Wash",
    description:
      "Private label and third party face wash manufacturing in India with gel, foam, cream and active-led cleanser options for skincare brands.",
    h1: "Face Wash Manufacturer",
    intro:
      "Kiora CosmoTech manufactures face wash and cleanser formats for skincare brands that need a clean, market-ready product with practical packaging and formula planning.",
    directAnswer:
      "A face wash manufacturer develops, produces, fills and packs facial cleanser products for beauty brands, including private label and custom active-led formulas.",
    formulaOptions: ["Gel cleanser", "Foaming face wash", "Cream cleanser", "Salicylic acid", "Vitamin C", "Tea tree", "Aloe vera"],
    packagingOptions: "50 ml / 100 ml / 150 ml tubes, pump bottles, flip-top bottles",
    moq: "500 / 1,000 / 2,000 pcs depending on formula and packaging",
    customization: "Actives, surfactant feel, fragrance, color, label and mono carton",
    documentation: "COA where applicable, product specification and label declaration support",
    suitableFor: "D2C skincare brands, salons, clinics, influencers and exporters",
    qualityChecks: ["Appearance and odor checks", "pH review", "Viscosity observation", "Filling and leak review"],
    related: ["face-serum-manufacturer", "moisturizer-manufacturer", "skincare-manufacturer-india"],
    faqs: sharedFaqs("Face Wash")
  },
  {
    slug: "face-serum-manufacturer",
    name: "Face Serum Manufacturer",
    category: "Skincare",
    title: "Face Serum Manufacturer in India | Private Label Serums",
    description:
      "Face serum manufacturing for private label skincare brands with Vitamin C, niacinamide, hyaluronic acid, peptide and active-led options.",
    h1: "Face Serum Manufacturer",
    intro:
      "Kiora CosmoTech manufactures private label and custom face serum products for brands that want lightweight textures, active-led positioning and premium packaging.",
    directAnswer:
      "A face serum manufacturer creates concentrated skincare products with selected actives, controlled texture and suitable packaging such as droppers, pumps or airless bottles.",
    formulaOptions: ["Vitamin C", "Niacinamide", "Hyaluronic acid", "Retinol", "Peptide", "Salicylic acid"],
    packagingOptions: "15 ml / 30 ml / 50 ml dropper bottle, pump bottle, airless bottle",
    moq: "500 / 1,000 / 2,000 pcs depending on formula and packaging",
    customization: "Actives, texture, fragrance, color, label and outer box",
    documentation: "COA, product specification and label declaration support",
    suitableFor: "D2C brands, salons, dermatologists, influencers and exporters",
    qualityChecks: ["Appearance review", "pH and viscosity checks where relevant", "Packaging compatibility review", "Batch documentation"],
    related: ["custom-skincare-formulation", "sunscreen-manufacturer", "derma-cosmetic-manufacturer"],
    faqs: sharedFaqs("Face Serum")
  },
  {
    slug: "sunscreen-manufacturer",
    name: "Sunscreen Manufacturer",
    category: "Skincare",
    title: "Sunscreen Manufacturer in India | Private Label SPF Products",
    description:
      "Private label sunscreen manufacturing for skincare brands with cream, gel and lotion textures plus packaging and quality-focused batch planning.",
    h1: "Sunscreen Manufacturer",
    intro:
      "Kiora CosmoTech helps brands explore sunscreen manufacturing with SPF-focused positioning, elegant textures and packaging options suited for daily-use skincare lines.",
    directAnswer:
      "A sunscreen manufacturer produces SPF-positioned skincare products using suitable UV filter systems, texture bases and packaging aligned with brand requirements.",
    formulaOptions: ["Gel sunscreen", "Lotion sunscreen", "Matte finish", "Hydrating finish", "Tinted formats where suitable"],
    packagingOptions: "50 g tubes, pump bottles, airless bottles and mono cartons",
    moq: "1,000 / 2,000 pcs depending on filter system, packaging and testing needs",
    customization: "Texture, finish, fragrance direction, packaging, label and carton",
    documentation: "Product specification, batch records and label declaration support",
    suitableFor: "Skincare brands, clinics, salons and D2C sunscreen launches",
    qualityChecks: ["Appearance and texture checks", "Filling weight checks", "Packaging review", "Stability support where applicable"],
    related: ["quality-and-compliance", "face-serum-manufacturer", "moisturizer-manufacturer"],
    faqs: sharedFaqs("Sunscreen")
  },
  {
    slug: "moisturizer-manufacturer",
    name: "Moisturizer Manufacturer",
    category: "Skincare",
    title: "Moisturizer Manufacturer in India | Private Label Moisturizers",
    description:
      "Moisturizer manufacturing for private label skincare brands with gel cream, lotion, barrier support and hydrating formula options.",
    h1: "Moisturizer Manufacturer",
    intro:
      "Kiora CosmoTech manufactures moisturizers for everyday skincare ranges, derma-inspired lines and startup beauty brands seeking refined textures.",
    directAnswer:
      "A moisturizer manufacturer makes hydrating creams, lotions and gel creams for brands using selected emollients, humectants and packaging formats.",
    formulaOptions: ["Gel cream", "Barrier support cream", "Aloe moisturizer", "Ceramide-inspired", "Hyaluronic acid", "Oil-free textures"],
    packagingOptions: "50 g jars, tubes, pump bottles and airless bottles",
    moq: "500 / 1,000 / 2,000 pcs depending on base and pack",
    customization: "Texture, actives, fragrance, finish, label and outer carton",
    documentation: "Product specification, COA where applicable and label inputs",
    suitableFor: "D2C skincare, salons, dermatologists and marketplace brands",
    qualityChecks: ["Texture review", "pH checks where relevant", "Fill weight checks", "Packaging compatibility review"],
    related: ["cream-manufacturer", "gel-manufacturer", "body-lotion-manufacturer"],
    faqs: sharedFaqs("Moisturizer")
  },
  {
    slug: "cream-manufacturer",
    name: "Cream Manufacturer",
    category: "Skincare",
    title: "Cream Manufacturer in India | Private Label Cosmetic Creams",
    description:
      "Cosmetic cream manufacturing for skincare brands including day cream, night cream, massage cream and active-led cream formats.",
    h1: "Cream Manufacturer",
    intro:
      "Kiora CosmoTech manufactures cosmetic creams for brands looking for premium textures, practical MOQ planning and packaging selection.",
    directAnswer:
      "A cream manufacturer produces cosmetic cream formats for brands, including private label ready bases and customized skincare cream concepts.",
    formulaOptions: ["Day cream", "Night cream", "Massage cream", "Brightening-positioned", "Hydrating", "Botanical extracts"],
    packagingOptions: "30 g / 50 g / 100 g jars, tubes and airless packs",
    moq: "500 / 1,000 / 2,000 pcs depending on packaging and formula",
    customization: "Base feel, actives, color, fragrance, jar or tube selection and carton",
    documentation: "Specification support, batch details and label declaration inputs",
    suitableFor: "Skincare brands, salon brands, clinic labels and exporters",
    qualityChecks: ["Texture and homogeneity review", "Fill weight checks", "Odor and appearance review", "Batch documentation"],
    related: ["moisturizer-manufacturer", "gel-manufacturer", "custom-skincare-formulation"],
    faqs: sharedFaqs("Cream")
  },
  {
    slug: "gel-manufacturer",
    name: "Gel Manufacturer",
    category: "Skincare",
    title: "Gel Manufacturer in India | Private Label Skincare Gels",
    description:
      "Private label skincare gel manufacturing with aloe gel, hydrating gel, after-care gel and active-led gel formats for beauty brands.",
    h1: "Gel Manufacturer",
    intro:
      "Kiora CosmoTech develops and manufactures cosmetic gel products with clean textures, cooling sensory profiles and flexible packaging options.",
    directAnswer:
      "A gel manufacturer produces water-based or gel-textured skincare products for private label and third party cosmetic brands.",
    formulaOptions: ["Aloe vera gel", "Hydrating gel", "After-care gel", "Soothing botanical gel", "Active-led gel"],
    packagingOptions: "50 g / 100 g jars, tubes and pump bottles",
    moq: "500 / 1,000 / 2,000 pcs depending on ingredients and pack",
    customization: "Gel clarity, viscosity, actives, fragrance, color and packaging",
    documentation: "Product specification and label support",
    suitableFor: "Salons, skincare startups, personal care brands and clinics",
    qualityChecks: ["Clarity and viscosity observation", "Fill check", "Packaging review", "Batch records"],
    related: ["cream-manufacturer", "body-lotion-manufacturer", "skincare-manufacturer-india"],
    faqs: sharedFaqs("Gel")
  },
  {
    slug: "body-lotion-manufacturer",
    name: "Body Lotion Manufacturer",
    category: "Skincare",
    title: "Body Lotion Manufacturer in India | Private Label Body Care",
    description:
      "Body lotion manufacturing for private label brands with hydrating, botanical, fragranced and active-led lotion options.",
    h1: "Body Lotion Manufacturer",
    intro:
      "Kiora CosmoTech manufactures body lotion products for body care lines, salon retail ranges and personal care brands.",
    directAnswer:
      "A body lotion manufacturer produces body moisturizers in lotion formats with selected emollients, fragrance direction and bottle or pump packaging.",
    formulaOptions: ["Hydrating lotion", "Botanical lotion", "Shea-inspired", "Aloe lotion", "Lightweight daily lotion"],
    packagingOptions: "100 ml / 200 ml / 300 ml bottles, pumps and tubes",
    moq: "500 / 1,000 / 2,000 pcs depending on pack size",
    customization: "Fragrance, texture, actives, bottle style, label and carton",
    documentation: "Specification and label declaration support",
    suitableFor: "Body care brands, salons, hotels and D2C personal care brands",
    qualityChecks: ["Viscosity checks", "Appearance review", "Filling checks", "Packaging compatibility review"],
    related: ["body-wash-manufacturer", "hand-wash-manufacturer", "personal-care-manufacturer-india"],
    faqs: sharedFaqs("Body Lotion")
  },
  {
    slug: "derma-cosmetic-manufacturer",
    name: "Derma Cosmetic Manufacturer",
    category: "Derma Cosmetic",
    title: "Derma Cosmetic Manufacturer in India | Private Label Derma Skincare",
    description:
      "Derma cosmetic manufacturing for dermatologist, clinic and active-led skincare brands with quality-driven batch planning.",
    h1: "Derma Cosmetic Manufacturer",
    intro:
      "Kiora CosmoTech manufactures derma-inspired cosmetic products for clinics, dermatologists and skincare brands that need active-led, compliance-focused manufacturing.",
    directAnswer:
      "A derma cosmetic manufacturer produces active-led cosmetic skincare products for dermatologist, clinic and professional beauty brands without making drug or cure claims.",
    formulaOptions: ["Niacinamide", "Hyaluronic acid", "Peptides", "Ceramide-inspired", "Salicylic acid", "Gentle cleanser bases"],
    packagingOptions: "Droppers, airless bottles, tubes, jars and mono cartons",
    moq: "500 / 1,000 / 2,000 pcs depending on product and packaging",
    customization: "Active positioning, texture, packaging, label and product range planning",
    documentation: "Product specification, batch documentation and label declaration support",
    suitableFor: "Dermatologists, clinics, derma-cosmetic startups and professional skincare brands",
    qualityChecks: ["Raw material review", "In-process observations", "Finished product checks", "Documentation inputs"],
    related: ["face-serum-manufacturer", "sunscreen-manufacturer", "quality-and-compliance"],
    faqs: sharedFaqs("Derma Cosmetic")
  },
  {
    slug: "shampoo-manufacturer",
    name: "Shampoo Manufacturer",
    category: "Haircare",
    title: "Shampoo Manufacturer in India | Private Label Haircare",
    description:
      "Private label shampoo manufacturing for haircare brands with gentle cleanse, anti-dandruff-positioned, botanical and salon retail options.",
    h1: "Shampoo Manufacturer",
    intro:
      "Kiora CosmoTech manufactures shampoo products for haircare brands, salons and startup personal care lines with packaging and formula planning.",
    directAnswer:
      "A shampoo manufacturer produces hair cleansing products for brands using suitable surfactant systems, actives, fragrance and bottle packaging.",
    formulaOptions: ["Gentle shampoo", "Botanical shampoo", "Salon shampoo", "Anti-dandruff-positioned", "Protein-inspired", "Onion seed-inspired"],
    packagingOptions: "100 ml / 200 ml / 300 ml bottles, pumps and flip-top caps",
    moq: "500 / 1,000 / 2,000 pcs depending on formula and bottle",
    customization: "Cleanse feel, fragrance, actives, color, label and carton",
    documentation: "Product specification and label declaration support",
    suitableFor: "Haircare brands, salons, D2C brands and exporters",
    qualityChecks: ["pH and viscosity checks", "Foam observation", "Filling checks", "Packaging review"],
    related: ["hair-serum-manufacturer", "hair-oil-manufacturer", "haircare-manufacturer-india"],
    faqs: sharedFaqs("Shampoo")
  },
  {
    slug: "hair-serum-manufacturer",
    name: "Hair Serum Manufacturer",
    category: "Haircare",
    title: "Hair Serum Manufacturer in India | Private Label Hair Serums",
    description:
      "Hair serum manufacturing for private label haircare brands with shine, frizz-control, lightweight and salon-finish formats.",
    h1: "Hair Serum Manufacturer",
    intro:
      "Kiora CosmoTech manufactures hair serum products for brands looking for premium finishing products, compact packaging and modern haircare positioning.",
    directAnswer:
      "A hair serum manufacturer produces leave-on hair finishing products designed for shine, smooth feel, frizz-control positioning and retail-ready packaging.",
    formulaOptions: ["Shine serum", "Frizz-control-positioned", "Lightweight serum", "Argan-inspired", "Keratin-inspired"],
    packagingOptions: "30 ml / 50 ml / 100 ml pump bottles and serum bottles",
    moq: "500 / 1,000 / 2,000 pcs depending on packaging",
    customization: "Sensory feel, fragrance, bottle style, label and outer box",
    documentation: "Product specification and label declaration inputs",
    suitableFor: "Salons, haircare startups, influencers and D2C brands",
    qualityChecks: ["Appearance review", "Packaging pump check", "Fill weight check", "Batch documentation"],
    related: ["shampoo-manufacturer", "hair-mask-manufacturer", "haircare-manufacturer-india"],
    faqs: sharedFaqs("Hair Serum")
  },
  {
    slug: "hair-oil-manufacturer",
    name: "Hair Oil Manufacturer",
    category: "Haircare",
    title: "Hair Oil Manufacturer in India | Private Label Hair Oil",
    description:
      "Private label hair oil manufacturing for cosmetic haircare brands with botanical, lightweight and traditional-inspired oil blends.",
    h1: "Hair Oil Manufacturer",
    intro:
      "Kiora CosmoTech manufactures cosmetic hair oils for brands that need flexible bottle formats, botanical positioning and scalable batch production.",
    directAnswer:
      "A hair oil manufacturer blends, fills and packs cosmetic hair oil products for private label and third party haircare brands.",
    formulaOptions: ["Botanical oil blends", "Lightweight hair oil", "Onion seed-inspired", "Argan-inspired", "Amla-inspired"],
    packagingOptions: "50 ml / 100 ml / 200 ml bottles, comb applicators and cartons",
    moq: "500 / 1,000 / 2,000 pcs depending on oils and pack",
    customization: "Oil blend, fragrance, bottle, applicator, label and carton",
    documentation: "Product specification and batch documentation support",
    suitableFor: "Haircare brands, salons, D2C brands and exporters",
    qualityChecks: ["Appearance and odor review", "Fill volume checks", "Leak checks", "Batch records"],
    related: ["shampoo-manufacturer", "hair-serum-manufacturer", "hair-mask-manufacturer"],
    faqs: sharedFaqs("Hair Oil")
  },
  {
    slug: "hair-mask-manufacturer",
    name: "Hair Mask Manufacturer",
    category: "Haircare",
    title: "Hair Mask Manufacturer in India | Private Label Hair Masks",
    description:
      "Hair mask manufacturing for private label salon, haircare and D2C brands with cream mask and treatment-positioned formats.",
    h1: "Hair Mask Manufacturer",
    intro:
      "Kiora CosmoTech manufactures hair mask formats for brands seeking richer textures, salon-inspired positioning and jar or tube packaging.",
    directAnswer:
      "A hair mask manufacturer produces rinse-off hair conditioning products for brands in jar, tube or salon pack formats.",
    formulaOptions: ["Conditioning mask", "Keratin-inspired", "Argan-inspired", "Protein-inspired", "Smoothening-positioned"],
    packagingOptions: "100 g / 200 g jars, tubes and salon packs",
    moq: "500 / 1,000 / 2,000 pcs depending on pack",
    customization: "Texture, fragrance, actives, jar or tube, label and carton",
    documentation: "Specification and label declaration support",
    suitableFor: "Salon brands, haircare startups and D2C product ranges",
    qualityChecks: ["Texture review", "Viscosity observation", "Fill checks", "Packaging compatibility review"],
    related: ["shampoo-manufacturer", "hair-serum-manufacturer", "haircare-manufacturer-india"],
    faqs: sharedFaqs("Hair Mask")
  },
  {
    slug: "body-wash-manufacturer",
    name: "Body Wash Manufacturer",
    category: "Personal Care",
    title: "Body Wash Manufacturer in India | Private Label Body Wash",
    description:
      "Body wash manufacturing for personal care brands with gel, creamy, botanical and fragrance-led options for private label launch.",
    h1: "Body Wash Manufacturer",
    intro:
      "Kiora CosmoTech manufactures body wash products for personal care brands, salon retail ranges and startup bath care lines.",
    directAnswer:
      "A body wash manufacturer produces liquid cleansing products for body care brands with selected texture, fragrance and bottle packaging.",
    formulaOptions: ["Gel body wash", "Creamy body wash", "Botanical body wash", "Aloe", "Charcoal-positioned", "Fragrance-led"],
    packagingOptions: "100 ml / 250 ml / 300 ml bottles, pumps and flip-top caps",
    moq: "500 / 1,000 / 2,000 pcs depending on bottle and formula",
    customization: "Foam profile, fragrance, color, actives, label and carton",
    documentation: "Product specification and label inputs",
    suitableFor: "Personal care brands, hotels, salons and D2C startups",
    qualityChecks: ["pH and viscosity checks", "Appearance review", "Filling checks", "Leak review"],
    related: ["body-lotion-manufacturer", "hand-wash-manufacturer", "personal-care-manufacturer-india"],
    faqs: sharedFaqs("Body Wash")
  },
  {
    slug: "hand-wash-manufacturer",
    name: "Hand Wash Manufacturer",
    category: "Personal Care",
    title: "Hand Wash Manufacturer in India | Private Label Hand Wash",
    description:
      "Private label hand wash manufacturing for personal care brands with gentle, fragranced, botanical and refill-friendly packaging options.",
    h1: "Hand Wash Manufacturer",
    intro:
      "Kiora CosmoTech manufactures hand wash products for personal care brands, institutional ranges and retail-ready startup launches.",
    directAnswer:
      "A hand wash manufacturer produces liquid hand cleansing products with suitable surfactants, fragrance direction and pump or refill packaging.",
    formulaOptions: ["Gentle hand wash", "Botanical hand wash", "Moisturizing-positioned", "Fragrance-led", "Refill pack formats"],
    packagingOptions: "200 ml / 250 ml / 500 ml pump bottles and refill pouches where suitable",
    moq: "500 / 1,000 / 2,000 pcs depending on packaging",
    customization: "Fragrance, color, viscosity, label, bottle and refill options",
    documentation: "Product specification and label declaration support",
    suitableFor: "Personal care brands, hotels, institutions and D2C brands",
    qualityChecks: ["pH review", "Viscosity checks", "Pump performance review", "Fill checks"],
    related: ["body-wash-manufacturer", "body-lotion-manufacturer", "personal-care-manufacturer-india"],
    faqs: sharedFaqs("Hand Wash")
  }
];

const dermaCosmeticPage = productPages.find((product) => product.slug === "derma-cosmetic-manufacturer");
if (dermaCosmeticPage) {
  dermaCosmeticPage.title = "Derma Cosmetic Manufacturer India | Private Label Skincare";
}

const defaultBuyerMistakes = [
  "Finalizing artwork before pack size and label area are approved",
  "Comparing prices without matching formula, fill size and carton scope",
  "Choosing premium packaging before confirming MOQ and availability",
  "Using aggressive claims without checking cosmetic communication limits"
];

const defaultQuoteChecklist = [
  "Product category and product type",
  "Expected quantity or target MOQ",
  "Packaging format and fill size",
  "Ready formula or custom formula direction",
  "Target launch city and timeline",
  "Any benchmark, active preference or carton requirement"
];

productPages.forEach((product) => {
  if (!product.h1.includes("India")) {
    product.h1 = `${product.name} in India`;
  }
  product.formulaDirections ??= product.formulaOptions.slice(0, 5);
  product.packagingAdvice ??=
    `${product.name.replace(" Manufacturer", "")} packaging should be selected after aligning formula texture, fill size, label area, carton requirement and channel positioning so production planning stays practical.`;
  product.buyerMistakes ??= defaultBuyerMistakes;
  product.quoteChecklist ??= defaultQuoteChecklist;
});

const setProductHero = (
  slug: string,
  heroImage: string,
  heroImageAlt: string,
  heroImageCaption: string,
  heroTags: string[]
) => {
  const page = productPages.find((item) => item.slug === slug);
  if (!page) return;
  page.heroImage = heroImage;
  page.heroImageAlt = heroImageAlt;
  page.heroImageCaption = heroImageCaption;
  page.heroTags = heroTags;
};

setProductHero(
  "face-wash-manufacturer",
  "/images/products/face-wash-hero.webp",
  "Premium face wash manufacturing hero visual for private label skincare brands",
  "Cleanser Formula • Tube/Bottle Packaging • Filling • Packing • Dispatch",
  ["Private Label", "Custom Formula", "Tube Packaging", "Bottle Packaging", "MOQ Discussion", "Skincare Brands"]
);

setProductHero(
  "face-serum-manufacturer",
  "/images/products/face-serum-hero.webp",
  "Premium face serum manufacturing hero visual for private label skincare brands",
  "Formula • Dropper/Pump Packaging • Filling • Quality • Dispatch",
  ["Private Label", "Custom Formula", "Dropper Bottle", "Pump Bottle", "MOQ Discussion", "Skincare Brands"]
);

setProductHero(
  "sunscreen-manufacturer",
  "/images/products/sunscreen-hero.webp",
  "Premium sunscreen manufacturing hero visual for private label skincare brands",
  "Formula Direction • SPF Claim Planning • Tube/Airless Packaging • Quality Review",
  ["SPF Positioning", "Tube Packaging", "Airless Pump", "Matte Finish", "Hybrid Formula", "Brand Launch"]
);

setProductHero(
  "moisturizer-manufacturer",
  "/images/products/moisturizer-hero.webp",
  "Premium moisturizer manufacturing hero visual for private label skincare brands",
  "Formula • Jar/Pump Packaging • Filling • Quality Review • Dispatch",
  ["Private Label", "Hydration Range", "Jar Packaging", "Pump Bottle", "MOQ Planning", "Skincare Launch"]
);

setProductHero(
  "cream-manufacturer",
  "/images/products/cream-hero.webp",
  "Premium cream manufacturing hero visual for private label cosmetic brands",
  "Cream Formula • Jar/Tube Packaging • Filling • Quality Review • Dispatch",
  ["Private Label", "Cream Formula", "Jar Packaging", "Tube Packaging", "MOQ Discussion", "Retail Range"]
);

setProductHero(
  "gel-manufacturer",
  "/images/products/gel-hero.webp",
  "Premium skincare gel manufacturing hero visual for private label brands",
  "Gel Formula • Tube/Jar Packaging • Filling • Quality Review • Dispatch",
  ["Private Label", "Gel Texture", "Tube Packaging", "Jar Packaging", "MOQ Planning", "Skincare Brands"]
);

setProductHero(
  "body-lotion-manufacturer",
  "/images/products/body-lotion-hero.webp",
  "Premium body lotion manufacturing hero visual for private label body care brands",
  "Lotion Formula • Bottle/Pump Packaging • Filling • Packing • Dispatch",
  ["Private Label", "Body Care", "Pump Bottle", "Bottle Packaging", "MOQ Discussion", "Daily Use Range"]
);

setProductHero(
  "derma-cosmetic-manufacturer",
  "/images/products/derma-cosmetic-hero.webp",
  "Premium derma cosmetic manufacturing hero visual for active-led skincare brands",
  "Active-Led Formula • Airless/Tube Packaging • Quality Review • Dispatch",
  ["Derma Cosmetic", "Active-Led", "Airless Packaging", "Tube Packaging", "MOQ Planning", "Clinic Brands"]
);

setProductHero(
  "shampoo-manufacturer",
  "/images/products/shampoo-hero.webp",
  "Premium shampoo manufacturing hero visual for private label haircare brands",
  "Haircare Formula • Bottle Packaging • Filling • Quality Review • Dispatch",
  ["Haircare", "Bottle Packaging", "Private Label", "Fragrance Selection", "MOQ Planning", "Salon Retail"]
);

setProductHero(
  "hair-serum-manufacturer",
  "/images/products/hair-serum-hero.webp",
  "Premium hair serum manufacturing hero visual for private label haircare brands",
  "Hair Serum Formula • Pump/Bottle Packaging • Filling • Quality Review • Dispatch",
  ["Haircare", "Private Label", "Pump Bottle", "Bottle Packaging", "MOQ Discussion", "Salon Brands"]
);

setProductHero(
  "hair-oil-manufacturer",
  "/images/products/hair-oil-hero.webp",
  "Premium hair oil manufacturing hero visual for private label haircare brands",
  "Oil Blend • Bottle Packaging • Filling • Quality Review • Dispatch",
  ["Haircare", "Private Label", "Bottle Packaging", "Applicator Options", "MOQ Planning", "Retail Range"]
);

setProductHero(
  "hair-mask-manufacturer",
  "/images/products/hair-mask-hero.webp",
  "Premium hair mask manufacturing hero visual for private label haircare brands",
  "Mask Formula • Jar/Tube Packaging • Filling • Quality Review • Dispatch",
  ["Haircare", "Private Label", "Jar Packaging", "Tube Packaging", "MOQ Discussion", "Salon Care"]
);

setProductHero(
  "body-wash-manufacturer",
  "/images/products/body-wash-hero.webp",
  "Premium body wash manufacturing hero visual for private label personal care brands",
  "Body Wash Formula • Bottle/Pump Packaging • Filling • Packing • Dispatch",
  ["Personal Care", "Private Label", "Bottle Packaging", "Pump Format", "MOQ Planning", "Daily Use Range"]
);

setProductHero(
  "hand-wash-manufacturer",
  "/images/products/hand-wash-hero.webp",
  "Premium hand wash manufacturing hero visual for private label personal care brands",
  "Hand Wash Formula • Pump/Refill Packaging • Filling • Quality Review • Dispatch",
  ["Personal Care", "Private Label", "Pump Bottle", "Refill Options", "MOQ Discussion", "Institutional Supply"]
);

const updateProductPage = (slug: string, updates: Partial<ProductPage>) => {
  const page = productPages.find((item) => item.slug === slug);
  if (page) Object.assign(page, updates);
};

updateProductPage("sunscreen-manufacturer", {
  formulaDirections: [
    "Gel sunscreen for light skin feel",
    "Cream sunscreen for richer daily-use positioning",
    "Matte sunscreen for oily-skin routines",
    "Mineral or hybrid direction depending on brand brief",
    "SPF and PA claims only after relevant testing support"
  ],
  packagingAdvice:
    "Sunscreen packaging often works best in tubes, pumps or airless packs because daily-use SPF products need easy dispensing, controlled fill size and practical travel handling.",
  buyerMistakes: [
    "Treating SPF numbers as a marketing choice without discussing formula and testing implications",
    "Choosing pack format before the texture and fill style are aligned",
    "Using medical or guaranteed protection language in cosmetic communication",
    "Skipping early discussion on label space for SPF, usage and caution information"
  ]
});

updateProductPage("face-serum-manufacturer", {
  formulaDirections: [
    "Niacinamide serum for oil-balance and texture-led positioning",
    "Vitamin C serum for radiance-focused communication",
    "Hyaluronic acid serum for hydration-led routines",
    "Peptide serum for premium age-support positioning",
    "Barrier repair serum with a calm, non-greasy skin feel"
  ],
  packagingAdvice:
    "Serum packaging should match viscosity, oxidation sensitivity and price positioning. Droppers work for premium ritual-led use, while pumps and airless bottles support controlled dispensing and cleaner handling."
});

updateProductPage("face-wash-manufacturer", {
  formulaDirections: [
    "Gel face wash for everyday skincare routines",
    "Foaming face wash for a lighter cleanse feel",
    "Salicylic acid face wash for acne-prone cosmetic positioning",
    "Vitamin C face wash for brightening-led communication",
    "Gentle cleanser for low-fragrance or daily-use concepts"
  ],
  packagingAdvice:
    "Face wash packaging usually starts with tubes for compact retail ranges, but pump and flip-top bottles can work for larger fills or salon and family-use products."
});

export const productSlugs = productPages.map((product) => product.slug);

export const productCategories = [
  {
    title: "Skincare",
    href: "/skincare-manufacturer-india",
    description: "Face care and body care manufacturing with formula selection, batch planning and packaging selection.",
    examples: ["Face wash", "Face serum", "Sunscreen", "Moisturizer", "Cream", "Gel"]
  },
  {
    title: "Derma Cosmetic",
    href: "/derma-cosmetic-manufacturer",
    description: "Active-led derma-inspired cosmetic ranges for clinics, dermatologists and modern D2C skincare brands.",
    examples: ["Niacinamide serum", "Gentle cleanser", "Barrier cream", "Sunscreen", "Hydrating gel"]
  },
  {
    title: "Haircare",
    href: "/haircare-manufacturer-india",
    description: "Haircare product manufacturing for salon retail, creator-led launches and personal care distribution.",
    examples: ["Shampoo", "Hair serum", "Hair oil", "Hair mask", "Salon packs"]
  },
  {
    title: "Personal Care",
    href: "/personal-care-manufacturer-india",
    description: "Daily-use personal care products with bottle, pump, refill and carton packaging planning.",
    examples: ["Body wash", "Hand wash", "Body lotion", "Bath care", "Refill packs"]
  }
];
