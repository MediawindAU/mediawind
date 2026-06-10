import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/data/posts";

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
    <article className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-sm font-medium text-blue-mid hover:text-navy transition-colors"
        >
          ← Back to blog
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-navy sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-gray-500">By {post.author}</p>
        <p className="mt-6 text-lg text-gray-600">
          <span className="font-semibold text-ink">Summary:</span>{" "}
          {post.excerpt}
        </p>
        <Image
          src={post.image}
          alt={post.title}
          width={1024}
          height={644}
          className="mt-8 w-full rounded-2xl shadow"
        />

        <div className="mt-10 space-y-10">
          {post.sections.map((section, i) => (
            <section key={section.heading ?? i}>
              {section.heading && (
                <h2 className="text-2xl font-semibold text-navy">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs?.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 space-y-3">
                  {section.list.map((item) => (
                    <li key={item.term} className="leading-relaxed text-gray-700">
                      <span className="font-semibold text-ink">
                        {item.term}:
                      </span>{" "}
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
