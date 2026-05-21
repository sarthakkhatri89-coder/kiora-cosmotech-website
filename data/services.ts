import { coreFaqs, documentsFaqs, type FAQ } from "./faqs";

export type ContentPage = {
  slug: string;
  kind: "service" | "category" | "support" | "company";
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  directAnswer: {
    question: string;
    answer: string;
  };
  sections: {
    heading: string;
    body: string;
    points?: string[];
  }[];
  relatedLinks: { label: string; href: string; description: string }[];
  faqs: FAQ[];
};

const productLinks = [
  { label: "Face Serum Manufacturer", href: "/face-serum-manufacturer", description: "Active-led serum manufacturing with premium packs." },
  { label: "Sunscreen Manufacturer", href: "/sunscreen-manufacturer", description: "SPF-positioned skincare manufacturing support." },
  { label: "Haircare Manufacturer", href: "/haircare-manufacturer-india", description: "Shampoo, hair serum, hair oil and mask formats." },
  { label: "Packaging Options", href: "/packaging-options", description: "Tubes, jars, bottles, pumps, droppers and cartons." }
];

export const contentPages: ContentPage[] = [
  {
    slug: "about-kiora-cosmotech",
    kind: "company",
    title: "About Kiora CosmoTech | Skincare Cosmetic Manufacturer India",
    description:
      "Learn about Kiora CosmoTech, a skincare-focused cosmetic manufacturing partner in India for private label, third party and custom formulation support.",
    h1: "About Kiora CosmoTech",
    eyebrow: "Skincare science, built for brands",
    intro:
      "Kiora CosmoTech is a skincare-focused cosmetic manufacturing company supporting private label, third party, contract manufacturing and custom formulation requirements for Indian beauty brands.",
    directAnswer: {
      question: "What does Kiora CosmoTech do?",
      answer:
        "Kiora CosmoTech helps skincare, derma-cosmetic, haircare and personal care brands plan, formulate, manufacture, package and launch cosmetic products in India."
    },
    sections: [
      {
        heading: "Manufacturing partner for modern beauty brands",
        body:
          "The company is built around practical manufacturing support for founders who need clarity on product selection, formula direction, packaging formats, MOQ planning and dispatch coordination.",
        points: ["Private label and third party support", "Custom skincare formulation guidance", "Packaging and documentation coordination"]
      },
      {
        heading: "Focused categories",
        body:
          "Kiora CosmoTech keeps its manufacturing communication focused on skincare, derma-cosmetic, haircare and personal care categories so brand discussions stay technically useful and commercially realistic.",
        points: ["Face care and body care", "Derma-inspired cosmetic products", "Haircare and personal care product ranges"]
      }
    ],
    relatedLinks: productLinks,
    faqs: coreFaqs
  },
  {
    slug: "private-label-cosmetics-manufacturer-india",
    kind: "service",
    title: "Private Label Cosmetics Manufacturer in India | Kiora CosmoTech",
    description:
      "Launch skincare, haircare and personal care products with private label cosmetic manufacturing, packaging support and startup-friendly quote guidance.",
    h1: "Private Label Cosmetics Manufacturer in India",
    eyebrow: "Private label skincare launch support",
    intro:
      "Kiora CosmoTech helps brands launch private label cosmetics with selected formulas, packaging options, label coordination and scalable manufacturing support.",
    directAnswer: {
      question: "What is private label cosmetic manufacturing?",
      answer:
        "Private label cosmetic manufacturing allows a brand to sell skincare, haircare or personal care products under its own name while the manufacturing partner handles production, filling and packing."
    },
    sections: [
      {
        heading: "Who private label is for",
        body:
          "Private label is suitable for startup beauty founders, salons, dermatologists, influencers, D2C brands and exporters that want a faster route to launch with controlled product choices.",
        points: ["Startup skincare brands", "Salon and clinic retail lines", "Influencer and creator-led beauty brands"]
      },
      {
        heading: "Product categories",
        body:
          "Brands can discuss skincare, derma-cosmetic, haircare and personal care products including face wash, serums, sunscreen, moisturizers, shampoo, body wash and hand wash.",
        points: ["Skincare and derma cosmetic", "Haircare products", "Personal care formats"]
      },
      {
        heading: "MOQ, packaging and documentation",
        body:
          "MOQ depends on formula, packaging and batch planning. Kiora CosmoTech supports packaging selection, specification inputs and label declaration coordination where applicable."
      }
    ],
    relatedLinks: [
      { label: "Skincare Manufacturer in India", href: "/skincare-manufacturer-india", description: "Explore skincare product manufacturing capabilities." },
      { label: "Face Serum Manufacturer", href: "/face-serum-manufacturer", description: "Launch private label serums with active-led options." },
      { label: "Packaging Options", href: "/packaging-options", description: "Review packaging formats for startup launches." },
      { label: "Request Quote", href: "/request-quote", description: "Share your requirement for a manufacturing quote." }
    ],
    faqs: coreFaqs
  },
  {
    slug: "third-party-cosmetic-manufacturing-india",
    kind: "service",
    title: "Third Party Cosmetic Manufacturing in India | Kiora CosmoTech",
    description:
      "Third party cosmetic manufacturing in India for skincare, haircare, derma-cosmetic and personal care brands with packaging and quality support.",
    h1: "Third Party Cosmetic Manufacturing in India",
    eyebrow: "Outsourced manufacturing for growing brands",
    intro:
      "Kiora CosmoTech provides third party cosmetic manufacturing support for brands that want reliable production coordination without building their own facility.",
    directAnswer: {
      question: "What is third party cosmetic manufacturing?",
      answer:
        "Third party cosmetic manufacturing means a brand outsources the manufacturing, filling and packing of its products to a specialized cosmetic manufacturing partner."
    },
    sections: [
      {
        heading: "Why brands choose third party manufacturing",
        body:
          "It helps brands focus on sales, branding and distribution while the manufacturing partner manages production planning, batch execution and packing coordination.",
        points: ["Lower operational burden", "Scalable batch planning", "Professional packaging and documentation support"]
      },
      {
        heading: "Available product categories",
        body:
          "Kiora CosmoTech supports third party manufacturing for face care, body care, derma-inspired cosmetics, haircare and personal care products."
      },
      {
        heading: "Process",
        body:
          "The workflow covers requirement discussion, formula or sample alignment, packaging selection, quote approval, artwork coordination, manufacturing, quality check and dispatch."
      }
    ],
    relatedLinks: [
      { label: "Contract Cosmetic Manufacturer", href: "/contract-cosmetic-manufacturer-india", description: "Structured manufacturing support for planned batches." },
      { label: "Manufacturing Process", href: "/manufacturing-process", description: "See the step-by-step workflow." },
      { label: "Quality and Compliance", href: "/quality-and-compliance", description: "Understand quality-driven operations." },
      { label: "Request Quote", href: "/request-quote", description: "Get a third party manufacturing quote." }
    ],
    faqs: coreFaqs
  },
  {
    slug: "contract-cosmetic-manufacturer-india",
    kind: "service",
    title: "Contract Cosmetic Manufacturer in India | Kiora CosmoTech",
    description:
      "Contract cosmetic manufacturing for skincare, haircare and personal care brands in India with custom formulation and packaging support.",
    h1: "Contract Cosmetic Manufacturer in India",
    eyebrow: "Manufacturing programs for brand owners",
    intro:
      "Kiora CosmoTech supports contract manufacturing requirements for brands that need a structured partner for formula, packaging and batch production coordination.",
    directAnswer: {
      question: "What is contract cosmetic manufacturing?",
      answer:
        "Contract cosmetic manufacturing is a production arrangement where a cosmetic manufacturer makes products for a brand according to agreed formula, packaging, batch and quality requirements."
    },
    sections: [
      {
        heading: "Built for repeatable production",
        body:
          "Contract manufacturing is suited for brands that need repeat batches, defined specifications, packaging consistency and a more planned production calendar.",
        points: ["Formula and pack alignment", "Batch planning", "Dispatch coordination"]
      },
      {
        heading: "Customization support",
        body:
          "Brands can discuss custom skincare formulation, sensory direction, active choices, fragrance, packaging format, label inputs and range planning."
      },
      {
        heading: "Quality support",
        body:
          "The process includes raw material checks, in-process observations, finished product review and batch documentation support as relevant to the product."
      }
    ],
    relatedLinks: [
      { label: "Custom Skincare Formulation", href: "/custom-skincare-formulation", description: "Develop a formula aligned with your concept." },
      { label: "Face Wash Manufacturer", href: "/face-wash-manufacturer", description: "Manufacturing support for cleanser launches." },
      { label: "Packaging Options", href: "/packaging-options", description: "Choose suitable product packaging." },
      { label: "Request Quote", href: "/request-quote", description: "Discuss batch and packaging requirements." }
    ],
    faqs: coreFaqs
  },
  {
    slug: "custom-skincare-formulation",
    kind: "service",
    title: "Custom Skincare Formulation | Kiora CosmoTech",
    description:
      "Custom skincare formulation support for private label brands, startups, salons and derma-cosmetic product concepts in India.",
    h1: "Custom Skincare Formulation",
    eyebrow: "Formula development support",
    intro:
      "Kiora CosmoTech helps brands explore custom skincare formulation by translating product ideas into practical textures, active choices and packaging-ready concepts.",
    directAnswer: {
      question: "What is custom skincare formulation?",
      answer:
        "Custom skincare formulation is the process of developing a cosmetic formula around a brand's desired product type, texture, actives, sensory profile, packaging and target user."
    },
    sections: [
      {
        heading: "From idea to workable formula",
        body:
          "The formulation discussion covers product objective, ingredient direction, texture, fragrance, finish, packaging compatibility and realistic launch timelines.",
        points: ["Active-led concepts", "Texture and sensorial planning", "Packaging compatibility thinking"]
      },
      {
        heading: "Ready formula vs custom formula",
        body:
          "Ready formulas are faster to launch. Custom formulas provide stronger differentiation but may need more sampling, feedback and stability review where applicable."
      },
      {
        heading: "Best suited products",
        body:
          "Custom formulation is useful for serums, moisturizers, gels, derma-inspired cosmetics, sunscreen concepts, cleansers and premium haircare products."
      }
    ],
    relatedLinks: [
      { label: "Face Serum Manufacturer", href: "/face-serum-manufacturer", description: "Active-led serum manufacturing support." },
      { label: "Derma Cosmetic Manufacturer", href: "/derma-cosmetic-manufacturer", description: "Derma-inspired cosmetic product development." },
      { label: "Private Label Cosmetics", href: "/private-label-cosmetics-manufacturer-india", description: "Launch under your own brand." },
      { label: "Request Quote", href: "/request-quote", description: "Discuss your product idea." }
    ],
    faqs: coreFaqs
  },
  {
    slug: "skincare-manufacturer-india",
    kind: "category",
    title: "Skincare Manufacturer in India | Private Label Skincare",
    description:
      "Kiora CosmoTech is a skincare manufacturer in India supporting face wash, serum, sunscreen, moisturizer, cream, gel and body lotion manufacturing.",
    h1: "Skincare Manufacturer in India",
    eyebrow: "Skincare-focused cosmetic manufacturing",
    intro:
      "Kiora CosmoTech manufactures skincare products for private label, third party and contract manufacturing requirements across India.",
    directAnswer: {
      question: "What type of skincare products can be manufactured under private label?",
      answer:
        "Private label skincare can include face wash, face serum, sunscreen, moisturizer, cream, gel, body lotion and derma-inspired cosmetic products."
    },
    sections: [
      {
        heading: "Skincare manufacturing capabilities",
        body:
          "The skincare range covers cleansers, leave-on active products, moisturizers, gels, creams, SPF-positioned products and body care formats.",
        points: ["Face care products", "Body care products", "Active-led skincare formats"]
      },
      {
        heading: "R&D and formulation support",
        body:
          "Brands can discuss ready formulas or custom formulation pathways depending on differentiation needs, budget, MOQ and launch timeline."
      },
      {
        heading: "Packaging support",
        body:
          "Packaging formats include tubes, jars, bottles, pumps, airless bottles, dropper bottles, labels and mono cartons depending on product fit."
      }
    ],
    relatedLinks: [
      { label: "Face Wash Manufacturer", href: "/face-wash-manufacturer", description: "Cleanser manufacturing support." },
      { label: "Face Serum Manufacturer", href: "/face-serum-manufacturer", description: "Premium serum manufacturing." },
      { label: "Sunscreen Manufacturer", href: "/sunscreen-manufacturer", description: "SPF-positioned product support." },
      { label: "Moisturizer Manufacturer", href: "/moisturizer-manufacturer", description: "Hydrating skincare products." }
    ],
    faqs: coreFaqs
  },
  {
    slug: "haircare-manufacturer-india",
    kind: "category",
    title: "Haircare Manufacturer in India | Private Label Haircare",
    description:
      "Private label haircare manufacturing in India for shampoo, hair serum, hair oil and hair mask products with packaging support.",
    h1: "Haircare Manufacturer in India",
    eyebrow: "Haircare product manufacturing",
    intro:
      "Kiora CosmoTech supports haircare product manufacturing for salons, D2C brands, creators and personal care companies.",
    directAnswer: {
      question: "What haircare products can be manufactured?",
      answer:
        "Haircare manufacturing can include shampoo, hair serum, hair oil and hair mask products with brand-specific packaging and formula direction."
    },
    sections: [
      {
        heading: "Haircare categories",
        body:
          "Brands can build a focused haircare range across cleansing, conditioning, oiling and leave-on finishing products.",
        points: ["Shampoo", "Hair serum", "Hair oil", "Hair mask"]
      },
      {
        heading: "Salon and D2C friendly formats",
        body:
          "Haircare products can be positioned for salon retail, online D2C launches, influencer-led brands and traditional personal care distribution."
      }
    ],
    relatedLinks: [
      { label: "Shampoo Manufacturer", href: "/shampoo-manufacturer", description: "Private label shampoo manufacturing." },
      { label: "Hair Serum Manufacturer", href: "/hair-serum-manufacturer", description: "Leave-on hair serum products." },
      { label: "Hair Oil Manufacturer", href: "/hair-oil-manufacturer", description: "Cosmetic hair oil manufacturing." },
      { label: "Hair Mask Manufacturer", href: "/hair-mask-manufacturer", description: "Salon-inspired hair mask formats." }
    ],
    faqs: coreFaqs
  },
  {
    slug: "personal-care-manufacturer-india",
    kind: "category",
    title: "Personal Care Manufacturer in India | Kiora CosmoTech",
    description:
      "Personal care manufacturing in India for body wash, hand wash, body lotion and daily-use cosmetic products with private label support.",
    h1: "Personal Care Manufacturer in India",
    eyebrow: "Daily-use personal care products",
    intro:
      "Kiora CosmoTech manufactures personal care formats for brands that want practical, repeat-use products with strong packaging and fragrance direction.",
    directAnswer: {
      question: "What personal care products can startup brands launch?",
      answer:
        "Startup brands can launch body wash, hand wash, body lotion and related daily-use personal care products under private label or third party manufacturing."
    },
    sections: [
      {
        heading: "Personal care range support",
        body:
          "The personal care category works well for D2C brands, hospitality retail, salon extensions and everyday consumer product lines.",
        points: ["Body wash", "Hand wash", "Body lotion", "Bath and body care extensions"]
      },
      {
        heading: "Packaging and dispatch",
        body:
          "Bottle, pump, label, refill and carton options can be discussed based on product format, target price and distribution channel."
      }
    ],
    relatedLinks: [
      { label: "Body Wash Manufacturer", href: "/body-wash-manufacturer", description: "Private label body wash production." },
      { label: "Hand Wash Manufacturer", href: "/hand-wash-manufacturer", description: "Liquid hand wash manufacturing." },
      { label: "Body Lotion Manufacturer", href: "/body-lotion-manufacturer", description: "Body moisturization products." },
      { label: "Request Quote", href: "/request-quote", description: "Plan your personal care launch." }
    ],
    faqs: coreFaqs
  },
  {
    slug: "packaging-options",
    kind: "support",
    title: "Cosmetic Packaging Options | Kiora CosmoTech",
    description:
      "Explore cosmetic packaging options including tubes, jars, bottles, pumps, airless bottles, droppers, labels, cartons and shrink wrapping.",
    h1: "Packaging Options",
    eyebrow: "Packaging support for cosmetic brands",
    intro:
      "Kiora CosmoTech helps brands choose packaging formats that fit the formula, brand positioning, MOQ and retail channel.",
    directAnswer: {
      question: "What packaging options are available for cosmetic manufacturing?",
      answer:
        "Common cosmetic packaging options include tubes, jars, bottles, pumps, airless bottles, dropper bottles, sachets where applicable, labels, mono cartons, outer cartons and shrink wrapping."
    },
    sections: [
      {
        heading: "Primary packaging",
        body:
          "Primary packaging should match the formula viscosity, usage style and price positioning.",
        points: ["Tubes", "Jars", "Bottles", "Pumps", "Airless bottles", "Dropper bottles", "Sachets where applicable"]
      },
      {
        heading: "Secondary and display packaging",
        body:
          "Brands can discuss labels, outer cartons, mono cartons, shrink wrapping and display packaging for retail or marketplace readiness.",
        points: ["Labels", "Outer cartons", "Mono cartons", "Shrink wrapping", "Display packaging"]
      }
    ],
    relatedLinks: productLinks,
    faqs: coreFaqs
  },
  {
    slug: "manufacturing-process",
    kind: "support",
    title: "Cosmetic Manufacturing Process | Kiora CosmoTech",
    description:
      "Understand Kiora CosmoTech's step-by-step cosmetic manufacturing process from product idea discussion to dispatch.",
    h1: "Manufacturing Process",
    eyebrow: "From product idea to dispatch",
    intro:
      "A clear manufacturing process helps brands plan samples, packaging, quote approvals, artwork, production and dispatch without confusion.",
    directAnswer: {
      question: "How does cosmetic manufacturing work?",
      answer:
        "Cosmetic manufacturing usually moves from product idea discussion to formula selection or development, packaging selection, sampling, quote approval, artwork coordination, production, quality check and dispatch."
    },
    sections: [
      {
        heading: "Step-by-step process",
        body:
          "The process is designed to turn a product concept into a packed commercial batch with practical checkpoints.",
        points: [
          "Product idea discussion",
          "Formula selection or development",
          "Packaging selection",
          "Sampling",
          "Quote approval",
          "Artwork and label coordination",
          "Manufacturing",
          "Filling and packing",
          "Quality check",
          "Dispatch"
        ]
      }
    ],
    relatedLinks: [
      { label: "Private Label Cosmetics", href: "/private-label-cosmetics-manufacturer-india", description: "Start with private label manufacturing." },
      { label: "Custom Skincare Formulation", href: "/custom-skincare-formulation", description: "Plan a differentiated formula." },
      { label: "Quality and Compliance", href: "/quality-and-compliance", description: "Review quality checkpoints." },
      { label: "Request Quote", href: "/request-quote", description: "Discuss your manufacturing workflow." }
    ],
    faqs: coreFaqs
  },
  {
    slug: "quality-and-compliance",
    kind: "support",
    title: "Quality and Compliance | Kiora CosmoTech",
    description:
      "Quality-driven and compliance-focused cosmetic manufacturing support covering raw materials, in-process checks, finished products and documentation.",
    h1: "Quality and Compliance",
    eyebrow: "Quality-driven cosmetic manufacturing",
    intro:
      "Kiora CosmoTech follows a quality-driven, compliance-focused approach to cosmetic manufacturing and documentation coordination.",
    directAnswer: {
      question: "What quality checks matter in cosmetic manufacturing?",
      answer:
        "Important cosmetic manufacturing checks include raw material review, in-process observations, finished product checks, batch documentation, product specification support and label declaration coordination."
    },
    sections: [
      {
        heading: "Quality-driven manufacturing",
        body:
          "The quality approach focuses on practical controls during raw material handling, manufacturing, filling, packing and dispatch readiness.",
        points: ["Raw material checks", "In-process checks", "Finished product checks", "Batch documentation"]
      },
      {
        heading: "Documentation support",
        body:
          "Kiora CosmoTech can support product specifications, label declaration inputs and stability support where applicable to the product and project scope.",
        points: ["Product specification support", "Label declaration support", "Stability support where applicable", "Compliance-focused operations"]
      }
    ],
    relatedLinks: [
      { label: "Sunscreen Manufacturer", href: "/sunscreen-manufacturer", description: "Quality-focused SPF-positioned product support." },
      { label: "Derma Cosmetic Manufacturer", href: "/derma-cosmetic-manufacturer", description: "Active-led derma cosmetic products." },
      { label: "Manufacturing Process", href: "/manufacturing-process", description: "Review process checkpoints." },
      { label: "Request Quote", href: "/request-quote", description: "Discuss compliance needs." }
    ],
    faqs: documentsFaqs
  },
  {
    slug: "startup-cosmetic-brand-support",
    kind: "support",
    title: "Startup Cosmetic Brand Support | Kiora CosmoTech",
    description:
      "Startup cosmetic brand support for first-time founders, influencers, salons, dermatologists and D2C brands launching skincare in India.",
    h1: "Startup Cosmetic Brand Support",
    eyebrow: "Launch guidance for new beauty brands",
    intro:
      "Kiora CosmoTech helps first-time founders and growing beauty teams plan product selection, packaging, MOQ, quote discussions and launch roadmap.",
    directAnswer: {
      question: "How can I start my own skincare brand in India?",
      answer:
        "To start a skincare brand in India, choose a focused product range, decide ready or custom formulas, select packaging, plan MOQ and pricing, prepare artwork, approve samples and place a manufacturing order."
    },
    sections: [
      {
        heading: "Who we support",
        body:
          "The support model is useful for founders who need manufacturing clarity before investing heavily in product development or packaging.",
        points: ["First-time founders", "Influencers", "Salons", "Dermatologists", "Small D2C brands"]
      },
      {
        heading: "Launch roadmap",
        body:
          "Kiora CosmoTech can guide product selection, low MOQ options where practical, packaging direction, sampling, quote support and launch sequencing.",
        points: ["Low MOQ options where possible", "Product selection", "Packaging guidance", "Quote support"]
      }
    ],
    relatedLinks: [
      { label: "How to Start a Skincare Brand", href: "/blog/how-to-start-skincare-brand-india", description: "Read the startup launch guide." },
      { label: "Private Label Cosmetics", href: "/private-label-cosmetics-manufacturer-india", description: "Explore private label options." },
      { label: "Packaging Options", href: "/packaging-options", description: "Plan packaging formats." },
      { label: "Request Quote", href: "/request-quote", description: "Start your quote request." }
    ],
    faqs: coreFaqs
  },
  {
    slug: "request-quote",
    kind: "support",
    title: "Request Cosmetic Manufacturing Quote | Kiora CosmoTech",
    description:
      "Request a skincare, haircare, derma-cosmetic or personal care manufacturing quote from Kiora CosmoTech in India.",
    h1: "Request Manufacturing Quote",
    eyebrow: "Tell us what you want to manufacture",
    intro:
      "Share your product category, quantity, packaging preference and formula direction so Kiora CosmoTech can understand your manufacturing requirement.",
    directAnswer: {
      question: "What details are needed for a cosmetic manufacturing quote?",
      answer:
        "A useful quote request includes product category, product type, required quantity, packaging requirement, formula preference, city, brand stage and any special notes."
    },
    sections: [
      {
        heading: "Before you request a quote",
        body:
          "The more specific your product and packaging details are, the easier it is to discuss MOQ, launch timeline and quote direction.",
        points: ["Product category", "Quantity", "Packaging requirement", "Ready or custom formula preference"]
      }
    ],
    relatedLinks: productLinks,
    faqs: coreFaqs
  }
];

export const getContentPage = (slug: string) => contentPages.find((page) => page.slug === slug);

export const contentPageSlugs = contentPages.map((page) => page.slug);
