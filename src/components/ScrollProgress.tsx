"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

/* Thin reading-progress bar above the header — sky → blue gradient. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-sky-light via-blue-mid to-indigo-brand"
      style={{ scaleX }}
    />
  );
}
