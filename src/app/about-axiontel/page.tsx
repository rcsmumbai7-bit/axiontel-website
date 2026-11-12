import Image from "next/image";
import type { Metadata } from "next";
import { Eye, Target, HeartHandshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import ClientMarquee from "@/components/ClientMarquee";
import JsonLd from "@/components/JsonLd";
import { CtaBand, TeamGrid } from "@/components/blocks";
import { site } from "@/lib/site";
import { team } from "@/lib/team";

export const metadata: Metadata = {
  title: "About Axiontel | Two-Way Radio Brand, Mumbai",
  description: "Learn about Axiontel, the Mumbai-based two-way radio brand founded by Akhilesh Chaudhary. Meet our leadership and sales team.",
  alternates: { canonical: "/about-axiontel/" },
};

const values = [
  { icon: Target, title: "Our mission", text: "Make dependable, approved two-way communication simple to buy and simple to run for every Indian business." },
  { icon: Eye, title: "Our approach", text: "Verified specifications, honest claims and compliance details you can check, on every product we sell." },
  { icon: HeartHandshake, title: "Our promise", text: "A team that knows radios, answers the phone and stays with you after the sale." },
];

export default function About() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          about: { "@id": `${site.url}/#organization` },
          mentions: team.map((m) => ({ "@type": "Person", name: m.name, jobTitle: m.role, worksFor: { "@id": `${site.url}/#organization` } })),
        }}
      />
      <PageHero
        crumbs={[{ label: "About Axiontel", href: "/about-axiontel/" }]}
        eyebrow="About us"
        title={<>Engineered to excel. <span className="text-gradient">Built to be relied on.</span></>}
        text="Axiontel is a two-way radio brand based in Mumbai. We design and supply rugged, ETA-approved walkie-talkies, starting with the R-26, for teams in security, hospitality, construction, events, logistics and industry."
        aside={
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line shadow-2xl">
            <Image src="/images/industries/site-engineer.webp" alt="Engineer on site with an Axiontel radio" fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </div>
        }
      />

      <section className="section pt-6">
        <div className="container-x">
          <Stagger className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card h-full p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white"><v.icon className="h-6 w-6" /></span>
                  <h2 className="mt-5 font-display text-xl font-semibold text-ink">{v.title}</h2>
                  <p className="mt-2 leading-relaxed text-ink-soft">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section bg-mist/60">
        <div className="container-x">
          <SectionHeading eyebrow="Our team" title="The people behind Axiontel" text="A small, hands-on team. When you call Axiontel, you speak to people who know the product." />
          <div className="mt-14"><TeamGrid /></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Company details"
            title="Find us"
            text={
              <>
                Axiontel<br />
                {site.address.line1}, {site.address.city}, {site.address.region}, {site.address.countryName}<br />
                Phone: {site.phones.map((p) => p.display).join(" / ")}<br />
                Email: {site.email}
              </>
            }
          />
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-line shadow-xl">
              <iframe src={site.mapEmbed} title="Axiontel location on Google Maps" className="h-[360px] w-full" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </Reveal>
        </div>
      </section>
      <ClientMarquee title="Teams that rely on Axiontel" />
      <CtaBand />
    </>
  );
}
