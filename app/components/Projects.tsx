"use client";

import { projects } from "../data/projects";
import { m as motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";
import GlassCard from "./ui/GlassCard";
import { ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <AnimatedSection className="px-6 py-40 section-glow-purple" id="projects">
      <div className="mx-auto max-w-7xl">
        <AnimatedHeading className="mb-20 text-center text-5xl font-bold">
          Featured Projects
        </AnimatedHeading>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
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
                <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-80" />

                {/* Card content */}
                <div className="flex flex-col flex-1 p-7">
                  {/* Number badge + sparkle */}
                  <div className="mb-5 flex items-center justify-between">
                    <span className="gradient-text text-5xl font-black leading-none opacity-30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Sparkles
                      size={18}
                      className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mb-7 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-500/25 bg-cyan-500/8 px-3 py-1 text-xs font-medium text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-${index + 1}-github-btn`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-white/25 hover:text-white hover:bg-white/10"
                    >
                      <FaGithub size={15} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-${index + 1}-live-btn`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-cyan-400 hover:shadow-[0_0_16px_rgba(6,182,212,0.4)]"
                    >
                      <ExternalLink size={15} />
                      Live
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}