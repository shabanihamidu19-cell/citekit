import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site";
import { BOTS } from "../lib/audit/bots";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/bots`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/learn/llms-txt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
  for (const b of BOTS) {
    pages.push({ url: `${base}/bots/${b.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
  }
  return pages;
}
