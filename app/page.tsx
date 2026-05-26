import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./components/NewsletterForm";
import ArticleCard from "./components/ArticleCard";
import { getAllPosts, getFeaturedPosts, topicMeta } from "@/lib/content";

export default function Home() {
  const featuredPosts = getFeaturedPosts(3);
  const recentPosts = getAllPosts().slice(0, 6);
  const topics = Object.entries(topicMeta);

  return (
    <div className="overflow-x-hidden bg-[var(--background)]">
      <section className="relative overflow-hidden bg-[var(--navy)]">
        <div className="section-inner grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="accent-line mb-6" />
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              One cohesive flow of what I am interested in.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg">
              I write in public about business, trading cards, stocks, and real
              estate through one lens: better decisions over time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/writing"
                className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[var(--gold)] px-6 py-3 text-base font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
              >
                Explore the feed
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
              >
                About Nate
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {topics.map(([topic, meta]) => (
                <Link
                  key={topic}
                  href={`/writing?topic=${topic}`}
                  className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
                >
                  {meta.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm border border-white/20">
            <Image
              src="/headshot/nate.jpg"
              alt="Nate Brantley"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(22,42,56,.95)] to-transparent p-4 text-sm text-white/90">
              Real estate broker since 2009 · Builder mindset · Long-game
              operator
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="section-pad section-inner">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
                Featured
              </p>
              <h2 className="mt-1 font-serif text-3xl font-semibold tracking-tight text-foreground">
                Start here
              </h2>
            </div>
            <Link
              href="/writing"
              className="text-sm font-semibold text-[var(--gold)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 rounded-sm"
            >
              View all posts
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-[var(--background)]">
        <div className="section-pad section-inner">
          <div className="rounded-sm border border-zinc-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">
              Real Estate Advisory
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground">
              Need help with Oregon or Washington real estate?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              Real estate is part of the same stream here, but if you need direct
              brokerage help I am available for valuations, strategy calls, and
              buy/sell planning.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="tel:+15036168122"
                className="inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[var(--navy)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--navy-light)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2"
              >
                Call 503-616-8122
              </a>
              <a
                href="mailto:nate@brantleychristianson.com?subject=Real%20Estate%20Inquiry"
                className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-zinc-300 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2"
              >
                Email Nate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white" id="subscribe">
        <div className="section-pad section-inner">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Follow the full stream
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Subscribe for new posts and notes across all topics.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-[var(--background)]">
        <div className="section-pad section-inner">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground">
            Recent entries
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {recentPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
