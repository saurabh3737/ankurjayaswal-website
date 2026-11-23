"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex size-11 items-center justify-center rounded-[10px] border border-line-2 bg-surface text-ink transition hover:border-ink"
    >
      {/* Both icons render; CSS picks one, so server and client markup always match. */}
      <Moon aria-hidden="true" className="size-5 dark:hidden" strokeWidth={1.8} />
      <Sun aria-hidden="true" className="hidden size-5 dark:block" strokeWidth={1.8} />
    </button>
  );
}
