"use client";

import { m as motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[#050816] py-14 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Background ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-96 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.3) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Logo */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gradient-text text-3xl font-bold"
        >
          Shabana
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-sm text-slate-500"
        >
          FrontEnd developer| Software developer
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-7 flex justify-center gap-5"
        >
          <a
            href="https://github.com/shabanashajahan052003"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_14px_rgba(6,182,212,0.3)]"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/shabana-ss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_14px_rgba(6,182,212,0.3)]"
          >
            <FaLinkedin size={18} />
          </a>
        </motion.div>

        {/* Divider */}
        <div className="my-8 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Tech stack credit */}
        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs text-slate-600"
        >
          Built with Next.js, Three.js, React Three Fiber & Framer Motion
        </motion.p> */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2 text-xs text-slate-700"
        >
          © {new Date().getFullYear()} Shabana. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}