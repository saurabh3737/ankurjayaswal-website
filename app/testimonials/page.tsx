import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { TestimonialGrid } from "@/components/testimonial-grid";
import { testimonials } from "@/lib/data";
import { initials } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Recommendations for Ankur Jayaswal from clients at Commerzbank, senior leaders at Bank of America Merrill Lynch, and the teams he has led.",
  alternates: { canonical: "/testimonials/" },
};

export default function TestimonialsPage() {
  const featured = testimonials.find((t) => t.featured)!;
  const count = (group: string) => testimonials.filter((t) => t.group === group).length;

  return (
    <>
      <section aria-labelledby="tst-h">
        <Container className="flex flex-wrap items-end justify-between gap-10 pt-20 pb-10">
          <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-5">
            <Eyebrow>Testimonials</Eyebrow>
            <h1 id="tst-h" className="font-display text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-[52px]">
              Nine recommendations. Two decades. The same story.
            </h1>
            <p className="max-w-[680px] text-lg leading-relaxed text-muted">
              From clients at Commerzbank, senior leaders at Bank of America Merrill Lynch, and the teams he has worked with
              at TCS — every one published on his LinkedIn profile.
            </p>
          </div>
          <dl className="grid flex-[1_1_300px] grid-cols-3 gap-3">
            {[
              ["Clients", "clients"],
              ["Bank leaders", "bank leaders"],
              ["Team & peers", "team & peers"],
            ].map(([group, label]) => (
              <div key={group} className="flex flex-col-reverse gap-1 rounded-2xl border border-line bg-surface p-4">
                <dt className="text-[13px] text-muted">{label}</dt>
                <dd className="font-display text-3xl font-bold text-accent">{count(group)}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section aria-label="Featured recommendation">
        <Container className="pt-4 pb-8">
          <figure className="flex flex-col gap-7 rounded-3xl border border-band-line bg-band p-8 text-white sm:p-14">
            <span className="self-start rounded-full bg-band-chip px-3 py-1.5 text-[13px] font-semibold text-band-accent">
              FROM A CLIENT
            </span>
            <blockquote className="font-display text-xl leading-[1.45] font-medium sm:text-[28px]">“{featured.quote}”</blockquote>
            <figcaption className="flex items-center gap-3.5">
              <span aria-hidden="true" className="flex size-13 items-center justify-center rounded-full bg-band-accent text-[17px] font-bold text-[#0b1f33]">
                {initials(featured.name)}
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-[17px] font-semibold">{featured.name}</span>
                <span className="text-[15px] text-band-muted">
                  {featured.role} — {featured.context}
                </span>
              </span>
            </figcaption>
          </figure>
        </Container>
      </section>

      <section aria-label="All recommendations">
        <Container className="pt-6 pb-24">
          <TestimonialGrid />
        </Container>
      </section>

      <section aria-labelledby="ref-h" className="pb-24">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-accent-soft p-8 sm:p-14">
            <h2 id="ref-h" className="flex-[1_1_420px] font-display text-[32px] leading-tight font-bold">
              References available on request.
            </h2>
            <ButtonLink href="/contact" variant="inverse">
              Get in touch
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
