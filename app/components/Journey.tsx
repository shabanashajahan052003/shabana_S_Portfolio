"use client";

import { m as motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";

const journey = [
  {
    icon: "🎓",
    title: "Computer Science Student",
    description: "TKM Institute of Technology",
    category: "Education",
  },
  {
    icon: "📚",
    title: "Volunteer Mathematics Teacher",
    description: "Project Ganitham",
    category: "Volunteering",
  },
  {
    icon: "💡",
    title: "IEDC Contributor",
    description: "Innovation & AI Awareness Activities",
    category: "Innovation",
  },
  {
    icon: "🏀",
    title: "Basketball Player",
    description: "2nd Prize — College Sports Competition",
    category: "Sports",
  },
  {
    icon: "🤖",
    title: "Fundamentals of Artificial Intelligence",
    description: "NPTEL Certification",
    category: "Certification",
  },
  {
    icon: "🧠",
    title: "Introduction to Machine Learning",
    description: "NPTEL Certification",
    category: "Certification",
  },
  {
    icon: "💻",
    title: "Python Django Full Stack Trainee",
    description: "Luminar Technolab, Trivandrum",
    category: "Training",
  },
  {
    icon: "📊",
    title: "Data Science Intern",
    description: "Quest Innovative Solutions",
    category: "Internship",
  },
  {
    icon: "⚙️",
    title: "Software Developer",
    description: "BlueRipples Technologies",
    category: "Experience",
  },
  {
  icon: "🎨",
  title: "UI Developer",
  description: "Valoriz Digital (Mozanta Technologies)",
  category: "Experience",
},
 
];

const categoryColors: Record<string, string> = {
  Education: "#06b6d4",
  Volunteering: "#22c55e",
  Innovation: "#f59e0b",
  Sports: "#ec4899",
  Certification: "#8b5cf6",
  Training: "#06b6d4",
  Internship: "#a78bfa",
};

export default function Journey() {
  return (
    <AnimatedSection className="px-6 py-40 section-glow-purple">
      <div className="mx-auto max-w-4xl">
        <AnimatedHeading className="mb-20 text-center text-5xl font-bold">
          My Journey
        </AnimatedHeading>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-6">
            {journey.map((item, i) => {
              const color = categoryColors[item.category] ?? "#06b6d4";
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-3%" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative pl-20"
                >
                  {/* Step number dot */}
                  <div
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm font-bold"
                    style={{
                      background: `radial-gradient(circle, ${color}22 0%, #050816 100%)`,
                      color,
                      borderColor: `${color}40`,
                      boxShadow: `0 0 12px ${color}30`,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    className="glass glass-hover group flex items-start gap-4 rounded-xl p-5 transition-all duration-300"
                  >
                    {/* Icon */}
                    <span className="text-2xl leading-none mt-0.5 transition-transform duration-200 group-hover:scale-110">
                      {item.icon}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <span
                          className="rounded-full px-2 py-0.5 text-xs font-medium"
                          style={{
                            color,
                            background: `${color}18`,
                            border: `1px solid ${color}30`,
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}