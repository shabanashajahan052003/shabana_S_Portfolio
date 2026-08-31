"use client";

import { m as motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedHeading from "./AnimatedHeading";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "UI Developer",
    company: "Valoriz Digital (Mozanta Technologies)",
    location: "Trivandrum",
    period: "April 2026 – July 2026",
    bullets: [
      <>Contributed to major live projects including <a href="https://www.magrabi.com/ae-en/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">MAGRABi UAE</a> (Leading Luxury Eyewear Retail Chain) and <a href="https://www.hotpackglobal.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Hotpack Global</a> (#1 Manufacturer of Packaging Products in Middle East).</>,
      "Developed responsive and interactive web interfaces using React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, and Tailwind CSS.",
      "Converted Figma designs into responsive, production-ready user interfaces with consistent layouts across desktop, tablet, and mobile devices.",
      "Built reusable and modular UI components following clean and maintainable frontend development practices.",
      "Implemented smooth scrolling, animations, transitions, hover effects, and interactive UI elements to improve user experience.",
      "Developed responsive layouts with attention to usability, accessibility, visual consistency, and cross-browser compatibility.",
      "Collaborated with UI/UX designers and developers to translate design requirements into functional web interfaces.",
      "Integrated frontend interfaces with APIs and implemented dynamic data rendering where required.",
      "Debugged and resolved frontend issues related to layout, responsiveness, functionality, and browser compatibility.",
      "Optimized frontend performance, responsiveness, and overall user experience.",
    ],
    accent: "#06b6d4",
  },
  {
    title: "Software Developer",
    company: "BlueRipples Technologies",
    location: "Trivandrum",
    period: "July 2025 – March 2026",
    bullets: [
      "Developed and maintained responsive web applications, including upcoming demo projects, using Angular, React.js, JavaScript, HTML5, and CSS3.",
      "Developed reusable UI components and responsive layouts for different screen sizes and devices.",
      "Integrated RESTful APIs with frontend applications to retrieve, process, and display dynamic application data.",
      "Implemented application features including CRUD operations, search, pagination, filtering, sorting, and dynamic data rendering.",
      "Implemented debouncing to optimize search functionality and reduce unnecessary API requests.",
      "Implemented lazy loading to improve application loading performance and responsiveness.",
      "Handled API responses, JSON data, validation, error handling, and frontend–backend communication.",
      "Performed debugging, testing, troubleshooting, and performance optimization to improve application reliability and user experience.",
      "Used Git and GitHub for version control, committing and pushing code changes during development.",
    ],
    accent: "#8b5cf6",
  },
  {
    title: "Python Django Full Stack Developer Intern",
    company: "Luminar Technolab",
    location: "Remote",
    period: "July 2025 – February 2026",
    bullets: [
      "Developed web applications using Python and Django following structured full-stack development practices.",
      "Worked with Django ORM, MySQL, REST APIs, and MVT architecture.",
      "Developed backend functionality including CRUD operations, API integration, data validation, and application workflows.",
      "Built responsive frontend interfaces using HTML, CSS, JavaScript, and Bootstrap.",
      "Integrated frontend components with backend APIs and implemented dynamic data-driven functionality.",
      "Performed debugging, testing, validation, error handling, and troubleshooting during application development.",
    ],
    accent: "#ec4899",
  },
];
export default function Experience() {
  return (
    <AnimatedSection className="px-6 py-40 section-glow-cyan" id="experience">
      <div className="mx-auto max-w-5xl">
        <AnimatedHeading className="mb-20 text-center text-5xl font-bold">
          Experience
        </AnimatedHeading>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
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
                <div className="glass glass-hover rounded-2xl p-7 transition-all duration-300">
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full"
                    style={{ background: exp.accent }}
                  />

                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <p
                        className="mt-1 text-sm font-medium"
                        style={{ color: exp.accent }}
                      >
                        {exp.company}
                        {exp.location ? ` • ${exp.location}` : ""}
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                      <Calendar size={11} />
                      {exp.period}
                    </span>
                  </div>

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
                    className="mt-4 flex items-center gap-2 text-xs font-medium"
                    style={{ color: exp.accent }}
                  >
                    <Briefcase size={12} />
                    Work Experience
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