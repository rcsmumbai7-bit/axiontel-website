"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CountUp({ to, decimals = 0, suffix = "", prefix = "" }: { to: number; decimals?: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const c = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (node.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`),
    });
    return () => c.stop();
  }, [inView, to, decimals, suffix, prefix]);
  return <span ref={ref}>{`${prefix}${to.toFixed(decimals)}${suffix}`}</span>;
}
