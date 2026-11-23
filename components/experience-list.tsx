"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { roles, sectors, type Sector } from "@/lib/data";
import { FilterPills } from "./filter-pills";

type Filter = "All" | Sector;

export function ExperienceList() {
  const [filter, setFilter] = useState<Filter>("All");
  const options: { value: Filter; count: number }[] = [
    { value: "All", count: roles.length },
    ...sectors.map((s) => ({ value: s, count: roles.filter((r) => r.sector === s).length })),
  ];
  const shown = filter === "All" ? roles : roles.filter((r) => r.sector === filter);

  return (
    <div className="flex flex-col gap-8">
      <FilterPills label="Filter by sector" options={options} value={filter} onChange={setFilter} />
      <ol className="flex flex-col gap-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((r) => (
            <motion.li
              key={`${r.client}-${r.dates}`}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap gap-x-10 gap-y-3 rounded-2xl border border-line bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-[0_1_200px] flex-col gap-2">
                <span className="font-mono text-[13px] text-accent">{r.dates}</span>
                <span className="text-sm text-muted">{r.location}</span>
                <span className="self-start rounded-md bg-chip px-2.5 py-1 text-[13px] font-medium text-body">{r.sector}</span>
              </div>
              <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-2.5">
                <h2 className="font-display text-xl leading-snug font-semibold">{r.title}</h2>
                <p className="font-semibold text-body">
                  {r.client} <span className="font-normal text-muted">· {r.program}</span>
                </p>
                <ul className="mt-1 flex list-disc flex-col gap-1.5 pl-5 text-[15px] leading-relaxed text-muted marker:text-line-2">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>
    </div>
  );
}
