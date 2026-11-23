import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { Chip, Container, Eyebrow } from "@/components/ui";
import { certifications, education, inProgress, languages, principles } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "From the derivatives engine behind India’s first online F&O platform to leading a 150+ person managed-services organisation in Dublin. Education, certifications and how Ankur works.",
  alternates: { canonical: "/about/" },
};

const strengths = [
  "Program & Delivery Leadership",
  "IT Functional Consulting",
  "Business Analysis",
  "Solutioning & Pre-sales",
  "Regulatory Data Stewardship",
];

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-h">
        <Container className="flex flex-wrap items-start gap-14 py-20">
          <Image
            src={site.headshot}
            alt="Portrait of Ankur Jayaswal"
            width={299}
            height={299}
            sizes="(min-width: 768px) 380px, 90vw"
            className="aspect-square w-full max-w-[400px] flex-[1_1_300px] rounded-[20px] border border-line object-cover"
          />
          <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-5">
            <Eyebrow>About</Eyebrow>
            <h1 id="about-h" className="font-display text-4xl leading-[1.12] font-bold tracking-tight text-balance sm:text-5xl">
              The person CIOs call when a program has to land.
            </h1>
            <p className="text-lg leading-[1.7] text-body">
              I started as an electrical engineer working on the derivatives trading engine behind India’s first online F&amp;O
              platform at the National Stock Exchange. Today I lead a 150+ person managed-services organisation for AIG
              Europe from Dublin.
            </p>
            <p className="text-lg leading-[1.7] text-body">
              In between: merger integration on Wall Street, a 19-market trade-finance consolidation in Frankfurt, leasing
              modernisation for BMW across 15+ European countries, and regulatory data stewardship for the US Fed and Bank of
              England. An MBA from HEC Paris added the finance and strategy lens to the delivery one.
            </p>
            <p className="text-lg leading-[1.7] text-body">
              As Regional Program Lead for EMEA &amp; UK, I am TCS’s primary point of contact to AIG Europe’s CIO and executive
              offices — owning service stability, escalations and the business-analysis function.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {strengths.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="how-h" className="border-y border-band-line bg-band text-white">
        <Container className="flex flex-col gap-10 py-24">
          <h2 id="how-h" className="font-display text-4xl font-bold">
            How I work
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex flex-col gap-3 border-t-2 border-band-accent pt-5">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="leading-relaxed text-band-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="edu-h">
        <Container className="flex flex-col gap-7 pt-24 pb-12">
          <h2 id="edu-h" className="font-display text-4xl font-bold">
            Education
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {education.map((e) => (
              <div key={e.school} className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-7">
                <span className="font-mono text-xs text-accent">{e.dates}</span>
                <span className="font-display text-lg font-semibold">{e.school}</span>
                <span className="text-[15px] leading-normal text-muted">{e.detail}</span>
                {e.extra ? <span className="text-sm leading-normal text-body">{e.extra}</span> : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="cert-h">
        <Container className="flex flex-wrap gap-12 pt-8 pb-24">
          <div className="flex flex-[1_1_480px] flex-col gap-5">
            <h2 id="cert-h" className="font-display text-[28px] font-bold">
              Certifications &amp; training
            </h2>
            <ul className="flex flex-col border-t border-line">
              {certifications.map((c) => (
                <li key={c.name} className="flex flex-wrap justify-between gap-2 border-b border-line py-4">
                  <span className="font-semibold">{c.name}</span>
                  <span className="text-muted">{c.meta}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-[1_1_320px] flex-col gap-5">
            <h2 className="font-display text-[28px] font-bold">In progress</h2>
            <div className="flex flex-col gap-3">
              {inProgress.map((c) => (
                <div key={c.name} className="flex flex-col gap-1 rounded-xl bg-accent-soft px-5 py-4">
                  <span className="font-semibold">{c.name}</span>
                  <span className="text-sm text-accent-soft-ink">{c.meta}</span>
                </div>
              ))}
            </div>
            <h2 className="mt-3 font-display text-[28px] font-bold">Languages</h2>
            <ul className="flex flex-col">
              {languages.map((l) => (
                <li key={l.name} className="flex justify-between gap-2 border-b border-line py-3.5">
                  <span className="font-semibold">{l.name}</span>
                  <span className="text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
