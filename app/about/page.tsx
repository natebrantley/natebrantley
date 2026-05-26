import type { Metadata } from "next";
import { siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Nate Brantley: business operator, broker, investor, and collector.",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nate Brantley",
    url: siteUrl,
    jobTitle: "Broker and Business Operator",
    sameAs: [
      "https://instagram.com/natebrantley",
      "https://youtube.com/@natebrantley",
      "https://x.com/natebrantley",
      "https://linkedin.com/in/natebrantley",
    ],
  };

  return (
    <div className="bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section-pad section-inner">
        <div className="mx-auto max-w-3xl rounded-sm border border-zinc-200 bg-white p-6 sm:p-10">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            About Nate
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            I am building one transparent body of work across business, trading
            cards, stocks, and real estate. This site is where I publish what I
            am learning, what I am testing, and how I make decisions.
          </p>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/95 sm:text-lg">
            <p>
              I have been a real-estate broker since 2009 and currently serve
              clients across Oregon and Washington through Brantley Christianson
              Real Estate LLC.
            </p>
            <p>
              Outside of brokerage work, I am focused on operating systems,
              market behavior, and long-term allocation frameworks. Whether the
              context is equities, cards, or property, my goal is the same:
              better process, better outcomes.
            </p>
            <p>
              If you are here to follow the ideas, start with the writing feed.
              If you are here for real-estate help, reach out directly and we
              can map a clear next step.
            </p>
          </div>
          <div className="mt-8 rounded-sm border border-zinc-200 bg-[var(--background)] p-5 text-sm leading-relaxed text-muted">
            <p className="font-semibold text-foreground">Credentials</p>
            <p>Principal Broker, Oregon (License 201104121)</p>
            <p>Designated Broker, Washington (License 26488)</p>
            <p>Owner, Brantley Christianson Real Estate LLC</p>
          </div>
        </div>
      </section>
    </div>
  );
}
