import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  Mail,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { URLS } from "../constants/constants";
import { accentMap, projectsData, type Project } from "../data/projectsData";
import { Aurora, Reveal } from "./common/primitives";

export function ProjectDetail({
  project,
  onBack,
}: {
  project: Project;
  onBack: () => void;
}) {
  const navigate = useNavigate();
  const Icon = project.icon;
  const a = accentMap[project.accent];

  const index = projectsData.findIndex((p) => p.id === project.id);
  const prev = projectsData[(index - 1 + projectsData.length) % projectsData.length];
  const next = projectsData[(index + 1) % projectsData.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [project.id]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Aurora className="opacity-60" />
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-16">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back
        </button>

        {/* header */}
        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center gap-4">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${a.from}, ${a.to})`,
                boxShadow: `0 10px 40px -10px ${a.glow}`,
              }}
            >
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/60">
                {project.platform}
              </span>
              <span
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{ background: `${a.from}22`, color: a.text }}
              >
                {project.category}
              </span>
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-white/60">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-white/45">
            <span>
              <span className="text-white/70">Company:</span> {project.company}
            </span>
            <span>
              <span className="text-white/70">Timeline:</span> {project.period}
            </span>
            <span>
              <span className="text-white/70">Domain:</span> {project.domain}
            </span>
          </div>
        </Reveal>

        {/* metrics */}
        {project.metrics && (
          <Reveal delay={0.1} className="mt-10 grid grid-cols-3 gap-4">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl glass p-5 text-center"
              >
                <div
                  className="text-2xl font-bold md:text-3xl"
                  style={{ color: a.text }}
                >
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-white/50">{m.label}</div>
              </div>
            ))}
          </Reveal>
        )}

        {/* overview */}
        <Reveal delay={0.15} className="mt-12">
          <h2 className="text-xl font-semibold text-white">Overview</h2>
          <p className="mt-4 text-base leading-relaxed text-white/65">
            {project.overview}
          </p>
        </Reveal>

        {/* highlights */}
        <Reveal delay={0.2} className="mt-12">
          <h2 className="text-xl font-semibold text-white">
            Key features & contributions
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 rounded-xl glass p-4"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{ background: `${a.from}22`, color: a.text }}
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-white/70">
                  {h}
                </span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* tech stack */}
        <Reveal delay={0.25} className="mt-12">
          <h2 className="text-xl font-semibold text-white">Tech stack</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-white/75"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.3} className="mt-14 rounded-2xl border-gradient p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            Like what you see?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/55">
            I'd love to talk about how I can help build your next product.
          </p>
          <a
            href={`mailto:${URLS.EMAIL}`}
            className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-semibold text-white glow-primary"
          >
            <span className="absolute inset-0 gradient-primary bg-[length:200%_auto] animate-gradient" />
            <Mail className="relative z-10 h-4 w-4" />
            <span className="relative z-10">Get in touch</span>
          </a>
        </Reveal>

        {/* prev / next */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => navigate(`/project/${prev.id}`)}
            className="group flex items-center gap-3 rounded-2xl glass p-5 text-left transition-colors hover:bg-white/[0.06]"
          >
            <ArrowLeft className="h-5 w-5 text-white/50 transition-transform group-hover:-translate-x-1" />
            <div>
              <div className="text-xs text-white/40">Previous</div>
              <div className="text-sm font-medium text-white">
                {prev.shortTitle}
              </div>
            </div>
          </button>
          <button
            onClick={() => navigate(`/project/${next.id}`)}
            className="group flex items-center justify-end gap-3 rounded-2xl glass p-5 text-right transition-colors hover:bg-white/[0.06]"
          >
            <div>
              <div className="text-xs text-white/40">Next</div>
              <div className="text-sm font-medium text-white">
                {next.shortTitle}
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-white/50 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <a
          href={URLS.GITHUB}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
        >
          <ExternalLink className="h-4 w-4" />
          More on GitHub
        </a>
      </div>
    </div>
  );
}
