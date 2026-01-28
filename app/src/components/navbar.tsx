"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-6 inset-x-0 max-w-md mx-auto z-50 px-4", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home" href="/" />
                <MenuItem setActive={setActive} active={active} item="Skills" href="/skills" />
                <MenuItem setActive={setActive} active={active} item="Projects" href="/projects" />
                <MenuItem setActive={setActive} active={active} item="Contact" href="/contact" />
            </Menu>
        </div>
    );
}
