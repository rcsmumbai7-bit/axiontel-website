import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BadgeCheck, Building2, CalendarDays, Factory, FileCheck2, FlaskConical, HardHat, Hotel, Radio, ShieldCheck, Store, Warehouse, Waves,
} from "lucide-react";
import type { Solution } from "@/lib/solutions";
import type { SpecRow } from "@/lib/product";
import { team, type Member } from "@/lib/team";
import { site } from "@/lib/site";
import Reveal, { Stagger, StaggerItem } from "./Reveal";

export const solutionIcons = { shield: ShieldCheck, hotel: Hotel, hardhat: HardHat, calendar: CalendarDays, warehouse: Warehouse, store: Store, factory: Factory };

export function SolutionCard({ s }: { s: Solution }) {
  const Icon = solutionIcons[s.icon] ?? Building2;
  return (
    <Link href={`/solutions/${s.slug}/`} className="card group relative flex h-full flex-col overflow-hidden transition duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_30px_60px_-30px_rgba(36,64,255,0.45)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image src={s.image} alt={`${s.name}: team using two-way radios`} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-transparent" />
        <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-white/90 text-brand backdrop-blur">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-ink">{s.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{s.short}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand">
          Explore solution <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function SpecTable({ title, rows }: { title: string; rows: SpecRow[] }) {
  return (
    <div className="card overflow-hidden">
      <h3 className="bg-gradient-to-r from-brand to-[#3b6dff] px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-widest text-white">{title}</h3>
      <dl className="divide-y divide-line">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[1.1fr_1fr] gap-4 px-6 py-3 text-sm transition hover:bg-mist">
            <dt className="text-ink-soft">{k}</dt>
            <dd className="text-right font-medium text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2);
}

export function MemberCard({ m, large = false }: { m: Member; large?: boolean }) {
  return (
    <article className="card group h-full overflow-hidden">
      <div className={`relative overflow-hidden ${large ? "aspect-[4/4.2]" : "aspect-square"}`}>
        {m.photo ? (
          <Image src={m.photo} alt={`${m.name}, ${m.role} of Axiontel`} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover object-top transition duration-700 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-mist via-ice to-white">
            <div className="bg-grid absolute inset-0 opacity-70" />
            <span className="relative grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-brand to-sky font-display text-4xl font-bold text-white shadow-[0_20px_40px_-15px_rgba(36,64,255,0.7)]">
              {initials(m.name)}
            </span>
            <span className="absolute bottom-3 right-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">Photo coming soon</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{m.role}</p>
        <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">{m.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{m.bio}</p>
      </div>
    </article>
  );
}

export function TeamGrid() {
  const leaders = team.filter((m) => m.group === "leadership");
  const sales = team.filter((m) => m.group === "sales");
  return (
    <div className="space-y-14">
      <div>
        <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">Leadership</h3>
        <Stagger className="grid gap-6 sm:grid-cols-2">
          {leaders.map((m) => <StaggerItem key={m.name}><MemberCard m={m} large /></StaggerItem>)}
        </Stagger>
      </div>
      <div>
        <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">Sales team</h3>
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sales.map((m) => <StaggerItem key={m.name}><MemberCard m={m} /></StaggerItem>)}
        </Stagger>
      </div>
    </div>
  );
}

export const certifications = [
  {
    icon: FileCheck2,
    title: "ETA approved by WPC",
    detail: `Certificate No. ${site.etaNumber}`,
    text: "Equipment Type Approval from the Wireless Planning & Coordination wing, Department of Telecommunications, for the Axiontel R-26.",
    image: null as string | null,
  },
  {
    icon: Radio,
    title: "Licence-exempt 446 MHz band",
    detail: "446.0 – 446.2 MHz · 0.5 W",
    text: "Under current DoT rules, radios operating strictly within 446.0–446.2 MHz are exempt from an operating licence.",
    image: null as string | null,
  },
  {
    icon: Waves,
    title: "IP68 waterproof & dustproof",
    detail: "Ingress protection rating",
    text: "Dust-tight and protected against continuous immersion, for rain, dust and mud on the job.",
    image: null as string | null,
  },
  {
    icon: FlaskConical,
    title: "Lab test approved",
    detail: "Tested performance",
    text: "R-26 transmitter and receiver parameters are lab tested against the published specification.",
    image: null as string | null,
  },
];

export function CertificateGrid({ showDocs = true }: { showDocs?: boolean }) {
  return (
    <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {certifications.map((c) => (
        <StaggerItem key={c.title}>
          <article className="card group relative h-full overflow-hidden p-6 transition duration-500 hover:-translate-y-1 hover:border-brand/30">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ice/70 blur-2xl transition group-hover:bg-sky/30" />
            <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white shadow-[0_12px_24px_-10px_rgba(36,64,255,0.8)]">
              <c.icon className="h-6 w-6" />
            </span>
            <h3 className="relative mt-5 font-display text-lg font-semibold text-ink">{c.title}</h3>
            <p className="relative mt-1 text-sm font-semibold text-brand">{c.detail}</p>
            <p className="relative mt-3 text-sm leading-relaxed text-ink-soft">{c.text}</p>
            {showDocs && (
              <div className="relative mt-5 flex aspect-[3/4] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-brand/25 bg-mist/70 text-center">
                <BadgeCheck className="h-8 w-8 text-brand/50" />
                <span className="px-4 text-xs font-medium text-muted">Certificate image will be added here</span>
              </div>
            )}
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function CtaBand({
  title = "Let's find the right radios for your team",
  text = "Tell us about your site, team size and shifts. Our team will recommend a setup and send a quotation.",
}: { title?: string; text?: string }) {
  return (
    <section className="container-x py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand via-[#2f55ff] to-sky px-6 py-14 text-white sm:px-14 sm:py-16">
          <div className="bg-grid absolute inset-0 opacity-30 [filter:invert(1)]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/20" />
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/25" />
          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 text-white/85">{text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact/#enquiry" className="btn bg-white text-brand hover:bg-ink hover:text-white">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${site.phones[0].tel}`} className="btn border border-white/40 text-white hover:bg-white/10">
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function ComplianceNote() {
  return (
    <p className="text-xs leading-relaxed text-muted">
      Compliance note: the Axiontel R-26 operates in 446.0–446.2 MHz at 0.5 W and holds ETA certificate {site.etaNumber}. Under current
      Department of Telecommunications rules, radios operating strictly within this band are exempt from an operating licence. Customers must
      continue to follow applicable DoT / WPC requirements for their use. See the{" "}
      <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2215261" target="_blank" rel="noopener" className="underline">official PIB release</a>.
    </p>
  );
}
