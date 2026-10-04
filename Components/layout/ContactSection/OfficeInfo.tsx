import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "@/Components/layout/SocialLinks";
import WhatsAppIcon from "@/Components/ui/WhatsAppIcon";
import { site, whatsappLink } from "@/lib/site";

const hasSocials = Object.values(site.socials).some(Boolean);

export default function OfficeInfo() {
  return (
    <div className="flex flex-col gap-5">
      {/* Advisor card */}
      <div className="card p-6">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-yellow-400/60">
              <Image
                src="/contbg.png"
                alt="Link MiG travel advisor"
                fill
                sizes="64px"
                className="scale-[1.6] object-cover object-[50%_40%]"
              />
            </div>
            <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-[#25D366] ring-2 ring-ink-950" />
          </div>
          <div>
            <p className="font-semibold">Talk to an advisor</p>
            <p className="text-sm text-white/55">Available 24/7 on WhatsApp</p>
          </div>
        </div>
        <a
          href={whatsappLink("Hello Link MiG, I'd like to speak with an advisor.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-5 w-full"
        >
          <WhatsAppIcon className="h-4 w-4" /> Start WhatsApp chat
        </a>
      </div>

      {/* Office card */}
      <div className="card p-6">
        <h3 className="mb-5 font-semibold">Our office</h3>
        <ul className="space-y-4 text-sm text-white/70">
          <li className="flex items-center gap-3">
            <MapPin size={18} className="shrink-0 text-yellow-400" /> {site.officeCity}, Ghana
          </li>
          <li>
            <a href={site.phoneHref} className="flex items-center gap-3 transition hover:text-yellow-400">
              <Phone size={18} className="shrink-0 text-yellow-400" /> {site.phoneDisplay}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 transition hover:text-yellow-400"
            >
              <Mail size={18} className="shrink-0 text-yellow-400" /> {site.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Clock size={18} className="shrink-0 text-yellow-400" /> {site.hours}
          </li>
        </ul>

        {hasSocials && (
          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="mb-3 text-sm font-medium">Follow us</p>
            <SocialLinks />
          </div>
        )}
      </div>
    </div>
  );
}
