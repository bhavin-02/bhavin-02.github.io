import { motion } from "motion/react";
import { highlights, profile, stats } from "../data/portfolio";
import {
  AnimatedCounter,
  Aurora,
  Reveal,
  SectionHeading,
} from "./common/primitives";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <Aurora className="opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              Turning complex requirements into{" "}
              <span className="text-gradient">delightful products</span>
            </>
          }
          subtitle={profile.summaryLong}
        />

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neon-violet/60 to-transparent" />
                <div className="text-4xl font-extrabold text-gradient md:text-5xl">
                  <AnimatedCounter
                    value={Number(s.value)}
                    suffix={s.suffix}
                  />
                </div>
                <div className="mt-2 text-sm text-white/55">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Highlight cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal key={h.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative h-full overflow-hidden rounded-2xl border-gradient p-6"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-neon-violet transition-colors group-hover:bg-white/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {h.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
