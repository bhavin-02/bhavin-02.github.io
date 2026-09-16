import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { About } from '../components/About';
import { PageTransition } from '../components/common/primitives';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { ModernNavigation } from '../components/ModernNavigation';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

export function HomePage() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // The bar stays out of the way until you actually start scrolling.
  const barOpacity = useTransform(scrollYProgress, [0, 0.015], [0, 1]);

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <PageTransition>
      <div className="grain relative min-h-screen bg-background">
        {/* scroll progress */}
        <motion.div
          style={{ scaleX, opacity: barOpacity }}
          className="fixed left-0 top-0 z-60 h-0.75 w-full origin-left gradient-primary shadow-[0_0_18px_rgba(212,175,106,0.65)]"
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
    </PageTransition>
  );
}
