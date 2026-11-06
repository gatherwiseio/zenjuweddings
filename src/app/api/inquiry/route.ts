import { contact } from "@/content/site";

// Inquiry form endpoint: validates the message and emails it to Zenju through Resend
// (https://resend.com). Set RESEND_API_KEY in Vercel; INQUIRY_FROM must be an address on a domain
// verified in Resend (until then, Resend's onboarding@resend.dev only delivers to the account owner).
// INQUIRY_TO defaults to Zenju's inquiry address. Without a key it answers 503 and the form tells
// the couple to email directly, so no inquiry is silently lost.

const MAX = { name: 120, email: 200, message: 5000 };
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const escape = (v: string) => v.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }
  const field = (k: string) => (typeof body[k] === "string" ? (body[k] as string).trim() : "");
  const name = field("name");
  const email = field("email");
  const message = field("message");

  // Honeypot: real visitors never see or fill the "website" field.
  if (field("website")) return Response.json({ ok: true });

  if (!name || !isEmail(email) || !message || name.length > MAX.name || email.length > MAX.email || message.length > MAX.message) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return Response.json({ error: "not-configured" }, { status: 503 });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.INQUIRY_FROM ?? "Zenju Weddings website <onboarding@resend.dev>",
      to: [process.env.INQUIRY_TO ?? contact.email],
      reply_to: email,
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escape(name)}<br><strong>Email:</strong> ${escape(email)}</p><p>${escape(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });
  if (!res.ok) return Response.json({ error: "send-failed" }, { status: 502 });
  return Response.json({ ok: true });
}
