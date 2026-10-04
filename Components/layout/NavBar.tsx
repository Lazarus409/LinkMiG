"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { servicesData } from "@/lib/services-data";
import { regionsData } from "./DestinationsSection/regionsData";

const links = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Lock page scroll behind the mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-white/10 bg-ink-950/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-5",
      )}
    >
      <nav className="container-page flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Link MiG home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 shadow-[0_0_20px_-4px_rgba(250,204,21,0.6)]">
            <Image src="/logo.svg" alt="" width={24} height={24} />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold">Link MiG</span>
            <span className="block text-[10px] uppercase tracking-[0.3em] text-white/50">
              Travel & Tour
            </span>
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) =>
            link.name === "Services" ? (
              <li
                key={link.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onFocus={() => setServicesOpen(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) setServicesOpen(false);
                }}
              >
                <DesktopLink
                  href={link.href}
                  active={isActive(pathname, link.href)}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={cn("transition-transform", servicesOpen && "rotate-180")}
                  />
                </DesktopLink>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3"
                    >
                      <div className="rounded-2xl border border-white/10 bg-ink-900/95 p-2 shadow-2xl backdrop-blur-xl">
                        {servicesData.map((s) => {
                          const Icon = s.icon;
                          return (
                            <Link
                              key={s.slug}
                              href={`/services/${s.slug}`}
                              className="flex items-start gap-3 rounded-xl p-3 transition hover:bg-white/5"
                            >
                              <span className="icon-badge h-9 w-9 rounded-lg">
                                <Icon size={16} />
                              </span>
                              <span>
                                <span className="block text-sm font-medium">{s.name}</span>
                                <span className="block text-xs text-white/50">{s.tagline}</span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.name}>
                <DesktopLink href={link.href} active={isActive(pathname, link.href)}>
                  {link.name}
                </DesktopLink>
              </li>
            ),
          )}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm text-white/70 transition hover:text-yellow-400"
          >
            <Phone size={15} /> {site.phoneDisplay}
          </a>
          <Link href="/contact#contact-form" className="btn-primary px-5 py-2.5">
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100svh - 64px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto lg:hidden"
            onClick={(e) => {
              if ((e.target as HTMLElement).closest("a")) setMobileOpen(false);
            }}
          >
            <div className="container-page flex flex-col gap-1 py-6">
              <MobileLink href="/" label="Home" active={pathname === "/"} />

              <MobileGroup
                label="Destinations"
                open={mobileSection === "destinations"}
                onToggle={() =>
                  setMobileSection((s) => (s === "destinations" ? null : "destinations"))
                }
              >
                <MobileLink href="/destinations" label="All destinations" small />
                {Object.entries(regionsData).map(([slug, region]) => (
                  <MobileLink
                    key={slug}
                    href={`/destinations?region=${slug}`}
                    label={`${region.name} Region`}
                    small
                  />
                ))}
              </MobileGroup>

              <MobileGroup
                label="Services"
                open={mobileSection === "services"}
                onToggle={() =>
                  setMobileSection((s) => (s === "services" ? null : "services"))
                }
              >
                <MobileLink href="/services" label="All services" small />
                {servicesData.map((s) => (
                  <MobileLink key={s.slug} href={`/services/${s.slug}`} label={s.name} small />
                ))}
              </MobileGroup>

              <MobileLink href="/about" label="About" active={pathname === "/about"} />
              <MobileLink href="/contact" label="Contact" active={pathname === "/contact"} />

              <div className="mt-6 grid gap-3">
                <Link href="/contact#contact-form" className="btn-primary w-full">
                  Book a free consultation
                </Link>
                <a href={site.phoneHref} className="btn-secondary w-full">
                  <Phone size={16} /> {site.phoneDisplay}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ---------------- HELPERS ---------------- */
function DesktopLink({
  href,
  active,
  children,
  ...rest
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  "aria-expanded"?: boolean;
}) {
  return (
    <Link
      href={href}
      {...rest}
      className={cn(
        "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm transition",
        active ? "text-yellow-400" : "text-white/80 hover:text-white",
      )}
    >
      {children}
      {active && (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-x-4 -bottom-0.5 h-px bg-yellow-400"
        />
      )}
    </Link>
  );
}

function MobileGroup({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-3 text-lg font-medium"
      >
        {label}
        <ChevronDown size={18} className={cn("transition-transform", open && "rotate-180")} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col pb-3 pl-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileLink({
  href,
  label,
  small,
  active,
}: {
  href: string;
  label: string;
  small?: boolean;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "transition hover:text-yellow-400",
        small
          ? "py-2 text-sm text-white/65"
          : "border-b border-white/5 py-3 text-lg font-medium",
        active && "text-yellow-400",
      )}
    >
      {label}
    </Link>
  );
}
