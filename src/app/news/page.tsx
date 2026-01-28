"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { CalendarWidget } from "@/components/ui/calendar-widget";

export default function EventsPage() {
    const upcomingEvents = [
        {
            id: 1,
            title: "Top Out Climbing",
            date: "7/2",
            time: "1:30 PM - 4:30 PM",
            location: "Location TBA",
            fee: "100 HKD/person",
            description: "Join us for a session of top out climbing! Perfect for those looking to push their limits and reach the top.",
            image: "/photos/buncarnival.jpg", // Using a placeholder/existing image
            tags: ["Climbing", "Social"]
        },
        {
            id: 2,
            title: "Outdoor Climbing Trip",
            date: "28/2",
            time: "12:00 PM - 6:00 PM",
            location: "Location TBA",
            fee: "Details soon",
            description: "Experience the thrill of outdoor climbing on real rock. A great opportunity to apply your gym skills in nature.",
            image: "/photos/pakshuiwun_groupphoto.jpg",
            tags: ["Outdoor", "Adventure"]
        }
    ];


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

                {/* Events Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
                    {upcomingEvents.map((event, index) => (
                        <ScrollReveal key={event.id} delay={index * 0.1}>
                            <div className="group bg-[var(--card)] border border-[var(--border)] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                                {/* Event Image Placeholder Area */}
                                <div className="h-64 overflow-hidden relative bg-[var(--surface)]">
                                    {/* We use a generic gradient or image if specific one not available, or the one from the object */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    <Image
                                        src={event.image || "/photos/icons/image02.jpg"}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                                        {event.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="bg-white/10 backdrop-blur-md text-white border-white/20">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
                                            <p className="text-[var(--accent)] font-medium">{event.date}</p>
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
                                            {event.fee}
                                        </div>
                                        <p className="text-[var(--text-muted)] text-sm leading-relaxed mt-4">
                                            {event.description}
                                        </p>
                                    </div>

                                    {/* Action Button */}
                                    <div className="pt-6 border-t border-[var(--border)]/50">
                                        <Button className="w-full group/btn" disabled={event.location.includes("TBA")}>
                                            Sign Up Coming Soon <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Calendar Section - Restored */}
            <section className="py-16 px-6 bg-[var(--surface)]/30 border-t border-[var(--border)]">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Event Calendar</h2>
                            <p className="text-[var(--text-secondary)]">
                                View our full schedule including weekly training sessions and holidays.
                            </p>
                        </div>
                        <div className="bg-[var(--card)] rounded-3xl border border-[var(--border)] shadow-xl overflow-hidden">
                            <CalendarWidget />
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
