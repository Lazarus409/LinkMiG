import { Globe, Heart, Shield, Users } from "lucide-react";
import Reveal from "@/Components/ui/Reveal";

const values = [
  {
    title: "Trust & Safety",
    desc: "We prioritize the safety and trust of our clients in every journey.",
    icon: Shield,
  },
  {
    title: "Passion for Travel",
    desc: "Our team loves exploring the world and sharing experiences.",
    icon: Heart,
  },
  {
    title: "Global Reach",
    desc: "We provide seamless travel services across continents.",
    icon: Globe,
  },
  {
    title: "Customer Focus",
    desc: "Your satisfaction is our ultimate goal in every service.",
    icon: Users,
  },
];

export default function CoreValues() {
  return (
    <section className="section bg-ink-900">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-4">Our core values</p>
          <h2 className="heading-lg">What we stand for</h2>
          <p className="mt-4 text-white/60 md:text-lg">
            We strive to deliver excellence in every travel experience by
            following our core principles.
          </p>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2">
          {values.map(({ title, desc, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 0.08} className="flex gap-4">
              <span className="icon-badge">
                <Icon size={22} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
