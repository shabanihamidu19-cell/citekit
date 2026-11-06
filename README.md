# CiteKit

AI search readiness audits. Paste a URL, get a 0-100 score for how well ChatGPT, Perplexity, Claude and Google AI can crawl, understand and cite the page, then fix it with generated robots.txt, llms.txt and JSON-LD.

## Run it

```bash
unzip project.zip && cd citekit
npm install
cp .env.example .env.local   # optional, see below
npm run dev                  # http://localhost:3000
```

Production check: `npm run build && npm start`. Engine self-test (no network needed): `npm run test:engine`.

## Deploy to Vercel

Push to GitHub, import the repo in Vercel, set the environment variables below, deploy. No database is required.

## Environment variables

| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Your public URL (sitemap, canonical, redirects) |
| `SESSION_SECRET` | 32+ random characters. Signs plan and usage cookies. **Required in production.** |
| `STRIPE_SECRET_KEY`, `STRIPE_PRICE_PRO`, `STRIPE_PRICE_AGENCY` | Stripe Checkout (use test keys first) |
| `DEMO_MODE` | `1` lets the demo upgrade buttons work in production. Leave empty when live. |

Without Stripe keys, local development runs in demo mode: the Pro and Agency buttons activate a plan instantly so you can test every feature.

## How it works

- `lib/audit/` is the engine: SSRF-safe fetcher, RFC 9309 robots.txt evaluator for 13 crawlers, HTML/JSON-LD parser, 25 scored checks (sum = 100), and the fix generators.
- `app/api/audit` runs the audit, enforces daily limits (free 3, Pro 50, Agency 200) and returns generated fixes only to paid plans.
- `app/api/checkout` + `app/api/verify` implement Stripe Checkout over the REST API (no SDK) and set a signed plan cookie.
- Shareable reports live in the URL fragment (`/report#...`), so they need no database. History is kept in the browser.
- SEO: metadata, sitemap, robots, JSON-LD, and 13 programmatic `/bots/[slug]` pages plus `/learn/llms-txt`.

## Before you charge real money

1. Replace the plan cookie with a Stripe webhook + database (Supabase works well) so cancellations and failed payments revoke access. The cookie lasts 35 days.
2. Move the daily usage counter from in-memory + cookie to a shared store (Vercel KV / Upstash) so limits hold across serverless instances.
3. If Stripe is not available in your country, swap `app/api/checkout` and `app/api/verify` for Lemon Squeezy, Paddle or Polar. The rest of the app does not change.
