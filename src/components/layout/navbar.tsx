"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { Menu, X, ShoppingBag } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/wall", label: "Wall" },
    { href: "/team", label: "Team" },
    { href: "/events", label: "Events" },
    { href: "/apply", label: "Apply" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled
                        ? "bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--border)]"
                        : "bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/photos/icons/image02.avif"
                                alt="HKUST Climbing"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                            <span className="font-bold text-lg hidden sm:block">
                                HKUST Climbing
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)] rounded-lg transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Right side - Theme Toggle & Menu Button */}
                        <div className="flex items-center gap-2">
                            {/* Shop Icon - Explicitly requested position */}
                            <Link
                                href="/shop"
                                className="p-2 rounded-lg hover:bg-[var(--surface)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                aria-label="Shop"
                            >
                                <ShoppingBag className="w-5 h-5" />
                            </Link>
                            <ThemeToggle />

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 rounded-lg hover:bg-[var(--surface)] transition-colors"
                                aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                            >
                                {isOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Mobile navigation" className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 top-0 h-full w-[min(22rem,calc(100vw-1rem))] bg-[var(--background)]
                border-l border-[var(--border)] shadow-xl">
                        <div className="pt-20 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface)] rounded-lg transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
