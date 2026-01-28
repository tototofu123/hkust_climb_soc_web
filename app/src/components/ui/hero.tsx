"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Flame } from "lucide-react";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position
            } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position
            } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${684 - i * 5 * position
            } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-[var(--text-muted)] dark:text-[var(--text-muted)]"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.02}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

interface HeroProps {
    title: string;
    subtitle?: string;
    chineseTitle?: string;
    ctaText?: string;
    ctaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
}

export function Hero({
    title,
    subtitle,
    chineseTitle,
    ctaText = "Explore",
    ctaHref = "/about",
    secondaryCtaText,
    secondaryCtaHref,
}: HeroProps) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
            {/* Background Paths are now global in page.tsx */}

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Chinese Title */}
                    {chineseTitle && (
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-[var(--accent)] text-lg sm:text-xl font-medium mb-4"
                        >
                            {chineseTitle}
                        </motion.p>
                    )}

                    {/* Main Title - Animated Letters */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: wordIndex * 0.1 + letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <div
                            className="inline-block group relative bg-gradient-to-b from-[var(--accent)]/10 to-transparent 
                            p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Button
                                asChild
                                variant="ghost"
                                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                                bg-[var(--card)] hover:bg-[var(--surface)]
                                text-[var(--text-primary)] transition-all duration-300 
                                group-hover:-translate-y-0.5 border border-[var(--border)]
                                hover:shadow-md"
                            >
                                <Link href={ctaHref}>
                                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                        {ctaText}
                                    </span>
                                    <Flame
                                        className="ml-2 w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 
                                        transition-all duration-300 inline-block"
                                    />
                                </Link>
                            </Button>
                        </div>

                        {secondaryCtaText && secondaryCtaHref && (
                            <Button asChild variant="outline" className="px-8 py-6 text-lg">
                                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
                            </Button>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
