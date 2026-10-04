import { Globe, Heart, Shield, Star } from "lucide-react";
import SectionHeading from "@/Components/ui/SectionHeading";
import Reveal from "@/Components/ui/Reveal";

const features = [
  {
    title: "Trusted & Reliable",
    desc: "We prioritize your safety and provide trusted travel services.",
    icon: Shield,
  },
  {
    title: "Global Destinations",
    desc: "Access exclusive experiences across the globe.",
    icon: Globe,
  },
  {
    title: "Customer Care",
    desc: "24/7 support to make your journey smooth and enjoyable.",
    icon: Heart,
  },
  {
    title: "Highly Rated",
    desc: "Loved by our travelers for excellent, personal service.",
    icon: Star,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why choose us"
          title="Travel with people who care"
          description="Experience excellence, personalized services, and unforgettable adventures with our travel experts."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }, i) => (
            <Reveal
              key={title}
              delay={i * 0.08}
              className="card group p-7 text-center transition hover:-translate-y-1 hover:border-yellow-400/30"
            >
              <span className="icon-badge mx-auto mb-5 transition group-hover:bg-yellow-400 group-hover:text-black">
                <Icon size={22} />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
