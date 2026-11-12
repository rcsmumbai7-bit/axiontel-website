import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { CtaBand, SolutionCard } from "@/components/blocks";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Business Two-Way Radio Solutions | Axiontel",
  description: "Discover two-way radio communication options for security, hospitality, construction, events and other business environments.",
  alternates: { canonical: "/solutions/" },
};

export default function Solutions() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Solutions", href: "/solutions/" }]}
        eyebrow="Industry solutions"
        title={<>Two-way radio solutions <span className="text-gradient">by industry</span></>}
        text="Every site is different. Choose your industry to see the communication challenges we solve, how radios fit your workflow and what to plan for."
      />
      <section className="container-x pb-20">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => <StaggerItem key={s.slug}><SolutionCard s={s} /></StaggerItem>)}
        </Stagger>
      </section>
      <CtaBand title="Discuss your site with us" text="Share your site size, team count and shifts, and we'll recommend a radio setup." />
    </>
  );
}
