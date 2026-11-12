import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CertificateGrid, ComplianceNote, CtaBand } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Certifications: ETA Approval & IP68 | Axiontel R-26",
  description: "Axiontel R-26 certifications: ETA approved by WPC (ETA-SD-20260605298), licence-exempt 446 MHz band, IP68 and lab-tested performance.",
  alternates: { canonical: "/certifications/" },
};

export default function Certifications() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Certifications", href: "/certifications/" }]}
        eyebrow="Certifications"
        title={<>Product <span className="text-gradient">certifications</span></>}
        text="Certification and compliance details for the Axiontel R-26 two-way radio. Certificate copies are available on request for tenders and procurement."
      />
      <section className="container-x pb-12">
        <CertificateGrid />
        <Reveal className="mt-10 max-w-3xl"><ComplianceNote /></Reveal>
      </section>
      <CtaBand title="Need certificate copies for a tender?" text="Send us an enquiry with your organisation details and we'll share the documents you need." />
    </>
  );
}
