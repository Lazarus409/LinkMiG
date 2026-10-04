import SectionHeading from "@/Components/ui/SectionHeading";
import Reveal from "@/Components/ui/Reveal";

const steps = [
  {
    title: "Consultation",
    desc: "Book a free consultation to discuss your travel or relocation needs.",
  },
  {
    title: "Planning",
    desc: "We create a customized plan and gather necessary documentation.",
  },
  {
    title: "Processing",
    desc: "Our experts handle all applications and bookings on your behalf.",
  },
  {
    title: "Success",
    desc: "You receive your visa, tickets, or placement and start your journey.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="Simple & streamlined process"
          description="From initial consultation to successful completion, we guide you every step of the way."
        />

        <div className="relative grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12} className="relative text-center">
              <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400/40 bg-ink-950 font-display text-lg font-semibold text-yellow-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-white/60">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
