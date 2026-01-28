"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

// Hardcoded Data for Jan-May 2026
const SPECIAL_DATES = {
    indoor: ["2026-02-07", "2026-03-07", "2026-04-11", "2026-05-02"],
    outdoor: ["2026-02-28", "2026-03-14", "2026-03-21"],
    competition: ["2026-03-03", "2026-05-05"],
    holidays: [
        "2026-01-01", // New Year
        "2026-02-17", "2026-02-18", "2026-02-19", // Lunar New Year
        "2026-04-03", // Good Friday
        "2026-04-04", // Holy Saturday / Ching Ming
        "2026-04-06", // Easter Monday
        "2026-05-01", // Labour Day
        "2026-05-25", // Buddha's Birthday
    ]
};

const TRAINING_START = new Date(2026, 1, 3); // Feb 3, 2026 (Month is 0-indexed: 1 = Feb)
const TRAINING_END = new Date(2026, 4, 5);   // May 5, 2026 (4 = May)

// Max range: Jan 2026 - May 2026
const MIN_DATE = new Date(2026, 0, 1);
const MAX_DATE = new Date(2026, 4, 31);

export const CalendarWidget = ({
    className,
    isCompact = false,
}: {
    className?: string;
    isCompact?: boolean;
}) => {
    // Start with current date, clamped to range
    const [viewDate, setViewDate] = useState(() => {
        const now = new Date();
        const year = now.getFullYear();
        // If outside 2026 or before Jan/after May, clamp?
        // User said "locates at users recent date" which is Jan 2026.
        if (now < MIN_DATE) return MIN_DATE;
        if (now > MAX_DATE) return MAX_DATE;
        return now;
    });

    const { days, monthLabel, year, month } = useMemo(() => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const monthLabel = viewDate.toLocaleString('default', { month: 'long', year: 'numeric' });

        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const startDayIndex = firstDayOfMonth.getDay();

        const prevMonthDays = [];
        for (let i = 0; i < startDayIndex; i++) {
            prevMonthDays.push({ day: "", type: "empty", key: `prev-${i}` });
        }

        const currentMonthDays = [];
        for (let i = 1; i <= daysInMonth; i++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            const currentDate = new Date(year, month, i);
            const dayOfWeek = currentDate.getDay(); // 0=Sun, 1=Mon, 2=Tue... 6=Sat

            let type = "default";
            let label = "";

            // Check specific lists first
            if (SPECIAL_DATES.holidays.includes(dateStr)) {
                type = "holiday";
                // Optionally add label like "PH"
            } else if (SPECIAL_DATES.competition.includes(dateStr)) {
                type = "competition";
                label = "Comp";
            } else if (SPECIAL_DATES.indoor.includes(dateStr)) {
                type = "funday-indoor";
                label = "Indoor";
            } else if (SPECIAL_DATES.outdoor.includes(dateStr)) {
                type = "funday-outdoor";
                label = "Outdoor";
            } else {
                // Regular Logic
                // Training: Tuesdays, between Feb 3 and May 5
                if (dayOfWeek === 2) {
                    if (currentDate >= TRAINING_START && currentDate <= TRAINING_END) {
                        type = "training";
                    }
                }
            }

            // Current Date Check
            const now = new Date();
            const isToday =
                currentDate.getDate() === now.getDate() &&
                currentDate.getMonth() === now.getMonth() &&
                currentDate.getFullYear() === now.getFullYear();

            currentMonthDays.push({
                day: i,
                type,
                label,
                isToday,
                key: `curr-${i}`
            });
        }

        return {
            days: [...prevMonthDays, ...currentMonthDays],
            monthLabel,
            year,
            month
        };
    }, [viewDate]);

    const handlePrev = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const newDate = new Date(year, month - 1, 1);
        if (newDate >= MIN_DATE) {
            setViewDate(newDate);
        }
    };

    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        const newDate = new Date(year, month + 1, 1);
        if (newDate <= MAX_DATE) {
            setViewDate(newDate);
        }
    };

    // Check bounds for buttons
    const canGoPrev = new Date(year, month - 1, 1) >= MIN_DATE;
    const canGoNext = new Date(year, month + 1, 1) <= MAX_DATE;

    return (
        <div className={cn(
            "relative w-full h-full bg-[var(--card)] p-4 flex flex-col pointer-events-auto",
            isCompact ? "p-3" : "p-6 rounded-2xl border border-[var(--border)] shadow-sm",
            className
        )}>
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className={cn("font-bold text-[var(--text-primary)]", isCompact ? "text-base" : "text-lg")}>
                    {monthLabel}
                </h3>
                <div className="flex gap-1 z-20 relative">
                    <div
                        role="button"
                        onClick={canGoPrev ? handlePrev : undefined}
                        className={cn(
                            "p-1 rounded-md transition-colors text-[var(--text-secondary)]",
                            canGoPrev ? "hover:bg-[var(--surface)] cursor-pointer" : "opacity-30 cursor-not-allowed"
                        )}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </div>
                    <div
                        role="button"
                        onClick={canGoNext ? handleNext : undefined}
                        className={cn(
                            "p-1 rounded-md transition-colors text-[var(--text-secondary)]",
                            canGoNext ? "hover:bg-[var(--surface)] cursor-pointer" : "opacity-30 cursor-not-allowed"
                        )}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </div>
                </div>
            </div>

            {/* Grid Headers */}
            <div className="grid grid-cols-7 mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                    <div key={i} className="text-center text-[10px] font-semibold text-[var(--text-muted)]">
                        {d}
                    </div>
                ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1 auto-rows-fr h-full">
                {days.map((d) => (
                    <div
                        key={d.key}
                        className={cn(
                            "aspect-square rounded-lg flex flex-col items-center justify-center text-sm relative transition-all",
                            d.type === "empty" && "invisible",
                            d.type === "default" && "text-[var(--text-secondary)] hover:bg-[var(--surface)]",
                            // Training: Blue - Black text for light mode (Forced)
                            d.type === "training" && "bg-blue-100 !text-black dark:bg-blue-500/20 dark:text-blue-100 font-bold",
                            // Fun Days: Indoor/Outdoor - Black text
                            (d.type === "funday-indoor" || d.type === "funday-outdoor") && "bg-orange-100 !text-black dark:bg-orange-500/20 dark:text-orange-100 font-bold",
                            // Competition: Green - Black text
                            d.type === "competition" && "bg-emerald-100 !text-black dark:bg-emerald-500/30 dark:text-emerald-100 font-bold border-2 border-emerald-500/50",
                            // Public Holiday: Red Text Only
                            d.type === "holiday" && "!text-red-700 dark:text-red-400 font-bold",

                            // Today Border
                            d.isToday && "border-2 border-[var(--accent)] shadow-sm z-10",

                            isCompact && "text-xs"
                        )}
                    >
                        <span className="z-10 relative top-[-6px]">{d.day}</span>

                        {/* Labels - Inside the box */}
                        {!isCompact && d.label && (
                            <span className={cn(
                                "text-[8px] font-bold leading-none absolute bottom-1 px-1 py-0.5 rounded-sm uppercase tracking-wider max-w-[95%] overflow-hidden text-ellipsis whitespace-nowrap z-20",
                                // Custom label colors - aligned with black text
                                d.type.includes("training") && "bg-blue-200 !text-black dark:bg-blue-900/50 dark:text-blue-100",
                                d.type.includes("funday") && "bg-orange-200 !text-black dark:bg-orange-900/50 dark:text-orange-100",
                                d.type.includes("competition") && "bg-emerald-200 !text-black dark:bg-emerald-900/50 dark:text-emerald-100"
                            )}>
                                {d.label}
                            </span>
                        )}
                        {/* Compact Labels (Dots/Tiny Text) */}
                        {isCompact && d.label && (
                            <span className="text-[7px] font-normal absolute bottom-0.5 leading-none opacity-90 scale-90 origin-bottom">
                                {d.label}
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* Legend - No Link anymore */}
            {!isCompact && (
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[var(--text-secondary)] justify-center border-t border-[var(--border)] pt-4">
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500/50 border border-blue-500"></div> Training
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-orange-500/50 border border-orange-500"></div> Fun Day
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50 border border-emerald-500"></div> Comp
                    </div>
                </div>
            )}
        </div>
    );
};
