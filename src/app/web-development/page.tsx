import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import TechStackCTA from "@/components/TechStackCTA";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Web Development",
  description:
    "We craft responsive, fast-loading websites and web applications that not only look stunning but convert visitors into customers.",
};

const solutions = [
  {
    title: "Corporate Websites",
    description:
      "Professional brand presence with CMS integration, SEO optimization, and lead generation features that grow your business.",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting pages designed for specific campaigns, products, or services. Optimized for performance and conversion rates.",
  },
  {
    title: "Responsive Websites",
    description:
      "Mobile-first designs that adapt beautifully to any screen size. Your users get the perfect experience whether they're on a smartphone, tablet, or desktop.",
  },
  {
    title: "Progressive Web Apps (PWAs)",
    description:
      "Combine the best of web and mobile apps. Fast, engaging, and installable experiences that work offline and feel native on any device.",
  },
  {
    title: "E-commerce Platforms",
    description:
      "Custom online stores built for conversion. From product catalogs to payment processing, we create shopping experiences that drive sales.",
  },
  {
    title: "SaaS Web Applications",
    description:
      "Scalable, subscription-ready platforms with user management, billing integration, and robust admin dashboards.",
  },
];

const process = [
  {
    title: "Strategy & Planning",
    description:
      "We analyze your goals, target audience, and competitive landscape to create a strategic roadmap for your web presence.",
  },
  {
    title: "Design & Prototype",
    description:
      "User experience design, visual mockups, and interactive prototypes that validate the approach before development begins.",
  },
  {
    title: "Develop & Test",
    description:
      "Clean, maintainable code built with modern best practices. Comprehensive testing ensures everything works perfectly.",
  },
  {
    title: "Launch & Optimise",
    description:
      "Rapid prototyping allows us to test concepts quickly and iterate based on real user feedback before committing to full development.",
  },
  {
    title: "Maintain & Grow",
    description:
      "Regular updates, security patches, and feature enhancements to keep your web presence competitive and secure.",
  },
];

const techStack = [
  {
    title: "Frontend Dev",
    description:
      "No-Code (Webflow) · React & Next.js for dynamic, SEO-friendly applications · Vue.js & Nuxt.js lightweight, progressive frameworks · HTML5 & CSS3 modern, semantic markup · TypeScript type-safe, maintainable code · Tailwind CSS utility-first styling for consistent design.",
  },
  {
    title: "Performance & SEO",
    description:
      "Core Web Vitals optimization with Google-approved performance metrics · SEO best practices built in · Progressive enhancement that works for everyone · WCAG-compliant, inclusive, accessible design.",
  },
  {
    title: "Integration & APIs",
    description:
      "Headless CMS for flexible content management · Third-party APIs: payment gateways, analytics, marketing tools · Custom APIs with seamless backend integration · Analytics & tracking for data-driven optimization.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Web Development"
        title="Web Experiences That Drive Results"
      >
        <p>
          We craft responsive, fast-loading websites and web applications that
          not only look stunning but convert visitors into customers and users
          into advocates.
        </p>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Modern Web Solutions for Modern Businesses
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
            The web is your storefront, your sales team, and your brand
            ambassador all rolled into one. We build web experiences that work
            flawlessly across all devices and browsers while delivering the
            performance and functionality your business needs to thrive.
          </p>
          <div className="mt-12">
            <FeatureGrid features={solutions} />
          </div>
        </div>
      </section>

      <section className="bg-pale/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Our Process
          </h2>
          <div className="mt-12">
            <FeatureGrid features={process} numbered />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Our Tech Stack
          </h2>
          <div className="mt-12">
            <FeatureGrid features={techStack} />
          </div>
        </div>
      </section>

      <TechStackCTA title="Need Unique Tech Stacks" />
      <ContactSection />
    </>
  );
}
