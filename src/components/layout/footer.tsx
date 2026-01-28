'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
    external?: boolean;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        label: 'Explore',
        links: [
            { title: 'About Us', href: '/about' },
            { title: 'Climbing Wall', href: '/wall' },
            { title: 'Training Sessions', href: '/wall' },
            { title: 'Our Team', href: '/team' },
        ],
    },
    {
        label: 'Join',
        links: [
            { title: 'Apply for Membership', href: '/apply' },
            { title: 'Top Rope Permission', href: '/apply' },
            { title: 'Hangboard Permission', href: '/apply' },
            { title: 'Shop', href: '/shop' },
        ],
    },
    {
        label: 'Contact',
        links: [
            { title: 'su_climb@connect.ust.hk', href: 'mailto:su_climb@connect.ust.hk', icon: Mail },
            { title: '@climbing_hkustsu', href: 'https://www.instagram.com/climbing_hkustsu/', icon: Instagram, external: true },
            { title: 'Toto (+852 6618 6981)', href: 'tel:+85266186981', icon: Phone },
            { title: 'Gus (+49 1521 5397558)', href: 'tel:+4915215397558', icon: Phone },
            { title: 'LG4, HKUST', href: 'https://maps.app.goo.gl/12345', icon: MapPin, external: true },
        ],
    },
];

function AnimatedContainer({
    className,
    delay = 0.1,
    children
}: {
    className?: string;
    delay?: number;
    children: React.ReactNode;
}) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function Footer() {
    return (
        <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-3xl border-t border-[var(--border)] bg-[var(--surface)] px-6 py-12 lg:py-16">

            <div className="bg-[var(--accent)]/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

            <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
                {/* Logo & Copyright */}
                <AnimatedContainer className="space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">HKUST Climbing</span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm">
                        Sport Climbing Students&apos; Society, HKUSTSU
                    </p>
                    <p className="text-[var(--text-muted)] mt-8 text-sm">
                        © {new Date().getFullYear()} HKUST Climbing Society. All rights reserved.
                    </p>
                </AnimatedContainer>

                {/* Links */}
                <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
                    {footerLinks.map((section, index) => (
                        <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                            <div className="mb-10 md:mb-0">
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                                    {section.label}
                                </h3>
                                <ul className="text-[var(--text-secondary)] mt-4 space-y-2 text-sm">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            {link.external ? (
                                                <a
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-[var(--accent)] inline-flex items-center transition-all duration-300"
                                                >
                                                    {link.icon && <link.icon className="mr-2 h-4 w-4" />}
                                                    {link.title}
                                                </a>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="hover:text-[var(--accent)] inline-flex items-center transition-all duration-300"
                                                >
                                                    {link.icon && <link.icon className="mr-2 h-4 w-4" />}
                                                    {link.title}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </footer>
    );
}
