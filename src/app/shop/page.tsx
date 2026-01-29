"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag, Instagram } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";

export default function ShopPage() {
    return (
        <div className="pt-20">
            <ScrollReveal>
                <div className="py-16 px-4 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Society Shop</h1>
                    <p className="text-[var(--text-secondary)] flex items-center justify-center gap-2">
                        Get your gear here. <ShoppingBag className="w-5 h-5" />
                    </p>
                </div>
            </ScrollReveal>

            <section className="py-12 px-4 max-w-4xl mx-auto">
                <ScrollReveal delay={0.1}>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Items for Sale */}
                        <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full flex items-center justify-center mb-6">
                                <ShoppingBag className="w-8 h-8 text-[var(--accent)]" />
                            </div>
                            <h2 className="text-2xl font-bold mb-6">Equipment for Sale</h2>

                            <div className="space-y-6 w-full">
                                <div className="group/item bg-[var(--surface)] p-4 rounded-xl transition-all hover:shadow-md">
                                    <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden bg-white/5">
                                        <Image
                                            src="/photos/wall/equipment/chalk/chalk_ball.jpg"
                                            alt="Chalk Ball"
                                            fill
                                            className="object-contain transition-transform group-hover/item:scale-110"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center px-2">
                                        <span className="font-bold text-lg">Chalk Ball</span>
                                        <span className="font-extrabold text-[var(--accent)]">10 HKD</span>
                                    </div>
                                </div>

                                <div className="group/item bg-[var(--surface)] p-4 rounded-xl transition-all hover:shadow-md">
                                    <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden bg-white/5">
                                        <Image
                                            src="/photos/wall/equipment/misc/one_time_use_socks.jpg"
                                            alt="Climbing Socks"
                                            fill
                                            className="object-contain transition-transform group-hover/item:scale-110"
                                        />
                                    </div>
                                    <div className="flex justify-between items-center px-2">
                                        <span className="font-bold text-lg">Socks</span>
                                        <span className="font-extrabold text-[var(--accent)]">5 HKD</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rentals */}
                        <div className="bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)] flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-green-600">Free</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-6">Member Rentals</h2>
                            <p className="text-[var(--text-secondary)] mb-6">
                                Available during training sessions for all members.
                            </p>

                            <ul className="space-y-3 text-left w-full pl-8 list-disc text-[var(--text-secondary)]">
                                <li>Climbing Shoes</li>
                                <li>Harnesses</li>
                                <li>Chalk Bags</li>
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Purchase Info */}
                <ScrollReveal delay={0.2}>
                    <div className="mt-12 text-center bg-[var(--surface)] p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">How to Buy?</h3>
                        <p className="text-[var(--text-secondary)] mb-6">
                            If you are interested in buying any items, please DM us on Instagram.
                        </p>
                        <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity">
                            <a href="https://www.instagram.com/climbing_hkustsu/" target="_blank">
                                <Instagram className="mr-2 w-5 h-5" />
                                DM on Instagram
                            </a>
                        </Button>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
