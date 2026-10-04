import type { Metadata } from "next";
import ContactForm from "@/Components/layout/ContactSection/ContactForm";
import ContactHero from "@/Components/layout/ContactSection/ContactHero";
import ContactOptions from "@/Components/layout/ContactSection/ContactOptions";
import FAQSection from "@/Components/layout/ContactSection/FAQSection";
import OfficeInfo from "@/Components/layout/ContactSection/OfficeInfo";

export const metadata: Metadata = {
  title: "Contact | Link MiG Travel & Tour",
  description: "Book a free consultation or reach us by phone, email, or WhatsApp.",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function Contact({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const destination = first(params.destination);
  const service = first(params.service);
  const checkIn = first(params.checkIn);
  const checkOut = first(params.checkOut);

  const messageLines = [
    destination && `I'm interested in visiting ${destination}.`,
    checkIn && `Check-in: ${checkIn}`,
    checkOut && `Check-out: ${checkOut}`,
  ].filter(Boolean);

  return (
    <>
      <ContactHero />

      <div className="container-page">
        <ContactOptions />
      </div>

      <section className="section">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          <ContactForm
            initialSubject={service ?? (destination ? "Tour Booking" : "")}
            initialDate={checkIn ?? ""}
            initialMessage={messageLines.join("\n")}
          />
          <OfficeInfo />
        </div>
      </section>

      <section className="section border-t border-white/10 bg-ink-900">
        <div className="container-page">
          <FAQSection />
        </div>
      </section>
    </>
  );
}
