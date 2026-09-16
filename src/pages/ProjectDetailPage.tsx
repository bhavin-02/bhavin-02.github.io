import { useParams, useNavigate } from "react-router-dom";
import { ProjectDetail } from "../components/ProjectDetail";
import { PageTransition } from "../components/common/primitives";
import { getProjectById } from "../data/projectsData";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = id ? getProjectById(id) : null;

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <PageTransition>
      <ProjectDetail project={project} onBack={() => navigate(-1)} />
    </PageTransition>
  );
}
