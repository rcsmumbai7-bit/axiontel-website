"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import type { Faq } from "@/lib/faqs";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-white">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-display text-base font-semibold text-ink transition hover:text-brand sm:text-lg"
              >
                {f.q}
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition ${isOpen ? "rotate-45 border-brand bg-brand text-white" : "border-line text-ink"}`}>
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>
            {/* Answers stay in the HTML for search engines and AI crawlers; only their height animates. */}
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-6 leading-relaxed text-ink-soft">{f.a}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
