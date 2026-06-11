import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SplitWords from "@/components/motion/SplitWords";
import Reveal from "@/components/motion/Reveal";

export default function NotFound() {
  return (
    <section className="aurora grain relative flex min-h-svh flex-col items-center justify-center px-5 text-center text-white">
      <p className="font-display text-[8rem] font-bold leading-none text-sky-light/25 sm:text-[12rem]">
        404
      </p>
      <SplitWords
        segments={[{ text: "This page drifted away with the wind" }]}
        className="mt-2 max-w-2xl font-display text-3xl font-bold sm:text-5xl"
      />
      <Reveal delay={0.4}>
        <p className="mx-auto mt-6 max-w-md text-white/70">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on course.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-sky-light px-8 py-4 font-semibold text-navy transition-transform duration-300 hover:scale-[1.04]"
        >
          <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to home
        </Link>
      </Reveal>
    </section>
  );
}
