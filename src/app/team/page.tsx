import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Trophy, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// Team members data


export default function TeamPage() {
    return (
        <div className="pt-20">
            {/* Hero Section with Base Logo */}
            <section className="py-16 px-4">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center">
                        <Image
                            src="/photos/logos/base_logo.jpg"
                            alt="HKUST Climbing Society Logo"
                            width={120}
                            height={120}
                            className="mx-auto mb-6 rounded-2xl shadow-lg object-contain"
                        />
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Our Team
                        </h1>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                            Meet the people who keep our climbing community running.
                            Our executive committee works hard to organize events and support members.
                        </p>
                    </div>
                </ScrollReveal>
            </section>

            {/* Our Team Description */}
            <section className="py-12 px-4 bg-[var(--surface)]">
                <ScrollReveal delay={0.1}>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <Users className="w-8 h-8 text-[var(--accent)]" />
                                <h2 className="text-2xl font-bold">About Our Team</h2>
                            </div>
                            <div className="prose prose-neutral dark:prose-invert max-w-none">
                                <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
                                    The HKUST Climbing Society is run by a dedicated group of students passionate about the sport.
                                    Our mission is to foster a welcoming and safe environment for climbers of all levels.
                                    From organizing weekly training sessions to planning exciting outdoor trips, our team works
                                    tirelessly to build a strong community. We believe in the power of climbing to build character,
                                    trust, and lasting friendships.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Team Gallery (Added) */}
            <section className="py-12 px-4 bg-[var(--surface)]/50">
                <ScrollReveal delay={0.25}>
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold mb-8 text-center">Team Moments</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                            {/* Large Item */}
                            <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="/photos/events/hkust_umcup.jpg"
                                    alt="HKUST-UM Cup Team"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <p className="text-white font-bold text-lg">HKUST-UM Cup</p>
                                        <p className="text-white/80 text-sm">Inter-University Competition</p>
                                    </div>
                                </div>
                            </div>

                            {/* Tall Item - Bun Festival */}
                            <div className="md:row-span-2 relative rounded-2xl overflow-hidden shadow-lg group bg-black">
                                <Image
                                    src="/photos/events/2024_bun_carnival.jpg"
                                    alt="Bun Festival Competition"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <p className="text-white font-bold text-lg">Bun Scrambling</p>
                                        <p className="text-white/80 text-sm">Cheung Chau Festival 2024</p>
                                    </div>
                                </div>
                            </div>



                            {/* Wide Item - Moonboard */}
                            <div className="md:col-span-3 relative rounded-2xl overflow-hidden shadow-lg group h-64">
                                <Image
                                    src="/photos/events/ustum_moonboard.jpg"
                                    alt="HKUST-UM Moonboard Session"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <p className="text-white font-bold text-lg">Moonboard Session</p>
                                        <p className="text-white/80 text-sm">Training hard with UMacau team</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Competitions */}
            <section className="py-12 px-4">
                <ScrollReveal delay={0.2}>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <Trophy className="w-8 h-8 text-[var(--accent)]" />
                            <h2 className="text-2xl font-bold">Competitions</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)]">
                                <h3 className="font-semibold mb-2">HKUST-UM Cup</h3>
                                <p className="text-[var(--text-secondary)]">
                                    Annual inter-university climbing competition between HKUST and University of Macau.
                                </p>
                            </div>
                            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)]">
                                <h3 className="font-semibold mb-2">Cheung Chau Bun Festival</h3>
                                <p className="text-[var(--text-secondary)]">
                                    Our team participates in the iconic Bun Scrambling Competition every year.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* CTA */}
            <section className="py-12 px-4 text-center bg-[var(--surface)]">
                <ScrollReveal>
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
                        <p className="text-[var(--text-secondary)] mb-6">
                            We will be hosting selection competitions for the climbing team. You will need to become a member to join first.
                            <br /><br />
                            The climbing team welcomes anyone who studies at HKUST long-term.
                        </p>
                        <Button asChild>
                            <Link href="/apply">Become a Member First</Link>
                        </Button>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
