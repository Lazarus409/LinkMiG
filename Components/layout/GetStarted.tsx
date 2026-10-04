import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/Components/ui/Reveal";
import WhatsAppIcon from "@/Components/ui/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";

export default function ReadyToGetStarted({
  title = "Ready to get started?",
  description = "Book a free consultation with our experts today and let us help you plan your next journey, study abroad program, or international relocation.",
  image = "/bg51.png",
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="section">
      <div className="container-page">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center sm:px-12 md:py-20">
          <Image src={image} alt="" fill sizes="100vw" className="-z-10 scale-105 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink-950/90 via-ink-950/65 to-yellow-900/50" />

          <h2 className="heading-lg mx-auto max-w-2xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70 md:text-lg">{description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact#contact-form" className="btn-primary">
              Book free consultation <ArrowRight size={16} />
            </Link>
            <a
              href={whatsappLink("Hello Link MiG, I'd like to book a consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
