import SplitWords from "@/components/motion/SplitWords";
import Reveal from "@/components/motion/Reveal";

export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="aurora grain relative text-white">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-44 sm:px-8 sm:pb-32 sm:pt-52">
        {eyebrow && (
          <Reveal>
            <p className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-light">
              <span className="h-px w-10 bg-sky-light/60" />
              {eyebrow}
            </p>
          </Reveal>
        )}
        <SplitWords
          segments={[{ text: title }]}
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
        />
        {children && (
          <Reveal delay={0.35}>
            <div className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
              {children}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
