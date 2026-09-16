export type ProjectCategory = "Professional" | "Freelance" | "Personal Project";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  features: string[];
  category: ProjectCategory;
  company?: string;
}

export const projects: Project[] = [
  // ── Professional Experience Projects (Valoriz Digital) ──
  {
    title: "MAGRABi UAE",
    description:
      "Leading luxury eyewear retail chain in the UAE — developed responsive and interactive web interfaces for the e-commerce platform.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "https://www.magrabi.com/ae-en/",
    features: [
      "Developed responsive and interactive web interfaces for the luxury eyewear retail platform.",
      "Converted Figma designs into production-ready user interfaces across devices.",
      "Implemented smooth scrolling, animations, and interactive UI elements.",
      "Integrated frontend interfaces with dynamic data rendering APIs.",
    ],
    category: "Professional",
    company: "Valoriz Digital",
  },
  {
    title: "Hotpack Global",
    description:
      "#1 manufacturer of packaging products in the Middle East — built responsive UI components for their global web platform.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
    live: "https://www.hotpackglobal.com/",
    features: [
      "Developed responsive UI components for the leading manufacturer of packaging products.",
      "Ensured cross-browser compatibility and accessible layouts.",
      "Optimized frontend performance, responsiveness, and overall user experience.",
      "Collaborated with UI/UX designers to translate requirements into functional interfaces.",
    ],
    category: "Professional",
    company: "Valoriz Digital",
  },

  // ── Freelance Projects (Zavry) ──
  {
    title: "Mayura Paints & Decorative",
    description:
      "Client website for a paints and decorative products business — designed and developed a professional online presence.",
    tech: ["Next.js", "Tailwind CSS"],
    github: "#",
    live: "https://mayurapaints.com/",
    features: [
      "Designed and developed a complete business website from scratch.",
      "Implemented responsive layouts optimized for all device sizes.",
      "Built product showcase sections with clean, user-friendly navigation.",
    ],
    category: "Freelance",
    company: "Zavry",
  },
  {
    title: "Zavry",
    description:
      "Corporate website for Zavry — a modern, professional web presence showcasing the company's services and portfolio.",
    tech: ["Next.js", "Tailwind CSS"],
    github: "#",
    live: "https://www.zavry.in/",
    features: [
      "Built a professional corporate website with modern design aesthetics.",
      "Implemented smooth animations and responsive layouts.",
      "Optimized for performance and search engine visibility.",
    ],
    category: "Freelance",
    company: "Zavry",
  },
  {
    title: "Pathiramanal Houseboats",
    description:
      "Client website for a houseboat tourism business in Kerala — created an engaging and visually appealing booking platform.",
    tech: ["Next.js", "Tailwind CSS"],
    github: "#",
    live: "https://www.pathiramanalhouseboat.com/",
    features: [
      "Developed a visually appealing tourism website with immersive design.",
      "Built responsive booking-oriented layouts for desktop and mobile.",
      "Implemented SEO-friendly structure and optimized page load performance.",
    ],
    category: "Freelance",
    company: "Zavry",
  },

  // ── Personal / Academic Projects ──
  {
    title: "AURA | Anti-Ragging Solution Platform",
    description:
      "Full-stack complaint management system with secure authentication and role-based access control.",
    tech: ["React", "Node.js", "MySQL"],
    github: "#",
    live: "https://antiragging-solution-website-jjep.vercel.app/",
    features: [
      "Full-stack complaint management platform",
      "Secure role-based authentication system",
      "Responsive React dashboard and UI",
      "Node.js APIs for real-time data handling",
      "Efficient complaint tracking and reporting",
    ],
    category: "Personal Project",
  },
  {
    title: "Smart Resume Analyzer",
    description:
      "Resume parsing and skill analysis platform with intelligent recommendations.",
    tech: ["Python", "Django", "PyPDF2", "MySQL"],
    github: "#",
    live: "https://smart-resume-analyzer-ootc.onrender.com/",
    features: [
      "Extracts and analyzes resume data from PDFs",
      "Detects skills using keyword-based matching",
      "Scores resumes based on identified skills",
      "Suggests missing skills and suitable job roles",
      "Built with Django authentication and file upload",
    ],
    category: "Personal Project",
  },

  {
    title: "Network Portfolio — NOC Toolkit",
    description:
      "Personal technical project featuring a network-engineering portfolio with a NOC Toolkit and practical networking resources and tools.",
    tech: ["React", "Next.js", "TypeScript"],
    github: "#",
    live: "https://network-portfolio-psi.vercel.app/",
    features: [
      "Interactive NOC Toolkit with practical networking utilities",
      "Comprehensive networking resource library",
      "Clean, professional portfolio layout for network engineering concepts",
      "Responsive design optimized for desktop and mobile access",
    ],
    category: "Personal Project",
  },
];