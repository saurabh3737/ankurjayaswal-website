import { site } from "@/lib/site";
import { ButtonLink, Container } from "./ui";

export function CtaBand() {
  return (
    <section aria-labelledby="cta-h" className="pb-24">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-3xl border border-band-line bg-band px-7 py-14 text-white sm:px-14 sm:py-[72px]">
          <div className="flex flex-[1_1_440px] flex-col gap-3.5">
            <h2 id="cta-h" className="font-display text-3xl leading-tight font-bold text-balance sm:text-[38px]">
              Need a delivery leader who’s done this before?
            </h2>
            <p className="text-lg leading-relaxed text-band-muted">
              Program, delivery and engagement leadership roles in financial services and insurance — Ireland, UK and EMEA.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="band">
              Start a conversation
            </ButtonLink>
            <ButtonLink href={site.resume} variant="bandGhost" download>
              Download CV (PDF)
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
