"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function ContactPage() {
    const contactMethods = [
        {
            icon: Mail,
            title: "Email Us",
            description: "For general inquiries, partnerships, and membership questions.",
            value: "su_climb@connect.ust.hk",
            href: "mailto:su_climb@connect.ust.hk",
            action: "Send Email"
        },
        {
            icon: Instagram,
            title: "Follow Us",
            description: "Stay updated with our latest events, photos, and announcements.",
            value: "@climbing_hkustsu",
            href: "https://www.instagram.com/climbing_hkustsu/",
            action: "View Profile"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            description: "Find us at the climbing wall for training sessions.",
            value: "LG4, HKUST (Near Swimming Pool)",
            href: "https://maps.app.goo.gl/d3j7XqW9wz8J9z8J9", // Placeholder map link, can be updated
            action: "Get Directions"
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-4xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Get in <span className="text-[var(--accent)]">Touch</span>
                        </h1>
                        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                            Have questions about joining, training, or events? We&apos;d love to hear from you.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {contactMethods.map((method, index) => (
                        <ScrollReveal key={method.title} delay={index * 0.1}>
                            <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8 flex flex-col h-full hover:shadow-xl transition-all duration-300 group">
                                <div className="mb-6 bg-[var(--surface)] w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <method.icon className="w-8 h-8 text-[var(--accent)]" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{method.title}</h3>
                                <p className="text-[var(--text-secondary)] mb-6 flex-grow">
                                    {method.description}
                                </p>
                                <div className="space-y-4">
                                    <p className="font-semibold text-lg">{method.value}</p>
                                    <Button asChild variant="outline" className="w-full rounded-xl border-[var(--border)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all duration-300">
                                        <a href={method.href} target="_blank" rel="noopener noreferrer">
                                            {method.action}
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.4}>
                    <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold mb-6">Exec Committee Contact</h2>
                        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                            <div className="flex flex-col items-center">
                                <Phone className="w-8 h-8 mb-4 text-[var(--accent)]" />
                                <h3 className="font-bold text-lg">Toto</h3>
                                <a href="tel:+85266186981" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                                    +852 6618 6981
                                </a>
                            </div>
                            <div className="flex flex-col items-center">
                                <Phone className="w-8 h-8 mb-4 text-[var(--accent)]" />
                                <h3 className="font-bold text-lg">Gus</h3>
                                <a href="tel:+4915215397558" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                                    +49 1521 5397558
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
