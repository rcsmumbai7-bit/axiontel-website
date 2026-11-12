import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { solutions } from "@/lib/solutions";
import { InstagramIcon } from "./Icons";

const cols = [
  {
    title: "Products",
    links: [
      { label: "All walkie-talkies", href: "/walkie-talkies/" },
      { label: "Handheld radios", href: "/walkie-talkies/handheld-radios/" },
      { label: "Axiontel R-26", href: "/products/r-26/" },
      { label: "Accessories", href: "/walkie-talkie-accessories/" },
      { label: "Certifications", href: "/certifications/" },
    ],
  },
  {
    title: "Solutions",
    links: solutions.slice(0, 6).map((s) => ({ label: s.name, href: `/solutions/${s.slug}/` })),
  },
  {
    title: "Company",
    links: [
      { label: "About Axiontel", href: "/about-axiontel/" },
      { label: "Resources", href: "/resources/" },
      { label: "Support", href: "/support/" },
      { label: "Downloads", href: "/downloads/" },
      { label: "Partner with us", href: "/partner-with-us/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[380px] w-[380px] rounded-full bg-sky/20 blur-[120px]" />
      <div className="container-x relative grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Image src="/images/brand/axiontel-logo-white.png" alt="Axiontel" width={655} height={446} className="h-16 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            Rugged, ETA-approved two-way radios for teams that can&apos;t miss a message. Designed for security, hospitality,
            construction, events, logistics and industry.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
              <a href={site.mapLink} target="_blank" rel="noopener" className="hover:text-white">
                {site.address.line1}, {site.address.city}, {site.address.region}, {site.address.countryName}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
              <span>
                {site.phones.map((p, i) => (
                  <span key={p.tel}>
                    {i > 0 && " / "}
                    <a href={`tel:${p.tel}`} className="hover:text-white">{p.display}</a>
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
          </ul>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
          >
            <InstagramIcon className="h-4 w-4" /> @axiontel
          </a>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-sky">{c.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/70 transition hover:text-white">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Axiontel. All rights reserved. Axiontel™ is a trademark of its owner.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy/" className="hover:text-white">Privacy policy</Link>
            <Link href="/terms-and-conditions/" className="hover:text-white">Terms &amp; conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
