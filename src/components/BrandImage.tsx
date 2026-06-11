"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";

/*
 * Brand photography frame: cinematic settle-in on scroll (the image
 * starts slightly zoomed and eases home), a slow drift-zoom on hover,
 * an optional brand-blue wash, and angular sky-blue corner hairlines
 * that draw themselves in — echoing the focus-reticle icon language.
 */
export default function BrandImage({
  src,
  alt,
  width,
  height,
  aspect = "aspect-[3/2]",
  position = "object-center",
  overlay = false,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspect?: string;
  position?: string;
  overlay?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  /* Bars start at scale 0 (zero area), so the viewport observer must live
     on the corner container — the bars animate via propagated variants. */
  const bar = (axis: "x" | "y", delay: number): Variants => {
    const transition = {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    };
    return axis === "x"
      ? { hidden: { scaleX: 0 }, visible: { scaleX: 1, transition } }
      : { hidden: { scaleY: 0 }, visible: { scaleY: 1, transition } };
  };

  const cornerProps = {
    initial: reduce ? ("visible" as const) : ("hidden" as const),
    whileInView: "visible" as const,
    viewport: { once: true, margin: "-80px" },
  };

  return (
    <div className={`relative ${className}`}>
      <div className="group relative overflow-hidden rounded-3xl shadow-[0_32px_80px_-24px_rgba(3,23,80,0.35)]">
        <motion.div
          initial={reduce ? false : { scale: 1.14, opacity: 0.4 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`${aspect} ${position} w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]`}
          />
        </motion.div>
        {overlay && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-navy/55 via-indigo-brand/20 to-sky-light/15 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-70"
          />
        )}
      </div>

      {/* angular corner hairlines, offset just outside the rounded frame */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-2.5 -top-2.5 h-32 w-32"
        {...cornerProps}
      >
        <motion.span
          className="absolute left-0 top-0 block h-[3px] w-24 origin-left bg-gradient-to-r from-blue-mid to-sky-light sm:w-32"
          variants={bar("x", 0.35)}
        />
        <motion.span
          className="absolute left-0 top-0 block w-[3px] h-24 origin-top bg-gradient-to-b from-blue-mid to-sky-light sm:h-32"
          variants={bar("y", 0.5)}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-2.5 -right-2.5 h-32 w-32"
        {...cornerProps}
      >
        <motion.span
          className="absolute bottom-0 right-0 block h-[3px] w-24 origin-right bg-gradient-to-l from-blue-mid to-sky-light sm:w-32"
          variants={bar("x", 0.5)}
        />
        <motion.span
          className="absolute bottom-0 right-0 block w-[3px] h-24 origin-bottom bg-gradient-to-t from-blue-mid to-sky-light sm:h-32"
          variants={bar("y", 0.65)}
        />
      </motion.div>
    </div>
  );
}
