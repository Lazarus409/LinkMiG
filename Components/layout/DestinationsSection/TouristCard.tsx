import Image from "next/image";
import { ArrowRight, Camera, MapPin } from "lucide-react";

interface TouristCardProps {
  name: string;
  image: string;
  description: string;
  region: string;
  onOpen: () => void;
}

export default function TouristCard({ name, image, description, region, onOpen }: TouristCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View details: ${name.trim()}`}
      className="group card flex h-full w-full flex-col overflow-hidden text-left transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40"
    >
      <div className="relative h-56 w-full overflow-hidden bg-ink-800">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.12),transparent_70%)] text-white/40">
            <Camera size={28} />
            <span className="text-xs uppercase tracking-wider">Photo coming soon</span>
          </div>
        )}
        <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-medium backdrop-blur">
          <MapPin size={12} className="text-yellow-400" /> {region}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{name.trim()}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{description.trim()}</p>
        <span className="mt-5 flex items-center gap-2 text-sm font-semibold text-yellow-400">
          View details
          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}
