import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | Axiontel",
  description: "Terms for using the Axiontel website and information about quotations and sales.",
  alternates: { canonical: "/terms-and-conditions/" },
};

export default function Terms() {
  return (
    <>
      <PageHero crumbs={[{ label: "Terms & conditions", href: "/terms-and-conditions/" }]} title="Terms & conditions" text="Last updated: 12 November 2026" />
      <section className="container-x prose-ax max-w-3xl pb-24">
        <h2>Website information</h2>
        <p>We work to keep product information on axiontel.co accurate. Specifications may change; the specification on your quotation and product documentation applies to your purchase.</p>
        <h2>Quotations and orders</h2>
        <p>Prices, availability, delivery, warranty and payment terms are confirmed in a written quotation or invoice from Axiontel. Submitting an enquiry does not create an order.</p>
        <h2>Regulatory compliance</h2>
        <p>Customers are responsible for using radio equipment in line with applicable Department of Telecommunications / WPC requirements for their use.</p>
        <h2>Intellectual property</h2>
        <p>The Axiontel name, logo, images and content on this website belong to Axiontel and may not be reused without permission. Client logos belong to their respective owners.</p>
        <h2>Contact</h2>
        <p>Questions about these terms: {site.email}.</p>
      </section>
    </>
  );
}
