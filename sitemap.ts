import type { MetadataRoute } from "next";
import { blogSlugs } from "@/data/blogPosts";
import { citySlugs } from "@/data/cities";
import { staticRoutes } from "@/data/seo";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ...staticRoutes,
    ...citySlugs.map((slug) => `/city/${slug}`),
    ...blogSlugs.map((slug) => `/blog/${slug}`)
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/blog/") ? 0.6 : 0.8
  }));
}
