"use client";

import { Fragment } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

/*
 * Staggered word-by-word headline reveal. Accepts plain text segments;
 * pass `accent: true` to colour a segment with the brand sky blue.
 * With `inView`, the reveal waits until the headline scrolls into view.
 * The viewport observer lives on the heading itself (the words are clipped
 * by their initial transform, so they can never observe themselves).
 */
export default function SplitWords({
  segments,
  className,
  as: Tag = "h1",
  delay = 0,
  inView = false,
}: {
  segments: { text: string; accent?: boolean }[];
  className?: string;
  as?: "h1" | "h2";
  delay?: number;
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  let wordIndex = 0;

  const MotionTag = Tag === "h1" ? motion.h1 : motion.h2;
  const wordVariants = (i: number): Variants => ({
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay + i * 0.05,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  });

  const triggerProps = inView
    ? {
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-60px" },
      }
    : { animate: "visible" as const };

  return (
    <MotionTag
      className={className}
      aria-label={segments.map((s) => s.text).join(" ")}
      initial={reduce ? "visible" : "hidden"}
      {...triggerProps}
    >
      {segments.map((seg, si) =>
        seg.text.split(" ").map((word, wi) => {
          const i = wordIndex++;
          return (
            <Fragment key={`${si}-${wi}`}>
              <span
                className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-top"
                aria-hidden
              >
                <motion.span
                  className={`inline-block ${seg.accent ? "text-sky-light" : ""}`}
                  variants={wordVariants(i)}
                >
                  {word}
                </motion.span>
              </span>{" "}
            </Fragment>
          );
        })
      )}
    </MotionTag>
  );
}
