import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { URLS } from "../constants/constants";
import { profile } from "../data/portfolio";

const links = [
  { icon: Linkedin, href: URLS.LINKED_IN },
  { icon: Github, href: URLS.GITHUB },
  { icon: Mail, href: `mailto:${URLS.EMAIL}` },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 md:flex-row">
        <div className="text-center md:text-left">
          <div className="font-display text-lg font-bold text-white">
            {profile.name}
          </div>
          <div className="text-sm text-white/45">{profile.role}</div>
        </div>

        <div className="flex items-center gap-3">
          {links.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-white/60 transition-colors hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-white transition-transform hover:-translate-y-1"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl px-5 text-center text-xs text-white/35 md:text-left">
        © {new Date().getFullYear()} {profile.name}. Built with React, Vite,
        Tailwind CSS & Framer Motion.
      </div>
    </footer>
  );
}
