import { articles } from "@/data/articles";
import { categories } from "@/data/categories";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-tools-site-lac.vercel.app";

export default function sitemap() {
  const staticRoutes = ["", "/tools", "/articles", "/en", "/en/tools", "/en/articles"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" || path === "/en" ? 1 : 0.8
  }));

  const categoryRoutes = categories.flatMap((category) => [
    {
      url: `${siteUrl}/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/en/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7
    }
  ]);

  const articleRoutes = articles.flatMap((article) => [
    {
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly",
      priority: 0.75
    },
    {
      url: `${siteUrl}/en/articles/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly",
      priority: 0.75
    }
  ]);

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
