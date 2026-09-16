import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { motion } from 'motion/react';
import { URLS } from '../constants/constants';
import { profile } from '../data/portfolio';
import { softSpring, useSpotlight } from './common/motion';
import {
  Aurora,
  Magnetic,
  Reveal,
  Stagger,
  StaggerItem,
} from './common/primitives';

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: URLS.EMAIL,
    href: `mailto:${URLS.EMAIL}`,
    accent: '#6366f1',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: URLS.PHONE_NUMBER,
    href: `tel:${URLS.PHONE_NUMBER.replaceAll(' ', '')}`,
    accent: '#34d399',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'bhavin-gunjariya',
    href: URLS.LINKED_IN,
    accent: '#22d3ee',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'bhavin-02',
    href: URLS.GITHUB,
    accent: '#a855f7',
  },
];

type Channel = (typeof channels)[number];

function ChannelCard({ channel }: { channel: Channel }) {
  const Icon = channel.icon;
  const spot = useSpotlight<HTMLAnchorElement>();

  return (
    <motion.a
      ref={spot.ref}
      onMouseMove={spot.onMouseMove}
      href={channel.href}
      target={channel.href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      whileHover={{ y: -6 }}
      transition={softSpring}
      className="spotlight sheen group relative flex flex-col items-center gap-2 overflow-hidden rounded-2xl glass glass-hover p-5"
    >
      <span
        className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
        style={{
          background: `linear-gradient(135deg, ${channel.accent}, ${channel.accent}99)`,
        }}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="relative z-10 text-xs uppercase tracking-wider text-white/40">
        {channel.label}
      </span>
      <span className="relative z-10 text-sm font-medium text-white/80">
        {channel.value}
      </span>
    </motion.a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <Aurora className="opacity-70" />

      <div className="relative z-10 mx-auto max-w-5xl px-5">
        <Reveal
          className="relative overflow-hidden rounded-3xl border-gradient p-8 text-center md:p-14"
          y={40}
        >
          <motion.span
            whileHover={{ scale: 1.04 }}
            transition={softSpring}
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-full glass-sm px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70 sheen"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-neon-emerald animate-glow" />
            Let's connect
          </motion.span>

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
              <motion.a
                href={`mailto:${URLS.EMAIL}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={softSpring}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 font-semibold text-white glow-primary"
              >
                <span className="absolute inset-0 gradient-primary bg-size-[200%_auto] animate-gradient" />
                <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-18deg] bg-white/25 blur-[2px] transition-[left] duration-700 ease-smooth group-hover:left-full" />
                <Mail className="relative z-10 h-4 w-4" />
                <span className="relative z-10">Say hello</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </Magnetic>
          </div>

          {/* channels */}
          <Stagger
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.09}
          >
            {channels.map(c => (
              <StaggerItem key={c.label} className="h-full">
                <ChannelCard channel={c} />
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/45">
            <MapPin className="h-4 w-4 text-neon-violet" />
            {profile.location}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
