import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { ComplianceNote, CtaBand } from "@/components/blocks";
import { r26 } from "@/lib/product";
import { generalFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Handheld Two-Way Radios | Axiontel",
  description: "Axiontel handheld walkie-talkies for security, hospitality, construction, events and logistics teams. Compare verified specs and request a quote.",
  alternates: { canonical: "/walkie-talkies/handheld-radios/" },
};

const faqs = [generalFaqs[1], generalFaqs[2], generalFaqs[4], generalFaqs[6]];

export default function Handheld() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
      <PageHero
        crumbs={[{ label: "Products", href: "/walkie-talkies/" }, { label: "Handheld radios", href: "/walkie-talkies/handheld-radios/" }]}
        eyebrow="Handheld radios"
        title="Handheld two-way radios"
        text="A handheld radio is a portable, battery-powered walkie-talkie that a person carries on a belt or in hand. It suits teams that move around a site: guards on patrol, housekeeping staff, site supervisors, event crew and warehouse teams."
      />
      <section className="container-x pb-16">
        <Reveal>
          <Link href="/products/r-26/" className="card group grid items-center gap-8 overflow-hidden p-8 transition hover:border-brand/30 md:grid-cols-[220px_1fr]">
            <div className="grid h-72 place-items-center rounded-3xl bg-gradient-to-b from-mist to-ice">
              <Image src={r26.image} alt="Axiontel R-26 handheld radio" width={231} height={909} className="h-64 w-auto transition duration-700 group-hover:-rotate-6 group-hover:scale-105" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand">Model R-26</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink">Axiontel R-26</h2>
              <p className="mt-3 text-ink-soft">{r26.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-ink">
                {["446 MHz", "16 ch", "0.5 W", "IP68", "4200 mAh", "302 g"].map((t) => <li key={t} className="rounded-full bg-mist px-3 py-1.5">{t}</li>)}
              </ul>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="section bg-mist/60">
        <div className="container-x">
          <SectionHeading eyebrow="Compare" title="Verified specifications" text="We only list fields we can verify. More models will be added here as they launch." />
          <Reveal className="mt-10 overflow-x-auto rounded-3xl border border-line bg-white">
            <table className="w-full min-w-[560px] text-sm">
              <thead><tr className="bg-ink text-left text-white"><th className="px-6 py-4 font-semibold">Specification</th><th className="px-6 py-4 font-semibold">Axiontel R-26</th></tr></thead>
              <tbody className="divide-y divide-line">
                {[["Frequency", "446.0–446.2 MHz"], ["Channels", "16"], ["Transmit power", "0.5 W"], ["Battery", "4200 mAh Li-ion"], ["IP rating", "IP68"], ["Operating temp.", "−20 °C to +60 °C"], ["Weight", "302 g"], ["Scrambler / VOX / Scan", "Yes / Yes / Yes"], ["ETA", "ETA-SD-20260605298"]].map(([k, v]) => (
                  <tr key={k} className="hover:bg-mist"><th scope="row" className="px-6 py-3.5 text-left font-normal text-ink-soft">{k}</th><td className="px-6 py-3.5 font-medium text-ink">{v}</td></tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal className="mt-6"><ComplianceNote /></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="FAQ" title="Handheld radio questions" />
          <Reveal><FaqList faqs={faqs} /></Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
