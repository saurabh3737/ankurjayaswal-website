"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "min-h-12 w-full rounded-lg border border-line-2 bg-surface px-3.5 py-3 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-10">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Check aria-hidden="true" className="size-7" strokeWidth={2} />
        </span>
        <h2 className="font-display text-[28px] font-bold">Thanks — your message is on its way.</h2>
        <p className="leading-relaxed text-muted">You’ll get a reply at the email you gave within two working days.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="min-h-11 rounded-lg border border-line-2 px-[18px] py-2.5 text-[15px] font-semibold hover:border-ink"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative flex flex-col gap-5">
      <h2 className="font-display text-2xl font-bold">Send a message</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Full name
          <input name="name" type="text" required autoComplete="name" maxLength={120} className={field} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Work email
          <input name="email" type="email" required autoComplete="email" maxLength={200} className={field} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Company
          <input name="company" type="text" autoComplete="organization" maxLength={160} className={field} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold">
          I’m reaching out about
          <select name="topic" className={field} defaultValue="A permanent role">
            <option>A permanent role</option>
            <option>A contract / interim role</option>
            <option>Consulting or advisory</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm font-semibold">
        Message
        <textarea name="message" rows={6} required maxLength={5000} className={`${field} resize-y`} />
      </label>
      {/* Honeypot: hidden from people, bots tend to fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {status === "error" ? (
        <p role="alert" className="rounded-lg bg-accent-soft px-4 py-3 text-sm text-accent-soft-ink">
          {error} You can also email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </p>
      ) : null}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="text-[13px] text-muted">Your details are only used to reply to you.</span>
        <button
          type="submit"
          disabled={status === "sending"}
          className="min-h-12 rounded-lg bg-pri px-6 py-3 text-base font-semibold text-pri-ink transition hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
