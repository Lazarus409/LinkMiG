import { ArrowUpRight, Calendar, Mail, MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import Reveal from "@/Components/ui/Reveal";

const options = [
  {
    title: "Call us",
    desc: site.hours,
    value: site.phoneDisplay,
    href: site.phoneHref,
    icon: Phone,
  },
  {
    title: "Email us",
    desc: "We respond within 24 hours",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    title: "Live chat",
    desc: "Available 24/7",
    value: "WhatsApp support",
    href: whatsappLink("Hello Link MiG, I'd like some help."),
    external: true,
    icon: MessageCircle,
  },
  {
    title: "Book a consultation",
    desc: "Free 30-minute session",
    value: "Schedule a meeting",
    href: "#contact-form",
    icon: Calendar,
  },
];

export default function ContactOptions() {
  return (
    <div className="relative z-10 -mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {options.map(({ title, desc, value, href, external, icon: Icon }, i) => (
        <Reveal key={title} delay={i * 0.06}>
          <a
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="card group flex h-full flex-col bg-ink-900/90 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-yellow-400/40"
          >
            <div className="flex items-start justify-between">
              <span className="icon-badge transition group-hover:bg-yellow-400 group-hover:text-black">
                <Icon size={20} />
              </span>
              <ArrowUpRight
                size={18}
                className="text-white/30 transition group-hover:text-yellow-400"
              />
            </div>
            <h3 className="mt-5 font-semibold">{title}</h3>
            <p className="text-xs text-white/50">{desc}</p>
            <p className="mt-3 break-words text-sm font-medium text-yellow-400">{value}</p>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
