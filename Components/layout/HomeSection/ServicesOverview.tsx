import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/Components/ui/SectionHeading";
import ServicesGrid from "@/Components/layout/ServicesSection/ServicesGrid";

export default function ServicesOverview() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="What we do"
            title="One trusted partner for every journey abroad"
            description="Whether you're visiting, studying, working, or chasing a football career, we handle the details so you can focus on what's ahead."
            className="mb-0 md:mb-0"
          />
          <Link href="/services" className="btn-secondary shrink-0 self-start md:self-auto">
            All services <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </div>
    </section>
  );
}
