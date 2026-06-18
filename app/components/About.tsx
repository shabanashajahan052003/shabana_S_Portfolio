"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";
import GlassCard from "./ui/GlassCard";

export default function About() {
  return (
    <AnimatedSection className="px-6 py-40 section-glow-purple">
      <div className="mx-auto max-w-4xl" id="about">
        <AnimatedHeading className="mb-12 text-center text-5xl font-bold">
          About Me
        </AnimatedHeading>

        <GlassCard delay={0.2} hover tilt className="p-10 md:p-12 text-center relative overflow-hidden">
          {/* Decorative background glow */}
          <div
            className="absolute top-[-50%] left-[-10%] w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-50%] right-[-10%] w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative z-10"
          >
            <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-light">
              I am <span className="text-cyan-400 font-medium">Shabana</span>, a passionate Frontend Developer and Computer Science graduate with a strong interest in creating modern, user-friendly, and visually engaging web experiences. I enjoy transforming ideas into responsive and interactive digital products while continuously learning new technologies and design trends.
            </p>
          </motion.div>
        </GlassCard>
      </div>
    </AnimatedSection>
  );
}
