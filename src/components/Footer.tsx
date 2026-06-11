import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    // Deep navy — the brand guide's recommended background for the logo
    <footer className="aurora grain relative text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-light">
            Have an idea?
          </p>
          <a
            href="mailto:femi.o@mediawind.co"
            className="group mt-5 inline-flex flex-wrap items-center gap-3 font-display text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            <span className="transition-colors duration-300 group-hover:text-sky-light">
              femi.o@mediawind.co
            </span>
            <ArrowUpRight className="h-8 w-8 text-sky-light transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:translate-x-1.5 sm:h-12 sm:w-12" />
          </a>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-sky-light/15 pt-14 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11"
              />
              <span className="font-display text-xl font-bold tracking-wide">
                Media Wind
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-white/65">
              Transforming ideas into digital experiences
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-light">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-sweep text-white/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-light">
              Get in touch
            </h3>
            <p className="mt-5">
              <a
                href="mailto:femi.o@mediawind.co"
                className="link-sweep text-white/75 transition-colors hover:text-white"
              >
                femi.o@mediawind.co
              </a>
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/mediawind.co"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-sky-light/25 p-2.5 text-white/75 transition-all duration-300 hover:border-sky-light hover:bg-sky-light hover:text-navy"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/mediawind-australia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-sky-light/25 p-2.5 text-white/75 transition-all duration-300 hover:border-sky-light hover:bg-sky-light hover:text-navy"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Giant outlined wordmark */}
      <div className="overflow-hidden" aria-hidden>
        <p className="text-outline select-none whitespace-nowrap text-center font-display text-[18vw] font-bold leading-[0.85] tracking-tight">
          Media Wind
        </p>
      </div>

      <div className="relative border-t border-sky-light/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 text-sm text-white/50 sm:px-8">
          <span>©{new Date().getFullYear()} All rights reserved</span>
          <span className="tracking-widest">Refreshing &amp; Peaceful</span>
        </div>
      </div>
    </footer>
  );
}
