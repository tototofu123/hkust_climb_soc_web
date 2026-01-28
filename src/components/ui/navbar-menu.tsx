"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = {
    type: "spring" as const,
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    href,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    href?: string;
    children?: React.ReactNode;
}) => {
    const content = (
        <motion.p
            transition={{ duration: 0.3 }}
            className="cursor-pointer text-neutral-200 hover:text-white transition-colors"
        >
            {item}
        </motion.p>
    );

    return (
        <div onMouseEnter={() => setActive(item)} className="relative">
            {href ? (
                <Link href={href}>{content}</Link>
            ) : (
                content
            )}
            {active !== null && children && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className="bg-neutral-900 backdrop-blur-sm rounded-2xl overflow-hidden border border-neutral-700 shadow-xl"
                            >
                                <motion.div
                                    layout
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className="relative rounded-full border border-neutral-700 bg-black/80 backdrop-blur-md shadow-lg flex justify-center space-x-8 px-8 py-4"
        >
            {children}
        </nav>
    );
};

export const HoveredLink = ({ children, ...rest }: React.ComponentPropsWithoutRef<typeof Link>) => {
    return (
        <Link
            {...rest}
            className="text-neutral-400 hover:text-white transition-colors"
        >
            {children}
        </Link>
    );
};
