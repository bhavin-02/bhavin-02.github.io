import { useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { ModernNavigation } from "./components/ModernNavigation";
import { ProjectDetail } from "./components/ProjectDetail";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import SmoothScroll from "./components/SmoothScroll";
import { getProjectById } from "./data/projectsData";

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  const selectedProject = selectedProjectId
    ? getProjectById(selectedProjectId)
    : null;

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        onBack={() => setSelectedProjectId(null)}
      />
    );
  }

  return (
    <div className="bg-background relative min-h-screen">
      <ModernNavigation />
      <SmoothScroll>
        <Hero />
        <About />
        <Experience />
        <Projects onProjectClick={setSelectedProjectId} />
        <Skills />
        <Contact />
      </SmoothScroll>
    </div>
  );
}
