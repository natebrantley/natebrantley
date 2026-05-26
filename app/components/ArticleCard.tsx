import Link from "next/link";
import { Post, formatPostDate } from "@/lib/content";
import TopicBadge from "./TopicBadge";

interface ArticleCardProps {
  post: Post;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  return (
    <article className="rounded-sm border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <TopicBadge topic={post.topic} />
        <p className="text-xs text-muted">{post.readTime}</p>
      </div>
      <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground">
        <Link
          href={`/writing/${post.slug}`}
          className="focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 rounded-sm"
        >
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm text-muted">{formatPostDate(post.publishedAt)}</p>
      <p className="mt-3 text-base leading-relaxed text-muted">{post.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600"
          >
            #{tag}
          </span>
        ))}
      </div>
      <Link
        href={`/writing/${post.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 rounded-sm"
      >
        Read article
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}
