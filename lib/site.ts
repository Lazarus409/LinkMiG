import { servicesData } from "./services-data";

// Single source of truth for business contact details shown across the site.
export const site = {
  name: "Link MiG Travel & Tour",
  email: "info@linkmigtravel.com",
  // Mobile line, also used for WhatsApp
  phoneDisplay: "+233 54 123 6324",
  phoneHref: "tel:+233541236324",
  officePhoneDisplay: "0302 450 189",
  officePhoneHref: "tel:+233302450189",
  // International format, digits only (used by wa.me links)
  whatsappNumber: "233541236324",
  officeCity: "Accra",
  // Booking/newsletter emails are paused: the contact form goes straight to
  // WhatsApp and the newsletter is hidden. Set to true once SMTP is configured.
  emailEnabled: false,
  hours: "Mon–Fri: 8am – 6pm",
  // Leave empty to hide an icon until the real profile URL is known
  socials: {
    facebook: "",
    instagram: "",
    twitter: "",
  },
};

export const services = servicesData.map((s) => ({
  name: s.name,
  href: `/services/${s.slug}`,
}));

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
