import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactLenis from "lenis/react";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <ReactLenis root>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ReactLenis>
  );
}
