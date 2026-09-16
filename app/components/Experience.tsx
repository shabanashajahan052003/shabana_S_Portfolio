"use client";

import { m as motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "BlueRipples Technologies",
    location: "Trivandrum",
    period: "Jun 2025 – Apr 2026",
    type: "Full-time",
    bullets: [
      "Developed and maintained responsive web applications using JavaScript, React.js, HTML5, CSS3, and modern software development practices.",
      "Integrated RESTful APIs to connect frontend applications with backend services and handle dynamic application data.",
      "Implemented CRUD operations, search, pagination, filtering, and sorting for data-driven application features.",
      "Implemented debouncing and lazy loading to reduce unnecessary API requests and improve application performance.",
      "Worked on frontend-backend integration, JSON data handling, API responses, data validation, and dynamic application workflows.",
      "Developed and maintained backend functionality using Python, Django, REST APIs, and database operations.",
      "Worked with SQL databases including MySQL, PostgreSQL, and SQLite for application data management.",
      "Implemented backend functionality including CRUD operations, API integration, validation, error handling, and application logic.",
      "Performed debugging, testing, troubleshooting, and performance optimization.",
      "Used Git and GitHub for version control and collaborative development.",
      "Collaborated with developers throughout the Software Development Life Cycle (SDLC).",
    ],
    accent: "#06b6d4",
  },
  {
    title: "Web Developer — Freelance",
    company: "Zavry",
    location: "Remote",
    period: "Aug 2025 – Jul 2026",
    type: "Freelance",
    bullets: [
      "Designed, developed, and delivered multiple client-facing websites using React.js, Next.js, and modern frontend technologies.",
      "Built and launched Mayura Paints & Decorative, Zavry corporate website, and Pathiramanal Houseboats — all live production sites.",
      "Implemented responsive layouts, SEO best practices, and optimized page performance for each client project.",
      "Managed end-to-end project delivery including client communication, design implementation, deployment, and post-launch support.",
    ],
    accent: "#10b981",
  },
  {
    title: "UI Developer",
    company: "Valoriz Digital",
    location: "Trivandrum",
    period: "May 2026 – Jul 2026",
    type: "Full-time",
    bullets: [
      "Developed responsive and user-focused web interfaces using HTML5, CSS3, JavaScript, React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Converted Figma designs into pixel-accurate, responsive user interfaces.",
      "Built reusable and modular UI components following clean and maintainable frontend development practices.",
      "Developed responsive layouts for desktop, tablet, and mobile devices.",
      "Implemented interactive UI elements, animations, transitions, hover effects, and smooth scrolling.",
      "Collaborated with UI/UX designers and developers to translate design concepts into functional interfaces.",
      "Integrated frontend interfaces with REST APIs and handled dynamic data rendering.",
      "Debugged and resolved frontend issues related to layout, responsiveness, functionality, and browser compatibility.",
      "Optimized frontend performance and overall user experience.",
    ],
    accent: "#8b5cf6",
  },
];

export default function Experience() {
  return (
    <AnimatedSection className="px-4 sm:px-6 py-20 sm:py-40 section-glow-cyan" id="experience">
      <div className="mx-auto max-w-5xl">
        <AnimatedHeading className="mb-12 sm:mb-20 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          Experience
        </AnimatedHeading>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative pl-16 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
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
                <div className="glass glass-hover rounded-2xl p-6 sm:p-7 transition-all duration-300 relative overflow-hidden">
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full"
                    style={{ background: exp.accent }}
                  />

                  {/* Header */}
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <p
                        className="mt-1 text-sm font-medium"
                        style={{ color: exp.accent }}
                      >
                        {exp.company}
                      </p>
                      <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <MapPin size={10} />
                          {exp.location}
                        </span>
                        <span
                          className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                          style={{
                            color: exp.accent,
                            background: `${exp.accent}18`,
                            border: `1px solid ${exp.accent}30`,
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400 whitespace-nowrap">
                      <Calendar size={11} />
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet list */}
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
                    className="mt-5 flex items-center gap-2 text-xs font-medium"
                    style={{ color: exp.accent }}
                  >
                    <Briefcase size={12} />
                    {exp.type === "Freelance" ? "Freelance Experience" : "Work Experience"}
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