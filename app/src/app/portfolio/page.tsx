'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { EtheralShadow } from "@/components/ui/etheral-shadow"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer"
import { Navbar } from "@/components/navbar"
import { Code2, Rocket, Sparkles, User } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-black relative">
            {/* Fixed Navbar */}
            <Navbar />

            {/* Etheral Shadow Background */}
            <div className="fixed inset-0 z-0">
                <EtheralShadow
                    color="rgba(60, 60, 80, 0.8)"
                    animation={{ scale: 50, speed: 60 }}
                    noise={{ opacity: 0.5, scale: 1.2 }}
                    sizing="fill"
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                {/* Hero Section with 3D Robot */}
                <section className="min-h-screen relative overflow-visible pt-20 md:pt-0">
                    <Card className="w-full min-h-screen bg-transparent border-none shadow-none relative overflow-visible">
                        <Spotlight
                            className="-top-40 left-0 md:left-60 md:-top-20"
                            fill="white"
                        />

                        <div className="flex flex-col lg:flex-row min-h-screen items-center">
                            {/* Left content */}
                            <div className="flex-1 p-6 sm:p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center order-2 lg:order-1">
                                <p className="text-xs sm:text-sm md:text-base text-neutral-400 uppercase tracking-widest mb-3 md:mb-4">
                                    Welcome to my portfolio
                                </p>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
                                    Interactive 3D
                                    <br />
                                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                                        Developer
                                    </span>
                                </h1>
                                <p className="mt-4 md:mt-6 text-neutral-300 max-w-lg text-sm sm:text-base md:text-lg">
                                    Bringing UI to life with beautiful 3D scenes. Creating immersive experiences
                                    that capture attention and enhance your design.
                                </p>
                                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <button className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors text-sm sm:text-base">
                                        View Projects
                                    </button>
                                    <button className="px-6 py-3 border border-neutral-600 text-white font-medium rounded-full hover:border-neutral-400 transition-colors text-sm sm:text-base">
                                        Contact Me
                                    </button>
                                </div>
                            </div>

                            {/* Right content - 3D Robot (NOT CROPPED) */}
                            <div className="flex-1 relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto lg:min-h-[600px] order-1 lg:order-2">
                                <div className="absolute inset-0 lg:inset-[-50px] xl:inset-[-100px] lg:right-[-100px] xl:right-[-150px]">
                                    <SplineScene
                                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </section>

                {/* Skills Section with Glowing Effect Cards */}
                <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-16 md:py-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-center">
                        What I Do
                    </h2>
                    <p className="text-neutral-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
                        Crafting digital experiences with cutting-edge technologies
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-4 max-w-6xl mx-auto auto-rows-fr">
                        <GridItem
                            area="lg:[grid-area:1/1/2/5]"
                            icon={<Code2 className="h-4 w-4 text-white" />}
                            title="Full-Stack Development"
                            description="Building scalable applications with React, Next.js, Node.js and modern databases."
                        />
                        <GridItem
                            area="lg:[grid-area:2/1/3/5]"
                            icon={<Code2 className="h-4 w-4 text-white" />}
                            title="3D & Interactive Experiences"
                            description="Creating immersive 3D web experiences with Three.js, Spline, and WebGL technologies."
                        />
                        <GridItem
                            area="lg:[grid-area:1/5/3/8]"
                            icon={<Sparkles className="h-4 w-4 text-white" />}
                            title="UI/UX Design"
                            description="Designing beautiful, intuitive interfaces that users love. Focused on accessibility and performance."
                        />
                        <GridItem
                            area="lg:[grid-area:1/8/2/13]"
                            icon={<Rocket className="h-4 w-4 text-white" />}
                            title="Performance Optimization"
                            description="Making applications blazingly fast with code splitting, lazy loading, and smart caching strategies."
                        />
                        <GridItem
                            area="lg:[grid-area:2/8/3/13]"
                            icon={<User className="h-4 w-4 text-white" />}
                            title="Consulting & Collaboration"
                            description="Available for freelance projects, technical consulting, and team collaborations."
                        />
                    </ul>
                </section>

                {/* Projects Section with Container Scroll */}
                <section className="relative">
                    <ContainerScroll
                        titleComponent={
                            <>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                                    Featured Projects
                                </h2>
                                <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                                    A showcase of my best work and creative experiments
                                </p>
                            </>
                        }
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&h=720&fit=crop"
                            alt="Project showcase"
                            height={720}
                            width={1400}
                            className="mx-auto rounded-2xl object-cover h-full w-full object-center"
                            draggable={false}
                        />
                    </ContainerScroll>
                </section>

                {/* Footer */}
                <StackedCircularFooter />
            </div>
        </main>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={cn("min-h-[12rem] sm:min-h-[14rem] list-none", area)}>
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-neutral-700 p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-4 sm:gap-6 overflow-hidden rounded-xl border-[0.75px] border-neutral-800 bg-black/60 backdrop-blur-sm p-4 sm:p-6 shadow-sm">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border-[0.75px] border-neutral-700 bg-neutral-900 p-2">
                            {icon}
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                            <h3 className="pt-0.5 text-lg sm:text-xl leading-tight font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                                {title}
                            </h3>
                            <p className="font-sans text-xs sm:text-sm leading-relaxed md:text-base md:leading-[1.375rem] text-neutral-400">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
