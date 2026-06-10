import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import TechStackCTA from "@/components/TechStackCTA";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "App Development",
  description:
    "We embrace design thinking methodology to create digital products that users love and businesses thrive with.",
};

const designThinking = [
  {
    title: "Empathize",
    description:
      "We dive deep into understanding your users' needs, pain points, and desires through comprehensive research and user interviews.",
  },
  {
    title: "Define",
    description:
      "Together, we clearly articulate the problem your product solves and establish success metrics that matter to your business.",
  },
  {
    title: "Ideate",
    description:
      "Creative brainstorming sessions generate innovative solutions, exploring multiple approaches before selecting the most promising direction.",
  },
  {
    title: "Prototype",
    description:
      "Rapid prototyping allows us to test concepts quickly and iterate based on real user feedback before committing to full development.",
  },
  {
    title: "Test",
    description:
      "Continuous testing and refinement ensure your product delivers exceptional user experience and achieves your business objectives.",
  },
];

const services = [
  {
    title: "Mobile & Web App Development",
    description:
      "From concept to launch, we architect scalable applications using React, Flutter, Node.js, Ruby on Rails and cutting-edge technologies—so you can confidently serve customers on any device.",
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "Iterative design sprints ensure your product's flow, look and feel are both delightful and grounded in real user insights. Every interface element serves a purpose.",
  },
  {
    title: "Responsible AI Integration",
    description:
      "Tap into machine learning and AI safely—automate tasks, personalize experiences, and unlock new business opportunities while maintaining ethical standards.",
  },
  {
    title: "SaaS & Cloud Solutions",
    description:
      "Build subscription-ready platforms with secure backend architecture on AWS, Azure or Firebase. Recurring revenue, zero headaches, maximum scalability.",
  },
  {
    title: "Ongoing Maintenance & Support",
    description:
      "Stay current, secure and performing: monthly or annual support plans keep your product fresh, secure, and evolving long after launch.",
  },
  {
    title: "Branding & Digital Identity",
    description:
      "Logo, brand voice, visual guidelines and web presence that resonate with startup founders and their target audiences.",
  },
];

const process = [
  {
    title: "Discovery & Research",
    description:
      "Deep dive into your market, users and goals—so every decision is data-driven and strategically sound.",
  },
  {
    title: "Strategic Prototyping",
    description:
      "Rapid wireframes and clickable demos to validate ideas early, saving time and resources while ensuring product-market fit.",
  },
  {
    title: "MVP Development",
    description:
      "Focused feature set, lean codebase, fast time-to-market. Get your product in users' hands quickly and start learning.",
  },
  {
    title: "Iteration & Testing",
    description:
      "User feedback loops and A/B experiments to refine for optimal product-market fit and user satisfaction.",
  },
  {
    title: "Final Product Delivery",
    description:
      "Scalable, secure deployment—complete code handover, comprehensive documentation and team training.",
  },
  {
    title: "Growth & Support",
    description:
      "Continuous improvements, new feature rollouts and 24/7 maintenance as you scale to new heights.",
  },
];

export default function AppDevelopmentPage() {
  return (
    <>
      <PageHero eyebrow="App Development" title="App Development Is Now Easier">
        <p>
          We embrace design thinking methodology to create digital products
          that users love and businesses thrive with.
        </p>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Our Design Thinking Approach
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Five Phases, Infinite Possibilities
          </p>
          <div className="mt-12">
            <FeatureGrid features={designThinking} numbered />
          </div>
        </div>
      </section>

      <section className="bg-pale/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Comprehensive Services
          </h2>
          <div className="mt-12">
            <FeatureGrid features={services} />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Our Six-Step Process
          </h2>
          <div className="mt-12">
            <FeatureGrid features={process} numbered />
          </div>
        </div>
      </section>

      <TechStackCTA />
      <ContactSection />
    </>
  );
}
