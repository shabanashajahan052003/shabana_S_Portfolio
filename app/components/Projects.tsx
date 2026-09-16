"use client";

import { projects, type ProjectCategory } from "../data/projects";
import { m as motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";
import GlassCard from "./ui/GlassCard";
import { ExternalLink, Building2, Briefcase, User } from "lucide-react";

/* ── Category configuration ── */
const categoryConfig: Record<
  ProjectCategory,
  { label: string; heading: string; accent: string; icon: typeof Building2 }
> = {
  Professional: {
    label: "Professional",
    heading: "Professional Experience Projects",
    accent: "#8b5cf6",
    icon: Building2,
  },
  Freelance: {
    label: "Freelance",
    heading: "Freelance Projects — Zavry",
    accent: "#10b981",
    icon: Briefcase,
  },
  "Personal Project": {
    label: "Personal Project",
    heading: "Personal / Academic Projects",
    accent: "#06b6d4",
    icon: User,
  },
};

const categoryOrder: ProjectCategory[] = [
  "Professional",
  "Freelance",
  "Personal Project",
];

export default function Projects() {
  /* Group projects by category */
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    config: categoryConfig[cat],
    items: projects.filter((p) => p.category === cat),
  }));

  return (
    <AnimatedSection
      className="px-4 sm:px-6 py-20 sm:py-40 section-glow-purple"
      id="projects"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedHeading className="mb-12 sm:mb-20 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          Featured Projects
        </AnimatedHeading>

        <div className="space-y-16 sm:space-y-20">
          {grouped.map((group) => {
            const Icon = group.config.icon;
            return (
              <div key={group.category}>
                {/* Category heading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mb-8 sm:mb-10 flex items-center gap-3"
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{
                      background: `${group.config.accent}18`,
                      border: `1px solid ${group.config.accent}30`,
                    }}
                  >
                    <Icon size={16} style={{ color: group.config.accent }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold"
                      style={{ color: group.config.accent }}
                    >
                      {group.config.heading}
                    </h3>
                    {group.items[0]?.company && (
                      <p className="text-xs text-slate-500 mt-0.5">
                        {group.items[0].company}
                      </p>
                    )}
                  </div>
                  {/* Decorative line */}
                  <div
                    className="flex-1 h-px ml-3 opacity-20"
                    style={{
                      background: `linear-gradient(to right, ${group.config.accent}, transparent)`,
                    }}
                  />
                </motion.div>

                {/* Project cards grid */}
                <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-5%" }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <GlassCard
                        tilt
                        hover
                        delay={0}
                        className="group relative flex h-full flex-col overflow-hidden p-0"
                      >
                        {/* Top accent line */}
                        <div
                          className="h-[2px] w-full opacity-80"
                          style={{
                            background: `linear-gradient(to right, ${group.config.accent}, ${group.config.accent}60, transparent)`,
                          }}
                        />

                        {/* Card content */}
                        <div className="flex flex-col flex-1 p-6 sm:p-7">
                          {/* Category badge */}
                          <div className="mb-4 flex items-center justify-between">
                            <span
                              className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                              style={{
                                color: group.config.accent,
                                background: `${group.config.accent}15`,
                                border: `1px solid ${group.config.accent}25`,
                              }}
                            >
                              {group.config.label}
                            </span>
                            {project.company && (
                              <span className="text-[10px] text-slate-600 font-medium">
                                {project.company}
                              </span>
                            )}
                          </div>

                          {/* Title */}
                          <h3 className="mb-3 text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors duration-300">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="mb-5 flex-1 text-sm leading-7 text-slate-400">
                            {project.description}
                          </p>

                          {/* Tech tags */}
                          <div className="mb-5 flex flex-wrap gap-1.5">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-colors duration-200"
                                style={{
                                  color: `${group.config.accent}`,
                                  borderColor: `${group.config.accent}25`,
                                  background: `${group.config.accent}08`,
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Features */}
                          <ul className="mb-6 flex flex-col gap-1.5">
                            {project.features?.slice(0, 3).map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs text-slate-400"
                              >
                                <span
                                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                                  style={{
                                    backgroundColor: group.config.accent,
                                  }}
                                />
                                <span className="leading-snug">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Visit button */}
                          {project.live && project.live !== "#" ? (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-300 hover:scale-[1.02]"
                              style={{
                                color: group.config.accent,
                                borderColor: `${group.config.accent}30`,
                                background: `${group.config.accent}08`,
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `${group.config.accent}60`;
                                e.currentTarget.style.background = `${group.config.accent}18`;
                                e.currentTarget.style.boxShadow = `0 0 20px ${group.config.accent}20`;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = `${group.config.accent}30`;
                                e.currentTarget.style.background = `${group.config.accent}08`;
                                e.currentTarget.style.boxShadow = "none";
                              }}
                            >
                              <ExternalLink size={13} />
                              Visit Website
                            </a>
                          ) : (
                            <div
                              className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/8 bg-white/3 px-4 py-2.5 text-xs font-medium text-slate-600 cursor-default"
                            >
                              Demo Not Available
                            </div>
                          )}
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}