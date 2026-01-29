"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { CalendarWidget } from "@/components/ui/calendar-widget";

import eventsData from "@/data/events.json";
import { ClimbingEvent } from "@/lib/types";

export default function EventsPage() {
    const upcomingEvents = eventsData as ClimbingEvent[];

    return (
        <div className="pt-20 lg:pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="py-12 md:py-20 px-6">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            News & <span className="text-[var(--accent)]">Events</span>
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                            Join the community, challenge yourself, and make memories. Here&apos;s what&apos;s happening next at HKUST Climbing Society.
                        </p>
                    </div>
                </ScrollReveal>
            </section>

            {/* Calendar Section - Moved to First Position */}
            <section className="py-12 px-6">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="bg-[var(--card)] rounded-3xl border border-[var(--border)] shadow-xl overflow-hidden">
                            <CalendarWidget />
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Events Grid */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {upcomingEvents.map((event, index) => (
                        <ScrollReveal key={event.id} delay={index * 0.1}>
                            <div className="group bg-[var(--card)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                                {/* Event Image Placeholder Area */}
                                <div className="h-64 overflow-hidden relative bg-[var(--surface)]">
                                    {/* We use a generic gradient or image if specific one not available, or the one from the object */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <Image
                                        src={event.image || "/photos/icons/image02.jpg"}
                                        alt={event.eventName}
                                        fill
                                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                                        <Badge variant="secondary" className="bg-[var(--accent)] text-white border-none shadow-lg">
                                            {event.eventType}
                                        </Badge>
                                        {event.hashtags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="bg-white/10 backdrop-blur-md text-white border-white/20">
                                                #{tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-1">{event.eventName}</h3>
                                            <p className="text-[var(--accent)] font-medium">{event.dateOfEvent}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-6 flex-grow">
                                        <div className="flex items-center text-[var(--text-secondary)]">
                                            <Clock className="w-5 h-5 mr-3 text-[var(--accent)]" />
                                            {event.time}
                                        </div>
                                        <div className="flex items-center text-[var(--text-secondary)]">
                                            <MapPin className="w-5 h-5 mr-3 text-[var(--accent)]" />
                                            {event.location}
                                        </div>
                                        <div className="flex items-center text-[var(--text-secondary)]">
                                            <div className="w-5 h-5 mr-3 flex items-center justify-center font-bold text-[var(--accent)]">$</div>
                                            {event.price}
                                        </div>
                                        <p className="text-[var(--text-muted)] text-sm leading-relaxed mt-4">
                                            {event.details}
                                        </p>
                                    </div>

                                    {/* Action Button */}
                                    <div className="pt-6 border-t border-[var(--border)]/50">
                                        {event.signupLink ? (
                                            <Button asChild className="w-full group/btn bg-blue-600 hover:bg-blue-700 text-white">
                                                <a href={event.signupLink} target="_blank" rel="noopener noreferrer">
                                                    Register Now <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                                                </a>
                                            </Button>
                                        ) : event.eventType.includes("Funday") ? (
                                            <Button variant="outline" className="w-full border-dashed border-[var(--border)] text-[var(--text-muted)] cursor-default hover:bg-transparent">
                                                No registration needed
                                            </Button>
                                        ) : (
                                            <Button className="w-full group/btn" disabled>
                                                Registration Coming Soon <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>
        </div>
    );
}
