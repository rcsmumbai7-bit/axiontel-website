import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden pt-24">
      <div className="bg-grid mask-fade-b absolute inset-0" />
      <div className="container-x relative max-w-2xl text-center">
        <p className="font-display text-[8rem] font-extrabold leading-none text-gradient">404</p>
        <h1 className="h-display mt-2 text-3xl sm:text-4xl">Signal lost</h1>
        <p className="mt-4 text-lg text-ink-soft">We couldn&apos;t find that page. Let&apos;s get you back on channel.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Go home</Link>
          <Link href="/walkie-talkies/" className="btn-ghost">View products</Link>
          <Link href="/contact/" className="btn-ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
