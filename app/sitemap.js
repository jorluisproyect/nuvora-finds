import { articles, categories } from "../lib/content";

export default function sitemap() {
  const base = "https://nuvora-finds.vercel.app";
  const staticPages = ["", "/picks", "/about", "/contact", "/privacy", "/terms", "/disclosure"];
  return [
    ...staticPages.map((path) => ({ url: base + path, changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : 0.5 })),
    ...categories.map((category) => ({ url: base + "/category/" + category.slug, changeFrequency: "weekly", priority: 0.7 })),
    ...articles.map((article) => ({ url: base + "/article/" + article.slug, changeFrequency: "monthly", priority: 0.8 }))
  ];
}
