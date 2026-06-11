"use client";

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
      {/* sky hairline that traces in as the image settles */}
      <motion.span
        aria-hidden
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sky-light to-blue-mid"
        initial={reduce ? { width: "100%" } : { width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
