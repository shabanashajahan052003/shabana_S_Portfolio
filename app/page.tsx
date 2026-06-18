import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const About = dynamic(() => import("./components/About"));
const Journey = dynamic(() => import("./components/Journey"));
const Story = dynamic(() => import("./components/Story"));
const Education = dynamic(() => import("./components/Education"));
const Certifications = dynamic(() => import("./components/Certifications"));
const Skills = dynamic(() => import("./components/Skills"));
const Hobbies = dynamic(() => import("./components/Hobbies"));
const Projects = dynamic(() => import("./components/Projects"));
const Experience = dynamic(() => import("./components/Experience"));
const Contact = dynamic(() => import("./components/Contact"));

export default function Home() {
  return (
    <>
      {/* Fixed navigation — renders above all content */}
      <Navbar />

      {/* Page sections */}
      <main className="bg-black">
        <Hero />
        <About />
        <Journey />
        <Story />
        <Education />
        <Certifications />
        <Skills />
        <Hobbies />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}