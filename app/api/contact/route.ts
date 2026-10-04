import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  EMAIL_PATTERN,
  formatBooking,
  type BookingRequest,
  type ContactRequest,
} from "@/lib/contact";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const MAX_LENGTH = 5000;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_LENGTH) : "";
}

function parse(body: Record<string, unknown>): ContactRequest | string {
  const email = clean(body.email);
  if (!EMAIL_PATTERN.test(email)) return "Please enter a valid email address.";

  if (body.kind === "newsletter") return { kind: "newsletter", email };

  const booking: BookingRequest = {
    kind: "booking",
    name: clean(body.name),
    email,
    phone: clean(body.phone),
    subject: clean(body.subject),
    date: clean(body.date),
    message: clean(body.message),
  };
  if (!booking.name) return "Please enter your full name.";
  if (!booking.phone) return "Please enter your phone number.";
  if (!booking.subject) return "Please select a subject.";
  return booking;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  const port = Number(SMTP_PORT || 465);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot field: real visitors never see or fill it
  if (clean(body.website)) return NextResponse.json({ ok: true });

  const parsed = parse(body);
  if (typeof parsed === "string") {
    return NextResponse.json({ error: parsed }, { status: 400 });
  }

  const transport = getTransport();
  if (!transport) {
    console.error("Contact form: SMTP_HOST, SMTP_USER and SMTP_PASS must be set");
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  const text =
    parsed.kind === "booking"
      ? formatBooking(parsed)
      : `New newsletter subscriber: ${parsed.email}`;
  const subject =
    parsed.kind === "booking"
      ? `Booking: ${parsed.subject} – ${parsed.name}`
      : `Newsletter signup – ${parsed.email}`;

  try {
    await transport.sendMail({
      from: process.env.SMTP_FROM || `"${site.name} Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL || site.email,
      replyTo: parsed.email,
      subject,
      text,
      html: `<pre style="font-family:inherit;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
    });
  } catch (error) {
    console.error("Contact form: failed to send email", error);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again or reach us on WhatsApp." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
