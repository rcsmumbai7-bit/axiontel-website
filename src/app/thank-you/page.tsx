import Link from "next/link";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You | Axiontel",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden pt-24">
      <div className="bg-grid mask-fade-b absolute inset-0" />
      <Reveal className="container-x relative max-w-2xl text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-brand" />
        <h1 className="h-display mt-6 text-4xl sm:text-5xl">Thank you. We&apos;ve got your enquiry.</h1>
        <p className="mt-5 text-lg text-ink-soft">
          Our sales team will review your details and contact you on the phone number or email you shared. If it&apos;s urgent, call us on{" "}
          <a href={`tel:${site.phones[0].tel}`} className="font-semibold text-brand">{site.phones[0].display}</a>.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/products/r-26/" className="btn-primary">Explore the R-26</Link>
          <Link href="/resources/" className="btn-ghost">Read our guides</Link>
        </div>
      </Reveal>
    </section>
  );
}
