import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { CtaBand } from "@/components/blocks";
import { articles, getArticle } from "@/lib/articles";
import { site } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return {
    title: `${a.title} | Axiontel`,
    description: a.description,
    alternates: { canonical: `/resources/${a.slug}/` },
    openGraph: { type: "article", publishedTime: a.date, modifiedTime: a.updated },
  };
}

const fmt = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: PageProps<"/resources/[slug]">) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 3);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.description,
          datePublished: a.date,
          dateModified: a.updated,
          author: { "@type": "Organization", name: "Axiontel", url: site.url },
          publisher: { "@id": `${site.url}/#organization` },
          image: `${site.url}/og-image.jpg`,
          mainEntityOfPage: `${site.url}/resources/${a.slug}/`,
        }}
      />
      <PageHero
        crumbs={[{ label: "Resources", href: "/resources/" }, { label: a.title, href: `/resources/${a.slug}/` }]}
        eyebrow={a.category}
        title={a.title}
      >
        <p className="text-sm text-muted">
          By the Axiontel team · Published {fmt(a.date)} · Updated {fmt(a.updated)} · {a.readMins} min read
        </p>
      </PageHero>
      <article className="container-x grid gap-12 pb-20 lg:grid-cols-[1fr_280px]">
        <div className="max-w-3xl">
          <Reveal>
            <div className="rounded-3xl border border-brand/20 bg-mist p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">Short answer</p>
              <p className="mt-3 text-lg leading-relaxed text-ink">{a.answer}</p>
            </div>
          </Reveal>
          <div className="prose-ax mt-6">
            {a.sections.map((s) => (
              <Reveal key={s.h}>
                <h2>{s.h}</h2>
                {s.p?.map((p, i) => <p key={i}>{p}</p>)}
                {s.list && <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>}
              </Reveal>
            ))}
          </div>
        </div>
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">Related</p>
            <ul className="mt-4 space-y-3">
              {a.related.map((r) => (
                <li key={r.href}><Link href={r.href} className="flex items-center justify-between gap-3 text-sm font-semibold text-ink hover:text-brand">{r.label}<ArrowRight className="h-4 w-4 shrink-0" /></Link></li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">More guides</p>
            <ul className="mt-4 space-y-3">
              {more.map((m) => <li key={m.slug}><Link href={`/resources/${m.slug}/`} className="text-sm text-ink-soft hover:text-brand">{m.title}</Link></li>)}
            </ul>
          </div>
        </aside>
      </article>
      <CtaBand />
    </>
  );
}
