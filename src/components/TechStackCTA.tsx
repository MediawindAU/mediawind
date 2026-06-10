import Link from "next/link";

export default function TechStackCTA({
  title = "Find out about our Tech Stacks",
}: {
  title?: string;
}) {
  return (
    <section className="bg-navy py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-4 text-sky-light">
          Curious about our technology choices? We carefully select the best
          tools for each project.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 font-medium text-white border border-indigo-brand hover:bg-sky transition-colors"
        >
          Explore Our Tech Stack
        </Link>
      </div>
    </section>
  );
}
