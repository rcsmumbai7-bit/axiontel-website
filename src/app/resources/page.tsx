import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { CtaBand } from "@/components/blocks";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Two-Way Radio Guides & Resources | Axiontel",
  description: "Buying guides and explainers on walkie-talkies: choosing radios, range, VHF vs UHF, licensing and ETA in India, battery care and accessories.",
  alternates: { canonical: "/resources/" },
};

export default function Resources() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Resources", href: "/resources/" }]}
        eyebrow="Resources"
        title="Guides for buying and running two-way radios"
        text="Practical, plain-English guides written by the Axiontel team, from choosing the right radio to licensing and battery care."
      />
      <section className="container-x pb-20">
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <StaggerItem key={a.slug}>
              <Link href={`/resources/${a.slug}/`} className="card group relative flex h-full flex-col overflow-hidden p-7 transition duration-500 hover:-translate-y-1 hover:border-brand/30">
                <span className="absolute -right-6 -top-8 font-display text-[7rem] font-extrabold leading-none text-mist transition group-hover:text-ice">{String(i + 1).padStart(2, "0")}</span>
                <span className="relative text-xs font-semibold uppercase tracking-widest text-brand">{a.category}</span>
                <h2 className="relative mt-3 font-display text-xl font-semibold leading-snug text-ink">{a.title}</h2>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{a.description}</p>
                <span className="relative mt-6 flex items-center justify-between text-sm text-muted">
                  {a.readMins} min read
                  <ArrowUpRight className="h-5 w-5 text-brand transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <CtaBand />
    </>
  );
}
