import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { citySlugs } from "@/data/cities";
import { staticRoutes } from "@/data/seo";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = [
    ...staticRoutes,
    ...citySlugs.map((slug) => `/city/${slug}`)
  ];

  return [
    ...staticEntries.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: route === "/" ? "2026-06-16" : "2026-06-15",
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.8
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: "monthly",
      priority: 0.6
    }))
  ];
}
