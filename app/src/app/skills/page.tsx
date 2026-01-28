'use client'

import { EtheralShadow } from "@/components/ui/etheral-shadow"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"
import { Navbar } from "@/components/navbar"
import { Code2, Database, Globe, Palette, Server, Smartphone } from "lucide-react"

const skills = [
    { icon: Code2, title: "Frontend Development", description: "React, Next.js, TypeScript, Tailwind CSS", level: 95 },
    { icon: Server, title: "Backend Development", description: "Node.js, Express, Python, REST APIs", level: 90 },
    { icon: Database, title: "Database Design", description: "PostgreSQL, MongoDB, Redis, Prisma", level: 85 },
    { icon: Globe, title: "3D & WebGL", description: "Three.js, Spline, Shader programming", level: 80 },
    { icon: Palette, title: "UI/UX Design", description: "Figma, Adobe XD, Design Systems", level: 88 },
    { icon: Smartphone, title: "Mobile Development", description: "React Native, Flutter, PWA", level: 75 },
]

export default function SkillsPage() {
    return (
        <main className="min-h-screen bg-black relative">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <EtheralShadow
                    color="rgba(80, 60, 100, 0.6)"
                    animation={{ scale: 40, speed: 50 }}
                    noise={{ opacity: 0.4, scale: 1.2 }}
                    sizing="fill"
                />
            </div>

            <div className="relative z-10 pt-32 pb-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-center">
                        Skills & Expertise
                    </h1>
                    <p className="text-neutral-400 text-center mb-16 max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {skills.map((skill, index) => (
                            <SkillCard key={index} {...skill} />
                        ))}
                    </div>
                </div>
            </div>

            <StackedCircularFooter />
        </main>
    )
}

interface SkillCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    level: number;
}

const SkillCard = ({ icon: Icon, title, description, level }: SkillCardProps) => {
    return (
        <div className="relative rounded-2xl border border-neutral-700 p-3">
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
            />
            <div className="relative flex flex-col gap-4 rounded-xl border border-neutral-800 bg-black/60 backdrop-blur-sm p-6">
                <div className="flex items-center gap-4">
                    <div className="w-fit rounded-lg border border-neutral-700 bg-neutral-900 p-3">
                        <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white">{title}</h3>
                        <p className="text-sm text-neutral-400">{description}</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-neutral-400">Proficiency</span>
                        <span className="text-white">{level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                            style={{ width: `${level}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
