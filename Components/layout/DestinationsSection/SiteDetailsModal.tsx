"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Camera, ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import WhatsAppIcon from "@/Components/ui/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";
import type { Site } from "./regionsData";
import { siteDetails, siteSlug } from "./siteDetails";

export type SiteWithRegion = Site & { regionName: string };

export default function SiteDetailsModal({
  site,
  onClose,
  onPrev,
  onNext,
  checkIn,
  checkOut,
}: {
  site: SiteWithRegion | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  checkIn?: string;
  checkOut?: string;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Keyboard: Esc closes, arrows move between places; lock page scroll while open
  useEffect(() => {
    if (!site) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [site, onClose, onPrev, onNext]);

  useEffect(() => {
    if (site) closeRef.current?.focus();
  }, [site]);

  const params = new URLSearchParams();
  if (site) params.set("destination", `${site.name.trim()}, ${site.regionName}`);
  if (checkIn) params.set("checkIn", checkIn);
  if (checkOut) params.set("checkOut", checkOut);

  return (
    <AnimatePresence>
      {site && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/75 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="site-details-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-ink-900 shadow-2xl sm:rounded-3xl"
          >
            {/* Photo */}
            <div className="relative h-60 shrink-0 bg-ink-800 sm:h-80">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={site.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {site.image ? (
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      sizes="(min-width: 768px) 768px, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-2 text-white/40">
                      <Camera size={32} />
                      <span className="text-xs uppercase tracking-wider">Photo coming soon</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-black/30" />

              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close details"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-white hover:text-black"
              >
                <X size={18} />
              </button>

              {(onPrev || onNext) && (
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <NavButton label="Previous place" onClick={onPrev}>
                    <ChevronLeft size={18} />
                  </NavButton>
                  <NavButton label="Next place" onClick={onNext}>
                    <ChevronRight size={18} />
                  </NavButton>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="overflow-y-auto px-6 pb-6 sm:px-8 sm:pb-8">
              <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-400">
                <MapPin size={13} /> {site.regionName} Region, Ghana
              </p>
              <h2 id="site-details-title" className="mt-2 text-2xl font-bold sm:text-3xl">
                {site.name.trim()}
              </h2>
              <p className="mt-3 font-medium text-white/85">{site.description.trim()}</p>
              {siteDetails[siteSlug(site.name)] && (
                <p className="mt-3 leading-relaxed text-white/65">
                  {siteDetails[siteSlug(site.name)]}
                </p>
              )}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href={`/contact?${params}#contact-form`} className="btn-primary" onClick={onClose}>
                  Book a visit <ArrowRight size={16} />
                </Link>
                <a
                  href={whatsappLink(
                    `Hello Link MiG, I'd like to visit ${site.name.trim()} (${site.regionName} Region). Can you help me plan the trip?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> Ask on WhatsApp
                </a>
              </div>

              {site.credit && (
                <p className="mt-6 text-[11px] text-white/35">
                  Photo:{" "}
                  <a
                    href={site.credit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-white/60"
                  >
                    {site.credit.author}
                  </a>
                  , {site.credit.license}, via Wikimedia Commons
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={!onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-yellow-400 hover:text-black disabled:opacity-30"
    >
      {children}
    </button>
  );
}
