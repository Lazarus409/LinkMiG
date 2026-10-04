import { Activity, Map, Smile, Star } from "lucide-react";
import Reveal from "@/Components/ui/Reveal";

const stats = [
  { value: "100+", label: "Destinations", icon: Map },
  { value: "150+", label: "Activities", icon: Activity },
  { value: "1k+", label: "Happy travelers", icon: Smile },
  { value: "5.0", label: "Rating", icon: Star },
];

export default function AboutStats() {
  return (
    <section className="pb-20 pt-8 md:pb-28">
      <div className="container-page">
        <Reveal className="card grid grid-cols-2 divide-white/10 md:grid-cols-4 md:divide-x">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-2 px-4 py-8 text-center">
              <Icon size={22} className="text-yellow-400" />
              <p className="font-display text-4xl font-semibold">{value}</p>
              <p className="text-xs uppercase tracking-wider text-white/50">{label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
