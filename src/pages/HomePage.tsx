import { useNavigate } from "react-router-dom";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Hero } from "../components/Hero";
import { ModernNavigation } from "../components/ModernNavigation";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

export function HomePage() {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="bg-background relative min-h-screen">
      <ModernNavigation />
      <Hero />
      <About />
      <Experience />
      <Projects onProjectClick={handleProjectClick} />
      <Skills />
      <Contact />
    </div>
  );
}
