"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--background)]">
            {/* Background Paths (Wavy lines from the UI reference) */}
            <div className="absolute inset-0 z-0 opacity-40">
                <BackgroundPaths position={1} />
                <div className="absolute inset-0 rotate-180 opacity-50">
                    <BackgroundPaths position={-1} />
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Big 404 */}
                    <h1 className="text-8xl md:text-9xl font-bold text-[var(--text-primary)] mb-8 tracking-tighter">
                        404
                    </h1>

                    {/* Subtext - Adapted for Climbing */}
                    <div className="space-y-2 mb-12">
                        <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium">
                            Don&apos;t worry - the mountain hasn&apos;t crumbled.
                        </p>
                        <p className="text-lg text-[var(--text-muted)]">
                            It&apos;s just the page that&apos;s run into a dead end.
                        </p>
                    </div>

                    {/* CTA Button - Cyan/Teal style from image */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full px-12 py-7 text-lg font-semibold bg-[#2DD4BF] hover:bg-[#14B8A6] text-black border-none shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300"
                        >
                            <Link href="/">
                                Back to Home Page
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
