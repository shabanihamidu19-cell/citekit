import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl();
  const hidden = ["/api/", "/report", "/dashboard"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: hidden },
      { userAgent: ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User"], allow: "/", disallow: hidden },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
