export default function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="wave-bg">
      <div className="wave-veil">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 fade-up">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-mid">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-4xl font-bold text-navy sm:text-5xl">
            {title}
          </h1>
          {children && (
            <div className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
