import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Download, FileCheck2, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import RadioCanvas from "@/components/RadioCanvas";
import FaqList from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import { ComplianceNote, CtaBand, SolutionCard, SpecTable } from "@/components/blocks";
import { accessories, r26 } from "@/lib/product";
import { solutions } from "@/lib/solutions";
import { generalFaqs } from "@/lib/faqs";
import { site } from "@/lib/site";

const products = { "r-26": r26 };

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!(slug in products)) return {};
  return {
    title: "Axiontel R-26 Walkie-Talkie | IP68, 446 MHz, ETA Approved",
    description:
      "Axiontel R-26 handheld two-way radio: 446.0–446.2 MHz, 16 channels, IP68, 4200 mAh battery, voice scrambler and VOX. ETA approved. Full specs and quote.",
    alternates: { canonical: `/products/${slug}/` },
    openGraph: { images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const p = products[slug as keyof typeof products];
  if (!p) notFound();
  const faqs = [generalFaqs[4], generalFaqs[6], generalFaqs[7], generalFaqs[8]];

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            model: p.model,
            sku: p.model,
            category: "Two-way radio",
            image: [`${site.url}${p.image}`],
            description: p.summary,
            brand: { "@type": "Brand", name: "Axiontel" },
            manufacturer: { "@id": `${site.url}/#organization` },
            additionalProperty: [...p.general, ["Carrier output power", "0.5 W"], ["IP rating", "IP68"], ["ETA certificate", site.etaNumber]].map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
          },
          { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
        ]}
      />

      <section className="relative overflow-hidden pb-16 pt-28 sm:pt-36">
        <div className="bg-grid mask-fade-b absolute inset-0" />
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(45% 60% at 85% 20%, rgba(205,231,253,0.85), rgba(205,231,253,0) 70%)" }} />
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "Products", href: "/walkie-talkies/" }, { label: "Handheld radios", href: "/walkie-talkies/handheld-radios/" }, { label: p.name, href: `/products/${p.slug}/` }]} />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">{p.category}</span>
              <h1 className="h-display mt-4 text-5xl leading-none sm:text-7xl">
                {p.name.replace(p.model, "")}<span className="text-gradient">{p.model}</span>
              </h1>
              <p className="mt-3 font-display text-xl font-semibold italic text-ink-soft">{p.tagline}</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{p.summary}</p>
              <ul className="mt-8 grid max-w-lg grid-cols-2 gap-3">
                {[["446.0–446.2 MHz", "Frequency"], ["16", "Channels"], ["4200 mAh", "Battery"], ["IP68", "Protection"]].map(([v, l]) => (
                  <li key={l} className="rounded-2xl border border-line bg-white/80 p-4 backdrop-blur">
                    <p className="font-display text-xl font-bold text-ink">{v}</p>
                    <p className="text-xs uppercase tracking-wider text-muted">{l}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href={`/contact/?product=${encodeURIComponent("Axiontel R-26 walkie-talkie")}#enquiry`} className="btn-primary group">
                  Request a quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
                <a href={`tel:${site.phones[0].tel}`} className="btn-ghost"><Phone className="h-4 w-4" /> Speak to sales</a>
                <a href="/downloads/axiontel-r-26-datasheet.pdf" download className="btn-ghost"><Download className="h-4 w-4" /> Datasheet</a>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="relative">
              <div className="relative h-[520px] overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-white to-mist sm:h-[600px]">
                <RadioCanvas variant="product" className="absolute inset-0 cursor-grab active:cursor-grabbing" />
                <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-muted shadow">Drag to rotate · 3D preview</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container-x">
        <Stagger className="grid gap-5 md:grid-cols-3">
          {[
            { src: p.image, alt: "Axiontel R-26 front view on white", contain: true },
            { src: "/images/industries/r-26-ip68-water.webp", alt: "Axiontel R-26 being splashed with water", contain: false },
            { src: "/images/industries/site-engineer.webp", alt: "Site engineer with the Axiontel R-26 on a desk", contain: false },
          ].map((g) => (
            <StaggerItem key={g.src}>
              <div className={`relative aspect-[4/5] overflow-hidden rounded-3xl border border-line ${g.contain ? "bg-gradient-to-b from-mist to-ice" : ""}`}>
                <Image src={g.src} alt={g.alt} fill sizes="(min-width:768px) 33vw, 100vw" className={g.contain ? "object-contain p-10" : "object-cover transition duration-700 hover:scale-105"} />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Overview" title="Key features" text="Plain-English summary of what the R-26 does and why it matters on shift." />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.highlights.map((h) => (
              <StaggerItem key={h.title}>
                <div className="card h-full p-6">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white"><Check className="h-4 w-4" /></span>
                  <h3 className="mt-4 font-display font-semibold text-ink">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{h.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Specs */}
      <section id="specifications" className="section scroll-mt-24 bg-mist/60">
        <div className="container-x">
          <SectionHeading eyebrow="Specifications" title="R-26 technical specifications" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal><SpecTable title="General" rows={p.general} /></Reveal>
            <Reveal delay={0.08}><SpecTable title="Transmitter" rows={p.transmitter} /></Reveal>
            <Reveal delay={0.16}><SpecTable title="Receiver" rows={p.receiver} /></Reveal>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="section scroll-mt-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Compliance" title="Licensing and type approval" text="Walkie-talkies are regulated radio equipment in India. Here is what is confirmed for the R-26." />
            <Reveal className="mt-8"><ComplianceNote /></Reveal>
            <Reveal className="mt-6">
              <Link href="/certifications/" className="btn-ghost"><FileCheck2 className="h-4 w-4" /> View certificates</Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}><SpecTable title="Compliance information" rows={p.compliance} /></Reveal>
        </div>
      </section>

      {/* In the box */}
      <section className="section bg-mist/60">
        <div className="container-x">
          <SectionHeading eyebrow="In the box" title="Standard accessories" />
          <Stagger className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {accessories.map((a) => (
              <StaggerItem key={a.slug}>
                <div className="card h-full p-4 text-center">
                  <div className="grid aspect-square place-items-center rounded-2xl bg-white">
                    <Image src={a.image} alt={a.name} width={160} height={160} className="h-24 w-auto object-contain mix-blend-multiply" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-ink">{a.name}</p>
                  {!a.inBox && <p className="text-xs text-muted">Optional</p>}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Use cases */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Ideal for" title="Where the R-26 works best" />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.slice(0, 6).map((s) => <StaggerItem key={s.slug}><SolutionCard s={s} /></StaggerItem>)}
          </Stagger>
        </div>
      </section>

      <section className="section bg-mist/60">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="Support" title="R-26 questions" text="Warranty terms are confirmed on your quotation. For service or spares, contact our team." />
          <Reveal><FaqList faqs={faqs} /></Reveal>
        </div>
      </section>
      <CtaBand title="Get R-26 pricing for your team" />
    </>
  );
}
