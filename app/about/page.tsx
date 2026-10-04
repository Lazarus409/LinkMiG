import type { Metadata } from "next";
import AboutCTA from "@/Components/layout/AboutSection/AboutCTA";
import AboutHero from "@/Components/layout/AboutSection/AboutHero";
import AboutOverview from "@/Components/layout/AboutSection/AboutOverview";
import AboutStats from "@/Components/layout/AboutSection/AboutStats";
import CoreValues from "@/Components/layout/AboutSection/CoreValues";
import WhyChooseUs from "@/Components/layout/AboutSection/WhyChooseUs";

export const metadata: Metadata = {
  title: "About | Link MiG Travel & Tour",
  description: "Our story, mission, and the values behind every journey we plan.",
};

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutOverview />
      <AboutStats />
      <CoreValues />
      <WhyChooseUs />
      <AboutCTA />
    </>
  );
}
