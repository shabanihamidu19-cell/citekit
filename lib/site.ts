export const SITE_NAME = "CiteKit";
export const SITE_TAGLINE = "Find out if ChatGPT, Perplexity, Claude and Google AI can find and cite your website.";

export function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");
  return raw.replace(/\/$/, "");
}
