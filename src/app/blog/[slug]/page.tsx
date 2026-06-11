import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/data/posts";
import SplitWords from "@/components/motion/SplitWords";
import Reveal from "@/components/motion/Reveal";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <article>
      {/* Post hero on brand navy so the fixed header always has contrast */}
      <section className="aurora grain relative text-white">
        <div className="mx-auto max-w-3xl px-5 pb-20 pt-40 sm:px-8 sm:pt-48">
          <Reveal y={0}>
            <Link
              href="/blog"
              className="link-sweep text-sm font-semibold uppercase tracking-[0.25em] text-sky-light"
            >
              ← Back to blog
            </Link>
          </Reveal>
          <SplitWords
            delay={0.15}
            segments={[{ text: post.title }]}
            className="mt-6 font-display text-3xl font-bold leading-tight sm:text-5xl"
          />
          <Reveal delay={0.4}>
            <p className="mt-5 text-white/65">By {post.author}</p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Reveal>
          <p className="text-lg leading-relaxed text-black/65">
            <span className="font-semibold text-ink">Summary:</span>{" "}
            {post.excerpt}
          </p>
          <Image
            src={post.image}
            alt={post.title}
            width={1024}
            height={644}
            className="mt-8 w-full rounded-3xl shadow-[0_24px_60px_-20px_rgba(3,23,80,0.3)]"
          />
        </Reveal>

        <div className="mt-12 space-y-10">
          {post.sections.map((section, i) => (
            <Reveal key={section.heading ?? i}>
              <section>
                {section.heading && (
                  <h2 className="font-display text-2xl font-bold text-navy">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs?.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="mt-4 leading-relaxed text-black/75"
                  >
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 space-y-3">
                    {section.list.map((item) => (
                      <li
                        key={item.term}
                        className="leading-relaxed text-black/75"
                      >
                        <span className="font-semibold text-ink">
                          {item.term}:
                        </span>{" "}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
