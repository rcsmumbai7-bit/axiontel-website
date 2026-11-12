"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { solutions } from "@/lib/solutions";
import { track } from "./track";

type Variant = "full" | "short" | "partner";

const products = ["Axiontel R-26 walkie-talkie", "Accessories (earpiece, battery, charger)", "Complete radio solution", "Not sure yet"];
const contactTimes = ["Any time", "Morning (9am–12pm)", "Afternoon (12pm–4pm)", "Evening (4pm–7pm)"];
const partnerTypes = ["Dealer / reseller", "Distributor", "System integrator", "Rental company", "Other"];

export default function EnquiryForm({ variant = "full", product }: { variant?: Variant; product?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [prefill, setPrefill] = useState(product ?? "");
  const started = useRef(false);
  const startedAt = useRef(0);

  useEffect(() => {
    startedAt.current = Date.now();
    const p = new URLSearchParams(window.location.search).get("product");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- prefill from the URL after hydration
    if (p && !product) setPrefill(p);
  }, [product]);

  const onFocus = () => {
    if (started.current) return;
    started.current = true;
    track(variant === "partner" ? "partner_form_start" : "quote_form_start", { variant });
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fd = new FormData(e.currentTarget);
    const data: Record<string, unknown> = Object.fromEntries(fd.entries());
    const params = new URLSearchParams(window.location.search);
    data.formType = variant === "partner" ? "Partner enquiry" : "Quote enquiry";
    data.sourcePage = window.location.pathname;
    data.utm = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]
      .filter((k) => params.get(k))
      .map((k) => `${k}=${params.get(k)}`)
      .join("&");
    data.elapsedMs = Date.now() - startedAt.current;
    try {
      const res = await fetch("/enquiry.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again or call us.");
      track(variant === "partner" ? "partner_form_submit" : "quote_form_submit", { variant, product: data.product });
      router.push(variant === "partner" ? "/thank-you/?type=partner" : "/thank-you/");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const full = variant === "full";
  const partner = variant === "partner";

  return (
    <form onSubmit={onSubmit} onFocus={onFocus} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
      {/* Honeypot: hidden from people, bots tend to fill it in. */}
      <div className="hidden" aria-hidden>
        <label>
          Website <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field label="Full name" required>
        <input name="name" required autoComplete="name" className="input" placeholder="Your name" maxLength={100} />
      </Field>
      <Field label={partner ? "Company name" : "Business / organisation"} required={partner}>
        <input name="company" required={partner} autoComplete="organization" className="input" placeholder="Company name" maxLength={150} />
      </Field>
      <Field label="Phone" required>
        <input name="phone" type="tel" required autoComplete="tel" className="input" placeholder="+91" pattern="[0-9+\-\s()]{8,20}" maxLength={20} />
      </Field>
      <Field label="Email" required>
        <input name="email" type="email" required autoComplete="email" className="input" placeholder="you@company.com" maxLength={150} />
      </Field>
      <Field label="City / State">
        <input name="city" autoComplete="address-level2" className="input" placeholder="Mumbai, Maharashtra" maxLength={100} />
      </Field>

      {partner ? (
        <Field label="Business type">
          <select name="businessType" className="input" defaultValue="">
            <option value="" disabled>Select</option>
            {partnerTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
      ) : (
        <Field label="Industry">
          <select name="industry" className="input" defaultValue="">
            <option value="" disabled>Select your industry</option>
            {solutions.map((s) => <option key={s.slug}>{s.name}</option>)}
            <option>Other</option>
          </select>
        </Field>
      )}

      {!partner && (
        <Field label="Product interest">
          <select name="product" className="input" value={prefill || ""} onChange={(e) => setPrefill(e.target.value)}>
            <option value="">Select a product</option>
            {[...new Set([...(prefill && !products.includes(prefill) ? [prefill] : []), ...products])].map((p) => <option key={p}>{p}</option>)}
          </select>
        </Field>
      )}
      <Field label={partner ? "Expected monthly volume" : "Estimated quantity"}>
        <input name="quantity" type="text" inputMode="numeric" className="input" placeholder="e.g. 20 radios" maxLength={40} />
      </Field>

      {full && (
        <>
          <Field label="Intended use">
            <input name="use" className="input" placeholder="e.g. hotel housekeeping, site security" maxLength={200} />
          </Field>
          <Field label="Preferred contact time">
            <select name="contactTime" className="input" defaultValue="Any time">
              {contactTimes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </Field>
        </>
      )}

      <Field label="Message" className="sm:col-span-2">
        <textarea name="message" rows={full || partner ? 4 : 3} className="input resize-none" placeholder="Tell us about your team, site and requirements" maxLength={2000} />
      </Field>

      <label className="flex items-start gap-3 text-sm text-ink-soft sm:col-span-2">
        <input type="checkbox" name="consent" value="yes" required className="mt-1 h-4 w-4 accent-[var(--color-brand)]" />
        <span>
          I agree that Axiontel may contact me about this enquiry. Read our{" "}
          <Link href="/privacy-policy/" className="font-medium text-brand underline-offset-2 hover:underline">privacy policy</Link>.
        </span>
      </label>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <motion.button
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={status === "sending"}
          className="btn-primary group w-full sm:w-auto disabled:opacity-70"
        >
          {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {status === "sending" ? "Sending…" : partner ? "Send partner enquiry" : "Request a quote"}
          {status !== "sending" && <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />}
        </motion.button>
        <p className="text-xs text-muted">Your enquiry goes straight to our sales team.</p>
      </div>
      {status === "error" && (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">{error}</p>
      )}
    </form>
  );
}

function Field({ label, required, children, className = "" }: { label: string; required?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="label">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      {children}
    </label>
  );
}
