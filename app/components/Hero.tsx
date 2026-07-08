"use client";

import { m as motion, type Transition } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Download, ArrowRight, FileText } from "lucide-react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

// SSR-disabled: Three.js only runs in the browser
const HeroScene = dynamic(() => import("./3d/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.3 } as Transition,
  },
};

const charVariants = {
  hidden: { opacity: 0, y: 50, rotate: 4 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      damping: 14,
      stiffness: 120,
    },
  },
};

export default function Hero() {
  const name = "Hi, I'm Shabana";

  // Mouse parallax motion values
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const textX = useSpring(useTransform(rawX, [-1, 1], [-18, 18]), {
    stiffness: 40,
    damping: 25,
  });
  const textY = useSpring(useTransform(rawY, [-1, 1], [-12, 12]), {
    stiffness: 40,
    damping: 25,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((e.clientY / window.innerHeight - 0.5) * -2);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── 3D Canvas Background ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <HeroScene />
      </div>

      {/* ── Gradient Overlay (bottom fade) ── */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(5,8,22,0.3) 0%, transparent 60%), linear-gradient(to bottom, transparent 50%, #050816 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Ambient corner glows ── */}
      <div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Text & Image Content (parallax layer) ── */}
      <motion.div
        style={{ x: textX, y: textY }}
        className="relative z-10 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
          className="relative w-56 h-56 md:w-80 md:h-80 flex-shrink-0 mb-6 md:mb-0"
        >
          {/* Subtle glow behind the image */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl animate-pulse" />

          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full h-full transition-all duration-500 z-10 group drop-shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:drop-shadow-[0_0_40px_rgba(139,92,246,0.6)]"
          >
            <Image
              src="/images/Shabu01.webp"
              alt="Shabana"
              fill
              sizes="(max-width: 768px) 224px, 320px"
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start flex-1 min-w-0">
          {/* Animated name — character by character */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="gradient-text text-[clamp(1.5rem,4.2vw,2.9rem)] font-semibold flex justify-center md:justify-start flex-nowrap whitespace-nowrap leading-none tracking-tight"
          >
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={charVariants}
                className={char === " " ? "w-[0.3em]" : "inline-block"}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Role subtitle */}
          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-2xl md:text-3xl text-white font-semibold tracking-wide"
          >
            Software Developer{" "}
            <span className="text-cyan-400">|</span>{" "}
            Frontend Developer
          </motion.h2>

          {/* Professional Summary */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.75, duration: 0.8, ease: "easeOut" }}
            className="mt-4 max-w-2xl text-base md:text-lg text-slate-300 font-light leading-8"
          >
            Building responsive, scalable, and user-friendly web applications using{" "}
            <span className="text-cyan-400 font-medium">
              React, Next.js, TypeScript
            </span>
            , and modern frontend technologies. Passionate about creating clean UI,
            seamless user experiences, and high-performance web applications.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8, ease: "easeOut" }}
            className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3"
          >
            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "JavaScript",
              "Python",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            {/* Primary */}
            <a
              href="#projects"
              id="hero-view-work-btn"
              className="group flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-3.5 font-semibold text-black text-sm transition-all duration-300 hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.55)]"
            >
              View My Work
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            {/* View Resume */}
            <a
              href="/resume/Shabana_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume in new tab"
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-3.5 font-semibold text-sm text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              <FileText size={17} className="text-cyan-400 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
              View Resume
            </a>

            {/* Secondary */}
            <a
              href="/resume/Shabana_Resume.pdf"
              download="Shabana_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-download-cv-btn"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-3.5 font-semibold text-sm text-white transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:scale-105"
            >
              <Download size={17} />
              Download CV
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-cyan-500/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
