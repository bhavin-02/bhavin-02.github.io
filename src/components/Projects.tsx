import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { accentMap, projectsData, type Project } from "../data/projectsData";
import { Reveal, SectionHeading, TiltCard } from "./common/primitives";

const filters = ["All", "Web", "Mobile"] as const;
type Filter = (typeof filters)[number];

function matches(project: Project, filter: Filter): boolean {
  if (filter === "All") return true;
  if (filter === "Web")
    return project.platform === "Web" || project.platform === "Web & Mobile";
  if (filter === "Mobile")
    return (
      project.platform === "Mobile" || project.platform === "Web & Mobile"
    );
  return false;
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const Icon = project.icon;
  const a = accentMap[project.accent];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard className="h-full [perspective:1000px]">
        <button
          onClick={onClick}
          className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl glass p-6 text-left transition-shadow duration-300"
          style={{ ["--glow" as string]: a.glow }}
        >
          {/* accent glow on hover */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: a.glow }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 -top-px h-px opacity-60"
            style={{
              background: `linear-gradient(90deg, transparent, ${a.from}, transparent)`,
            }}
          />

          <div className="flex items-start justify-between">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${a.from}, ${a.to})`,
                boxShadow: `0 8px 30px -8px ${a.glow}`,
              }}
            >
              <Icon className="h-7 w-7 text-white" />
            </div>
            <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-white/55">
              {project.platform}
            </span>
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs text-white/45">
            <span style={{ color: a.text }}>{project.category}</span>
            <span className="h-1 w-1 rounded-full bg-white/25" />
            <span>{project.company}</span>
          </div>

          <h3 className="mt-2 text-xl font-bold leading-snug text-white">
            {project.shortTitle}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
            {project.tagline}
          </p>

          {/* metrics */}
          {project.metrics && (
            <div className="mt-4 flex flex-wrap gap-4">
              {project.metrics.slice(0, 3).map((m) => (
                <div key={m.label}>
                  <div
                    className="text-lg font-bold"
                    style={{ color: a.text }}
                  >
                    {m.value}
                  </div>
                  <div className="text-[11px] text-white/40">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-white/50"
              >
                {t}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-white/40">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          <div
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition-transform group-hover:gap-2.5"
            style={{ color: a.text }}
          >
            View case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </button>
      </TiltCard>
    </motion.div>
  );
}

export function Projects({
  onProjectClick,
}: {
  onProjectClick: (id: string) => void;
}) {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(
    () => projectsData.filter((p) => matches(p, filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Projects that <span className="text-gradient">ship & scale</span>
            </>
          }
          subtitle="15+ production applications across healthcare, fintech, e-commerce, real estate and social — for web and mobile."
        />

        {/* filters */}
        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full glass p-1.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  filter === f
                    ? "text-white"
                    : "text-white/55 hover:text-white/80"
                }`}
              >
                {filter === f && (
                  <motion.span
                    layoutId="projectFilter"
                    className="absolute inset-0 gradient-primary rounded-full"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {visible.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => onProjectClick(project.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
