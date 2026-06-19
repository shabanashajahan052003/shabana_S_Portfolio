"use client";

import { m as motion } from "framer-motion";
import { Mail, MapPin, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";

const contactLinks = [
  {
    href: "mailto:shabanashajahan052003@gmail.com",
    icon: Mail,
    label: "Email Me",
    sublabel: "shabanashajahan052003@gmail.com",
    color: "#06b6d4",
    external: false,
  },
  {
    href: "https://github.com/shabanashajahan052003",
    icon: FaGithub,
    label: "GitHub",
    sublabel: "github.com/shabanashajahan052003",
    color: "#e2e8f0",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/shabana-ss",
    icon: FaLinkedin,
    label: "LinkedIn",
    sublabel: "linkedin.com/in/shabana-ss",
    color: "#0a66c2",
    external: true,
  },
];

export default function Contact() {
  return (
    <AnimatedSection
      className="px-6 py-40 section-glow-cyan"
      id="contact"
    >
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedHeading className="mb-6 text-5xl font-bold">
          Let&apos;s Connect
        </AnimatedHeading>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 text-base leading-8 text-slate-400 max-w-xl mx-auto"
        >
          I&apos;m always interested in learning, collaborating and building
          meaningful digital experiences. Let&apos;s create something great together.
        </motion.p>

        {/* Contact link cards */}
        <div className="mb-8 flex flex-col gap-4">
          {contactLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group flex items-center gap-5 rounded-2xl border border-white/8 bg-white/4 px-7 py-5 backdrop-blur-xl text-left transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/8 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]"
                id={`contact-${item.label.toLowerCase().replace(/\s+/g, '-')}-link`}
              >
                {/* Icon bubble */}
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    boxShadow: `0 0 16px ${item.color}20`,
                  }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500 truncate">
                    {item.sublabel}
                  </p>
                </div>

                {/* Arrow indicator */}
                <motion.span
                  className="text-slate-600 group-hover:text-cyan-400 transition-colors"
                  animate={{ x: 0 }}
                  whileHover={{ x: 3 }}
                >
                  →
                </motion.span>
              </motion.a>
            );
          })}

          {/* Location (non-clickable) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-5 rounded-2xl border border-white/8 bg-white/4 px-7 py-5 backdrop-blur-xl text-left"
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-pink-500/15 border border-pink-500/30">
              <MapPin size={20} className="text-pink-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Location</p>
              <p className="mt-0.5 text-xs text-slate-500">
                Kollam, Kerala, India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Resume download CTA */}
        <motion.a
          href="/resume/Shabana_Resume.pdf"
          download="Shabana_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.03 }}
          id="contact-download-resume-btn"
          className="glow-pulse inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-5 text-base font-bold text-white transition-all duration-300 hover:from-cyan-400 hover:to-purple-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
        >
          <Download size={20} />
          Download Resume
        </motion.a>
      </div>
    </AnimatedSection>
  );
}