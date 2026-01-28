'use client'

import { EtheralShadow } from "@/components/ui/etheral-shadow"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"
import { Navbar } from "@/components/navbar"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
    {
        title: "3D Portfolio Website",
        description: "An immersive portfolio featuring interactive 3D elements built with Spline and React.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        tags: ["React", "Spline", "Tailwind"],
        github: "#",
        demo: "#"
    },
    {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment processing and inventory management.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        tags: ["Next.js", "Stripe", "PostgreSQL"],
        github: "#",
        demo: "#"
    },
    {
        title: "AI Dashboard",
        description: "Real-time analytics dashboard with AI-powered insights and data visualization.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        tags: ["TypeScript", "D3.js", "OpenAI"],
        github: "#",
        demo: "#"
    },
    {
        title: "Mobile Fitness App",
        description: "Cross-platform fitness tracking app with workout plans and progress analytics.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        tags: ["React Native", "Firebase", "Redux"],
        github: "#",
        demo: "#"
    },
]

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-black relative">
            <Navbar />

            <div className="fixed inset-0 z-0">
                <EtheralShadow
                    color="rgba(60, 80, 100, 0.6)"
                    animation={{ scale: 40, speed: 50 }}
                    noise={{ opacity: 0.4, scale: 1.2 }}
                    sizing="fill"
                />
            </div>

            <div className="relative z-10 pt-32 pb-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-center">
                        Projects
                    </h1>
                    <p className="text-neutral-400 text-center mb-16 max-w-2xl mx-auto">
                        A selection of my recent work and side projects
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>

            <StackedCircularFooter />
        </main>
    )
}

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
}

const ProjectCard = ({ title, description, image, tags, github, demo }: ProjectCardProps) => {
    return (
        <div className="relative rounded-2xl border border-neutral-700 p-3 group">
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
            />
            <div className="relative flex flex-col rounded-xl border border-neutral-800 bg-black/60 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <p className="text-neutral-400 text-sm">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4 pt-2">
                        <Link href={github} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm">
                            <Github className="h-4 w-4" />
                            Code
                        </Link>
                        <Link href={demo} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
