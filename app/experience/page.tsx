import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { ExperienceList } from "@/components/experience-list";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Eleven engagements across banking, capital markets, insurance, automotive finance and aviation — from NSE and Merrill Lynch to Commerzbank, BMW Financial Services, Silicon Valley Bank and AIG Europe.",
  alternates: { canonical: "/experience/" },
};

export default function ExperiencePage() {
  return (
    <>
      <section aria-labelledby="exp-h">
        <Container className="flex max-w-[1040px] flex-col gap-5 pt-20 pb-10">
          <Eyebrow>Experience · 2001 – present</Eyebrow>
          <h1 id="exp-h" className="font-display text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-[52px]">
            Eleven engagements. Five sectors. One consistent result: delivery.
          </h1>
          <p className="max-w-[720px] text-lg leading-relaxed text-muted">
            Delivered as a TCS consultant and leader, onsite with clients in Mumbai, London, New York, Frankfurt, Munich,
            Calgary and Dublin.
          </p>
        </Container>
      </section>
      <section aria-label="Roles">
        <Container className="max-w-[1040px] pb-24">
          <ExperienceList />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
