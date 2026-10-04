import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "@/Components/ui/SectionHeading";
import Reveal from "@/Components/ui/Reveal";
import { cn } from "@/lib/utils";

const destinations = [
  {
    title: "Cape Coast Castle",
    location: "Central Region",
    tours: 5,
    region: "central",
    site: "cape-coast-castle",
    image: "/ccCastle.png",
  },
  {
    title: "Labadi Beach",
    location: "Accra",
    tours: 8,
    region: "greater-accra",
    site: "labadi-beach",
    image: "/labadiBeach.png",
  },
  {
    title: "Mole National Park",
    location: "Savannah Region",
    tours: 3,
    region: "savannah",
    site: "mole-national-park",
    image: "/moleNationalPark.png",
  },
  {
    title: "Wli Waterfall",
    location: "Volta Region",
    tours: 2,
    region: "volta",
    site: "wli-waterfalls",
    image: "/wliWaterfall.png",
  },
];

export default function PopularDestinations() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Popular destinations"
            title="Where our travelers are heading"
            className="mb-0 md:mb-0"
          />
          <Link href="/destinations" className="btn-secondary shrink-0 self-start md:self-auto">
            Explore all regions <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
          {destinations.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className={cn(
                i === 0 && "lg:col-span-2 lg:row-span-2",
                i === 3 && "lg:col-span-2",
              )}
            >
              <Link
                href={`/destinations?region=${item.region}&site=${item.site}`}
                className={cn(
                  "group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-6",
                  i === 0 ? "min-h-[360px] lg:min-h-[540px]" : "min-h-[260px]",
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  className="-z-10 object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <p className="flex items-center gap-1.5 text-xs font-medium text-yellow-400">
                  <MapPin size={13} /> {item.location}
                </p>
                <h3 className={cn("mt-1 font-display font-semibold", i === 0 ? "text-3xl" : "text-xl")}>
                  {item.title}
                </h3>
                <p className="mt-1 flex items-center justify-between text-sm text-white/65">
                  {item.tours} tours available
                  <ArrowRight
                    size={18}
                    className="translate-x-0 text-white/50 transition group-hover:translate-x-1 group-hover:text-yellow-400"
                  />
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
