import { Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { experience } from "../data/portfolio";
import { Reveal, SectionHeading } from "./common/primitives";

export function Experience() {
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

        <div className="relative mt-16">
          {/* vertical line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-neon-indigo via-neon-violet to-transparent md:left-1/2" />

          <div className="space-y-12">
            {experience.map((job, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={job.company} delay={0.05}>
                  <div
                    className={`relative md:flex ${
                      left ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* node */}
                    <span className="absolute left-4 top-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full gradient-primary glow-primary md:left-1/2">
                      <Briefcase className="h-4 w-4 text-white" />
                    </span>

                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`ml-12 w-full rounded-2xl glass p-6 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                        left ? "" : "md:ml-auto"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-white">
                          {job.company}
                        </h3>
                        <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-neon-cyan">
                          {job.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-neon-violet">
                        {job.role}
                      </p>

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
                        {job.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-white/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
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
