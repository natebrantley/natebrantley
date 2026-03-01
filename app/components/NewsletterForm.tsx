"use client";

export default function NewsletterForm() {
  return (
    <form
      className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        inputMode="email"
        placeholder="Your email"
        className="min-h-[44px] min-w-0 flex-1 rounded-sm border border-zinc-300 bg-white px-4 py-3 text-base text-foreground placeholder:text-zinc-400 focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 input-ios-reset"
        aria-label="Email for newsletter"
        autoComplete="email"
      />
      <button
        type="submit"
        className="min-h-[44px] shrink-0 rounded-sm bg-[var(--navy)] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[var(--navy-light)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2"
      >
        Subscribe
      </button>
    </form>
  );
}
