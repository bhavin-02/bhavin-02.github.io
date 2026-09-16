import { useCallback, useEffect, useRef } from "react";
import type { Transition } from "motion/react";

/* ---------------------------------------------------------------
   Shared motion language — every component eases the same way, so
   the whole page feels like one system rather than a pile of parts.
   --------------------------------------------------------------- */
export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;
export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

export const softSpring: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 30,
  mass: 0.9,
};

/* ---------------------------------------------------------------
   useSpotlight — writes the cursor position into --mx/--my on the
   host element so the `.spotlight` utility can bloom under the
   pointer. Values are written straight to style inside a rAF, so
   moving the mouse never triggers a React render.
   --------------------------------------------------------------- */
export function useSpotlight<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const frame = useRef(0);
  const point = useRef({ x: 0, y: 0 });

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    point.current = { x: e.clientX, y: e.clientY };
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${point.current.x - rect.left}px`);
      el.style.setProperty("--my", `${point.current.y - rect.top}px`);
    });
  }, []);

  useEffect(
    () => () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    },
    []
  );

  return { ref, onMouseMove };
}
