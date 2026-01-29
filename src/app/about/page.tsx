import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, Heart, Trophy, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            About Our Society
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] mb-2">
                            香港科技大學學生會運動攀登學生會
                        </p>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                            Sport Climbing Students&apos; Society, HKUSTSU - Promoting climbing culture
                            and community since 1994.
                        </p>
                    </div>
                </ScrollReveal>
            </section>

            {/* Gallery Section */}
            <section className="py-12 px-4 bg-[var(--surface)]">
                <ScrollReveal delay={0.15}>
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6 text-center">Our Community in Action</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                                <Image
                                    src="/photos/events/pak_shui_wun_group.jpg"
                                    alt="HKUST Climbing Society Group Photo at Pak Shui Wun"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white font-medium text-sm">Outdoor Training @ Pak Shui Wun</p>
                                </div>
                            </div>

                            {/* Moved Photo from Team Page */}
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                                <Image
                                    src="/photos/events/shek_o_group.jpg"
                                    alt="HKUST Climbing Team @ Shek O"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white font-medium text-sm">Our Growing Family</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Mission */}
            <section className="py-12 px-4">
                <ScrollReveal delay={0.1}>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)]">
                                <Heart className="w-8 h-8 text-[var(--accent)] mb-4" />
                                <h3 className="font-semibold mb-2">Promote Climbing</h3>
                                <p className="text-[var(--text-secondary)]">
                                    Spread the joy and benefits of sport climbing across the HKUST community.
                                </p>
                            </div>
                            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)]">
                                <Users className="w-8 h-8 text-[var(--accent)] mb-4" />
                                <h3 className="font-semibold mb-2">Build Community</h3>
                                <p className="text-[var(--text-secondary)]">
                                    Create a supportive environment for climbers of all skill levels.
                                </p>
                            </div>
                            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)]">
                                <Trophy className="w-8 h-8 text-[var(--accent)] mb-4" />
                                <h3 className="font-semibold mb-2">Compete & Excel</h3>
                                <p className="text-[var(--text-secondary)]">
                                    Represent HKUST in inter-university competitions and events.
                                </p>
                            </div>
                            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)]">
                                <Calendar className="w-8 h-8 text-[var(--accent)] mb-4" />
                                <h3 className="font-semibold mb-2">Regular Activities</h3>
                                <p className="text-[var(--text-secondary)]">
                                    Organize weekly training, outdoor trips, and social events.
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* History */}
            <section className="py-12 px-4 bg-[var(--surface)]">
                <ScrollReveal delay={0.2}>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6">Our History</h2>
                        <p className="text-[var(--text-secondary)] mb-4">
                            Founded in 1994, the HKUST Sport Climbing Society has grown from a small group
                            of enthusiasts to one of the most active sports societies on campus. With over
                            30 years of history, we continue to welcome new climbers every year.
                        </p>
                        <p className="text-[var(--text-secondary)]">
                            Our members have represented HKUST in numerous competitions including the
                            HKUST-UM Cup and the Cheung Chau Bun Festival climbing competition, bringing
                            home medals and building lasting friendships.
                        </p>
                    </div>
                </ScrollReveal>
            </section>

            {/* CTA */}
            <section className="py-12 px-4 text-center">
                <ScrollReveal>
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
                        <p className="text-[var(--text-secondary)] mb-6">
                            Ready to start your climbing journey? Join us for free training sessions!
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button asChild>
                                <Link href="/apply">Apply Now</Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link href="/team">Meet the Team</Link>
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
