"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "motion/react";

/*
 * Wraps a dark section with a soft sky-blue glow that trails the cursor.
 * Invisible on touch devices (no mouse pointermove) and removed entirely
 * for reduced-motion users.
 */
export default function PointerGlowArea({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const x = useSpring(mx, { stiffness: 60, damping: 18 });
  const y = useSpring(my, { stiffness: 60, damping: 18 });
  const reduce = useReducedMotion();
  const background = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(152, 203, 241, 0.13), transparent 70%)`;

  return (
    <div
      className={className}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - r.left);
        my.set(e.clientY - r.top);
      }}
    >
      {!reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{ background }}
        />
      )}
      {children}
    </div>
  );
}
