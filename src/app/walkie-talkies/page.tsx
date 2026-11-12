import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import { CtaBand, SolutionCard } from "@/components/blocks";
import { accessories, r26 } from "@/lib/product";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Walkie-Talkies & Two-Way Radios | Axiontel",
  description:
    "Explore Axiontel radio products, compare verified specifications and find a suitable communication device for your team.",
  alternates: { canonical: "/walkie-talkies/" },
};

const categories = [
  { title: "Handheld radios", href: "/walkie-talkies/handheld-radios/", text: "Portable push-to-talk radios for teams on the move.", image: r26.image, count: "1 model" },
  { title: "Accessories", href: "/walkie-talkie-accessories/", text: "Chargers, batteries, antennas, clips and earpieces.", image: "/images/accessories/desktop-charger.webp", count: `${accessories.length} items` },
];

export default function ProductsHub() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Products", href: "/walkie-talkies/" }]}
        eyebrow="Products"
        title={<>Walkie-talkies built for <span className="text-gradient">professional teams</span></>}
        text="Axiontel two-way radios let your team talk instantly at the push of a button, with no mobile network or call charges. Every model we sell comes with verified specifications and compliance details."
      />

      <section className="container-x pb-10">
        <Stagger className="grid gap-6 md:grid-cols-2">
          {categories.map((c) => (
            <StaggerItem key={c.title}>
              <Link href={c.href} className="card group relative flex h-full items-center gap-6 overflow-hidden p-8 transition duration-500 hover:-translate-y-1 hover:border-brand/30">
                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand">{c.count}</span>
                  <h2 className="mt-2 font-display text-2xl font-bold text-ink">{c.title}</h2>
                  <p className="mt-2 text-ink-soft">{c.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">Browse <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </div>
                <div className="relative grid h-40 w-32 shrink-0 place-items-center rounded-2xl bg-mist">
                  <Image src={c.image} alt="" width={200} height={400} className="max-h-36 w-auto object-contain transition duration-700 group-hover:scale-110" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Featured model" title="Axiontel R-26" text={r26.summary} />
          <Reveal className="mt-10">
            <div className="card grid items-center gap-10 overflow-hidden p-8 md:grid-cols-[auto_1fr] md:p-12">
              <div className="mx-auto grid h-80 w-56 place-items-center rounded-3xl bg-gradient-to-b from-mist to-ice">
                <Image src={r26.image} alt="Axiontel R-26 walkie-talkie" width={231} height={909} className="h-72 w-auto drop-shadow-2xl" />
              </div>
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[420px] text-sm">
                    <caption className="sr-only">Axiontel R-26 key specifications</caption>
                    <tbody className="divide-y divide-line">
                      {[...r26.general.slice(0, 6), ["Transmit power", "0.5 W"], ["IP rating", "IP68"], ["ETA", "ETA-SD-20260605298"]].map(([k, v]) => (
                        <tr key={k}><th scope="row" className="py-3 pr-4 text-left font-normal text-ink-soft">{k}</th><td className="py-3 text-right font-semibold text-ink">{v}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/products/r-26/" className="btn-primary">View R-26 details</Link>
                  <Link href="/contact/?product=Axiontel%20R-26%20walkie-talkie#enquiry" className="btn-ghost">Request a quote</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-mist/60">
        <div className="container-x">
          <SectionHeading eyebrow="Find the right radio" title="Radios by industry" />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => <StaggerItem key={s.slug}><SolutionCard s={s} /></StaggerItem>)}
          </Stagger>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
