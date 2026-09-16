import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from 'motion/react';
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { EASE_SMOOTH, softSpring } from './motion';

/* ---------------------------------------------------------------
   Reveal — fades and slides children in when they scroll into view.

   `blur` adds a focus-pull to the entrance, but it is opt-in and must
   only be used on subtrees with NO frosted glass inside. Animating
   `filter` leaves `blur(0px)` on the node, and any filter — even a
   zero-radius one — starts a new backdrop root that flattens the
   backdrop-filter of every glass surface beneath it. So: text, yes;
   anything wrapping a `.glass` card, no.
   --------------------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  scale = 1,
  blur = 0,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: '-80px' });
  const reduced = useReducedMotion();
  const clearFilter = useCallback(() => {
    if (ref.current) ref.current.style.filter = '';
  }, []);

  // Leave `filter` out of the keyframes entirely unless blur was asked
  // for — see the note above.
  const useBlur = !reduced && blur > 0;

  const hidden = reduced
    ? { opacity: 0 }
    : {
        opacity: 0,
        y,
        x,
        scale,
        ...(useBlur ? { filter: `blur(${blur}px)` } : {}),
      };

  const shown = reduced
    ? { opacity: 1 }
    : {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        ...(useBlur ? { filter: 'blur(0px)' } : {}),
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={inView ? shown : hidden}
      onAnimationComplete={once ? clearFilter : undefined}
      transition={{
        duration: reduced ? 0.2 : 0.75,
        delay: reduced ? 0 : delay,
        ease: EASE_SMOOTH,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------
   Stagger / StaggerItem — a parent that releases its children one
   after another once it scrolls into view.
   --------------------------------------------------------------- */
const staggerParent: Variants = {
  hidden: {},
  shown: (stagger: number) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

// No `filter` here on purpose: stagger children are almost always glass
// cards, and a residual `blur(0px)` on the wrapper would switch off their
// backdrop blur. Opacity and lift carry the entrance on their own.
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 26 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SMOOTH },
  },
};

export function Stagger({
  children,
  className,
  stagger = 0.08,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerParent}
      custom={stagger}
      initial="hidden"
      whileInView="shown"
      viewport={{ once, margin: '-80px' }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------
   PageTransition — wraps a route so navigation cross-fades with a
   small lift instead of cutting.
   --------------------------------------------------------------- */
export function PageTransition({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  // This wrapper contains every frosted surface on the page, so it must
  // never be left holding a `filter` — that would start a backdrop root
  // and flatten all of them. Blur is applied on exit only, where the node
  // is on its way out and the residue goes with it.
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
      animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={
        reduced ? { opacity: 0 } : { opacity: 0, y: -12, filter: 'blur(8px)' }
      }
      transition={{ duration: reduced ? 0.15 : 0.45, ease: EASE_SMOOTH }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------
   SectionHeading — eyebrow + gradient title + subtitle
   --------------------------------------------------------------- */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div
      className={`max-w-2xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      <Reveal>
        <motion.span
          whileHover={{ scale: 1.04 }}
          transition={softSpring}
          className="relative inline-flex items-center gap-2 overflow-hidden rounded-full glass-sm px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70 sheen"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon-violet animate-glow" />
          {eyebrow}
        </motion.span>
      </Reveal>
      {/* Text only below — safe to pull focus with a blur. */}
      <Reveal delay={0.08} blur={10}>
        <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16} blur={6}>
          <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------
   AnimatedCounter — counts up to a numeric value when in view
   --------------------------------------------------------------- */
export function AnimatedCounter({
  value,
  suffix = '',
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------------------------------------------------------------
   MagneticButton — element that leans toward the cursor
   --------------------------------------------------------------- */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------
   TiltCard — 3D tilt toward cursor, with a lift on hover so the
   frosted pane appears to rise off the page.
   --------------------------------------------------------------- */
export function TiltCard({
  children,
  className,
  max = 8,
  lift = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  lift?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 18 });
  const sry = useSpring(ry, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(srx, v => `${v}deg`);
  const rotateY = useTransform(sry, v => `${v}deg`);

  const onMove = (e: React.MouseEvent) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={reduced ? undefined : { y: -lift }}
      transition={softSpring}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------
   Aurora — animated gold blobs used as a section backdrop. These
   are what the frosted panes actually refract, so the glass has
   something to catch.
   --------------------------------------------------------------- */
export function Aurora({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -top-32 -left-24 h-152 w-152 rounded-full bg-[radial-gradient(circle,rgba(212,175,106,0.2),transparent_60%)] blur-3xl animate-aurora will-change-transform" />
      <div className="absolute top-1/3 -right-24 h-136 w-136 rounded-full bg-[radial-gradient(circle,rgba(199,154,78,0.16),transparent_60%)] blur-3xl animate-aurora will-change-transform [animation-delay:-6s]" />
      <div className="absolute -bottom-40 left-1/3 h-128 w-lg rounded-full bg-[radial-gradient(circle,rgba(231,207,156,0.12),transparent_60%)] blur-3xl animate-aurora will-change-transform [animation-delay:-12s]" />
    </div>
  );
}
