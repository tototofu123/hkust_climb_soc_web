import { Button } from "@/components/ui/button";
import { ClipboardList, CheckCircle, AlertCircle, MapPin, Dumbbell } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function ApplyPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Join Our Society
                        </h1>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                            Become a member of the HKUST Climbing Society and gain access to
                            equipment and our climbing community.
                            <br /><br />
                            <span className="font-bold text-[var(--accent)] text-lg">Weekly training sessions are FREE for everyone!</span>
                            <br />
                            <span className="text-[var(--text-primary)] font-medium">No climbing shoes needed—we provide shoes and harnesses for free.</span>
                        </p>
                    </div>
                </ScrollReveal>
            </section>

            {/* Gym Collaborations */}
            <section className="py-12 px-4">
                <ScrollReveal delay={0.1}>
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Member Perks: Gym Discounts</h2>
                        <p className="text-center text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
                            Show your Membership ID and Student ID to claim these exclusive offers!
                            Valid until 1/9/2026.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Butterfly */}
                            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
                                <h3 className="text-xl font-bold mb-2">🦋 Butterfly Climbing Gym</h3>
                                <p className="text-2xl font-bold text-[var(--accent)] mb-4">HKD 110 <span className="text-sm font-normal text-[var(--text-secondary)]">/ Day Pass</span></p>
                                <p className="text-sm text-[var(--text-secondary)] mb-4">Includes rental shoes & chalk</p>
                                <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                    14A, Magnet Place Tower 2, Kwai Chung
                                </div>
                            </div>

                            {/* Campus Jordan */}
                            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
                                <h3 className="text-xl font-bold mb-2">🌰 Campus Jordan</h3>
                                <p className="text-2xl font-bold text-[var(--accent)] mb-4">HKD 120 <span className="text-sm font-normal text-[var(--text-secondary)]">/ Day Pass</span></p>
                                <p className="text-sm text-[var(--text-secondary)] mb-4">Includes rental shoes</p>
                                <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                    1/F, Jade Suites, Jordan
                                </div>
                            </div>

                            {/* TOP OUT */}
                            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
                                <h3 className="text-xl font-bold mb-2">🏞️ TOP OUT Climbing</h3>
                                <p className="text-2xl font-bold text-[var(--accent)] mb-4">HKD 100 <span className="text-sm font-normal text-[var(--text-secondary)]">/ Day Pass</span></p>
                                <p className="text-sm text-[var(--text-secondary)] mb-4">Includes rental shoes</p>
                                <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                    Shop LG126, Shan King Comm. Centre, Tuen Mun
                                </div>
                            </div>

                            {/* Proxy */}
                            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
                                <h3 className="text-xl font-bold mb-2">🌏 Proxy Climbing</h3>
                                <p className="text-2xl font-bold text-[var(--accent)] mb-4">HKD 180 <span className="text-sm font-normal text-[var(--text-secondary)]">/ Day Pass</span></p>
                                <p className="text-sm text-[var(--text-secondary)] mb-4">Includes rental shoes</p>
                                <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                    K11 Atelier, Quarry Bay
                                </div>
                            </div>

                            {/* Mizu */}
                            <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors">
                                <h3 className="text-xl font-bold mb-2">💧 Mizu Climbing 水岩舎</h3>
                                <p className="text-2xl font-bold text-[var(--accent)] mb-4">HKD 528 <span className="text-sm font-normal text-[var(--text-secondary)]">/ Month Pass</span></p>
                                <p className="text-sm text-[var(--text-secondary)] mb-4">No renewal discounts</p>
                                <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                                    Tai Kok Tsui
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Membership Types */}
            <section className="py-12 px-4 bg-[var(--surface)]">
                <ScrollReveal delay={0.2}>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-8 text-center">Membership Options</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-[var(--card)] p-8 rounded-xl border-2 border-[var(--accent)] shadow-[0_0_20px_rgba(59,130,246,0.15)] relative overflow-hidden flex flex-col transform md:-translate-y-2">
                                <div className="absolute top-0 right-0 bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    RECOMMENDED
                                </div>
                                <ClipboardList className="w-10 h-10 text-[var(--accent)] mb-4" />
                                <h3 className="text-xl font-bold mb-2">Society Membership</h3>
                                <p className="text-[var(--text-secondary)] mb-4 flex-grow">
                                    Full membership with access to all society activities and training sessions.
                                </p>
                                <ul className="space-y-2 text-[var(--text-secondary)] mb-6 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[var(--accent)]" />
                                        Inter-university comps
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[var(--accent)]" />
                                        Society events & trips
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[var(--accent)]" />
                                        Society hoodies & gear
                                    </li>
                                </ul>
                                <Button
                                    className="w-full relative overflow-hidden group bg-gradient-to-r from-[var(--accent)] to-blue-600 text-white hover:from-blue-600 hover:to-[var(--accent)] shadow-lg hover:shadow-xl transition-all duration-300"
                                    asChild
                                >
                                    <a href="https://forms.office.com/r/HYMFaiP8qv" target="_blank">
                                        Apply Now
                                    </a>
                                </Button>
                            </div>

                            <div className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors flex flex-col">
                                <AlertCircle className="w-10 h-10 text-[var(--text-muted)] mb-4" />
                                <h3 className="text-xl font-bold mb-2">Top Rope Permission</h3>
                                <p className="text-[var(--text-secondary)] mb-4 flex-grow">
                                    Required for using the top rope climbing wall on campus.
                                </p>
                                <ul className="space-y-2 text-[var(--text-secondary)] mb-6 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[var(--text-muted)]" />
                                        Climbing wall access
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[var(--text-muted)]" />
                                        Safety certification
                                    </li>
                                </ul>
                                <Button variant="outline" className="w-full hover:bg-[var(--accent)] hover:text-white transition-colors" asChild>
                                    <a href="https://forms.office.com/r/vNEG0JG1sm" target="_blank">Application Form</a>
                                </Button>
                            </div>

                            <div className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--accent)]/50 transition-colors flex flex-col">
                                <Dumbbell className="w-10 h-10 text-[var(--text-muted)] mb-4" />
                                <h3 className="text-xl font-bold mb-2">Hangboard Permission</h3>
                                <p className="text-[var(--text-secondary)] mb-4 flex-grow">
                                    Access to the specialized training area (MoonBoard/Fingerboards).
                                </p>
                                <ul className="space-y-2 text-[var(--text-secondary)] mb-6 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[var(--text-muted)]" />
                                        Training area access
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-[var(--text-muted)]" />
                                        Advanced equipment
                                    </li>
                                </ul>
                                <Button variant="outline" className="w-full hover:bg-[var(--accent)] hover:text-white transition-colors" asChild>
                                    <a href="https://forms.office.com/r/wgtJrpDAxc" target="_blank">Application Form</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* How to Apply */}
            <section className="py-12 px-4">
                <ScrollReveal delay={0.3}>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6">How to Apply</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-[var(--accent)] text-[var(--primary-foreground)] rounded-full flex items-center justify-center font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="font-semibold">Fill out the application form</h3>
                                    <p className="text-[var(--text-secondary)]">
                                        Complete the online membership form with your HKUST details.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-[var(--accent)] text-[var(--primary-foreground)] rounded-full flex items-center justify-center font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="font-semibold">Pay membership fee</h3>
                                    <p className="text-[var(--text-secondary)]">
                                        Complete payment through the specified channels.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-[var(--accent)] text-[var(--primary-foreground)] rounded-full flex items-center justify-center font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="font-semibold">Join your first session</h3>
                                    <p className="text-[var(--text-secondary)]">
                                        Come to our weekly training and meet the community!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    );
}
