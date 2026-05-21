import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { absoluteUrl } from "@/lib/utils";

type MetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export function createMetadata({ title, description, path, image = siteConfig.ogImage, type = "website" }: MetaInput): Metadata {
  const url = absoluteUrl(siteConfig.url, path);
  const imageUrl = absoluteUrl(siteConfig.url, image);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} cosmetic manufacturing`
        }
      ],
      locale: "en_IN",
      type
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}
