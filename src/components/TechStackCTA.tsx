import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";

export default function TechStackCTA({
  title = "Find out about our Tech Stacks",
}: {
  title?: string;
}) {
  return (
    <section className="aurora grain relative py-24 text-white">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
            Curious about our technology choices? We carefully select the best
            tools for each project.
          </p>
          <Magnetic className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-sky-light px-9 py-4 font-semibold text-navy transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
            >
              Explore Our Tech Stack
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
