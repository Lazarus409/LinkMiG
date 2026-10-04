import FeaturedExperiences from "@/Components/layout/HomeSection/FeaturedExperiences";
import HeroSection from "@/Components/layout/HomeSection/HeroSection";
import Newsletter from "@/Components/layout/HomeSection/Newsletter";
import PopularDestinations from "@/Components/layout/HomeSection/PopularDestinations";
import ServicesOverview from "@/Components/layout/HomeSection/ServicesOverview";
import Testimonials from "@/Components/layout/HomeSection/Testimonials";
import ReadyToGetStarted from "@/Components/layout/GetStarted";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <FeaturedExperiences />
      <PopularDestinations />
      <Testimonials />
      <ReadyToGetStarted />
      {site.emailEnabled && <Newsletter />}
    </>
  );
}
