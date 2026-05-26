function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request): Promise<Response> {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const email =
    typeof payload === "object" &&
    payload !== null &&
    "email" in payload &&
    typeof payload.email === "string"
      ? payload.email.trim().toLowerCase()
      : "";

  if (!email || !isValidEmail(email)) {
    return Response.json(
      { message: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "natebrantley.com",
          timestamp: new Date().toISOString(),
        }),
      });

      if (!webhookResponse.ok) {
        return Response.json(
          {
            message:
              "Subscription service is temporarily unavailable. Please try again shortly.",
          },
          { status: 503 },
        );
      }
    } catch {
      return Response.json(
        {
          message:
            "Subscription service is temporarily unavailable. Please try again shortly.",
        },
        { status: 503 },
      );
    }
  }

  return Response.json({
    message:
      "Thanks for subscribing. New posts across business, cards, stocks, and real estate are on the way.",
  });
}
