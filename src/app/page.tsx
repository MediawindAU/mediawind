import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/Counter";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ServiceCards from "@/components/ServiceCards";
import ContactSection from "@/components/ContactSection";

const clients = [
  { src: "/images/client-asl.png", alt: "ASL" },
  { src: "/images/client-amtan.png", alt: "Amtan" },
  { src: "/images/client-drtanya.png", alt: "Dr. Tanya" },
  { src: "/images/client-strongtower.png", alt: "Strong Tower" },
  { src: "/images/client-wole-akosile.png", alt: "Wole Akosile Author" },
];

const whyUs = [
  {
    title: "Agile and Lean",
    description: "Faster turnaround, less wasted cost.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "User-First Design",
    description: "Strong focus on usability, not just features.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    ),
  },
  {
    title: "Ongoing Partnership",
    description: "Post-launch support and scalability.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    title: "Startup-Friendly Pricing",
    description: "Flexible models, revenue share, maintenance plans",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
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

export default function Home() {
  return (
    <>
      {/* Hero — deep navy, the brand's recommended logo background */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 fade-up">
            <div>
              <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
                We help <em className="text-sky-light">startups</em> turn ideas
                into scalable{" "}
                <em className="text-sky-light">digital products</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg font-medium text-white/80">
                From MVPs to full-scale apps, Mediawind is your partner in
                building purposeful, user-friendly, and reliable digital
                products.
              </p>
              <Link
                href="/services"
                className="mt-10 inline-block rounded-full bg-sky-light px-8 py-4 text-lg font-semibold text-navy hover:bg-white transition-colors"
              >
                Discover What We Do
              </Link>

              <div className="mt-14 grid max-w-md grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-sky-light sm:text-5xl">
                    <Counter to={5} />
                  </p>
                  <p className="mt-2 font-medium text-white/80">
                    Products Launched
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-sky-light sm:text-5xl">
                    <Counter to={6} suffix="+yrs" />
                  </p>
                  <p className="mt-2 font-medium text-white/80">
                    Doing Business In Australia
                  </p>
                </div>
              </div>
            </div>

            <ImagePlaceholder
              label="Founder & client at ease with technology — happy, enthusiastic, business setting, with a hint of the brand blues in the environment"
              aspect="aspect-[4/3]"
              className="bg-white/95"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold text-navy sm:text-4xl">
            We have delivered digital products to meet business expectations.
          </h2>
          <div className="mt-12">
            <ServiceCards />
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Startups we&apos;ve worked with
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {clients.map((c) => (
              <Image
                key={c.alt}
                src={c.src}
                alt={c.alt}
                width={140}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert opacity-90"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Case Study
          </h2>
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/images/case-study-bawo.webp"
              alt="Bawo Africa home page"
              width={1024}
              height={578}
              className="w-full rounded-2xl shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-navy sm:text-3xl">
                Bawo Africa
              </h3>
              <p className="mt-4 text-lg text-black/65">
                A platform dedicated to teach all African Languages in
                bite-sized learning format. The platform ensures users attain
                culture appreciation.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-block rounded-full bg-indigo-brand px-7 py-3 font-medium text-white hover:bg-blue-mid transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mediawind */}
      <section className="bg-pale/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Why Mediawind
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-light/40 text-navy">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {w.icon}
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-navy">
                  {w.title}
                </h3>
                <p className="mt-3 text-black/65">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Approach */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Our 5-Step Approach
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <div
                key={step}
                className="rounded-2xl border border-pale bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-semibold text-navy">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />

      {/* Blog teaser */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Startup Journey Insights
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-black/65">
            Follow our blog for expert insights on digital product development,
            startup strategies, and industry trends that matter to ambitious
            founders.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogTeasers.map((b) => (
              <Link
                key={b.title}
                href="/blog"
                className="group overflow-hidden rounded-2xl border border-pale bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={b.image}
                  alt={b.title}
                  width={768}
                  height={543}
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy group-hover:text-blue-mid transition-colors">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-black/65">
                    Building your first product might seem daunting.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
