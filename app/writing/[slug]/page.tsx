import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TopicBadge from "@/app/components/TopicBadge";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  siteUrl,
  topicMeta,
} from "@/lib/content";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/writing/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/writing/${post.slug}`,
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function WritingPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Nate Brantley",
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/writing/${post.slug}`,
  };

  return (
    <div className="bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="section-pad section-inner">
        <div className="mx-auto max-w-3xl rounded-sm border border-zinc-200 bg-white p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <TopicBadge topic={post.topic} />
            <p className="text-sm text-muted">
              {formatPostDate(post.publishedAt)} · {post.readTime}
            </p>
          </div>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/95 sm:text-lg">
            {post.content.map((paragraph, index) => (
              <p key={`${post.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 rounded-sm border border-zinc-200 bg-[var(--background)] p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
              Keep reading
            </p>
            <p className="mt-2 text-base leading-relaxed text-muted">
              Browse the full stream or jump to{" "}
              <Link
                href={`/writing?topic=${post.topic}`}
                className="font-semibold text-[var(--gold)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 rounded-sm"
              >
                {topicMeta[post.topic].label}
              </Link>
              .
            </p>
          </div>
          {post.topic === "real-estate" ? (
            <div className="mt-6 rounded-sm border border-zinc-200 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
                Real Estate Help
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                Want to talk through your next move in Oregon or Washington?
                Reach out directly for a strategy call.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="tel:+15036168122"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[var(--navy)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--navy-light)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2"
                >
                  Call 503-616-8122
                </a>
                <a
                  href="mailto:nate@brantleychristianson.com?subject=Real%20Estate%20Inquiry"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-zinc-300 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2"
                >
                  Email Nate
                </a>
              </div>
            </div>
          ) : null}
          <Link
            href="/writing"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 rounded-sm"
          >
            ← Back to writing
          </Link>
        </div>
      </article>
    </div>
  );
}
