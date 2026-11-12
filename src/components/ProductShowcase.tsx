"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { r26 } from "@/lib/product";

export default function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 10]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const ringScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 1.15]);
  const textX = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      <motion.p
        style={{ x: textX }}
        aria-hidden
        className="pointer-events-none absolute top-10 whitespace-nowrap font-display text-[18vw] font-extrabold italic leading-none text-mist"
      >
        R-26 · ENGINEERED TO EXCEL · R-26
      </motion.p>
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
        <div className="relative mx-auto grid h-[520px] w-full max-w-md place-items-center sm:h-[620px]">
          <motion.div style={{ scale: ringScale }} className="absolute inset-0 rounded-full bg-gradient-to-br from-ice via-white to-mist" />
          <motion.div style={{ scale: ringScale }} className="absolute inset-8 rounded-full border border-brand/15" />
          <motion.div style={{ scale: ringScale }} className="absolute inset-20 rounded-full border border-dashed border-brand/20" />
          <motion.div style={{ rotate, y }} className="relative">
            <Image
              src={r26.image}
              alt="Axiontel R-26 handheld walkie-talkie, front view"
              width={231}
              height={909}
              className="h-[440px] w-auto drop-shadow-[0_40px_40px_rgba(5,10,46,0.35)] sm:h-[540px]"
            />
          </motion.div>
          <span className="absolute bottom-8 left-0 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white shadow-lg">302 g · 140 × 55 × 43 mm</span>
          <span className="absolute right-0 top-16 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white shadow-lg">IP68</span>
        </div>

        <div>
          <span className="eyebrow">Featured product</span>
          <h2 className="h-display mt-4 text-4xl leading-tight sm:text-5xl">
            Axiontel <span className="text-gradient">R-26</span> two-way radio
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{r26.summary}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {["16 channels", "IP68 waterproof", "Channel scan", "Voice scrambler", "VOX hands-free", "Time-out timer (TOT)", "Squelch level setting", "Long battery life"].map(
              (f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 text-ink"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {f}
                </motion.li>
              ),
            )}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/products/r-26/" className="btn-primary group">
              View full specifications <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link href="/contact/?product=Axiontel%20R-26%20walkie-talkie#enquiry" className="btn-ghost">Get R-26 pricing</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
