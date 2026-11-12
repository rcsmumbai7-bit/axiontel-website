"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, BadgeCheck, BatteryFull, Droplets, Radio } from "lucide-react";
import RadioCanvas from "./RadioCanvas";
import { site } from "@/lib/site";

const words = ["Reliable", "two-way", "communication", "for", "work", "that", "can't", "miss", "a", "message."];

export default function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  // Wait for the logo loader on a fresh page load; start right away on in-app navigation.
  const [d] = useState(() => (typeof window !== "undefined" && (window as Window & { __axLoaded?: boolean }).__axLoaded ? 0 : 2.3));

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden pt-24">
      <div className="bg-grid mask-fade-b absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 78% 30%, rgba(205,231,253,0.9), rgba(205,231,253,0) 70%), radial-gradient(35% 40% at 5% 95%, rgba(90,180,248,0.18), rgba(90,180,248,0) 70%)",
        }}
      />

      <div className="container-x relative grid min-h-[calc(100svh-6rem)] items-center gap-6 lg:grid-cols-[1.05fr_1fr]">
        <motion.div style={{ y, opacity }} className="relative z-10 pb-6 pt-10 lg:pb-24 lg:pt-0">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: d + 0.20, duration: 0.6 }}
            className="eyebrow"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Introducing the Axiontel R-26
          </motion.span>

          <h1 className="h-display mt-6 text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.2rem]">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className={`inline-block ${i < 3 ? "text-gradient" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: d + 0.10 + i * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: d + 0.7, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            Axiontel builds rugged, ETA-approved walkie-talkies for security, hospitality, construction, events, logistics and industrial
            teams across India. Licence-exempt 446 MHz, IP68 protection and a battery made for full shifts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: d + 0.85, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link href="/contact/#enquiry" className="btn-primary group">
              Request a Quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link href="/products/r-26/" className="btn-ghost">Explore the R-26</Link>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { delayChildren: d + 1.0, staggerChildren: 0.08 } } }}
            className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {[
              { icon: Radio, label: "16 channels" },
              { icon: Droplets, label: "IP68 rated" },
              { icon: BatteryFull, label: "4200 mAh" },
              { icon: BadgeCheck, label: "ETA approved" },
            ].map((f) => (
              <motion.li
                key={f.label}
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="flex items-center gap-2 rounded-2xl border border-line bg-white/80 px-3 py-2.5 text-sm font-medium text-ink backdrop-blur"
              >
                <f.icon className="h-4 w-4 text-brand" /> {f.label}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="relative h-[460px] sm:h-[560px] lg:h-[720px]">
          <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/10" />
          <div className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand/15" />
          <RadioCanvas className="absolute inset-0" />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: d + 1.10, duration: 0.7 }}
            className="animate-float absolute right-0 top-[18%] hidden rounded-2xl border border-line bg-white/85 px-4 py-3 shadow-xl backdrop-blur sm:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">Frequency</p>
            <p className="font-display text-lg font-bold text-ink">446.0–446.2 MHz</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: d + 1.25, duration: 0.7 }}
            className="animate-float absolute bottom-[16%] left-0 hidden rounded-2xl border border-line bg-white/85 px-4 py-3 shadow-xl backdrop-blur [animation-delay:1.5s] sm:block"
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted">ETA certificate</p>
            <p className="font-display text-sm font-bold text-ink">{site.etaNumber}</p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: d + 1.5 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted lg:flex"
      >
        Scroll
        <span className="relative h-10 w-[1.5px] overflow-hidden bg-line">
          <motion.span
            className="absolute left-0 top-0 h-4 w-full bg-brand"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
