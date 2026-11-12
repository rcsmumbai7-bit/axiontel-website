"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";
import { useLenis } from "./SmoothScroll";
import { track } from "./track";

export default function FloatingActions() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  const lenis = useLenis();
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 700));

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            type="button"
            aria-label="Back to top"
            onClick={() => (lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: "smooth" }))}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink shadow-lg transition hover:text-brand"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener"
        onClick={() => track("click_whatsapp", { location: "floating" })}
        aria-label="Chat with Axiontel on WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition hover:scale-105"
      >
        <span className="animate-ping-slow absolute inset-0 rounded-full bg-[#25D366]/50" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>
    </div>
  );
}
