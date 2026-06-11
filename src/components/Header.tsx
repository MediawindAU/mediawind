"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import {
  AppDevIcon,
  WebDevIcon,
  CloudBackendIcon,
  UserCenteredIcon,
} from "@/components/ServiceIcons";

const serviceLinks = [
  {
    href: "/app-development",
    label: "App Dev",
    blurb: "Web + mobile products, MVP to scale",
    Icon: AppDevIcon,
  },
  {
    href: "/web-development",
    label: "Web Dev",
    blurb: "Sites and web apps that convert",
    Icon: WebDevIcon,
  },
  {
    href: "/backend-development",
    label: "Backend Dev",
    blurb: "APIs, cloud and infrastructure",
    Icon: CloudBackendIcon,
  },
  {
    href: "/branding",
    label: "Branding",
    blurb: "Identity shaped around real people",
    Icon: UserCenteredIcon,
  },
];

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const mobileLinks = [
  { href: "/services", label: "Services" },
  ...serviceLinks,
  ...navLinks,
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-all duration-500 ${
        scrolled && !mobileOpen
          ? "bg-navy/85 backdrop-blur-md shadow-[0_1px_0_rgba(152,203,241,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="z-50 flex items-center gap-3">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <span className="font-display text-xl font-bold tracking-wide">
              Media Wind
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-9 md:flex">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocusCapture={() => setServicesOpen(true)}
              onBlurCapture={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setServicesOpen(false);
                }
              }}
            >
              <Link
                href="/services"
                aria-expanded={servicesOpen}
                className="link-sweep flex items-center gap-1.5 text-[15px] font-medium tracking-wide"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-5"
                    initial={reduce ? false : { opacity: 0, y: 14, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="aurora grain relative w-[440px] overflow-hidden rounded-3xl p-3 shadow-[0_32px_80px_-16px_rgba(2,8,40,0.8)] ring-1 ring-sky-light/20">
                      {/* brand pattern watermark */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 opacity-[0.08]"
                        style={{
                          backgroundImage: "url(/images/pattern-wave.png)",
                          backgroundSize: "190px",
                        }}
                      />
                      <div className="relative grid">
                        {serviceLinks.map((s, i) => (
                          <motion.div
                            key={s.href}
                            initial={reduce ? false : { opacity: 0, x: -14 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.06 + i * 0.05,
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            <Link
                              href={s.href}
                              className="group/item flex items-center gap-4 rounded-2xl p-3.5 transition-colors duration-300 hover:bg-white/[0.07]"
                            >
                              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-sky-light/15 transition-all duration-300 group-hover/item:bg-sky-light/15 group-hover/item:ring-sky-light/40">
                                <s.Icon tone="dark" className="h-7 w-7" />
                              </span>
                              <span className="flex-1">
                                <span className="block font-display text-[15px] font-bold text-white">
                                  {s.label}
                                </span>
                                <span className="block text-[13px] text-white/55 transition-colors duration-300 group-hover/item:text-sky-light/80">
                                  {s.blurb}
                                </span>
                              </span>
                              <ArrowUpRight className="h-4.5 w-4.5 -translate-x-1 text-sky-light opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      <motion.div
                        className="relative mt-2 border-t border-sky-light/15 px-3.5 pb-1.5 pt-3"
                        initial={reduce ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        <Link
                          href="/services"
                          className="group/all flex items-center justify-between text-[13px] font-semibold uppercase tracking-[0.2em] text-sky-light/80 transition-colors hover:text-sky-light"
                        >
                          All services
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/all:-translate-y-0.5 group-hover/all:translate-x-0.5" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="link-sweep text-[15px] font-medium tracking-wide"
                aria-current={pathname === l.href ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full bg-sky-light px-7 py-2.5 text-[15px] font-semibold text-navy transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="z-50 p-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="relative block h-4 w-7">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="aurora grain fixed inset-0 z-40 flex flex-col justify-center px-8 md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <ul className="space-y-2">
              {mobileLinks.map((l, i) => (
                <motion.li
                  key={l.href + l.label}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={l.href}
                    className={`font-display block py-1.5 font-bold text-white/90 transition-colors hover:text-sky-light ${
                      i === 0 || i > 4 ? "text-4xl" : "pl-6 text-2xl text-white/60"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.p
              className="mt-12 text-sm tracking-widest text-sky-light/70"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              femi.o@mediawind.co
            </motion.p>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
