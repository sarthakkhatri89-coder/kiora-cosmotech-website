export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-kiora-cosmotech" },
  {
    label: "Services",
    href: "/private-label-cosmetics-manufacturer-india",
    children: [
      { label: "Private Label Cosmetics", href: "/private-label-cosmetics-manufacturer-india" },
      { label: "Third Party Manufacturing", href: "/third-party-cosmetic-manufacturing-india" },
      { label: "Contract Manufacturing", href: "/contract-cosmetic-manufacturer-india" },
      { label: "Custom Skincare Formulation", href: "/custom-skincare-formulation" }
    ]
  },
  {
    label: "Products",
    href: "/skincare-manufacturer-india",
    children: [
      { label: "Skincare Manufacturing", href: "/skincare-manufacturer-india" },
      { label: "Face Wash", href: "/face-wash-manufacturer" },
      { label: "Face Serum", href: "/face-serum-manufacturer" },
      { label: "Sunscreen", href: "/sunscreen-manufacturer" },
      { label: "Moisturizer", href: "/moisturizer-manufacturer" },
      { label: "Cream", href: "/cream-manufacturer" },
      { label: "Gel", href: "/gel-manufacturer" },
      { label: "Body Lotion", href: "/body-lotion-manufacturer" },
      { label: "Derma Cosmetic", href: "/derma-cosmetic-manufacturer" },
      { label: "Haircare", href: "/haircare-manufacturer-india" },
      { label: "Shampoo", href: "/shampoo-manufacturer" },
      { label: "Hair Serum", href: "/hair-serum-manufacturer" },
      { label: "Hair Oil", href: "/hair-oil-manufacturer" },
      { label: "Hair Mask", href: "/hair-mask-manufacturer" },
      { label: "Body Wash", href: "/body-wash-manufacturer" },
      { label: "Hand Wash", href: "/hand-wash-manufacturer" }
    ]
  },
  { label: "City-Wise Manufacturing", href: "/city/cosmetic-manufacturer-in-delhi-ncr" },
  { label: "Quality & Compliance", href: "/quality-and-compliance" },
  { label: "Blog", href: "/blog" },
  { label: "Request Quote", href: "/request-quote" }
];
