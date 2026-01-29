"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { CalendarWidget } from "./calendar-widget";



interface GridItem {
    title: string;
    description: string;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    href?: string;
    status?: string;
    tags?: string[];
    meta?: string;
    colSpan?: number;
}

export const BentoGrid = ({
    className,
    items,
}: {
    className?: string;
    items?: GridItem[];
}) => {
    // Default items with Contact added and Join Now expanded
    const defaultItems: GridItem[] = [
        {
            title: "Calendar",
            meta: "Schedule",
            description: "Check out our upcoming training sessions and events.",
            header: <CalendarWidget className="scale-90 origin-top-left" isCompact={true} />,
            href: "/events",
            colSpan: 1,
            className: "md:row-span-2", // Make it tall
        },
        {
            title: "News & Events",
            meta: "Competitions",
            description: "Updates on HKUST Bouldering Comp, Fun Days, and social gatherings.",
            header: (
                <div className="flex flex-1 w-full h-full min-h-[160px] rounded-xl overflow-hidden mb-4 relative">
                    <Image
                        src="/photos/events/top_out_climbing.jpg"
                        alt="Top Out Climbing Event"
                        fill
                        className="object-cover group-hover/bento:scale-105 transition-transform duration-500"
                    />
                </div>
            ),
            href: "/events",
            status: "Latest",
            tags: ["Updates", "Events"],
            colSpan: 2,
        },
        {
            title: "About Us",
            meta: "Since 1994",
            description: "Learn about our history, mission, and the executive committee.",
            header: (
                <div className="w-full aspect-[2/1] rounded-xl overflow-hidden mb-2 relative bg-zinc-900/50">
                    <Image
                        src="/photos/events/shek_o_group.jpg"
                        alt="HKUST Climbing Team @ Shek O"
                        fill
                        className="object-contain group-hover/bento:scale-105 transition-transform duration-500"
                    />
                </div>
            ),
            href: "/about",
            tags: ["Community"],
            colSpan: 1,
        },
        {
            title: "Climbing Wall",
            meta: "LG4 + Training",
            description: "Details on our 8m wall, opening hours, and weekly training sessions.",
            header: (
                <div className="w-full aspect-[2/1] rounded-xl overflow-hidden mb-2 relative bg-zinc-900/50">
                    <Image
                        src="/photos/location/hangboard_area.jpg"
                        alt="Climbing Wall Area"
                        fill
                        className="object-contain group-hover/bento:scale-105 transition-transform duration-500"
                    />
                </div>
            ),
            href: "/wall",
            status: "Open",
            tags: ["Facilities"],
            colSpan: 1,
        },
        {
            title: "Competitions",
            meta: "HKUST-UM Cup",
            description: "Inter-university competitions, Bun Festival, and joint school events.",
            header: (
                <div className="flex flex-1 w-full h-full min-h-[100px] rounded-xl overflow-hidden mb-2 relative">
                    <Image
                        src="/photos/events/hkust_umcup.jpg"
                        alt="HKUST-UM Cup"
                        fill
                        className="object-cover group-hover/bento:scale-105 transition-transform duration-500"
                    />
                </div>
            ),
            href: "/team",
            status: "Team",
            tags: ["Events"],
            colSpan: 1,
        },
        {
            title: "Shop",
            meta: "Gear",
            description: "Official society T-shirts, chalk bags, and day pass vouchers.",
            header: (
                <div className="flex flex-1 w-full h-full min-h-[100px] rounded-xl overflow-hidden mb-2 relative">
                    <Image
                        src="/photos/wall/equipment/chalk/chalk_ball.jpg"
                        alt="Climbing Chalk Ball"
                        fill
                        className="object-contain group-hover/bento:scale-110 transition-transform duration-500"
                    />
                </div>
            ),
            href: "/shop",
            status: "New",
            tags: ["Merch"],
            colSpan: 1,
        },
        {
            title: "Join Now",
            meta: "Free Training",
            description: "Membership application, weekly free sessions, and gear details.",
            header: (
                <div className="w-full aspect-[2/1] rounded-xl overflow-hidden mb-2 relative bg-zinc-900/50">
                    <Image
                        src="/photos/events/pak_shui_wun_group.jpg"
                        alt="Join HKUST Climbing Community"
                        fill
                        className="object-contain group-hover/bento:scale-105 transition-transform duration-500"
                    />
                </div>
            ),
            href: "/apply",
            status: "Open",
            tags: ["Apply"],
            colSpan: 2,
        },

        {
            title: "Contact",
            meta: "Get in touch",
            description: "Questions? Reach out via email or Instagram.",
            href: "/contact",
            tags: ["Support"],
            colSpan: 1,
        },
    ];

    const gridItems = items || defaultItems;

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
                className
            )}
        >
            {gridItems.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={cn(
                        item.colSpan === 1 && "md:col-span-1",
                        item.colSpan === 2 && "md:col-span-2",
                        item.colSpan === 3 && "md:col-span-3",
                        item.className
                    )}
                    href={item.href}
                    status={item.status}
                    tags={item.tags}
                    meta={item.meta}
                />
            ))}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    href,
    status,
    tags,
    meta,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    href?: string;
    status?: string;
    tags?: string[];
    meta?: string;
}) => {
    return (
        <Link
            href={href || "#"}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-300 shadow-input dark:shadow-none p-6 bg-[var(--card)] border border-[var(--border)] justify-between flex flex-col space-y-4 shadow-sm hover:-translate-y-1 relative overflow-hidden",
                className
            )}
        >
            {/* Hover Detail Overlay */}
            <div className="absolute inset-0 bg-[var(--accent)]/5 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="flex justify-between items-start">
                {/* Status Badge */}
                {status && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
                        {status}
                    </span>
                )}
                {meta && (
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                        {meta}
                    </span>
                )}
            </div>

            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-[var(--text-primary)] mb-2 mt-2 text-lg">
                    {title}
                </div>
                <div className="font-sans font-normal text-[var(--text-secondary)] text-sm leading-relaxed">
                    {description}
                </div>
                {tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag) => (
                            <span key={tag} className="text-xs text-[var(--text-muted)] bg-[var(--surface)] px-2 py-1 rounded-md">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
};
