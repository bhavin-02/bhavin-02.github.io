import { motion } from "motion/react";
import { skillGroups } from "../data/portfolio";
import { Reveal, SectionHeading } from "./common/primitives";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Toolkit"
          title={
            <>
              Skills & <span className="text-gradient">technologies</span>
            </>
          }
          subtitle="The stack I reach for to design, build and ship across web and mobile."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative h-full overflow-hidden rounded-2xl glass p-6"
                >
                  <div
                    className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: `${group.accent}55` }}
                  />
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl text-white"
                      style={{
                        background: `linear-gradient(135deg, ${group.accent}, ${group.accent}99)`,
                        boxShadow: `0 8px 26px -10px ${group.accent}`,
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <motion.span
                        key={s}
                        whileHover={{ scale: 1.06 }}
                        className="cursor-default rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/70 transition-colors hover:border-white/25 hover:text-white"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
