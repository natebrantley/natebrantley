import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/app/components/ArticleCard";
import {
  Topic,
  getAllPosts,
  getTopics,
  topicMeta,
} from "@/lib/content";

interface WritingPageProps {
  searchParams?: Promise<{
    topic?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Writing",
  description:
    "A cohesive feed of writing on business, trading cards, stocks, and real estate.",
};

function isTopic(value: string): value is Topic {
  return getTopics().includes(value as Topic);
}

export default async function WritingPage({ searchParams }: WritingPageProps) {
  const params = (await searchParams) ?? {};
  const activeTopic = params.topic && isTopic(params.topic) ? params.topic : null;
  const posts = getAllPosts().filter((post) =>
    activeTopic ? post.topic === activeTopic : true,
  );

  return (
    <div className="bg-[var(--background)]">
      <section className="border-b border-zinc-200 bg-white">
        <div className="section-pad section-inner">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Writing
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            A single stream of thought across everything I am actively studying
            and building.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/writing"
              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 ${
                !activeTopic
                  ? "bg-[var(--navy)] text-white"
                  : "border border-zinc-300 text-zinc-600 hover:border-[var(--gold)] hover:text-[var(--navy)]"
              }`}
            >
              All
            </Link>
            {getTopics().map((topic) => (
              <Link
                key={topic}
                href={`/writing?topic=${topic}`}
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 ${
                  activeTopic === topic
                    ? "bg-[var(--navy)] text-white"
                    : "border border-zinc-300 text-zinc-600 hover:border-[var(--gold)] hover:text-[var(--navy)]"
                }`}
              >
                {topicMeta[topic].label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-inner">
        {activeTopic ? (
          <p className="mb-6 text-sm text-muted">{topicMeta[activeTopic].description}</p>
        ) : null}
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="rounded-sm border border-zinc-200 bg-white p-5 text-muted">
            No posts found for this topic yet.
          </p>
        )}
      </section>
    </div>
  );
}
