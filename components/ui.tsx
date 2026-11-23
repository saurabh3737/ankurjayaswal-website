import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn, initials } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p className={cn("font-mono text-[13px] tracking-[0.12em] uppercase text-accent", className)}>{children}</p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  id,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  id?: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="flex max-w-3xl flex-col gap-3.5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={id} className="font-display text-3xl font-bold tracking-tight text-balance sm:text-[40px] sm:leading-[1.15]">
          {title}
        </h2>
      </div>
      {action ? (
        <Link href={action.href} className="py-3 font-semibold text-accent hover:underline underline-offset-4">
          {action.label} →
        </Link>
      ) : null}
    </div>
  );
}

const variants = {
  primary: "bg-pri text-pri-ink hover:opacity-90",
  secondary: "bg-surface text-ink border border-line-2 hover:border-ink",
  inverse: "bg-inv text-inv-ink hover:opacity-90",
  band: "bg-band-accent text-[#0b1f33] font-bold hover:opacity-90",
  bandGhost: "border border-[#5b6e82] text-white hover:border-white",
} as const;

type ButtonLinkProps = {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function ButtonLink({ href, variant = "primary", className, children, ...rest }: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition",
    variants[variant],
    className,
  );
  const isInternal = href.startsWith("/") && !href.endsWith(".pdf");
  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("rounded-full border border-line-2 px-3.5 py-2 text-sm text-body", className)}>{children}</span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="rounded-md bg-chip px-3 py-1.5 text-[13px] text-body">{children}</span>;
}

export function Avatar({ name, size = "md", tone = "chip" }: { name: string; size?: "md" | "lg"; tone?: "chip" | "accent" }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex flex-none items-center justify-center rounded-full font-bold",
        size === "lg" ? "size-12 text-base" : "size-10 text-sm",
        tone === "accent" ? "bg-accent-soft text-accent-soft-ink" : "bg-chip text-body",
      )}
    >
      {initials(name)}
    </span>
  );
}
