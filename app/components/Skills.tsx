"use client";

import { m as motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiSass,
  SiPython,
  SiDjango,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { Network, Brain, MessageSquare, Users, Star, Mic, Database, Cloud } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type AnyIcon = IconType | LucideIcon;

interface Skill {
  label: string;
  Icon: AnyIcon;
  color?: string;
}

const technicalSkills: Skill[] = [
  { label: "HTML5 & CSS3", Icon: SiHtml5, color: "#e34f26" },
  { label: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { label: "React.js", Icon: SiReact, color: "#61dafb" },
  { label: "Next.js", Icon: SiNextdotjs, color: "#e2e8f0" },
  { label: "Angular", Icon: SiAngular, color: "#dd0031" },
  { label: "Tailwind CSS", Icon: SiTailwindcss, color: "#06b6d4" },
  { label: "Python", Icon: SiPython, color: "#3776ab" },
  { label: "Django", Icon: SiDjango, color: "#44b78b" },
  { label: "Git / GitHub", Icon: SiGit, color: "#f05032" },
];

const databaseSkills: Skill[] = [
  { label: "MySQL", Icon: Database },
  { label: "PostgreSQL", Icon: Database },
  { label: "SQLite", Icon: Database },
  { label: "Django ORM", Icon: Database },
  { label: "REST APIs", Icon: Network },
];

const aiCloudSkills: Skill[] = [
  { label: "NumPy / Pandas", Icon: Brain },
  { label: "OpenCV / Matplotlib", Icon: Brain },
  { label: "BERT / NLP", Icon: Brain },
  { label: "AWS EC2 / S3", Icon: Cloud },
];

function SkillPill({
  label,
  Icon,
  color,
  colorized,
  index,
}: Skill & { colorized?: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 120,
        delay: index * 0.04,
      }}
      whileHover={{ scale: 1.08, y: -3 }}
      className="group flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:shadow-[0_0_16px_rgba(6,182,212,0.2)] cursor-default"
    >
      <Icon
        size={16}
        style={colorized && color ? { color } : { color: "#06b6d4" }}
      />
      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
        {label}
      </span>
    </motion.div>
  );
}

function SkillsGroup({
  title,
  skills,
  colorized = false,
}: {
  title: string;
  skills: Skill[];
  colorized?: boolean;
}) {
  return (
    <div className="mb-16">
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
      >
        {title}
      </motion.h3>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <SkillPill key={skill.label} {...skill} colorized={colorized} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <AnimatedSection className="px-4 sm:px-6 py-20 sm:py-40 section-glow-cyan" id="skills">
      <div className="mx-auto max-w-6xl">
        <AnimatedHeading className="mb-12 sm:mb-20 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          Skills
        </AnimatedHeading>

        <SkillsGroup title="Core Technologies" skills={technicalSkills} colorized />
        <SkillsGroup title="Databases & APIs" skills={databaseSkills} />
        <SkillsGroup title="AI, Machine Learning & Cloud" skills={aiCloudSkills} />
      </div>
    </AnimatedSection>
  );
}