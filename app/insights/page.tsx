import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Market Insights | Nate Brantley",
  description:
    "Market perspectives and the communities we serve across Oregon and Washington.",
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--background)]">
      {/* ─── Hero banner ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[50vh] overflow-hidden sm:min-h-[55vh]"
        aria-labelledby="insights-heading"
      >
        <Image
          src="/markets/pdx.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="image-overlay absolute inset-0" />
        <div className="relative flex min-h-[50vh] flex-col items-center justify-end section-pad section-inner text-center sm:min-h-[55vh] lg:items-end lg:text-left">
          <div className="w-full max-w-2xl lg:max-w-none">
            <h1
              id="insights-heading"
              className="font-serif text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Market Insights
            </h1>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-white/90 sm:mt-3 sm:text-lg">
              Market perspectives and the communities we serve across Oregon and Washington.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Content area (expand with articles, market updates, etc.) ──────── */}
      <section className="border-t border-zinc-200 bg-white">
        <div className="section-pad section-inner flex flex-col items-center text-center">
          <div className="prose-width w-full">
            <p className="text-base leading-relaxed text-muted">
              Insights, market updates, and neighborhood highlights will be added here. Check back soon or reach out for a conversation about your local market.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-sm bg-[var(--navy)] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[var(--navy-light)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Back to home ─────────────────────────────────────────────────── */}
      <section className="border-t border-zinc-200 bg-[var(--background)]">
        <div className="section-pad section-inner text-center">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--gold)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 rounded-sm"
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
