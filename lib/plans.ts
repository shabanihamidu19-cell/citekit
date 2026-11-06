import type { Plan } from "./audit/types";

export interface PlanInfo {
  id: Plan;
  name: string;
  price: number;
  blurb: string;
  features: string[];
  highlight?: boolean;
}

export const PLANS: PlanInfo[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    blurb: "See where you stand.",
    features: [
      "3 audits per day",
      "Full 0-100 AI-readiness score",
      "Every check with an explanation",
      "13-crawler robots.txt report",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 19,
    blurb: "Fix it in minutes, not days.",
    highlight: true,
    features: [
      "50 audits per day",
      "Ready-to-paste robots.txt, llms.txt and JSON-LD",
      "Shareable report link for clients",
      "Dashboard with score history",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    price: 49,
    blurb: "Sell AI-search audits under your brand.",
    features: [
      "200 audits per day",
      "White-label reports with your agency name",
      "Everything in Pro",
      "No CiteKit branding on shared reports",
    ],
  },
];
