"use client";

import { cn } from "@/lib/utils";

export function FilterPills<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; count: number }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2.5">
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={cn(
              "min-h-11 rounded-full border px-[18px] py-2.5 text-[15px] transition",
              active
                ? "border-inv bg-inv font-semibold text-inv-ink"
                : "border-line-2 bg-surface font-medium text-body hover:border-ink",
            )}
          >
            {option.value} · {option.count}
          </button>
        );
      })}
    </div>
  );
}
