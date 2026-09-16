import { AnimatePresence } from "motion/react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ReactLenis from "lenis/react";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function AnimatedRoutes() {
  const location = useLocation();

  // Keying on pathname lets AnimatePresence run the outgoing page's exit
  // before the next one mounts, so routes cross-fade instead of cutting.
  // `initial={false}` keeps the first paint instant — the landing page is
  // never gated behind an entrance animation.
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      <Router>
        <AnimatedRoutes />
      </Router>
    </ReactLenis>
  );
}
