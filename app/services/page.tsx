import type { Metadata } from "next";
import WhyChooseUs from "@/Components/layout/ServicesSection/WhyChooseUs";
import HowItWorks from "@/Components/layout/ServicesSection/Process";
import ReadyToGetStarted from "@/Components/layout/GetStarted";
import ServicesHero from "@/Components/layout/ServicesSection/ServicesHero";
import ServicesGrid from "@/Components/layout/ServicesSection/ServicesGrid";

export const metadata: Metadata = {
  title: "Services | Link MiG Travel & Tour",
  description:
    "Travel & visa consultations, study abroad, work & live abroad, football agency, and flight & hotel booking.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <ServicesGrid />
        </div>
      </section>
      <WhyChooseUs />
      <HowItWorks />
      <ReadyToGetStarted />
    </>
  );
}
