import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./components/NewsletterForm";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--background)]">
      {/* ─── Hero ───────────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-screen min-h-[100dvh] min-h-screen-ios flex-col bg-[var(--navy)] lg:flex-row lg:items-center"
        aria-label="Introduction"
      >
        <div
          className="flex flex-1 flex-col items-center justify-center px-4 pt-24 pb-12 text-center sm:px-6 sm:pt-28 sm:pb-16 lg:items-start lg:px-12 lg:pt-0 lg:pb-0 lg:text-left xl:px-20"
          style={{ paddingLeft: "max(1rem, env(safe-area-inset-left))", paddingRight: "max(1rem, env(safe-area-inset-right))" }}
        >
          <div className="accent-line mb-5 sm:mb-6 lg:mx-0" />
          <h1 className="font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-4xl sm:leading-tight md:text-5xl lg:max-w-xl lg:text-left lg:text-6xl lg:leading-tight xl:text-7xl">
            Modern Real Estate. Timeless Expertise.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-300 sm:mt-6 sm:text-lg sm:leading-relaxed">
            Real estate broker in Oregon & Washington. Trusted guidance for
            buying and selling.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start">
            <Link
              href="#contact"
              className="inline-flex min-h-[44px] min-w-[140px] items-center justify-center rounded-sm bg-[var(--gold)] px-5 py-3 text-base font-medium text-[var(--navy)] transition-colors hover:bg-[var(--gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
            >
              Request a Valuation
            </Link>
            <Link
              href="/insights"
              className="inline-flex min-h-[44px] min-w-[140px] items-center justify-center rounded-sm border border-white/40 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
            >
              View Insights
            </Link>
          </div>
        </div>
        <div
          className="relative flex flex-1 items-center justify-center px-4 pb-12 sm:px-6 sm:pb-16 lg:justify-end lg:pb-0 lg:pr-12 xl:pr-20"
          style={{ paddingLeft: "max(1rem, env(safe-area-inset-left))", paddingRight: "max(1rem, env(safe-area-inset-right))" }}
        >
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-sm border border-white/20 sm:max-w-md">
            <Image
              src="/headshot/nate.jpg"
              alt="Nate Brantley"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─── About ───────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="border-t border-zinc-200 bg-white"
        aria-labelledby="about-heading"
      >
        <div className="section-pad section-inner flex flex-col items-center text-center">
          <div className="prose-width w-full">
            <h2
              id="about-heading"
              className="font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl"
            >
              About
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              I&apos;ve been a real estate broker since 2009. I&apos;m a
              Principal Broker in Oregon and a Designated Broker in Washington,
              and I own and operate Brantley Christianson Real Estate LLC—bringing
              modern service and timeless expertise to every transaction.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              I believe in clear communication, honest guidance, and a
              no-pressure approach. Whether you&apos;re buying your first home,
              selling a property, or investing in the Pacific Northwest, I&apos;m
              here to help you navigate the process with confidence.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              My team and I serve clients across Oregon and Washington with
              the same level of care and professionalism—from listing to closing
              and beyond.
            </p>
            <ul
              className="mt-8 space-y-2 text-left text-sm leading-relaxed text-muted sm:text-base"
              aria-label="Credentials"
            >
              <li>Real estate broker since 2009</li>
              <li>Principal Broker, Oregon (License 201104121)</li>
              <li>Designated Broker, Washington (License 26488)</li>
              <li>Owner, Brantley Christianson Real Estate LLC</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Stock image break ──────────────────────────────────────────── */}
      <section
        className="relative h-[60vh] min-h-[320px] w-full overflow-hidden sm:h-[65vh] sm:min-h-[380px] md:h-[70vh]"
        aria-hidden
      >
        <Image
          src="/stock/living.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* ─── Contact (newsletter) ──────────────────────────────────────── */}
      <section
        id="contact"
        className="border-t border-zinc-200 bg-white"
        aria-labelledby="contact-heading"
      >
        <div className="section-pad section-inner flex flex-col items-center">
          <div className="w-full max-w-md text-center">
            <h2
              id="contact-heading"
              className="font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl md:text-4xl"
            >
              Stay in the loop
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Get market insights and exclusive listings in your inbox.
            </p>
            <NewsletterForm />
            <p className="mt-6">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-base font-medium text-[var(--gold)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 rounded-sm"
              >
                Request a free home valuation
                <span aria-hidden>→</span>
              </Link>
            </p>
            <p className="mt-4 flex flex-col gap-1 text-sm text-muted sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="tel:+15036168122"
                className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 rounded-sm"
              >
                503-616-8122
              </a>
              <a
                href="mailto:nate@brantleychristianson.com"
                className="hover:text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 rounded-sm"
              >
                nate@brantleychristianson.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ─── Reviews (from Zillow) ─────────────────────────────────────────── */}
      <section
        id="reviews"
        className="border-t border-zinc-200 bg-white"
        aria-labelledby="reviews-heading"
      >
        <div className="section-pad section-inner flex flex-col items-center text-center">
          <h2
            id="reviews-heading"
            className="font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl"
          >
            What clients say
          </h2>
          <p className="mt-2 text-base text-muted">
            Reviews from my Zillow profile
          </p>
          <a
            href="https://www.zillow.com/profile/natebrantley#reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-sm font-medium text-[var(--gold)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 rounded-sm"
          >
            See all reviews on Zillow →
          </a>
          <div className="mt-10 grid w-full max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <blockquote className="rounded-sm border border-zinc-200 bg-[var(--background)] p-5 text-left sm:p-6">
              <p className="text-base leading-relaxed text-foreground">
                &ldquo;Nate was incredibly helpful from start to finish. He made the process smooth and was always quick to respond. Would definitely recommend!&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted">
                — Client, Zillow review
              </footer>
            </blockquote>
            <blockquote className="rounded-sm border border-zinc-200 bg-[var(--background)] p-5 text-left sm:p-6">
              <p className="text-base leading-relaxed text-foreground">
                &ldquo;Professional, knowledgeable, and a pleasure to work with. Nate helped us find exactly what we were looking for.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted">
                — Client, Zillow review
              </footer>
            </blockquote>
            <blockquote className="rounded-sm border border-zinc-200 bg-[var(--background)] p-5 text-left sm:p-6 sm:col-span-2 lg:col-span-1">
              <p className="text-base leading-relaxed text-foreground">
                &ldquo;Couldn&apos;t have asked for a better experience. Nate&apos;s expertise and patience made all the difference.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted">
                — Client, Zillow review
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── Markets (Oregon & Washington) ─────────────────────────────────── */}
      <section
        id="markets"
        className="border-t border-zinc-200 bg-[var(--background)]"
        aria-labelledby="markets-heading"
      >
        <div className="section-pad section-inner flex flex-col items-center text-center">
          <h2
            id="markets-heading"
            className="font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl"
          >
            Markets
          </h2>
          <p className="mt-2 text-base text-muted">
            Oregon and Washington
          </p>
          <div className="mt-8 grid w-full max-w-lg gap-8 sm:max-w-none sm:grid-cols-2 sm:gap-10">
            <div className="rounded-sm border border-zinc-200 bg-white p-5 text-left sm:p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                Washington · 4BRC01 · License 26488
              </p>
              <address className="mt-2 text-base leading-relaxed text-muted not-italic">
                2005 SE 192nd Ave Ste 200
                <br />
                Camas, WA 98607
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=2005+SE+192nd+Ave+Ste+200+Camas+WA+98607"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-[44px] items-center text-sm font-medium text-[var(--gold)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 rounded-sm"
              >
                Get directions
              </a>
            </div>
            <div className="rounded-sm border border-zinc-200 bg-white p-5 text-left sm:p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                Oregon · BRCH01 · License 201104121
              </p>
              <address className="mt-2 text-base leading-relaxed text-muted not-italic">
                10121 SE Sunnyside Rd Ste 300
                <br />
                Clackamas, OR 97015
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=10121+SE+Sunnyside+Rd+Ste+300+Clackamas+OR+97015"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-[44px] items-center text-sm font-medium text-[var(--gold)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 rounded-sm"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA banner ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[28vh] overflow-hidden sm:min-h-[32vh]"
        aria-label="Get in touch"
      >
        <Image
          src="/stock/table.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="image-overlay absolute inset-0" />
        <div className="relative flex min-h-[28vh] flex-col items-center justify-center section-pad text-center sm:min-h-[32vh]">
          <p className="font-serif text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl md:text-3xl">
            Ready to find your place?
          </p>
          <Link
            href="#contact"
            className="mt-4 inline-flex min-h-[44px] min-w-[140px] items-center justify-center rounded-sm bg-[var(--gold)] px-6 py-3 text-base font-medium text-[var(--navy)] transition-colors hover:bg-[var(--gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy-dark)]"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────────────────── */}
      <footer
        className="border-t border-zinc-200 bg-[var(--navy)]"
        role="contentinfo"
      >
        <div className="section-pad section-inner">
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:text-left">
            <div className="space-y-4">
              <Link href="/" className="relative block h-10 w-[180px] sm:h-11 sm:w-[200px]">
                <Image
                  src="/BCRE-White-Trans.png"
                  alt="Brantley Christianson Real Estate"
                  fill
                  className="object-contain object-left"
                  sizes="200px"
                />
              </Link>
              <p className="text-sm font-medium text-white">
                Nate Brantley · Brantley Christianson Real Estate
              </p>
              <p className="text-sm text-white/80">
                <a
                  href="tel:+15036168122"
                  className="hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)] rounded-sm"
                >
                  503-616-8122
                </a>
                {" · "}
                <a
                  href="mailto:nate@brantleychristianson.com"
                  className="hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)] rounded-sm"
                >
                  nate@brantleychristianson.com
                </a>
              </p>
              <div className="grid gap-6 text-sm leading-relaxed text-white/80 sm:grid-cols-2 sm:gap-8">
                <address className="not-italic">
                  <span className="block text-white/60">WA 4BRC01 · License 26488</span>
                  2005 SE 192nd Ave Ste 200
                  <br />
                  Camas, WA 98607
                </address>
                <address className="not-italic">
                  <span className="block text-white/60">OR BRCH01 · License 201104121</span>
                  10121 SE Sunnyside Rd Ste 300
                  <br />
                  Clackamas, OR 97015
                </address>
              </div>
            </div>
            <nav
              className="flex flex-shrink-0 flex-wrap items-center justify-center gap-5 lg:justify-end"
              aria-label="Social and profile links"
            >
              <a
                href="https://instagram.com/natebrantley"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-sm text-white/70 transition-colors hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
                aria-label="Instagram @natebrantley"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643 0 2.987-.048 4.012-.048 1.067-.218 1.804-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987 0-4.012-.048-1.067-.048-1.804-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.067-.06-1.407-.06-4.123v-.08c0-2.643 0-2.987.048-4.012.048-1.067.218-1.804.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.466-.399-.8-.748-1.15a3.097 3.097 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-3.205a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@natebrantley"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-sm text-white/70 transition-colors hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
                aria-label="YouTube @natebrantley"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://x.com/natebrantley"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-sm text-white/70 transition-colors hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
                aria-label="X (Twitter) @natebrantley"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/natebrantley"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-sm text-white/70 transition-colors hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
                aria-label="LinkedIn natebrantley"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.453C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://open.spotify.com/show/brantleychristianson"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-sm text-white/70 transition-colors hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
                aria-label="Podcast on Spotify: Brantley Christianson"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </a>
              <a
                href="https://www.zillow.com/profile/natebrantley"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-sm text-white/70 transition-colors hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
                aria-label="Zillow profile"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2L2 10h3v10h6v-6h2v6h6V10h3L12 2z" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
