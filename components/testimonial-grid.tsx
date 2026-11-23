"use client";

import { useState } from "react";
import { testimonials, type TestimonialGroup } from "@/lib/data";
import { site } from "@/lib/site";
import { Avatar } from "./ui";
import { FilterPills } from "./filter-pills";

type Filter = "All" | TestimonialGroup;
const groups: TestimonialGroup[] = ["Clients", "Bank leaders", "Team & peers"];

export function TestimonialGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  // The featured recommendation is shown above the grid, so the grid lists the rest.
  const rest = testimonials.filter((t) => !t.featured);
  const options: { value: Filter; count: number }[] = [
    { value: "All", count: testimonials.length },
    ...groups.map((g) => ({ value: g, count: testimonials.filter((t) => t.group === g).length })),
  ];
  const shown = filter === "All" ? rest : rest.filter((t) => t.group === filter);

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <FilterPills label="Filter by relationship" options={options} value={filter} onChange={setFilter} />
        <a
          href={site.linkedinRecommendations}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 text-[15px] font-semibold text-accent hover:underline underline-offset-4"
        >
          Verify on LinkedIn ↗
        </a>
      </div>
      <div className="columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
        {shown.map((t) => (
          <figure key={t.name} className="flex break-inside-avoid flex-col gap-4 rounded-2xl border border-line bg-surface p-7">
            <span className="self-start rounded-md bg-accent-soft px-2.5 py-1 text-xs font-semibold tracking-wide text-accent-soft-ink uppercase">
              {t.badge}
            </span>
            <blockquote className="leading-relaxed text-body">“{t.quote}”</blockquote>
            <figcaption className="flex items-center gap-3 border-t border-line pt-4">
              <Avatar name={t.name} />
              <span className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold">{t.name}</span>
                <span className="text-[13px] leading-snug text-muted">{t.role}</span>
                <span className="text-[13px] leading-snug text-muted">{t.context}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
