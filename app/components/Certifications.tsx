"use client";

import { m as motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";
import GlassCard from "./ui/GlassCard";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Fundamentals of Artificial Intelligence",
    issuer: "NPTEL",
    icon: "🤖",
    color: "#8b5cf6",
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    icon: "🧠",
    color: "#06b6d4",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    icon: "🐍",
    color: "#22c55e",
  },
  {
    title: "React (Basics)",
    issuer: "HackerRank",
    icon: "⚛️",
    color: "#61dafb",
  },
  {
    title: "Python Django Full Stack Development",
    issuer: "Luminar Technolab",
    icon: "💻",
    color: "#f59e0b",
  },
];

export default function Certifications() {
  return (
    <AnimatedSection className="px-6 py-24 md:py-40 section-glow-purple">
      <div className="mx-auto max-w-5xl">
        <AnimatedHeading className="mb-12 md:mb-20 text-center text-[clamp(1.75rem,7vw,3rem)] md:text-5xl font-bold leading-tight">
          Learning & Certifications
        </AnimatedHeading>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <GlassCard key={cert.title} delay={i * 0.1} hover className="p-5 md:p-7">
              <div className="flex items-start gap-4 md:gap-5">
                {/* Icon circle */}
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xl"
                  style={{
                    background: `${cert.color}18`,
                    border: `1px solid ${cert.color}35`,
                    boxShadow: `0 0 16px ${cert.color}20`,
                  }}
                >
                  {cert.icon}
                </div>

                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 w-full">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-semibold leading-snug text-white">
                      {cert.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <Award aria-hidden="true" size={13} style={{ color: cert.color }} className="flex-shrink-0" />
                      <span
                        className="text-sm font-medium"
                        style={{ color: cert.color }}
                      >
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  {/* Shimmer badge */}
                  <motion.div
                    aria-hidden="true"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.2 }}
                    className="self-start flex-shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400"
                  >
                    Certified
                  </motion.div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}