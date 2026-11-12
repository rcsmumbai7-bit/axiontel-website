"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X, ArrowUpRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import { track } from "./track";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 20);
    setHidden(y > 400 && y > prev && !open);
  });

  // eslint-disable-next-line react-hooks/set-state-in-effect -- close the menu after navigation
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled ? "border-b border-line/80 bg-white/80 shadow-[0_10px_30px_-20px_rgba(5,10,46,0.25)] backdrop-blur-xl" : "bg-transparent"
          }`}
        >
          <div className="container-x flex h-[72px] items-center justify-between gap-6">
            <Link href="/" className="flex shrink-0 items-center" aria-label="Axiontel home">
              <Image src="/images/brand/axiontel-logo.png" alt="Axiontel" width={687} height={472} priority className="h-14 w-auto" />
            </Link>

            <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
              {nav.map((item) =>
                item.children ? (
                  <div key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition ${
                        isActive(item.href) || pathname.startsWith("/products") || pathname.startsWith("/walkie-talkie")
                          ? "text-brand"
                          : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                    </Link>
                    <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="card p-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm text-ink-soft transition hover:bg-mist hover:text-brand"
                          >
                            {c.label}
                            <ArrowUpRight className="h-4 w-4 opacity-50" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition ${
                      isActive(item.href) ? "text-brand" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.span layoutId="nav-dot" className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand" />
                    )}
                  </Link>
                ),
              )}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${site.phones[0].tel}`}
                onClick={() => track("click_to_call", { location: "header" })}
                className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink xl:flex"
              >
                <Phone className="h-4 w-4 text-brand" /> {site.phones[0].display}
              </a>
              <a
                href={`tel:${site.phones[0].tel}`}
                onClick={() => track("click_to_call", { location: "header_mobile" })}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white lg:hidden"
                aria-label="Call Axiontel"
              >
                <Phone className="h-4 w-4 text-brand" />
              </a>
              <Link href="/contact/#enquiry" className="btn-primary !px-4 !py-2.5 sm:!px-5">
                Request a Quote
              </Link>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white lg:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 pt-24 backdrop-blur-xl lg:hidden"
            data-lenis-prevent
          >
            <nav aria-label="Mobile" className="container-x flex h-full flex-col overflow-y-auto pb-10">
              {nav.flatMap((item) => (item.children ? [{ label: item.label, href: item.href }, ...item.children.slice(1)] : [item])).map((item, i) => (
                <motion.div
                  key={item.href + item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between border-b border-line py-4 font-display text-xl font-semibold ${
                      isActive(item.href) ? "text-brand" : "text-ink"
                    }`}
                  >
                    {item.label}
                    <ArrowUpRight className="h-5 w-5 opacity-40" />
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 grid gap-3 text-sm text-ink-soft">
                {site.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand" /> {p.display}
                  </a>
                ))}
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
