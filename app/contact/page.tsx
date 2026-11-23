import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { Container, Eyebrow } from "@/components/ui";
import { testimonials } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ankur Jayaswal about program, delivery and engagement leadership roles in Ireland, the UK and EMEA.",
  alternates: { canonical: "/contact/" },
};

const card = "flex items-center gap-3.5 rounded-xl border border-line bg-surface px-5 py-4 text-ink";

export default function ContactPage() {
  return (
    <section aria-labelledby="contact-h">
      <Container className="flex flex-wrap items-start gap-14 pt-20 pb-24">
        <div className="flex flex-[1_1_360px] flex-col gap-6">
          <Eyebrow>Contact</Eyebrow>
          <h1 id="contact-h" className="font-display text-4xl leading-[1.12] font-bold tracking-tight text-balance sm:text-5xl">
            Let’s talk about your next program.
          </h1>
          <p className="text-lg leading-relaxed text-muted">
            Recruiters, hiring managers and executives — I reply to every message within two working days.
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <a href={`mailto:${site.email}`} className={`${card} transition hover:border-ink`}>
              <Mail aria-hidden="true" className="size-[22px] text-accent" strokeWidth={1.8} />
              <span className="flex flex-col gap-0.5">
                <span className="text-[13px] text-muted">Email</span>
                <span className="font-semibold">{site.email}</span>
              </span>
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={`${card} transition hover:border-ink`}>
              <LinkedInIcon className="size-[22px] text-accent" />
              <span className="flex flex-col gap-0.5">
                <span className="text-[13px] text-muted">LinkedIn · {testimonials.length} recommendations</span>
                <span className="font-semibold">linkedin.com/in/ankurjayaswal</span>
              </span>
            </a>
            <div className={card}>
              <MapPin aria-hidden="true" className="size-[22px] text-accent" strokeWidth={1.8} />
              <span className="flex flex-col gap-0.5">
                <span className="text-[13px] text-muted">Based in</span>
                <span className="font-semibold">Dublin, Ireland · open to EMEA travel</span>
              </span>
            </div>
          </div>
        </div>
        <div className="min-w-0 flex-[999_1_520px] rounded-[20px] border border-line bg-surface p-7 sm:p-10">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
