"use client";

import { m as motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "BlueRipples Technologies",
    location: "Trivandrum",
    period: "Jun 2025 – May 2026",
    bullets: [
      "Developed responsive and high-performance web applications using React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, SCSS, and Tailwind CSS.",
      "Translated Figma designs into pixel-perfect, responsive, and cross-browser compatible user interfaces while ensuring an excellent user experience.",
      "Built reusable, modular UI components and integrated REST APIs to deliver scalable, maintainable, and dynamic frontend applications.",
      "Improved application performance through lazy loading, code splitting, pagination, debouncing, and frontend optimization techniques.",
      "Collaborated with UI/UX designers and backend developers using Git and Agile methodologies to deliver production-ready software on time.",
    ],
    accent: "#06b6d4",
  },
];
export default function Experience() {
  return (
    <AnimatedSection className="px-6 py-40 section-glow-cyan" id="experience">
      <div className="mx-auto max-w-5xl">
        <AnimatedHeading className="mb-20 text-center text-5xl font-bold">
          Experience
        </AnimatedHeading>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
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
                  className="absolute left-4 top-6 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#050816] md:left-1/2 md:-translate-x-1/2"
                  style={{ backgroundColor: exp.accent }}
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
                    style={{ backgroundColor: exp.accent }}
                  />
                </div>

                {/* Card */}
                <div className="glass glass-hover rounded-2xl p-7 transition-all duration-300">
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full"
                    style={{ background: exp.accent }}
                  />

                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <p
                        className="mt-1 text-sm font-medium"
                        style={{ color: exp.accent }}
                      >
                        {exp.company}
                        {exp.location ? ` • ${exp.location}` : ""}
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                      <Calendar size={11} />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-1 space-y-2 list-none">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm leading-6 text-slate-400">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: exp.accent }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom icon */}
                  <div
                    className="mt-4 flex items-center gap-2 text-xs font-medium"
                    style={{ color: exp.accent }}
                  >
                    <Briefcase size={12} />
                    Work Experience
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