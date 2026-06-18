"use client";

import { m as motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";
import GlassCard from "./ui/GlassCard";

const stories = [
  {
    icon: "📚",
    title: "Project Ganitham",
    description:
      "I worked as a Volunteer Mathematics Teacher, helping school students improve their understanding of mathematics through online classes. This experience shaped my ability to communicate complex concepts clearly and with patience.",
    accent: "#22c55e",
  },
  {
    icon: "💡",
    title: "IEDC Journey",
    description:
      "I actively participated in innovation and technology activities, supporting events and helping students understand emerging technologies like AI and ChatGPT. Being part of IEDC opened my eyes to the world of entrepreneurship and cutting-edge tech.",
    accent: "#f59e0b",
  },
  {
    icon: "🏀",
    title: "Basketball",
    description:
      "Secured Second Prize in the College Sports Basketball Competition. This experience taught me teamwork, discipline, and leadership — skills I carry into every collaborative project I work on.",
    accent: "#ec4899",
  },
];

export default function Story() {
  return (
    <AnimatedSection className="px-6 py-40 section-glow-cyan">
      <div className="mx-auto max-w-5xl" id="story">
        <AnimatedHeading className="mb-20 text-center text-5xl font-bold">
          My Story
        </AnimatedHeading>

        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story, i) => (
            <GlassCard key={story.title} delay={i * 0.12} hover className="p-8">
              {/* Floating icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4 + i * 0.5,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                className="mb-6 text-5xl"
                aria-hidden="true"
              >
                {story.icon}
              </motion.div>

              {/* Accent underline */}
              <div
                className="mb-4 h-[2px] w-12 rounded-full"
                style={{ background: story.accent }}
              />

              <h3 className="mb-4 text-xl font-bold text-white">
                {story.title}
              </h3>

              <p className="text-sm leading-8 text-slate-400">
                {story.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}