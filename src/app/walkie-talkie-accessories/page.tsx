import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { CtaBand } from "@/components/blocks";
import { accessories } from "@/lib/product";

export const metadata: Metadata = {
  title: "Walkie-Talkie Accessories | Axiontel",
  description: "Chargers, 4200 mAh batteries, antennas, belt clips and earpieces for the Axiontel R-26 walkie-talkie. Request accessories with your radios.",
  alternates: { canonical: "/walkie-talkie-accessories/" },
};

export default function Accessories() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Accessories", href: "/walkie-talkie-accessories/" }]}
        eyebrow="Accessories"
        title="Walkie-talkie accessories"
        text="Genuine accessories for the Axiontel R-26. The radio ships with a desktop charger, battery, USB-C cable, antenna and hand strap / belt clip. Earpieces are available separately."
      />
      <section className="container-x pb-24">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {accessories.map((a) => (
            <StaggerItem key={a.slug}>
              <article className="card group h-full overflow-hidden">
                <div className="relative grid aspect-[4/3] place-items-center bg-gradient-to-b from-white to-mist">
                  <Image src={a.image} alt={`${a.name} for Axiontel R-26`} width={220} height={220} className="h-40 w-auto object-contain mix-blend-multiply transition duration-700 group-hover:scale-110" />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${a.inBox ? "bg-brand text-white" : "bg-ink text-white"}`}>
                    {a.inBox ? "In the box" : "Optional"}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg font-semibold text-ink">{a.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.text}</p>
                  <p className="mt-3 text-xs text-muted">Compatible with: Axiontel R-26</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-10 text-center text-sm text-ink-soft">
          Need spares for an existing fleet? <Link href="/contact/?product=Accessories%20(earpiece%2C%20battery%2C%20charger)#enquiry" className="font-semibold text-brand">Request accessories</Link>.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
