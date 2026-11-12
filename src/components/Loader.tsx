"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLenis } from "./SmoothScroll";

const LETTERS = "AXIONTEL".split("");

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduced ? 400 : 2200;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / total);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), reduced ? 0 : 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (done) lenis.start();
    else lenis.stop();
  }, [done, lenis]);

  useEffect(() => {
    document.documentElement.style.overflow = done ? "" : "hidden";
    if (done) {
      (window as Window & { __axLoaded?: boolean }).__axLoaded = true;
      window.dispatchEvent(new Event("axiontel:loaded"));
    }
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          role="status"
          aria-label="Loading Axiontel"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="bg-grid absolute inset-0 opacity-60" />
          <div className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice/60 blur-3xl" />

          <div className="relative flex flex-col items-center">
            <div className="relative grid h-44 w-44 place-items-center">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="animate-ping-slow absolute inset-0 rounded-full border border-brand/30"
                  style={{ animationDelay: `${i * 0.8}s` }}
                />
              ))}
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)", scale: 0.8, rotate: -8 }}
                animate={{ clipPath: "inset(0% 0 0 0)", scale: 1, rotate: 0 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src="/images/brand/axiontel-mark.png" alt="" width={405} height={370} priority className="h-auto w-28" />
              </motion.div>
            </div>

            <div className="mt-6 flex overflow-hidden font-display text-3xl font-extrabold italic tracking-[0.12em] text-ink">
              {LETTERS.map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {l}
                </motion.span>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-2 text-xs font-medium uppercase tracking-[0.35em] text-muted"
            >
              Engineered to excel
            </motion.p>

            <div className="mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-line">
              <div className="h-full rounded-full bg-gradient-to-r from-sky to-brand" style={{ width: `${progress}%` }} />
            </div>
            <span className="mt-3 font-display text-sm tabular-nums text-ink-soft">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
