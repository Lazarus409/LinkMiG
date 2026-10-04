import { Heart, Shield, Star, Zap } from "lucide-react";
import SectionHeading from "@/Components/ui/SectionHeading";
import Reveal from "@/Components/ui/Reveal";

const features = [
  {
    title: "Trusted Expertise",
    desc: "Experienced consultants in international travel and immigration services.",
    icon: Shield,
  },
  {
    title: "Fast Processing",
    desc: "Quick turnaround times for all documentation and booking requests.",
    icon: Zap,
  },
  {
    title: "Personalized Service",
    desc: "Dedicated consultants tailored to your specific needs.",
    icon: Heart,
  },
  {
    title: "Success Rate",
    desc: "98% approval rate for visa and immigration applications.",
    icon: Star,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-ink-900">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why choose us"
          title="Your trusted travel partner"
          description="We combine expertise, efficiency, and personalized service to deliver exceptional results."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 0.08} className="card p-7 transition hover:border-yellow-400/30">
                <span className="icon-badge mb-6">
                  <Icon size={22} />
                </span>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{f.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
