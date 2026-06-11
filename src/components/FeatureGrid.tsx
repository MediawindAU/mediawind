"use client";

import { motion, useReducedMotion } from "motion/react";

export type Feature = { title: string; description: string };

export default function FeatureGrid({
  features,
  columns = 3,
  numbered = false,
}: {
  features: Feature[];
  columns?: 2 | 3 | 4;
  numbered?: boolean;
}) {
  const reduce = useReducedMotion();
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid gap-6 ${cols}`}>
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="group relative overflow-hidden rounded-3xl border border-ink/8 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-mid/30 hover:shadow-[0_24px_60px_-20px_rgba(3,23,80,0.25)]"
        >
          <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-light/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {numbered && (
            <p className="font-display mb-5 text-sm font-bold tracking-widest text-blue-mid">
              {String(i + 1).padStart(2, "0")}
            </p>
          )}
          <h3 className="font-display text-xl font-bold text-navy">
            {f.title}
          </h3>
          <p className="mt-3 leading-relaxed text-ink/65">{f.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
