"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { regionsData } from "./regionsData";
import TouristCard from "./TouristCard";
import DestinationHero from "./DestinationsHero";
import { cn } from "@/lib/utils";
import ReadyToGetStarted from "@/Components/layout/GetStarted";
import SiteDetailsModal from "./SiteDetailsModal";
import { siteSlug } from "./siteDetails";

type RegionKey = keyof typeof regionsData;

const regionKeys = Object.keys(regionsData) as RegionKey[];

function isRegionKey(value: string): value is RegionKey {
  return value in regionsData;
}

// Old links from before Ghana's 2018 region split
const regionAliases: Record<string, RegionKey> = { northern: "savannah" };

const allSites = regionKeys.flatMap((key) =>
  regionsData[key].sites.map((site) => ({
    ...site,
    regionKey: key,
    regionName: regionsData[key].name,
    slug: siteSlug(site.name),
  })),
);

function matches(text: string, query: string) {
  return text.toLowerCase().includes(query.toLowerCase());
}

export default function DestinationsExplorer({
  initialRegion,
  initialQuery,
  initialSite,
  checkIn,
  checkOut,
}: {
  initialRegion: string;
  initialQuery: string;
  initialSite: string;
  checkIn: string;
  checkOut: string;
}) {
  const linkedSite = allSites.find((s) => s.slug === initialSite);
  const [activeRegion, setActiveRegion] = useState<RegionKey>(() => {
    if (linkedSite) return linkedSite.regionKey;
    if (isRegionKey(initialRegion)) return initialRegion;
    if (regionAliases[initialRegion]) return regionAliases[initialRegion];
    // A search for a region name ("Volta", "Ashanti"...) opens that region
    const byName = regionKeys.find(
      (key) => initialQuery && matches(regionsData[key].name, initialQuery),
    );
    return byName ?? "greater-accra";
  });
  const [query, setQuery] = useState(
    regionKeys.some((key) => matches(regionsData[key].name, initialQuery))
      ? ""
      : initialQuery,
  );

  const [openSlug, setOpenSlug] = useState<string | null>(linkedSite?.slug ?? null);

  // Keep ?site= in the address bar so a place's details can be shared
  const openDetails = useCallback((slug: string | null) => {
    setOpenSlug(slug);
    const url = new URL(window.location.href);
    if (slug) url.searchParams.set("site", slug);
    else url.searchParams.delete("site");
    window.history.replaceState(window.history.state, "", url);
  }, []);
  const closeDetails = useCallback(() => openDetails(null), [openDetails]);

  const region = regionsData[activeRegion];
  const trimmed = query.trim();

  const sites = trimmed
    ? regionKeys.flatMap((key) =>
        regionsData[key].sites
          .filter(
            (site) =>
              matches(site.name, trimmed) ||
              matches(site.description, trimmed) ||
              matches(regionsData[key].name, trimmed),
          )
          .map((site) => ({ ...site, regionName: regionsData[key].name })),
      )
    : region.sites.map((site) => ({ ...site, regionName: region.name }));

  const listIndex = sites.findIndex((s) => siteSlug(s.name) === openSlug);
  const openSite =
    listIndex >= 0 ? sites[listIndex] : (allSites.find((s) => s.slug === openSlug) ?? null);
  const step = (delta: number) =>
    openDetails(siteSlug(sites[(listIndex + delta + sites.length) % sites.length].name));

  return (
    <>
      {/* Hero (keyed so the slideshow restarts per region) */}
      <DestinationHero
        key={activeRegion}
        images={region.images}
        region={region.name}
        siteCount={region.sites.length}
      />

      {/* Sticky toolbar: search + region tabs */}
      <div className="sticky top-[64px] z-30 border-y border-white/10 bg-ink-950/85 backdrop-blur-xl">
        <div className="container-page flex flex-col gap-3 py-3 lg:flex-row lg:items-start">
          <label className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 transition focus-within:border-yellow-400/60 lg:w-52 lg:shrink-0">
            <Search className="shrink-0 text-yellow-400" size={16} />
            <input
              type="text"
              placeholder="Search places…"
              aria-label="Search destinations"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="text-white/60 hover:text-yellow-400"
              >
                <X size={16} />
              </button>
            )}
          </label>

          <div className="-mx-4 flex gap-1.5 overflow-x-auto px-4 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
            {regionKeys.map((key) => {
              const selected = activeRegion === key && !trimmed;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveRegion(key);
                    setQuery("");
                  }}
                  aria-pressed={selected}
                  className={cn(
                    "relative isolate whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition lg:px-3",
                    selected ? "text-black" : "text-white/70 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {selected && (
                    <motion.span
                      layoutId="region-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-yellow-400"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {regionsData[key].name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tourist sites */}
      <section className="container-page py-14 md:py-20">
        <div className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            {trimmed ? <>Results for “{trimmed}”</> : <>Top places in {region.name}</>}
          </h2>
          <p className="shrink-0 text-sm text-white/50">
            {sites.length} {sites.length === 1 ? "place" : "places"}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={trimmed ? `search-${trimmed}` : activeRegion}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {sites.map((site) => (
              <TouristCard
                key={`${site.regionName}-${site.name}`}
                name={site.name}
                image={site.image}
                description={site.description}
                region={site.regionName}
                onOpen={() => openDetails(siteSlug(site.name))}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {trimmed && sites.length === 0 && (
          <div className="card mx-auto max-w-md p-10 text-center">
            <Search className="mx-auto text-yellow-400" size={28} />
            <p className="mt-4 font-medium">No destinations match your search</p>
            <p className="mt-1 text-sm text-white/55">
              Try a region name like “Volta” or “Central”, or{" "}
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-yellow-400 underline"
              >
                browse all regions
              </button>
              .
            </p>
          </div>
        )}
      </section>

      <ReadyToGetStarted
        title="Can’t decide where to go?"
        description="Tell us what you love and we’ll plan a trip around it, with transport, guides, and stays included."
        image={region.images[0]}
      />

      <SiteDetailsModal
        site={openSite}
        onClose={closeDetails}
        onPrev={listIndex >= 0 && sites.length > 1 ? () => step(-1) : undefined}
        onNext={listIndex >= 0 && sites.length > 1 ? () => step(1) : undefined}
        checkIn={checkIn}
        checkOut={checkOut}
      />
    </>
  );
}
