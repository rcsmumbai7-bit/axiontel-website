import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Axiontel Walkie Talkies & Two-Way Radios | India",
    template: "%s",
  },
  description: site.description,
  applicationName: "Axiontel",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Axiontel",
    locale: "en_IN",
    url: site.url,
    title: "Axiontel Walkie Talkies & Two-Way Radios | India",
    description: site.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Axiontel R-26 two-way radio" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: "Axiontel",
      url: site.url,
      logo: `${site.url}/images/brand/axiontel-logo.png`,
      email: site.email,
      sameAs: [site.instagram],
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line1,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        addressCountry: site.address.country,
      },
      contactPoint: site.phones.map((p) => ({
        "@type": "ContactPoint",
        telephone: p.tel,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      })),
      founder: { "@type": "Person", name: "Akhilesh Chaudhary" },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: "Axiontel",
      url: site.url,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className="antialiased">
      <body className="min-h-screen overflow-x-hidden bg-white">
        <JsonLd data={orgSchema} />
        <SmoothScroll>
          <Loader />
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
