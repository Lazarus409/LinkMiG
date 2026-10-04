"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { EMAIL_PATTERN } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "done" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "newsletter", email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("done");
      setMessage("Thanks for subscribing! Look out for our next update.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section className="pb-24">
      <div className="container-page">
        <div className="card grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
          <div>
            <span className="icon-badge mb-5">
              <Mail size={22} />
            </span>
            <h2 className="font-display text-3xl font-semibold">Travel inspiration, in your inbox</h2>
            <p className="mt-3 text-white/60">
              Exclusive deals, discounts, guides, and insider tips. No spam, ever.
            </p>
          </div>

          <div>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                aria-label="Email address"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field flex-1 rounded-full px-5"
              />
              <button type="submit" disabled={status === "sending"} className="btn-primary">
                {status === "sending" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
            <p
              role="status"
              className={cn(
                "mt-3 text-sm",
                status === "done" && "text-yellow-400",
                status === "error" && "text-red-300",
                (status === "idle" || status === "sending") && "text-white/40",
              )}
            >
              {status === "done" || status === "error"
                ? message
                : "We respect your privacy. Unsubscribe at any time."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
