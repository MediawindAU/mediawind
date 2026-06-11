import Image from "next/image";

const clients = [
  { src: "/images/client-asl.png", alt: "ASL" },
  { src: "/images/client-amtan.png", alt: "Amtan" },
  { src: "/images/client-drtanya.png", alt: "Dr. Tanya" },
  { src: "/images/client-strongtower.png", alt: "Strong Tower" },
  { src: "/images/client-wole-akosile.png", alt: "Wole Akosile Author" },
];

export default function Marquee() {
  const row = [...clients, ...clients, ...clients];
  return (
    <div className="relative overflow-hidden py-3">
      <div className="marquee items-center gap-24 pr-24">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-24" aria-hidden={half === 1}>
            {row.map((c, i) => (
              <Image
                key={`${half}-${i}`}
                src={c.src}
                alt={half === 0 ? c.alt : ""}
                width={200}
                height={80}
                style={{ height: "4rem", width: "auto" }}
                className="object-contain opacity-80 brightness-0 invert transition-opacity hover:opacity-100"
              />
            ))}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy to-transparent" />
    </div>
  );
}
