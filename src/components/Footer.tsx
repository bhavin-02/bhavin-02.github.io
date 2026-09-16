import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useLenis } from "lenis/react";
import { motion } from "motion/react";
import { URLS } from "../constants/constants";
import { profile } from "../data/portfolio";
import { Reveal } from "./common/primitives";
import { softSpring } from "./common/motion";

const links = [
  { icon: Linkedin, href: URLS.LINKED_IN, label: "LinkedIn" },
  { icon: Github, href: URLS.GITHUB, label: "GitHub" },
  { icon: Mail, href: `mailto:${URLS.EMAIL}`, label: "Email" },
];

export function Footer() {
  const lenis = useLenis();

  const toTop = () => {
    // Hand the request to Lenis so the ride up is eased, not jumped.
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 py-10">
      <Reveal y={16}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row">
          <div className="text-center md:text-left">
            <div className="font-display text-lg font-bold text-white">
              {profile.name}
            </div>
            <div className="text-sm text-white/45">{profile.role}</div>
          </div>

          <div className="flex items-center gap-3">
            {links.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                transition={softSpring}
                className="flex h-10 w-10 items-center justify-center rounded-full glass-sm glass-hover text-white/60 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
            <motion.button
              onClick={toTop}
              aria-label="Back to top"
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={softSpring}
              className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-white glow-primary"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-7xl px-5 text-center text-xs text-white/35 md:text-left">
          © {new Date().getFullYear()} {profile.name}.
        </div>
      </Reveal>
    </footer>
  );
}
