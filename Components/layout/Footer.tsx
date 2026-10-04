import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SocialLinks from "@/Components/layout/SocialLinks";
import WhatsAppIcon from "@/Components/ui/WhatsAppIcon";
import { services, site, whatsappLink } from "@/lib/site";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900 text-white/70">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
        <div className="space-y-5">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400">
              <Image src="/logo.svg" alt="" width={23} height={23} />
            </span>
            <span className="font-display text-xl font-semibold text-white">{site.name}</span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-white/55">
            Travel, study, work, and live abroad with confidence. Personal
            guidance from your first question to the final check-in.
          </p>
          <a
            href={whatsappLink("Hello Link MiG, I'd like some help.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-5 py-2.5"
          >
            <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
          </a>
          <SocialLinks />
        </div>

        <FooterColumn title="Explore">
          {quickLinks.map((link) => (
            <FooterLink key={link.name} href={link.href}>
              {link.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Services">
          {services.map((s) => (
            <FooterLink key={s.name} href={s.href}>
              {s.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Get in touch">
          <li>
            <a href={site.phoneHref} className="flex items-center gap-3 transition hover:text-yellow-400">
              <Phone size={16} className="shrink-0 text-yellow-400" /> {site.phoneDisplay}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 transition hover:text-yellow-400"
            >
              <Mail size={16} className="shrink-0 text-yellow-400" /> {site.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={16} className="shrink-0 text-yellow-400" /> {site.officeCity}, Ghana
          </li>
          <li className="flex items-center gap-3">
            <Clock size={16} className="shrink-0 text-yellow-400" /> {site.hours}
          </li>
        </FooterColumn>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} LinkMiG. All rights reserved. ·{" "}
            <Link href="/credits" className="transition hover:text-yellow-400">
              Photo credits
            </Link>
          </p>
          <p>Made with care in {site.officeCity}, Ghana</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">{title}</h4>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="transition hover:text-yellow-400">
        {children}
      </Link>
    </li>
  );
}
