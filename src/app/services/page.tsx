import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServiceCards from "@/components/ServiceCards";
import FeatureGrid from "@/components/FeatureGrid";
import TechStackCTA from "@/components/TechStackCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Let's cover all aspects of your product development — less friction, fewer delays, zero complications, and no wasted time.",
};

const howWeHelp = [
  {
    title: "Initial Discovery & Discussion",
    description:
      "We start every project with deep conversation about your vision. Understanding your goals, challenges, and aspirations allows us to recommend the best approach for bringing your idea to life.",
  },
  {
    title: "Brand Direction & Strategy",
    description:
      "Every great product tells a story. We collaborate with you to define how your business idea connects with end users, creating mood boards and visual representations that capture your vision perfectly.",
  },
  {
    title: "Rapid Prototyping",
    description:
      "Our team creates interactive prototypes quickly, allowing you to see and feel your product before development begins. We iterate based on your feedback until everything feels just right.",
  },
  {
    title: "Agile Execution",
    description:
      "Your project moves forward according to agreed timelines and milestones. We maintain transparent communication throughout, ensuring you're always informed and involved.",
  },
  {
    title: "Feedback & Refinement",
    description:
      "We believe great products are built through iteration. Your feedback shapes every revision, ensuring the final product exceeds your expectations.",
  },
  {
    title: "Completion & Ongoing Support",
    description:
      "Upon completion, we provide comprehensive handover of all assets and documentation. We also offer ongoing support to ensure your product continues performing at its best.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Let's cover all aspects of your product development">
        <p>
          Welcome to a new era of digital product development—less friction,
          fewer delays, zero complications, and no wasted time. Just results
          that matter.
        </p>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            How we help
          </h2>
          <div className="mt-12">
            <FeatureGrid features={howWeHelp} numbered />
          </div>
        </div>
      </section>

      <section className="bg-pale/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Check our services
          </h2>
          <div className="mt-12">
            <ServiceCards />
          </div>
        </div>
      </section>

      <TechStackCTA />
    </>
  );
}
