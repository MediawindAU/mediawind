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
 * With `pattern`, the brand wave tile sits invisibly underneath and the
 * glow acts as a flashlight, revealing it where the cursor travels.
 * Invisible on touch devices (no mouse pointermove) and removed entirely
 * for reduced-motion users.
 */
export default function PointerGlowArea({
  children,
  className,
  pattern = false,
}: {
  children: React.ReactNode;
  className?: string;
  pattern?: boolean;
}) {
  const mx = useMotionValue(-900);
  const my = useMotionValue(-900);
  const x = useSpring(mx, { stiffness: 55, damping: 17 });
  const y = useSpring(my, { stiffness: 55, damping: 17 });
  const reduce = useReducedMotion();

  const glow = useMotionTemplate`radial-gradient(580px circle at ${x}px ${y}px, rgba(152, 203, 241, 0.16), rgba(152, 203, 241, 0.05) 45%, transparent 72%)`;
  const patternMask = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, black 0%, rgba(0,0,0,0.45) 45%, transparent 74%)`;

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
        <>
          {pattern && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 opacity-10"
              style={{
                backgroundImage: "url(/images/pattern-wave.png)",
                backgroundSize: "340px",
                backgroundRepeat: "repeat",
                maskImage: patternMask,
                WebkitMaskImage: patternMask,
              }}
            />
          )}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{ background: glow }}
          />
        </>
      )}
      {children}
    </div>
  );
}
