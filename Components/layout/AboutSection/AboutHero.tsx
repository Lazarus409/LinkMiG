import PageHero from "@/Components/ui/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      images={["/bg51.png"]}
      eyebrow="Our story"
      title={
        <>
          About <span className="text-yellow-400">Link MiG</span> Travel
        </>
      }
      description="Explore how we help you travel, work, study, and live abroad with personalized services and unforgettable experiences."
    >
      <a href="#our-mission" className="btn-secondary">
        Learn more
      </a>
    </PageHero>
  );
}
