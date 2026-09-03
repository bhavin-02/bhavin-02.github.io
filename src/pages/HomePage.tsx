import { motion, useScroll, useSpring } from "motion/react";
import { useNavigate } from "react-router-dom";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { ModernNavigation } from "../components/ModernNavigation";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export function HomePage() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left gradient-primary"
      />
      <ModernNavigation />
      <Hero />
      <About />
      <Experience />
      <Projects onProjectClick={handleProjectClick} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
