import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <As className="h-display mt-4 text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">{title}</As>
      {text && <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{text}</p>}
    </Reveal>
  );
}
