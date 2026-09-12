"use client";

import { m as motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";
import { GraduationCap, MapPin, Award } from "lucide-react";

const educationDetails = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    stream: "Computer Science and Engineering with Minor in Biomedical Engineering",
    institution: "TKM Institute of Technology, Karuvellil, Kollam",
    score: "CGPA: 7.95/10 (2021 – 2025)",
    accent: "#06b6d4",
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    stream: "Science", // Usually assumed, but left optional
    institution: "TKM HSS Karikode, Kollam",
    score: "96.5% | Full A+ (2020 – 2021)",
    accent: "#8b5cf6",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    stream: "General",
    institution: "TKM HSS Karikode, Kollam",
    score: "98% | Full A+ (2019 – 2020)",
    accent: "#ec4899",
  },
];

export default function Education() {
  return (
    <AnimatedSection className="px-4 sm:px-6 py-20 sm:py-40 section-glow-cyan" id="education">
      <div className="mx-auto max-w-5xl">
        <AnimatedHeading className="mb-12 sm:mb-20 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          Education
        </AnimatedHeading>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {educationDetails.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                  }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#050816] md:left-1/2 md:-translate-x-1/2"
                  style={{ backgroundColor: edu.accent }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.6, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: edu.accent }}
                  />
                  <GraduationCap size={12} className="text-[#050816] relative z-20" />
                </div>

                {/* Card */}
                <div className="glass glass-hover rounded-2xl p-7 transition-all duration-300">
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full"
                    style={{ background: edu.accent }}
                  />

                  <div className="mb-4 flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <p
                      className="text-sm font-medium"
                      style={{ color: edu.accent }}
                    >
                      {edu.stream}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 mt-4 text-sm text-slate-400">
                    <div className="flex items-start gap-2">
                      <MapPin size={16} className="shrink-0 mt-0.5" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <Award size={16} className="shrink-0 text-yellow-400" />
                      <span className="font-semibold">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}