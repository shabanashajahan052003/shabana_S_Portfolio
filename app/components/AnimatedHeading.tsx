"use client";

import { m as motion } from "framer-motion";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export default function AnimatedHeading({
  children,
  className,
  gradient = true,
}: AnimatedHeadingProps) {
  return (
    <h2 className={`overflow-hidden pb-3 ${className ?? ""}`}>
      <motion.div
        initial={{ y: "110%", rotate: 2.5, opacity: 0 }}
        whileInView={{ y: 0, rotate: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className={`origin-bottom-left ${gradient ? "gradient-text" : ""}`}
      >
        {children}
      </motion.div>
    </h2>
  );
}
