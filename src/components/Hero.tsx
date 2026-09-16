import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { URLS } from '../constants/constants';
import { marqueeSkills, profile } from '../data/portfolio';
import { softSpring, useSpotlight } from './common/motion';
import { Aurora, Magnetic } from './common/primitives';

const socials = [
  { icon: Linkedin, href: URLS.LINKED_IN, label: 'LinkedIn' },
  { icon: Github, href: URLS.GITHUB, label: 'GitHub' },
  { icon: Mail, href: `mailto:${URLS.EMAIL}`, label: 'Email' },
  {
    icon: Phone,
    href: `tel:${URLS.PHONE_NUMBER.replaceAll(' ', '')}`,
    label: 'Phone',
  },
];

const codeLines = [
  { t: 'const dev = {', c: 'text-white/50' },
  { t: '  name: "Bhavin Gunjariya",', c: 'text-neon-cyan' },
  { t: '  role: "React / RN Developer",', c: 'text-neon-violet' },
  { t: '  years: 4,', c: 'text-neon-emerald' },
  { t: '  apps: 15,', c: 'text-neon-emerald' },
  { t: '  stack: ["React", "Next.js",', c: 'text-neon-amber' },
  { t: '    "React Native", "TypeScript"],', c: 'text-neon-amber' },
  { t: '  shipsToProduction: true,', c: 'text-neon-cyan' },
  { t: '};', c: 'text-white/50' },
];

const orbit = ['⚛️', '🚀', '📱', '⚡', '🎯', '✨'];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const card = useSpotlight<HTMLDivElement>();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Layers drift at different rates on scroll — depth without touching
  // opacity, which would switch off the frosted panes' backdrop blur.
  const cardY = useTransform(smooth, [0, 1], [0, -70]);
  const backdropY = useTransform(smooth, [0, 1], [0, 160]);
  const backdropFade = useTransform(smooth, [0, 0.9], [1, 0]);

  useEffect(() => {
    const t = setInterval(
      () => setRoleIndex(i => (i + 1) % profile.roles.length),
      2400,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <motion.div
        style={reduced ? undefined : { y: backdropY, opacity: backdropFade }}
        className="absolute inset-0"
      >
        <Aurora />
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ---------------- Left ---------------- */}
        <motion.div>
          <motion.span
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full glass-sm px-4 py-2 text-sm text-white/75 sheen"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-emerald opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-emerald" />
            </span>
            Available for new opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            <span className="block text-white/90">Hi, I'm</span>
            <span className="text-gradient-animate">Bhavin Gunjariya</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 flex items-center gap-3 text-xl font-medium text-white/80 sm:text-2xl"
          >
            <span className="font-mono text-neon-indigo">{'<'}</span>
            <div className="relative h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 28, opacity: 0, filter: 'blur(6px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -28, opacity: 0, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="block bg-linear-to-r from-neon-indigo via-neon-violet to-neon-cyan bg-clip-text font-semibold text-transparent"
                >
                  {profile.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="font-mono text-neon-indigo">{'/>'}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 flex items-center gap-2 text-sm text-white/50"
          >
            <MapPin className="h-4 w-4 text-neon-violet" />
            {profile.location}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <motion.button
                onClick={() => scrollTo('projects')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={softSpring}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 font-semibold text-white glow-primary"
              >
                <span className="absolute inset-0 gradient-primary bg-size-[200%_auto] animate-gradient" />
                {/* light sweeps across the button on hover */}
                <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-18deg] bg-white/25 blur-[2px] transition-[left] duration-700 ease-smooth group-hover:left-full" />
                <span className="relative z-10">View my work</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </Magnetic>

            <Magnetic>
              <motion.a
                href="/Bhavin-Gunjariya-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={softSpring}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full glass glass-hover px-7 py-3.5 font-semibold text-white/90 sheen"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Resume
              </motion.a>
            </Magnetic>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex items-center gap-3"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.94 }}
                transition={softSpring}
                className="flex h-11 w-11 items-center justify-center rounded-full glass-sm glass-hover text-white/70 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ---------------- Right — code card + orbit ---------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={reduced ? undefined : { y: cardY }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          {/* orbit ring */}
          <div className="absolute inset-0 -m-6 animate-spin-slow">
            {orbit.map((emoji, i) => {
              const angle = (i / orbit.length) * Math.PI * 2;
              const r = 47;
              const x = 50 + Math.cos(angle) * r;
              const y = 50 + Math.sin(angle) * r;
              return (
                <span
                  key={i}
                  className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl glass-sm text-lg"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {emoji}
                </span>
              );
            })}
          </div>

          <motion.div
            ref={card.ref}
            onMouseMove={card.onMouseMove}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="spotlight relative overflow-hidden rounded-2xl glass-strong p-5 glow-primary"
          >
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-white/40">
                developer.ts
              </span>
            </div>
            {/* code */}
            <pre className="mt-4 overflow-hidden font-mono text-[13px] leading-6">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.12, duration: 0.4 }}
                  className={line.c}
                >
                  <span className="mr-3 select-none text-white/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {line.t}
                </motion.div>
              ))}
            </pre>
          </motion.div>

          {/* floating stat chips */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.06 }}
            className="absolute -left-8 top-10 rounded-2xl glass px-4 py-3 text-center glow-violet"
          >
            <div className="text-2xl font-bold text-gradient">4+</div>
            <div className="text-[11px] text-white/55">Years exp</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.06 }}
            className="absolute -right-6 bottom-10 rounded-2xl glass px-4 py-3 text-center glow-cyan"
          >
            <div className="text-2xl font-bold text-gradient-secondary">
              15+
            </div>
            <div className="text-[11px] text-white/55">Apps shipped</div>
          </motion.div>
        </motion.div>
      </div>

      {/* skill marquee — a frosted strip the hero scrolls behind */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-white/2 py-4 backdrop-blur-xl backdrop-saturate-150">
        <div className="relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-10 pr-10 will-change-transform">
            {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-mono text-sm text-white/40"
              >
                {s} <span className="text-neon-violet">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
