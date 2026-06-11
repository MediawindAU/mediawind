"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection({
  id = "contact",
  showHeading = true,
}: {
  id?: string;
  showHeading?: boolean;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const reduce = useReducedMotion();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "mt-2 w-full rounded-2xl border border-ink/10 bg-pale/60 px-5 py-4 text-ink placeholder-ink/35 transition-all duration-300 focus:border-blue-mid focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-light/30";
  const labelClass = "text-sm font-semibold text-navy";

  return (
    <section id={id} className="wave-bg">
      <div className="wave-veil py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {showHeading && (
              <>
                <p className="flex items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-mid">
                  <span className="h-px w-10 bg-blue-mid/50" />
                  Contact
                  <span className="h-px w-10 bg-blue-mid/50" />
                </p>
                <h2 className="mt-5 text-center font-display text-3xl font-bold text-navy sm:text-5xl">
                  Kickstart your project
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-center leading-relaxed text-ink/65">
                  Fill out the form below and we&apos;ll contact you as soon as
                  possible to discuss how we can bring your digital vision to
                  life.
                </p>
              </>
            )}

            <form
              className={`${showHeading ? "mt-12" : ""} space-y-6`}
              onSubmit={handleSubmit}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>
                    Email <span className="text-blue-mid">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>Company</span>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    placeholder="Your startup or business"
                    className={inputClass}
                  />
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>Project Description</span>
                  <input
                    type="text"
                    name="projectDescription"
                    placeholder="e.g. Mobile app MVP"
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>Project Timeline</span>
                  <input
                    type="text"
                    name="projectTimeline"
                    placeholder="e.g. 3–6 months"
                    className={inputClass}
                  />
                </label>
              </div>
              <label className="block">
                <span className={labelClass}>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your idea…"
                  className={inputClass}
                />
              </label>
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center gap-2 rounded-full bg-navy px-10 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.04] hover:bg-indigo-brand active:scale-[0.98] disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send"}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
              {status === "sent" && (
                <p className="text-center font-medium text-green-700" role="status">
                  Thanks! Your message has been sent — we&apos;ll be in touch
                  soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-red-600" role="alert">
                  Something went wrong sending your message. Please email us
                  directly at{" "}
                  <a href="mailto:femi.o@mediawind.co" className="underline">
                    femi.o@mediawind.co
                  </a>
                  .
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
