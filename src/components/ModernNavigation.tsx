import {
  Award,
  Briefcase,
  Code,
  Home,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { softSpring } from "./common/motion";

export function ModernNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hovered, setHovered] = useState<string | null>(null);
  const [condensed, setCondensed] = useState(false);
  const { scrollY } = useScroll();

  const navItems = useMemo(
    () => [
      { id: "hero", label: "Home", icon: Home },
      { id: "about", label: "About", icon: User },
      { id: "experience", label: "Experience", icon: Briefcase },
      { id: "projects", label: "Projects", icon: Code },
      { id: "skills", label: "Skills", icon: Award },
      { id: "contact", label: "Contact", icon: Mail },
    ],
    []
  );

  // Once you leave the hero the bar tucks up and tightens — a small
  // change, but it makes the page feel responsive to where you are.
  useMotionValueEvent(scrollY, "change", (v) => {
    setCondensed(v > 80);
  });

  useEffect(() => {
    // IntersectionObserver instead of a scroll handler — no per-frame layout
    // reads, so scrolling stays smooth.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 md:block"
      >
        <motion.div
          animate={{
            scale: condensed ? 0.94 : 1,
            y: condensed ? -6 : 0,
          }}
          transition={softSpring}
          className="glass-blur rounded-full px-2 py-2"
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHovered(item.id)}
                  className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                    active
                      ? "text-primary-foreground"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  {/* soft hover pill that slides between items */}
                  {hovered === item.id && !active && (
                    <motion.span
                      layoutId="navHover"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 gradient-primary rounded-full shadow-[0_6px_22px_-8px_rgba(212,175,106,0.9)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <Icon className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile toggle */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ...softSpring, delay: 0.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        className="glass-blur fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full text-white md:hidden"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <X className="h-5 w-5" />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <Menu className="h-5 w-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* tap-away scrim */}
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-30 bg-black/40 md:hidden"
            />
            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.92, y: -16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: -16 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-5 top-20 z-40 origin-top-right md:hidden"
            >
              <div className="glass-blur min-w-52 rounded-2xl p-3">
                <div className="space-y-1">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const active = activeSection === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.34,
                          delay: index * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium ${
                          active
                            ? "gradient-primary text-primary-foreground"
                            : "text-white/70 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
