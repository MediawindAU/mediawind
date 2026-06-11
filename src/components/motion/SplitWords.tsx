"use client";

import { motion, useReducedMotion } from "motion/react";

/*
 * Staggered word-by-word headline reveal. Accepts plain text segments;
 * pass `accent: true` to colour a segment with the brand sky blue.
 */
export default function SplitWords({
  segments,
  className,
  as: Tag = "h1",
  delay = 0,
}: {
  segments: { text: string; accent?: boolean }[];
  className?: string;
  as?: "h1" | "h2";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  let wordIndex = 0;

  const MotionTag = Tag === "h1" ? motion.h1 : motion.h2;

  return (
    <MotionTag className={className} aria-label={segments.map((s) => s.text).join(" ")}>
      {segments.map((seg, si) =>
        seg.text.split(" ").map((word, wi) => {
          const i = wordIndex++;
          return (
            <span
              key={`${si}-${wi}`}
              className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-top"
              aria-hidden
            >
              <motion.span
                className={`inline-block ${seg.accent ? "text-sky-light" : ""}`}
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: delay + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
                {" "}
              </motion.span>
            </span>
          );
        })
      )}
    </MotionTag>
  );
}
