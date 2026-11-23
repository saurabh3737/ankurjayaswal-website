import { site } from "@/lib/site";
import { Container } from "./ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-8 text-sm text-muted">
        <span>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </span>
        <div className="flex flex-wrap gap-2">
          <a href={`mailto:${site.email}`} className="px-3 py-2.5 text-accent hover:underline underline-offset-4">
            {site.email}
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="px-3 py-2.5 text-accent hover:underline underline-offset-4">
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
