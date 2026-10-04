"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, Star } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import WhatsAppIcon from "@/Components/ui/WhatsAppIcon";

const LABELS = ["Poor", "Fair", "Good", "Very good", "Excellent"];

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [trip, setTrip] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const text = [
    "New review for the Link MiG website",
    "",
    `Name: ${name.trim()}`,
    `Trip / service: ${trip.trim()}`,
    `Rating: ${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)`,
    `Can be published on the website: ${consent ? "Yes" : "No"}`,
    "",
    message.trim(),
  ].join("\n");
  const href = whatsappLink(text);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!rating) {
      setError("Please choose a star rating.");
      return;
    }
    setError("");
    window.open(href, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center py-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400 ring-1 ring-yellow-400/30">
          <CheckCircle size={26} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold">Thank you, {name.split(" ")[0]}!</h3>
        <p className="mt-2 max-w-sm text-sm text-white/60">
          WhatsApp has opened with your review. Tap Send to share it with us.
        </p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6">
          <WhatsAppIcon className="h-4 w-4" /> Open WhatsApp again
        </a>
      </div>
    );
  }

  const shown = hover || rating;

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <label className="block">
        <span className="field-label">Your name</span>
        <input
          required
          className="field"
          placeholder="Ama B."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="block">
        <span className="field-label">Trip or service</span>
        <input
          required
          className="field"
          placeholder="e.g. Cape Coast tour, Study Abroad"
          value={trip}
          onChange={(e) => setTrip(e.target.value)}
        />
      </label>

      <div className="sm:col-span-2">
        <span className="field-label">Your rating</span>
        <div className="flex items-center gap-3" onMouseLeave={() => setHover(0)}>
          <div className="flex gap-1" role="radiogroup" aria-label="Rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={rating === n}
                aria-label={`${n} star${n > 1 ? "s" : ""}`}
                onClick={() => setRating(n)}
                onMouseEnter={() => setHover(n)}
                className="rounded-md p-0.5 transition hover:scale-110"
              >
                <Star
                  size={28}
                  className={cn(
                    "transition",
                    n <= shown ? "fill-yellow-400 text-yellow-400" : "text-white/20",
                  )}
                />
              </button>
            ))}
          </div>
          <span className="text-sm text-white/50">{shown ? LABELS[shown - 1] : "Tap to rate"}</span>
        </div>
      </div>

      <label className="block sm:col-span-2">
        <span className="field-label">Your experience</span>
        <textarea
          required
          rows={4}
          className="field resize-y"
          placeholder="What did you enjoy? How did we help?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <label className="flex items-start gap-3 text-sm text-white/60 sm:col-span-2">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-yellow-400"
        />
        Link MiG may publish my review and first name on its website.
      </label>

      {error && (
        <p role="alert" className="text-sm text-red-300 sm:col-span-2">
          {error}
        </p>
      )}

      <button type="submit" className="btn-whatsapp sm:col-span-2 sm:justify-self-start">
        <WhatsAppIcon className="h-4 w-4" /> Send review via WhatsApp
      </button>
    </form>
  );
}
