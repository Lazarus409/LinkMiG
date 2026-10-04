import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-2xl md:mb-16",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="heading-lg">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
