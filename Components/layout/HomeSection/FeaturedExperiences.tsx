"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Star, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SectionHeading from "@/Components/ui/SectionHeading";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const experiences = [
  {
    title: "Canopy Walk",
    location: "Cape Coast",
    days: 2,
    people: 5,
    price: "$1000",
    image: "/kakumCanopy.png",
    rating: 5,
    region: "central",
    site: "kakum-national-park",
  },
  {
    title: "Elephant Safari",
    location: "Mole National Park",
    days: 3,
    people: 4,
    price: "$1200",
    image: "/elephantSafari.png",
    rating: 5,
    region: "savannah",
    site: "mole-national-park",
  },
  {
    title: "Wli Waterfall Hike",
    location: "Volta Region",
    days: 1,
    people: 6,
    price: "$500",
    image: "/wliWaterfall.png",
    rating: 4.8,
    region: "volta",
    site: "wli-waterfalls",
  },
  {
    title: "Labadi Beach Fun",
    location: "Accra",
    days: 1,
    people: 8,
    price: "$300",
    image: "/labadiBeach.png",
    rating: 5,
    region: "greater-accra",
    site: "labadi-beach",
  },
];

export default function FeaturedExperiences() {
  return (
    <section className="section bg-ink-900">
      <div className="container-page">
        <SectionHeading
          eyebrow="Featured experiences"
          title="Hand-picked adventures across Ghana"
          description="Guided trips our travelers love most, with transport, guides, and logistics taken care of."
        />

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          breakpoints={{
            640: { slidesPerView: 1.6 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {experiences.map((exp) => (
            <SwiperSlide key={exp.title} className="!h-auto">
              <Link
                href={`/destinations?region=${exp.region}&site=${exp.site}`}
                className="group card flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold backdrop-blur">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" /> {exp.rating}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-1.5 text-xs text-white/50">
                    <MapPin size={13} /> {exp.location}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{exp.title}</h3>
                  <div className="mt-4 flex gap-4 text-xs text-white/60">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} /> {exp.days} {exp.days === 1 ? "day" : "days"}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={14} /> Up to {exp.people}
                    </span>
                  </div>
                  <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-4">
                    <p>
                      <span className="block text-xs text-white/45">From</span>
                      <span className="text-lg font-semibold text-yellow-400">{exp.price}</span>
                    </p>
                    <span className="text-sm font-medium text-white/70 transition group-hover:text-yellow-400">
                      View details →
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
