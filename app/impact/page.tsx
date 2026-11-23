import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, Tag } from "@/components/ui";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impact & case studies",
  description:
    "Case studies from Commerzbank, Merrill Lynch, Bank of America Merrill Lynch and Silicon Valley Bank: the context, Ankur’s role and what was delivered.",
  alternates: { canonical: "/impact/" },
};

export default function ImpactPage() {
  return (
    <>
      <section aria-labelledby="imp-h">
        <Container className="flex flex-col gap-5 pt-20 pb-12">
          <Eyebrow>Case studies</Eyebrow>
          <h1 id="imp-h" className="max-w-[900px] font-display text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-[52px]">
            Programs where the stakes were regulatory, the scale was global, and failure wasn’t an option.
          </h1>
          <p className="max-w-[720px] text-lg leading-relaxed text-muted">
            Each story follows the shape a hiring panel asks about: the context, what I owned, and what it delivered.
          </p>
        </Container>
      </section>

      <section aria-label="Case studies">
        <Container className="flex flex-col gap-8 pb-24">
          {caseStudies.map((c, index) => (
            <Reveal key={c.id}>
              <article id={c.id} aria-labelledby={`${c.id}-h`} className="flex scroll-mt-24 flex-wrap overflow-hidden rounded-[20px] border border-line bg-surface">
                <div className="flex flex-[1_1_300px] flex-col gap-7 border-b border-band-line bg-band p-8 text-white sm:p-10 md:border-r md:border-b-0">
                  <span className="font-mono text-xs tracking-[0.1em] text-band-muted uppercase">
                    {String(index + 1).padStart(2, "0")} · {c.label}
                  </span>
                  {c.metrics.map((m, i) => (
                    <div key={m.label} className="flex flex-col gap-1">
                      <span className={i === 0 ? "font-display text-5xl font-bold text-band-accent" : "font-display text-[32px] font-bold"}>
                        {m.value}
                      </span>
                      <span className="text-[15px] text-band-muted">{m.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-5 p-8 sm:p-11">
                  <h2 id={`${c.id}-h`} className="font-display text-2xl leading-tight font-bold sm:text-[28px]">
                    {c.title}
                  </h2>
                  <dl className="grid gap-6 md:grid-cols-3">
                    {[
                      ["Context", c.context],
                      ["My role", c.role],
                      ["Delivered", c.delivered],
                    ].map(([term, text]) => (
                      <div key={term} className="flex flex-col gap-2">
                        <dt className="font-mono text-xs tracking-[0.1em] text-accent uppercase">{term}</dt>
                        <dd className="text-[15px] leading-relaxed text-muted">{text}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {c.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                  {c.quote ? (
                    <figure className="mt-2 flex flex-col gap-2.5 rounded-xl bg-accent-soft px-6 py-5">
                      <blockquote className="leading-relaxed text-ink">“{c.quote.text}”</blockquote>
                      <figcaption className="text-sm text-accent-soft-ink">— {c.quote.by}</figcaption>
                    </figure>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
