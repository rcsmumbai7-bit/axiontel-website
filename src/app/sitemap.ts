export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { solutions } from "@/lib/solutions";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-12");
  const pages: [string, number][] = [
    ["/", 1],
    ["/walkie-talkies/", 0.9],
    ["/walkie-talkies/handheld-radios/", 0.8],
    ["/products/r-26/", 0.9],
    ["/walkie-talkie-accessories/", 0.7],
    ["/solutions/", 0.8],
    ["/resources/", 0.7],
    ["/about-axiontel/", 0.7],
    ["/support/", 0.6],
    ["/downloads/", 0.5],
    ["/certifications/", 0.6],
    ["/contact/", 0.8],
    ["/partner-with-us/", 0.6],
    ["/privacy-policy/", 0.2],
    ["/terms-and-conditions/", 0.2],
  ];
  return [
    ...pages.map(([p, priority]) => ({ url: `${site.url}${p}`, lastModified, priority })),
    ...solutions.map((s) => ({ url: `${site.url}/solutions/${s.slug}/`, lastModified, priority: 0.7 })),
    ...articles.map((a) => ({ url: `${site.url}/resources/${a.slug}/`, lastModified: new Date(a.updated), priority: 0.6 })),
  ];
}
