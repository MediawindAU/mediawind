import Image from "next/image";

/*
 * Placeholder for brand photography. The brand guide directs: "People at
 * ease with technology, in business settings, wearing satisfied faces and
 * happy smiles, enthusiastic, cheerful, with a hint of the brand colors."
 * Replace by dropping a real image into public/images and swapping this
 * component for <Image>.
 */
export default function ImagePlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-blue-mid/40 bg-pale px-8 text-center`}
    >
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={56}
        height={56}
        className="h-14 w-14 opacity-40"
      />
      <p className="font-semibold text-navy">Image placeholder</p>
      <p className="max-w-sm text-sm text-black/60">{label}</p>
    </div>
  );
}
