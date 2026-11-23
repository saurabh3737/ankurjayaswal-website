import Image from "next/image";
import { Layers, LifeBuoy, ShieldCheck, Quote } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { Avatar, ButtonLink, Chip, Container, SectionHeader } from "@/components/ui";
import { careerPath, caseStudies, clients, domains, expertise, stats, testimonials } from "@/lib/data";
import { site } from "@/lib/site";

const icons = { layers: Layers, lifebuoy: LifeBuoy, shield: ShieldCheck };

const highlights = [
  {
    label: "Commerzbank · Frankfurt",
    title: "One trade-finance platform for 19 markets",
    body: "Led functional architecture for “Phoenix” across 6 modules, and reconciled the migration strategy for 90M+ legacy records.",
    metric: "90M+ records",
  },
  {
    label: "Merrill Lynch · New York",
    title: "An integration backbone for 65 applications",
    body: "Designed and implemented an EAI framework across 250 business processes, plus the global SWIFT flow to Global Custody Services.",
    metric: "16M tx / day",
  },
  {
    label: "AIG Europe · Dublin",
    title: "Managed services for 200+ insurance apps",
    body: "Own the client relationship and production governance across EMEA, as primary point of contact to the CIO office.",
    metric: "150+ team",
  },
];

export default function HomePage() {
  const featured = testimonials.find((t) => t.featured)!;
  const supporting = testimonials.filter((t) => t.short && !t.featured).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-h">
        <Container className="flex flex-wrap items-center gap-16 py-16 sm:py-24">
          <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
            {site.openToWork ? (
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-accent-soft px-3.5 py-2 text-sm font-semibold text-accent-soft-ink">
                <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
                Open to senior program &amp; delivery leadership roles · Dublin / EMEA
              </span>
            ) : null}
            <p className="font-mono text-[13px] tracking-[0.12em] text-muted uppercase">
              Program &amp; Delivery Leader · IT Functional Consultant · Business Analyst
            </p>
            <h1 id="hero-h" className="font-display text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-6xl">
              25 years delivering the programs banks and insurers can’t afford to get wrong.
            </h1>
            <p className="max-w-[620px] text-lg leading-relaxed text-muted sm:text-[19px]">
              I lead large-scale integration, migration, regulatory and managed-services programs across capital markets,
              banking and insurance — for Merrill Lynch, Bank of America, Commerzbank, BMW Financial Services, Silicon Valley
              Bank and AIG Europe.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href="/impact">See the case studies</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Get in touch
              </ButtonLink>
            </div>
          </div>
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-4">
            <Image
              src={site.headshot}
              alt="Portrait of Ankur Jayaswal"
              width={299}
              height={299}
              priority
              sizes="(min-width: 1024px) 380px, 90vw"
              className="aspect-square w-full rounded-[20px] border border-line object-cover"
            />
            <div className="flex flex-col gap-1.5 rounded-2xl border border-line bg-surface px-5 py-4">
              <span className="font-mono text-xs tracking-[0.1em] text-muted">CURRENTLY</span>
              <span className="font-semibold">Regional Program Lead, EMEA &amp; UK</span>
              <span className="text-[15px] leading-normal text-muted">
                AIG Europe S.A. · 150+ people · 200+ applications · Dublin
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section aria-label="Career impact in numbers" className="border-y border-band-line bg-band text-white">
        <Container className="grid grid-cols-2 gap-x-8 gap-y-10 py-16 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <span className="font-display text-4xl font-bold text-band-accent sm:text-[44px]">{s.value}</span>
              <span className="text-[15px] leading-normal text-band-muted">{s.label}</span>
            </div>
          ))}
        </Container>
      </section>

      {/* Clients */}
      <section aria-labelledby="clients-h">
        <Container className="flex flex-col items-center gap-6 py-14">
          <h2 id="clients-h" className="font-mono text-[13px] tracking-[0.12em] text-muted">
            TRUSTED BY CIOs AND CXOs AT
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-11 gap-y-4 font-display text-lg font-semibold text-body sm:text-[21px]">
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Expertise */}
      <section aria-labelledby="what-h" className="border-y border-line bg-surface">
        <Container className="flex flex-col gap-12 py-24">
          <SectionHeader id="what-h" eyebrow="What I bring" title="From requirements to run-state — the whole delivery lifecycle." />
          <div className="grid gap-6 md:grid-cols-3">
            {expertise.map((e, i) => {
              const Icon = icons[e.icon];
              return (
                <Reveal key={e.title} delay={i * 0.08}>
                  <article className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-surface-2 p-8">
                    <Icon aria-hidden="true" className="size-8 text-accent" strokeWidth={1.8} />
                    <h3 className="font-display text-xl font-semibold">{e.title}</h3>
                    <ul className="flex flex-col gap-1.5 text-[15px] leading-relaxed text-muted">
                      {e.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-2.5">
            {domains.map((d) => (
              <Chip key={d}>{d}</Chip>
            ))}
          </div>
        </Container>
      </section>

      {/* Selected programs */}
      <section aria-labelledby="cases-h">
        <Container className="flex flex-col gap-10 py-24">
          <SectionHeader
            id="cases-h"
            eyebrow="Selected programs"
            title="Proof, not promises."
            action={{ href: "/impact", label: "All case studies" }}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <article className="flex h-full flex-col gap-3.5 rounded-2xl border border-line bg-surface p-8">
                  <span className="font-mono text-xs tracking-[0.1em] text-muted uppercase">{h.label}</span>
                  <h3 className="font-display text-[22px] leading-snug font-semibold">{h.title}</h3>
                  <p className="leading-relaxed text-muted">{h.body}</p>
                  <span className="mt-auto pt-3 font-display text-[28px] font-bold text-accent">{h.metric}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="voices-h" className="border-y border-line bg-surface">
        <Container className="flex flex-col gap-10 py-24">
          <SectionHeader
            id="voices-h"
            eyebrow="In their words"
            title="What clients and colleagues say."
            action={{ href: "/testimonials", label: `All ${testimonials.length} recommendations` }}
          />
          <Reveal>
            <figure className="flex flex-col gap-7 rounded-[20px] border border-line bg-surface-2 p-8 sm:p-12">
              <Quote aria-hidden="true" className="size-10 text-accent" />
              <blockquote className="max-w-[980px] font-display text-xl leading-[1.45] font-medium sm:text-[26px]">
                {featured.short}
              </blockquote>
              <figcaption className="flex items-center gap-3.5">
                <Avatar name={featured.name} size="lg" tone="accent" />
                <span className="flex flex-col gap-0.5">
                  <span className="font-semibold">{featured.name}</span>
                  <span className="text-sm text-muted">Client · Commerzbank global replacement program</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {supporting.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="flex h-full flex-col gap-5 rounded-2xl border border-line p-8">
                  <blockquote className="text-lg leading-relaxed text-body">“{t.short}”</blockquote>
                  <figcaption className="mt-auto flex items-center gap-3">
                    <Avatar name={t.name} />
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[15px] font-semibold">{t.name}</span>
                      <span className="text-sm text-muted">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Career path */}
      <section aria-labelledby="path-h">
        <Container className="flex flex-col gap-10 py-24">
          <SectionHeader
            id="path-h"
            eyebrow="Career path"
            title="Mumbai → New York → Frankfurt → Calgary → Dublin"
            action={{ href: "/experience", label: "Full experience" }}
          />
          <ol className="grid grid-cols-2 gap-6 border-t-2 border-ink sm:grid-cols-4 lg:grid-cols-8">
            {careerPath.map((step) => (
              <li key={step.year + step.name} className="flex flex-col gap-1.5 pt-4">
                <span className="font-mono text-[13px] text-accent">{step.year}</span>
                <span className="font-semibold">{step.name}</span>
                <span className="text-sm text-muted">{step.place}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Education strip */}
      <section aria-labelledby="edu-h">
        <Container className="flex flex-wrap items-stretch gap-6 pb-20">
          <h2 id="edu-h" className="flex-[1_1_260px] font-display text-[32px] leading-tight font-bold">
            Engineer by training.
            <br />
            Strategist by MBA.
          </h2>
          {[
            { name: "HEC Paris", detail: "MBA, Finance & Strategy · GMAT 710" },
            { name: "Columbia University", detail: "Business School exchange · Post-Bacc Certificate" },
            { name: "IIBA · BABOK", detail: "Certificate in Business Analysis · PMP in progress" },
          ].map((e) => (
            <div key={e.name} className="flex flex-[1_1_260px] flex-col gap-1.5 rounded-2xl border border-line bg-surface p-6">
              <span className="text-[17px] font-semibold">{e.name}</span>
              <span className="text-[15px] text-muted">{e.detail}</span>
            </div>
          ))}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
