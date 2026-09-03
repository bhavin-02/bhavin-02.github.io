import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { URLS } from "../constants/constants";
import { profile } from "../data/portfolio";
import { Aurora, Magnetic, Reveal } from "./common/primitives";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: URLS.EMAIL,
    href: `mailto:${URLS.EMAIL}`,
    accent: "#6366f1",
  },
  {
    icon: Phone,
    label: "Phone",
    value: URLS.PHONE_NUMBER,
    href: `tel:${URLS.PHONE_NUMBER.replaceAll(" ", "")}`,
    accent: "#34d399",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "bhavin-gunjariya",
    href: URLS.LINKED_IN,
    accent: "#22d3ee",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "bhavin-02",
    href: URLS.GITHUB,
    accent: "#a855f7",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <Aurora className="opacity-70" />

      <div className="relative z-10 mx-auto max-w-5xl px-5">
        <Reveal className="relative overflow-hidden rounded-3xl border-gradient p-8 text-center md:p-14">
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-emerald animate-glow" />
            Let's connect
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Have a project in mind?
            <br />
            <span className="text-gradient">Let's build it together.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
            I'm open to full-time roles, freelance projects and interesting
            collaborations. Drop me a line and I'll get back to you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Magnetic>
              <a
                href={`mailto:${URLS.EMAIL}`}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 font-semibold text-white glow-primary"
              >
                <span className="absolute inset-0 gradient-primary bg-[length:200%_auto] animate-gradient" />
                <Mail className="relative z-10 h-4 w-4" />
                <span className="relative z-10">Say hello</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </div>

          {/* channels */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                  className="group flex flex-col items-center gap-2 rounded-2xl glass p-5 transition-colors hover:bg-white/[0.06]"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${c.accent}, ${c.accent}99)`,
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs uppercase tracking-wider text-white/40">
                    {c.label}
                  </span>
                  <span className="text-sm font-medium text-white/80">
                    {c.value}
                  </span>
                </motion.a>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/45">
            <MapPin className="h-4 w-4 text-neon-violet" />
            {profile.location}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
