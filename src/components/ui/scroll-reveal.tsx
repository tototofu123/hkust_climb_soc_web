"use client";

import { motion } from "framer-motion";

export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0
}: {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};
