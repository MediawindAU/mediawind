export type Feature = { title: string; description: string };

export default function FeatureGrid({
  features,
  columns = 3,
  numbered = false,
}: {
  features: Feature[];
  columns?: 2 | 3 | 4;
  numbered?: boolean;
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid gap-8 ${cols}`}>
      {features.map((f, i) => (
        <div
          key={f.title}
          className="rounded-2xl border border-pale bg-white p-8 shadow-sm"
        >
          {numbered && (
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-pale font-bold text-navy">
              {i + 1}
            </div>
          )}
          <h3 className="text-lg font-semibold text-navy">{f.title}</h3>
          <p className="mt-3 text-black/65">{f.description}</p>
        </div>
      ))}
    </div>
  );
}
