import Image from "next/image";
import Reveal from "@/Components/ui/Reveal";

export default function AboutOverview() {
  return (
    <section id="our-mission" className="section">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-4">Our mission</p>
          <h2 className="heading-lg">
            Transforming travel dreams into reality, one journey at a time.
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-white/70">
            <p>
              At Link MiG Travel and Tour, we believe that travel is more than
              just visiting new places. It’s about creating memories that last
              a lifetime. Our mission is to curate exceptional travel
              experiences that inspire, educate, and transform.
            </p>
            <p>
              Founded in 2025, we started with a simple vision: to make luxury
              travel accessible and personalized. Today, we’re a trusted
              partner for travelers seeking authentic and exclusive
              experiences worldwide.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/ccCastle.png"
              alt="Cape Coast Castle"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-white/10 bg-ink-900/90 px-6 py-4 shadow-2xl backdrop-blur-xl">
            <p className="font-display text-3xl font-semibold text-yellow-400">2025</p>
            <p className="text-xs uppercase tracking-wider text-white/50">Founded in Accra</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
