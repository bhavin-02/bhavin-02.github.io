import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { ModernNavigation } from "./components/ModernNavigation";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  return (
    <div className="bg-background relative min-h-screen">
      <ModernNavigation />
      <SmoothScroll>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </SmoothScroll>
    </div>
  );
}
