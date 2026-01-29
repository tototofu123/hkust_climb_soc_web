"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import Link from "next/link";
import { Flame } from "lucide-react";


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
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                        <LiquidButton
                            asChild
                            variant="blue"
                            className="px-8 py-5 text-lg font-bold rounded-full shadow-lg"
                        >
                            <Link href={ctaHref}>
                                <span className="flex items-center gap-2">
                                    {ctaText} <Flame className="w-5 h-5" />
                                </span>
                            </Link>
                        </LiquidButton>

                        {secondaryCtaText && secondaryCtaHref && (
                            <Button asChild variant="outline" className="px-8 py-5 text-lg rounded-full border-2 border-[var(--border)] hover:bg-[var(--surface)] transition-all duration-300">
                                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
                            </Button>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
