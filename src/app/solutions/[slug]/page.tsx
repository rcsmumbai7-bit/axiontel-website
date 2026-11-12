import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ClipboardList, Package } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import { ComplianceNote, CtaBand, SolutionCard, solutionIcons } from "@/components/blocks";
import { getSolution, solutions } from "@/lib/solutions";
import { r26 } from "@/lib/product";

export const dynamicParams = false;
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const s = getSolution((await params).slug);
  if (!s) return {};
  return { title: s.title, description: s.description, alternates: { canonical: `/solutions/${s.slug}/` } };
}

export default async function SolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const s = getSolution((await params).slug);
  if (!s) notFound();
  const Icon = solutionIcons[s.icon];
  const others = solutions.filter((o) => o.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Solutions", href: "/solutions/" }, { label: s.name, href: `/solutions/${s.slug}/` }]}
        eyebrow="Industry solution"
        title={<>Two-way radios for <span className="text-gradient">{s.name.toLowerCase()}</span></>}
        text={s.short}
        aside={
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line shadow-2xl">
            <Image src={s.image} alt={`${s.name} team using two-way radios`} fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-2xl bg-white/90 text-brand backdrop-blur"><Icon className="h-6 w-6" /></span>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Link href={`/contact/?product=${encodeURIComponent("Complete radio solution")}#enquiry`} className="btn-primary">Request a solution recommendation</Link>
          <Link href="/products/r-26/" className="btn-ghost">See the R-26</Link>
        </div>
      </PageHero>

      <section className="section pt-4">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="h-display text-3xl">The communication challenge</h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{s.problem}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-display text-3xl">How two-way radios help</h2>
            <ul className="mt-5 space-y-4">
              {s.fit.map((f) => (
                <li key={f} className="flex gap-3 text-ink-soft">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white"><Check className="h-3.5 w-3.5" /></span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section bg-mist/60">
        <div className="container-x grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="card p-8">
            <ClipboardList className="h-8 w-8 text-brand" />
            <h2 className="mt-4 font-display text-2xl font-bold text-ink">Deployment considerations</h2>
            <p className="mt-2 text-sm text-ink-soft">We look at these with you before recommending a setup.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.considerations.map((c) => <li key={c} className="rounded-2xl border border-line bg-mist/50 p-4 text-sm text-ink">{c}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="card flex flex-col p-8">
            <Package className="h-8 w-8 text-brand" />
            <h2 className="mt-4 font-display text-2xl font-bold text-ink">Suggested setup</h2>
            <div className="mt-6 flex items-center gap-5">
              <div className="grid h-36 w-24 place-items-center rounded-2xl bg-gradient-to-b from-mist to-ice">
                <Image src={r26.image} alt="Axiontel R-26" width={231} height={909} className="h-32 w-auto" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-ink">Axiontel R-26</p>
                <p className="text-sm text-ink-soft">IP68 · 16 channels · 4200 mAh</p>
              </div>
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted">Recommended accessories</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {s.accessories.map((a) => <li key={a} className="rounded-full bg-mist px-3 py-1.5 text-xs font-medium text-ink">{a}</li>)}
            </ul>
            <p className="mt-6 text-xs text-muted">Final recommendation depends on your site survey. Not a coverage guarantee.</p>
            <Link href="/products/r-26/" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand">View specifications <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
        <div className="container-x mt-8"><ComplianceNote /></div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="More solutions" title="Other industries we support" />
          <Stagger className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((o) => <StaggerItem key={o.slug}><SolutionCard s={o} /></StaggerItem>)}
          </Stagger>
        </div>
      </section>
      <CtaBand title="Discuss your site" text="Tell us about your site and team, and we'll recommend radios, channels and accessories." />
    </>
  );
}
