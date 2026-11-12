"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const RadioScene = dynamic(() => import("./RadioScene"), { ssr: false });

/** Lazy-mounts the WebGL scene when it scrolls near the viewport. */
export default function RadioCanvas({ variant = "hero", className = "" }: { variant?: "hero" | "product"; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(variant === "hero");
  const [inView, setInView] = useState(true);
  useEffect(() => {
    if (!ref.current) return;
    // Mount when near the viewport; pause rendering whenever it scrolls out of view.
    const io = new IntersectionObserver(
      ([e]) => {
        setInView(e.isIntersecting);
        if (e.isIntersecting) setVisible(true);
      },
      { rootMargin: "200px" },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} aria-hidden>
      {visible && <RadioScene variant={variant} active={inView} />}
    </div>
  );
}
