"use client";

import { Hero } from "@/components/ui/hero";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Flame } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Global Background */}
      <div className="fixed inset-0 z-[-1] opacity-60">
        <BackgroundPaths position={1} />
        <div className="absolute inset-0 rotate-180 opacity-50">
          <BackgroundPaths position={-1} />
        </div>
      </div>

      {/* Hero Section */}
      <Hero
        chineseTitle="香港科技大學學生會運動攀登學生會"
        title="HKUST CLIMBING"
        subtitle="Join our community. Weekly training sessions are free for everyone, with shoes and harnesses provided!"
        ctaText="Join Us"
        ctaHref="/apply"
        secondaryCtaText="Learn More"
        secondaryCtaHref="/about"
      />

      {/* Features Grid */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">Explore</h2>
            <div className="bg-[var(--surface)]/50 backdrop-blur-xl rounded-3xl p-8 border border-[var(--border)] shadow-sm">
              <BentoGrid />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[var(--surface)]/30 backdrop-blur-md relative border-y border-[var(--border)]">
        <div className="container mx-auto px-4">
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <span className="block text-4xl font-bold text-[var(--accent)] mb-2">30+</span>
                <span className="text-[var(--text-secondary)]">Years History</span>
              </div>
              <div className="p-6">
                <span className="block text-4xl font-bold text-[var(--accent)] mb-2">500+</span>
                <span className="text-[var(--text-secondary)]">Members</span>
              </div>
              <div className="p-6">
                <span className="block text-4xl font-bold text-[var(--accent)] mb-2">12m</span>
                <span className="text-[var(--text-secondary)]">Wall Height</span>
              </div>
              <div className="p-6">
                <span className="block text-4xl font-bold text-[var(--accent)] mb-2">Weekly</span>
                <span className="text-[var(--text-secondary)]">Training</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <div className="bg-[var(--card)]/60 backdrop-blur-xl rounded-3xl p-12 border border-[var(--border)] shadow-lg">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Climb?</h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                Become a member today and get full access to our facilities, equipment, and training sessions.
              </p>
              <Button size="lg" className="rounded-full px-8 bg-gradient-to-r from-[var(--accent)] to-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300 " asChild>
                <Link href="/apply" className="text-white">
                  Apply for Membership <Flame className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
