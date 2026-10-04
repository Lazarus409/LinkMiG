"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Full-bleed hero with crossfading background images and centered or left content.
export default function PageHero({
  images,
  eyebrow,
  title,
  description,
  children,
  align = "center",
  size = "page",
  interval = 6000,
}: {
  images: string[];
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  align?: "center" | "left";
  size?: "page" | "full";
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [images.length, interval]);

  return (
    <section
      className={cn(
        "relative isolate flex overflow-hidden",
        size === "full" ? "min-h-[100svh]" : "min-h-[520px] md:min-h-[600px]",
      )}
    >
      <div className="absolute inset-0 -z-10">
        {images.map((src, i) => (
          <div
            key={src}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1500ms]",
              i === index ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              // scale-up crops the dark frame some source images have
              className={cn(
                "object-cover",
                i === index ? "animate-kenburns" : "scale-110",
              )}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/55 to-ink-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(250,204,21,0.12),transparent_55%)]" />
      </div>

      <div
        className={cn(
          "container-page flex flex-col justify-center pb-20 pt-36 md:pt-40",
          align === "center" && "items-center text-center",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={cn("max-w-3xl", align === "center" && "mx-auto")}
        >
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="heading-xl">{title}</h1>
          {description && (
            <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 w-full"
          >
            {children}
          </motion.div>
        )}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === index ? "w-8 bg-yellow-400" : "w-1.5 bg-white/40 hover:bg-white/70",
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
}
