import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-3xl border border-charcoal/10 bg-ivory p-6 shadow-sm transition hover:shadow-premium">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">{post.category}</p>
      <h2 className="mt-4 text-2xl font-semibold text-charcoal">
        <Link className="focus-ring rounded-sm hover:text-teal" href={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 leading-7 text-ink/72">{post.excerpt}</p>
      <p className="mt-5 text-sm font-semibold text-ink/55">{post.readingTime}</p>
    </article>
  );
}
