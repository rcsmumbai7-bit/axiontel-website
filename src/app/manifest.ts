export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Axiontel",
    short_name: "Axiontel",
    description: "Rugged, ETA-approved two-way radios for professional teams.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2440ff",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
