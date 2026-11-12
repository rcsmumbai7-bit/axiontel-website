import Link from "next/link";
import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Downloads: Datasheets & Certificates | Axiontel",
  description: "Download the Axiontel R-26 walkie-talkie datasheet and view certification details including ETA approval.",
  alternates: { canonical: "/downloads/" },
};

const files = [
  { title: "Axiontel R-26 datasheet", meta: "PDF · Version 1.0 · November 2026", href: "/downloads/axiontel-r-26-datasheet.pdf", available: true },
  { title: "R-26 ETA certificate", meta: site.etaNumber, href: "/certifications/", available: false },
  { title: "R-26 user manual", meta: "Coming soon", href: "/contact/", available: false },
];

export default function Downloads() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Downloads", href: "/downloads/" }]}
        eyebrow="Downloads"
        title="Datasheets, manuals & certificates"
        text="Approved product documents for the Axiontel R-26. Each document shows its version and date."
      />
      <section className="container-x pb-24">
        <Stagger className="grid gap-5 md:grid-cols-3">
          {files.map((f) => (
            <StaggerItem key={f.title}>
              <div className="card flex h-full flex-col p-6">
                <FileText className="h-9 w-9 text-brand" />
                <h2 className="mt-4 font-display text-lg font-semibold text-ink">{f.title}</h2>
                <p className="mt-1 flex-1 text-sm text-muted">{f.meta}</p>
                {f.available ? (
                  <a href={f.href} download className="btn-primary mt-6"><Download className="h-4 w-4" /> Download</a>
                ) : (
                  <Link href={f.href} className="btn-ghost mt-6">{f.href === "/certifications/" ? "View details" : "Request a copy"}</Link>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
