import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  text,
  crumbs,
  children,
  aside,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  crumbs: Crumb[];
  children?: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      <div className="bg-grid mask-fade-b absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(45% 55% at 90% 10%, rgba(205,231,253,0.85), rgba(205,231,253,0) 70%), radial-gradient(30% 40% at 0% 70%, rgba(90,180,248,0.12), rgba(90,180,248,0) 70%)" }}
      />
      <div className={`container-x relative ${aside ? "grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]" : ""}`}>
        <div>
          <Breadcrumbs items={crumbs} />
          <Reveal className="mt-8">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="h-display mt-4 max-w-4xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
            {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{text}</p>}
          </Reveal>
          {children && <Reveal delay={0.1} className="mt-8">{children}</Reveal>}
        </div>
        {aside && <Reveal delay={0.15}>{aside}</Reveal>}
      </div>
    </section>
  );
}
