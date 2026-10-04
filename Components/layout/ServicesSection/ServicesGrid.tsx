import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/lib/services-data";
import { cn } from "@/lib/utils";
import Reveal from "@/Components/ui/Reveal";

// Bento layout: two wide cards on top, three below.
export default function ServicesGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-6 md:gap-5">
      {servicesData.map((service, i) => {
        const Icon = service.icon;
        return (
          <Reveal
            key={service.slug}
            delay={i * 0.06}
            className={cn(i < 2 ? "md:col-span-3" : "md:col-span-2")}
          >
            <Link
              href={`/services/${service.slug}`}
              className={cn(
                "group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-6 transition duration-500 hover:border-yellow-400/40 md:p-7",
                i < 2 ? "min-h-[320px]" : "min-h-[280px]",
              )}
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="-z-10 scale-105 object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/20" />

              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur transition group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black">
                <ArrowUpRight size={18} />
              </span>

              <span className="icon-badge mb-4 bg-black/40 backdrop-blur">
                <Icon size={22} />
              </span>
              <h3 className="font-display text-2xl font-semibold">{service.name}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/65">
                {service.tagline}
              </p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-yellow-400">
                {service.pricing.summary} {service.pricing.highlight}
              </p>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
