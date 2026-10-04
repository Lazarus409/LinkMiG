"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, MapPin, Search } from "lucide-react";
import PageHero from "@/Components/ui/PageHero";
import { cn } from "@/lib/utils";

const BACKGROUNDS = ["/bg.png", "/bg4.png", "/bg51.png", "/bg3.png"];

const stats = [
  { value: "100+", label: "Destinations" },
  { value: "150+", label: "Activities" },
  { value: "1k+", label: "Happy travelers" },
  { value: "5.0", label: "Average rating" },
];

export default function HeroSection() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination.trim()) params.set("q", destination.trim());
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    const qs = params.toString();
    router.push(qs ? `/destinations?${qs}` : "/destinations");
  }

  return (
    <PageHero
      size="full"
      images={BACKGROUNDS}
      eyebrow="Travel · Visa · Study · Relocation"
      title={
        <>
          Discover your next{" "}
          <span className="text-yellow-400">adventure</span>{" "}
          with confidence
        </>
      }
      description="Curated destinations, expert guidance, and seamless booking support for journeys that feel personal from the first search to the final check-in."
    >
      <form
        onSubmit={handleSearch}
        className="mx-auto grid max-w-4xl gap-2 rounded-3xl border border-white/10 bg-ink-950/60 p-2 text-left shadow-2xl backdrop-blur-xl md:grid-cols-[1.5fr_1fr_1fr_auto]"
      >
        <SearchField icon={<MapPin size={16} />} label="Where to?">
          <input
            type="text"
            placeholder="Cape Coast, Volta, Mole…"
            className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </SearchField>
        <SearchField icon={<CalendarDays size={16} />} label="Check-in">
          <input
            type="date"
            aria-label="Check-in date"
            className="w-full bg-transparent text-sm text-white focus:outline-none"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </SearchField>
        <SearchField icon={<CalendarDays size={16} />} label="Check-out">
          <input
            type="date"
            aria-label="Check-out date"
            min={checkIn || undefined}
            className="w-full bg-transparent text-sm text-white focus:outline-none"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </SearchField>
        <button type="submit" className="btn-primary rounded-2xl px-7 py-4">
          <Search size={18} /> Search
        </button>
      </form>

      <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-y-6 sm:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={cn(
              "flex flex-col-reverse items-center gap-1",
              i > 0 && "sm:border-l sm:border-white/10",
            )}
          >
            <dt className="text-xs uppercase tracking-wider text-white/50">{s.label}</dt>
            <dd className="font-display text-3xl font-semibold text-white">{s.value}</dd>
          </div>
        ))}
      </dl>
    </PageHero>
  );
}

function SearchField({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex cursor-text flex-col gap-1 rounded-2xl px-4 py-3 transition hover:bg-white/5 focus-within:bg-white/5">
      <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-yellow-400">
        {icon} {label}
      </span>
      {children}
    </label>
  );
}
