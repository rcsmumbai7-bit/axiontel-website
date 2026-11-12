import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Axiontel",
  description: "How Axiontel collects, uses and protects the information you share through axiontel.co.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function Privacy() {
  return (
    <>
      <PageHero crumbs={[{ label: "Privacy policy", href: "/privacy-policy/" }]} title="Privacy policy" text="Last updated: 12 November 2026" />
      <section className="container-x prose-ax max-w-3xl pb-24">
        <h2>What we collect</h2>
        <p>When you submit an enquiry or partner form, we collect the details you enter: name, organisation, phone, email, city, industry, product interest, quantity, intended use, preferred contact time and your message. We also record the page you submitted from and any campaign (UTM) parameters in the link.</p>
        <h2>How we use it</h2>
        <p>We use this information only to respond to your enquiry, prepare quotations, provide support and, where you are a partner, manage the partnership. We do not sell your personal information.</p>
        <h2>How it is sent and stored</h2>
        <p>Form submissions are sent by email to the Axiontel sales team through our email service provider. We keep enquiry records only as long as needed for sales, support and legal obligations.</p>
        <h2>Cookies and analytics</h2>
        <p>This website may use analytics tools to understand how visitors use it. Where required, analytics will run only with your consent.</p>
        <h2>Your choices</h2>
        <p>You can ask us to access, correct or delete your information by emailing {site.email}.</p>
        <h2>Contact</h2>
        <p>Axiontel, {site.address.line1}, {site.address.city}, {site.address.region}, {site.address.countryName}. Email: {site.email}. Phone: {site.phones.map((p) => p.display).join(" / ")}.</p>
      </section>
    </>
  );
}
