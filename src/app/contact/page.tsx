import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Axiontel | Request a Walkie-Talkie Quote",
  description: "Contact Axiontel in Mumbai for walkie-talkie quotes, product demos and support. Call +91 70391 53605 / +91 99670 41167 or email sales@axiontel.co.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  const cards = [
    { icon: Phone, label: "Call sales", lines: site.phones.map((p) => ({ text: p.display, href: `tel:${p.tel}` })) },
    { icon: Mail, label: "Email", lines: [{ text: site.email, href: `mailto:${site.email}` }] },
    { icon: WhatsAppIcon, label: "WhatsApp", lines: [{ text: "Chat with us", href: whatsappLink() }] },
    { icon: InstagramIcon, label: "Instagram", lines: [{ text: "@axiontel", href: site.instagram }] },
  ];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          about: { "@id": `${site.url}/#organization` },
        }}
      />
      <PageHero
        crumbs={[{ label: "Contact", href: "/contact/" }]}
        eyebrow="Contact"
        title={<>Let&apos;s talk <span className="text-gradient">radios</span></>}
        text="Request a quotation, book a product demo or ask our team a question. We'll get back to you as soon as we can during business hours."
      />
      <section className="container-x pb-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <div className="card h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-brand"><c.icon className="h-5 w-5" /></span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted">{c.label}</p>
                {c.lines.map((l) => (
                  <a key={l.href} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener" className="mt-1 block font-semibold text-ink hover:text-brand">{l.text}</a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="enquiry" className="container-x scroll-mt-24 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="card p-6 sm:p-10">
              <h2 className="h-display text-3xl">Send an enquiry</h2>
              <p className="mt-2 text-ink-soft">Only name, phone and email are required. The more you share, the better our recommendation.</p>
              <div className="mt-8"><EnquiryForm variant="full" /></div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-line shadow-lg">
              <iframe src={site.mapEmbed} title="Axiontel location: Sangam Glass House, Mumbai" className="h-[380px] w-full" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
            <div className="card space-y-4 p-6 text-sm">
              <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-brand" /><span><strong className="text-ink">Axiontel</strong><br />{site.address.line1}, {site.address.city}, {site.address.region}, {site.address.countryName}</span></p>
              <p className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-brand" /><span>Monday to Saturday, business hours</span></p>
              <a href={site.mapLink} target="_blank" rel="noopener" className="btn-ghost w-full">Get directions</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
