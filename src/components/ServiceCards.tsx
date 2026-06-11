"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    href: "/app-development",
    image: "/images/service-app-dev.webp",
    title: "App Development (Web + Mobile)",
    blurb: "Native-feel products for every screen, from MVP to scale.",
  },
  {
    href: "/app-development",
    image: "/images/service-saas.webp",
    title: "SaaS & E-Commerce Solutions",
    blurb: "Subscription-ready platforms and stores built to convert.",
  },
  {
    href: "/backend-development",
    image: "/images/service-cloud.webp",
    title: "Cloud & Backend Systems",
    blurb: "The invisible infrastructure that keeps everything fast.",
  },
  {
    href: "/branding",
    image: "/images/service-design.webp",
    title: "User Centered Design Approach",
    blurb: "Identity and interfaces shaped around real people.",
  },
];

/* Large interactive index rows — editorial, awwwards-style. */
export default function ServiceCards() {
  const reduce = useReducedMotion();
  return (
    <div className="border-t border-ink/10">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={s.href}
            className="group relative flex items-center gap-6 overflow-hidden border-b border-ink/10 py-8 transition-colors duration-500 sm:gap-10 sm:py-10"
          >
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-navy transition-transform duration-500 ease-out group-hover:scale-y-100" />
            <span className="relative font-display text-sm font-semibold text-blue-mid transition-colors duration-300 group-hover:text-sky-light sm:text-base">
              0{i + 1}
            </span>
            <Image
              src={s.image}
              alt=""
              width={64}
              height={64}
              className="relative h-12 w-12 object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert sm:h-16 sm:w-16"
            />
            <span className="relative flex-1">
              <span className="block font-display text-xl font-bold text-navy transition-colors duration-300 group-hover:text-white sm:text-3xl">
                {s.title}
              </span>
              <span className="mt-1 block text-sm text-ink/55 transition-colors duration-300 group-hover:text-sky-light/85 sm:text-base">
                {s.blurb}
              </span>
            </span>
            <ArrowUpRight className="relative h-7 w-7 shrink-0 text-blue-mid transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-light sm:h-9 sm:w-9" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
