"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const FIRST_MONTH = new Date(2026, 8, 1);
const LAST_MONTH = new Date(2027, 4, 1);

const TRAINING_WINDOWS = [
  { start: "2026-09-01", end: "2026-11-30" },
  { start: "2027-02-01", end: "2027-05-07" },
] as const;

// General-holiday dates published by the HKSAR Government for the visible schedule period.
const PUBLIC_HOLIDAYS: Record<string, string> = {
  "2026-09-26": "Day following Mid-Autumn Festival",
  "2026-10-01": "National Day",
  "2026-10-19": "Day following Chung Yeung Festival",
  "2027-02-06": "Lunar New Year’s Day",
  "2027-02-08": "Third day of Lunar New Year",
  "2027-02-09": "Fourth day of Lunar New Year",
  "2027-03-26": "Good Friday",
  "2027-03-27": "Day following Good Friday",
  "2027-03-29": "Easter Monday",
  "2027-04-05": "Ching Ming Festival",
  "2027-05-01": "Labour Day",
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function toDateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function isTrainingDate(date: Date) {
  const key = toDateKey(date);
  const isTuesday = date.getDay() === 2;
  const inTrainingWindow = TRAINING_WINDOWS.some(
    (window) => key >= window.start && key <= window.end,
  );

  return isTuesday && inTrainingWindow && !PUBLIC_HOLIDAYS[key];
}

function isSameDay(left: Date, right: Date) {
  return toDateKey(left) === toDateKey(right);
}

export function CalendarWidget({
  className,
  isCompact = false,
}: {
  className?: string;
  isCompact?: boolean;
}) {
  const [viewDate, setViewDate] = useState(FIRST_MONTH);
  const today = new Date();
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const { monthLabel, calendarCells } = useMemo(() => {
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const leadingEmptyCells = Array.from({ length: firstDay.getDay() }, () => null);
    const dateCells = Array.from({ length: daysInMonth }, (_, index) => new Date(year, month, index + 1));

    return {
      monthLabel: firstDay.toLocaleString("en-HK", { month: "long", year: "numeric" }),
      calendarCells: [...leadingEmptyCells, ...dateCells],
    };
  }, [month, year]);

  const previousMonth = new Date(year, month - 1, 1);
  const nextMonth = new Date(year, month + 1, 1);
  const canGoPrevious = previousMonth >= FIRST_MONTH;
  const canGoNext = nextMonth <= LAST_MONTH;

  return (
    <section
      className={cn(
        "w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm",
        isCompact ? "p-3" : "p-4",
        className,
      )}
      aria-label="HKUST Climbing Society training calendar"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">2026–27 training</p>
          <h3 className="text-lg font-bold text-[var(--text-primary)]">{monthLabel}</h3>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => canGoPrevious && setViewDate(previousMonth)}
            disabled={!canGoPrevious}
            aria-label="View previous month"
            className="rounded-lg p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface)] disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => canGoNext && setViewDate(nextMonth)}
            disabled={!canGoNext}
            aria-label="View next month"
            className="rounded-lg p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface)] disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mb-2 grid grid-cols-7 text-center text-[10px] font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
        {WEEKDAYS.map((weekday) => (
          <span key={weekday} className="py-1">{weekday}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1" role="grid" aria-label={monthLabel}>
        {calendarCells.map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} className="aspect-square" aria-hidden="true" />;
          }

          const dateKey = toDateKey(date);
          const holidayName = PUBLIC_HOLIDAYS[dateKey];
          const training = isTrainingDate(date);
          const isToday = isSameDay(date, today);
          const label = training
            ? "Training · 6:30–9:30 PM"
            : holidayName
              ? `${holidayName} · no training`
              : "No training";

          return (
            <div
              key={dateKey}
              role="gridcell"
              aria-label={`${date.toLocaleDateString("en-HK", { dateStyle: "full" })}: ${label}`}
              title={label}
              className={cn(
                "relative flex aspect-square min-h-10 flex-col items-center justify-center rounded-lg border text-xs transition-colors",
                training && "border-[var(--accent)] bg-[var(--accent)] text-white shadow-sm",
                holidayName && !training && "border-red-500/25 bg-red-500/10 text-red-700 dark:text-red-300",
                !training && !holidayName && "border-transparent text-[var(--text-primary)] hover:bg-[var(--surface)]",
                isToday && !training && "ring-1 ring-[var(--accent)] ring-offset-1 ring-offset-[var(--card)]",
              )}
            >
              <span className="font-semibold">{date.getDate()}</span>
              {training && <span className="text-[8px] font-medium leading-none opacity-90">6:30–9:30</span>}
              {holidayName && <span className="mt-0.5 h-1 w-1 rounded-full bg-current" aria-hidden="true" />}
            </div>
          );
        })}
      </div>

      <div className="mt-4 space-y-2 border-t border-[var(--border)] pt-3 text-xs text-[var(--text-secondary)]">
        <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-[var(--accent)]" />Tuesday training · 6:30–9:30 PM</div>
        <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-red-500/70" />Public holiday · no training</div>
        <p>Autumn: 1 Sep–30 Nov 2026. Spring: 1 Feb–7 May 2027.</p>
      </div>
    </section>
  );
}
