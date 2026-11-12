import Image from "next/image";

const clients: { src: string; alt: string; w: number; h: number; bg?: string }[] = [
  { src: "/images/clients/client-1.png", alt: "Bebitz", w: 300, h: 150 },
  { src: "/images/clients/client-2.png", alt: "Purple Pebble Pictures", w: 300, h: 150 },
  { src: "/images/clients/client-3.png", alt: "Client logo", w: 300, h: 150 },
  { src: "/images/clients/client-4.png", alt: "Transcon", w: 300, h: 150 },
  { src: "/images/clients/client-5.png", alt: "Kabra Estate & Investment Consultants", w: 300, h: 150 },
  { src: "/images/clients/client-6.png", alt: "Lemon", w: 300, h: 150, bg: "#0c0c0c" },
  { src: "/images/clients/client-7.png", alt: "Anchaviyo Resort", w: 300, h: 150, bg: "#525154" },
  { src: "/images/clients/client-8.png", alt: "TRZY", w: 200, h: 200, bg: "#000000" },
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...clients, ...clients];
  return (
    <div className="mask-fade-x flex overflow-hidden">
      <div
        className="animate-marquee flex w-max shrink-0 gap-5 py-2 pr-5 hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {items.map((c, i) => (
          <div
            key={i}
            className="group relative grid h-24 w-48 shrink-0 place-items-center overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg sm:h-28 sm:w-56"
            aria-hidden={i >= clients.length}
            style={c.bg ? { background: c.bg, borderColor: c.bg } : undefined}
          >
            <Image src={c.src} alt={i >= clients.length ? "" : c.alt} width={c.w} height={c.h} className="h-full w-full object-contain p-1 grayscale-[35%] transition duration-500 group-hover:grayscale-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientMarquee({ title = "Trusted by teams across India" }: { title?: string }) {
  return (
    <section aria-label="Our clients" className="relative py-14">
      <div className="container-x mb-8 flex items-center gap-4">
        <span className="h-px flex-1 bg-line" />
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">{title}</p>
        <span className="h-px flex-1 bg-line" />
      </div>
      <div className="space-y-4">
        <Row />
      </div>
    </section>
  );
}
