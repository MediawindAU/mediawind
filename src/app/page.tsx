import Link from "next/link";
import Image from "next/image";
import { Zap, Users, HeartHandshake, Wallet, ArrowUpRight, ChevronDown } from "lucide-react";
import Counter from "@/components/Counter";
import ServiceCards from "@/components/ServiceCards";
import ContactSection from "@/components/ContactSection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/motion/Reveal";
import SplitWords from "@/components/motion/SplitWords";
import Magnetic from "@/components/motion/Magnetic";
import HeroParallax from "@/components/motion/HeroParallax";
import PointerGlowArea from "@/components/motion/PointerGlow";

const whyUs = [
  {
    title: "Agile and Lean",
    description: "Faster turnaround, less wasted cost.",
    Icon: Zap,
  },
  {
    title: "User-First Design",
    description: "Strong focus on usability, not just features.",
    Icon: Users,
  },
  {
    title: "Ongoing Partnership",
    description: "Post-launch support and scalability.",
    Icon: HeartHandshake,
  },
  {
    title: "Startup-Friendly Pricing",
    description: "Flexible models, revenue share, maintenance plans",
    Icon: Wallet,
  },
];

const steps = [
  "Discovery and Research",
  "Design and Prototype",
  "Minimum Viable Product Build",
  "Product launch",
  "Growth and Support",
];

const blogTeasers = [
  {
    image: "/images/blog-saas.png",
    title: "The Future of SaaS in emerging market",
  },
  {
    image: "/images/blog-mvp.png",
    title: "5 Mistakes Start-Ups make when building MVP",
  },
  {
    image: "/images/blog-ux.png",
    title: "Why UX is important when building products",
  },
];

function SectionHeading({
  eyebrow,
  title,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div>
      <Reveal>
        <p
          className={`flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.3em] ${
            dark ? "text-sky-light" : "text-blue-mid"
          }`}
        >
          <span className={`h-px w-10 ${dark ? "bg-sky-light/60" : "bg-blue-mid/50"}`} />
          {eyebrow}
        </p>
      </Reveal>
      <SplitWords
        as="h2"
        inView
        delay={0.1}
        segments={[{ text: title }]}
        className={`mt-5 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-5xl ${
          dark ? "text-white" : "text-navy"
        }`}
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <PointerGlowArea className="aurora grain relative flex min-h-svh flex-col text-white">
        <HeroParallax className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-16 pt-40 sm:px-8">
          <Reveal y={0}>
            <p className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-light">
              <span className="h-px w-10 bg-sky-light/60" />
              Digital Product Studio — Australia
            </p>
          </Reveal>
          <SplitWords
            delay={0.15}
            segments={[
              { text: "We help" },
              { text: "startups", accent: true },
              { text: "turn ideas into scalable" },
              { text: "digital products", accent: true },
            ]}
            className="mt-7 max-w-5xl font-display text-[2.6rem] font-bold leading-[1.02] sm:text-7xl lg:text-[5.25rem]"
          />
          <Reveal delay={0.6}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
              From MVPs to full-scale apps, Mediawind is your partner in
              building purposeful, user-friendly, and reliable digital
              products.
            </p>
          </Reveal>
          <Reveal delay={0.75}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Magnetic>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 rounded-full bg-sky-light px-8 py-4 text-lg font-semibold text-navy transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
                >
                  Discover What We Do
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Magnetic>
              <Link
                href="/contact"
                className="link-sweep text-lg font-medium text-white/85"
              >
                Start a project
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.9}>
            <div className="mt-16 flex gap-14">
              <div>
                <p className="font-display text-5xl font-bold text-sky-light sm:text-6xl">
                  <Counter to={5} />
                </p>
                <p className="mt-2 text-white/70">Products Launched</p>
              </div>
              <div>
                <p className="font-display text-5xl font-bold text-sky-light sm:text-6xl">
                  <Counter to={6} suffix="+yrs" />
                </p>
                <p className="mt-2 text-white/70">Doing Business In Australia</p>
              </div>
            </div>
          </Reveal>
        </HeroParallax>

        {/* Clients marquee */}
        <div className="relative z-10 border-t border-sky-light/15 py-10">
          <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.35em] text-white/55">
            Startups we&apos;ve worked with
          </p>
          <Marquee />
          <ChevronDown
            className="absolute -top-14 right-8 hidden h-6 w-6 animate-bounce text-sky-light/70 lg:block"
            aria-hidden
          />
        </div>
      </PointerGlowArea>

      {/* ——— Services ——— */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="We have delivered digital products to meet business expectations."
          />
          <div className="mt-14">
            <ServiceCards />
          </div>
        </div>
      </section>

      {/* ——— Case study ——— */}
      <section className="wave-bg">
        <div className="wave-veil py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="Case study" title="Bawo Africa" />
            <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
              <Reveal>
                <div className="group overflow-hidden rounded-3xl shadow-[0_32px_80px_-24px_rgba(3,23,80,0.4)]">
                  <Image
                    src="/images/case-study-bawo.webp"
                    alt="Bawo Africa home page"
                    width={1024}
                    height={578}
                    className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-xl leading-relaxed text-ink/70 sm:text-2xl">
                  A platform dedicated to teach all African Languages in
                  bite-sized learning format. The platform ensures users attain
                  culture appreciation.
                </p>
                <Link
                  href="/contact"
                  className="group mt-10 inline-flex items-center gap-2 font-display text-lg font-bold text-navy"
                >
                  <span className="link-sweep">Learn More</span>
                  <ArrowUpRight className="h-5 w-5 text-blue-mid transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Why Mediawind ——— */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <ImagePlaceholder
                label="Founder & client at ease with technology — happy, enthusiastic, business setting, with a hint of the brand blues in the environment"
                aspect="aspect-[4/5]"
                className="lg:sticky lg:top-28"
              />
            </Reveal>
            <div>
              <SectionHeading eyebrow="Why Mediawind" title="A partner, not a vendor." />
              <div className="mt-12 space-y-4">
                {whyUs.map((w, i) => (
                  <Reveal key={w.title} delay={i * 0.08}>
                    <div className="group flex items-start gap-5 rounded-3xl border border-ink/8 p-6 transition-all duration-500 hover:border-blue-mid/30 hover:bg-pale/50">
                      <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-navy p-3.5 text-sky-light transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                        <w.Icon className="h-6 w-6" />
                      </span>
                      <span>
                        <span className="block font-display text-xl font-bold text-navy">
                          {w.title}
                        </span>
                        <span className="mt-1 block text-ink/65">
                          {w.description}
                        </span>
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 5-Step Approach ——— */}
      <section className="aurora grain relative py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="How we work" title="Our 5-Step Approach" dark />
          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <Reveal key={step} delay={i * 0.1}>
                <div className="relative">
                  <p className="font-display text-6xl font-bold text-sky-light/25">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <span className="mt-4 block h-px w-full bg-gradient-to-r from-sky-light/60 to-transparent" />
                  <h3 className="mt-4 font-display text-lg font-bold">
                    {step}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Blog teaser ——— */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Insights" title="Startup Journey Insights" />
            <Reveal delay={0.15}>
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 font-display text-lg font-bold text-navy"
              >
                <span className="link-sweep">All articles</span>
                <ArrowUpRight className="h-5 w-5 text-blue-mid transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogTeasers.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <Link href="/blog" className="group block">
                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src={b.image}
                      alt={b.title}
                      width={768}
                      height={543}
                      className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy transition-colors duration-300 group-hover:text-blue-mid">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-ink/60">
                    Building your first product might seem daunting.
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Contact ——— */}
      <ContactSection />
    </>
  );
}
