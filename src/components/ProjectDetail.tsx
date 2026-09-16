import { useLenis } from 'lenis/react';
import { ArrowLeft, ArrowRight, Check, ExternalLink, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { URLS } from '../constants/constants';
import { accentMap, projectsData, type Project } from '../data/projectsData';
import { softSpring, useSpotlight } from './common/motion';
import { Aurora, Reveal, Stagger, StaggerItem } from './common/primitives';

function MetricCard({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  const spot = useSpotlight<HTMLDivElement>();

  return (
    <motion.div
      ref={spot.ref}
      onMouseMove={spot.onMouseMove}
      whileHover={{ y: -4 }}
      transition={softSpring}
      className="spotlight relative h-full overflow-hidden rounded-2xl glass glass-hover p-5 text-center"
    >
      <div
        className="relative z-10 text-2xl font-bold md:text-3xl"
        style={{ color }}
      >
        {value}
      </div>
      <div className="relative z-10 mt-1 text-xs text-white/50">{label}</div>
    </motion.div>
  );
}

export function ProjectDetail({
  project,
  onBack,
}: {
  project: Project;
  onBack: () => void;
}) {
  const navigate = useNavigate();
  const lenis = useLenis();
  const Icon = project.icon;
  const a = accentMap[project.accent];

  const index = projectsData.findIndex(p => p.id === project.id);
  const prev =
    projectsData[(index - 1 + projectsData.length) % projectsData.length];
  const next = projectsData[(index + 1) % projectsData.length];

  useEffect(() => {
    // Lenis owns the scroll position, so reset through it rather than
    // window.scrollTo — otherwise its internal target fights the jump.
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [project.id, lenis]);

  return (
    <div className="grain relative min-h-screen overflow-hidden bg-background">
      <Aurora className="opacity-60" />
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-16">
        <motion.button
          onClick={onBack}
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.97 }}
          transition={softSpring}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full glass glass-hover px-4 py-2 text-sm text-white/70 hover:text-white sheen"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back
        </motion.button>

        {/* header */}
        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center gap-4">
            <motion.div
              whileHover={{ rotate: -6, scale: 1.06 }}
              transition={softSpring}
              className="flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${a.from}, ${a.to})`,
                boxShadow: `0 10px 40px -10px ${a.glow}`,
              }}
            >
              <Icon className="h-8 w-8 text-white" />
            </motion.div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full glass-sm px-3 py-1 text-xs text-white/60">
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
          <Stagger className="mt-10 grid grid-cols-3 gap-4" stagger={0.1}>
            {project.metrics.map(m => (
              <StaggerItem key={m.label} className="h-full">
                <MetricCard value={m.value} label={m.label} color={a.text} />
              </StaggerItem>
            ))}
          </Stagger>
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
        </Reveal>
        <Stagger className="mt-5 grid gap-3 sm:grid-cols-2" stagger={0.06}>
          {project.highlights.map((h, i) => (
            <StaggerItem key={i} className="h-full">
              <motion.div
                whileHover={{ y: -3 }}
                transition={softSpring}
                className="flex h-full gap-3 rounded-xl glass glass-hover p-4"
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
            </StaggerItem>
          ))}
        </Stagger>

        {/* tech stack */}
        <Reveal delay={0.25} className="mt-12">
          <h2 className="text-xl font-semibold text-white">Tech stack</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map(t => (
              <motion.span
                key={t}
                whileHover={{ y: -3, scale: 1.05 }}
                transition={softSpring}
                className="cursor-default rounded-lg glass-sm px-3.5 py-2 text-sm text-white/75"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal
          delay={0.3}
          className="mt-14 rounded-2xl border-gradient border-gradient-glass p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white">Like what you see?</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/55">
            I'd love to talk about how I can help build your next product.
          </p>
          <motion.a
            href={`mailto:${URLS.EMAIL}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={softSpring}
            className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-semibold text-white glow-primary"
          >
            <span className="absolute inset-0 gradient-primary bg-size-[200%_auto] animate-gradient" />
            <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-18deg] bg-white/25 blur-[2px] transition-[left] duration-700 ease-smooth group-hover:left-full" />
            <Mail className="relative z-10 h-4 w-4" />
            <span className="relative z-10">Get in touch</span>
          </motion.a>
        </Reveal>

        {/* prev / next */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <motion.button
            onClick={() => navigate(`/project/${prev.id}`)}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={softSpring}
            className="group relative flex items-center gap-3 overflow-hidden rounded-2xl glass glass-hover p-5 text-left sheen"
          >
            <ArrowLeft className="h-5 w-5 text-white/50 transition-transform duration-300 group-hover:-translate-x-1" />
            <div>
              <div className="text-xs text-white/40">Previous</div>
              <div className="text-sm font-medium text-white">
                {prev.shortTitle}
              </div>
            </div>
          </motion.button>
          <motion.button
            onClick={() => navigate(`/project/${next.id}`)}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            transition={softSpring}
            className="group relative flex items-center justify-end gap-3 overflow-hidden rounded-2xl glass glass-hover p-5 text-right sheen"
          >
            <div>
              <div className="text-xs text-white/40">Next</div>
              <div className="text-sm font-medium text-white">
                {next.shortTitle}
              </div>
            </div>
            <ArrowRight className="h-5 w-5 text-white/50 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>

        <a
          href={URLS.GITHUB}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm text-white/45 hover:text-white"
        >
          <ExternalLink className="h-4 w-4" />
          More on GitHub
        </a>
      </div>
    </div>
  );
}
