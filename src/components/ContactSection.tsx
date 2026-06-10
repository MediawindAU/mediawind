"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection({ id = "contact" }: { id?: string }) {
  const [status, setStatus] = useState<Status>("idle");

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
    "w-full rounded-xl border border-gray-brand/40 bg-white px-4 py-3 text-ink placeholder-gray-brand focus:border-blue-mid focus:outline-none focus:ring-2 focus:ring-sky-light/50";

  return (
    <section id={id} className="bg-pale/60 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
          Kickstart your project
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-black/65">
          Fill out the form below and we&apos;ll contact you as soon as
          possible to discuss how we can bring your digital vision to life.
        </p>

        <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className={inputClass}
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              className={inputClass}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              name="projectDescription"
              placeholder="Project Description"
              className={inputClass}
            />
            <input
              type="text"
              name="projectTimeline"
              placeholder="Project Timeline"
              className={inputClass}
            />
          </div>
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            className={inputClass}
          />
          <div className="text-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-indigo-brand px-10 py-3.5 font-medium text-white hover:bg-blue-mid transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
          </div>
          {status === "sent" && (
            <p className="text-center font-medium text-green-700" role="status">
              Thanks! Your message has been sent — we&apos;ll be in touch soon.
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
      </div>
    </section>
  );
}
