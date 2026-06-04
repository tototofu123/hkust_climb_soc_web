import { Button } from "@/components/ui/button";
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

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <div className="max-w-6xl mx-auto">
                    {chineseTitle && (
                        <p className="text-[var(--accent)] text-lg sm:text-xl font-medium mb-4">
                            {chineseTitle}
                        </p>
                    )}

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
                            {subtitle}
                        </p>
                    )}

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                        <Button
                            asChild
                            className="px-8 py-7 text-lg font-bold rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform"
                        >
                            <Link href={ctaHref}>
                                <span className="flex items-center gap-2">
                                    {ctaText} <Flame className="w-5 h-5" />
                                </span>
                            </Link>
                        </Button>

                        {secondaryCtaText && secondaryCtaHref && (
                            <Button
                                asChild
                                variant="outline"
                                className="px-8 py-7 text-lg font-bold rounded-full border-2 border-[var(--border)] hover:bg-[var(--surface)] transition-all duration-300"
                            >
                                <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
