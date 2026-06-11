"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

const serviceLinks = [
  { href: "/app-development", label: "App Dev" },
  { href: "/web-development", label: "Web Dev" },
  { href: "/backend-development", label: "Backend Dev" },
  { href: "/branding", label: "Branding" },
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
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

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
            <div className="group relative">
              <Link
                href="/services"
                className="link-sweep flex items-center gap-1.5 text-[15px] font-medium tracking-wide"
              >
                Services
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                <div className="w-52 overflow-hidden rounded-2xl bg-navy-deep/95 p-2 shadow-2xl ring-1 ring-sky-light/20 backdrop-blur-md">
                  {serviceLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block rounded-xl px-4 py-2.5 text-[15px] text-white/85 transition-colors hover:bg-indigo-brand/40 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
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
