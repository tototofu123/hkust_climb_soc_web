import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, MapPin, Instagram, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-16 px-4 text-center">
                <ScrollReveal>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Have questions about membership, training, or events? We&apos;re here to help.
                    </p>
                </ScrollReveal>
            </section>

            {/* Contact Info Grid */}
            <section className="py-12 px-4 bg-[var(--surface)]">
                <ScrollReveal delay={0.1}>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                        {/* Instagram */}
                        <div className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border)] text-center hover:border-pink-500/50 transition-colors">
                            <div className="bg-pink-100 dark:bg-pink-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Instagram className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Instagram</h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-4">
                                Follow us for latest updates and event photos.
                            </p>
                            <Button variant="outline" className="w-full" asChild>
                                <a href="https://www.instagram.com/climbing_hkustsu/" target="_blank">
                                    @climbing_hkustsu
                                </a>
                            </Button>
                        </div>

                        {/* Email */}
                        <div className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border)] text-center hover:border-blue-500/50 transition-colors">
                            <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Email</h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-4">
                                su_climb@connect.ust.hk
                            </p>
                            <Button variant="outline" className="w-full" asChild>
                                <a href="mailto:su_climb@connect.ust.hk">
                                    Send Email
                                </a>
                            </Button>
                        </div>

                        {/* Phone */}
                        <div className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border)] text-center hover:border-green-500/50 transition-colors">
                            <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Phone</h3>
                            <div className="text-sm text-[var(--text-secondary)] mb-4 space-y-1">
                                <p>Toto: +852 6618 6981</p>
                                <p>Gus: +49 1521 5397558</p>
                            </div>
                            <Button variant="outline" className="w-full" asChild>
                                <a href="https://wa.me/85266186981" target="_blank">
                                    WhatsApp Toto
                                </a>
                            </Button>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Location */}
            <section className="py-12 px-4">
                <ScrollReveal delay={0.2}>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                                <MapPin className="w-6 h-6 text-[var(--accent)]" />
                                How to Find Us
                            </h2>
                            <address className="not-italic text-[var(--text-secondary)] space-y-4">
                                <div>
                                    <p className="font-semibold text-[var(--text-primary)] mb-1">Physical Address:</p>
                                    <p>LG4, Indoor Sports Complex, HKUST</p>
                                    <p>Clear Water Bay, Kowloon, Hong Kong</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-[var(--text-primary)] mb-1">Mailing Address:</p>
                                    <p>Mailbox 109, Students' Union Offices,</p>
                                    <p>LG5, Academic Building, HKUST,</p>
                                    <p>Clear Water Bay, Kowloon, Hong Kong SAR</p>
                                </div>
                            </address>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* FAQ */}
            <section className="py-16 px-4 bg-[var(--surface)]">
                <ScrollReveal delay={0.3}>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Do I need climbing experience to join?</AccordionTrigger>
                                <AccordionContent>
                                    No! We welcome climbers of all levels. Our Tuesday training sessions always have beginners, and our committee members are happy to teach you the basics.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Do I need to buy my own gear?</AccordionTrigger>
                                <AccordionContent>
                                    Not initially. We provide climbing shoes and harnesses for free during our training sessions for everyone. As you progress, you might want to buy your own shoes for better fit and performance.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>What do you teach beginners?</AccordionTrigger>
                                <AccordionContent>
                                    We focus on welcoming beginners by teaching essential top rope and bouldering skills. You don't need to know how to tie a knot or set up gear to start climbing with us!
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
