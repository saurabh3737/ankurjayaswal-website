# ankurjayaswal.com

Personal website for **Ankur Jayaswal**, Program & Delivery Leader (Dublin, Ireland).
Same stack and config as saurabhjaiswal.com (same `next.config.ts` security headers, trailing slashes, AVIF/WebP images, and ESLint setup): **Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · Motion · Lucide**, hosted on **Vercel** from **GitHub**.

## Pages

| Route           | What's on it                                                                 |
| --------------- | ---------------------------------------------------------------------------- |
| `/`             | Hero + headshot, impact numbers, clients, expertise, programs, testimonials, career path |
| `/experience`   | All 11 roles with sector filter                                               |
| `/impact`       | 4 case studies (context → role → delivered) with client quotes               |
| `/testimonials` | All 9 LinkedIn recommendations, filter by clients / bank leaders / team       |
| `/about`        | Story, how he works, education, certifications, languages                    |
| `/contact`      | Contact details + form (sends email via `/api/contact`)                      |

Light and dark mode: the sun/moon button in the header. It remembers the visitor's choice and defaults to their system setting.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Editing content

Almost everything lives in two files — no need to touch the pages:

- **`lib/data.ts`** — stats, clients, roles, case studies, testimonials, education, certifications.
- **`lib/site.ts`** — name, email, LinkedIn, domain, CV path, and `openToWork` (set to `false` to hide the "Open to roles" badge).

Images and files are in `public/`:
- `ankur-headshot.jpg` — swap for a larger version (600×600 or more) when available; keep the same name.
- `Ankur_Jayaswal_Resume.pdf` — the "Download CV" file. Replace it whenever the CV changes.

## Contact form (email delivery)

The form posts to `app/api/contact/route.ts`, which runs as a Vercel serverless function and sends the message through [Resend](https://resend.com) (free tier is plenty).

1. Create a Resend account → **API Keys** → create a key.
2. In Vercel → Project → **Settings → Environment Variables**, add:
   - `RESEND_API_KEY` = the key
   - `CONTACT_TO_EMAIL` = `ankur.dublin@gmail.com`
   - `CONTACT_FROM_EMAIL` = `Website <onboarding@resend.dev>` (later, after verifying the domain in Resend: `Website <hello@ankurjayaswal.com>`)
   - `NEXT_PUBLIC_SITE_URL` = `https://ankurjayaswal.com` (or the real domain)
3. Redeploy.

Until the keys are set, the form tells visitors to email directly instead — nothing breaks.

> Prefer Python? The form only calls `POST /api/contact` with JSON `{name, email, company, topic, message}`. A FastAPI endpoint with the same contract can replace this route later without changing the front end.

## Deploy (GitHub + Vercel)

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-account>/ankurjayaswal-website.git
git push -u origin main
```

Then in Vercel: **Add New → Project → Import** the repo → Framework preset **Next.js** (auto-detected) → **Deploy**.
Add the environment variables above, then **Settings → Domains** to connect the custom domain.

## Project structure

```
app/
  layout.tsx            fonts, metadata/SEO, theme script, header + footer
  globals.css           Tailwind v4 + light/dark colour tokens
  page.tsx              Home
  experience/ impact/ testimonials/ about/ contact/   pages
  api/contact/route.ts  contact form endpoint
  sitemap.ts robots.ts not-found.tsx
components/             header, theme toggle, footer, filters, form, shared UI
lib/                    data.ts (content), site.ts (settings), utils.ts
public/                 headshot + CV PDF
```

Colours are CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark) exposed to Tailwind as `bg-surface`, `text-muted`, `text-accent`, etc. Change a colour once there and both themes update.
