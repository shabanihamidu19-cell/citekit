import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SITE_NAME, siteUrl } from "../lib/site";

const title = "CiteKit: AI Search Readiness Audit for ChatGPT, Perplexity & Google AI";
const description =
  "Free AI visibility audit. See if ChatGPT, Perplexity, Claude and Google AI can crawl, understand and cite your website, then fix it with ready-to-paste robots.txt, llms.txt and JSON-LD.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: title, template: "%s | CiteKit" },
  description,
  applicationName: SITE_NAME,
  keywords: [
    "AI search audit",
    "generative engine optimization",
    "GEO audit tool",
    "llms.txt generator",
    "robots.txt AI crawlers",
    "get cited by ChatGPT",
    "Perplexity visibility",
    "AI Overviews optimization",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title,
    description,
    url: "/",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080d1c",
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description,
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
    { "@type": "Offer", name: "Pro", price: "19", priceCurrency: "USD" },
    { "@type": "Offer", name: "Agency", price: "49", priceCurrency: "USD" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
