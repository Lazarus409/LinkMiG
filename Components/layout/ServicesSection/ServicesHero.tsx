import PageHero from "@/Components/ui/PageHero";

const images = ["/bg3.png", "/bg4.png", "/bg51.png", "/bg2.png", "/bg.png"];

export default function ServicesHero() {
  return (
    <PageHero
      images={images}
      eyebrow="Our services"
      title={
        <>
          Everything you need to go{" "}
          <span className="text-yellow-400">further</span>
        </>
      }
      description="Trusted travel, education, migration, and sports services designed to help you succeed globally."
    />
  );
}
