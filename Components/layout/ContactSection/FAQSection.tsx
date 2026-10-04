import Link from "next/link";
import { Plus } from "lucide-react";
import type { ReactNode } from "react";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "How long does visa processing take?",
    a: (
      <>
        Processing time varies by country and embassy, typically between 7 and
        30 business days. We help you prepare a complete application so it
        isn&apos;t delayed. See{" "}
        <Link href="/services/travel-visa" className="text-yellow-400 underline">
          Travel &amp; Visa Consultations
        </Link>
        .
      </>
    ),
  },
  {
    q: "Do you offer study abroad support?",
    a: (
      <>
        Yes. We help with university and program matching, applications,
        scholarships, student visas, and pre-departure preparation. See{" "}
        <Link href="/services/study-abroad" className="text-yellow-400 underline">
          Study Abroad
        </Link>
        .
      </>
    ),
  },
  {
    q: "Can I book a free consultation?",
    a: (
      <>
        Yes, your first 30-minute consultation is free. Fill in the{" "}
        <a href="#contact-form" className="text-yellow-400 underline">
          booking form
        </a>{" "}
        above or message us on WhatsApp.
      </>
    ),
  },
  {
    q: "Which countries do you support?",
    a: (
      <>
        We support travel, study, and work destinations worldwide. Requirements
        differ by country, so tell us where you&apos;re headed in the booking
        form and we&apos;ll confirm how we can help.
      </>
    ),
  },
];

export default function FAQSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <p className="eyebrow mb-4">FAQ</p>
        <h2 className="heading-lg">Frequently asked questions</h2>
        <p className="mt-4 text-white/60">
          Can’t find what you’re looking for? Send us a message and we’ll be
          happy to help.
        </p>
      </div>

      <div className="divide-y divide-white/10 border-y border-white/10">
        {faqs.map(({ q, a }) => (
          <details key={q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium transition hover:text-yellow-400 [&::-webkit-details-marker]:hidden">
              <span>{q}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-yellow-400 transition-transform duration-300 group-open:rotate-45">
                <Plus size={16} />
              </span>
            </summary>
            <p className="mt-3 max-w-2xl pr-12 text-sm leading-relaxed text-white/65">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
