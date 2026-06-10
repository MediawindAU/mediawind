"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-pale">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Media Wind"
              width={158}
              height={72}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-lg">
            <div className="relative group">
              <Link
                href="/services"
                className="flex items-center gap-1 font-semibold text-navy hover:text-blue-mid transition-colors"
              >
                Services
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="w-48 rounded-xl bg-white shadow-lg ring-1 ring-pale py-2">
                  {serviceLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-4 py-2.5 font-medium text-navy hover:bg-pale hover:text-blue-mid transition-colors"
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
                className="font-semibold text-navy hover:text-blue-mid transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-indigo-brand px-7 py-2.5 font-semibold text-white hover:bg-blue-mid transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-navy"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-pale bg-white px-4 pb-6 pt-2 text-lg">
          <button
            type="button"
            className="flex w-full items-center justify-between py-3 font-semibold text-navy"
            onClick={() => setServicesOpen((v) => !v)}
            aria-expanded={servicesOpen}
          >
            Services
            <svg
              className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {servicesOpen && (
            <div className="pl-4">
              <Link
                href="/services"
                className="block py-2 font-medium text-navy"
                onClick={() => setMobileOpen(false)}
              >
                All Services
              </Link>
              {serviceLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block py-2 font-medium text-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 font-semibold text-navy"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 inline-block rounded-full bg-indigo-brand px-7 py-2.5 font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
