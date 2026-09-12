"use client";

import { m as motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";
import GlassCard from "./ui/GlassCard";
import { Film, Music, Palette, Scissors, Plane, Layout, Layers, Image as ImageIcon } from "lucide-react";
import { FaBasketballBall } from "react-icons/fa";
import { GiShuttlecock, GiTabletopPlayers } from "react-icons/gi";

// Using Lucide icons as fallbacks for games since react-icons might be tricky to guess without searching
import { Dices } from "lucide-react";

const hobbies = [
  { label: "Badminton", icon: GiShuttlecock, color: "#22c55e" },
  { label: "Basketball", icon: FaBasketballBall, color: "#f97316" },
  { label: "Carroms", icon: GiTabletopPlayers, color: "#eab308" },
  { label: "Ludo", icon: Dices, color: "#ef4444" },
  { label: "Movies", icon: Film, color: "#8b5cf6" },
  { label: "Music", icon: Music, color: "#ec4899" },
  { label: "Painting", icon: Palette, color: "#06b6d4" },
  { label: "Craft Work", icon: Scissors, color: "#14b8a6" },
  { label: "Traveling", icon: Plane, color: "#3b82f6" },
  { label: "UI/UX Design", icon: Layout, color: "#8b5cf6" },
  { label: "Adobe XD", icon: Layers, color: "#ff61f6" },
  { label: "Photoshop", icon: ImageIcon, color: "#31a8ff" },
];

export default function Hobbies() {
  return (
    <AnimatedSection className="px-4 sm:px-6 py-20 sm:py-40 section-glow-purple" id="hobbies">
      <div className="mx-auto max-w-6xl">
        <AnimatedHeading className="mb-12 sm:mb-20 text-center text-3xl sm:text-4xl md:text-5xl font-bold">
          Hobbies & Interests
        </AnimatedHeading>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {hobbies.map((hobby, i) => {
            const Icon = hobby.icon;
            return (
              <motion.div
                key={hobby.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <GlassCard
                  hover
                  delay={0}
                  className="flex flex-col items-center justify-center p-6 text-center h-full aspect-square group cursor-default transition-all duration-300"
                >
                  <motion.div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110"
                    style={{
                      backgroundColor: `${hobby.color}15`,
                      border: `1px solid ${hobby.color}40`,
                      boxShadow: `0 4px 20px ${hobby.color}20`,
                    }}
                  >
                    <Icon size={22} style={{ color: hobby.color }} />
                  </motion.div>
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                    {hobby.label}
                  </span>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
