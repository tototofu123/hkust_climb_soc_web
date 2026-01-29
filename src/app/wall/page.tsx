"use client";

import { useState } from "react";
import { Ruler, MapPin, Calendar, ChevronRight, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function WallPage() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    // Categories Metadata
    const categories = [
        {
            id: "climbing_gear",
            name: "Climbing Gear",
            desc: "The essentials: Shoes, Harnesses, Chalk, and Ropes.",
            image: "/photos/wall/equipment/rental/climbing_shoes.jpg",
            bg: "bg-blue-500/10"
        },
        {
            id: "hangboard",
            name: "Hangboard Area",
            desc: "Wall-mounted training: Beastmaker, Pegboards, and Holds.",
            image: "/photos/location/hangboard_area.jpg",
            bg: "bg-green-500/10"
        },
        {
            id: "strength",
            name: "Strength & Weights",
            desc: "Heavy lifting: Plates, Belts, Rings, and Bars.",
            image: "/photos/wall/equipment/strengthandweights/metal_weight_plates.jpg",
            bg: "bg-red-500/10"
        },
        {
            id: "grip",
            name: "Finger & Grip Training",
            desc: "Portable tools: Pinch blocks, Dynamometers, and Trainers.",
            image: "/photos/wall/equipment/training/blue_fingerboard.jpg",
            bg: "bg-orange-500/10"
        },
        {
            id: "mobility",
            name: "Mobility & Balance",
            desc: "Core & Stability: Yoga, Balance Boards, and Ab Wheels.",
            image: "/photos/wall/equipment/misc/yoga_mat_and_block.jpg",
            bg: "bg-purple-500/10"
        },
        {
            id: "recovery_tech",
            name: "Recovery & Tech",
            desc: "Self-care, Filming gear, and Route Setting essentials.",
            image: "/photos/wall/equipment/electronics/massage_gun.jpg",
            bg: "bg-teal-500/10"
        },
        {
            id: "others",
            name: "Others",
            desc: "Games, Challenges, and Miscellaneous.",
            image: "/photos/wall/equipment/misc/climbing_dice.jpg",
            bg: "bg-slate-500/10"
        }
    ];

    // Equipment Items with REAL Images (Unsplash & Generic)
    const equipmentItems = [
        // Climbing Gear (Shoes, Ropes, Chalk)
        { id: "shoes", name: "Climbing Shoes", category: "climbing_gear", image: "/photos/wall/equipment/rental/climbing_shoes.jpg", desc: "Free rentals for all sizes. Aggressive and neutral options.", bg: "bg-blue-500/10", link: "https://www.google.com/search?tbm=shop&q=climbing+shoes" },
        { id: "harness", name: "Climbing Harnesses", category: "climbing_gear", image: "/photos/wall/equipment/rental/harness.jpg", desc: "Safety harnesses for top-rope.", bg: "bg-blue-500/10", link: "https://www.google.com/search?tbm=shop&q=climbing+harness" },
        { id: "chalk_bouldering", name: "Bouldering Chalk Bag", category: "climbing_gear", image: "/photos/wall/equipment/chalk/boulder_chalk_bag.jpg", desc: "Individual chalk bags.", bg: "bg-blue-500/10", link: "https://www.google.com/search?tbm=shop&q=bouldering+chalk+bag" },
        { id: "chalk_toprope", name: "Top Rope Chalk Bag", category: "climbing_gear", image: "/photos/wall/equipment/chalk/small_chalk_bag.jpg", desc: "Waist-mounted chalk bags.", bg: "bg-blue-500/10", link: "https://www.google.com/search?tbm=shop&q=climbing+chalk+bag" },
        { id: "thick_rope", name: "Thick Climbing Rope", category: "climbing_gear", image: "/photos/wall/equipment/misc/thick_climbing_rope.jpg", desc: "Training rope.", bg: "bg-blue-500/10", link: "https://www.google.com/search?tbm=shop&q=thick+climbing+training+rope" },
        { id: "belay_glasses", name: "Belaying Glasses", category: "climbing_gear", image: "/photos/wall/equipment/misc/belay_glasses.jpg", desc: "Prism glasses.", bg: "bg-blue-500/10", link: "https://www.google.com/search?tbm=shop&q=belay+glasses" },
        { id: "brush", name: "Climbing Brush", category: "climbing_gear", image: "/photos/wall/equipment/maintenance/climbing_brush.jpg", desc: "Boar hair brushes.", bg: "bg-blue-500/10", link: "https://www.google.com/search?tbm=shop&q=climbing+brush" },
        { id: "brush_long", name: "Long Climbing Brush", category: "climbing_gear", image: "/photos/wall/equipment/maintenance/long_climbing_brush.jpg", desc: "Reach high holds.", bg: "bg-blue-500/10", link: "https://www.google.com/search?tbm=shop&q=climbing+brush+stick" },

        // Hangboard Area (Wood & Training)
        { id: "beastmaker", name: "Beastmaker 1000", category: "hangboard", image: "/photos/wall/equipment/training/beastmaker_1000.jpg", desc: "Premier wooden hangboard.", bg: "bg-green-500/10", link: "https://www.beastmaker.co.uk/products/beastmaker-1000-series" },
        { id: "green_hangboard", name: "Metolius Green Hangboard", category: "hangboard", image: "/photos/wall/equipment/training/metolius_green_hangboard.jpg", desc: "Additional hangboard.", bg: "bg-green-500/10", link: "https://www.metoliusclimbing.com/simulator-3d.html" },
        { id: "pegboard", name: "Pegboard", category: "hangboard", image: "/photos/wall/equipment/training/pegboard.jpg", desc: "Lock-off training.", bg: "bg-green-500/10", link: "https://www.google.com/search?tbm=shop&q=climbing+pegboard" },
        { id: "hanging_Balls", name: "Hanging Ball Holds", category: "hangboard", image: "/photos/wall/equipment/training/hanging_ball_holds.jpg", desc: "Suspended spheres.", bg: "bg-green-500/10", link: "https://www.google.com/search?tbm=shop&q=hanging+ball+holds+climbing" },
        { id: "cylinder_stick", name: "Cylinder Hang Stick", category: "hangboard", image: "/photos/wall/equipment/misc/climbing_hang_stick.jpg", desc: "Cylinder grip.", bg: "bg-green-500/10", link: "https://www.google.com/search?tbm=shop&q=cylinder+grip+climbing" },

        // Strength (Weights & Gym)
        { id: "weight_plates", name: "Metal Weight Plates", category: "strength", image: "/photos/wall/equipment/strengthandweights/metal_weight_plates.jpg", desc: "1.25kg to 20kg (Total 70kg)", bg: "bg-red-500/10", link: "https://www.google.com/search?tbm=shop&q=olympic+weight+plates" },
        { id: "weight_belt", name: "Weight Belt & Pin", category: "strength", image: "/photos/wall/equipment/strengthandweights/weight_belt_and_pin.jpg", desc: "Weighted pulls.", bg: "bg-red-500/10", link: "https://www.google.com/search?tbm=shop&q=dip+belt+climbing" },
        { id: "pulley", name: "Pulley System", category: "strength", image: "/photos/wall/equipment/training/pulleysystem.jpg", desc: "Assisted training.", bg: "bg-red-500/10", link: "https://www.google.com/search?tbm=shop&q=climbing+training+pulley" },
        { id: "rings", name: "Gymnastic Rings", category: "strength", image: "/photos/wall/equipment/training/gymnastic_rings.jpg", desc: "Stability training.", bg: "bg-red-500/10", link: "https://www.google.com/search?tbm=shop&q=wood+gymnastic+rings" },
        { id: "pushup_handles", name: "Push-up Handles", category: "strength", image: "/photos/wall/equipment/strengthandweights/pushup_handles.jpg", desc: "Ergonomic bars.", bg: "bg-red-500/10", link: "https://www.google.com/search?tbm=shop&q=push+up+bars" },
        { id: "pushup_board", name: "Push-up Board", category: "strength", image: "/photos/wall/equipment/strengthandweights/pushup_board.jpg", desc: "Multi-position push-up board.", bg: "bg-red-500/10", link: "https://www.google.com/search?tbm=shop&q=push+up+board" },
        { id: "front_arm_stick", name: "Front Arm Stick", category: "strength", image: "/photos/wall/equipment/strengthandweights/front_arm_stick.jpg", desc: "Shoulder tool.", bg: "bg-red-500/10", link: "https://www.google.com/search?tbm=shop&q=indian+clubs" },

        // Finger & Grip Training
        { id: "blue_fingerboard", name: "Blue Fingerboard", category: "grip", image: "/photos/wall/equipment/training/blue_fingerboard.jpg", desc: "Resin board.", bg: "bg-orange-500/10", link: "https://www.google.com/search?tbm=shop&q=resin+fingerboard+climbing" },
        { id: "triangle_fingerboard", name: "Triangle Fingerboard", category: "grip", image: "/photos/wall/equipment/training/triangle_fingerboard.jpg", desc: "Pinch grips.", bg: "bg-orange-500/10", link: "https://www.google.com/search?tbm=shop&q=triangle+pinch+climbing" },
        { id: "pinch_block", name: "Pinch Block", category: "grip", image: "/photos/wall/equipment/training/pinchblock.jpg", desc: "Portable pinch.", bg: "bg-orange-500/10", link: "https://www.google.com/search?tbm=shop&q=climbing+pinch+block" },
        { id: "gyro_ball", name: "Momentum Grip Trainer", category: "grip", image: "/photos/wall/equipment/training/gyroball.jpg", desc: "Gyro ball.", bg: "bg-orange-500/10", link: "https://www.google.com/search?tbm=shop&q=powerball+gyro" },
        { id: "spring_grip", name: "Spring Grip Trainer", category: "grip", image: "/photos/wall/equipment/strengthandweights/spring_grip_trainer.jpg", desc: "Hand grippers.", bg: "bg-orange-500/10", link: "https://www.google.com/search?tbm=shop&q=hand+grip+strengthener" },
        { id: "wrist_roller", name: "Wrist Roller", category: "grip", image: "/photos/wall/equipment/strengthandweights/wrist_rolleer.jpg", desc: "Rope winding.", bg: "bg-orange-500/10", link: "https://www.google.com/search?tbm=shop&q=wrist+roller" },
        { id: "wrist_trainer", name: "Wrist Trainer", category: "grip", image: "/photos/wall/equipment/strengthandweights/finger_strength_wrist_trainer.jpg", desc: "Forearm strength.", bg: "bg-orange-500/10", link: "https://www.google.com/search?tbm=shop&q=wrist+strengthener" },
        { id: "individual_finger", name: "Individual Finger", category: "grip", image: "/photos/wall/equipment/strengthandweights/individual_finger_trainer.jpg", desc: "Isolate fingers.", bg: "bg-orange-500/10", link: "https://www.google.com/search?tbm=shop&q=individual+finger+exerciser" },
        { id: "grip_measure", name: "Dynamometer", category: "grip", image: "/photos/wall/equipment/electronics/dynamometer.jpg", desc: "Grip test.", bg: "bg-orange-500/10", link: "https://www.google.com/search?tbm=shop&q=grip+dynamometer" },
        { id: "finger_scale", name: "Digital Crane Scale", category: "grip", image: "/photos/wall/equipment/electronics/digital_crane_scale.jpg", desc: "Max load test.", bg: "bg-orange-500/10", link: "https://www.google.com/search?tbm=shop&q=digital+crane+scale+climbing" },
        { id: "boulder_ball", name: "Boulder Ball", category: "grip", image: "/photos/wall/equipment/training/boulderball.jpg", desc: "Spherical grip training.", bg: "bg-orange-500/10", link: "https://www.google.com/search?tbm=shop&q=boulder+ball+climbing" },

        // Mobility (Yoga, Balance)
        { id: "slab", name: "Slab Volume", category: "mobility", image: "/photos/wall/equipment/misc/slab_volume.jpg", desc: "Technical volumes.", bg: "bg-purple-500/10", link: "https://www.google.com/search?tbm=shop&q=climbing+volume" },
        { id: "yoga_gear", name: "Yoga Mat & Blocks", category: "mobility", image: "/photos/wall/equipment/misc/yoga_mat_and_block.jpg", desc: "Flexibility.", bg: "bg-purple-500/10", link: "https://www.google.com/search?tbm=shop&q=yoga+mat+and+blocks" },
        { id: "balance_board", name: "Balance Board", category: "mobility", image: "/photos/wall/equipment/training/balance_board.jpg", desc: "Stabilizer training.", bg: "bg-purple-500/10", link: "https://www.google.com/search?tbm=shop&q=balance+board" },
        { id: "surfboard_balance", name: "Surfboard Balance Trainer", category: "mobility", image: "/photos/wall/equipment/training/surfboard.jpg", desc: "Core & balance training.", bg: "bg-purple-500/10", link: "https://www.google.com/search?tbm=shop&q=surfboard+balance+trainer" },
        { id: "soft_platform", name: "Soft Platform", category: "mobility", image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=600&q=80", desc: "Balance pad.", bg: "bg-purple-500/10", link: "https://www.google.com/search?tbm=shop&q=foam+balance+pad" },
        { id: "skiing_mat", name: "Skiing Mat", category: "mobility", image: "/photos/wall/equipment/misc/skimat.jpg", desc: "Slide board.", bg: "bg-purple-500/10", link: "https://www.google.com/search?tbm=shop&q=slide+board+exercise" },
        { id: "reaction_ball", name: "Reaction Ball", category: "mobility", image: "/photos/wall/equipment/training/reaction_ball.jpg", desc: "Hand-eye coord.", bg: "bg-purple-500/10", link: "https://www.google.com/search?tbm=shop&q=reaction+abll" },
        { id: "ab_wheel", name: "Ab Wheel", category: "mobility", image: "/photos/wall/equipment/strengthandweights/ab_wheel.jpg", desc: "Core rollout.", bg: "bg-purple-500/10", link: "https://www.google.com/search?tbm=shop&q=ab+wheel" },
        { id: "resistance_bands", name: "Resistance Bands", category: "mobility", image: "/photos/wall/equipment/strengthandweights/resistance_bands.jpg", desc: "Warm-up.", bg: "bg-purple-500/10", link: "https://www.google.com/search?tbm=shop&q=resistance+bands" },

        // Recovery & Tech (Merged)
        { id: "massage", name: "Massage Tools", category: "recovery_tech", image: "/photos/wall/equipment/electronics/massage_gun.jpg", desc: "Gun & Balls for release.", bg: "bg-teal-500/10", link: "https://www.google.com/search?tbm=shop&q=massage+gun" },
        { id: "finger_tape", name: "Finger Tape", category: "recovery_tech", image: "/photos/equipment/finger_tape.jpg", desc: "Skin protection.", bg: "bg-teal-500/10", link: "https://www.google.com/search?tbm=shop&q=climbing+tape" },
        { id: "nail_clipper", name: "Nail Clippers", category: "recovery_tech", image: "/photos/wall/equipment/maintenance/nail_clipper.jpg", desc: "Hygiene essential.", bg: "bg-teal-500/10", link: "https://www.google.com/search?tbm=shop&q=nail+clippers" },
        { id: "shoe_spray", name: "Shoe Spray", category: "recovery_tech", image: "/photos/wall/equipment/maintenance/shoe_spray.jpg", desc: "Odor control.", bg: "bg-teal-500/10", link: "https://www.google.com/search?tbm=shop&q=shoe+deodorizer+spray" },
        { id: "route_setting", name: "Route Setting Kit", category: "recovery_tech", image: "/photos/wall/equipment/maintenance/climbing_tapes_route_setting.jpg", desc: "Tape, Markers, Rulers.", bg: "bg-teal-500/10", link: "https://www.google.com/search?tbm=shop&q=gaffer+tape" },
        { id: "utility_knife", name: "Utility Knife", category: "recovery_tech", image: "/photos/wall/equipment/maintenance/utility_knife.jpg", desc: "General purpose.", bg: "bg-teal-500/10", link: "https://www.google.com/search?tbm=shop&q=utility+knife" },
        { id: "socks", name: "One Time Use Socks", category: "recovery_tech", image: "/photos/wall/equipment/misc/one_time_use_socks.jpg", desc: "Emergency socks.", bg: "bg-teal-500/10", link: "https://www.google.com/search?tbm=shop&q=disposable+socks" },
        { id: "tissues", name: "Tissues", category: "recovery_tech", image: "/photos/wall/equipment/misc/tissue.jpg", desc: "General hygiene.", bg: "bg-teal-500/10", link: "https://www.google.com/search?tbm=shop&q=facial+tissues" },
        { id: "phone_stands", name: "Phone Stands", category: "recovery_tech", image: "/photos/wall/equipment/electronics/phone_stands.jpg", desc: "Tall stands & Holders.", bg: "bg-teal-500/10", link: "https://www.google.com/search?tbm=shop&q=tripod+phone+stand" },
        { id: "lazer_pointer", name: "Lazer Pointer", category: "recovery_tech", image: "/photos/wall/equipment/electronics/lazer_pointer.jpg", desc: "Route reading tool.", bg: "bg-teal-500/10", link: "https://www.google.com/search?tbm=shop&q=laser+pointer" },
        { id: "charging", name: "Charging Station", category: "recovery_tech", image: "/photos/wall/equipment/electronics/charging_plug.jpg", desc: "Cables & power.", bg: "bg-teal-500/10", link: "https://www.google.com/search?tbm=shop&q=usb+charging+station" },

        // Others (Games, Misc)
        { id: "dice_game", name: "Climbing Dice Game", category: "others", image: "/photos/wall/equipment/misc/climbing_dice.jpg", desc: "Training game.", bg: "bg-slate-500/10", link: "https://www.google.com/search?tbm=shop&q=climbing+dice+game" },
        { id: "crimp_1v1", name: "Crimp 1v1 Board", category: "others", image: "/photos/wall/equipment/training/crimp_battle.jpg", desc: "Finger strength board.", bg: "bg-green-500/10", link: "https://www.google.com/search?tbm=shop&q=lattice+crimp+board" },
    ];

    const displayedItems = activeCategory ? equipmentItems.filter(item => item.category === activeCategory) : [];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-16 px-4">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Climbing Wall & Training
                        </h1>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                            Our on-campus climbing facility at LG4 Indoor Sports Complex.
                            Join us for training sessions, courses, and open climbing.
                        </p>
                    </div>
                </ScrollReveal>
            </section>

            {/* Weekly Training Full Row Banner */}
            <section className="py-8 px-4">
                <ScrollReveal>
                    <div className="max-w-6xl mx-auto">
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 md:p-12 text-white shadow-2xl">
                            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="text-center md:text-left">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-4">
                                        <Calendar className="w-4 h-4" /> Weekly Session
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Regular Training Night</h2>
                                    <p className="text-blue-100 text-lg max-w-xl">
                                        Join us every Tuesday from 7:00 PM to 10:00 PM for guided training, technique workshops, and open climbing.
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center min-w-[200px]">
                                        <div className="text-4xl font-bold mb-1">Free</div>
                                        <div className="text-blue-200 text-sm uppercase tracking-wider">For Everyone</div>
                                        <div className="mt-4 pt-4 border-t border-white/10 text-sm">
                                            Equipment Provided
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Wall Specs - MOVED ABOVE EQUIPMENT */}
            <section className="py-16 px-4">
                <ScrollReveal delay={0.2}>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">The Wall Specs</h2>
                                <div className="bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6 shadow-sm">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                                <Ruler className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[var(--text-primary)]">Dimensions</h3>
                                                <p className="text-[var(--text-secondary)] text-sm">
                                                    8 meters high × 4 meters wide
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[var(--text-primary)]">Location</h3>
                                                <p className="text-[var(--text-secondary)] text-sm">
                                                    LG4, Indoor Sports Complex, HKUST
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
                                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/50 rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-600 dark:text-blue-400 flex-shrink-0">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold !text-blue-950 dark:!text-blue-100 mb-2">Beginners Welcome!</h3>
                                            <div className="space-y-4">
                                                <p className="!text-blue-900 dark:!text-blue-200 text-sm leading-relaxed">
                                                    We welcome climbers of all levels! Our committee members will teach you everything regarding top rope and bouldering safety during our sessions.
                                                </p>
                                                <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl text-sm !text-blue-900 dark:!text-blue-100">
                                                    <p className="font-semibold mb-1">No Experience Needed</p>
                                                    <p className="opacity-80">You don&apos;t need to know how to tie a knot or set up gear. Just come in sports attire—we provide climbing shoes and harnesses for free!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* Equipment & Facilities with Category Navigation - MOVED DOWN */}
            <section className="py-16 px-4 bg-[var(--surface)]/50">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-10 text-center">
                            <h2 className="text-3xl font-bold mb-6">Equipment & Gear</h2>

                            {/* Restored Nav Bar */}
                            <div className="flex flex-wrap justify-center gap-2 border-b border-[var(--border)] pb-6 mb-8">
                                {[
                                    { id: null, label: "Overview" },
                                    { id: "climbing_gear", label: "Climbing Gear" },
                                    { id: "hangboard", label: "Hangboard Area" },
                                    { id: "strength", label: "Strength & Weights" },
                                    { id: "grip", label: "Finger & Grip Training" },
                                    { id: "mobility", label: "Mobility & Balance" },
                                    { id: "recovery_tech", label: "Recovery & Tech" },
                                    { id: "others", label: "Others" }
                                ].map((tab) => (
                                    <button
                                        key={tab.id || "overview"}
                                        onClick={() => setActiveCategory(tab.id)}
                                        className={cn(
                                            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                            activeCategory === tab.id
                                                ? "bg-[var(--accent)] text-white shadow-md scale-105"
                                                : "bg-[var(--card)] text-[var(--text-secondary)] hover:bg-[var(--surface)] hover:text-[var(--text-primary)]"
                                        )}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            {!activeCategory ? (
                                /* Categories Grid View */
                                <motion.div
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {categories.map((cat) => (
                                        <div
                                            key={cat.id}
                                            onClick={() => setActiveCategory(cat.id)}
                                            className="group cursor-pointer relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className="h-48 overflow-hidden bg-[var(--surface)] relative">
                                                <Image
                                                    src={cat.image}
                                                    alt={cat.name}
                                                    fill
                                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                                                    {cat.name}
                                                </h3>
                                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                                    {cat.desc}
                                                </p>
                                                <div className="mt-4 flex items-center text-xs font-semibold text-[var(--accent)] uppercase tracking-wider">
                                                    View Items <ChevronRight className="w-3 h-3 ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                /* Items Grid View */
                                <motion.div
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {displayedItems.map((item) => (
                                        <a
                                            key={item.id}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]/40 backdrop-blur-xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-[var(--card)]/60 hover:-translate-y-2 block"
                                        >
                                            <div className={cn("absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:scale-125", item.bg)}></div>
                                            <div className="absolute top-4 right-4 bg-[var(--surface)] p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text-muted)] z-20">
                                                <ExternalLink className="w-4 h-4" />
                                            </div>

                                            <div className="relative z-10 flex flex-col h-full">
                                                <div className="mb-4 rounded-xl bg-[var(--surface)] w-full h-40 overflow-hidden shadow-inner relative">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                </div>
                                                <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{item.name}</h3>
                                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 flex-grow">
                                                    {item.desc}
                                                </p>
                                                <div className="flex items-center text-xs font-medium text-[var(--accent)] mt-auto pt-4 border-t border-[var(--border)]/50 uppercase tracking-wider">
                                                    {item.category.replace('_', ' ')}
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
