import { ArrowLeft, Home, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { softSpring, useSpotlight } from '../components/common/motion';
import {
  Aurora,
  Magnetic,
  PageTransition,
} from '../components/common/primitives';

export function NotFoundPage() {
  const navigate = useNavigate();
  const panel = useSpotlight<HTMLDivElement>();

  // Fixed once per mount — regenerating on every render made the dust
  // twitch whenever anything else updated.
  const dust = useMemo(
    () =>
      Array.from({ length: 22 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${2 + Math.random() * 3}s`,
      })),
    [],
  );

  return (
    <PageTransition>
      <div className="grain relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-4">
        <Aurora />
        <div className="absolute inset-0 bg-grid mask-radial opacity-50" />

        {/* drifting dust */}
        <div className="absolute inset-0">
          {dust.map((d, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-neon-amber/30 animate-pulse"
              style={{
                left: d.left,
                top: d.top,
                animationDelay: d.delay,
                animationDuration: d.duration,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          {/* 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-10"
          >
            <div className="text-[8rem] font-bold leading-none text-gradient-animate md:text-[12rem]">
              404
            </div>
            <div className="absolute inset-0 text-[8rem] font-bold leading-none text-neon-amber/10 blur-3xl md:text-[12rem]">
              404
            </div>
          </motion.div>

          {/* message */}
          <motion.div
            ref={panel.ref}
            onMouseMove={panel.onMouseMove}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="spotlight relative mb-8 overflow-hidden rounded-3xl glass p-8"
          >
            <div className="relative z-10">
              <div className="mb-6 flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-neon-amber animate-glow" />
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-neon-amber">
                  Lost in space
                </span>
                <Sparkles className="h-5 w-5 text-neon-violet animate-glow" />
              </div>

              <h1 className="mb-5 text-3xl font-bold text-white md:text-4xl">
                Page not found
              </h1>

              <p className="text-base leading-relaxed text-white/60 md:text-lg">
                The page you're looking for has drifted into the digital void.
                <br className="hidden md:block" />
                Let's navigate you back to familiar territory.
              </p>
            </div>
          </motion.div>

          {/* actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Magnetic>
              <motion.button
                onClick={() => navigate('/')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={softSpring}
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-4 font-semibold text-white glow-primary sm:w-auto"
              >
                <span className="absolute inset-0 gradient-primary bg-size-[200%_auto] animate-gradient" />
                <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-18deg] bg-white/25 blur-[2px] transition-[left] duration-700 ease-smooth group-hover:left-full" />
                <Home className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <span className="relative z-10">Return home</span>
              </motion.button>
            </Magnetic>

            <Magnetic>
              <motion.button
                onClick={() => navigate(-1)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={softSpring}
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full glass glass-hover px-8 py-4 font-semibold text-white sheen sm:w-auto"
              >
                <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                Go back
              </motion.button>
            </Magnetic>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-sm text-white/35"
          >
            Not all who wander are lost — this page definitely is.
          </motion.p>
        </div>
      </div>
    </PageTransition>
  );
}
