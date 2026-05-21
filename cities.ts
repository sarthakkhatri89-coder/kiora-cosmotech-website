import type { FAQ } from "./faqs";

export type CityPage = {
  city: string;
  slug: string;
  title: string;
  description: string;
  intro: string;
  privateLabel: string;
  thirdParty: string;
  nearbyAreas: string[];
  categories: string[];
  faq: FAQ[];
};

const cityFaq = (city: string): FAQ[] => [
  {
    question: `Does Kiora CosmoTech support cosmetic brands in ${city}?`,
    answer: `Yes. Kiora CosmoTech supports skincare, haircare, derma-cosmetic and personal care brands in ${city} with private label, third party and custom formulation manufacturing discussions.`
  },
  {
    question: `Can products be dispatched to ${city}?`,
    answer: `Pan-India dispatch support can be discussed for approved manufacturing orders, including shipment coordination for ${city} and nearby business areas.`
  },
  {
    question: `What products can brands in ${city} launch?`,
    answer:
      "Brands can discuss face wash, face serum, sunscreen, moisturizer, creams, gels, body lotion, shampoo, hair serum, hair oil, hair mask, body wash and hand wash."
  }
];

export const cities: CityPage[] = [
  {
    city: "Delhi NCR",
    slug: "cosmetic-manufacturer-in-delhi-ncr",
    title: "Cosmetic Manufacturer in Delhi NCR | Private Label Skincare Manufacturing",
    description:
      "Kiora CosmoTech offers private label cosmetics, third party skincare manufacturing, packaging support and custom formulation for beauty brands in Delhi NCR and nearby areas.",
    intro:
      "Delhi NCR has a fast-moving beauty market with founders, clinics, salons and D2C teams looking for reliable skincare manufacturing support. Kiora CosmoTech helps Delhi NCR brands plan premium cosmetic products with practical MOQ, packaging and dispatch guidance.",
    privateLabel:
      "Private label support for Delhi NCR brands includes product selection, ready formula discussions, packaging choices and label coordination for launch-ready skincare, haircare and personal care products.",
    thirdParty:
      "Third party skincare manufacturing helps Delhi NCR businesses outsource production while keeping focus on retail, online channels, distributors and clinic-led sales.",
    nearbyAreas: ["New Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    categories: ["Skincare", "Derma cosmetic", "Haircare", "Personal care"],
    faq: cityFaq("Delhi NCR")
  },
  {
    city: "Mumbai",
    slug: "cosmetic-manufacturer-in-mumbai",
    title: "Cosmetic Manufacturer in Mumbai | Private Label Skincare Manufacturing",
    description:
      "Private label and third party cosmetic manufacturing support for Mumbai skincare, salon, influencer and D2C beauty brands.",
    intro:
      "Mumbai's beauty ecosystem includes creator-led brands, retail distributors, salons and premium D2C teams. Kiora CosmoTech supports Mumbai brands with skincare-focused manufacturing conversations and packaging planning.",
    privateLabel:
      "Private label cosmetic manufacturing for Mumbai brands can cover serums, sunscreen, moisturizers, cleansers, shampoo and personal care products with premium packaging direction.",
    thirdParty:
      "Third party manufacturing allows Mumbai-based beauty businesses to scale product launches without managing their own production setup.",
    nearbyAreas: ["Andheri", "Bandra", "Thane", "Navi Mumbai", "Powai"],
    categories: ["Face care", "Haircare", "Body care", "Derma-inspired cosmetics"],
    faq: cityFaq("Mumbai")
  },
  {
    city: "Bangalore",
    slug: "cosmetic-manufacturer-in-bangalore",
    title: "Cosmetic Manufacturer in Bangalore | Private Label Skincare Manufacturing",
    description:
      "Kiora CosmoTech supports Bangalore beauty startups with private label skincare, third party cosmetic manufacturing and custom formulation.",
    intro:
      "Bangalore is home to digitally native startups, wellness brands and modern salon concepts. Kiora CosmoTech helps Bangalore founders explore skincare and personal care manufacturing with clear launch planning.",
    privateLabel:
      "Private label support for Bangalore brands focuses on startup-friendly product selection, formula choices, packaging formats and quote clarity.",
    thirdParty:
      "Third party skincare manufacturing gives Bangalore D2C teams a way to launch or expand product ranges while keeping internal teams lean.",
    nearbyAreas: ["Indiranagar", "Koramangala", "Whitefield", "HSR Layout", "Electronic City"],
    categories: ["Serums", "Moisturizers", "Sunscreen", "Haircare", "Body wash"],
    faq: cityFaq("Bangalore")
  },
  {
    city: "Hyderabad",
    slug: "cosmetic-manufacturer-in-hyderabad",
    title: "Cosmetic Manufacturer in Hyderabad | Private Label Skincare Manufacturing",
    description:
      "Private label cosmetics and third party skincare manufacturing support for Hyderabad beauty brands, salons and clinics.",
    intro:
      "Hyderabad's mix of clinics, salons, retail entrepreneurs and online brands creates strong demand for reliable cosmetic manufacturing support. Kiora CosmoTech works with Hyderabad businesses on skincare, haircare and personal care launch planning.",
    privateLabel:
      "Hyderabad brands can discuss private label face care, derma-inspired cosmetics, shampoo, hair serum and body care products with packaging support.",
    thirdParty:
      "Third party manufacturing helps Hyderabad companies manage production through an external cosmetic manufacturing partner while they build sales channels.",
    nearbyAreas: ["Hitech City", "Jubilee Hills", "Gachibowli", "Secunderabad", "Madhapur"],
    categories: ["Skincare", "Derma cosmetic", "Haircare", "Personal care"],
    faq: cityFaq("Hyderabad")
  },
  {
    city: "Chennai",
    slug: "cosmetic-manufacturer-in-chennai",
    title: "Cosmetic Manufacturer in Chennai | Private Label Skincare Manufacturing",
    description:
      "Kiora CosmoTech supports Chennai brands with skincare, haircare and personal care manufacturing, packaging guidance and quote support.",
    intro:
      "Chennai beauty businesses often need practical product formats suited to humid climates, retail channels and salon networks. Kiora CosmoTech helps Chennai brands plan skincare and personal care products with manufacturing clarity.",
    privateLabel:
      "Private label options for Chennai brands include cleansers, lightweight moisturizers, sunscreen concepts, shampoo, body wash and hand wash.",
    thirdParty:
      "Third party manufacturing can support Chennai brand owners who want to outsource production, filling and packing while focusing on local and online demand.",
    nearbyAreas: ["T Nagar", "Anna Nagar", "Velachery", "OMR", "Adyar"],
    categories: ["Face wash", "Sunscreen", "Moisturizer", "Haircare", "Hand wash"],
    faq: cityFaq("Chennai")
  },
  {
    city: "Kolkata",
    slug: "cosmetic-manufacturer-in-kolkata",
    title: "Cosmetic Manufacturer in Kolkata | Private Label Skincare Manufacturing",
    description:
      "Private label and third party cosmetic manufacturing support for Kolkata skincare, haircare, salon and startup beauty brands.",
    intro:
      "Kolkata has a growing market for salon retail products, creator-led skincare and regional beauty distribution. Kiora CosmoTech helps Kolkata brands convert product ideas into manufacturing-ready plans.",
    privateLabel:
      "Private label support for Kolkata includes formula selection, packaging options, MOQ discussion and label coordination for skincare and personal care products.",
    thirdParty:
      "Third party manufacturing lets Kolkata brands build product lines without investing in production infrastructure.",
    nearbyAreas: ["Salt Lake", "Park Street", "Howrah", "New Town", "Ballygunge"],
    categories: ["Skincare", "Haircare", "Body care", "Derma-inspired products"],
    faq: cityFaq("Kolkata")
  },
  {
    city: "Pune",
    slug: "cosmetic-manufacturer-in-pune",
    title: "Cosmetic Manufacturer in Pune | Private Label Skincare Manufacturing",
    description:
      "Kiora CosmoTech provides private label skincare and third party cosmetic manufacturing guidance for Pune brands and startups.",
    intro:
      "Pune's startup culture, salon businesses and wellness-focused consumers make it a strong launch market for skincare and personal care products. Kiora CosmoTech supports Pune brands with product and packaging planning.",
    privateLabel:
      "Private label cosmetic manufacturing for Pune can include serums, face wash, moisturizers, shampoo, hair oil and body care products.",
    thirdParty:
      "Third party production support helps Pune businesses outsource batch manufacturing while building sales, distribution and customer education.",
    nearbyAreas: ["Hinjewadi", "Koregaon Park", "Baner", "Wakad", "Kothrud"],
    categories: ["Serums", "Cleansers", "Moisturizers", "Haircare", "Body care"],
    faq: cityFaq("Pune")
  },
  {
    city: "Ahmedabad",
    slug: "cosmetic-manufacturer-in-ahmedabad",
    title: "Cosmetic Manufacturer in Ahmedabad | Private Label Skincare Manufacturing",
    description:
      "Private label cosmetic manufacturing and skincare product launch support for Ahmedabad beauty brands and distributors.",
    intro:
      "Ahmedabad has strong trading, distribution and entrepreneurial networks, making it a practical base for cosmetic brand launches. Kiora CosmoTech supports Ahmedabad businesses with skincare, haircare and personal care manufacturing discussions.",
    privateLabel:
      "Ahmedabad brands can explore private label face wash, serum, creams, haircare products and body care formats with packaging support.",
    thirdParty:
      "Third party cosmetic manufacturing helps Ahmedabad brand owners plan product supply while focusing on wholesale, retail and marketplace channels.",
    nearbyAreas: ["SG Highway", "Satellite", "Navrangpura", "Bopal", "Gandhinagar"],
    categories: ["Skincare", "Haircare", "Personal care", "Derma cosmetic"],
    faq: cityFaq("Ahmedabad")
  },
  {
    city: "Jaipur",
    slug: "cosmetic-manufacturer-in-jaipur",
    title: "Cosmetic Manufacturer in Jaipur | Private Label Skincare Manufacturing",
    description:
      "Kiora CosmoTech supports Jaipur beauty founders, salons and retailers with private label skincare and cosmetic manufacturing.",
    intro:
      "Jaipur's beauty market blends salon retail, boutique brands and regional distribution. Kiora CosmoTech helps Jaipur entrepreneurs plan private label skincare and personal care products.",
    privateLabel:
      "Private label support for Jaipur can include botanical-positioned skincare, haircare, body wash, hand wash and premium packaging concepts.",
    thirdParty:
      "Third party manufacturing gives Jaipur businesses an outsourced route for product production, filling and packing.",
    nearbyAreas: ["Vaishali Nagar", "C Scheme", "Malviya Nagar", "Mansarovar", "Sitapura"],
    categories: ["Skincare", "Body care", "Haircare", "Personal care"],
    faq: cityFaq("Jaipur")
  },
  {
    city: "Lucknow",
    slug: "cosmetic-manufacturer-in-lucknow",
    title: "Cosmetic Manufacturer in Lucknow | Private Label Skincare Manufacturing",
    description:
      "Private label skincare, haircare and personal care manufacturing support for Lucknow beauty brands, salons and startups.",
    intro:
      "Lucknow brands often serve a blend of retail, salon and regional online customers. Kiora CosmoTech supports Lucknow businesses with cosmetic manufacturing guidance, packaging planning and quote support.",
    privateLabel:
      "Private label options for Lucknow include face wash, creams, serums, body lotion, shampoo, hair oil and hand wash products.",
    thirdParty:
      "Third party manufacturing helps Lucknow entrepreneurs access production support while building local and regional sales.",
    nearbyAreas: ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Aminabad"],
    categories: ["Face care", "Haircare", "Body lotion", "Hand wash"],
    faq: cityFaq("Lucknow")
  },
  {
    city: "Noida",
    slug: "cosmetic-manufacturer-in-noida",
    title: "Cosmetic Manufacturer in Noida | Private Label Skincare Manufacturing",
    description:
      "Kiora CosmoTech supports Noida skincare, derma-cosmetic, haircare and personal care brands with private label and third party manufacturing.",
    intro:
      "Noida has a strong mix of D2C teams, agencies, clinics and NCR-based entrepreneurs. Kiora CosmoTech supports Noida brands with skincare-focused manufacturing planning and packaging options.",
    privateLabel:
      "Private label manufacturing support for Noida brands covers face care, active-led serums, sunscreen, haircare and personal care formats.",
    thirdParty:
      "Third party manufacturing can help Noida companies scale product supply while staying close to NCR distribution and e-commerce operations.",
    nearbyAreas: ["Sector 62", "Sector 63", "Sector 18", "Greater Noida", "Ghaziabad"],
    categories: ["Skincare", "Derma cosmetic", "Haircare", "Personal care"],
    faq: cityFaq("Noida")
  },
  {
    city: "Gurugram",
    slug: "cosmetic-manufacturer-in-gurugram",
    title: "Cosmetic Manufacturer in Gurugram | Private Label Skincare Manufacturing",
    description:
      "Private label and third party skincare manufacturing support for Gurugram beauty startups, D2C brands, clinics and salons.",
    intro:
      "Gurugram's D2C, wellness and premium retail ecosystem makes it a natural launch base for modern skincare brands. Kiora CosmoTech helps Gurugram teams plan product ranges and manufacturing requirements.",
    privateLabel:
      "Private label support for Gurugram brands includes premium serums, moisturizers, sunscreen concepts, cleansers, haircare and body care products.",
    thirdParty:
      "Third party manufacturing supports Gurugram brands that want lean operations and scalable product supply.",
    nearbyAreas: ["Cyber City", "Golf Course Road", "Sohna Road", "Udyog Vihar", "Manesar"],
    categories: ["Premium skincare", "Derma cosmetic", "Haircare", "Personal care"],
    faq: cityFaq("Gurugram")
  },
  {
    city: "Faridabad",
    slug: "cosmetic-manufacturer-in-faridabad",
    title: "Cosmetic Manufacturer in Faridabad | Private Label Skincare Manufacturing",
    description:
      "Kiora CosmoTech supports Faridabad beauty brands with private label cosmetics, third party skincare manufacturing and packaging guidance.",
    intro:
      "Faridabad businesses benefit from NCR access and regional distribution opportunities. Kiora CosmoTech supports Faridabad brands with skincare, haircare and personal care manufacturing discussions.",
    privateLabel:
      "Private label support for Faridabad can cover face wash, creams, gels, body lotion, shampoo, hair oil, body wash and hand wash.",
    thirdParty:
      "Third party manufacturing gives Faridabad brand owners a practical route to launch products without setting up a manufacturing unit.",
    nearbyAreas: ["NIT Faridabad", "Ballabgarh", "Sector 15", "Sector 37", "Palwal"],
    categories: ["Skincare", "Haircare", "Body care", "Personal care"],
    faq: cityFaq("Faridabad")
  }
];

export const citySlugs = cities.map((city) => city.slug);

export const getCity = (slug: string) => cities.find((city) => city.slug === slug);
