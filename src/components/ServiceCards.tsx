import Link from "next/link";
import Image from "next/image";

const services = [
  {
    href: "/app-development",
    image: "/images/service-app-dev.webp",
    title: "App Development (Web + Mobile)",
  },
  {
    href: "/app-development",
    image: "/images/service-saas.webp",
    title: "SaaS & E-Commerce Solutions",
  },
  {
    href: "/backend-development",
    image: "/images/service-cloud.webp",
    title: "Cloud & Backend Systems",
  },
  {
    href: "/branding",
    image: "/images/service-design.webp",
    title: "User Centered Design Approach",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <Link
          key={s.title}
          href={s.href}
          className="group rounded-2xl border border-pale bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="mx-auto h-24 w-24">
            <Image
              src={s.image}
              alt={s.title}
              width={96}
              height={96}
              className="h-full w-full object-contain"
            />
          </div>
          <h3 className="mt-6 text-center text-lg font-semibold text-navy">
            {s.title}
          </h3>
          <p className="mt-4 text-center font-medium text-blue-mid group-hover:text-navy transition-colors">
            Learn More →
          </p>
        </Link>
      ))}
    </div>
  );
}
