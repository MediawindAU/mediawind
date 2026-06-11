import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import BrandImage from "@/components/BrandImage";

export const metadata: Metadata = {
  title: "About",
  description:
    "We're Digital Storytellers and Problem Solvers. At Mediawind, we believe every great product starts with a great story.",
};

const team = [
  {
    name: "Femi Olatunde",
    role: "Founder / Product Manager",
    image: "/images/team-femi.png",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/femi-olatunde" },
      { label: "Instagram", href: "https://www.instagram.com/mediawind.co" },
    ],
  },
  {
    name: "Emmanuel Olatunde",
    role: "Full Stack Developer",
    image: "/images/team-emmanuel.png",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "Medium", href: "https://medium.com" },
      { label: "Instagram", href: "https://www.instagram.com/mediawind.co" },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="Passionate Techies">
        <p>
          We&apos;re Digital Storytellers and Problem Solvers. At Mediawind, we
          believe every great product starts with a great story. We&apos;re
          here to help you tell yours.
        </p>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BrandImage
            src="/images/photo-team.webp"
            alt="The Mediawind team sharing a laugh while collaborating in the studio"
            width={2000}
            height={1125}
            aspect="aspect-[2/1]"
            position="object-[center_22%]"
            className="mb-16"
          />
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl bg-pale/60 p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-mid">
                Our Mission
              </p>
              <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
                Build products users need
              </h2>
              <p className="mt-4 text-black/65">
                We exist to bridge the gap between ambitious ideas and
                successful digital products. Too many great concepts never see
                the light of day because of technical complexity, resource
                constraints, or unclear execution strategies. We change that
                narrative.
              </p>
            </div>
            <div className="rounded-2xl bg-pale/60 p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-mid">
                Our Approach
              </p>
              <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
                Digital experience with strategic thinking
              </h2>
              <p className="mt-4 text-black/65">
                We don&apos;t just build features—we craft experiences. Our
                approach combines strategic thinking, creative design, and
                technical excellence to create products that users love and
                businesses depend on. Every project is a partnership, every
                challenge is an opportunity, and every success is shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Our Team
          </h2>
          <div className="mx-auto mt-12 grid max-w-3xl gap-10 sm:grid-cols-2">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-pale bg-white p-8 text-center shadow-sm"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={240}
                  height={240}
                  className="mx-auto h-48 w-48 rounded-full object-cover"
                />
                <h3 className="mt-6 text-xl font-semibold text-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-black/65">{member.role}</p>
                <div className="mt-4 flex justify-center gap-4">
                  {member.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-mid hover:text-navy transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
