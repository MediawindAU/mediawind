import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Branding",
  description:
    "We create compelling brand identities that connect with your audience and differentiate you in the marketplace.",
};

const services = [
  {
    title: "Brand Strategy & Positioning",
    description:
      "Deep discovery process to understand your values, mission, and competitive landscape. We define your unique value proposition and brand positioning strategy.",
  },
  {
    title: "Logo Design & Visual Identity",
    description:
      "Custom logo creation with comprehensive brand guidelines including color palettes, typography, and visual elements that work across all media.",
  },
  {
    title: "Brand Guidelines & Systems",
    description:
      "Detailed brand standards that ensure consistency across all applications, from business cards to billboards.",
  },
  {
    title: "Website Design & Development",
    description:
      "Digital brand experiences that reflect your identity and convert visitors into customers or users.",
  },
  {
    title: "Marketing Materials",
    description:
      "Business cards, brochures, presentations, and other collateral that reinforce your brand message.",
  },
  {
    title: "Digital Assets",
    description:
      "Social media templates, email signatures, and digital graphics that maintain brand consistency online.",
  },
];

const process = [
  {
    title: "Discovery & Research",
    description:
      "We dive deep into your business, audience, and competitive landscape to understand what makes you unique.",
  },
  {
    title: "Strategy Development",
    description:
      "Brand positioning, messaging framework, and strategic direction that guides all creative decisions.",
  },
  {
    title: "Creative Exploration",
    description:
      "Multiple design concepts and directions exploring different visual approaches to your brand story.",
  },
  {
    title: "Refinement & Selection",
    description:
      "Collaborative process to refine the chosen direction and ensure every element serves your brand goals.",
  },
  {
    title: "Brand System Creation",
    description:
      "Complete brand guidelines and asset library that maintains consistency across all applications.",
  },
  {
    title: "Implementation & Launch",
    description:
      "Rollout strategy and support to ensure your new brand identity is successfully implemented across all touchpoints.",
  },
];

const brandSystem = [
  {
    title: "Logo & Lockups",
    description:
      "Primary logo, secondary marks, and lockup variations for different applications and contexts.",
  },
  {
    title: "Color Palette",
    description:
      "Primary and secondary colors with specific color codes for print, digital, and other media applications.",
  },
  {
    title: "Typography System",
    description:
      "Font families, hierarchy, and usage guidelines for headlines, body text, and special applications.",
  },
  {
    title: "Imagery Style",
    description:
      "Photography direction, illustration style, and visual treatment guidelines that support your brand aesthetic.",
  },
  {
    title: "Voice & Tone",
    description:
      "Brand personality, messaging guidelines, and tone of voice that stays consistent across all communications.",
  },
  {
    title: "Brand Applications",
    description:
      "Templates and examples showing how your brand works across business cards, websites, social media, and other materials.",
  },
];

const whyItMatters = [
  {
    title: "Differentiation",
    description:
      "Stand out in a crowded marketplace with a unique brand identity that clearly communicates your value.",
  },
  {
    title: "Trust Building",
    description:
      "Professional, consistent branding builds credibility and trust with potential customers and partners.",
  },
  {
    title: "Premium Positioning",
    description:
      "Strong brand identity allows you to command higher prices and attract quality customers.",
  },
  {
    title: "Team Alignment",
    description:
      "Clear brand guidelines ensure everyone in your organization represents your brand consistently.",
  },
  {
    title: "Marketing Efficiency",
    description:
      "Consistent brand elements make all your marketing efforts more effective and memorable.",
  },
];

const focusAreas = [
  {
    title: "Brand Strategy Focus Areas",
    description:
      "Startup Brands — building brand identity from scratch with growth and scalability in mind · Brand Refreshes — updating existing brands to better reflect company evolution and market position · Digital-First Brands — optimized for digital experiences and online customer acquisition · B2B Brands — professional branding that builds trust in business-to-business relationships · Product Brands — distinct identities for individual products within larger company portfolios.",
  },
  {
    title: "Brand Deliverables",
    description:
      "Brand Guidelines Document — comprehensive standards with usage guidelines, do's and don'ts, and application examples · Logo Package — complete suite with various formats, sizes, and color variations · Brand Asset Library — organized collection of fonts, colors, patterns, and templates · Website Integration — brand-consistent web design and development · Marketing Templates — ready-to-use templates for common materials · Social Media Kit — profile images, cover photos, and post templates for all major platforms.",
  },
];

export default function BrandingPage() {
  return (
    <>
      <PageHero eyebrow="Branding" title="Your Brand Story, Beautifully Told">
        <p>
          We create compelling brand identities that connect with your audience
          and differentiate you in the marketplace. From logos to complete
          brand systems, we bring your vision to life.
        </p>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            More Than Just a Logo
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-black/65">
            Your brand is the sum of every interaction someone has with your
            business. We help you craft a cohesive brand identity that tells
            your story authentically and resonates with your target audience
            across every touchpoint.
          </p>
          <div className="mt-12">
            <FeatureGrid features={services} />
          </div>
        </div>
      </section>

      <section className="bg-pale/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Our Branding Process
          </h2>
          <div className="mt-12">
            <FeatureGrid features={process} numbered />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            What a Complete Brand System Includes
          </h2>
          <div className="mt-12">
            <FeatureGrid features={brandSystem} />
          </div>
        </div>
      </section>

      <section className="bg-pale/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Why Brand Identity Matters
          </h2>
          <div className="mt-12">
            <FeatureGrid features={whyItMatters} />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {focusAreas.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-pale bg-white p-10 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-navy">{f.title}</h2>
                <p className="mt-4 leading-relaxed text-black/65">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
