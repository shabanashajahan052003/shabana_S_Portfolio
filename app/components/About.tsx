"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";
import GlassCard from "./ui/GlassCard";

export default function About() {
  return (
    <AnimatedSection className="px-6 py-40 section-glow-purple">
      <div className="mx-auto max-w-4xl" id="about">
        <AnimatedHeading className="mb-12 text-center text-5xl font-bold">
          About Me
        </AnimatedHeading>

        <GlassCard delay={0.2} hover tilt className="p-10 md:p-12 text-center relative overflow-hidden">
          {/* Decorative background glow */}
          <div
            className="absolute top-[-50%] left-[-10%] w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-50%] right-[-10%] w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative z-10"
          >
            <p className="text-lg md:text-xl leading-relaxed text-slate-300 font-light">
              <span className="text-cyan-400 font-medium">Junior Software Developer</span> with hands-on experience building and maintaining web applications, responsive user interfaces, backend services, and API-driven applications using React.js, Angular, Next.js, TypeScript, JavaScript, Python, Django, Node.js, REST APIs, and SQL databases. Experienced in developing reusable frontend components, integrating REST APIs, implementing CRUD operations, search, pagination, filtering, sorting, debouncing, and lazy loading, as well as converting Figma designs into production-ready interfaces. Hands-on exposure to AI and Machine Learning using Python, OpenCV, BERT, NumPy, and Pandas, with foundational cloud knowledge in AWS EC2, S3, and IAM. Strong understanding of debugging, testing, error handling, Git/GitHub, database operations, performance optimization, and software development lifecycle practices. B.Tech graduate in Computer Science and Engineering, currently based in Dubai, UAE and available for immediate joining.
            </p>
          </motion.div>
        </GlassCard>
      </div>
    </AnimatedSection>
  );
}
