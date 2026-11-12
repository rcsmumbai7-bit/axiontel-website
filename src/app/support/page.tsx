import Link from "next/link";
import type { Metadata } from "next";
import { BatteryCharging, FileText, Phone, ShieldCheck, Wrench } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { CtaBand } from "@/components/blocks";
import { generalFaqs } from "@/lib/faqs";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support, Warranty & FAQs | Axiontel",
  description: "Axiontel support: warranty, service, spares, battery care, manuals and answers to common walkie-talkie questions. Contact our Mumbai team.",
  alternates: { canonical: "/support/" },
};

const routes = [
  { icon: ShieldCheck, title: "Warranty", text: "Warranty terms are confirmed on your quotation and invoice. Keep your invoice for any warranty claim.", href: "/contact/#enquiry", cta: "Ask about warranty" },
  { icon: Wrench, title: "Service & repairs", text: "Call or email us with the model, issue and invoice details. We'll guide you through the service process.", href: `tel:${site.phones[0].tel}`, cta: "Call support" },
  { icon: BatteryCharging, title: "Batteries & spares", text: "Order spare 4200 mAh batteries, chargers, antennas and earpieces.", href: "/walkie-talkie-accessories/", cta: "See accessories" },
  { icon: FileText, title: "Documents", text: "Datasheet and certification details for the Axiontel R-26.", href: "/downloads/", cta: "Downloads" },
];

export default function Support() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: generalFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <PageHero
        crumbs={[{ label: "Support", href: "/support/" }]}
        eyebrow="Support"
        title="We're here after the sale"
        text="Get help with setup, warranty, service, spares and documentation for your Axiontel radios."
      >
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${site.phones[0].tel}`} className="btn-primary"><Phone className="h-4 w-4" /> {site.phones[0].display}</a>
          <a href={whatsappLink("Hello Axiontel, I need support with my radio.")} target="_blank" rel="noopener" className="btn-ghost">WhatsApp support</a>
          <a href={`mailto:${site.email}?subject=Support request`} className="btn-ghost">{site.email}</a>
        </div>
      </PageHero>
      <section className="container-x pb-16">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((r) => (
            <StaggerItem key={r.title}>
              <div className="card flex h-full flex-col p-6">
                <r.icon className="h-8 w-8 text-brand" />
                <h2 className="mt-4 font-display text-lg font-semibold text-ink">{r.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{r.text}</p>
                <Link href={r.href} className="mt-5 text-sm font-semibold text-brand">{r.cta} →</Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <section className="section bg-mist/60">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <Reveal><FaqList faqs={generalFaqs} /></Reveal>
        </div>
      </section>
      <CtaBand title="Still need help?" text="Our team is a phone call away. Share your model and issue and we'll take it from there." />
    </>
  );
}
