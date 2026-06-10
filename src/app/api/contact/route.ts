import { NextResponse } from "next/server";

const CONTACT_TO = process.env.CONTACT_TO ?? "femi.o@mediawind.co";

export async function POST(request: Request) {
  let data: Record<string, string>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email = (data.email ?? "").trim();
  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Email delivery is not configured yet — set RESEND_API_KEY in Vercel
    // (and optionally CONTACT_TO) to enable the contact form.
    console.error("Contact form submission received but RESEND_API_KEY is not set:", data);
    return NextResponse.json(
      { error: "Email delivery is not configured" },
      { status: 503 }
    );
  }

  const body = [
    `From: ${email}`,
    `Company: ${data.company || "—"}`,
    `Project Description: ${data.projectDescription || "—"}`,
    `Project Timeline: ${data.projectTimeline || "—"}`,
    "",
    data.message || "",
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Mediawind Website <onboarding@resend.dev>",
      to: [CONTACT_TO],
      reply_to: email,
      subject: `New project enquiry from ${data.company || email}`,
      text: body,
    }),
  });

  if (!res.ok) {
    console.error("Resend error:", res.status, await res.text());
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
