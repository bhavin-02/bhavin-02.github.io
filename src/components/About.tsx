import { motion } from 'motion/react';
import { highlights, profile, stats } from '../data/portfolio';
import { softSpring, useSpotlight } from './common/motion';
import {
  AnimatedCounter,
  Aurora,
  SectionHeading,
  Stagger,
  StaggerItem,
} from './common/primitives';

function StatCard({
  value,
  suffix,
  label,
}: {
  value: string | number;
  suffix?: string;
  label: string;
}) {
  const spot = useSpotlight<HTMLDivElement>();

  return (
    <motion.div
      ref={spot.ref}
      onMouseMove={spot.onMouseMove}
      whileHover={{ y: -6 }}
      transition={softSpring}
      className="spotlight sheen group relative h-full overflow-hidden rounded-2xl glass glass-hover p-6 text-center"
    >
      <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-neon-violet/60 to-transparent" />
      <div className="relative z-10 text-4xl font-extrabold text-gradient md:text-5xl">
        <AnimatedCounter value={Number(value)} suffix={suffix} />
      </div>
      <div className="relative z-10 mt-2 text-sm text-white/55">{label}</div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <Aurora className="opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              Turning complex requirements into{' '}
              <span className="text-gradient">delightful products</span>
            </>
          }
          subtitle={profile.summaryLong}
        />

        {/* Stats */}
        <Stagger className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map(s => (
            <StaggerItem key={s.label} className="h-full">
              <StatCard value={s.value} suffix={s.suffix} label={s.label} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Highlight cards */}
        <Stagger
          className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          stagger={0.1}
        >
          {highlights.map(h => {
            const Icon = h.icon;
            return (
              <StaggerItem key={h.title} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={softSpring}
                  className="group relative h-full overflow-hidden rounded-2xl border-gradient border-gradient-glass p-6"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl glass-chip text-neon-violet transition-all duration-500 group-hover:scale-110 group-hover:text-neon-amber">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {h.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
