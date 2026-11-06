import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-xl px-4 py-28 text-center">
        <p className="text-6xl font-extrabold text-accent">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">That page does not exist</h1>
        <p className="mt-2 text-muted">But your website's AI visibility score does. Want to see it?</p>
        <Link href="/" className="mt-6 inline-block rounded-xl bg-accent px-5 py-3 font-semibold text-white">
          Run a free audit
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
