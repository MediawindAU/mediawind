import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import TechStackCTA from "@/components/TechStackCTA";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Backend Development",
  description:
    "We build the invisible infrastructure that makes your applications fast, secure, and scalable.",
};

const capabilities = [
  {
    title: "RESTful APIs",
    description:
      "Clean, well-documented APIs that enable seamless communication between your frontend applications and server-side logic.",
  },
  {
    title: "GraphQL APIs",
    description:
      "Flexible, efficient APIs that give your frontend applications exactly the data they need, when they need it.",
  },
  {
    title: "Database Design & Management",
    description:
      "Optimized database structures with proper indexing, relationships, and scaling strategies for maximum performance.",
  },
  {
    title: "Authenticate & Authorize",
    description:
      "Secure user management systems with role-based access control, multi-factor authentication, and session management.",
  },
  {
    title: "Real-time Systems",
    description:
      "WebSocket connections, push notifications, and live data synchronization for dynamic user experiences.",
  },
  {
    title: "Payment Processing",
    description:
      "Secure payment gateways, subscription management, and financial transaction handling with PCI compliance.",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Scalable server architecture on AWS, Azure, or Google Cloud with auto-scaling and high availability.",
  },
  {
    title: "Microservice Architecture",
    description:
      "Modular, independently deployable services that scale efficiently and maintain system reliability.",
  },
];

const techStack = [
  {
    title: "Programming Languages",
    description:
      "Node.js fast, scalable JavaScript runtime · Python versatile, powerful backend development · Ruby on Rails convention-over-configuration framework · Go high-performance concurrent programming · Java enterprise-grade applications.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS/Azure/GCP cloud platform expertise · Docker & Kubernetes containerization and orchestration · CI/CD pipelines with automated testing and deployment · Monitoring & logging for system health · Security best practices for data protection and compliance.",
  },
  {
    title: "Databases & Storage",
    description:
      "PostgreSQL robust relational database · MongoDB flexible document database · Redis high-performance caching · Amazon S3 scalable file storage · Elasticsearch powerful search capabilities.",
  },
];

const process = [
  {
    title: "Architecture Planning",
    description:
      "We design your backend system architecture with scalability, security, and performance in mind from day one.",
  },
  {
    title: "Database Design",
    description:
      "Optimal database structure and relationships that support your current needs and future growth.",
  },
  {
    title: "API Development",
    description:
      "Clean, well-documented APIs that serve your frontend applications and integrate with third-party services.",
  },
  {
    title: "Security Implementation",
    description:
      "Multi-layered security approach including authentication, authorization, data encryption, and vulnerability protection.",
  },
  {
    title: "Performance Optimization",
    description:
      "Caching strategies, query optimization, and server configuration for maximum speed and efficiency.",
  },
  {
    title: "Monitoring & Maintenance",
    description:
      "Comprehensive monitoring, automated backups, and proactive maintenance to ensure 99.9% uptime.",
  },
];

const qualities = [
  {
    title: "Scalability",
    description:
      "Systems that grow with your business, handling increased load without compromising performance.",
  },
  {
    title: "Security",
    description:
      "Industry-standard security practices protect your data and comply with regulations like GDPR and CCPA.",
  },
  {
    title: "Performance",
    description:
      "Optimized queries, efficient caching, and smart architecture deliver lightning-fast response times.",
  },
  {
    title: "Reliability",
    description:
      "Robust error handling, automated failover, and comprehensive monitoring ensure maximum uptime.",
  },
  {
    title: "Integration Ready",
    description:
      "Built to integrate seamlessly with third-party services, APIs, and future system additions.",
  },
];

export default function BackendDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Backend Development"
        title="Robust Backend Systems That Power Your Success"
      >
        <p>
          We build the invisible infrastructure that makes your applications
          fast, secure, and scalable. From APIs to databases, we create the
          solid foundation your digital products depend on.
        </p>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            The Engine Behind Great Applications
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
            Your users never see the backend, but they definitely feel it. Slow
            responses, security vulnerabilities, and system crashes all stem
            from poor backend architecture. We build server-side solutions that
            are fast, secure, and built to handle whatever your business throws
            at them.
          </p>
          <div className="mt-12">
            <FeatureGrid features={capabilities} columns={4} />
          </div>
        </div>
      </section>

      <section className="bg-pale/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Our Tech Stack
          </h2>
          <div className="mt-12">
            <FeatureGrid features={techStack} />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Our Backend Process
          </h2>
          <div className="mt-12">
            <FeatureGrid features={process} numbered />
          </div>
        </div>
      </section>

      <section className="bg-pale/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Built for the Long Run
          </h2>
          <div className="mt-12">
            <FeatureGrid features={qualities} />
          </div>
        </div>
      </section>

      <TechStackCTA title="Need Unique Tech Stacks" />
      <ContactSection />
    </>
  );
}
