import type { MetadataRoute } from "next";

import { getAllPostsWithSlug, getAllProducts } from "@/lib/wp-api";

type ChangeFrequency =
  | "yearly"
  | "monthly"
  | "weekly"
  | "always"
  | "hourly"
  | "daily"
  | "never";

export default async function getSitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPostsWithSlug();
  const products = await getAllProducts({});

  const staticPages = [
    {
      url: "https://terraholod.ru",
      lastModified: new Date(),
      changeFrequency: "yearly" as ChangeFrequency,
      priority: 1,
    },
    {
      url: "https://terraholod.ru/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: "https://terraholod.ru/projects",
      lastModified: new Date(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: "https://terraholod.ru/solutions/flowers",
      lastModified: new Date(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: "https://terraholod.ru/solutions/beer-shop",
      lastModified: new Date(),
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: "https://terraholod.ru/contacts",
      lastModified: new Date(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.5,
    },
  ];

  const dynamicPages = posts.map((post) => ({
    url: `https://terraholod.ru/projects/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.8,
  }));

  const dinamicProducts = products.map((product) => ({
    url: `https://terraholod.ru/catalog/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as ChangeFrequency,
    priority: 0.8,
  }));

  return [...staticPages, ...dynamicPages, ...dinamicProducts];
}
