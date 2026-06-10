import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert perspectives on digital product development, startup strategies, and industry trends that matter to ambitious founders.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Startup Journey Insights">
        <p>
          Expert perspectives on digital product development, startup
          strategies, and industry trends that matter to ambitious founders.
        </p>
      </PageHero>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={768}
                  height={483}
                  className="aspect-[8/5] w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-navy group-hover:text-blue-mid transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-gray-600">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 font-medium text-blue-mid">Read more →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
