"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, Loader2, MessageCircle } from "lucide-react";
import { EMAIL_PATTERN, formatBooking, type BookingRequest } from "@/lib/contact";
import { services, site, whatsappLink } from "@/lib/site";
import WhatsAppIcon from "@/Components/ui/WhatsAppIcon";
import { cn } from "@/lib/utils";

export const SUBJECTS = [
  ...services.map((s) => s.name),
  "Tour Booking",
  "General Inquiry",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({
  initialSubject = "",
  initialDate = "",
  initialMessage = "",
}: {
  initialSubject?: string;
  initialDate?: string;
  initialMessage?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: SUBJECTS.includes(initialSubject) ? initialSubject : "",
    date: initialDate,
    message: initialMessage,
    website: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const update = (field: keyof typeof form) =>
    (e: { target: { value: string } }) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const booking: BookingRequest = {
    kind: "booking",
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    subject: form.subject,
    date: form.date,
    message: form.message.trim(),
  };
  const whatsappHref = whatsappLink(formatBooking(booking));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(booking.email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    // Email paused: hand the booking straight to WhatsApp. This runs inside
    // the submit click, so browsers allow the new tab.
    if (!site.emailEnabled) {
      if (form.website) return;
      window.open(whatsappHref, "_blank", "noopener,noreferrer");
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...booking, website: form.website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div id="contact-form" className="card scroll-mt-28 p-6 sm:p-8 lg:col-span-2">
      {status === "sent" ? (
        <div className="flex flex-col items-center py-8 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400 ring-1 ring-yellow-400/30">
            <CheckCircle size={30} />
          </span>
          <h3 className="mt-6 font-display text-2xl font-semibold">
            Thank you, {booking.name.split(" ")[0]}!
          </h3>
          <p className="mt-2 max-w-md text-white/65">
            {site.emailEnabled
              ? "Your booking request has been emailed to our team. For a faster reply, send the same details on WhatsApp. Your message is already filled in."
              : "WhatsApp has opened with your booking details filled in. Just tap Send and our team will reply shortly. If it didn’t open, use the button below."}
          </p>
          <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} /> Send on WhatsApp
            </a>
            <button
              type="button"
              onClick={() => {
                setForm((f) => ({ ...f, message: "", date: "" }));
                setStatus("idle");
              }}
              className="btn-secondary"
            >
              Send another request
            </button>
          </div>
        </div>
      ) : (
        <>
          <h2 className="font-display text-2xl font-semibold">Book a consultation</h2>
          <p className="mt-1 text-sm text-white/55">
            Tell us a little about your plans and we’ll get back to you within 24 hours.
          </p>

          <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
            <Field label="Full name">
              <input
                name="name"
                required
                autoComplete="name"
                className="field"
                placeholder="Ama Mensah"
                value={form.name}
                onChange={update("name")}
              />
            </Field>
            <Field label="Email">
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="field"
                placeholder="you@example.com"
                value={form.email}
                onChange={update("email")}
              />
            </Field>
            <Field label="Phone / WhatsApp">
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="field"
                placeholder="+233 …"
                value={form.phone}
                onChange={update("phone")}
              />
            </Field>
            <Field label="Subject">
              <select
                name="subject"
                required
                className={cn("field", !form.subject && "text-white/35")}
                value={form.subject}
                onChange={update("subject")}
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {SUBJECTS.map((s) => (
                  <option key={s} className="bg-ink-900 text-white">
                    {s}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Preferred date (optional)" className="sm:col-span-2">
              <input
                name="date"
                type="date"
                className="field"
                value={form.date}
                onChange={update("date")}
              />
            </Field>
            <Field label="Your plans" className="sm:col-span-2">
              <textarea
                name="message"
                rows={5}
                className="field resize-y"
                placeholder="Where would you like to go, and how can we help?"
                value={form.message}
                onChange={update("message")}
              />
            </Field>

            {/* Honeypot for bots, hidden from people and screen readers */}
            <input
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
              value={form.website}
              onChange={update("website")}
            />

            {status === "error" && (
              <div
                role="alert"
                className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200 sm:col-span-2"
              >
                {error}{" "}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#25D366] underline"
                >
                  Send via WhatsApp instead
                </a>
              </div>
            )}

            <div className="flex flex-col items-center gap-4 sm:col-span-2 sm:flex-row sm:justify-between">
              <p className="text-xs text-white/40">
                We’ll only use your details to respond to this request.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full sm:w-auto"
              >
                {status === "sending" && <Loader2 size={16} className="animate-spin" />}
                {!site.emailEnabled && <WhatsAppIcon className="h-4 w-4" />}
                {status === "sending"
                  ? "Sending…"
                  : site.emailEnabled
                    ? "Submit booking"
                    : "Send via WhatsApp"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

function Field({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="field-label">{label}</span>
      {children}
    </label>
  );
}
