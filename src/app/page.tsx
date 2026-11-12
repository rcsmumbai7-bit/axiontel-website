import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Headphones, MapPin, Phone, ShieldCheck, Truck, Users, Wrench, Mail } from "lucide-react";
import HomeHero from "@/components/HomeHero";
import ClientMarquee from "@/components/ClientMarquee";
import ProductShowcase from "@/components/ProductShowcase";
import SectionHeading from "@/components/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import TiltCard from "@/components/TiltCard";
import FaqList from "@/components/FaqList";
import EnquiryForm from "@/components/EnquiryForm";
import JsonLd from "@/components/JsonLd";
import { CertificateGrid, ComplianceNote, MemberCard, SolutionCard } from "@/components/blocks";
import { solutions } from "@/lib/solutions";
import { r26 } from "@/lib/product";
import { articles } from "@/lib/articles";
import { generalFaqs } from "@/lib/faqs";
import { team } from "@/lib/team";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Axiontel Walkie Talkies & Two-Way Radios | India",
  description:
    "Explore Axiontel two-way radios and communication solutions for business teams. View the R-26 walkie-talkie specifications and request a quote.",
  alternates: { canonical: "/" },
};

const stats = [
  { value: 16, suffix: "", label: "Programmable channels" },
  { value: 4200, suffix: " mAh", label: "Li-ion battery capacity" },
  { value: 68, prefix: "IP", label: "Water & dust protection" },
  { value: 302, suffix: " g", label: "Weight with battery & antenna" },
];

const why = [
  { icon: ShieldCheck, title: "Approved & compliant", text: `ETA approved by WPC (${site.etaNumber}) and built for the licence-exempt 446 MHz band.` },
  { icon: Wrench, title: "Built for hard work", text: "IP68 protection, a −20 °C to +60 °C operating range and a rugged body for real job sites." },
  { icon: Headphones, title: "Clear, private audio", text: "Squelch control, 0.7 W audio output and a built-in voice scrambler on every channel." },
  { icon: Users, title: "Advice from people who know radios", text: "We help you plan channels, accessories and charging for your team before you buy." },
  { icon: Truck, title: "Supply across India", text: "From our Mumbai base, we supply businesses and partners across India." },
  { icon: Phone, title: "After-sales support", text: "Direct phone, WhatsApp and email support for setup, spares and service." },
];

const steps = [
  { n: "01", title: "Count users & teams", text: "How many people need radios, and which groups need their own channel." },
  { n: "02", title: "Map your site", text: "Area, floors, basements and obstructions decide real-world coverage." },
  { n: "03", title: "Check band & licence", text: "Choose ETA-approved radios in a band that fits your licensing needs." },
  { n: "04", title: "Plan battery & accessories", text: "Match battery, earpieces and chargers to your shifts and roles." },
];

export default function Home() {
  const founder = team[0];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: generalFaqs.slice(0, 6).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <HomeHero />
      <ClientMarquee />

      {/* Stats */}
      <section className="container-x">
        <Stagger className="grid grid-cols-2 overflow-hidden rounded-[2rem] border border-line bg-white lg:grid-cols-4">
          {stats.map((s, i) => (
            <StaggerItem key={s.label} className={`p-8 sm:p-10 ${i % 2 ? "" : "border-r"} border-line lg:border-r ${i < 2 ? "border-b lg:border-b-0" : ""} ${i === 3 ? "lg:border-r-0" : ""}`}>
              <p className="font-display text-4xl font-bold text-ink sm:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} prefix={s.prefix} />
              </p>
              <p className="mt-2 text-sm text-ink-soft">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <ProductShowcase />

      {/* Key features */}
      <section className="section relative bg-mist/60">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Key features"
            title={<>Everything a working team needs, <span className="text-gradient">nothing it doesn&apos;t</span></>}
            text="The R-26 focuses on what matters on shift: dependable audio, a battery that lasts, and a body that shrugs off rain, dust and drops."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {r26.highlights.map((h, i) => (
              <StaggerItem key={h.title}>
                <TiltCard className="h-full">
                  <div className="card relative h-full p-6">
                    <span className="font-display text-sm font-semibold text-brand/60">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-display text-lg font-semibold text-ink">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{h.text}</p>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Solutions */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Solutions by industry"
              title="Built around the way your team works"
              text="From hotel housekeeping to crane signalling, every site has different communication needs. Find yours."
            />
            <Reveal>
              <Link href="/solutions/" className="btn-ghost shrink-0">All solutions <ArrowUpRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.slice(0, 6).map((s) => (
              <StaggerItem key={s.slug}><SolutionCard s={s} /></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Field image band */}
      <section className="container-x">
        <Reveal>
          <div className="relative grid overflow-hidden rounded-[2rem] bg-ink lg:grid-cols-2">
            <div className="relative min-h-[360px]">
              <Image src="/images/industries/r-26-ip68-water.webp" alt="Axiontel R-26 radio splashed by water, showing its IP68 protection" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/70" />
            </div>
            <div className="relative p-10 text-white sm:p-14">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/40 blur-3xl" />
              <span className="relative inline-flex rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky">IP68 rated</span>
              <h2 className="relative mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">Rain, dust, mud. The conversation keeps going.</h2>
              <p className="relative mt-5 text-white/75">
                The R-26 is dust-tight and protected against continuous immersion. Outdoor patrols, open construction sites and monsoon events don&apos;t
                have to stop for the weather.
              </p>
              <ul className="relative mt-8 grid grid-cols-2 gap-4 text-sm">
                {[["−20 to +60 °C", "Operating range"], ["≤ 0.25 µV", "RX sensitivity"], ["0.7 W", "Audio output"], ["≤ 20 mA", "Standby current"]].map(([v, l]) => (
                  <li key={l} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-display text-xl font-bold">{v}</p>
                    <p className="text-white/60">{l}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Why Axiontel */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Why Axiontel"
              title="Uncompromising quality. Unmatched reliability."
              text="The R-26 is engineered for professionals who cannot afford communication failure, and backed by a team that answers the phone."
            />
            <Reveal className="mt-8">
              <Link href="/about-axiontel/" className="btn-ghost">About Axiontel <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {why.map((w) => (
              <StaggerItem key={w.title}>
                <div className="card group h-full p-7 transition duration-500 hover:border-brand/30">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-brand transition duration-500 group-hover:bg-brand group-hover:text-white">
                    <w.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Certifications */}
      <section className="section relative overflow-hidden bg-gradient-to-b from-white via-mist/70 to-white">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Certifications & compliance"
            title="Approved, tested and ready to deploy"
            text="Walkie-talkies are regulated radio equipment. Here's exactly what the Axiontel R-26 is certified for."
          />
          <div className="mt-14">
            <CertificateGrid showDocs={false} />
          </div>
          <Reveal className="mx-auto mt-10 max-w-3xl text-center">
            <ComplianceNote />
            <Link href="/certifications/" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              View certificates <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* How to choose */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="How to choose"
            title="Four questions before you buy radios"
            text="A quick framework we use with every customer. Read the full guide for the details."
          />
          <Stagger className="relative mt-14 grid gap-6 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent md:block" />
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="relative">
                  <span className="relative grid h-16 w-16 place-items-center rounded-full border border-brand/20 bg-white font-display text-lg font-bold text-brand shadow-[0_10px_30px_-15px_rgba(36,64,255,0.6)]">{s.n}</span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10">
            <Link href="/resources/how-to-choose-a-walkie-talkie-for-business/" className="btn-primary group">
              Read the buying guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="section bg-mist/60">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal x={-30} y={0}>
            <div className="mx-auto max-w-sm"><MemberCard m={founder} large /></div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Meet the founder"
              title={<>&ldquo;Communication on the job should never be the weak link.&rdquo;</>}
              text="Axiontel was founded by Akhilesh Chaudhary with a simple aim: give Indian businesses two-way radios that are approved, honestly specified and properly supported. With CTO Abdhesh Chaudhary leading engineering and a sales team that works directly with customers, Axiontel keeps the whole journey close and accountable."
            />
            <Reveal className="mt-8 flex flex-wrap gap-3">
              <Link href="/about-axiontel/" className="btn-primary">Meet the team</Link>
              <Link href="/partner-with-us/" className="btn-ghost">Become a partner</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Resources" title="Guides for smarter radio buying" />
            <Reveal><Link href="/resources/" className="btn-ghost shrink-0">All resources <ArrowUpRight className="h-4 w-4" /></Link></Reveal>
          </div>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((a) => (
              <StaggerItem key={a.slug}>
                <Link href={`/resources/${a.slug}/`} className="card group flex h-full flex-col p-7 transition duration-500 hover:-translate-y-1 hover:border-brand/30">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand">{a.category}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">{a.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{a.description}</p>
                  <span className="mt-6 flex items-center justify-between text-sm text-muted">
                    {a.readMins} min read
                    <ArrowUpRight className="h-5 w-5 text-brand transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-mist/60">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <SectionHeading eyebrow="FAQ" title="Questions buyers ask us" text="Straight answers about range, bands, licensing and support." />
          <Reveal><FaqList faqs={generalFaqs.slice(0, 6)} /></Reveal>
        </div>
      </section>

      {/* Lead capture */}
      <section id="enquiry" className="section scroll-mt-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              eyebrow="Request a quote"
              title="Tell us about your team"
              text="Share a few details and our sales team will get back to you with a recommendation and quotation."
            />
            <Reveal className="mt-10 space-y-4">
              {site.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="card flex items-center gap-4 p-5 transition hover:border-brand/30">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-brand"><Phone className="h-5 w-5" /></span>
                  <span><span className="block text-xs text-muted">Call sales</span><span className="font-semibold text-ink">{p.display}</span></span>
                </a>
              ))}
              <a href={`mailto:${site.email}`} className="card flex items-center gap-4 p-5 transition hover:border-brand/30">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-brand"><Mail className="h-5 w-5" /></span>
                <span><span className="block text-xs text-muted">Email</span><span className="font-semibold text-ink">{site.email}</span></span>
              </a>
              <a href={site.mapLink} target="_blank" rel="noopener" className="card flex items-center gap-4 p-5 transition hover:border-brand/30">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-brand"><MapPin className="h-5 w-5" /></span>
                <span><span className="block text-xs text-muted">Visit</span><span className="font-semibold text-ink">{site.address.line1}, {site.address.city}</span></span>
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-10">
              <EnquiryForm variant="short" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
