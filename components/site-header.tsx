"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-inv focus:px-4 focus:py-2 focus:text-inv-ink"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-ink">
          <Image src={site.headshot} alt="" width={40} height={40} className="size-10 rounded-full object-cover" priority />
          <span className="font-display text-[17px] font-semibold">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "border-b-2 px-3 py-2.5 text-[15px] transition",
                isActive(item.href)
                  ? "border-accent font-semibold text-ink"
                  : "border-transparent font-medium text-muted hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <ThemeToggle />
            <a
              href={site.resume}
              download
              className="rounded-lg bg-inv px-[18px] py-3 text-[15px] font-semibold text-inv-ink transition hover:opacity-90"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-[10px] border border-line-2 bg-surface text-ink"
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-surface lg:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col px-5 py-3 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-base",
                  isActive(item.href) ? "bg-accent-soft font-semibold text-accent-soft-ink" : "text-body",
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.resume}
              download
              className="mt-2 rounded-lg bg-inv px-4 py-3 text-center font-semibold text-inv-ink"
            >
              Download CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
