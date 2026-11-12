import type { Metadata } from "next";
import { BadgeCheck, Boxes, Handshake, LifeBuoy } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal, { Stagger, StaggerItem } from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Become an Axiontel Dealer or Partner",
  description: "Partner with Axiontel as a dealer, distributor, system integrator or rental company. Sell ETA-approved R-26 two-way radios with our support.",
  alternates: { canonical: "/partner-with-us/" },
};

const perks = [
  { icon: BadgeCheck, title: "Approved product", text: "Sell an ETA-approved, licence-exempt 446 MHz radio with clear compliance documentation." },
  { icon: Boxes, title: "Product & accessories", text: "Radios, batteries, chargers and earpieces from one brand." },
  { icon: LifeBuoy, title: "Sales & technical support", text: "Product training, datasheets and help with customer site recommendations." },
  { icon: Handshake, title: "Direct relationship", text: "Work directly with the Axiontel team on pricing and stock." },
];

export default function Partner() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Partner with us", href: "/partner-with-us/" }]}
        eyebrow="Dealers & distributors"
        title={<>Grow with <span className="text-gradient">Axiontel</span></>}
        text="We're building a network of dealers, distributors, system integrators and rental partners across India. Tell us about your business and we'll share our partnership process."
      />
      <section className="container-x pb-12">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <StaggerItem key={p.title}>
              <div className="card h-full p-6">
                <p.icon className="h-8 w-8 text-brand" />
                <h2 className="mt-4 font-display text-lg font-semibold text-ink">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <section className="container-x pb-24">
        <Reveal>
          <div className="card mx-auto max-w-4xl p-6 sm:p-10">
            <h2 className="h-display text-3xl">Partner enquiry</h2>
            <p className="mt-2 text-ink-soft">This form is for businesses that want to resell Axiontel. For your own team&apos;s radios, use the quote form on the contact page.</p>
            <div className="mt-8"><EnquiryForm variant="partner" /></div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
