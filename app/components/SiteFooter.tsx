import Link from "next/link";

const socialLinks = [
  { href: "https://instagram.com/natebrantley", label: "Instagram" },
  { href: "https://youtube.com/@natebrantley", label: "YouTube" },
  { href: "https://x.com/natebrantley", label: "X" },
  { href: "https://linkedin.com/in/natebrantley", label: "LinkedIn" },
  {
    href: "https://open.spotify.com/show/brantleychristianson",
    label: "Spotify",
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-[var(--navy)]" role="contentinfo">
      <div className="section-pad section-inner">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl space-y-4 text-white/90">
            <p className="font-serif text-2xl font-semibold tracking-tight text-white">
              Nate Brantley
            </p>
            <p className="text-sm leading-relaxed text-white/80">
              One cohesive stream on business, trading cards, stocks, and real
              estate.
            </p>
            <p className="text-sm text-white/80">
              <a
                href="tel:+15036168122"
                className="rounded-sm hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
              >
                503-616-8122
              </a>
              {" · "}
              <a
                href="mailto:nate@brantleychristianson.com"
                className="rounded-sm hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
              >
                nate@brantleychristianson.com
              </a>
            </p>
            <div className="grid gap-4 text-sm leading-relaxed text-white/80 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-white">Real Estate Credentials</p>
                <p>Principal Broker, Oregon (201104121)</p>
                <p>Designated Broker, Washington (26488)</p>
              </div>
              <div>
                <p className="font-semibold text-white">Brokerage</p>
                <p>Brantley Christianson Real Estate LLC</p>
                <p>Serving Oregon and Washington</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Connect
            </p>
            <nav
              aria-label="Social links"
              className="flex flex-wrap items-center gap-4 text-sm text-white/80"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.zillow.com/profile/natebrantley"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
              >
                Zillow
              </a>
            </nav>
            <div className="text-sm text-white/60">
              <Link
                href="/about"
                className="rounded-sm hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
              >
                About Nate
              </Link>
              {" · "}
              <Link
                href="/writing"
                className="rounded-sm hover:text-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
              >
                Writing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
