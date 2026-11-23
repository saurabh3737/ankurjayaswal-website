import { NextResponse } from "next/server";

// Contact form endpoint. Runs as a Vercel serverless function.
// Sends email through Resend's REST API (no extra npm package needed).
// Required env vars on Vercel: RESEND_API_KEY, CONTACT_TO_EMAIL. Optional: CONTACT_FROM_EMAIL.

type Payload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  topic?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill in the hidden field; pretend success so they move on.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const topic = clean(body.topic, 80) || "General enquiry";
  const message = clean(body.message, 5000);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in your name, email and message." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.");
    return NextResponse.json(
      { error: "The contact form isn’t connected yet." },
      { status: 503 },
    );
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Topic: ${topic}`,
    "",
    message,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Website enquiry: ${topic} — ${name}${company ? ` (${company})` : ""}`,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Resend error", res.status, await res.text().catch(() => ""));
    return NextResponse.json({ error: "Sorry, the message couldn’t be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
