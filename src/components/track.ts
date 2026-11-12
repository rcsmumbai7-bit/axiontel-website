// Minimal analytics helper: pushes events to a GA4 / GTM dataLayer if one is installed.
type Win = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as Win;
  if (typeof w.gtag === "function") w.gtag("event", event, params);
  else (w.dataLayer ||= []).push({ event, ...params });
}
