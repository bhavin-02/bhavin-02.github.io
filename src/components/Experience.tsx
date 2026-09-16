import { Briefcase } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';
import { experience } from '../data/portfolio';
import { softSpring, useSpotlight } from './common/motion';
import { Reveal, SectionHeading } from './common/primitives';

type Job = (typeof experience)[number];

function JobCard({ job, left }: { job: Job; left: boolean }) {
  const spot = useSpotlight<HTMLDivElement>();

  return (
    <motion.div
      ref={spot.ref}
      onMouseMove={spot.onMouseMove}
      whileHover={{ y: -5 }}
      transition={softSpring}
      className={`spotlight sheen relative ml-12 w-auto overflow-hidden rounded-2xl glass glass-hover p-6 md:ml-0 md:w-[calc(50%-2.5rem)] ${
        left ? '' : 'md:ml-auto'
      }`}
    >
      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-xl font-bold text-white">{job.company}</h3>
          <span className="rounded-full glass-chip px-3 py-1 font-mono text-xs text-neon-cyan">
            {job.period}
          </span>
        </div>
        <p className="mt-1 text-sm font-medium text-neon-violet">{job.role}</p>

        <ul className="mt-4 space-y-2.5">
          {job.points.map((p, j) => (
            <li
              key={j}
              className="flex gap-2.5 text-sm leading-relaxed text-white/60"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-indigo" />
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {job.tags.map(t => (
            <motion.span
              key={t}
              whileHover={{ y: -2, scale: 1.05 }}
              transition={softSpring}
              className="rounded-md glass-chip px-2 py-1 text-[11px] text-white/55"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 80%', 'end 60%'],
  });
  // The timeline draws itself as the section scrolls past.
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });
  const glowY = useTransform(lineScale, v => `${v * 100}%`);

  return (
    <section id="experience" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-dots opacity-40 mask-radial" />

      <div className="relative z-10 mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Where I've <span className="text-gradient">shipped</span>
            </>
          }
          subtitle="4+ years across three companies — growing from developer to cross-functional team lead."
        />

        <div ref={trackRef} className="relative mt-16">
          {/* rail + the lit segment that follows your scroll */}
          <div className="absolute left-4 top-2 h-full w-px bg-white/[0.07] md:left-1/2">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top bg-linear-to-b from-neon-indigo via-neon-violet to-neon-cyan"
            />
            <motion.span
              style={{ top: glowY }}
              className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-amber shadow-[0_0_18px_6px_rgba(212,175,106,0.45)]"
            />
          </div>

          <div className="space-y-12">
            {experience.map((job, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal
                  key={job.company}
                  delay={0.05}
                  x={left ? -24 : 24}
                  y={16}
                >
                  <div
                    className={`relative md:flex ${
                      left ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    {/* node */}
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ ...softSpring, delay: 0.15 }}
                      className="absolute left-4 top-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full gradient-primary glow-primary md:left-1/2"
                    >
                      <Briefcase className="h-4 w-4 text-white" />
                    </motion.span>

                    <JobCard job={job} left={left} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
