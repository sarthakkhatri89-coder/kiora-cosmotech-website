import { coreFaqs, documentsFaqs, type FAQ } from "./faqs";

export type ContentPage = {
  slug: string;
  kind: "service" | "category" | "support" | "company" | "legal";
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

const privateLabelFaqs: FAQ[] = [
  {
    question: "What is private label cosmetic manufacturing?",
    answer:
      "Private label cosmetic manufacturing lets a brand launch skincare, haircare or personal care products under its own brand name using selected formulas, approved packaging and brand-specific labels."
  },
  {
    question: "Is private label suitable for startup skincare brands?",
    answer:
      "Yes. Private label is often suitable for startup skincare brands because it can simplify first-product planning, packaging selection and MOQ discussion compared with a fully custom launch."
  },
  {
    question: "What should be finalized before private label production starts?",
    answer:
      "A cleaner private label brief usually includes product category, likely formula route, pack type, fill size, artwork status, MOQ direction and launch timeline."
  },
  {
    question: "Can Kiora CosmoTech support packaging and artwork planning?",
    answer:
      "Yes. Packaging selection, label declaration input and artwork-sizing discussion can be supported where applicable so the final product brief is easier to move into production."
  }
];

const skincareHubFaqs: FAQ[] = [
  {
    question: "What skincare products can Kiora CosmoTech manufacture?",
    answer:
      "Kiora CosmoTech can support face wash, face serum, sunscreen, moisturizer, cream, gel, body lotion and derma-inspired cosmetic product categories depending on the brand brief."
  },
  {
    question: "Is this page for private label only?",
    answer:
      "No. This page works as a skincare category hub for brands comparing product directions before choosing a private label, third party or contract manufacturing route."
  },
  {
    question: "How should a new skincare brand choose its first products?",
    answer:
      "A new skincare brand usually launches more cleanly when it starts with a tighter routine such as cleanser, serum, moisturizer or sunscreen rather than too many unrelated SKUs."
  },
  {
    question: "Can packaging be standardized across a skincare range?",
    answer:
      "Yes. Range-level packaging planning can align tubes, droppers, pumps, jars and cartons more consistently across cleanser, treatment and hydration products."
  }
];

const thirdPartyFaqs: FAQ[] = [
  {
    question: "What is third party cosmetic manufacturing?",
    answer:
      "Third party cosmetic manufacturing means a brand outsources production, filling and packing to a manufacturing partner while focusing on sales, distribution and market growth."
  },
  {
    question: "How is third party manufacturing different from private label?",
    answer:
      "Third party manufacturing is more execution-led and production-oriented, while private label usually focuses more directly on launch-ready product selection, packaging and brand rollout."
  },
  {
    question: "What information helps a third party manufacturing quote move faster?",
    answer:
      "A faster third party manufacturing discussion usually needs product category, formula direction, pack type, quantity, artwork status and expected dispatch timeline."
  },
  {
    question: "Can third party manufacturing support repeat batch planning?",
    answer:
      "Yes. Third party manufacturing is often used by brands that need repeat production, packaging consistency and clearer batch-execution planning."
  }
];

const contractFaqs: FAQ[] = [
  {
    question: "What is contract cosmetic manufacturing?",
    answer:
      "Contract cosmetic manufacturing is a structured production arrangement where the product scope, specifications, packaging and batch expectations are agreed in a more formal operating model."
  },
  {
    question: "How is contract manufacturing different from third party manufacturing?",
    answer:
      "Contract manufacturing usually leans more heavily into structured specifications, repeat batch discipline, packaging coordination and agreed production scope than the broader outsourced-production language used on third party pages."
  },
  {
    question: "Who usually chooses contract manufacturing?",
    answer:
      "Contract manufacturing is often chosen by existing brands, marketers, distributors, clinics or salon-led ranges that already know the product scope and need repeatable production planning."
  },
  {
    question: "What should be approved before contract production begins?",
    answer:
      "Product category, formula direction, pack type, label scope, fill size, batch quantity and dispatch expectation should be aligned before contract production begins."
  }
];

const packagingFaqs: FAQ[] = [
  {
    question: "How do I choose the right cosmetic packaging?",
    answer:
      "The right cosmetic packaging depends on formula viscosity, usage style, target customer, fill size, label area, MOQ and overall price positioning."
  },
  {
    question: "What packaging works well for face serum products?",
    answer:
      "Face serum products often suit droppers, pumps or airless bottles depending on viscosity, oxidation sensitivity and the desired user experience."
  },
  {
    question: "Can sunscreen and face wash use the same packaging style?",
    answer:
      "Sometimes, but not always. Face wash often suits tubes or bottles, while sunscreen may need packaging that better supports claim communication, fill size control and daily-use handling."
  },
  {
    question: "Should artwork be started before packaging is finalized?",
    answer:
      "Usually no. Artwork moves more smoothly after the actual pack, label area, closure type and carton dimensions are reasonably confirmed."
  }
];

const processFaqs: FAQ[] = [
  {
    question: "What are the main steps in cosmetic manufacturing?",
    answer:
      "The main steps usually include product brief discussion, formula selection or development, packaging selection, sampling, artwork coordination, batch manufacturing, filling, packing, quality review and dispatch planning."
  },
  {
    question: "Why do manufacturing timelines change?",
    answer:
      "Timelines often change because the product brief is still evolving, packaging is pending, artwork is not approved yet or the product category needs additional planning."
  },
  {
    question: "What helps reduce manufacturing delays?",
    answer:
      "A tighter product brief, earlier packaging confirmation, cleaner artwork inputs and realistic MOQ and launch-timeline discussion usually reduce delays."
  },
  {
    question: "When should a brand request a quote?",
    answer:
      "A brand should request a quote once the product category, likely pack type, quantity direction and formula route are clear enough for a practical manufacturing conversation."
  }
];

const startupFaqs: FAQ[] = [
  {
    question: "How can I start my own skincare brand in India?",
    answer:
      "A practical skincare launch usually starts with a focused product range, packaging direction, MOQ discussion, sample review and a realistic quote brief."
  },
  {
    question: "What is a good first product range for a startup beauty brand?",
    answer:
      "Many startup skincare brands begin with a tighter routine such as face wash, face serum, moisturizer or sunscreen, while haircare brands may start with shampoo and hair serum."
  },
  {
    question: "Can startups discuss lower MOQ options?",
    answer:
      "Yes, where practical. Lower-risk launches often depend on choosing fewer SKUs, standard pack formats and a more focused first brief."
  },
  {
    question: "What should a founder prepare before requesting a quote?",
    answer:
      "A founder should prepare the product category, likely formula route, pack preference, quantity range, target price band, city and launch timeline."
  }
];

const requestQuoteFaqs: FAQ[] = [
  {
    question: "What details are needed for a cosmetic manufacturing quote?",
    answer:
      "A strong quote request includes product category, product type, pack type, fill size, expected quantity, formula direction, target price band and launch timeline."
  },
  {
    question: "Can I request a quote for multiple products together?",
    answer:
      "Yes. Brands can request a quote for a wider product range, especially when they want to plan a cleanser, serum, moisturizer, sunscreen or haircare lineup together."
  },
  {
    question: "Does packaging affect the quote significantly?",
    answer:
      "Yes. Packaging can strongly affect cost, MOQ, label planning, carton size and production practicality, so it should be included as early as possible in the quote brief."
  },
  {
    question: "What is the fastest way to start the quote discussion?",
    answer:
      "The fastest route is to share a clear product brief through the form or WhatsApp with product type, quantity, pack style and launch direction."
  }
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
    faqs: privateLabelFaqs
  },
  {
    slug: "privacy-policy",
    kind: "legal",
    title: "Privacy Policy | Kiora CosmoTech",
    description:
      "Privacy Policy for Kiora CosmoTech covering enquiry information, communication handling and website data use for cosmetic manufacturing discussions.",
    h1: "Privacy Policy",
    eyebrow: "Website and enquiry privacy",
    intro:
      "This Privacy Policy explains how Kiora CosmoTech handles website enquiries, contact information and communication shared through the website, email, phone or WhatsApp.",
    directAnswer: {
      question: "What information does Kiora CosmoTech collect?",
      answer:
        "Kiora CosmoTech may collect the contact and project information you share when you request a quote, send an email, call, message on WhatsApp or submit a website enquiry so the team can respond to your cosmetic manufacturing requirement."
    },
    sections: [
      {
        heading: "Information shared through enquiries",
        body:
          "When you contact Kiora CosmoTech, you may share details such as your name, company name, mobile number, email address, product category, quantity requirement, packaging preference, target city and message. This information is used to understand your manufacturing requirement and respond with practical guidance."
      },
      {
        heading: "How enquiry information is used",
        body:
          "Enquiry information is used for quote discussion, product-category guidance, packaging and MOQ communication, follow-up on your request and general customer-support communication related to cosmetic manufacturing discussions."
      },
      {
        heading: "Communication channels",
        body:
          "Kiora CosmoTech may respond through email, phone or WhatsApp based on the contact information you provide. Communication is intended for your manufacturing enquiry, follow-up discussion and related project coordination."
      },
      {
        heading: "Website usage and third-party tools",
        body:
          "The website may use hosting, analytics, form-handling, messaging or performance tools where applicable. These may process limited technical information such as browser, device or page-usage data to support website operation, communication and improvement."
      },
      {
        heading: "Data sharing and protection",
        body:
          "Kiora CosmoTech does not present website enquiry information as public data. Information may be shared only with internal team members, service providers or partners involved in responding to the enquiry, managing communication or operating the website where reasonably required."
      },
      {
        heading: "Your contact choices",
        body:
          "If you want to update or remove previously shared enquiry information, you can contact Kiora CosmoTech through the website contact details and request a review of the information connected to your enquiry."
      }
    ],
    relatedLinks: [
      { label: "Request Quote", href: "/request-quote", description: "Submit your manufacturing requirement through the website form." },
      { label: "About Kiora CosmoTech", href: "/about-kiora-cosmotech", description: "Learn more about the company and manufacturing focus." },
      { label: "Private Label Cosmetics", href: "/private-label-cosmetics-manufacturer-india", description: "Explore private label cosmetic manufacturing support." },
      { label: "Contact on WhatsApp", href: "/request-quote", description: "Use the quote page to begin a direct manufacturing discussion." }
    ],
    faqs: []
  },
  {
    slug: "terms-and-conditions",
    kind: "legal",
    title: "Terms and Conditions | Kiora CosmoTech",
    description:
      "Terms and Conditions for using the Kiora CosmoTech website, submitting enquiries and discussing cosmetic manufacturing requirements.",
    h1: "Terms and Conditions",
    eyebrow: "Website use and enquiry terms",
    intro:
      "These Terms and Conditions describe the general use of the Kiora CosmoTech website and the nature of information shared during cosmetic manufacturing discussions.",
    directAnswer: {
      question: "What do these Terms and Conditions cover?",
      answer:
        "These terms explain how visitors may use the website, what enquiry communication is intended for, and how manufacturing discussions, product information and website content should be understood."
    },
    sections: [
      {
        heading: "Website use",
        body:
          "This website is intended to provide information about Kiora CosmoTech, cosmetic manufacturing categories, product concepts, quote discussions and related business communication. Visitors should use the website for lawful business, informational and enquiry purposes."
      },
      {
        heading: "Product and manufacturing information",
        body:
          "Product concepts, category pages, FAQs, blog articles and related content are provided for general information, commercial discussion and manufacturing planning. Final formula, packaging, pricing, MOQ, claim language, testing requirement and project scope may change depending on the actual product brief and applicable regulations."
      },
      {
        heading: "No medical or guaranteed outcome claims",
        body:
          "Website content is intended for cosmetic manufacturing communication and product-planning discussion. It should not be interpreted as medical advice, disease-treatment guidance or a guarantee of commercial, technical or ranking outcomes."
      },
      {
        heading: "Quote and communication expectations",
        body:
          "Submitting an enquiry or requesting a quote does not automatically create a manufacturing agreement. Product discussions, quotation, sampling, packaging coordination, documentation inputs and project timelines are subject to commercial review and mutual confirmation."
      },
      {
        heading: "Intellectual property and content use",
        body:
          "Website copy, branding elements, layout, images and written content are intended for Kiora CosmoTech business communication. They should not be copied, republished or reused in a misleading manner without permission."
      },
      {
        heading: "Updates to website information",
        body:
          "Kiora CosmoTech may update website content, product categories, process descriptions, quote guidance, contact details or general business information as required. Visitors should confirm current commercial details directly during project discussions."
      }
    ],
    relatedLinks: [
      { label: "Request Quote", href: "/request-quote", description: "Share your requirement to begin a manufacturing discussion." },
      { label: "Quality and Compliance", href: "/quality-and-compliance", description: "Review the quality-focused approach described on the website." },
      { label: "Manufacturing Process", href: "/manufacturing-process", description: "See the broad workflow from discussion to dispatch." },
      { label: "Privacy Policy", href: "/privacy-policy", description: "Read how enquiry information is handled." }
    ],
    faqs: []
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
    faqs: thirdPartyFaqs
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
    faqs: contractFaqs
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
    faqs: skincareHubFaqs
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
    faqs: packagingFaqs
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
    faqs: processFaqs
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
    faqs: startupFaqs
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
    faqs: requestQuoteFaqs
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

const updateContentPage = (slug: string, updates: Partial<ContentPage>) => {
  const page = contentPages.find((item) => item.slug === slug);
  if (page) Object.assign(page, updates);
};

const skincareProductLinks = [
  { label: "Face Wash Manufacturer", href: "/face-wash-manufacturer", description: "Cleanser manufacturing for face care brands." },
  { label: "Face Serum Manufacturer", href: "/face-serum-manufacturer", description: "Active-led serum manufacturing with dropper, pump and airless options." },
  { label: "Sunscreen Manufacturer", href: "/sunscreen-manufacturer", description: "SPF-positioned skincare manufacturing with texture and packaging planning." },
  { label: "Moisturizer Manufacturer", href: "/moisturizer-manufacturer", description: "Gel cream, lotion and hydrating moisturizer manufacturing." },
  { label: "Cream Manufacturer", href: "/cream-manufacturer", description: "Cosmetic cream manufacturing with jar, tube and airless packaging." },
  { label: "Gel Manufacturer", href: "/gel-manufacturer", description: "Aloe, hydrating and active-led skincare gel manufacturing." },
  { label: "Body Lotion Manufacturer", href: "/body-lotion-manufacturer", description: "Body care lotion manufacturing with bottle, pump and tube formats." },
  { label: "Derma Cosmetic Manufacturer", href: "/derma-cosmetic-manufacturer", description: "Active-led derma-inspired cosmetic product manufacturing." }
];

updateContentPage("about-kiora-cosmotech", {
  title: "About Kiora CosmoTech | Cosmetic Manufacturer India",
  description:
    "Learn about Kiora CosmoTech, a skincare-focused cosmetic manufacturer in India for private label, third party and custom formulation.",
  intro:
    "Kiora CosmoTech is a skincare-focused cosmetic manufacturing company built for brands that need clear formulation, packaging, MOQ, batch planning, filling, packing, documentation inputs and dispatch planning without exaggerated claims.",
  sections: [
    {
      heading: "Who is Kiora CosmoTech",
      body:
        "Kiora CosmoTech works with skincare, derma-cosmetic, haircare and personal care brands that want private label, third party or contract cosmetic manufacturing in India. The company is positioned for founders and growing teams that need practical product conversations before commercial batches begin.",
      points: ["Private label manufacturing", "Third party manufacturing", "Custom skincare formulation"]
    },
    {
      heading: "Why Kiora CosmoTech was created",
      body:
        "The company was created to make cosmetic manufacturing conversations more structured for modern beauty brands. Many founders know the product they want to launch but need help translating that idea into formula direction, pack type, fill size, MOQ, artwork inputs and production planning."
    },
    {
      heading: "Skincare-focused manufacturing philosophy",
      body:
        "Kiora CosmoTech keeps its manufacturing philosophy focused on skincare-led categories rather than trying to look like a generic supplier. This focus helps conversations stay closer to texture, actives, skin feel, packaging compatibility, label declaration review and repeat-batch planning."
    },
    {
      heading: "Product categories we focus on",
      body:
        "The focus categories include face wash, face serum, sunscreen, moisturizer, cream, gel, body lotion, derma-cosmetic products, shampoo, hair serum, hair oil, hair mask, body wash and hand wash. These categories are suitable for D2C brands, salons, clinics, influencer-led brands and distributors.",
      points: ["Skincare", "Derma cosmetic", "Haircare", "Personal care"]
    },
    {
      heading: "Our approach to private label and third party manufacturing",
      body:
        "Private label projects usually begin with product selection, formula direction, packaging selection and label planning. Third party manufacturing projects focus more heavily on batch planning, production requirements, filling and packing, quality checks and dispatch timelines."
    },
    {
      heading: "Quality-driven and compliance-focused mindset",
      body:
        "Kiora CosmoTech uses careful wording because cosmetic manufacturing should not depend on inflated claims. The quality mindset includes raw material review, in-process observations, filling and packing checks, finished goods review, product specification inputs and label declaration support where applicable."
    },
    {
      heading: "Startup brand support philosophy",
      body:
        "Startup brands need clarity before they spend on packaging, artwork and inventory. Kiora CosmoTech helps founders think through first-product selection, practical MOQ, ready formula versus custom formula, product range logic and launch timelines."
    },
    {
      heading: "Founder and management note",
      body:
        "Founder or management note placeholder: Kiora CosmoTech is built around the belief that beauty manufacturing should be transparent, category-focused and practical for both new and growing brands. A named founder note can be added here when the brand is ready to publish leadership details."
    },
    {
      heading: "Facility and photos placeholder",
      body:
        "Facility/photos placeholder: This section can be updated with original photos of skincare formulation discussion, cosmetic manufacturing area, filling and packing workflow, packaging material display and finished product review once approved brand assets are available."
    },
    {
      heading: "Real address and contact placeholder",
      body:
        "Address/contact placeholder: Kiora CosmoTech currently uses a pan-India manufacturing contact model with placeholder contact details. Add the verified office address, phone number and business email here before final public launch."
    }
  ],
  relatedLinks: [
    { label: "Private Label Cosmetics", href: "/private-label-cosmetics-manufacturer-india", description: "Explore private label manufacturing." },
    { label: "Third Party Manufacturing", href: "/third-party-cosmetic-manufacturing-india", description: "Review outsourced manufacturing workflows." },
    { label: "Quality and Compliance", href: "/quality-and-compliance", description: "Understand the quality-driven mindset." },
    { label: "Request Quote", href: "/request-quote", description: "Share your product requirement." }
  ]
});

updateContentPage("skincare-manufacturer-india", {
  title: "Skincare Manufacturer in India | Private Label Skincare",
  description:
    "Kiora CosmoTech is a skincare manufacturer in India supporting face wash, face serum, sunscreen, moisturizer, cream, gel and body lotion manufacturing.",
  intro:
    "Kiora CosmoTech is a skincare manufacturer in India for brands planning face wash, face serum, sunscreen, moisturizer, cream, gel, body lotion and derma-inspired cosmetic ranges. This page is designed as a skincare category hub so buyers can compare product formats, packaging directions, formula routes and range-planning decisions before moving into a more detailed manufacturing discussion.",
  sections: [
    {
      heading: "Skincare category planning for modern beauty brands",
      body:
        "As a skincare manufacturer in India, Kiora CosmoTech works with founders, D2C teams, salons, clinics, influencers and distributors that want a clear route from product idea to a more structured skincare range. The first decision is usually category architecture: which cleanser, treatment, hydration and protection products should come first, and how should the range fit the target buyer and price band.",
      points: ["Face wash and cleanser categories", "Treatment-led serum categories", "Hydration, protection and routine planning"]
    },
    {
      heading: "Product categories this page helps you compare",
      body:
        "This page supports category comparison across face wash, face serum, sunscreen, moisturizer, cream, gel, body lotion and derma-cosmetic directions. It should help a buyer decide which product types belong in the first launch and which pages to visit next for deeper manufacturing planning.",
      points: ["Face wash", "Face serum", "Sunscreen", "Moisturizer", "Cream", "Gel", "Body lotion", "Derma cosmetic"]
    },
    {
      heading: "Ready formula or custom formulation for skincare ranges",
      body:
        "Some skincare ranges move faster through a ready-formula private label route, while others need custom formulation for a more ownable texture, ingredient story or packaging requirement. The right path depends on launch timeline, target price, packaging choice, differentiation needs and how many products are being developed together."
    },
    {
      heading: "Packaging consistency across the skincare range",
      body:
        "Skincare brand building works better when the packaging system feels coordinated. Face wash may suit tubes or bottles, serums often use droppers, pumps or airless packs, and moisturizers or creams may use jars, pumps or tubes. A range-level packaging discussion prevents mismatch across labels, cartons, fill sizes and shelf presentation."
    },
    {
      heading: "MOQ, sampling and quote readiness",
      body:
        "MOQ in skincare manufacturing depends on formula type, packaging format, fill size, decoration scope and whether the brand wants a focused first launch or a wider routine. Sampling, packaging approval and quote accuracy all improve when the buyer shares product category, pack preference, target price band and likely launch timeline early."
    },
    {
      heading: "Who should use this skincare page",
      body:
        "This page is useful for startup skincare brands, D2C founders, clinics, salons, dermatologist-led concepts, exporters and distributors who first need to map the product range before choosing a private label, third party or contract manufacturing route."
    }
  ],
  relatedLinks: [
    ...skincareProductLinks,
    { label: "Private Label Cosmetics", href: "/private-label-cosmetics-manufacturer-india", description: "Explore launch-ready private label skincare manufacturing." },
    { label: "Third Party Manufacturing", href: "/third-party-cosmetic-manufacturing-india", description: "Compare outsourced production support for skincare ranges." },
    { label: "Custom Skincare Formulation", href: "/custom-skincare-formulation", description: "Develop a differentiated skincare formula." },
    { label: "Packaging Options", href: "/packaging-options", description: "Review skincare packaging formats." },
    { label: "Request Quote", href: "/request-quote", description: "Share product, MOQ and packaging requirements." }
  ]
});

updateContentPage("private-label-cosmetics-manufacturer-india", {
  description:
    "Private label cosmetics manufacturer in India for skincare, haircare and personal care brands with formula selection, packaging planning, artwork discussion and startup-friendly launch support.",
  intro:
    "Kiora CosmoTech manufactures private label cosmetics for skincare, haircare, derma-cosmetic and personal care brands that want to sell products under their own brand name. This page is built for launch-ready brand planning: selecting the first products, choosing packaging, discussing artwork inputs, understanding MOQ and turning a broad idea into a more practical manufacturing brief.",
  sections: [
    {
      heading: "How Private Label Cosmetic Manufacturing Works at Kiora CosmoTech",
      body:
        "Private label cosmetic manufacturing means a brand sells cosmetic products under its own label while a manufacturing partner produces, fills and packs the products. The brand controls its positioning, packaging artwork and product range, while the manufacturer handles the agreed formula, batch plan and production workflow."
    },
    {
      heading: "Why startups and growing brands choose private label",
      body:
        "Private label is often the cleanest first route for founders that want faster sampling, clearer SKU planning and easier packaging coordination than a fully custom development path. It helps a new brand focus on product selection, price band, packaging identity and launch sequencing before it takes on deeper formulation complexity."
    },
    {
      heading: "Private label skincare manufacturing",
      body:
        "Private label skincare manufacturing can include face wash, face serum, sunscreen, moisturizers, creams, gels, body lotion and derma-inspired cosmetic products. It is one of the strongest routes for beauty founders because skincare allows clear range planning around routines, skin feel and ingredient-led positioning."
    },
    {
      heading: "Private label haircare manufacturing",
      body:
        "Haircare private label manufacturing covers shampoo, hair serum, hair oil and hair mask products for salons, D2C brands and creator-led personal care lines. Brands can plan fragrance, bottle format, label style, carton requirements and repeat-batch quantities."
    },
    {
      heading: "Private label personal care manufacturing",
      body:
        "Personal care manufacturing can include body wash, hand wash and body lotion products for retail, hospitality, salon and marketplace channels. These products work well for brands that want daily-use formats with strong fragrance, packaging and repeat-purchase potential."
    },
    {
      heading: "Ready formula vs custom formula",
      body:
        "Ready formulas can reduce development time and help brands reach sampling faster. Custom formulas create more differentiation but require deeper work on texture, actives, packaging compatibility, sampling feedback and commercial batch readiness."
    },
    {
      heading: "MOQ, first-product planning and startup manufacturing",
      body:
        "MOQ depends on the formula, packaging, fill size and batch plan. Startup brands should discuss expected order quantity, likely first SKU mix, target price and packaging decoration early so the quote stays realistic and the launch plan does not get crowded with too many formats."
    },
    {
      heading: "Packaging, artwork and label support",
      body:
        "Packaging selection includes tubes, jars, bottles, pumps, airless bottles, droppers, labels, mono cartons and outer cartons. Label declaration review, artwork sizing inputs and product information support help the packaging process stay aligned with the chosen formula, fill size and batch plan."
    },
    {
      heading: "Sampling and approval process",
      body:
        "A typical private label workflow includes requirement discussion, formula selection, packaging selection, sample review, quote approval, artwork and label review, commercial manufacturing, filling and packing, quality checks and dispatch planning."
    },
    {
      heading: "Who this service is for",
      body:
        "Private label cosmetic manufacturing is suitable for first-time founders, D2C brands, salons, clinics, dermatologists, influencers, distributors and exporters that want a manufacturing partner for launch-ready skincare, haircare and personal care products."
    },
    {
      heading: "Common private label product ideas",
      body:
        "Common private label product ideas include niacinamide serum, Vitamin C serum, gel sunscreen, hydrating moisturizer, foaming face wash, aloe gel, body lotion, shampoo, hair serum, hair oil, body wash and hand wash."
    }
  ],
  relatedLinks: [
    { label: "Skincare Manufacturer in India", href: "/skincare-manufacturer-india", description: "Use the skincare hub to compare product categories before launch." },
    { label: "Haircare Manufacturer in India", href: "/haircare-manufacturer-india", description: "Manufacture shampoo, hair serum, hair oil and hair mask products." },
    { label: "Personal Care Manufacturer", href: "/personal-care-manufacturer-india", description: "Build body wash, hand wash and body lotion ranges." },
    { label: "Face Serum Manufacturer", href: "/face-serum-manufacturer", description: "Launch active-led private label serums." },
    { label: "Startup Cosmetic Brand Support", href: "/startup-cosmetic-brand-support", description: "Plan a tighter first launch with packaging and MOQ guidance." },
    { label: "Packaging Options", href: "/packaging-options", description: "Choose tubes, jars, bottles, pumps and cartons." },
    { label: "Request Quote", href: "/request-quote", description: "Share product, MOQ and packaging requirements." }
  ]
});

updateContentPage("third-party-cosmetic-manufacturing-india", {
  description:
    "Third party cosmetic manufacturing in India for skincare, derma-cosmetic, haircare and personal care brands with batch planning, filling, packing, quality checks and dispatch support.",
  intro:
    "Kiora CosmoTech provides third party cosmetic manufacturing for brands that want to outsource production, filling, packing and finished goods review while keeping focus on sales, brand building and distribution. This page is intended for buyers who need operational execution, packaging coordination, batch planning and repeat production support without building their own facility.",
  sections: [
    {
      heading: "What is third party cosmetic manufacturing?",
      body:
        "Third party cosmetic manufacturing means a brand appoints an external cosmetic manufacturer to produce its products. The manufacturer follows the agreed product type, formula direction, packaging selection, batch size and quality checks, while the brand manages marketing, sales and customer relationships."
    },
    {
      heading: "How third party manufacturing works",
      body:
        "The workflow usually moves from product requirement discussion to formula or sample alignment, packaging selection, quote approval, artwork and label review, batch manufacturing, filling and packing, quality checks, finished goods review and dispatch planning."
    },
    {
      heading: "Product categories",
      body:
        "Third party manufacturing can cover skincare, derma-cosmetic, haircare and personal care products including face wash, serums, sunscreen, moisturizers, creams, gels, body lotion, shampoo, hair serum, hair oil, hair mask, body wash and hand wash."
    },
    {
      heading: "Batch planning and operational execution",
      body:
        "Batch planning aligns formula type, MOQ, packaging availability, fill quantity, artwork status and target dispatch timeline. Clear batch planning reduces production confusion, supports repeat manufacturing and helps brands forecast launch inventory across distribution or marketplace channels."
    },
    {
      heading: "Filling and packing",
      body:
        "Filling and packing decisions depend on product viscosity, pack type, cap or pump format, label requirements, carton requirements and shipment handling. These details should be finalized before commercial manufacturing begins."
    },
    {
      heading: "Quality checks",
      body:
        "Quality checks may include raw material review, in-process observations, pH or viscosity checks where relevant, fill weight review, packaging checks and finished goods review. The checks are selected according to the product format and project scope."
    },
    {
      heading: "Packaging and label coordination",
      body:
        "Packaging and label coordination includes primary pack selection, label dimensions, mono carton inputs, ingredient and product information review and dispatch carton planning. Accurate artwork inputs help prevent launch delays."
    },
    {
      heading: "Why brands outsource manufacturing",
      body:
        "Brands outsource manufacturing to reduce operational burden, avoid setting up a production unit, access batch manufacturing expertise and focus internal time on brand strategy, distribution, content, sales and customer acquisition. This page should own that execution-oriented outsourced manufacturing intent more strongly than the contract manufacturing page."
    },
    {
      heading: "Third party manufacturing for startups, salons, clinics, D2C and distributors",
      body:
        "Third party cosmetic manufacturing can work for startup founders, salons, clinics, D2C teams, influencers, distributors and retailers that need reliable product supply with practical MOQ and category planning."
    }
  ],
  relatedLinks: [
    { label: "Private Label Cosmetics", href: "/private-label-cosmetics-manufacturer-india", description: "Compare third party outsourcing with the private label route." },
    { label: "Skincare Manufacturer in India", href: "/skincare-manufacturer-india", description: "Explore skincare manufacturing categories." },
    { label: "Contract Cosmetic Manufacturer", href: "/contract-cosmetic-manufacturer-india", description: "See the more structured contract-manufacturing model." },
    { label: "Manufacturing Process", href: "/manufacturing-process", description: "Review the step-by-step workflow." },
    { label: "Quality and Compliance", href: "/quality-and-compliance", description: "Understand quality checks and documentation inputs." },
    { label: "Packaging Options", href: "/packaging-options", description: "Plan packaging before batch manufacturing." },
    { label: "Request Quote", href: "/request-quote", description: "Get a third party manufacturing quote." }
  ]
});

updateContentPage("quality-and-compliance", {
  intro:
    "Kiora CosmoTech follows a quality-driven and compliance-focused approach to cosmetic manufacturing. The focus is on raw material inward checks, in-process observations, manufacturing area discipline, filling and packing checks, finished goods review, batch documentation, product specification inputs and label declaration review where applicable.",
  sections: [
    {
      heading: "Raw material inward checks",
      body:
        "Raw material inward checks help confirm that material inputs are reviewed before they enter the manufacturing workflow. This may include basic identity, packaging condition, supplier documentation and internal acceptance steps according to project scope."
    },
    {
      heading: "In-process checks",
      body:
        "In-process checks happen during manufacturing and may include observations around appearance, texture, mixing, pH or viscosity where relevant, batch consistency and processing notes."
    },
    {
      heading: "Manufacturing area checks",
      body:
        "Manufacturing area checks are used to keep production activities organized before batch execution. They can include line readiness, equipment readiness, packaging readiness and separation of materials for the planned product."
    },
    {
      heading: "Filling and packing checks",
      body:
        "Filling and packing checks focus on fill quantity, closure fit, pump or cap performance, label placement, carton readiness and pack appearance. The objective is a finished product that is commercially presentable and dispatch-ready."
    },
    {
      heading: "Finished goods review",
      body:
        "Finished goods review includes appearance, packaging condition, fill review and final packing readiness before dispatch planning. The exact review depends on the product format and agreed scope."
    },
    {
      heading: "Batch documentation",
      body:
        "Batch documentation helps maintain a record of production details, batch size, product specification inputs, packaging information and manufacturing notes. It gives brands a clearer commercial record for each approved batch."
    },
    {
      heading: "Product specification support",
      body:
        "Product specification support may include formula description, appearance, packaging format, fill size, ingredient information inputs and other product details needed by the brand for internal records or artwork planning."
    },
    {
      heading: "COA and testing support where applicable",
      body:
        "COA or testing support can be discussed where applicable to the product and project scope. Requirements may vary by formula type, buyer expectation, channel and documentation needs."
    },
    {
      heading: "Label declaration input support",
      body:
        "Label declaration input support helps brands review ingredient and product information needed for packaging artwork. Final label responsibility should be handled carefully by the brand with appropriate compliance review where required."
    },
    {
      heading: "Stability and packaging compatibility discussion",
      body:
        "Stability and packaging compatibility should be discussed for relevant products, especially active-led skincare, sunscreen-positioned products, serums, creams and products using pumps, droppers or airless packaging."
    },
    {
      heading: "Retention sample concept",
      body:
        "Retention samples can be discussed as part of a professional batch record approach. They help keep a reference sample of a produced batch for future visual or packaging comparison where applicable."
    }
  ],
  relatedLinks: [
    { label: "Manufacturing Process", href: "/manufacturing-process", description: "See where quality checks fit into the workflow." },
    { label: "Sunscreen Manufacturer", href: "/sunscreen-manufacturer", description: "Plan quality-focused SPF-positioned products." },
    { label: "Derma Cosmetic Manufacturer", href: "/derma-cosmetic-manufacturer", description: "Explore active-led cosmetic manufacturing." },
    { label: "Request Quote", href: "/request-quote", description: "Discuss documentation and quality requirements." }
  ]
});

const enrichContentPage = (slug: string, updates: Partial<ContentPage> & { additions: ContentPage["sections"] }) => {
  const page = contentPages.find((item) => item.slug === slug);
  if (!page) return;
  const { additions, ...pageUpdates } = updates;
  Object.assign(page, pageUpdates);
  page.sections = [...page.sections, ...additions];
};

enrichContentPage("haircare-manufacturer-india", {
  title: "Haircare Manufacturer in India | Private Label Haircare",
  description:
    "Haircare manufacturer in India for private label shampoo, hair serum, hair oil and hair mask with packaging and batch planning.",
  additions: [
    {
      heading: "Private label haircare manufacturing",
      body:
        "Private label haircare manufacturing helps salons, D2C brands, retailers and distributors launch products under their own brand name. Kiora CosmoTech can discuss shampoo, hair serum, hair oil and hair mask concepts with formula direction, fragrance, viscosity, packaging, label inputs, MOQ and repeat-batch planning.",
      points: ["Shampoo", "Hair serum", "Hair oil", "Hair mask"]
    },
    {
      heading: "Haircare formula and packaging planning",
      body:
        "Haircare products need a clear sensory direction. Shampoo requires attention to foam, fragrance, viscosity and bottle choice. Hair serum needs slip, finish and pump or bottle usability. Hair oil needs fragrance, clarity and cap performance. Hair mask needs jar, tube or tub decisions based on texture and channel."
    },
    {
      heading: "MOQ and buyer readiness",
      body:
        "MOQ for haircare products depends on formula type, packaging size, bottle or jar availability, label requirement and batch setup. Brands should share product type, fill size, packaging preference, expected quantity and target channel before requesting a quote."
    },
    {
      heading: "Suitable haircare brands",
      body:
        "This page is useful for salon retail brands, creator-led haircare lines, D2C founders, distributors and personal care brands expanding from skincare into haircare. A focused first range can start with shampoo and serum, then expand into hair oil or mask after early demand is understood."
    }
  ]
});

enrichContentPage("personal-care-manufacturer-india", {
  title: "Personal Care Manufacturer India | Kiora CosmoTech",
  description:
    "Personal care manufacturer in India for body wash, hand wash and body lotion with private label and third party manufacturing.",
  additions: [
    {
      heading: "Private label personal care manufacturing",
      body:
        "Personal care manufacturing covers daily-use products such as body wash, hand wash and body lotion. These products suit D2C brands, salons, hospitality buyers, distributors and retailers that want practical products with strong fragrance, packaging and repeat-purchase potential.",
      points: ["Body wash", "Hand wash", "Body lotion", "Daily-use personal care"]
    },
    {
      heading: "Product and packaging decisions",
      body:
        "Body wash and hand wash often use bottles, pumps or flip-top caps, while body lotion may use pump bottles, tubes or jars depending on viscosity and price positioning. Packaging should be chosen before label artwork because bottle shape, label area and closure type affect design and dispatch planning."
    },
    {
      heading: "MOQ, filling and packing",
      body:
        "MOQ depends on packaging size, fill volume, fragrance direction, formula type and label or carton requirement. Filling and packing details should be discussed early, especially for pump performance, closure fit, carton planning and finished goods review before dispatch."
    },
    {
      heading: "Who can launch personal care products",
      body:
        "Personal care products work for startup founders, salon owners, wellness brands, hospitality suppliers and distributors. A brand can begin with one hero product such as body wash or body lotion, then extend into hand wash or haircare after sales feedback."
    }
  ]
});

enrichContentPage("packaging-options", {
  title: "Cosmetic Packaging Options | Kiora CosmoTech",
  description:
    "Explore cosmetic packaging options for skincare and personal care manufacturing, including tubes, jars, pumps, droppers and cartons.",
  additions: [
    {
      heading: "How packaging affects cosmetic manufacturing",
      body:
        "Packaging is a manufacturing decision as much as a design decision. The pack affects formula compatibility, fill quantity, label area, carton size, MOQ, dispatch handling and customer experience. Kiora CosmoTech encourages brands to choose packaging before final artwork and before comparing quotes."
    },
    {
      heading: "Face wash packaging options",
      body:
        "Face wash packaging commonly begins with tubes for compact retail launches, while pump bottles and flip-top bottles can work for larger fills, salon-led formats or family-use cleanser products. The pack should match cleanser viscosity, label area and intended usage style."
    },
    {
      heading: "Face serum packaging options",
      body:
        "Face serum packaging often uses droppers, pumps or airless bottles depending on viscosity, oxidation sensitivity, dispensing preference and price positioning. Premium active-led serums usually need packaging that supports cleaner application and a more refined shelf presence."
    },
    {
      heading: "Sunscreen, moisturizer, cream and gel packaging",
      body:
        "Sunscreen often works best in tubes, pumps or airless formats because claim communication, fill size and daily-use handling matter. Moisturizers, creams and gels may use jars, tubes, pumps or airless packs depending on texture, target customer and channel expectations."
    },
    {
      heading: "Shampoo, body wash and body-care packaging",
      body:
        "Shampoo, body wash, hand wash and body lotion often use bottles with flip-top caps or pumps. Bottle size, pump performance, closure fit and label area all influence the commercial feel of the final product, especially for salon retail, hospitality or D2C channels."
    },
    {
      heading: "Label, carton and dispatch planning",
      body:
        "Labels, mono cartons, outer cartons, shrink wrapping and display packaging should be planned with the final pack dimensions. Good packaging planning reduces relabeling, artwork resizing, packing confusion and delays before dispatch, especially when multiple categories are launching together."
    }
  ]
});

enrichContentPage("manufacturing-process", {
  title: "Cosmetic Manufacturing Process | Kiora CosmoTech",
  description:
    "See the cosmetic manufacturing process from product idea and formula selection to packaging, sampling, filling, packing and dispatch.",
  additions: [
    {
      heading: "Why a clear manufacturing process matters",
      body:
        "A structured manufacturing process helps brands avoid confusion between product idea, sample approval, packaging purchase, artwork, commercial batch and dispatch. Each step should create clearer information for the next step so the final product is easier to manufacture and reorder."
    },
    {
      heading: "From idea to manufacturing-ready brief",
      body:
        "The early process should define product category, formula preference, fill size, packaging type, expected quantity, city, launch timeline and whether the product needs ready formula selection or custom formulation. This brief becomes the base for quote planning and sample discussion."
    },
    {
      heading: "Batch planning and production readiness",
      body:
        "Batch planning aligns formula, packaging, raw material inputs, labels, cartons, filling method and production schedule. Brands should approve key details before manufacturing begins because late changes to packaging or artwork can delay filling and packing."
    },
    {
      heading: "Why manufacturing timelines change",
      body:
        "Manufacturing timelines usually change because the brief is still evolving, packaging is not finalized, artwork is pending, samples need revision or a more technical category such as sunscreen requires deeper planning. A tighter quote brief usually creates a faster and cleaner production timeline."
    },
    {
      heading: "Dispatch and reorder thinking",
      body:
        "Finished goods review and dispatch planning should include packaging condition, outer carton requirement, shipment city and basic reorder expectations. Brands that plan reorders early can maintain consistency in formula, packaging and customer experience."
    }
  ]
});

enrichContentPage("startup-cosmetic-brand-support", {
  title: "Startup Cosmetic Brand Support | Kiora CosmoTech",
  description:
    "Startup cosmetic brand support for founders planning private label skincare, haircare, packaging, MOQ and launch-ready ranges.",
  additions: [
    {
      heading: "Startup launch roadmap",
      body:
        "A startup cosmetic brand should begin with a focused product range, practical packaging, clear MOQ discussion and realistic launch timeline. Kiora CosmoTech helps founders think through product type, formula route, packaging choice, label inputs and dispatch planning before committing to commercial inventory."
    },
    {
      heading: "Low MOQ thinking without weak planning",
      body:
        "Startup founders often ask for low MOQ, but MOQ still depends on product type, formula, packaging availability and batch setup. The best way to reduce pressure is to choose fewer SKUs, standard packaging where suitable and a practical launch quantity for content, sampling and first sales."
    },
    {
      heading: "Product selection for first-time founders",
      body:
        "Strong startup products are easy to explain and fit a routine. Skincare founders may start with face wash, serum and moisturizer. Haircare founders may begin with shampoo and hair serum. Personal care founders may choose body wash or body lotion before expanding."
    },
    {
      heading: "Quote readiness checklist",
      body:
        "Before requesting a quote, share brand stage, product type, formula preference, packaging requirement, required quantity, expected MOQ, target price band, launch timeline, city and preferred contact method. This helps the manufacturing discussion move faster and reduces back-and-forth."
    }
  ]
});

enrichContentPage("request-quote", {
  title: "Request Cosmetic Manufacturing Quote | Kiora CosmoTech",
  description:
    "Request a cosmetic manufacturing quote for skincare, haircare, derma-cosmetic or personal care products from Kiora CosmoTech.",
  directAnswer: {
    question: "What details are needed for a cosmetic manufacturing quote?",
    answer:
      "A useful quote request includes product category, product type, pack type, fill size, quantity or MOQ direction, formula preference, target price band, launch timeline, city and whether you want private label, third party or contract manufacturing support."
  },
  additions: [
    {
      heading: "How to get a faster quote",
      body:
        "A faster quote starts with specific product information. Share product category, product type, formula preference, fill size, packaging type, expected quantity, launch city and whether artwork is ready. If you are comparing options, mention whether you prefer ready formula or custom formulation."
    },
    {
      heading: "Details that affect pricing",
      body:
        "Pricing depends on formula type, active direction, packaging format, fill quantity, label or carton needs, MOQ, filling method and quality or documentation requirements. A face serum in a 30 ml dropper and a shampoo in a 250 ml bottle need different planning."
    },
    {
      heading: "Quote checklist before you submit",
      body:
        "The most useful quote discussions start with a clear checklist: product category, likely pack type, fill size, formula route, expected quantity, target price band, launch timeline and whether the requirement fits a private label, third party or contract manufacturing model."
    },
    {
      heading: "Best product examples to include",
      body:
        "Useful examples include face wash, face serum, sunscreen, moisturizer, cream, gel, body lotion, shampoo, hair serum, hair oil, hair mask, body wash and hand wash. The more precise the product requirement, the more useful the manufacturing conversation becomes."
    },
    {
      heading: "WhatsApp fallback",
      body:
        "For faster response, brands can share product type, quantity, packaging preference and city on WhatsApp. The form is prepared for backend integration, while WhatsApp gives founders a simple route to start the manufacturing discussion immediately."
    }
  ]
});

enrichContentPage("contract-cosmetic-manufacturer-india", {
  additions: [
    {
      heading: "Who contract manufacturing is for",
      body:
        "Contract manufacturing is useful for brands that already know their product category, want tighter production planning and need a partner who can work around batch size, packaging format, product specifications, procurement coordination and dispatch expectations.",
      points: ["Existing brands and marketers", "Distributor-led product ranges", "Planned repeat-batch programs", "Clinic and salon retail lines"]
    },
    {
      heading: "Structured manufacturing model",
      body:
        "This page should own the more structured manufacturing model rather than the broader outsourced-production language used on the third party page. The focus here is on agreed product scope, repeatable specifications, production calendar clarity, packaging coordination and batch-wise execution discipline."
    },
    {
      heading: "Common mistakes buyers make",
      body:
        "Buyers often compare prices without matching the fill size, carton scope or formula direction. Another common issue is starting artwork before the actual pack, label size and packaging decoration route are confirmed."
    },
    {
      heading: "Documentation-oriented production approach",
      body:
        "A contract manufacturing discussion should cover product specifications, pack configuration, label declaration inputs, batch-wise records and any product-specific review needed before finished goods are dispatched."
    }
  ]
});

enrichContentPage("custom-skincare-formulation", {
  additions: [
    {
      heading: "What founders should prepare before formulation discussion",
      body:
        "A useful formulation brief includes product type, target user, desired texture, active direction, fragrance preference, expected fill size, preferred packaging style, target selling price and launch timeline."
    },
    {
      heading: "Where custom formulation adds value",
      body:
        "Custom formulation is most useful when the brand wants a more ownable product feel, a stronger active story, a premium texture or packaging compatibility that does not fit a standard ready formula."
    },
    {
      heading: "Common formulation mistakes",
      body:
        "Brands lose time when they ask for many conflicting features in one formula, copy competitor claims too closely or delay packaging decisions until late in the process. Formula planning works better when the product brief is narrow and realistic."
    }
  ]
});

enrichContentPage("about-kiora-cosmotech", {
  additions: [
    {
      heading: "Why Kiora CosmoTech was created",
      body:
        "Kiora CosmoTech was built around a simple idea: many beauty brands do not only need production capacity, they need a clearer manufacturing conversation. Founders often need help converting product ideas into formula direction, packaging choices, MOQ understanding and launch-ready batch planning."
    },
    {
      heading: "Manufacturing approach note",
      body:
        "At Kiora CosmoTech, our focus is not only to manufacture cosmetic products, but to help brands launch practical, market-ready skincare, haircare and personal care products. We support founders with formula selection, packaging planning, MOQ understanding, product brief preparation and manufacturing coordination so that the launch process becomes structured and clear."
    },
    {
      heading: "Quality-driven and documentation-aware mindset",
      body:
        "The company approach is centered on quality-focused workflow, batch-wise checks, raw material and packing material verification, in-process monitoring, finished product review and documentation support where applicable to the project scope."
    },
    {
      heading: "Contact and business presence",
      body:
        "Kiora CosmoTech currently presents itself as a pan-India cosmetic manufacturing partner. If you are planning a product launch, use the quote page or WhatsApp CTA to share category, pack type, quantity and city so the discussion can start with practical details."
    }
  ]
});

export const getContentPage = (slug: string) => contentPages.find((page) => page.slug === slug);

export const contentPageSlugs = contentPages.map((page) => page.slug);
