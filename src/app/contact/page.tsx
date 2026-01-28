'use client'

import { EtheralShadow } from "@/components/ui/etheral-shadow"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black relative">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <EtheralShadow
                    color="rgba(100, 60, 80, 0.6)"
                    animation={{ scale: 40, speed: 50 }}
                    noise={{ opacity: 0.4, scale: 1.2 }}
                    sizing="fill"
                />
            </div>

            <div className="relative z-10 pt-32 pb-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-center">
                        Get In Touch
                    </h1>
                    <p className="text-neutral-400 text-center mb-16 max-w-2xl mx-auto">
                        Have a project in mind? Let&apos;s work together to create something amazing.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="relative rounded-2xl border border-neutral-700 p-3">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="relative rounded-xl border border-neutral-800 bg-black/60 backdrop-blur-sm p-8 space-y-6">
                                    <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                                    <p className="text-neutral-400">
                                        Feel free to reach out through any of these channels. I typically respond within 24 hours.
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-lg bg-neutral-800 border border-neutral-700">
                                                <Mail className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-neutral-400">Email</p>
                                                <p className="text-white">hello@yourname.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-lg bg-neutral-800 border border-neutral-700">
                                                <Phone className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-neutral-400">Phone</p>
                                                <p className="text-white">+1 (555) 123-4567</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-lg bg-neutral-800 border border-neutral-700">
                                                <MapPin className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-neutral-400">Location</p>
                                                <p className="text-white">San Francisco, CA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="relative rounded-2xl border border-neutral-700 p-3">
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={3}
                            />
                            <div className="relative rounded-xl border border-neutral-800 bg-black/60 backdrop-blur-sm p-8">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-white">First Name</Label>
                                            <Input
                                                id="firstName"
                                                placeholder="John"
                                                className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-white">Last Name</Label>
                                            <Input
                                                id="lastName"
                                                placeholder="Doe"
                                                className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-white">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-white">Subject</Label>
                                        <Input
                                            id="subject"
                                            placeholder="Project Inquiry"
                                            className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-white">Message</Label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            placeholder="Tell me about your project..."
                                            className="flex w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                                        />
                                    </div>

                                    <Button type="submit" className="w-full bg-white text-black hover:bg-neutral-200">
                                        <Send className="h-4 w-4 mr-2" />
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <StackedCircularFooter />
        </main>
    )
}
