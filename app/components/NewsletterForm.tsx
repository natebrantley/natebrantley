"use client";

import { FormEvent, useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter an email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(payload.message ?? "Subscription failed. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(payload.message ?? "You are subscribed.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <>
      <form
        className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          inputMode="email"
          placeholder="Your email"
          className="min-h-[44px] min-w-0 flex-1 rounded-sm border border-zinc-300 bg-white px-4 py-3 text-base text-foreground placeholder:text-zinc-400 focus:border-[var(--gold)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 input-ios-reset"
          aria-label="Email for newsletter"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={status === "loading"}
          required
        />
        <button
          type="submit"
          className="min-h-[44px] shrink-0 rounded-sm bg-[var(--navy)] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[var(--navy-light)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status !== "idle" ? (
        <p
          className={`mt-3 text-sm ${
            status === "success" ? "text-emerald-700" : "text-red-700"
          }`}
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </>
  );
}
