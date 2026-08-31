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

        <GlassCard delay={0.2} hover tilt className="p-8 md:p-12 relative overflow-hidden">
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

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl animate-pulse" />
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative w-full h-full transition-all duration-500 z-10 group drop-shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:drop-shadow-[0_0_40px_rgba(139,92,246,0.6)]"
              >
                <Image
                  src="/images/Shabu011.png"
                  alt="Shabana"
                  fill
                  sizes="(max-width: 768px) 500px, 500px"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 text-center md:text-left"
            >
              <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-light">
                <span className="text-cyan-400 font-medium">Junior Software Developer</span> with hands-on experience building dynamic web applications and responsive interfaces using React, Next.js, Python, and Django. Skilled in frontend performance optimization, REST API integrations, and translating Figma designs into production-ready code. Passionate about applying AI and Machine Learning to create intelligent, user-centric digital experiences.
              </p>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </AnimatedSection>
  );
}
