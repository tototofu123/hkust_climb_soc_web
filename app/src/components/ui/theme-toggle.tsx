"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
    className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch - wait for client mount
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className={cn(
                "flex w-16 h-8 p-1 rounded-full",
                "bg-[var(--surface)] border border-[var(--border)]",
                className
            )} />
        )
    }

    const isDark = resolvedTheme === "dark"

    return (
        <div
            className={cn(
                "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
                isDark
                    ? "bg-[var(--surface)] border border-[var(--border)]"
                    : "bg-white border border-[var(--border)]",
                className
            )}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    setTheme(isDark ? "light" : "dark")
                }
            }}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            <div className="flex justify-between items-center w-full">
                <div
                    className={cn(
                        "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
                        isDark
                            ? "transform translate-x-0 bg-[var(--card)]"
                            : "transform translate-x-8 bg-[var(--surface)]"
                    )}
                >
                    {isDark ? (
                        <Moon className="w-4 h-4 text-[var(--accent)]" strokeWidth={1.5} />
                    ) : (
                        <Sun className="w-4 h-4 text-[var(--accent)]" strokeWidth={1.5} />
                    )}
                </div>
                <div
                    className={cn(
                        "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
                        isDark
                            ? "bg-transparent"
                            : "transform -translate-x-8"
                    )}
                >
                    {isDark ? (
                        <Sun className="w-4 h-4 text-[var(--text-muted)]" strokeWidth={1.5} />
                    ) : (
                        <Moon className="w-4 h-4 text-[var(--text-muted)]" strokeWidth={1.5} />
                    )}
                </div>
            </div>
        </div>
    )
}
