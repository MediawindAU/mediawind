"use client";

import { useId } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

/*
 * Brand photography frame: cinematic settle-in on scroll (the image
 * starts slightly zoomed and eases home), a slow drift-zoom on hover,
 * and an optional brand-blue wash that unifies imagery with the palette.
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
  const gradientId = useId();

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl shadow-[0_32px_80px_-24px_rgba(3,23,80,0.35)] ${className}`}
    >
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
      {/* sky hairline that traces around the full frame as the image settles */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#98cbf1" />
            <stop offset="55%" stopColor="#5488c7" />
            <stop offset="100%" stopColor="#98cbf1" />
          </linearGradient>
        </defs>
        <motion.rect
          x="1.5"
          y="1.5"
          width="calc(100% - 3px)"
          height="calc(100% - 3px)"
          rx="22.5"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="3"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  );
}
